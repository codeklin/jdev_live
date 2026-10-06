"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { PageFlip } from "page-flip"
import Image from "next/image"
import { CatalogItem } from "../../../lib/workData"

interface Props {
  item: CatalogItem
  onFlipNext: () => void
  onFlipPrev: () => void
  onReady: (api: PageFlipHandle) => void
}

export interface PageFlipHandle {
  flipNext: () => void
  flipPrev: () => void
}

// ─── Mobile swipe viewer with flip animation ─────────────────────────────────
function MobileViewer({
  pages,
  title,
  onReady,
}: {
  pages: string[]
  title: string
  onReady: (api: PageFlipHandle) => void
}) {
  const [index, setIndex] = useState(0)
  // "left" = flipping forward, "right" = flipping back, null = idle
  const [flipDir, setFlipDir] = useState<"left" | "right" | null>(null)
  const [displayIndex, setDisplayIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const flip = useCallback((dir: "left" | "right", nextIdx: number) => {
    if (flipDir !== null) return           // already animating
    setFlipDir(dir)
    setTimeout(() => {
      setIndex(nextIdx)
      setDisplayIndex(nextIdx)
      setFlipDir(null)
    }, 500)
  }, [flipDir])

  const prev = useCallback(() => {
    setIndex((i) => {
      const next = Math.max(0, i - 1)
      if (next !== i) flip("right", next)
      return i
    })
  }, [flip])

  const next = useCallback(() => {
    setIndex((i) => {
      const next = Math.min(pages.length - 1, i + 1)
      if (next !== i) flip("left", next)
      return i
    })
  }, [flip, pages.length])

  useEffect(() => {
    onReady({ flipNext: next, flipPrev: prev })
  }, [next, prev, onReady])

  // Flip keyframes via inline style — avoids needing new Tailwind config
  const flipStyle: React.CSSProperties = flipDir === null ? {
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
  } : {
    animation: `pageCurl${flipDir === "left" ? "Forward" : "Back"} 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
    transformOrigin: flipDir === "left" ? "left center" : "right center",
  }

  return (
    <div
      className="flex flex-col items-center w-full"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
        touchStartX.current = null
      }}
    >
      {/* Page curl keyframes — skew + scale + shadow simulates paper bending */}
      <style>{`
        @keyframes pageCurlForward {
          0%   { transform: perspective(1200px) rotateY(0deg)   skewY(0deg)   scaleX(1);    box-shadow: 0 4px 24px rgba(0,0,0,0.4); }
          25%  { transform: perspective(1200px) rotateY(-45deg) skewY(2deg)   scaleX(0.92); box-shadow: -12px 8px 32px rgba(0,0,0,0.6); }
          50%  { transform: perspective(1200px) rotateY(-90deg) skewY(4deg)   scaleX(0.7);  box-shadow: -20px 8px 40px rgba(0,0,0,0.7); opacity: 0.5; }
          75%  { transform: perspective(1200px) rotateY(-45deg) skewY(-2deg)  scaleX(0.92); box-shadow: -8px 6px 28px rgba(0,0,0,0.5); opacity: 0.8; }
          100% { transform: perspective(1200px) rotateY(0deg)   skewY(0deg)   scaleX(1);    box-shadow: 0 4px 24px rgba(0,0,0,0.4); opacity: 1; }
        }
        @keyframes pageCurlBack {
          0%   { transform: perspective(1200px) rotateY(0deg)  skewY(0deg)   scaleX(1);    box-shadow: 0 4px 24px rgba(0,0,0,0.4); }
          25%  { transform: perspective(1200px) rotateY(45deg) skewY(-2deg)  scaleX(0.92); box-shadow: 12px 8px 32px rgba(0,0,0,0.6); }
          50%  { transform: perspective(1200px) rotateY(90deg) skewY(-4deg)  scaleX(0.7);  box-shadow: 20px 8px 40px rgba(0,0,0,0.7); opacity: 0.5; }
          75%  { transform: perspective(1200px) rotateY(45deg) skewY(2deg)   scaleX(0.92); box-shadow: 8px 6px 28px rgba(0,0,0,0.5); opacity: 0.8; }
          100% { transform: perspective(1200px) rotateY(0deg)  skewY(0deg)   scaleX(1);    box-shadow: 0 4px 24px rgba(0,0,0,0.4); opacity: 1; }
        }
      `}</style>

      <p className="text-sm text-gray-400 mb-3 tabular-nums select-none">
        {index + 1} / {pages.length}
      </p>

      {/* Page with flip animation */}
      <div
        className="relative w-full rounded-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: "3/4", ...flipStyle }}
      >
        <Image
          src={pages[displayIndex]}
          alt={`${title} page ${displayIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority={displayIndex === 0}
        />
      </div>

      <p className="text-[11px] text-gray-600 mt-3 select-none">
        Swipe or use arrows to turn pages
      </p>
    </div>
  )
}

// ─── Desktop flipbook viewer ──────────────────────────────────────────────────
export default function FlipBookInner({ item, onReady }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlip | null>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [view, setView] = useState<"cover" | "book">("cover")
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(item.pageCount)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)

  const innerPages = item.pages.slice(1)

  // Detect mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Measure wrapper
  useEffect(() => {
    if (!wrapperRef.current || isMobile) return
    const w = wrapperRef.current.offsetWidth || 800
    const pageW = Math.max(180, Math.floor((w - 112) / 2))
    const pageH = Math.floor(pageW * (733 / 550))
    setDims({ w: pageW, h: pageH })
  }, [isMobile])

  // Init page-flip (desktop only)
  useEffect(() => {
    if (isMobile || view !== "book" || !dims || !containerRef.current) return
    if (innerPages.length === 0) return

    setStatus("loading")
    let pf: PageFlip

    try {
      pf = new PageFlip(containerRef.current, {
        width: dims.w,
        height: dims.h,
        size: "fixed",
        showCover: false,
        mobileScrollSupport: false,
        drawShadow: true,
        flippingTime: 600,
        usePortrait: false,
      })
    } catch {
      setErrorMsg("Could not initialise flipbook.")
      setStatus("error")
      return
    }

    const timeout = setTimeout(() => {
      setErrorMsg("Images took too long to load.")
      setStatus("error")
    }, 12000)

    pf.on("flip", (e) => { setCurrentPage(e.data + 2) })
    pf.on("init", () => {
      clearTimeout(timeout)
      setStatus("ready")
      onReady({
        flipNext: () => pf.flipNext(),
        flipPrev: () => {
          if (pf.getCurrentPageIndex() === 0) {
            setView("cover")
            setCurrentPage(1)
          } else {
            pf.flipPrev()
          }
        },
      })
    })

    pf.loadFromImages(innerPages)
    pageFlipRef.current = pf

    return () => {
      clearTimeout(timeout)
      try { pf.destroy() } catch { /* ignore */ }
      pageFlipRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, dims, isMobile])

  // Cover handle for desktop
  const coverHandle: PageFlipHandle = {
    flipNext: () => { if (innerPages.length > 0) { setView("book"); setCurrentPage(2) } },
    flipPrev: () => {},
  }

  useEffect(() => { onReady(coverHandle) }, [])              // eslint-disable-line
  useEffect(() => { if (view === "cover") onReady(coverHandle) }, [view]) // eslint-disable-line

  // ── Mobile: full-screen swipe viewer ────────────────────────────────────
  if (isMobile) {
    return <MobileViewer pages={item.pages} title={item.title} onReady={onReady} />
  }

  // ── Desktop: cover + page-flip spreads ──────────────────────────────────
  const spreadW = dims ? dims.w * 2 : 0
  const spreadH = dims ? dims.h : 0

  return (
    <div ref={wrapperRef} className="relative flex flex-col items-center w-full">
      <p className="text-sm text-gray-400 mb-4 tabular-nums select-none">
        {currentPage} / {totalPages}
      </p>

      {/* Cover */}
      {view === "cover" && dims && (
        <div
          className="relative rounded shadow-2xl overflow-hidden cursor-pointer"
          style={{ width: dims.w, height: dims.h }}
          onClick={() => { if (innerPages.length > 0) { setView("book"); setCurrentPage(2) } }}
          title="Click to open"
        >
          <Image
            src={item.pages[0]}
            alt={`${item.title} cover`}
            fill
            className="object-cover"
            sizes={`${dims.w}px`}
            priority
          />
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="bg-black/60 text-white text-[11px] px-3 py-1 rounded-full">
              Click or press → to open
            </span>
          </div>
        </div>
      )}

      {/* Book spreads */}
      {view === "book" && (
        <>
          {status === "loading" && (
            <div className="flex items-center justify-center" style={{ width: spreadW, height: spreadH }}>
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center justify-center" style={{ width: spreadW, height: spreadH }}>
              <p className="text-red-400 text-sm text-center px-6">{errorMsg}</p>
            </div>
          )}
          <div
            ref={containerRef}
            style={{
              width: spreadW,
              height: spreadH,
              visibility: status === "ready" ? "visible" : "hidden",
            }}
            aria-label={`${item.title} flip book`}
          />
        </>
      )}
    </div>
  )
}

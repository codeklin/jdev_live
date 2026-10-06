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

// ─── Mobile swipe viewer ──────────────────────────────────────────────────────
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
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const next = useCallback(() => setIndex((i) => Math.min(pages.length - 1, i + 1)), [pages.length])

  useEffect(() => {
    onReady({ flipNext: next, flipPrev: prev })
  }, [next, prev, onReady])

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
      <p className="text-sm text-gray-400 mb-3 tabular-nums select-none">
        {index + 1} / {pages.length}
      </p>

      {/* Full-width image */}
      <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
        <Image
          src={pages[index]}
          alt={`${title} page ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority={index === 0}
        />
      </div>

      <p className="text-[11px] text-gray-600 mt-3 select-none">
        Swipe left / right to turn pages
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

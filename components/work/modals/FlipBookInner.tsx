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

export default function FlipBookInner({ item, onReady }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlip | null>(null)

  // "cover" = showing page 1 full-width; "book" = page-flip handles the rest
  const [view, setView] = useState<"cover" | "book">("cover")
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(item.pageCount)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)

  // Inner pages = everything after the cover
  const innerPages = item.pages.slice(1)

  // ── Measure wrapper once on mount ────────────────────────────────────────
  useEffect(() => {
    if (!wrapperRef.current) return
    const w = wrapperRef.current.offsetWidth || 800
    const pageW = Math.max(180, Math.floor((w - 112) / 2))
    const pageH = Math.floor(pageW * (733 / 550))
    setDims({ w: pageW, h: pageH })
  }, [])

  // ── Init page-flip only when switching to book view ───────────────────────
  useEffect(() => {
    if (view !== "book" || !dims || !containerRef.current) return
    if (innerPages.length === 0) return

    setStatus("loading")
    let pf: PageFlip

    try {
      pf = new PageFlip(containerRef.current, {
        width: dims.w,
        height: dims.h,
        size: "fixed",
        showCover: false,   // we handled the cover ourselves
        mobileScrollSupport: true,
        drawShadow: true,
        flippingTime: 600,
        usePortrait: true,
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

    pf.on("flip", (e) => {
      // +2 because inner pages start at page 2 of the catalogue
      setCurrentPage(e.data + 2)
    })

    pf.on("init", () => {
      clearTimeout(timeout)
      setStatus("ready")
      onReady({
        flipNext: () => pf.flipNext(),
        flipPrev: () => {
          // If on the first inner spread, go back to cover
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
  }, [view, dims])

  // ── Flip handles exposed while on cover ───────────────────────────────────
  const coverHandle: PageFlipHandle = {
    flipNext: () => {
      if (innerPages.length > 0) {
        setView("book")
        setCurrentPage(2)
      }
    },
    flipPrev: () => { /* already at start */ },
  }

  // Notify parent of cover handle on mount
  useEffect(() => {
    onReady(coverHandle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update parent handle when switching views
  useEffect(() => {
    if (view === "cover") onReady(coverHandle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view])

  const spreadW = dims ? dims.w * 2 : 0
  const spreadH = dims ? dims.h : 0

  return (
    <div ref={wrapperRef} className="relative flex flex-col items-center w-full">
      {/* Page counter */}
      <p className="text-sm text-gray-400 mb-4 tabular-nums select-none">
        {currentPage} / {totalPages}
      </p>

      {/* ── COVER VIEW: single page centred ── */}
      {view === "cover" && dims && (
        <div
          className="relative rounded shadow-2xl overflow-hidden cursor-pointer"
          style={{ width: dims.w, height: dims.h }}
          onClick={() => {
            if (innerPages.length > 0) { setView("book"); setCurrentPage(2) }
          }}
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
          {/* "Open" hint */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="bg-black/60 text-white text-[11px] px-3 py-1 rounded-full">
              Click or press → to open
            </span>
          </div>
        </div>
      )}

      {/* ── BOOK VIEW: page-flip handles inner pages ── */}
      {view === "book" && (
        <>
          {/* Spinner */}
          {status === "loading" && (
            <div
              className="flex items-center justify-center"
              style={{ width: spreadW, height: spreadH }}
            >
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div
              className="flex items-center justify-center"
              style={{ width: spreadW, height: spreadH }}
            >
              <p className="text-red-400 text-sm text-center px-6">{errorMsg}</p>
            </div>
          )}

          {/*
            page-flip container — always rendered in book view,
            visibility controlled via CSS to avoid DOM conflicts
          */}
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

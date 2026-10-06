"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { PageFlip } from "page-flip"
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

  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [errorMsg, setErrorMsg] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(item.pageCount)
  // Explicit pixel size we pass to page-flip AND set on the container div
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)

  const flipNext = useCallback(() => { pageFlipRef.current?.flipNext() }, [])
  const flipPrev = useCallback(() => { pageFlipRef.current?.flipPrev() }, [])

  useEffect(() => {
    if (!wrapperRef.current) return

    // Measure wrapper, then set fixed dims so page-flip has something to paint into
    const wrapperW = wrapperRef.current.offsetWidth || 800
    // Subtract arrow button space (56px each side = 112px total)
    const availableW = wrapperW - 112
    // Show two pages side by side; each page is half the spread
    const pageW = Math.max(200, Math.floor(availableW / 2))
    const pageH = Math.floor(pageW * (733 / 550))
    setDims({ w: pageW, h: pageH })
  }, [])

  useEffect(() => {
    if (!dims || !containerRef.current) return

    let pf: PageFlip
    try {
      pf = new PageFlip(containerRef.current, {
        width: dims.w,
        height: dims.h,
        size: "fixed",         // fixed = use exact w/h, no stretching
        showCover: true,
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
      setErrorMsg("Images took too long to load. Check they exist in /public.")
      setStatus("error")
    }, 12000)

    pf.on("flip", (e) => { setCurrentPage(e.data + 1) })
    pf.on("init", () => {
      clearTimeout(timeout)
      setTotalPages(pf.getPageCount())
      setCurrentPage(pf.getCurrentPageIndex() + 1)
      setStatus("ready")
      onReady({ flipNext, flipPrev })
    })

    pf.loadFromImages(item.pages)
    pageFlipRef.current = pf

    return () => {
      clearTimeout(timeout)
      try { pf.destroy() } catch { /* ignore */ }
      pageFlipRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dims, item.id])

  return (
    <div ref={wrapperRef} className="relative flex flex-col items-center w-full">

      {/* Page counter */}
      <p
        className="text-sm text-gray-400 mb-4 tabular-nums select-none"
        style={{ visibility: status === "ready" ? "visible" : "hidden" }}
      >
        {currentPage} / {totalPages}
      </p>

      {/* Spinner — absolutely positioned so it never sits next to containerRef */}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <p className="text-red-400 text-sm text-center px-6">{errorMsg}</p>
        </div>
      )}

      {/*
        page-flip container — ALWAYS rendered, never conditionally mounted.
        Given explicit pixel dimensions so page-flip knows exactly how big to paint.
      */}
      <div
        ref={containerRef}
        style={{
          width: dims ? dims.w * 2 : 0,   // spread = two pages wide
          height: dims ? dims.h : 0,
          visibility: status === "ready" ? "visible" : "hidden",
        }}
        aria-label={`${item.title} flip book viewer`}
      />
    </div>
  )
}

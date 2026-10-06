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
  // containerRef lives in a div that is ALWAYS rendered — page-flip owns it exclusively
  const containerRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlip | null>(null)

  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [errorMsg, setErrorMsg] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(item.pageCount)

  const flipNext = useCallback(() => { pageFlipRef.current?.flipNext() }, [])
  const flipPrev = useCallback(() => { pageFlipRef.current?.flipPrev() }, [])

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return

    const wrapperWidth = wrapperRef.current.offsetWidth || 800
    const pageW = Math.max(200, Math.floor(wrapperWidth / 2))
    const pageH = Math.floor(pageW * (733 / 550))

    let pf: PageFlip
    try {
      pf = new PageFlip(containerRef.current, {
        width: pageW,
        height: pageH,
        size: "stretch",
        minWidth: 150,
        maxWidth: 600,
        minHeight: 200,
        maxHeight: 800,
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
      setErrorMsg("Images took too long to load.")
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
  }, [item.id])

  return (
    <div ref={wrapperRef} className="relative flex flex-col items-center w-full">

      {/* Page counter — always rendered, just hidden while loading */}
      <p
        className="text-sm text-gray-400 mb-4 tabular-nums select-none"
        style={{ visibility: status === "ready" ? "visible" : "hidden" }}
      >
        {currentPage} / {totalPages}
      </p>

      {/* Spinner — overlaid via absolute, does NOT sit next to containerRef */}
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Error — same: overlaid, not a sibling of containerRef in the DOM flow */}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-red-400 text-sm text-center px-6">{errorMsg}</p>
        </div>
      )}

      {/*
        page-flip container — ALWAYS in the DOM, never conditionally rendered.
        React must never insert/remove siblings inside this div.
        Visibility is controlled via CSS only.
      */}
      <div
        ref={containerRef}
        className="w-full"
        style={{ visibility: status === "ready" ? "visible" : "hidden" }}
        aria-label={`${item.title} flip book viewer`}
      />
    </div>
  )
}

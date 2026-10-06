"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { PageFlip } from "page-flip"
import { CatalogItem } from "../../../lib/workData"

interface Props {
  item: CatalogItem
  onFlipNext: () => void
  onFlipPrev: () => void
  /** Called once PageFlip is ready so the parent can drive next/prev via refs */
  onReady: (api: PageFlipHandle) => void
}

export interface PageFlipHandle {
  flipNext: () => void
  flipPrev: () => void
}

export default function FlipBookInner({ item, onReady }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlip | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(item.pageCount)

  // Expose flip API to parent via onReady callback
  const flipNext = useCallback(() => {
    pageFlipRef.current?.flipNext()
  }, [])

  const flipPrev = useCallback(() => {
    pageFlipRef.current?.flipPrev()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const pf = new PageFlip(containerRef.current, {
      width: 550,
      height: 733,
      size: "stretch",
      minWidth: 280,
      maxWidth: 1000,
      minHeight: 373,
      maxHeight: 1333,
      showCover: true,
      mobileScrollSupport: true,
      drawShadow: true,
      flippingTime: 700,
      usePortrait: true,
    })

    // Load pages from the item's image paths
    pf.loadFromImages(item.pages)

    // Track page changes — `e.data` is the 0-based page index
    pf.on("flip", (e) => {
      setCurrentPage(e.data + 1)
    })

    // Once initialised, hide spinner and notify parent
    pf.on("init", (_e) => {
      setTotalPages(pf.getPageCount())
      setCurrentPage(pf.getCurrentPageIndex() + 1)
      setIsLoading(false)
      onReady({ flipNext, flipPrev })
    })

    pageFlipRef.current = pf

    return () => {
      try {
        pf.destroy()
      } catch {
        // Ignore cleanup errors (e.g. if DOM is already gone)
      }
      pageFlipRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id])

  return (
    <div className="flex flex-col items-center w-full">
      {/* Page counter */}
      <p className="text-sm text-gray-400 mb-4 tabular-nums select-none">
        {isLoading ? "Loading…" : `${currentPage} / ${totalPages}`}
      </p>

      {/* Loading spinner — shown until page-flip fires 'init' */}
      {isLoading && (
        <div className="flex items-center justify-center h-96">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* PageFlip container — page-flip injects its canvas/HTML here */}
      <div
        ref={containerRef}
        className="w-full max-w-4xl mx-auto"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
        aria-label={`${item.title} flip book viewer`}
      />
    </div>
  )
}

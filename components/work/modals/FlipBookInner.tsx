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
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(item.pageCount)
  const [error, setError] = useState<string | null>(null)

  const flipNext = useCallback(() => { pageFlipRef.current?.flipNext() }, [])
  const flipPrev = useCallback(() => { pageFlipRef.current?.flipPrev() }, [])

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return

    // page-flip needs a concrete pixel size — read the wrapper's rendered width
    const wrapperWidth = wrapperRef.current.offsetWidth || 800
    // Keep a nice 4:3 portrait page ratio based on half the spread width
    const pageW = Math.floor(wrapperWidth / 2)
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
    } catch (e) {
      setError("Could not initialise flipbook.")
      setIsLoading(false)
      return
    }

    pf.on("flip", (e) => { setCurrentPage(e.data + 1) })

    pf.on("init", () => {
      setTotalPages(pf.getPageCount())
      setCurrentPage(pf.getCurrentPageIndex() + 1)
      setIsLoading(false)
      onReady({ flipNext, flipPrev })
    })

    // Fallback: if init never fires after 10 s, assume something went wrong
    const timeout = setTimeout(() => {
      if (isLoading) {
        setError("Flipbook took too long to load. Check that the image files exist.")
        setIsLoading(false)
      }
    }, 10000)

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
    <div ref={wrapperRef} className="flex flex-col items-center w-full">
      {/* Page counter */}
      <p className="text-sm text-gray-400 mb-4 tabular-nums select-none">
        {isLoading ? "Loading…" : error ? "" : `${currentPage} / ${totalPages}`}
      </p>

      {/* Error state */}
      {error && (
        <div className="flex items-center justify-center h-96 text-center px-6">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Spinner */}
      {isLoading && !error && (
        <div className="flex items-center justify-center h-96">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* PageFlip mounts here — needs display:block and a real size */}
      <div
        ref={containerRef}
        className="w-full"
        style={{
          visibility: isLoading || error ? "hidden" : "visible",
          minHeight: isLoading || error ? 0 : undefined,
        }}
        aria-label={`${item.title} flip book viewer`}
      />
    </div>
  )
}

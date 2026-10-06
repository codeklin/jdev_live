"use client"

import { useEffect, useRef, useState, useCallback, RefObject } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { SocialItem } from "../../../lib/workData"

interface Props {
  item: SocialItem
  onClose: () => void
  /** Ref to the element that triggered opening — focus returns here on close */
  triggerRef?: RefObject<HTMLElement>
}

export default function MockupCarousel({ item, onClose, triggerRef }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [snapCount, setSnapCount] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // ── Close handler — returns focus to trigger ───────────────────────────────
  const handleClose = useCallback(() => {
    onClose()
    setTimeout(() => triggerRef?.current?.focus(), 0)
  }, [onClose, triggerRef])

  // ── Focus trap & initial focus ─────────────────────────────────────────────
  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !modalRef.current) return

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener("keydown", handleFocusTrap)
    return () => document.removeEventListener("keydown", handleFocusTrap)
  }, [])

  // ── Keyboard navigation ────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          e.preventDefault()
          emblaApi?.scrollNext()
          break
        case "ArrowLeft":
          e.preventDefault()
          emblaApi?.scrollPrev()
          break
        case "Escape":
          handleClose()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi])

  // ── Embla: sync state on select / reInit ──────────────────────────────────
  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setSnapCount(emblaApi.scrollSnapList().length)
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateCarouselState()
    emblaApi.on("select", updateCarouselState)
    emblaApi.on("reInit", updateCarouselState)
    return () => {
      emblaApi.off("select", updateCarouselState)
      emblaApi.off("reInit", updateCarouselState)
    }
  }, [emblaApi, updateCarouselState])

  // ── Backdrop click ─────────────────────────────────────────────────────────
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) handleClose()
    },
    [handleClose]
  )

  // ── Render ─────────────────────────────────────────────────────────────────
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={handleBackdropClick}
    >
      {/* Inner container — stops backdrop-click propagation for non-backdrop clicks */}
      <div
        ref={modalRef}
        className="relative flex flex-col flex-1 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
          <div>
            <h2 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs sm:max-w-sm">
              {item.title}
            </h2>
            {item.clientName && (
              <p className="text-xs text-gray-400 mt-0.5">{item.clientName}</p>
            )}
          </div>

          {/* Close button — receives initial focus */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close carousel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Carousel area with side arrow buttons ────────────────────────── */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden px-14 py-6">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
                       text-gray-400 hover:text-white transition-colors
                       bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25
                       rounded-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white/40
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5
                       disabled:hover:border-white/10 disabled:hover:text-gray-400"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Embla viewport */}
          <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
            <div className="flex gap-4">
              {item.slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] lg:flex-[0_0_calc(33.333%-11px)] flex items-center justify-center"
                >
                  {/* Phone frame */}
                  <div
                    className="relative mx-auto"
                    style={{ width: 280, height: 560 }}
                  >
                    {/* Phone shell border */}
                    <div
                      className="absolute inset-0 rounded-[2.5rem] border-4 border-white/20
                                  shadow-[0_0_0_2px_rgba(0,0,0,0.8),0_20px_60px_rgba(0,0,0,0.8)]
                                  pointer-events-none z-10"
                    />
                    {/* Notch */}
                    <div
                      className="absolute top-3 left-1/2 -translate-x-1/2
                                  w-16 h-5 bg-[#0a0a0a] rounded-full z-20"
                    />
                    {/* Slide image */}
                    <Image
                      src={slide}
                      fill
                      className="object-cover rounded-[2.2rem]"
                      alt={`${item.title} — slide ${i + 1} of ${item.slides.length}`}
                      sizes="280px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
                       text-gray-400 hover:text-white transition-colors
                       bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25
                       rounded-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white/40
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5
                       disabled:hover:border-white/10 disabled:hover:text-gray-400"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ── Dot pagination ───────────────────────────────────────────────── */}
        {snapCount > 0 && (
          <div className="shrink-0 flex items-center justify-center gap-2 pb-4">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/40
                  ${i === selectedIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"}`}
                aria-label={`Slide ${i + 1} of ${snapCount}`}
              />
            ))}
          </div>
        )}

        {/* ── Footer hint ──────────────────────────────────────────────────── */}
        <div className="shrink-0 pb-3 text-center">
          <p className="text-[11px] text-gray-600 select-none">
            Use ← → arrow keys or buttons to navigate · Esc to close
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

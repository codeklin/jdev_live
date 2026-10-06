"use client"

import { useEffect, useRef, useCallback, RefObject } from "react"
import { createPortal } from "react-dom"
import dynamic from "next/dynamic"
import { CatalogItem } from "../../../lib/workData"
import type { PageFlipHandle } from "./FlipBookInner"

// Dynamically import the inner component (page-flip is browser-only)
const FlipBookInner = dynamic(() => import("./FlipBookInner"), { ssr: false })

interface Props {
  item: CatalogItem
  onClose: () => void
  /** Ref to the element that triggered opening — focus returns here on close */
  triggerRef?: RefObject<HTMLElement>
}

export default function FlipBookModal({ item, onClose, triggerRef }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const flipApiRef = useRef<PageFlipHandle | null>(null)

  // ── Focus trap & initial focus ─────────────────────────────────────────────
  useEffect(() => {
    // Move focus to the close button when the modal opens
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
          flipApiRef.current?.flipNext()
          break
        case "ArrowLeft":
          e.preventDefault()
          flipApiRef.current?.flipPrev()
          break
        case "Escape":
          handleClose()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Close handler — returns focus to trigger ───────────────────────────────
  const handleClose = useCallback(() => {
    onClose()
    // Return focus to the card that opened this modal
    setTimeout(() => triggerRef?.current?.focus(), 0)
  }, [onClose, triggerRef])

  // ── Backdrop click ─────────────────────────────────────────────────────────
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) handleClose()
    },
    [handleClose]
  )

  // ── Callback from FlipBookInner once PageFlip is ready ────────────────────
  const handleFlipReady = useCallback((api: PageFlipHandle) => {
    flipApiRef.current = api
  }, [])

  // ── Render ─────────────────────────────────────────────────────────────────
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — Flipbook viewer`}
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
          <h2 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs sm:max-w-sm">
            {item.title}
          </h2>

          {/* Close button — receives initial focus */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close flipbook"
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

        {/* ── Flipbook area with side arrow buttons ────────────────────────── */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden px-14 py-6">
          {/* Left arrow */}
          <button
            type="button"
            onClick={() => flipApiRef.current?.flipPrev()}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
                       text-gray-400 hover:text-white transition-colors
                       bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25
                       rounded-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Previous page"
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

          {/* Flipbook inner — dynamically loaded (browser-only) */}
          <div className="w-full flex items-center justify-center">
            <FlipBookInner
              item={item}
              onFlipNext={() => flipApiRef.current?.flipNext()}
              onFlipPrev={() => flipApiRef.current?.flipPrev()}
              onReady={handleFlipReady}
            />
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => flipApiRef.current?.flipNext()}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
                       text-gray-400 hover:text-white transition-colors
                       bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25
                       rounded-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Next page"
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

        {/* ── Footer hint ──────────────────────────────────────────────────── */}
        <div className="shrink-0 pb-3 text-center">
          <p className="text-[11px] text-gray-600 select-none">
            Use ← → arrow keys or buttons to flip pages · Esc to close
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

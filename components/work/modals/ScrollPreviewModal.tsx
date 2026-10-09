"use client"

import { useEffect, useRef, useState, useCallback, RefObject } from "react"
import { createPortal } from "react-dom"
import { EmailItem } from "../../../lib/workData"

interface Props {
  item: EmailItem
  onClose: () => void
  /** Ref to the element that triggered opening — focus returns here on close */
  triggerRef?: RefObject<HTMLElement>
}

const SCROLL_SPEED = 0.4 // px per animation frame (~24px/sec at 60fps)

export default function ScrollPreviewModal({ item, onClose, triggerRef }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const hasEndedRef = useRef(false)

  const [hasEnded, setHasEnded] = useState(false)

  // ── Auto-scroll animation loop ─────────────────────────────────────────────
  const animate = useCallback(() => {
    if (!scrollRef.current || isPausedRef.current || hasEndedRef.current) {
      animFrameRef.current = requestAnimationFrame(animate)
      return
    }
    const el = scrollRef.current
    const maxScroll = el.scrollHeight - el.clientHeight
    if (el.scrollTop >= maxScroll) {
      hasEndedRef.current = true
      setHasEnded(true) // trigger re-render to show indicator
      return // stop — do not loop (requirement 5.5)
    }
    el.scrollTop += SCROLL_SPEED
    animFrameRef.current = requestAnimationFrame(animate)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [animate])

  // ── Pause / resume on hover & touch ───────────────────────────────────────
  const handleMouseEnter = () => { isPausedRef.current = true }
  const handleMouseLeave = () => { isPausedRef.current = false }
  const handleTouchStart = () => { isPausedRef.current = true }
  const handleTouchEnd   = () => { isPausedRef.current = false }

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

  // ── Keyboard navigation (Escape only — no arrows needed for this modal) ───
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={handleBackdropClick}
    >
      {/* Inner container — stops backdrop-click propagation */}
      <div
        ref={modalRef}
        className="relative flex flex-col w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-4 py-3 shrink-0">
          <h2 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs sm:max-w-sm">
            {item.title}
          </h2>

          {/* Close button — receives initial focus */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close email preview"
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

        {/* ── Frame container ───────────────────────────────────────────────── */}
        <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          {/* Browser chrome bar */}
          <div className="bg-[#1a1a1a] border-b border-white/10 flex items-center gap-1.5 px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <span className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
              email preview
            </span>
          </div>

          {/* Scroll viewport — overflow-y-auto so scrollTop is tracked; clipped visually by outer overflow-hidden */}
          <div
            className="relative overflow-hidden"
            style={{ height: "70vh" }}
          >
            <div
              ref={scrollRef}
              className="overflow-y-auto h-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Email image — natural height, width fills container */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.fullImagePath}
                alt={item.title}
                className="w-full"
                draggable={false}
              />
            </div>

            {/* "End of email" indicator — fade in when scroll reaches bottom */}
            {hasEnded && (
              <div
                className="absolute bottom-0 left-0 right-0 text-center py-3
                           bg-gradient-to-t from-black/60 to-transparent
                           text-xs text-gray-400 animate-fadeIn"
              >
                End of email
              </div>
            )}
          </div>
        </div>

        {/* ── Footer hint ───────────────────────────────────────────────────── */}
        <div className="shrink-0 pt-3 text-center">
          <p className="text-[11px] text-gray-600 select-none">
            Hover or tap to pause. Esc to close.
          </p>
        </div>
      </div>
    </div>,
    document.body
  )
}

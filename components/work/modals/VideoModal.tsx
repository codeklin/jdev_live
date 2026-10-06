"use client"

import { useEffect, useRef, useCallback, RefObject } from "react"
import { createPortal } from "react-dom"
import { VideoItem } from "../../../lib/workData"

interface Props {
  item: VideoItem
  onClose: () => void
  triggerRef?: RefObject<HTMLElement>
}

export default function VideoModal({ item, onClose, triggerRef }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isYouTube = Boolean(item.youtubeId)

  useEffect(() => {
    closeButtonRef.current?.focus()
    if (!isYouTube) videoRef.current?.play()
  }, [isYouTube])

  // Focus trap
  useEffect(() => {
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener("keydown", handleFocusTrap)
    return () => document.removeEventListener("keydown", handleFocusTrap)
  }, [])

  // Escape to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose() }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = useCallback(() => {
    videoRef.current?.pause()
    onClose()
    setTimeout(() => triggerRef?.current?.focus(), 0)
  }, [onClose, triggerRef])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) handleClose()
    },
    [handleClose]
  )

  const isPortrait = item.aspectRatio === "9/16"
  const isSquare   = item.aspectRatio === "1/1"
  const containerClass = isPortrait
    ? "w-full max-w-sm mx-auto"
    : isSquare
    ? "w-full max-w-lg mx-auto"
    : "w-full max-w-4xl mx-auto"

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col flex-1 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
          <h2 className="text-white font-semibold text-sm sm:text-base truncate max-w-xs sm:max-w-sm">
            {item.title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              className="w-5 h-5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Video area */}
        <div className="flex-1 flex items-center justify-center px-4 py-6 overflow-hidden">
          <div className={containerClass}>
            {isYouTube ? (
              /* YouTube embed */
              <div
                className="w-full rounded-xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: item.aspectRatio ?? "16/9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              /* Local MP4 */
              <video
                ref={videoRef}
                src={item.videoSrc}
                controls
                playsInline
                className="w-full rounded-xl shadow-2xl"
                style={{ aspectRatio: item.aspectRatio ?? "16/9" }}
              >
                Your browser does not support video playback.
              </video>
            )}
          </div>
        </div>

        <div className="shrink-0 pb-3 text-center">
          <p className="text-[11px] text-gray-600 select-none">Esc to close</p>
        </div>
      </div>
    </div>,
    document.body
  )
}

"use client"

import { useState, useRef, useCallback, MutableRefObject, RefObject } from "react"
import SlideUp from "../SlideUp"
import FilterBar from "./FilterBar"
import WorkGrid from "./WorkGrid"
import FlipBookModal from "./modals/FlipBookModal"
import MockupCarousel from "./modals/MockupCarousel"
import ScrollPreviewModal from "./modals/ScrollPreviewModal"
import VideoModal from "./modals/VideoModal"
import {
  WORK_ITEMS,
  WorkCategory,
  CatalogItem,
  SocialItem,
  EmailItem,
  VideoItem,
} from "../../lib/workData"

// Pull the single Figma URL from data — whichever email item has one
const EMAIL_FIGMA_URL = WORK_ITEMS.find(
  (item): item is EmailItem => item.category === "email" && !!(item as EmailItem).figmaUrl
)?.figmaUrl

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<WorkCategory | "all">("all")

  const [openCatalog, setOpenCatalog] = useState<CatalogItem | null>(null)
  const [openSocial, setOpenSocial] = useState<SocialItem | null>(null)
  const [openEmail, setOpenEmail] = useState<EmailItem | null>(null)
  const [openVideo, setOpenVideo] = useState<VideoItem | null>(null)

  const catalogTriggerRef = useRef<HTMLElement | null>(null) as MutableRefObject<HTMLElement | null>
  const socialTriggerRef  = useRef<HTMLElement | null>(null) as MutableRefObject<HTMLElement | null>
  const emailTriggerRef   = useRef<HTMLElement | null>(null) as MutableRefObject<HTMLElement | null>
  const videoTriggerRef   = useRef<HTMLElement | null>(null) as MutableRefObject<HTMLElement | null>

  const handleOpenCatalog = useCallback((item: CatalogItem) => {
    catalogTriggerRef.current = document.activeElement as HTMLElement
    setOpenCatalog(item)
  }, [catalogTriggerRef])

  const handleOpenSocial = useCallback((item: SocialItem) => {
    socialTriggerRef.current = document.activeElement as HTMLElement
    setOpenSocial(item)
  }, [socialTriggerRef])

  const handleOpenEmail = useCallback((item: EmailItem) => {
    emailTriggerRef.current = document.activeElement as HTMLElement
    setOpenEmail(item)
  }, [emailTriggerRef])

  const handleOpenVideo = useCallback((item: VideoItem) => {
    videoTriggerRef.current = document.activeElement as HTMLElement
    setOpenVideo(item)
  }, [videoTriggerRef])

  return (
    <section id="work" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp>
          <div className="mb-10">
            <p className="text-sm font-semibold text-[#0d9488] tracking-widest uppercase mb-2">
              04 · Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Work that paid the bills.<br className="hidden sm:block" />
              <span className="text-gray-400"> And solved real problems.</span>
            </h2>
            <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Every project here started with a client who had a real problem — an email that wasn't converting, a catalogue that looked nothing like the brand, a website that was losing people on page one. Here's how we fixed that.
            </p>
          </div>
        </SlideUp>

        <FilterBar active={activeFilter} onChange={setActiveFilter} />

        {/* Figma portfolio link — shown when email designs are visible */}
        {EMAIL_FIGMA_URL && (activeFilter === "all" || activeFilter === "email") && (
          <div className="flex items-center justify-end mb-4">
            <a
              href={EMAIL_FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group"
              aria-label="View all email designs in Figma"
            >
              {/* Figma icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 57"
                className="w-3.5 h-3.5 text-teal-400 group-hover:text-white transition-colors"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" />
                <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" />
                <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
              </svg>
              View all email designs in Figma
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}

        <WorkGrid
          items={WORK_ITEMS}
          activeFilter={activeFilter}
          onOpenCatalog={handleOpenCatalog}
          onOpenSocial={handleOpenSocial}
          onOpenEmail={handleOpenEmail}
          onOpenVideo={handleOpenVideo}
        />
      </div>

      {openCatalog && (
        <FlipBookModal
          item={openCatalog}
          onClose={() => setOpenCatalog(null)}
          triggerRef={catalogTriggerRef as RefObject<HTMLElement>}
        />
      )}
      {openSocial && (
        <MockupCarousel
          item={openSocial}
          onClose={() => setOpenSocial(null)}
          triggerRef={socialTriggerRef as RefObject<HTMLElement>}
        />
      )}
      {openEmail && (
        <ScrollPreviewModal
          item={openEmail}
          onClose={() => setOpenEmail(null)}
          triggerRef={emailTriggerRef as RefObject<HTMLElement>}
        />
      )}
      {openVideo && (
        <VideoModal
          item={openVideo}
          onClose={() => setOpenVideo(null)}
          triggerRef={videoTriggerRef as RefObject<HTMLElement>}
        />
      )}
    </section>
  )
}

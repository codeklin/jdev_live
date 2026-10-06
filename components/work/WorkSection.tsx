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
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              All My Work
            </h2>
          </div>
        </SlideUp>

        <FilterBar active={activeFilter} onChange={setActiveFilter} />

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

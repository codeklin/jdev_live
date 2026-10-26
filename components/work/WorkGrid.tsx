"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CatalogCard from "./cards/CatalogCard"
import SocialCard from "./cards/SocialCard"
import EmailCard from "./cards/EmailCard"
import WebProjectCard from "./cards/WebProjectCard"
import VideoCard from "./cards/VideoCard"
import {
  WorkItem,
  WorkCategory,
  CatalogItem,
  SocialItem,
  EmailItem,
  VideoItem,
} from "../../lib/workData"
import { filterWorkItems } from "../../lib/filterWorkItems"

interface Props {
  items: WorkItem[]
  activeFilter: WorkCategory | "all"
  onOpenCatalog: (item: CatalogItem) => void
  onOpenSocial: (item: SocialItem) => void
  onOpenEmail: (item: EmailItem) => void
  onOpenVideo: (item: VideoItem) => void
}

function renderCard(
  item: WorkItem,
  handlers: {
    onOpenCatalog: (item: CatalogItem) => void
    onOpenSocial: (item: SocialItem) => void
    onOpenEmail: (item: EmailItem) => void
    onOpenVideo: (item: VideoItem) => void
  }
) {
  if (item.category === "catalog") return <CatalogCard item={item} onOpen={handlers.onOpenCatalog} />
  if (item.category === "social")  return <SocialCard  item={item} onOpen={handlers.onOpenSocial} />
  if (item.category === "email")   return <EmailCard   item={item} onOpen={handlers.onOpenEmail} />
  if (item.category === "video")   return <VideoCard   item={item} onOpen={handlers.onOpenVideo} />
  if (item.category === "web")     return <WebProjectCard item={item} />
  return null
}

export default function WorkGrid({
  items,
  activeFilter,
  onOpenCatalog,
  onOpenSocial,
  onOpenEmail,
  onOpenVideo,
}: Props) {
  const gridContainerRef = useRef<HTMLDivElement>(null)

  const filteredItems = filterWorkItems(items, activeFilter)
  const handlers = { onOpenCatalog, onOpenSocial, onOpenEmail, onOpenVideo }

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const container = gridContainerRef.current
    if (!container) return

    const cardElements = container.querySelectorAll<HTMLElement>(".work-grid-card")
    if (!cardElements.length) return

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cardElements, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              opacity: 0,
              y: 50,
              rotate: (index) => (index % 2 === 0 ? -1.5 : 1.5),
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: "auto",
            }
          )
        },
      })
    }, container)

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 120)

    return () => {
      clearTimeout(timer)
      ctx.revert()
    }
  }, [activeFilter, filteredItems.length])

  return (
    <div ref={gridContainerRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {filteredItems.map((item) => {
          const isFeatured = Boolean(item.featured)

          return (
            <div
              key={item.id}
              className={[
                "work-grid-card will-change-transform",
                // Featured items span full width on sm+ and are taller
                isFeatured ? "sm:col-span-2 lg:col-span-3" : "",
              ].join(" ")}
            >
              {renderCard(item, handlers)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
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
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [activeFilter])

  const filteredItems = filterWorkItems(items, activeFilter)
  const handlers = { onOpenCatalog, onOpenSocial, onOpenEmail, onOpenVideo }

  return (
    <div className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
        {filteredItems.map((item, i) => {
          const isFeatured = Boolean(item.featured)

          return (
            <div
              key={item.id}
              className={[
                // Featured items span full width on sm+ and are taller
                isFeatured
                  ? "sm:col-span-2 lg:col-span-3"
                  : "",
                // Staggered entrance
                mounted ? "animate-cardIn" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              {renderCard(item, handlers)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import SlideUp from "../SlideUp"
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

export default function WorkGrid({
  items,
  activeFilter,
  onOpenCatalog,
  onOpenSocial,
  onOpenEmail,
  onOpenVideo,
}: Props) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [activeFilter])

  const filteredItems = filterWorkItems(items, activeFilter)

  return (
    <div className={`transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <SlideUp key={item.id}>
            {item.category === "catalog" && (
              <CatalogCard item={item} onOpen={onOpenCatalog} />
            )}
            {item.category === "social" && (
              <SocialCard item={item} onOpen={onOpenSocial} />
            )}
            {item.category === "email" && (
              <EmailCard item={item} onOpen={onOpenEmail} />
            )}
            {item.category === "video" && (
              <VideoCard item={item} onOpen={onOpenVideo} />
            )}
            {item.category === "web" && <WebProjectCard item={item} />}
          </SlideUp>
        ))}
      </div>
    </div>
  )
}

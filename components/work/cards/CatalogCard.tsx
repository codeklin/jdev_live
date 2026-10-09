"use client"

import { useState } from "react"
import Image from "next/image"
import { BsFillBookFill } from "react-icons/bs"
import { CatalogItem } from "../../../lib/workData"

interface Props {
  item: CatalogItem
  onOpen: (item: CatalogItem) => void
}

export default function CatalogCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)

  const sharedInteraction = {
    onClick: () => onOpen(item),
    role: "button" as const,
    tabIndex: 0,
    "aria-label": `Open ${item.title} flipbook`,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(item) }
    },
  }

  // ── Featured hero layout ────────────────────────────────────────────────────
  if (item.featured) {
    return (
      <article
        {...sharedInteraction}
        className="relative rounded-2xl overflow-hidden group border border-white/10 hover:border-purple-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
      >
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          {!imgError ? (
            <Image
              src={item.thumbnail}
              alt={`${item.title} cover`}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <BsFillBookFill className="w-16 h-16 text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400">
            Featured
          </span>

          {/* Page count top-right */}
          <span className="absolute top-4 right-4 text-[10px] font-bold text-gray-400 bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
            {item.pageCount} pages
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
            {item.description}
          </p>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(item) }}
            className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            aria-label={`View ${item.title} flipbook`}
          >
            <BsFillBookFill className="w-4 h-4" />
            Browse Catalogue
          </button>
        </div>
      </article>
    )
  }

  // ── Regular card with page-stack effect ─────────────────────────────────────
  return (
    <article
      {...sharedInteraction}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 flex flex-col"
    >
      {/* Stacked pages effect */}
      <div className="relative h-44 overflow-visible">
        {/* Page layers behind */}
        <div className="absolute inset-x-3 top-2 h-full rounded-t-lg bg-white/[0.03] border border-white/5 -z-10" />
        <div className="absolute inset-x-1.5 top-1 h-full rounded-t-lg bg-white/[0.05] border border-white/[0.07] -z-20" />

        <div className="h-full overflow-hidden relative rounded-t-xl">
          {imgError ? (
            <div className="w-full h-full bg-white/10 flex items-center justify-center" aria-hidden="true">
              <BsFillBookFill className="w-10 h-10 text-white/20" />
            </div>
          ) : (
            <Image
              src={item.thumbnail}
              alt={`${item.title} cover`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <span className="absolute top-2 right-2 bg-purple-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
            Catalog
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-black text-lg leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div>
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
            {item.pageCount} {item.pageCount === 1 ? "page" : "pages"}
          </span>
        </div>
        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(item) }}
            className="text-xs font-bold text-purple-400 hover:text-white flex items-center gap-1.5 transition-colors"
            aria-label={`View ${item.title} flipbook`}
          >
            <BsFillBookFill className="w-3.5 h-3.5" />
            View Flipbook
          </button>
        </div>
      </div>
    </article>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { BsPhone } from "react-icons/bs"
import { SocialItem } from "../../../lib/workData"

interface Props {
  item: SocialItem
  onOpen: (item: SocialItem) => void
}

export default function SocialCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)

  const sharedInteraction = {
    onClick: () => onOpen(item),
    role: "button" as const,
    tabIndex: 0,
    "aria-label": `Open ${item.title} social designs`,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(item) }
    },
  }

  // ── Featured hero layout ────────────────────────────────────────────────────
  if (item.featured) {
    return (
      <article
        {...sharedInteraction}
        className="relative rounded-2xl overflow-hidden group border border-white/10 hover:border-pink-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
      >
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#0d0d0d]">
          {!imgError ? (
            <Image
              src={item.thumbnail}
              alt={`${item.title} preview`}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <BsPhone className="w-16 h-16 text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400">
            Featured
          </span>

          {item.slides.length > 1 && (
            <span className="absolute top-4 right-4 text-[10px] font-bold text-gray-400 bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
              {item.slides.length} designs
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          {item.clientName && (
            <p className="text-pink-400 text-xs font-bold tracking-widest uppercase mb-1">
              {item.clientName}
            </p>
          )}
          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
            {item.description}
          </p>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(item) }}
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            aria-label={`View ${item.title} designs`}
          >
            <BsPhone className="w-4 h-4" />
            View Designs
          </button>
        </div>
      </article>
    )
  }

  // ── Regular card — tilted thumbnail prints effect ───────────────────────────
  return (
    <article
      {...sharedInteraction}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail with rotated layer behind to suggest a stack of prints */}
      <div className="h-44 relative overflow-visible">
        {/* Back print — slightly rotated */}
        <div
          className="absolute inset-2 rounded-lg bg-white/[0.04] border border-white/[0.06] -z-10 group-hover:rotate-3 transition-transform duration-500"
          aria-hidden="true"
        />

        <div className="h-full overflow-hidden relative rounded-t-xl">
          {imgError ? (
            <div className="w-full h-full bg-white/10 flex items-center justify-center" aria-hidden="true">
              <BsPhone className="w-10 h-10 text-white/20" />
            </div>
          ) : (
            <Image
              src={item.thumbnail}
              alt={`${item.title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          <span className="absolute top-2 right-2 bg-pink-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
            Social
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        {item.clientName && (
          <p className="text-pink-400 text-[10px] font-bold tracking-widest uppercase">
            {item.clientName}
          </p>
        )}
        <h3 className="text-white font-black text-lg leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(item) }}
            className="text-xs font-bold text-pink-400 hover:text-white flex items-center gap-1.5 transition-colors"
            aria-label={`View ${item.title} designs`}
          >
            <BsPhone className="w-3.5 h-3.5" />
            View Designs
          </button>
        </div>
      </div>
    </article>
  )
}

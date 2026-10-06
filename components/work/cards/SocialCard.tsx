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

  return (
    <article
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col cursor-pointer"
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title} social designs`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(item)
        }
      }}
    >
      {/* Thumbnail with phone frame overlay */}
      <div className="h-44 overflow-hidden relative">
        {imgError ? (
          <div
            className="w-full h-full bg-white/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <BsPhone className="w-10 h-10 text-white/20" />
          </div>
        ) : (
          <Image
            src={item.thumbnail}
            alt={`${item.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* CSS-only phone frame overlay — pointer-events-none so clicks pass through */}
        <div
          className="absolute inset-0 rounded-[12px] pointer-events-none"
          style={{
            border: "2px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            boxShadow:
              "0 0 0 4px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.6)",
          }}
          aria-hidden="true"
        />

        {/* Social badge — top-right */}
        <span className="absolute top-2 right-2 bg-pink-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          Social
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-semibold text-base leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Optional client name tag */}
        {item.clientName && (
          <div>
            <span className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
              {item.clientName}
            </span>
          </div>
        )}

        {/* View Designs button */}
        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(item)
            }}
            className="text-xs font-semibold text-pink-400 hover:text-white flex items-center gap-1.5 transition-colors"
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

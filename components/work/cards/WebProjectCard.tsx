"use client"

import { useState } from "react"
import Image from "next/image"
import { BsArrowUpRightSquare } from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"
import { WebProjectItem } from "../../../lib/workData"

interface Props {
  item: WebProjectItem
}

export default function WebProjectCard({ item }: Props) {
  const [imgError, setImgError] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: item.title, text: item.description, url: item.liveUrl })
      } catch {
        navigator.clipboard.writeText(item.liveUrl)
      }
    } else {
      navigator.clipboard.writeText(item.liveUrl)
    }
  }

  // ── Featured hero layout ────────────────────────────────────────────────────
  if (item.featured) {
    return (
      <article className="relative rounded-2xl overflow-hidden group border border-white/10 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,148,136,0.15)]">
        {/* Full-bleed image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          {!imgError ? (
            <Image
              src={item.thumbnail}
              alt={`${item.title} screenshot`}
              fill
              sizes="100vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-white/5" />
          )}
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

          {/* Featured badge */}
          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-400">
            Featured
          </span>

          {/* Live pulse dot */}
          <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-semibold text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Live
          </span>
        </div>

        {/* Content sits over the gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          {/* Tech tags as eyebrow */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
            {item.description}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0a0a0a] font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
              aria-label={`View ${item.title} live site`}
            >
              <BsArrowUpRightSquare className="w-4 h-4" />
              View Live Site
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              aria-label={`Share ${item.title}`}
            >
              <FiShare2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </article>
    )
  }

  // ── Regular card ────────────────────────────────────────────────────────────
  return (
    <article className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col">
      {/* Browser chrome bar */}
      <div className="bg-[#1a1a1a] border-b border-white/10 flex items-center gap-1.5 px-3 py-2 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60" />
        <span className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
          {item.liveUrl.replace(/^https?:\/\//, "")}
        </span>
        {/* Live pulse */}
        <span className="flex items-center gap-1 text-[9px] text-green-400 font-semibold shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          Live
        </span>
      </div>

      {/* Thumbnail */}
      <div className="h-44 overflow-hidden relative">
        {imgError ? (
          <div className="w-full h-full bg-white/5" aria-hidden="true" />
        ) : (
          <Image
            src={item.thumbnail}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Tech tags as eyebrow */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-white font-black text-lg leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center gap-3 mt-auto pt-1">
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-white transition-colors"
            aria-label={`View ${item.title} live site`}
          >
            <BsArrowUpRightSquare className="w-3.5 h-3.5" />
            View live
          </a>
          <button
            type="button"
            onClick={handleShare}
            className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-white transition-colors"
            aria-label={`Share ${item.title}`}
          >
            <FiShare2 className="w-3.5 h-3.5" />
            Share
          </button>
        </div>
      </div>
    </article>
  )
}

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
        await navigator.share({
          title: item.title,
          text: item.description,
          url: item.liveUrl,
        })
      } catch {
        // user cancelled or share failed — copy to clipboard as fallback
        navigator.clipboard.writeText(item.liveUrl)
      }
    } else {
      // fallback: copy URL to clipboard
      navigator.clipboard.writeText(item.liveUrl)
    }
  }

  return (
    <article className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col">
      {/* Thumbnail */}
      <div className="h-44 overflow-hidden relative">
        {imgError ? (
          <div className="w-full h-full bg-white/10" aria-hidden="true" />
        ) : (
          <Image
            src={item.thumbnail}
            alt={`${item.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-semibold text-base leading-snug">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Tech tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-1">
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-white transition-colors"
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

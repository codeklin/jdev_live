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

  return (
    <article
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col cursor-pointer"
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${item.title} flipbook`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(item)
        }
      }}
    >
      {/* Thumbnail */}
      <div className="h-44 overflow-hidden relative">
        {imgError ? (
          <div
            className="w-full h-full bg-white/10 flex items-center justify-center"
            aria-hidden="true"
          >
            <BsFillBookFill className="w-10 h-10 text-white/20" />
          </div>
        ) : (
          <Image
            src={item.thumbnail}
            alt={`${item.title} cover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* Catalog badge — top-right */}
        <span className="absolute top-2 right-2 bg-purple-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          Catalog
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

        {/* Page count pill */}
        <div>
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded">
            {item.pageCount} {item.pageCount === 1 ? "page" : "pages"}
          </span>
        </div>

        {/* View Flipbook button */}
        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(item)
            }}
            className="text-xs font-semibold text-purple-400 hover:text-white flex items-center gap-1.5 transition-colors"
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

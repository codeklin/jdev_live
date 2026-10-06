"use client"

import { useState } from "react"
import Image from "next/image"
import { EmailItem } from "../../../lib/workData"

interface Props {
  item: EmailItem
  onOpen: (item: EmailItem) => void
}

export default function EmailCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col cursor-pointer"
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`Preview ${item.title} email`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(item)
        }
      }}
    >
      {/* Browser chrome header */}
      <div className="bg-[#1a1a1a] border-b border-white/10 flex items-center gap-1.5 px-3 py-2">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60" />
        <span className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
          email preview
        </span>
      </div>

      {/* Thumbnail */}
      <div className="h-44 overflow-hidden relative">
        {imgError ? (
          <div
            className="w-full h-full bg-white/10 flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Email icon fallback — pure Tailwind, no icon library needed */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
              />
            </svg>
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

        {/* Email badge — top-right */}
        <span className="absolute top-2 right-2 bg-teal-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          Email
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

        {/* Preview Email button */}
        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(item)
            }}
            className="text-xs font-semibold text-teal-400 hover:text-white flex items-center gap-1.5 transition-colors"
            aria-label={`Preview ${item.title} email`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
              />
            </svg>
            Preview Email
          </button>
        </div>
      </div>
    </article>
  )
}

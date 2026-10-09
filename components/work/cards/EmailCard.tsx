"use client"

import { useState } from "react"
import Image from "next/image"
import { EmailItem } from "../../../lib/workData"

interface Props {
  item: EmailItem
  onOpen: (item: EmailItem) => void
}

const EmailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
  </svg>
)

export default function EmailCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)

  const sharedInteraction = {
    onClick: () => onOpen(item),
    role: "button" as const,
    tabIndex: 0,
    "aria-label": `Preview ${item.title} email`,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(item) }
    },
  }

  // ── Featured hero layout ────────────────────────────────────────────────────
  if (item.featured) {
    return (
      <article
        {...sharedInteraction}
        className="relative rounded-2xl overflow-hidden group border border-white/10 hover:border-teal-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(13,148,136,0.12)]"
      >
        {/* Browser chrome */}
        <div className="bg-[#111] border-b border-white/10 flex items-center gap-1.5 px-4 py-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="ml-3 flex-1 bg-white/5 rounded text-[10px] text-gray-600 px-3 py-0.5 truncate">
            email preview
          </span>
        </div>

        {/* Tall image — lets the email content breathe */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          {!imgError ? (
            <Image
              src={item.thumbnail}
              alt={`${item.title} preview`}
              fill
              sizes="100vw"
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <EmailIcon className="w-16 h-16 text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-400">
            Featured
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
            {item.description}
          </p>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpen(item) }}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0a0a0a] font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            aria-label={`Preview ${item.title} email`}
          >
            <EmailIcon className="w-4 h-4" />
            Preview Email
          </button>
        </div>
      </article>
    )
  }

  // ── Regular card ────────────────────────────────────────────────────────────
  return (
    <article
      {...sharedInteraction}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-teal-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 flex flex-col"
    >
      {/* Browser chrome */}
      <div className="bg-[#1a1a1a] border-b border-white/10 flex items-center gap-1.5 px-3 py-2">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <span className="w-2 h-2 rounded-full bg-green-500/60" />
        <span className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
          email preview
        </span>
      </div>

      {/* Taller thumbnail so email content reads better */}
      <div className="h-52 overflow-hidden relative">
        {imgError ? (
          <div className="w-full h-full bg-white/10 flex items-center justify-center" aria-hidden="true">
            <EmailIcon className="w-10 h-10 text-white/20" />
          </div>
        ) : (
          <Image
            src={item.thumbnail}
            alt={`${item.title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <span className="absolute top-2 right-2 bg-teal-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          Email
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
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
            className="text-xs font-bold text-teal-400 hover:text-white flex items-center gap-1.5 transition-colors"
            aria-label={`Preview ${item.title} email`}
          >
            <EmailIcon className="w-3.5 h-3.5" />
            Preview Email
          </button>
        </div>
      </div>
    </article>
  )
}

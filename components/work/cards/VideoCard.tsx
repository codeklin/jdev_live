"use client"

import { useState, useRef } from "react"
import { BsPlayCircle, BsPlayFill } from "react-icons/bs"
import { FaYoutube } from "react-icons/fa"
import { VideoItem } from "../../../lib/workData"

interface Props {
  item: VideoItem
  onOpen: (item: VideoItem) => void
}

function getYouTubeUrl(item: VideoItem) {
  if (!item.youtubeId) return null
  return item.aspectRatio === "9/16"
    ? `https://www.youtube.com/shorts/${item.youtubeId}`
    : `https://www.youtube.com/watch?v=${item.youtubeId}`
}

export default function VideoCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const youtubeUrl = getYouTubeUrl(item)
  const isYouTube = Boolean(youtubeUrl)

  const handleClick = () => {
    if (isYouTube) window.open(youtubeUrl!, "_blank", "noopener,noreferrer")
    else onOpen(item)
  }

  const handleMouseEnter = () => {
    setHovered(true)
    if (!isYouTube) videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (!isYouTube && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const sharedInteraction = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    role: "button" as const,
    tabIndex: 0,
    "aria-label": isYouTube ? `Watch ${item.title} on YouTube` : `Play ${item.title}`,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleClick() }
    },
  }

  // ── Featured — cinematic dark hero ─────────────────────────────────────────
  if (item.featured) {
    return (
      <article
        {...sharedInteraction}
        className="relative rounded-2xl overflow-hidden group border border-white/10 hover:border-violet-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]"
      >
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
          {!imgError && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnail}
              alt={`${item.title} thumbnail`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              onError={() => setImgError(true)}
            />
          )}
          {!isYouTube && (
            <video
              ref={videoRef}
              src={item.videoSrc}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Big centred play button */}
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 ${hovered ? "scale-110 bg-white/20 border-white/60" : ""}`}>
              {isYouTube
                ? <FaYoutube className="w-7 h-7 text-red-500" />
                : <BsPlayFill className="w-7 h-7 text-white ml-1" />
              }
            </div>
          </div>

          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-400">
            Featured
          </span>
          <span className="absolute top-4 right-4 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
            {isYouTube && <FaYoutube className="text-red-500 w-3 h-3" />}
            AI Video
          </span>
        </div>

        <div className="p-6 sm:p-8">
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-semibold bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
            {item.description}
          </p>
          {isYouTube ? (
            <span className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
              <FaYoutube className="w-4 h-4" />
              Watch on YouTube
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors">
              <BsPlayCircle className="w-4 h-4" />
              Watch Video
            </span>
          )}
        </div>
      </article>
    )
  }

  // ── Regular card ────────────────────────────────────────────────────────────
  return (
    <article
      {...sharedInteraction}
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 flex flex-col"
    >
      <div className="h-44 overflow-hidden relative bg-black">
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.thumbnail}
            alt={`${item.title} thumbnail`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}
        {!isYouTube && (
          <video
            ref={videoRef}
            src={item.videoSrc}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors" aria-hidden="true">
          {isYouTube
            ? <FaYoutube className="w-12 h-12 text-red-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
            : <BsPlayCircle className="w-10 h-10 text-white/70 drop-shadow-lg group-hover:scale-110 transition-transform" />
          }
        </div>
        <span className="absolute top-2 right-2 bg-violet-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          AI Video
        </span>
        {isYouTube && (
          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
            <FaYoutube className="text-red-500 w-3 h-3" />
            YouTube
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-black text-lg leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-auto pt-1">
          {isYouTube ? (
            <span className="text-xs font-bold text-red-400 hover:text-white flex items-center gap-1.5 transition-colors">
              <FaYoutube className="w-3.5 h-3.5" />
              Watch on YouTube
            </span>
          ) : (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleClick() }}
              className="text-xs font-bold text-violet-400 hover:text-white flex items-center gap-1.5 transition-colors"
              aria-label={`Watch ${item.title}`}
            >
              <BsPlayCircle className="w-3.5 h-3.5" />
              Watch Video
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

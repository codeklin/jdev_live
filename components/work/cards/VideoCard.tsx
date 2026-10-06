"use client"

import { useState, useRef } from "react"
import { BsPlayCircle } from "react-icons/bs"
import { FaYoutube } from "react-icons/fa"
import { VideoItem } from "../../../lib/workData"

interface Props {
  item: VideoItem
  onOpen: (item: VideoItem) => void
}

function getYouTubeUrl(item: VideoItem) {
  if (!item.youtubeId) return null
  // Shorts use the /shorts/ path; 9/16 aspect ratio signals a Short
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
    if (isYouTube) {
      window.open(youtubeUrl!, "_blank", "noopener,noreferrer")
    } else {
      onOpen(item)
    }
  }

  const handleMouseEnter = () => {
    setHovered(true)
    // Only preview local videos on hover
    if (!isYouTube) videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (!isYouTube && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={isYouTube ? `Watch ${item.title} on YouTube` : `Play ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Thumbnail */}
      <div className="h-44 overflow-hidden relative bg-black">
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.thumbnail}
            alt={`${item.title} thumbnail`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        )}

        {/* Local video hover preview */}
        {!isYouTube && (
          <video
            ref={videoRef}
            src={item.videoSrc}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Play overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
          aria-hidden="true"
        >
          {isYouTube ? (
            <FaYoutube className="w-12 h-12 text-red-500 drop-shadow-lg group-hover:scale-110 transition-transform" />
          ) : (
            <BsPlayCircle className="w-10 h-10 text-white/70 drop-shadow-lg group-hover:scale-110 transition-transform" />
          )}
        </div>

        {/* Badge */}
        <span className="absolute top-2 right-2 bg-violet-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          AI Video
        </span>

        {/* YouTube badge bottom-left */}
        {isYouTube && (
          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
            <FaYoutube className="text-red-500 w-3 h-3" />
            YouTube
          </span>
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

        <div className="mt-auto pt-1">
          {isYouTube ? (
            <span className="text-xs font-semibold text-red-400 hover:text-white flex items-center gap-1.5 transition-colors">
              <FaYoutube className="w-3.5 h-3.5" />
              Watch on YouTube ↗
            </span>
          ) : (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleClick() }}
              className="text-xs font-semibold text-violet-400 hover:text-white flex items-center gap-1.5 transition-colors"
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

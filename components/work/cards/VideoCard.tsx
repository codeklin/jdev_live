"use client"

import { useState, useRef } from "react"
import { BsPlayCircle } from "react-icons/bs"
import { VideoItem } from "../../../lib/workData"

interface Props {
  item: VideoItem
  onOpen: (item: VideoItem) => void
}

export default function VideoCard({ item, onOpen }: Props) {
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setHovered(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col cursor-pointer"
      onClick={() => onOpen(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Play ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen(item)
        }
      }}
    >
      {/* Thumbnail / hover-preview area */}
      <div className="h-44 overflow-hidden relative bg-black">
        {/* Thumbnail image — shown when not hovering */}
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.thumbnail}
            alt={`${item.title} preview`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            onError={() => setImgError(true)}
          />
        )}

        {/* Silent looping preview on hover */}
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

        {/* Play icon overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <BsPlayCircle className="w-10 h-10 text-white/70 drop-shadow-lg" />
        </div>

        {/* AI Video badge */}
        <span className="absolute top-2 right-2 bg-violet-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded">
          AI Video
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

        <div className="mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpen(item)
            }}
            className="text-xs font-semibold text-violet-400 hover:text-white flex items-center gap-1.5 transition-colors"
            aria-label={`Watch ${item.title}`}
          >
            <BsPlayCircle className="w-3.5 h-3.5" />
            Watch Video
          </button>
        </div>
      </div>
    </article>
  )
}

"use client"

import Image from "next/image"
import SlideUp from "./SlideUp"

// ─── VIDEOS ──────────────────────────────────────────────────────────────────
// For each video:
//   - id: unique identifier for shareable links
//   - youtubeId: the part after ?v= in the YouTube URL
//   - thumbnail: use your own image OR leave as "" to auto-use YouTube's thumbnail
//     YouTube auto-thumbnail URL: https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg
const videos = [
  {
    id: "ai-animation-gigsdev",
    title: "AI Animation Video — Gigsdev",
    description: "A cinematic artificial inteligence training advert video showcasing Gigsdev's training course.",
    youtubeId: "vXRLIVOi_hs",
    thumbnail: "", // leave "" to use YouTube auto-thumbnail
  },
  {
    id: "first-aid-health-project",
    title: "A first aid lesson on attending to seizure crisis  — Health Project",
    description: "Full event coverage of a major tech summit in Nigeria.",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_2",
    thumbnail: "",
  },
  {
    id: "short-film-reel",
    title: "Short Film — Content Reel",
    description: "A highlight reel of content creation and photography work.",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_3",
    thumbnail: "",
  },
]

// ─── PDF CATALOGUES ───────────────────────────────────────────────────────────
// For each catalogue, provide EITHER a googleDriveUrl OR an issuuUrl (or both).
// thumbnail: upload a mockup/cover image to /public and reference it here.
const catalogues = [
  {
    id: "home-interior-catalogue",
    title: "Home and interior Product Catalogue",
    description: "I believe a home should feel as good as it looks, and I bring that same philosophy to my design work. For this interiors catalogue, I focused on creating an editorial-style flow that captures the 'vibe' of a space while keeping the product details crystal clear. It’s about using thoughtful typography and warm, balanced layouts to turn a furniture list into a source of genuine inspiration.",
    thumbnail: "/home.png", // add your mockup image to /public
    googleDriveUrl: "https://drive.google.com/file/d/1zE1LvduRizjD5LfXpB0g099J0wEYLS3I/view?usp=drive_links", // replace
    issuuUrl: "https://issuu.com/jdevpro/docs/home_interior_product_catalogue",   // replace
  },
  {
    id: "automobile-tools-catalogue",
    title: "Automobile Work Tools Product Catalogue",
    description: "I build a visual experience. For this automobile catalogue, I transformed complex technical data into a clean, intuitive layout that speaks to the professional mechanic. A perfect example of how I use sharp visual hierarchy and modern design to turn a standard product list into a high-end brand asset.",
    thumbnail: "/tools.png",
    googleDriveUrl: "https://drive.google.com/file/d/1Q_pPgT4JdXburEEG6EwKissJMNAydi2e/view?usp=drive_link",
    issuuUrl: "https://issuu.com/jdevpro/docs/automobile_work_tools_product_catalogue",   // replace
    
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const PLACEHOLDER_IDS = /^YOUR_/

const getYoutubeThumbnail = (id: string) =>
  PLACEHOLDER_IDS.test(id)
    ? "/noisy.png" // local fallback until real ID is added
    : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

const getCatalogueThumbnail = (path: string) =>
  path && path.startsWith("/") ? path : "/noisy.png"

const shareItem = (itemType: 'video' | 'catalogue', itemId: string, title: string, description: string) => {
  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/#${itemType}-${itemId}`
  const shareText = `Check out ${title}: ${description.substring(0, 100)}...`
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: shareText,
      url: shareUrl,
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareUrl)
    alert('Link copied to clipboard!')
  }
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const MediaSection = () => {
  return (
    <section id="media" className="bg-white dark:bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Videos ── */}
        <div>
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0d9488] mb-3">
                Videography & Content
              </p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                Videos
              </h2>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => {
              const thumb = v.thumbnail || getYoutubeThumbnail(v.youtubeId)
              const isPlaceholder = PLACEHOLDER_IDS.test(v.youtubeId)
              const youtubeUrl = `https://www.youtube.com/watch?v=${v.youtubeId}`
              return (
                <SlideUp key={i} offset="-80px 0px -80px 0px">
                  <div id={`video-${v.id}`} className="group border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:border-[#ef4444]/50 transition-colors bg-gray-50 dark:bg-white/5">
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <div className="relative overflow-hidden h-48">
                        <Image
                          src={thumb}
                          alt={v.title}
                          fill
                          unoptimized={thumb.startsWith("http")}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-[#ef4444] flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {/* YouTube badge */}
                        <span className="absolute top-3 right-3 bg-[#ef4444] text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg">
                          {isPlaceholder ? "Coming Soon" : "YouTube"}
                        </span>
                      </div>
                    </a>
                    <div className="p-5">
                      <h3 className="text-base font-black text-[#0a0a0a] dark:text-white mb-1">{v.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{v.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-[#ef4444] hover:bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors"
                        >
                          Watch on YouTube
                        </a>
                        <button
                          onClick={() => shareItem('video', v.id, v.title, v.description)}
                          className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors"
                          title="Share video"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.577 14.591 10.54 15.736 11.604 16.734m6.423-3.425l2.117-2.007a2.827 2.827 0 005.99 2.165l-.969 3.057a2.827 2.827 0 01-2.244 1.589H5.604a2.827 2.827 0 01-2.244-1.589l-.969-3.057a2.827 2.827 0 015.99-2.165l2.117 2.007zm0 0l6.423-3.425" />
                          </svg>
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              )
            })}
          </div>
        </div>

        {/* ── Catalogues ── */}
        <div>
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">
                Graphics Design
              </p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                Catalogues
              </h2>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {catalogues.map((c, i) => (
              <SlideUp key={i} offset="-80px 0px -80px 0px">
                <div id={`catalogue-${c.id}`} className="group border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:border-[#3b82f6]/50 transition-colors bg-gray-50 dark:bg-white/5">
                  {/* Thumbnail / Mockup */}
                  <div className="relative overflow-hidden h-56">
                    <Image
                      src={getCatalogueThumbnail(c.thumbnail)}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#3b82f6] text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg">
                      PDF Catalogue
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white mb-2">{c.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{c.description}</p>

                    {/* CTA buttons — view links and share */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {c.googleDriveUrl && (
                          <a
                            href={c.googleDriveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#3b82f6] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors"
                          >
                            {/* Google Drive icon */}
                            <svg className="w-4 h-4" viewBox="0 0 87.3 78" fill="currentColor">
                              <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                              <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
                              <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z" fill="#ea4335"/>
                              <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                              <path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                              <path d="M73.4 26.5l-12.65-21.9c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 28H87.3c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                            </svg>
                            View on Drive
                          </a>
                        )}
                        {c.issuuUrl && (
                          <a
                            href={c.issuuUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] dark:bg-white dark:text-[#0a0a0a] hover:opacity-80 text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors border border-white/10"
                          >
                            {/* Issuu icon placeholder */}
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/>
                            </svg>
                            View on Issuu
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() => shareItem('catalogue', c.id, c.title, c.description)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors"
                        title="Share catalogue"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.577 14.591 10.54 15.736 11.604 16.734m6.423-3.425l2.117-2.007a2.827 2.827 0 005.99 2.165l-.969 3.057a2.827 2.827 0 01-2.244 1.589H5.604a2.827 2.827 0 01-2.244-1.589l-.969-3.057a2.827 2.827 0 015.99-2.165l2.117 2.007zm0 0l6.423-3.425" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MediaSection

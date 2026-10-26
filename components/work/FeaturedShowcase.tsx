"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ShowcaseProject {
  id: string
  title: string
  description: string
  thumbnail: string
  liveUrl: string
  tags: string[]
  accentColor: string
  shadowColor: string
  badgeLabel: string
}

const FEATURED: ShowcaseProject[] = [
  {
    id: "remosus",
    title: "Remosus",
    description:
      "Remote job platform built for African talent. Cross-border listings, eligibility verification, and smart application workflows - all in one place.",
    thumbnail: "/remosus.png",
    liveUrl: "https://remosus.vercel.app",
    tags: ["Next.js", "TypeScript", "Job Board"],
    accentColor: "#facc15", // yellow-400
    shadowColor: "#0a0a0a",
    badgeLabel: "Live Product",
  },
  {
    id: "phytogenix",
    title: "Phytogenix",
    description:
      "Digital herbal clinical research platform connecting university labs to medical institutions. Peer review, research submission, and publication flows.",
    thumbnail: "/phyto.png",
    liveUrl: "https://phytogenix.org",
    tags: ["Next.js", "TypeScript", "Research Platform"],
    accentColor: "#6ee7b7", // teal-300
    shadowColor: "#0a0a0a",
    badgeLabel: "Published",
  },
  {
    id: "tizzle-shop",
    title: "Tizzle Shop",
    description:
      "Multivendor e-commerce and talent marketplace. Custom vendor dashboards, product catalogs, and automated WooCommerce checkout flows.",
    thumbnail: "/tizzle.png",
    liveUrl: "https://tizzleshop.com",
    tags: ["WordPress", "WooCommerce", "Multivendor"],
    accentColor: "#f9a8d4", // pink-300
    shadowColor: "#0a0a0a",
    badgeLabel: "E-commerce",
  },
]

export default function FeaturedShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let ctx: { revert: () => void } | null = null

    const initGSAP = async () => {
      const { default: gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return

      const totalWidth = track.scrollWidth - track.offsetWidth

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth + 200}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Subtle card entrance stagger on first pin
        gsap.from(".showcase-card", {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      }, section)
    }

    initGSAP()

    return () => {
      ctx?.revert()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0a] will-change-transform"
      style={{ height: "100vh" }}
    >
      {/* Section Header - sits above the scrolling track */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-8 px-6 sm:px-10 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div>
            <p className="text-xs font-black text-[#0d9488] uppercase tracking-widest mb-1">
              Featured Builds
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Scroll to explore{" "}
              <span className="text-gray-500">&#8594;</span>
            </h3>
          </div>
          <p className="hidden sm:block text-xs font-bold text-gray-600 uppercase tracking-widest pb-1">
            3 Projects
          </p>
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="flex items-center gap-6 sm:gap-8 h-full px-6 sm:px-10 pt-24"
        style={{ width: "max-content" }}
      >
        {FEATURED.map((project, i) => (
          <article
            key={project.id}
            className="showcase-card flex-shrink-0 w-[85vw] sm:w-[520px] lg:w-[580px] h-[520px] sm:h-[560px] relative"
          >
            {/* Neo-brutalist card */}
            <div
              className="relative h-full bg-[#111] rounded-2xl border-2 border-white/10 overflow-hidden group cursor-pointer"
              style={{
                boxShadow: `6px 6px 0px ${project.accentColor}`,
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `10px 10px 0px ${project.accentColor}`
                ;(e.currentTarget as HTMLElement).style.transform = "translate(-3px, -3px)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0px ${project.accentColor}`
                ;(e.currentTarget as HTMLElement).style.transform = "translate(0, 0)"
              }}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-[60%] overflow-hidden border-b-2 border-white/10">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover object-top grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 640px) 85vw, 580px"
                />
                {/* Accent overlay strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: project.accentColor }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[40%]">
                <div>
                  {/* Badge + Number */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-black text-black"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {project.badgeLabel}
                    </span>
                    <span className="text-[10px] font-black text-gray-600 tabular-nums">
                      0{i + 1} / 0{FEATURED.length}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white leading-tight mb-1.5">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-black text-black px-3.5 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all uppercase tracking-wider"
                    style={{ backgroundColor: project.accentColor }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Tilt number watermark behind card */}
            <span
              className="absolute -right-4 -bottom-6 text-[120px] font-black leading-none select-none pointer-events-none opacity-[0.04] text-white"
            >
              {i + 1}
            </span>
          </article>
        ))}

        {/* End spacer card - "See all work" CTA */}
        <div className="showcase-card flex-shrink-0 w-[260px] h-[520px] sm:h-[560px] flex flex-col items-center justify-center gap-4 pl-4 pr-10">
          <p className="text-xs font-black text-gray-600 uppercase tracking-widest text-center">
            That is not all
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0d9488] text-white font-black rounded-xl border-2 border-white/20 shadow-[4px_4px_0px_#0d948866] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#0d948866] active:translate-x-[1px] active:translate-y-[1px] transition-all text-sm tracking-wide"
          >
            See all work &#8595;
          </a>
        </div>
      </div>

      {/* Progress hint dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
        {FEATURED.map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/20"
          />
        ))}
      </div>
    </div>
  )
}


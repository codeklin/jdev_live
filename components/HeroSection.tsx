"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-16 bg-[#fafafa] dark:bg-[#0a0a0a] flex items-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0d948815_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text & Badges */}
          <div className="flex-1 space-y-6">

            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-400 text-black border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
              Available for Fullstack &amp; Copy Retainers
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0a0a0a] dark:text-white">
              Designer.{" "}
              <span className="text-[#0d9488] underline decoration-wavy decoration-yellow-400 underline-offset-8">
                Developer.
              </span>{" "}
              End to end.
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed font-medium">
              Most businesses lose revenue because their brand looks unfinished, their copy misses the mark, or their tech stack cannot keep up. I solve all three: visual design that earns immediate trust, search-driven copy &amp; email flows that convert, and modern engineering across Next.js and WordPress built to scale.
            </p>

            {/* Tilted Neo-Brutalist Sticker Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-yellow-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] rotate-[-2deg]">
                Next.js &amp; React
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-teal-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] rotate-[2deg]">
                WordPress &amp; Woo
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-pink-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] rotate-[-1deg]">
                Revenue Email Flows
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-purple-300 text-black border-2 border-black shadow-[2px_2px_0px_#000] rotate-[3deg]">
                SEO &amp; Conversion Copy
              </span>
            </div>

            {/* Tactile Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#work"
                className="px-6 py-3.5 bg-[#0d9488] text-white font-black rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all text-sm tracking-wide"
              >
                See My Work ↓
              </a>
              <Link
                href="/portfolio"
                className="px-6 py-3.5 bg-white dark:bg-[#151515] text-[#0a0a0a] dark:text-white font-black rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#0d9488] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all text-sm tracking-wide"
              >
                Writing &amp; Strategy Samples →
              </Link>
            </div>
          </div>

          {/* Right: Tactile Polaroid Photo Card with Stickers */}
          <div className="flex-shrink-0 relative pt-4 pb-2">

            {/* Tape Accent Top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-yellow-200/80 border border-yellow-300 backdrop-blur-sm rotate-[-3deg] z-20 shadow-sm" />

            {/* Polaroid Container */}
            <div className="relative bg-white dark:bg-[#181818] border-4 border-black dark:border-white rounded-2xl p-4 pb-6 shadow-[10px_10px_0px_#0a0a0a] dark:shadow-[10px_10px_0px_#0d9488] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              
              {/* Photo Frame */}
              <div className="relative rounded-xl overflow-hidden border-2 border-black bg-[#e5e5e5]">
                <Image
                  src="/headshot.png"
                  alt="Olajide Igbalaye, Designer and Fullstack Developer"
                  width={420}
                  height={500}
                  priority
                  className="object-cover w-64 h-72 sm:w-72 sm:h-[340px] lg:w-80 lg:h-[400px] grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Polaroid Handwritten Caption / Label */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-base font-black tracking-tight text-[#0a0a0a] dark:text-white leading-none">
                    Olajide Igbalaye
                  </p>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">
                    Design &bull; Code &bull; Copy
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-1 rounded bg-[#0d9488] text-white border border-black shadow-[1px_1px_0px_#000]">
                  Fullstack
                </span>
              </div>
            </div>

            {/* Floating Tactile Sticker Badge (Bottom Left) */}
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black border-2 border-black rounded-xl px-3 py-2 shadow-[4px_4px_0px_#000] rotate-[-6deg] z-20">
              <p className="text-[11px] font-black leading-none">100%</p>
              <p className="text-[9px] font-bold mt-0.5 uppercase tracking-wider">End-to-End</p>
            </div>

            {/* Floating Tactile Sticker Badge (Top Right) */}
            <div className="absolute -top-3 -right-3 bg-pink-400 text-black border-2 border-black rounded-xl px-3 py-1.5 shadow-[4px_4px_0px_#000] rotate-[8deg] z-20">
              <p className="text-[10px] font-black uppercase tracking-wider">Verified Live</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

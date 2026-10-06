"use client"
import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-white dark:bg-[#0a0a0a] flex items-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948808_1px,transparent_1px),linear-gradient(to_bottom,#0d948808_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="flex-1 space-y-6">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0a0a0a] dark:text-white">
              Designer.{" "}
              <span className="text-[#0d9488]">Developer.</span>{" "}
              End to end.
            </h1>

            {/* Bio */}
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Most businesses lose clients because their brand looks unfinished or their tech
              stack can&apos;t keep up. I fix both. Visual design that earns trust on first glance,
              built on Next.js so it actually scales.
            </p>

            {/* Single CTA */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#work"
                className="px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg hover:bg-[#0b7a70] transition-colors text-sm tracking-wide"
              >
                See My Work ↓
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 relative">
            {/* Offset shadow block */}
            <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#0d9488]/20 dark:bg-[#0d9488]/30" />

            <Image
              src="/headshot.png"
              alt="Olajide Igbalaye, Designer and Fullstack Developer"
              width={420}
              height={500}
              priority
              className="relative rounded-2xl object-cover w-64 h-72 sm:w-72 sm:h-[340px] lg:w-80 lg:h-[420px] border border-gray-200 dark:border-white/10"
            />

            {/* Role label */}
            <div className="absolute -top-3 -left-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 shadow-md">
              <p className="text-[11px] font-black text-[#0a0a0a] dark:text-white leading-none">Design</p>
              <p className="text-[10px] text-gray-400 mt-0.5">and Dev</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

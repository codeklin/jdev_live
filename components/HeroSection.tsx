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
          <div className="flex-1 space-y-7">

            {/* Availability indicator */}
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#0d9488] uppercase">
                Available · Open to Remote Roles
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0a0a0a] dark:text-white">
              I Design & Build{" "}
              <span className="text-[#0d9488]">Email Systems</span>{" "}
              That Drive Revenue
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Klaviyo flows, Figma-designed campaigns, and fullstack development, end to end.
              I bridge the gap between marketing strategy and technical execution so your email channel actually performs.
            </p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-2">
              {["Klaviyo", "Figma", "Email Automation", "Next.js", "React", "AI Integration"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics row */}
            <div className="flex flex-wrap gap-8 py-2 border-t border-b border-gray-100 dark:border-white/10">
              {[
                { num: "3+", label: "Klaviyo Flows" },
                { num: "42%", label: "Avg. Open Rate" },
                { num: "20+", label: "Automations" },
                { num: "10+", label: "Apps Shipped" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-[#0a0a0a] dark:text-white leading-none tabular-nums">
                    {s.num}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#email-work"
                className="px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg hover:bg-[#0b7a70] transition-colors text-sm tracking-wide"
              >
                See My Email Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-[#0d9488] hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors text-sm"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 relative">
            {/* Offset shadow block */}
            <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#0d9488]/20 dark:bg-[#0d9488]/30" />

            <Image
              src="/headshot.png"
              alt="Olajide Igbalaye, Email Systems Designer and Fullstack Developer"
              width={420}
              height={500}
              priority
              className="relative rounded-2xl object-cover w-64 h-72 sm:w-72 sm:h-[340px] lg:w-80 lg:h-[420px] border border-gray-200 dark:border-white/10"
            />

            {/* Metric bar — horizontal, bottom, asymmetric */}
            <div className="absolute -bottom-4 -right-4 bg-[#0d9488] rounded-xl px-5 py-3 shadow-lg">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">Klaviyo avg.</p>
              <p className="text-lg font-black text-white leading-tight">42% open rate</p>
            </div>

            {/* Role label — top left, smaller, plain */}
            <div className="absolute -top-3 -left-3 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg px-3 py-2 shadow-md">
              <p className="text-[11px] font-black text-[#0a0a0a] dark:text-white leading-none">Email Systems</p>
              <p className="text-[10px] text-gray-400 mt-0.5">& Fullstack Dev</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection

"use client"
import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-white dark:bg-[#0a0a0a] flex items-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948808_1px,transparent_1px),linear-gradient(to_bottom,#0d948808_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="flex-1 space-y-7">
            {/* Status badge */}
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0d9488]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
                Available — Taking New Clients
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-[#0a0a0a] dark:text-white">
              I Help Nigerian Businesses{" "}
              <span className="text-[#0d9488]">Get More Paying Customers</span>{" "}
              Using AI, Content & Automation
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Most businesses don&apos;t have a lead system. I build systems that turn attention into paying customers — using WhatsApp automation, CRM pipelines, and AI-powered content funnels.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 py-1">
              {[
                { num: "10+", label: "Years Building" },
                { num: "30+", label: "Businesses Helped" },
                { num: "₦0→₦M", label: "Revenue Added" },
                { num: "3", label: "Companies Founded" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-[#0a0a0a] dark:text-white leading-none">
                    {s.num}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#contact"
                className="px-7 py-4 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-all text-sm uppercase tracking-wider shadow-lg shadow-[#0d9488]/30"
              >
                Book a Free Growth Audit
              </a>
              <a
                href="#problem"
                className="px-7 py-4 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all text-sm uppercase tracking-wider"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {["bg-teal-500","bg-blue-500","bg-orange-500","bg-purple-500"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-white text-xs font-black`}>
                    {["R","S","C","B"][i]}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="font-bold text-[#0a0a0a] dark:text-white">Realtors, Schools, Clinics & SMEs</span> trust the system
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#0d9488]/10 dark:bg-[#0d9488]/20 border-2 border-[#0d9488]/30" />
            <Image
              src="/headshot.png"
              alt="Olajide Igbalaye — Customer Acquisition Specialist"
              width={420}
              height={500}
              priority
              className="relative rounded-3xl object-cover w-64 h-72 sm:w-72 sm:h-88 lg:w-88 lg:h-[460px] border-4 border-white dark:border-[#0a0a0a] shadow-2xl"
            />
            {/* Floating tag */}
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Specialist in</p>
              <p className="text-sm font-black text-[#0a0a0a] dark:text-white">Customer Acquisition 🇳🇬</p>
            </div>
            {/* Floating metric */}
            <div className="absolute -top-5 -left-5 bg-[#0d9488] rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Avg. result</p>
              <p className="text-sm font-black text-white">3× More Leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

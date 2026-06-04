"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"

const roles = [
  "AI Developer & Agent Builder",
  "AI Commercial & UGC Creator",
  "Fullstack Developer",
  "Cybersecurity Expert",
  "Content Creator & Educator",
  "Photographer & Videographer",
]

const HeroSection = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const i = loopNum % roles.length
    const fullText = roles[i]
    const handleType = () => {
      const newText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      setText(newText)
      setTypingSpeed(isDeleting ? 50 : 150)
      if (!isDeleting && newText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && newText === "") {
        setIsDeleting(false)
        setLoopNum((n) => n + 1)
      }
    }
    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, isMounted])

  return (
    <section
      id="home"
      className="min-h-screen pt-16 bg-white dark:bg-[#0a0a0a] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        {/* Top label */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0d9488] text-[#0d9488] text-xs font-bold uppercase tracking-widest">
            Available for Work & Bookings
          </span>
        </div>

        {/* Main layout: text left, image right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight text-[#0a0a0a] dark:text-white">
              Olajide<br />
              <span className="text-[#0d9488]">Igbalaye.</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center">
              {isMounted ? (
                <p className="text-xl sm:text-2xl font-bold text-gray-500 dark:text-gray-400">
                  <span>{text}</span>
                  <span className="animate-blink text-[#0d9488] ml-0.5">|</span>
                </p>
              ) : (
                <p className="text-xl sm:text-2xl font-bold text-gray-500 dark:text-gray-400">
                  AI Developer & Agent Builder
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              I build secure digital products, develop intelligent AI agents, create
              cinematic AI-generated commercials & UGC, and train creators to launch powerful brand promotions.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { num: "10+", label: "Years Exp." },
                { num: "15+", label: "Projects" },
                { num: "500+", label: "Students" },
                { num: "3", label: "Companies" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-[#0a0a0a] dark:text-white leading-none">
                    {s.num}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/2347031098097"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-colors text-sm uppercase tracking-wider"
              >
                Hire Me
              </a>
              <a
                href="https://wa.me/2347031098097"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border-2 border-[#0a0a0a] dark:border-white text-[#0a0a0a] dark:text-white font-black rounded-2xl hover:bg-[#0a0a0a] hover:text-white dark:hover:bg-white dark:hover:text-[#0a0a0a] transition-colors text-sm uppercase tracking-wider"
              >
                Book An Event
              </a>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="px-7 py-3.5 border-2 border-gray-200 dark:border-white/20 text-gray-500 dark:text-gray-400 font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-colors text-sm uppercase tracking-wider cursor-pointer"
              >
                View Work
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 relative">
            {/* Accent block behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-[#0d9488]/10 dark:bg-[#0d9488]/20 border-2 border-[#0d9488]/30 rounded-3xl" />
            <Image
              src="/headshot.png"
              alt="Olajide Igbalaye"
              width={420}
              height={500}
              priority
              className="relative rounded-3xl object-cover w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] border-4 border-white dark:border-[#0a0a0a] shadow-2xl"
            />
            {/* Floating tag */}
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Based in</p>
              <p className="text-sm font-black text-[#0a0a0a] dark:text-white">Nigeria 🇳🇬</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

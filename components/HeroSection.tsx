"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMounted, setIsMounted] = useState(false)

  const roles = [
    "Cybersecurity Expert",
    "Data Analyst",
    "Fullstack Developer",
    "Tech Innovator"
  ]

  // Initialize on mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      const newText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)

      setText(newText)

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles, isMounted])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="flex flex-col gap-12 text-center items-center justify-around animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        
        <div className="md:mt-2 md:w-3/5 space-y-6">
          {/* Greeting with animated underline */}
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-light text-teal-600 dark:text-teal-400 mb-2">
              Hello, I'm
            </h2>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300% pb-2">
            Olajide
          </h1>
          
          {/* Typewriter effect */}
          <div className="h-20 md:h-24 flex items-center justify-center md:justify-start">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {isMounted ? (
                <>
                  <span className="inline-block min-w-[20px]">{text}</span>
                  <span className="animate-blink text-teal-600">|</span>
                </>
              ) : (
                <span className="inline-block min-w-[20px]">Cybersecurity Expert</span>
              )}
            </h2>
          </div>

          {/* Description with modern styling */}
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            I craft{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 font-semibold text-teal-600 dark:text-teal-400">
                secure digital experiences
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-200 dark:bg-teal-900/50 -z-0 group-hover:h-full transition-all duration-300"></span>
            </span>
            , analyze complex data patterns, and build fullstack applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start pt-4">
            <Link
              to="projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <a
              href="https://wa.me/2347031098097"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-semibold rounded-full hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image with modern frame */}
        <div className="md:mt-2 md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient bg-300%"></div>
          <div className="relative">
            <Image
              src="/headshot.png"
              alt="Olajide's headshot"
              width={600}
              height={600}
              priority
              className="relative rounded-3xl shadow-2xl w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-cover border-4 border-white dark:border-gray-800 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-teal-600 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-purple-600 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-row items-center text-center justify-center pb-10">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll to explore
            </span>
            <HiArrowDown 
              size={35} 
              className="animate-bounce text-teal-600 dark:text-teal-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" 
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

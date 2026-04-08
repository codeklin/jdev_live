"use client"
import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Projects", page: "projects" },
  { label: "Media", page: "media" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="home" className="cursor-pointer">
          <span className="text-xl font-black tracking-tight text-[#0a0a0a] dark:text-white">
            {"<J/Dev>"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              to={item.page}
              className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] cursor-pointer transition-colors duration-200"
              activeClass="!text-[#0d9488]"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <RiSunLine size={20} className="text-white" />
            ) : (
              <RiMoonFill size={20} className="text-[#0a0a0a]" />
            )}
          </button>
          <a
            href="https://wa.me/2347031098097"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#0d9488] text-white text-sm font-bold rounded-2xl hover:bg-[#0b7a70] transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-gray-100 dark:bg-white/10"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <RiSunLine size={18} className="text-white" />
            ) : (
              <RiMoonFill size={18} />
            )}
          </button>
          <button
            onClick={() => setNavbar(!navbar)}
            className="p-2 text-[#0a0a0a] dark:text-white"
            aria-label="Toggle menu"
          >
            {navbar ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbar && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10 px-4 pb-6 pt-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              to={item.page}
              className="block text-base font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-[#0d9488] cursor-pointer transition-colors"
              activeClass="!text-[#0d9488]"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setNavbar(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2347031098097"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-3 bg-[#0d9488] text-white font-bold rounded-2xl hover:bg-[#0b7a70] transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

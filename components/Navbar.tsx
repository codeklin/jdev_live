"use client"
import React, { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "What I Do", page: "services" },
  { label: "Email Work", page: "email-work" },
  { label: "Projects", page: "projects" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const getHref = (page: string) => (isHome ? `#${page}` : `/#${page}`)

  // Close on Escape key
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false)
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [open, handleKey])

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-black tracking-tight text-[#0a0a0a] dark:text-white group-hover:text-[#0d9488] transition-colors">
              {"<J/Dev>"}
            </span>
            <span className="hidden sm:inline-block text-[9px] font-semibold uppercase tracking-widest text-gray-400 border border-gray-200 dark:border-white/10 rounded px-1.5 py-0.5">
              ESD
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.page}
                href={getHref(item.page)}
                className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/portfolio"
              className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                pathname === "/portfolio"
                  ? "text-[#0d9488]"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white"
              }`}
            >
              Portfolio
            </Link>
          </nav>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <RiSunLine size={17} /> : <RiMoonFill size={17} />}
            </button>
            <a
              href={getHref("contact")}
              className="px-4 py-2 bg-[#0d9488] text-white text-xs font-bold rounded-lg hover:bg-[#0b7a70] transition-colors tracking-wide"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <RiSunLine size={17} className="text-white" /> : <RiMoonFill size={17} />}
            </button>

            {/* Hamburger — 3 lines that animate to X */}
            <button
              onClick={() => setOpen(true)}
              className="p-2 flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-md hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block w-5 h-px bg-[#0a0a0a] dark:bg-white rounded-full" />
              <span className="block w-4 h-px bg-[#0a0a0a] dark:bg-white rounded-full self-end" />
              <span className="block w-5 h-px bg-[#0a0a0a] dark:bg-white rounded-full" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile: backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile: slide-in panel from right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-[#0d0d0d] border-l border-gray-100 dark:border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 dark:border-white/10 flex-shrink-0">
          <span className="text-sm font-black text-[#0a0a0a] dark:text-white tracking-tight">
            {"<J/Dev>"}
          </span>
          {/* Close button — clean X, not an icon import */}
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {/* Home */}
          <a
            href={getHref("home")}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between py-3 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white border-b border-gray-100 dark:border-white/10 transition-colors group"
          >
            Home
            <span className="text-xs text-gray-300 dark:text-gray-600 group-hover:text-[#0d9488] transition-colors">→</span>
          </a>

          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={getHref(item.page)}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white border-b border-gray-100 dark:border-white/10 transition-colors group"
            >
              {item.label}
              <span className="text-xs text-gray-300 dark:text-gray-600 group-hover:text-[#0d9488] transition-colors">→</span>
            </a>
          ))}

          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className={`flex items-center justify-between py-3 text-sm font-semibold border-b border-gray-100 dark:border-white/10 transition-colors group ${
              pathname === "/portfolio"
                ? "text-[#0d9488]"
                : "text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white"
            }`}
          >
            Portfolio
            <span className="text-xs text-[#0d9488]">↗</span>
          </Link>
        </nav>

        {/* Panel footer — CTA */}
        <div className="px-6 py-6 border-t border-gray-100 dark:border-white/10 flex-shrink-0 space-y-3">
          <a
            href={getHref("contact")}
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 bg-[#0d9488] text-white font-bold text-sm rounded-lg hover:bg-[#0b7a70] transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-[10px] text-center text-gray-400 dark:text-gray-600">
            Remote · Full-time · Contract · Freelance
          </p>
        </div>
      </div>
    </>
  )
}

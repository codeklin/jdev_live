"use client"
import React, { useState, useEffect, useCallback } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

interface NavItem {
  label: string
  href: string
  isRoute?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "work" },
  { label: "Cybersecurity", href: "/cybersecurity", isRoute: true },
  { label: "Writing", href: "/portfolio", isRoute: true },
  { label: "Contact", href: "contact" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
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
    setMounted(true)
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

          {/* Mobile direct Writing CTA button (between logo and hamburger) */}
          <div className="flex items-center md:hidden">
            <Link
              href="/portfolio"
              className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all bg-[#0d9488]/15 text-[#0d9488] dark:text-[#2dd4bf] border border-[#0d9488]/30 hover:bg-[#0d9488] hover:text-white shadow-sm"
            >
              Writing
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold transition-colors ${
                    pathname === item.href
                      ? "text-[#0d9488]"
                      : "text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={getHref(item.href)}
                  className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-500 hover:text-[#0a0a0a] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (currentTheme === "dark" ? <RiSunLine size={17} /> : <RiMoonFill size={17} />)}
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
              {mounted && (currentTheme === "dark" ? <RiSunLine size={17} className="text-white" /> : <RiMoonFill size={17} />)}
            </button>

            {/* Hamburger - 3 lines that animate to X */}
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


      {/* Mobile: full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col transition-all duration-300 ease-in-out md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 flex-shrink-0">
          <span className="text-lg font-black text-white tracking-tight">
            {"<J/Dev>"}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Nav links — centred, massive */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          <a
            href={getHref("home")}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between py-4 text-4xl font-black text-white/50 hover:text-white border-b border-white/10 transition-colors group"
          >
            Home
            <span className="text-lg text-white/20 group-hover:text-[#0d9488] transition-colors">→</span>
          </a>

          {NAV_ITEMS.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 text-4xl font-black border-b border-white/10 transition-colors group ${
                  pathname === item.href
                    ? "text-[#0d9488]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
                <span className="text-lg text-white/20 group-hover:text-[#0d9488] transition-colors">→</span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={getHref(item.href)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-4xl font-black text-white/50 hover:text-white border-b border-white/10 transition-colors group"
              >
                {item.label}
                <span className="text-lg text-white/20 group-hover:text-[#0d9488] transition-colors">→</span>
              </a>
            )
          )}
        </nav>

        {/* Footer CTA */}
        <div className="px-8 py-8 flex-shrink-0 space-y-4">
          <a
            href={getHref("contact")}
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-4 bg-[#0d9488] text-white font-black text-base rounded-xl hover:bg-[#0b7a70] transition-colors"
          >
            Let&apos;s Talk
          </a>
          <p className="text-xs text-center text-gray-600">
            Remote · Full-time · Contract · Freelance
          </p>
        </div>
      </div>
    </>
  )
}

"use client"
import React, { useState } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", page: "home" },
  { label: "Problem", page: "problem" },
  { label: "Services", page: "services" },
  { label: "Case Studies", page: "cases" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // On homepage: use #hash anchor (smooth scroll)
  // On any other page: prepend / so it navigates home first
  const getHref = (page: string) => (isHome ? `#${page}` : `/#${page}`)

  return (
    <header className="w-full fixed top-0 z-50 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-100 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-[#0a0a0a] dark:text-white">
            {"<J/Dev>"}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest bg-[#0d9488]/10 text-[#0d9488] rounded-full border border-[#0d9488]/30">
            CAS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={getHref(item.page)}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          {/* Portfolio link — distinct style to stand out */}
          <Link
            href="/portfolio"
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
              pathname === "/portfolio"
                ? "text-[#0d9488]"
                : "text-gray-500 dark:text-gray-400 hover:text-[#0d9488] dark:hover:text-[#0d9488]"
            }`}
          >
            Portfolio
          </Link>

          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <RiSunLine size={18} className="text-white" />
            ) : (
              <RiMoonFill size={18} className="text-[#0a0a0a]" />
            )}
          </button>

          <a
            href={getHref("contact")}
            className="px-5 py-2 bg-[#0d9488] text-white text-xs font-black uppercase tracking-wider rounded-2xl hover:bg-[#0b7a70] transition-colors"
          >
            Free Audit
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
            <a
              key={item.page}
              href={getHref(item.page)}
              onClick={() => setNavbar(false)}
              className="block text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-[#0d9488] transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* Portfolio mobile link */}
          <Link
            href="/portfolio"
            onClick={() => setNavbar(false)}
            className={`block text-sm font-bold uppercase tracking-widest transition-colors ${
              pathname === "/portfolio"
                ? "text-[#0d9488]"
                : "text-gray-600 dark:text-gray-300 hover:text-[#0d9488]"
            }`}
          >
            Portfolio ↗
          </Link>

          {/* Divider */}
          <div className="border-t border-gray-100 dark:border-white/10 pt-2">
            <a
              href={getHref("contact")}
              onClick={() => setNavbar(false)}
              className="block w-full text-center px-5 py-3 bg-[#0d9488] text-white font-black text-xs uppercase tracking-wider rounded-2xl hover:bg-[#0b7a70] transition-colors"
            >
              Book Free Growth Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

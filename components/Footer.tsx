import React from "react"
import Link from "next/link"
import { FaXTwitter, FaSquareWhatsapp } from "react-icons/fa6"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-2xl font-black text-white">{"<J/Dev>"}</p>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Customer Acquisition & AI Automation Specialist — helping Nigerian businesses get more paying customers.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-6">
            {[
              { label: "Home", to: "home" },
              { label: "Problem", to: "problem" },
              { label: "Services", to: "services" },
              { label: "Case Studies", to: "cases" },
              { label: "About", to: "about" },
              { label: "Free Audit", to: "contact" },
            ].map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#0d9488] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/portfolio"
              className="text-xs font-bold uppercase tracking-widest text-[#0d9488] hover:text-[#0b7a70] transition-colors"
            >
              Portfolio ↗
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2025 Olajide Igbalaye. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/olajide-igbalaye/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <AiOutlineLinkedin size={24} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
            </a>
            <a href="https://github.com/codeklin" target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiOutlineGithub size={24} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
            </a>
            <a href="https://x.com/JideLence" target="_blank" rel="noreferrer" aria-label="X / Twitter">
              <FaXTwitter size={22} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
            </a>
            <a href="https://wa.me/2347031098097" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaSquareWhatsapp size={24} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from "react"
import { FaXTwitter, FaSquareWhatsapp } from "react-icons/fa6"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-black text-white">{"<J/Dev>"}</p>
          <p className="text-xs text-gray-500 mt-1">© 2025 Olajide Igbalaye. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/olajide-igbalaye/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin size={26} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
          </a>
          <a href="https://github.com/codeklin" target="_blank" rel="noreferrer">
            <AiOutlineGithub size={26} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
          </a>
          <a href="https://x.com/JideLence" target="_blank" rel="noreferrer">
            <FaXTwitter size={24} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
          </a>
          <a href="https://wa.me/+2347031098097" target="_blank" rel="noreferrer">
            <FaSquareWhatsapp size={26} className="text-gray-500 hover:text-[#0d9488] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

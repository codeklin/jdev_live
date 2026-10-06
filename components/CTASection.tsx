"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function CTASection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    const url = `https://wa.me/2347031098097?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#25D366] transition-colors"
  const labelClass = "block text-left text-sm text-gray-400 mb-1.5"

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] py-24 px-4 sm:px-6 border-t border-white/10"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Got a project in mind?
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Whether you need a brand that stops the scroll, an app that actually ships,
          or both, I want to hear about it. Fill in the form and I&apos;ll reply on WhatsApp.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="cta-name" className={labelClass}>
              Your name
            </label>
            <input
              id="cta-name"
              type="text"
              required
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="cta-email" className={labelClass}>
              Your email
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="jane@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="cta-message" className={labelClass}>
              What do you need help with?
            </label>
            <textarea
              id="cta-message"
              rows={4}
              required
              placeholder="Tell me what you're building, what's broken, or what you wish existed."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold rounded-lg transition-colors text-sm tracking-wide"
            >
              <FaWhatsapp size={18} />
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

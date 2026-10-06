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
          Let&apos;s build something.
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          Open to remote work — full-time, contract, or freelance.
          Fill in the form and I&apos;ll get your message on WhatsApp.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="cta-name" className={labelClass}>
              Name
            </label>
            <input
              id="cta-name"
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="cta-email" className={labelClass}>
              Email
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="cta-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="cta-message"
              rows={4}
              required
              placeholder="Tell me about your project…"
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

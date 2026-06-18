"use client"
import { useState } from "react"
import SlideUp from "./SlideUp"

const businessTypes = [
  "Real Estate / Realtor",
  "School / Education",
  "Clinic / Healthcare",
  "Restaurant / Food",
  "Fashion / Retail",
  "Professional Services",
  "E-commerce",
  "Other",
]

const LeadMagnetSection = () => {
  const [form, setForm] = useState({ name: "", business: "", whatsapp: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.business || !form.whatsapp) return
    setLoading(true)
    // Build WhatsApp message and redirect
    const msg = encodeURIComponent(
      `Hi Olajide! I'd like to book a Free Business Growth Audit.\n\nName: ${form.name}\nBusiness Type: ${form.business}\nWhatsApp: ${form.whatsapp}`
    )
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/2347031098097?text=${msg}`, "_blank")
    }, 800)
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Value proposition */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full">
                Free — No Strings
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Get a Free{" "}
                <span className="text-[#0d9488]">Business Growth Audit</span>
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                In 30 minutes, I&apos;ll analyse your current customer acquisition situation and show you exactly where you&apos;re leaking money — and how to fix it. No pitch. No pressure.
              </p>

              {/* What you get */}
              <div className="space-y-4 pt-2">
                {[
                  { icon: "🔍", title: "Lead Gap Analysis", desc: "Find exactly where you're losing potential customers" },
                  { icon: "⚙️", title: "System Blueprint", desc: "A simple roadmap of what to build first" },
                  { icon: "📈", title: "Quick Wins", desc: "2–3 things you can do this week to get more leads" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>

          {/* Right: Form */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-5xl">✅</div>
                  <h3 className="text-2xl font-black text-white">You&apos;re In!</h3>
                  <p className="text-gray-400 text-sm">
                    A WhatsApp message has been opened for you. Send it and I&apos;ll confirm your audit slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#0d9488] text-sm font-bold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">Book Your Free Audit</h3>
                    <p className="text-xs text-gray-500">Takes 30 seconds. Zero spam.</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Chukwuemeka Obi"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Business Type
                    </label>
                    <select
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#0d9488] transition-colors appearance-none"
                    >
                      <option value="" disabled>Select your business type</option>
                      {businessTypes.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 08031234567"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-[#0d9488] hover:bg-[#0b7a70] disabled:opacity-60 text-white font-black text-sm uppercase tracking-wider rounded-2xl transition-colors"
                  >
                    {loading ? "Connecting..." : "Book My Free Growth Audit →"}
                  </button>

                  <p className="text-[11px] text-center text-gray-600">
                    You&apos;ll be redirected to WhatsApp to confirm. No emails. No spam.
                  </p>
                </form>
              )}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnetSection

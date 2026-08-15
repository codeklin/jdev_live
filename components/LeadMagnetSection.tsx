"use client"
import { useState } from "react"
import SlideUp from "./SlideUp"

const projectTypes = [
  "Klaviyo Flow Build",
  "Email Campaign Strategy",
  "Figma Email Design",
  "ESP Migration",
  "Fullstack Web App",
  "AI / Automation Build",
  "Full-time Remote Role",
  "Contract Engagement",
  "Other",
]

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.projectType) return
    setLoading(true)

    // Formspree endpoint - replace YOUR_FORM_ID with your actual Formspree form ID
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please email me directly at olajide@jdev.live")
      }
    } catch {
      alert("Something went wrong. Please email me directly at olajide@jdev.live")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="space-y-7">

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488] mb-3">06 — Contact</p>
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                  Ready to build{" "}
                  <span className="text-[#0d9488]">something that performs?</span>
                </h2>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Tell me about your project. I&apos;ll review it and get back to you within 24 hours.
              </p>

              {/* Services list — no emoji, plain and clean */}
              <div className="space-y-5 pt-2">
                {[
                  {
                    title: "Email Marketing",
                    desc: "Klaviyo flows, campaign strategy, Figma design, ESP migration",
                  },
                  {
                    title: "Fullstack Dev",
                    desc: "Next.js apps, AI tools, automation pipelines, custom integrations",
                  },
                  {
                    title: "Remote Engagements",
                    desc: "Full-time, contract, or freelance. Available worldwide.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#0d9488]/30 pl-4 hover:border-[#0d9488] transition-colors group">
                    <p className="text-sm font-black text-white group-hover:text-[#0d9488] transition-colors">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Direct email */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-2">Direct email</p>
                <a
                  href="mailto:olajide@jdev.live"
                  className="text-white font-black text-base hover:text-[#0d9488] transition-colors"
                >
                  olajide@jdev.live
                </a>
              </div>

            </div>
          </SlideUp>

          {/* Right: Form */}
          <SlideUp offset="-100px 0px -100px 0px">
            <div className="border border-white/10 rounded-xl p-8">
              {submitted ? (
                <div className="py-12 space-y-4">
                  <h3 className="text-2xl font-black text-white">Message sent.</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    I&apos;ll review your project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: "", email: "", projectType: "", message: "" })
                    }}
                    className="text-[#0d9488] text-sm font-semibold hover:underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-black text-white mb-1">Let&apos;s talk</h3>
                    <p className="text-xs text-gray-500">Response within 24 hours. No spam, ever.</p>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Sarah Johnson"
                      className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="sarah@company.com"
                      className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0d9488] transition-colors appearance-none"
                    >
                      <option value="" disabled>What are you looking to build?</option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                      Message <span className="text-gray-600 normal-case font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Brief description of your project, goals, or timeline..."
                      className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0d9488] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3.5 bg-[#0d9488] hover:bg-[#0b7a70] disabled:opacity-50 text-white font-bold text-sm rounded-lg transition-colors"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>

                  <p className="text-[11px] text-center text-gray-600">
                    Your details are never shared or sold.
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

export default ContactSection

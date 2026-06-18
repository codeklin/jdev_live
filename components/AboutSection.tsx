"use client"
import SlideUp from "./SlideUp"

const tools = [
  "WhatsApp Business API",
  "GoHighLevel CRM",
  "Notion CRM",
  "Make (Integromat)",
  "Zapier",
  "OpenAI API",
  "LangChain",
  "Next.js",
  "Tailwind CSS",
  "Midjourney",
  "ElevenLabs",
  "Runway ML",
]

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  Who I Am
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                  I Build Systems. <br />
                  <span className="text-[#0d9488]">Not Just Websites.</span>
                </h2>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m <span className="font-black text-[#0a0a0a] dark:text-white">Olajide Igbalaye</span> — a Customer Acquisition Specialist helping Nigerian SMEs, realtors, schools, and clinics build the systems they need to grow predictably.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                I don&apos;t just build pretty websites. I architect the full pipeline: from the moment someone discovers your business online to the moment they become a paying customer — and then a repeat one.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                With 10+ years building digital products and AI automations, I combine technical depth with a commercial mindset. I understand both the code and the customer journey.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-colors text-sm uppercase tracking-wider"
                >
                  Work With Me
                </a>
                <a
                  href="https://wa.me/2347031098097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 border-2 border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-colors text-sm uppercase tracking-wider"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Right */}
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "Years Experience" },
                  { num: "30+", label: "Businesses Helped" },
                  { num: "500+", label: "Students Trained" },
                  { num: "3", label: "Companies Founded" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6">
                    <p className="text-3xl font-black text-[#0a0a0a] dark:text-white leading-none">{s.num}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* What I focus on */}
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">My Focus Areas</p>
                {[
                  { label: "AI & Automation", color: "bg-[#0d9488]" },
                  { label: "Lead Generation Systems", color: "bg-blue-500" },
                  { label: "CRM & Pipeline Management", color: "bg-purple-500" },
                  { label: "WhatsApp Marketing", color: "bg-green-500" },
                  { label: "Revenue Funnels", color: "bg-orange-500" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${f.color} flex-shrink-0`} />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{f.label}</span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Tools I Use</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-400 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

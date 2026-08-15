"use client"
import SlideUp from "./SlideUp"

const tools = [
  "Klaviyo",
  "Figma",
  "Mailchimp",
  "ActiveCampaign",
  "HubSpot",
  "Make (Integromat)",
  "Zapier",
  "OpenAI API",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "GoHighLevel CRM",
  "LangChain",
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
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488] mb-3">05 — About</p>
                <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a0a] dark:text-white leading-tight">
                  The Dev Who Gets{" "}
                  <br />
                  <span className="text-[#0d9488]">Email Marketing.</span>
                </h2>
              </div>

              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m <span className="font-black text-[#0a0a0a] dark:text-white">Olajide Igbalaye</span>, an Email Systems Designer and Fullstack Developer. Most email specialists can&apos;t code. Most developers don&apos;t understand email marketing. I live at the intersection of both.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I design email flows in Figma, build and deploy them in Klaviyo, then connect everything to your stack with code. From welcome series to post-purchase sequences, I own the full pipeline.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                With 10+ years building digital products and marketing systems, I combine technical depth with a commercial mindset. I understand both the code and the customer journey.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg hover:bg-[#0b7a70] transition-colors text-sm"
                >
                  Work With Me
                </a>
                <a
                  href="https://www.linkedin.com/in/olajide-igbalaye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-[#0d9488] hover:text-[#0d9488] transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/codeklin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-[#0d9488] hover:text-[#0d9488] transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Right */}
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-10">

              {/* Stats — plain border-top style, no cards */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-2 border-t-2 border-[#0d9488]">
                {[
                  { num: "3+", label: "Klaviyo Flows Built" },
                  { num: "42%", label: "Avg. Open Rate" },
                  { num: "20+", label: "Automations Deployed" },
                  { num: "10+", label: "Web Apps Shipped" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-[#0a0a0a] dark:text-white leading-none tabular-nums">{s.num}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Focus areas — clean list, no dots */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Focus Areas</p>
                <ul className="space-y-1.5">
                  {[
                    "Email Marketing Systems",
                    "Klaviyo Flow Design & Deployment",
                    "Figma Email & Workflow Design",
                    "Fullstack Web Development",
                    "AI & Marketing Automation",
                  ].map((f) => (
                    <li key={f} className="text-sm text-gray-600 dark:text-gray-300 border-l border-gray-200 dark:border-white/10 pl-3 hover:border-[#0d9488] hover:text-[#0a0a0a] dark:hover:text-white transition-colors">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors"
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

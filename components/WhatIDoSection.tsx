"use client"
import SlideUp from "./SlideUp"

const emailServices = [
  "Klaviyo flow design & deployment",
  "Welcome & onboarding sequences",
  "Abandoned cart & browse recovery",
  "Post-purchase & retention flows",
  "Campaign strategy & segmentation",
  "Figma email wireframes & templates",
  "A/B testing & performance reporting",
  "ESP migration & list management",
]

const devServices = [
  "Next.js & React web applications",
  "Custom landing pages & funnels",
  "API integrations & webhooks",
  "AI-powered tools & automations",
  "CRM builds & pipeline setup",
  "Make / Zapier workflow automation",
  "TypeScript & fullstack architecture",
  "Performance optimisation & SEO",
]

const WhatIDoSection = () => {
  return (
    <section id="services" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488] mb-3">01 — What I Do</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-6">
              Two Disciplines.{" "}
              <span className="text-[#0d9488]">One Specialist.</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-[#0d9488] pl-4">
              Most email specialists can't code. Most developers don't do email.
              I do both — which means I can take a strategy from a Figma wireframe
              to a live, revenue-generating Klaviyo flow without handing off to anyone.
            </p>
          </div>
        </SlideUp>

        {/* Two pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Email pillar */}
          <SlideUp offset="-80px 0px -80px 0px">
            <div className="bg-[#0a0a0a] dark:bg-white/5 border border-[#0d9488]/40 rounded-2xl p-8 flex flex-col gap-6 h-full">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#0d9488] mb-2">Primary Specialisation</p>
                <h3 className="text-2xl font-black text-white">Email Marketing Systems</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  I design, build, and optimise email systems that convert subscribers into buyers,
                  using Klaviyo, Figma, and deep segmentation strategy.
                </p>
              </div>

              {/* Service list — border-left style */}
              <ul className="space-y-2 flex-1">
                {emailServices.map((s) => (
                  <li key={s} className="border-l-2 border-[#0d9488]/40 pl-3 text-sm text-gray-300 py-0.5 hover:border-[#0d9488] hover:text-white transition-colors">
                    {s}
                  </li>
                ))}
              </ul>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {["Klaviyo", "Figma", "Mailchimp", "ActiveCampaign", "HubSpot"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-medium rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#email-work"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0d9488] hover:text-white transition-colors group"
              >
                See email work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </SlideUp>

          {/* Dev pillar */}
          <SlideUp offset="-80px 0px -80px 0px">
            <div className="bg-gray-50 dark:bg-white/5 border border-purple-500/30 rounded-2xl p-8 flex flex-col gap-6 h-full">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-500 mb-2">Technical Backbone</p>
                <h3 className="text-2xl font-black text-[#0a0a0a] dark:text-white">Fullstack Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  From custom web apps to AI-powered tools and automation pipelines, I build the
                  technical infrastructure that makes marketing systems scale.
                </p>
              </div>

              {/* Service list — border-left style */}
              <ul className="space-y-2 flex-1">
                {devServices.map((s) => (
                  <li key={s} className="border-l-2 border-purple-500/30 pl-3 text-sm text-gray-600 dark:text-gray-300 py-0.5 hover:border-purple-500 hover:text-[#0a0a0a] dark:hover:text-white transition-colors">
                    {s}
                  </li>
                ))}
              </ul>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                {["Next.js", "React", "TypeScript", "OpenAI", "Make"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 text-[10px] font-medium rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-purple-500 hover:text-[#0a0a0a] dark:hover:text-white transition-colors group"
              >
                See dev projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </SlideUp>
        </div>

        {/* Availability line — no cards, just clean text */}
        <SlideUp offset="-80px 0px -80px 0px">
          <p className="mt-10 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-white/10 pt-8">
            Available for{" "}
            <span className="font-semibold text-[#0a0a0a] dark:text-white">full-time remote</span>,{" "}
            <span className="font-semibold text-[#0a0a0a] dark:text-white">contract</span>, and{" "}
            <span className="font-semibold text-[#0a0a0a] dark:text-white">freelance</span> engagements worldwide.{" "}
            <a href="#contact" className="text-[#0d9488] font-semibold hover:underline underline-offset-2">Get in touch →</a>
          </p>
        </SlideUp>

      </div>
    </section>
  )
}

export default WhatIDoSection

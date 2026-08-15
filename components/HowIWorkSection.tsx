"use client"
import SlideUp from "./SlideUp"

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We map your audience, goals, and current email setup. I audit what exists, identify gaps, and propose a flow architecture tailored to your funnel stage.",
    accent: "border-[#0d9488]",
    num: "text-[#0d9488]",
  },
  {
    step: "02",
    title: "Figma Flow Design",
    desc: "Every email and sequence is designed in Figma first: layout, copy structure, CTA placement, mobile view. You approve the design before a single line goes into Klaviyo.",
    accent: "border-[#0d9488]",
    num: "text-[#0d9488]",
  },
  {
    step: "03",
    title: "Klaviyo Build & Automation",
    desc: "Flows are built inside Klaviyo with proper segmentation, conditional splits, dynamic product blocks, and timing logic. If your stack needs custom integration, I write the code.",
    accent: "border-purple-500",
    num: "text-purple-400",
  },
  {
    step: "04",
    title: "Test, QA & Deploy",
    desc: "Every flow is tested across devices and email clients — Gmail, Outlook, Apple Mail. Seed sends, link checks, and rendering QA before anything goes live.",
    accent: "border-purple-500",
    num: "text-purple-400",
  },
  {
    step: "05",
    title: "Reporting & Optimisation",
    desc: "Post-launch I track open rates, click rates, revenue attribution, and unsubscribe trends. I deliver a report with real insights and iterate based on data, not guesswork.",
    accent: "border-[#0d9488]",
    num: "text-[#0d9488]",
  },
  {
    step: "06",
    title: "Handover or Ongoing",
    desc: "You get full documentation and a clean Klaviyo account you own. I can stay on as your email operator, running campaigns, A/B tests, and seasonal flows on a retainer.",
    accent: "border-purple-500",
    num: "text-purple-400",
  },
]

const HowIWorkSection = () => {
  return (
    <section id="process" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488] mb-3">03 — Process</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              From Figma to{" "}
              <span className="text-[#0d9488]">Revenue</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              A transparent, structured process that keeps you in control at every stage.
              No black boxes, no guesswork, no surprises.
            </p>
          </div>
        </SlideUp>

        {/* Steps — two colors only, no rainbow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <SlideUp key={i} offset="-60px 0px -60px 0px">
              <div className={`bg-white dark:bg-[#0a0a0a] p-8 h-full flex flex-col gap-3 border-l-2 ${s.accent}`}>
                <span className={`text-4xl font-black ${s.num} opacity-30 leading-none tabular-nums`}>{s.step}</span>
                <h3 className="text-base font-black text-[#0a0a0a] dark:text-white leading-snug">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{s.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Why it works — plain, no dark card */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100 dark:border-white/10">
            {[
              {
                title: "Design before build",
                desc: "Figma-first means fewer revisions and zero surprises when it goes live in Klaviyo.",
              },
              {
                title: "Code when it matters",
                desc: "Most email specialists can't integrate APIs or build custom logic. I can, which unlocks more powerful automations.",
              },
              {
                title: "You own everything",
                desc: "Your Klaviyo account, your Figma files, your data. Full handover with documentation, always.",
              },
            ].map((w) => (
              <div key={w.title}>
                <p className="text-sm font-black text-[#0a0a0a] dark:text-white mb-2">{w.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </SlideUp>

      </div>
    </section>
  )
}

export default HowIWorkSection

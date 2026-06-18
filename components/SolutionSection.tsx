"use client"
import SlideUp from "./SlideUp"

const pillars = [
  {
    step: "01",
    title: "Lead Capture System",
    desc: "A dedicated landing page, lead form, or WhatsApp opt-in that captures every interested prospect — and sends them into your pipeline automatically.",
    color: "text-[#0d9488]",
    border: "border-[#0d9488]",
    bg: "bg-[#0d9488]/10",
  },
  {
    step: "02",
    title: "WhatsApp Automation",
    desc: "Auto-replies, broadcast messages, follow-up sequences — running 24/7 on WhatsApp so no lead goes cold while you sleep.",
    color: "text-blue-400",
    border: "border-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    step: "03",
    title: "CRM Dashboard",
    desc: "A visual pipeline where you see every lead, their stage, last contact, and next action — so nothing falls through the cracks.",
    color: "text-purple-400",
    border: "border-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    step: "04",
    title: "Content-to-Lead Funnel",
    desc: "AI-powered content strategy that drives traffic from Instagram, TikTok, or Google into your lead system on autopilot.",
    color: "text-orange-400",
    border: "border-orange-400",
    bg: "bg-orange-400/10",
  },
]

const SolutionSection = () => {
  return (
    <section id="solution" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full mb-4">
              The System
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight mb-4">
              I Build{" "}
              <span className="text-[#0d9488]">Customer Acquisition Systems</span>
              {" "}— Not Just Websites
            </h2>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              A customer acquisition system is a connected set of tools, automations, and processes that consistently brings in leads and converts them into paying customers — without you chasing anyone.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className={`${p.bg} border ${p.border} border-opacity-30 rounded-3xl p-8 h-full`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className={`text-4xl font-black ${p.color} opacity-30 leading-none`}>
                    {p.step}
                  </span>
                  <h3 className={`text-xl font-black ${p.color} leading-snug pt-1`}>
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* How it all connects */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mt-12 bg-[#0a0a0a] dark:bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-widest text-[#0d9488] mb-4">How It All Connects</p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-gray-300">
              {[
                "Attention (Content)",
                "→",
                "Lead Capture",
                "→",
                "WhatsApp Auto-Reply",
                "→",
                "CRM Pipeline",
                "→",
                "Follow-Up Sequence",
                "→",
                "Paying Customer",
              ].map((step, i) => (
                <span
                  key={i}
                  className={
                    step === "→"
                      ? "text-[#0d9488] text-lg"
                      : "px-3 py-1.5 bg-white/10 rounded-xl text-xs"
                  }
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default SolutionSection

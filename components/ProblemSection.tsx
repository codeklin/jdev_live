"use client"
import SlideUp from "./SlideUp"

const problems = [
  {
    icon: "💸",
    title: "You Have No Lead System",
    desc: "You rely on referrals and word-of-mouth. When they dry up, so does your income. There's no predictable pipeline.",
  },
  {
    icon: "📱",
    title: "Your WhatsApp Is a Mess",
    desc: "Leads slide in, you reply late, they go cold. No follow-up system means you're losing sales every single day.",
  },
  {
    icon: "📊",
    title: "Zero CRM or Pipeline Tracking",
    desc: "You don't know who you talked to, who ghosted you, or who's ready to buy. Money is falling through the cracks.",
  },
  {
    icon: "🤷",
    title: "No Clear Sales Process",
    desc: "Every conversation starts from scratch. No script, no funnel, no structure — just hoping the client says yes.",
  },
  {
    icon: "😴",
    title: "You Follow Up Manually",
    desc: "You forget to follow up. Or you follow up too late. Automation would do this 24/7 while you sleep.",
  },
  {
    icon: "🔇",
    title: "Content Gets No Response",
    desc: "You post on Instagram but nobody reaches out. Your content doesn't have a call-to-action that converts.",
  },
]

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest rounded-full mb-4">
              The Real Problem
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            This Is Why You&apos;re{" "}
            <span className="text-red-400">Losing Money</span> Every Month
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mb-16">
            It&apos;s not your product. It&apos;s not your price. It&apos;s the fact that your business has no system to capture, nurture, and convert leads. Here&apos;s what&apos;s broken:
          </p>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-red-500/40 hover:bg-red-500/5 transition-all duration-300 group">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-base font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Bridge to solution */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mt-14 bg-gradient-to-r from-[#0d9488]/20 to-[#0d9488]/5 border border-[#0d9488]/30 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#0d9488] mb-2">The good news</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Every one of these problems has a system that solves it.
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                I&apos;ve built these systems for businesses just like yours. Let me show you exactly how.
              </p>
            </div>
            <a
              href="#services"
              className="flex-shrink-0 px-7 py-4 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
            >
              See the Solution →
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ProblemSection

import ProjectsSection from "../../components/ProjectsSection"
import MediaSection from "../../components/MediaSection"
import Link from "next/link"

export const metadata = {
  title: "Portfolio — Olajide Igbalaye",
  description:
    "A collection of websites, apps, video content, and design work built by Olajide Igbalaye over 10+ years.",
}

export default function PortfolioPage() {
  return (
    <main className="pt-16 bg-[#0a0a0a] min-h-screen">
      {/* Page header */}
      <section className="bg-[#0a0a0a] pt-16 pb-0 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948808_1px,transparent_1px),linear-gradient(to_bottom,#0d948808_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d9488]/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto py-16 sm:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#0d9488] transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
              Portfolio
            </span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0d9488]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
                10+ Years of Work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Built. Shipped.{" "}
              <span className="text-[#0d9488]">Delivered.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              From full-stack web apps and AI-powered platforms to product design, video content, and graphic catalogues — here&apos;s a selection of what I&apos;ve built across the years.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-2">
              {[
                { num: "10+", label: "Web Apps Built" },
                { num: "2", label: "Design Catalogues" },
                { num: "3+", label: "Video Projects" },
                { num: "0→Shipped", label: "Every Single Time" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white leading-none">{s.num}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <ProjectsSection />

      {/* Media: videos + catalogues */}
      <MediaSection />

      {/* Bottom CTA */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Need a system that actually{" "}
            <span className="text-[#0d9488]">gets you customers?</span>
          </h2>
          <p className="text-gray-400 text-base">
            The portfolio shows what I can build. The homepage shows what I can do for your revenue.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-7 py-4 border-2 border-white/20 text-white font-bold rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all text-sm uppercase tracking-wider"
            >
              ← Back to Main Site
            </Link>
            <Link
              href="/#contact"
              className="px-7 py-4 bg-[#0d9488] text-white font-black rounded-2xl hover:bg-[#0b7a70] transition-all text-sm uppercase tracking-wider shadow-lg shadow-[#0d9488]/30"
            >
              Book a Free Growth Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

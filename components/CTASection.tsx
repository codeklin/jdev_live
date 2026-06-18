"use client"

const CTASection = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0d948820_0%,_transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <span className="inline-block px-4 py-1.5 bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488] text-xs font-black uppercase tracking-widest rounded-full">
          Ready to Grow?
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Your Business Doesn&apos;t Need{" "}
          <span className="text-gray-500">More Effort.</span>
          <br />
          It Needs a{" "}
          <span className="text-[#0d9488]">System.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Stop grinding and hoping. Start building a machine that captures leads, follows up automatically, and converts strangers into paying customers — while you focus on delivering great work.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="px-8 py-5 bg-[#0d9488] text-white font-black text-base uppercase tracking-wider rounded-2xl hover:bg-[#0b7a70] transition-all shadow-2xl shadow-[#0d9488]/30"
          >
            Let&apos;s Build Your Customer System
          </a>
          <a
            href="https://wa.me/2347031098097"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 border-2 border-white/20 text-white font-bold text-base rounded-2xl hover:border-[#0d9488] hover:text-[#0d9488] transition-all"
          >
            WhatsApp Me Directly
          </a>
        </div>

        {/* Trust footnote */}
        <p className="text-xs text-gray-600 pt-2">
          Free 30-min audit · No commitment · Nigerian businesses only
        </p>
      </div>
    </section>
  )
}

export default CTASection

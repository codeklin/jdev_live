"use client"

const CTASection = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Hard top border instead of glow — more editorial */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#0d9488]/60" />

      <div className="relative max-w-4xl mx-auto">

        {/* Left-aligned, not centered — less templated */}
        <div className="space-y-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488]">
            Ready to work together
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl">
            Your email channel is a revenue stream.{" "}
            <span className="text-[#0d9488]">Let's make it perform.</span>
          </h2>

          <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            Whether you need a full Klaviyo build, a Figma-designed email system, a fullstack web app, or a developer who understands marketing, I&apos;m available remotely, worldwide.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="px-7 py-4 bg-[#0d9488] text-white font-bold text-sm rounded-lg hover:bg-[#0b7a70] transition-colors"
            >
              Start a conversation
            </a>
            <a
              href="#email-work"
              className="px-7 py-4 border border-white/20 text-white font-medium text-sm rounded-lg hover:border-white/50 transition-colors"
            >
              See my work first
            </a>
          </div>

          <p className="text-xs text-gray-600">
            Remote · Full-time · Contract · Freelance · Worldwide
          </p>
        </div>

      </div>
    </section>
  )
}

export default CTASection

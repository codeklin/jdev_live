import SlideUp from "./SlideUp"

const services = [
  {
    title: "AI Agent Development & Automation",
    desc: "Custom AI assistants, autonomous bots, and intelligent workflow automations built to streamline operations and scale business efficiency.",
    border: "border-t-[#0d9488]",
    btn: "bg-[#0d9488] hover:bg-teal-700",
  },
  {
    title: "AI Commercials & UGC Production",
    desc: "High-impact, cinematic AI-generated advertisements, user-generated content (UGC), and product promo campaigns that capture attention.",
    border: "border-t-pink-500",
    btn: "bg-pink-500 hover:bg-pink-600",
  },
  {
    title: "AI-Generated Media & UGC Training",
    desc: "Step-by-step training and mentorship for brands and creators on how to script, prompt, edit, and launch promotions using generative AI tools.",
    border: "border-t-yellow-500",
    btn: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    title: "Web Development & AI Solutions",
    desc: "Fast, secure, mobile-first websites and web applications integrated with AI capabilities to grow your business online.",
    border: "border-t-[#3b82f6]",
    btn: "bg-[#3b82f6] hover:bg-blue-600",
  },
  {
    title: "Cybersecurity Training & Mentorship",
    desc: "Hands-on training, certification prep, and security mentorship for individuals and organizations in Nigeria.",
    border: "border-t-[#ef4444]",
    btn: "bg-[#ef4444] hover:bg-red-600",
  },
  {
    title: "Social Media Content Creation",
    desc: "Reels, carousels, captions, and viral campaigns that stop the scroll, build trust, and scale your organic reach.",
    border: "border-t-orange-500",
    btn: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Photography & Visual Branding",
    desc: "Portrait, event, product, and brand photography that makes your business look world-class and professional.",
    border: "border-t-purple-500",
    btn: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "Videography & Film Production",
    desc: "Event coverage, brand videos, short films, and high-quality YouTube content — cinematic quality, every time.",
    border: "border-t-teal-500",
    btn: "bg-teal-500 hover:bg-teal-600",
  },
  {
    title: "Video Editing & Post-Production",
    desc: "Professional cuts, color grading, motion graphics, and sound design powered by standard and AI-assisted tools.",
    border: "border-t-[#3b82f6]",
    btn: "bg-[#3b82f6] hover:bg-blue-600",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white dark:bg-white/[0.02] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d9488] mb-3">What I Do</p>
            <h2 className="text-5xl sm:text-6xl font-black text-[#0a0a0a] dark:text-white leading-tight">
              Services
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl text-base">
              From digital content to cybersecurity — I deliver results that move the needle for Nigerian businesses and creators.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className={`border-t-4 ${s.border} bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-7 flex flex-col gap-4 h-full`}>
                <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white leading-snug">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{s.desc}</p>
                <a
                  href="https://wa.me/2347031098097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-center px-5 py-2.5 ${s.btn} text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-colors`}
                >
                  Book Now
                </a>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

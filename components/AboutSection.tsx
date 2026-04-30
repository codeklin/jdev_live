"use client"
import SlideUp from "./SlideUp"

const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "15+", label: "Projects Delivered" },
  { num: "500+", label: "Students Trained" },
  { num: "3", label: "Companies Founded" },
]

const expertise = [
  { title: "Fullstack Web Development", color: "border-[#0d9488]", text: "text-[#0d9488]" },
  { title: "Cybersecurity Training & Mentorship", color: "border-[#3b82f6]", text: "text-[#3b82f6]" },
  { title: "Social Media Content Creation", color: "border-[#ef4444]", text: "text-[#ef4444]" },
  { title: "Photography & Videography", color: "border-purple-500", text: "text-purple-500" },
  { title: "Data Analysis", color: "border-yellow-500", text: "text-yellow-500" },
  { title: "Brand Strategy & Storytelling", color: "border-pink-500", text: "text-pink-500" },
]

const roles = [
  "Cybersecurity Instructor — Nextgen Tech Training Project",
  "Data Analyst",
  "Tech Leader at Gigsdev (Software Company)",
  "Founder of LivrMedia (Media Company)",
  "Community Leader at Gigsdev — Connecting Freelancers",
]

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d9488] mb-3">Who I Am</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">About Me</h2>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m <span className="font-black text-white">Olajide Igbalaye</span> — a Fullstack Developer,
                Cybersecurity Expert, Graphics Designer, Social Media Content Creator, and Photography &amp; Videography professional based in Nigeria.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                I help individuals and businesses succeed through innovative digital solutions — from building secure web apps
                and training cybersecurity professionals, to creating viral content, capturing stunning visuals, and telling powerful brand stories.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                My mission: make technology accessible and help people achieve their goals in today&apos;s fast-moving world.
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Current Roles</p>
                {roles.map((role, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0d9488] flex-shrink-0" />
                    <p className="text-sm text-gray-300">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>

          <SlideUp offset="-150px 0px -150px 0px">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-4xl font-black text-white leading-none">{s.num}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Core Expertise</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((e) => (
                    <div key={e.title} className={`border-l-4 ${e.color} bg-white/5 rounded-r-2xl px-4 py-3`}>
                      <p className={`text-sm font-bold ${e.text}`}>{e.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Node.js","Python","PostgreSQL","Git","Postman"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:border-[#0d9488] hover:text-[#0d9488] transition-colors">
                      {skill}
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

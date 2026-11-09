import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cybersecurity | Olajide Igbalaye",
  description:
    "ISC2-certified cybersecurity instructor. GRC, penetration testing, ethical hacking, vulnerability scanning, and incident response. Assistant Tech Lead at Dexterhub. Trained 200+ students.",
}

// ── Data ──────────────────────────────────────────────────────────────────────

const EXPERTISE = [
  {
    title: "GRC",
    full: "Governance, Risk & Compliance",
    description:
      "Helping organisations build security policies that actually get followed. Risk frameworks, compliance mapping, and security governance without the jargon.",
    color: "text-teal-400",
    border: "border-teal-500/30",
    bg: "bg-teal-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Penetration Testing",
    full: "Finding the holes before attackers do",
    description:
      "Methodical offensive security testing across networks, web apps, and systems. Finding vulnerabilities and reporting them in a way clients can actually act on.",
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Ethical Hacking",
    full: "Authorised, structured, documented",
    description:
      "Full ethical hacking engagements from scoping through to reporting. Every test is scoped, authorised, and documented to a professional standard.",
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Vulnerability Scanning",
    full: "Know your attack surface",
    description:
      "Systematic scanning using industry tools to map exposure across infrastructure. Clear, prioritised findings so teams know exactly what to fix first.",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "Incident Response",
    full: "When things go wrong, move fast",
    description:
      "Structured response to security incidents. Containment, eradication, recovery, and post-incident review so organisations learn from every breach attempt.",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Security Awareness Training",
    full: "Your people are the perimeter",
    description:
      "Training non-technical staff to spot phishing, handle data responsibly, and follow security protocols. Over 200 students trained and counting.",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
]

const STATS = [
  { value: "200+", label: "Students trained" },
  { value: "ISC2", label: "Certified" },
  { value: "2024", label: "Lead Instructor" },
  { value: "GRC", label: "to Pentesting" },
]

const EXPERIENCE = [
  {
    role: "Cybersecurity Lead Instructor",
    org: "NextGen Tech Training Project",
    period: "2024 - 2025",
    color: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    badgeText: "Instructor",
    points: [
      "Delivered hands-on cybersecurity training to 200+ students across GRC, penetration testing, ethical hacking, and vulnerability scanning.",
      "Designed learning platforms and assessment experiences with gamification for better knowledge retention.",
      "Applied real-world pen testing and vulnerability scanning scenarios directly into the curriculum.",
      "Collaborated with technical and educational stakeholders to keep training content current and relevant.",
    ],
  },
  {
    role: "Assistant Tech Lead",
    org: "Dexterhub",
    period: "Current",
    color: "border-purple-500",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    badgeText: "Current Role",
    points: [
      "Supporting technical leadership across security operations and digital infrastructure.",
      "Bridging the gap between security requirements and practical implementation for the team.",
      "Contributing to security strategy, tooling decisions, and team capability building.",
    ],
  },
]

const CERTS = [
  {
    name: "ISC2 Cybersecurity Certificate",
    issuer: "ISC2",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
  },
  {
    name: "Prompt Engineering for Developers",
    issuer: "OpenAI / DeepLearning.AI",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CybersecurityPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white pt-16">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-28 border-b border-white/10">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        {/* Green ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative">
          <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-teal-400 border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 rounded-full mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400" />
            </span>
            Cybersecurity
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Security is not just<br className="hidden sm:block" />
            <span className="text-teal-400"> a tech problem.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
            Most breaches happen because someone clicked the wrong link, left a port open, or never had a policy to begin with. I teach people and organisations how to close those gaps — from GRC frameworks to hands-on penetration testing.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-teal-400">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0a0a0a] font-black text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Work with me
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expertise Grid ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">What I teach and do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Six areas. One goal.
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Keep people and organisations safe by understanding how attacks happen, building the right defences, and knowing what to do when something breaks through.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPERTISE.map((item) => (
              <div
                key={item.title}
                className={`bg-white/5 border ${item.border} rounded-2xl p-6 hover:bg-white/[0.07] transition-colors group`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{item.full}</p>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Where I have done the work.
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.role}
                className={`bg-white/5 border-l-4 ${exp.color} border border-white/10 rounded-2xl overflow-hidden`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-white">{exp.role}</h3>
                      <p className="text-gray-400 text-sm font-semibold mt-0.5">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${exp.badge}`}>
                        {exp.badgeText}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                        <p className="text-sm text-gray-300 leading-relaxed">{pt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Certifications</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Backed by credentials.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CERTS.map((cert) => (
              <div key={cert.name} className={`border rounded-2xl p-5 ${cert.bg}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 mb-3 ${cert.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">{cert.issuer}</p>
                <p className="text-sm font-bold text-white leading-snug">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching philosophy ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-500/10 to-purple-500/5 border border-teal-500/20 rounded-2xl p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-4">How I teach</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-tight">
              Security training that sticks because it is practical, not theoretical.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Hands-on from day one",
                  body: "Students do not spend weeks reading slides. They get into tools, scenarios, and real environments from the first session.",
                },
                {
                  title: "Plain language, not buzzwords",
                  body: "I have trained 200+ people with different backgrounds. The clearest explanation always wins over the most technical one.",
                },
                {
                  title: "Real threat scenarios",
                  body: "Every module is built around something that actually happens in the wild. No made-up examples that fall apart under real conditions.",
                },
                {
                  title: "Built for people, not just analysts",
                  body: "Half of security is human behaviour. Training works best when it connects to how people actually think and make decisions.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-black text-white mb-1">{item.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-4">Let us work together</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Need a security trainer or consultant?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need to train a team, run an assessment, or build a security policy from scratch, let us talk about what your organisation actually needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0a0a0a] font-black text-sm px-8 py-3.5 rounded-xl transition-colors"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/Olajide_CV_Tech.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-colors"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

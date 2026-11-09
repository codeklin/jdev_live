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
    blob: "from-teal-500/30 via-teal-400/10 to-transparent",
    labelColor: "text-teal-400",
    numBg: "bg-teal-500/20",
    numColor: "text-teal-300",
    num: "01",
  },
  {
    title: "Penetration Testing",
    full: "Finding the holes before attackers do",
    description:
      "Methodical offensive security testing across networks, web apps, and systems. Finding vulnerabilities and reporting them in a way clients can actually act on.",
    blob: "from-red-500/30 via-rose-400/10 to-transparent",
    labelColor: "text-red-400",
    numBg: "bg-red-500/20",
    numColor: "text-red-300",
    num: "02",
  },
  {
    title: "Ethical Hacking",
    full: "Authorised, structured, documented",
    description:
      "Full ethical hacking engagements from scoping through to reporting. Every test is scoped, authorised, and documented to a professional standard.",
    blob: "from-orange-500/30 via-amber-400/10 to-transparent",
    labelColor: "text-orange-400",
    numBg: "bg-orange-500/20",
    numColor: "text-orange-300",
    num: "03",
  },
  {
    title: "Vulnerability Scanning",
    full: "Know your attack surface",
    description:
      "Systematic scanning using industry tools to map exposure across infrastructure. Clear, prioritised findings so teams know exactly what to fix first.",
    blob: "from-yellow-500/30 via-yellow-400/10 to-transparent",
    labelColor: "text-yellow-400",
    numBg: "bg-yellow-500/20",
    numColor: "text-yellow-300",
    num: "04",
  },
  {
    title: "Incident Response",
    full: "When things go wrong, move fast",
    description:
      "Structured response to security incidents. Containment, eradication, recovery, and post-incident review so organisations learn from every breach attempt.",
    blob: "from-purple-500/30 via-violet-400/10 to-transparent",
    labelColor: "text-purple-400",
    numBg: "bg-purple-500/20",
    numColor: "text-purple-300",
    num: "05",
  },
  {
    title: "Security Awareness Training",
    full: "Your people are the perimeter",
    description:
      "Training non-technical staff to spot phishing, handle data responsibly, and follow security protocols. Over 200 students trained and counting.",
    blob: "from-blue-500/30 via-sky-400/10 to-transparent",
    labelColor: "text-blue-400",
    numBg: "bg-blue-500/20",
    numColor: "text-blue-300",
    num: "06",
  },
]

const STATS = [
  { value: "200+", label: "Students trained", blob: "from-teal-500/20 to-transparent" },
  { value: "ISC2", label: "Certified", blob: "from-purple-500/20 to-transparent" },
  { value: "2024", label: "Lead Instructor", blob: "from-orange-500/20 to-transparent" },
  { value: "GRC", label: "to Pentesting", blob: "from-blue-500/20 to-transparent" },
]

const EXPERIENCE = [
  {
    role: "Cybersecurity Lead Instructor",
    org: "NextGen Tech Training Project",
    period: "2024 - 2025",
    blob: "from-teal-500/20 via-teal-400/5 to-transparent",
    badgeColor: "bg-teal-500/20 text-teal-300",
    badgeText: "Instructor",
    dotColor: "bg-teal-400",
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
    blob: "from-purple-500/20 via-violet-400/5 to-transparent",
    badgeColor: "bg-purple-500/20 text-purple-300",
    badgeText: "Current Role",
    dotColor: "bg-purple-400",
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
    numBg: "bg-teal-500/20",
    numColor: "text-teal-300",
    blob: "from-teal-500/25 via-teal-400/10 to-transparent",
    num: "01",
  },
  {
    name: "Prompt Engineering for Developers",
    issuer: "OpenAI / DeepLearning.AI",
    numBg: "bg-orange-500/20",
    numColor: "text-orange-300",
    blob: "from-orange-500/25 via-amber-400/10 to-transparent",
    num: "02",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    numBg: "bg-blue-500/20",
    numColor: "text-blue-300",
    blob: "from-blue-500/25 via-sky-400/10 to-transparent",
    num: "03",
  },
]

const TEACHING = [
  {
    title: "Hands-on from day one",
    body: "Students do not spend weeks reading slides. They get into tools, scenarios, and real environments from the first session.",
    blob: "from-teal-500/20 to-transparent",
    dot: "bg-teal-400",
  },
  {
    title: "Plain language, not buzzwords",
    body: "I have trained 200+ people with different backgrounds. The clearest explanation always wins over the most technical one.",
    blob: "from-blue-500/20 to-transparent",
    dot: "bg-blue-400",
  },
  {
    title: "Real threat scenarios",
    body: "Every module is built around something that actually happens in the wild. No made-up examples that fall apart under real conditions.",
    blob: "from-orange-500/20 to-transparent",
    dot: "bg-orange-400",
  },
  {
    title: "Built for people, not just analysts",
    body: "Half of security is human behaviour. Training works best when it connects to how people actually think and make decisions.",
    blob: "from-purple-500/20 to-transparent",
    dot: "bg-purple-400",
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CybersecurityPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white pt-16">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-28">
        {/* Blobs */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Cybersecurity is not just<br className="hidden sm:block" />
            <span className="text-teal-400"> a tech problem.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            Most breaches happen because someone clicked the wrong link, left a port open, or never had a policy to begin with. I teach people and organisations how to close those gaps, from GRC frameworks to hands-on penetration testing.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className={`relative overflow-hidden rounded-2xl p-5 text-center bg-gradient-radial ${s.blob}`}
                style={{ background: `radial-gradient(circle at 30% 30%, var(--tw-gradient-stops))` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.blob} opacity-60`} aria-hidden="true" />
                <div className="relative">
                  <p className="text-2xl sm:text-3xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">{s.label}</p>
                </div>
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
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expertise Grid ─────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-blue-500/8 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">What I teach and do</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Six areas. One goal.</h2>
            <p className="text-gray-400 mt-3 max-w-xl text-base leading-relaxed">
              Keep people and organisations safe by understanding how attacks happen, building the right defences, and knowing what to do when something breaks through.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPERTISE.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.blob}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" aria-hidden="true" />

                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${item.numBg} flex items-center justify-center mb-4`}>
                    <span className={`text-sm font-black tabular-nums ${item.numColor}`}>{item.num}</span>
                  </div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.labelColor}`}>{item.full}</p>
                  <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/8 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Where I have done the work.</h2>
          </div>

          <div className="space-y-5">
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} className="relative overflow-hidden rounded-2xl p-6 sm:p-8">
                {/* Blob */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.blob}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[#0a0a0a]/65" aria-hidden="true" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-white">{exp.role}</h3>
                      <p className="text-gray-400 text-sm font-semibold mt-0.5">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${exp.badgeColor}`}>
                        {exp.badgeText}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`} />
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
      <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[250px] rounded-full bg-orange-500/8 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Certifications</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Backed by credentials.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CERTS.map((cert) => (
              <div key={cert.name} className="relative overflow-hidden rounded-2xl p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.blob}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" aria-hidden="true" />
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${cert.numBg} flex items-center justify-center mb-4`}>
                    <span className={`text-sm font-black tabular-nums ${cert.numColor}`}>{cert.num}</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{cert.issuer}</p>
                  <p className="text-sm font-bold text-white leading-snug">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching philosophy ────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="max-w-4xl mx-auto relative">
          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-3">Cybersecurity</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Cybersecurity training that sticks because it is practical, not theoretical.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TEACHING.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-2xl p-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.blob}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[#0a0a0a]/65" aria-hidden="true" />
                <div className="relative flex items-start gap-4">
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                  <div>
                    <p className="text-base font-black text-white mb-2">{item.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10 pointer-events-none" aria-hidden="true" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-xs font-black uppercase tracking-widest text-teal-400 mb-4">Let us work together</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Need a cybersecurity trainer or consultant?
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
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-colors"
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

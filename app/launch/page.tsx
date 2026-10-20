import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Portfolio Launch | Olajide Igbalaye",
  description:
    "A quick tour of Olajide Igbalaye's design, writing, and web development work.",
  openGraph: {
    title: "Olajide Igbalaye | Portfolio Launch",
    description:
      "Design, writing, and web projects brought together in one portfolio.",
    images: ["/home.png"],
  },
}

const FEATURED_WORK = [
  {
    number: "01",
    type: "WEB APP · LEARNING",
    title: "Secquiz",
    description:
      "A cybersecurity learning app with guided topics and practice questions.",
    image: "/secquiz.png",
    href: "https://secquizz.vercel.app/",
    color: "from-teal-500/30",
  },
  {
    number: "02",
    type: "WEB APP · REMOTE WORK",
    title: "Remosus",
    description:
      "A remote job search platform built for African talent looking for global work.",
    image: "/remosus.png",
    href: "https://remosus.vercel.app",
    color: "from-amber-500/30",
  },
  {
    number: "03",
    type: "DIGITAL READING",
    title: "Yawdesh",
    description:
      "A calm reading experience for short Christian reflections.",
    image: "/yadesh.png",
    href: "https://yadesh.vercel.app",
    color: "from-violet-500/30",
  },
]

export default function LaunchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b0b] pt-16 text-white">
      <section className="relative isolate border-b border-white/10">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 75% 15%, rgba(13,148,136,.34), transparent 42%), linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "auto, 56px 56px, 56px 56px",
          }}
        />

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal-200">
              <span className="h-2 w-2 rounded-full bg-teal-300" />
              Independent creative developer
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-[5.5rem]">
              Good ideas,
              <br />
              <span className="text-teal-300">made real.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              I bring design, words, and code together to make useful digital
              experiences. Here is a quick look at what I have been building.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#work"
                className="rounded-xl border border-teal-300 bg-teal-300 px-6 py-3.5 text-sm font-black text-[#062a27] shadow-lg shadow-teal-950/30 transition hover:-translate-y-0.5 hover:bg-teal-200 active:translate-y-0"
              >
                Explore the work <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="/#contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10 active:scale-[.98]"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-400">
              Next.js <span className="px-2 text-teal-300">·</span> TypeScript
              <span className="px-2 text-teal-300">·</span> Product design
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-teal-400/10 blur-2xl" />
            <div className="relative rotate-1 overflow-hidden rounded-2xl border border-white/15 bg-[#111818] p-2 shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#f6faef]">
                <Image
                  src="/home.png"
                  alt="Preview of the portfolio home page"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-4">
                <div>
                  <p className="text-sm font-black">One portfolio. Many ways to build.</p>
                  <p className="mt-1 text-xs text-gray-400">Design · Content · Development</p>
                </div>
                <span className="rounded-lg border border-teal-300/25 bg-teal-300/10 px-3 py-2 text-xs font-extrabold text-teal-200">
                  J/DEV
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/15 bg-[#101616] px-4 py-3 shadow-xl sm:-left-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Built end to end</p>
              <p className="mt-1 text-sm font-black text-white">From first sketch to live site</p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="launch-video-heading"
        className="border-b border-white/10 bg-[#0b1010]"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-7 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-teal-300">
              The portfolio, in motion
            </p>
            <h2
              id="launch-video-heading"
              className="text-3xl font-black tracking-tight sm:text-5xl"
            >
              Design. Copy. Code.
            </h2>
            <p
              id="launch-video-description"
              className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
            >
              An 18-second tour of the work, featuring Secquiz. The film has
              brief sound effects and no spoken audio. Use the player controls
              to play, pause, adjust the volume, or enter full screen.
            </p>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-white/15 bg-[#080b0b] shadow-2xl shadow-black/30">
            <video
              className="aspect-video w-full bg-[#050807] object-contain"
              controls
              playsInline
              preload="metadata"
              poster="/videos/portfolio-launch-poster.jpg"
              aria-labelledby="launch-video-heading"
              aria-describedby="launch-video-description"
            >
              <source src="/videos/portfolio-launch.mp4" type="video/mp4" />
              Your browser cannot play this video.{" "}
              <a
                className="font-bold text-teal-200 underline underline-offset-4"
                href="/videos/portfolio-launch.mp4"
              >
                Download the portfolio launch video
              </a>
              .
            </video>
            <figcaption className="border-t border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 sm:px-6">
              Olajide Igbalaye’s portfolio launch film. 18 seconds, with no
              spoken audio.
            </figcaption>
          </figure>

          <details className="mt-5 overflow-hidden rounded-xl border border-white/15 bg-white/[.035]">
            <summary className="cursor-pointer px-5 py-4 text-sm font-bold text-teal-100 outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-teal-300">
              Read the video transcript and scene descriptions
            </summary>
            <ol className="grid gap-4 border-t border-white/10 px-5 py-5 text-sm leading-relaxed text-gray-300 sm:grid-cols-2 sm:text-base">
              <li>
                <span className="font-black text-teal-200">0:00</span>{" "}
                A portfolio in three parts. Designer. Developer.
              </li>
              <li>
                <span className="font-black text-teal-200">0:03</span>{" "}
                From first thought to finished product. Good work connects
                every part: Design, Copy, Code.
              </li>
              <li>
                <span className="font-black text-teal-200">0:08</span>{" "}
                Selected work: Secquiz. Making cybersecurity easier to start.
                Plain-English lessons and practice. 10,000+ people learning.
              </li>
              <li>
                <span className="font-black text-teal-200">0:13</span>{" "}
                The J/Dev mark. End to end. See My Work.
              </li>
            </ol>
          </details>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-teal-300">A few recent builds</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Different problems. Thoughtful solutions.</h2>
          </div>
          <Link
            href="/#work"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-bold text-gray-200 transition hover:border-teal-300/60 hover:text-teal-200"
          >
            See all projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED_WORK.map((item) => (
            <a
              key={item.number}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-300 hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-xl hover:shadow-teal-950/20"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${item.color} to-[#101616]`}>
                <Image
                  src={item.image}
                  alt={`${item.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-black/65 px-2.5 py-1 text-[10px] font-black tracking-widest text-white backdrop-blur">
                  PROJECT {item.number}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-extrabold tracking-[.16em] text-teal-300">{item.type}</p>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed text-gray-400">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-bold text-white transition group-hover:border-teal-300/40 group-hover:bg-teal-300/10 group-hover:text-teal-100">
                  Visit project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0e1414]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-20">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-amber-300">How I work</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">The details matter.<br />So does the whole picture.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Understand", "Start with the people and the problem."],
              ["02", "Make", "Shape the words, visuals, and experience."],
              ["03", "Ship", "Build, refine, and put it in people's hands."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-xl border border-white/10 bg-white/[.035] p-5">
                <p className="text-xs font-black text-amber-300">{number}</p>
                <h3 className="mt-4 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-black uppercase tracking-[.2em] text-teal-300">Have a good one?</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">Let&apos;s make something useful.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
          Tell me what you are trying to build. We can figure out the best next step together.
        </p>
        <a
          href="/#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-teal-300 bg-teal-300 px-6 py-3.5 text-sm font-black text-[#062a27] shadow-lg shadow-teal-950/30 transition hover:-translate-y-0.5 hover:bg-teal-200 active:translate-y-0"
        >
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}

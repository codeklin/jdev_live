"use client"
import React, { useState } from "react"
import Link from "next/link"
import { FiCheckCircle, FiAlertCircle, FiArrowRight, FiSliders, FiFileText, FiLayers, FiGlobe, FiCode, FiX, FiExternalLink } from "react-icons/fi"

interface SampleItem {
  id: string
  title: string
  category: "ai-edit" | "seo-articles" | "service-pages" | "brand-voice" | "multilingual"
  niche: string
  targetKeyword?: string
  wordCount: string
  intent: string
  summary: string
  highlights: string[]
  metaTitle?: string
  metaDescription?: string
  rawAiSnippet?: string
  editedSnippet?: string
  fullMarkdownPath: string
}

const SAMPLES: SampleItem[] = [
  {
    id: "ai-editing-flagship",
    title: "AI Draft vs. Ruthless Human Edit: Headless CMS for SaaS",
    category: "ai-edit",
    niche: "B2B SaaS / Web Architecture",
    targetKeyword: "headless cms for saas",
    wordCount: "1,060 raw → 980 edited",
    intent: "Commercial & Editorial Proof",
    summary: "Demonstrates human editorial intervention on AI-generated copy: stripped 280 words of throat-clearing fluff, fact-checked API cost realities, eliminated generic headings, and constructed a clear cost comparison table.",
    highlights: [
      "Fixed hallucinated claim that headless is 'universally cheaper and zero maintenance'",
      "Rewrote passive academic intros into an immediate, high-converting problem hook",
      "Engineered benefit-driven H2/H3 subheadings to preserve search dwell time",
      "Built a concrete side-by-side Cost Comparison Matrix (Compute, APIs, Search)"
    ],
    rawAiSnippet: "In today's fast-paced digital landscape, modern software-as-a-service (SaaS) companies are constantly seeking innovative solutions to enhance their online presence. One technology that has garnered significant attention in recent years is the headless Content Management System (CMS)... It is widely claimed that headless architectures are universally cheaper, faster, and require virtually zero ongoing maintenance...",
    editedSnippet: "Every week, another seed-stage SaaS founder burns $15,000 on a custom headless CMS because a developer told them WordPress 'doesn't scale.' Six months later, that same founder is stuck: marketing can't publish a single landing page without a Git pull request, and three separate API bills are draining their burn rate before product-market fit...",
    fullMarkdownPath: "lib/content/ai-comparison-sample.md"
  },
  {
    id: "seo-article-saas",
    title: "Next.js vs WordPress for Marketing Sites: 2026 Decision Guide",
    category: "seo-articles",
    niche: "B2B SaaS & Engineering",
    targetKeyword: "nextjs vs wordpress for marketing sites",
    wordCount: "1,180 words",
    intent: "Commercial Investigation",
    metaTitle: "Next.js vs WordPress for Marketing Sites: 2026 Guide",
    metaDescription: "Deciding between Next.js and WordPress for your SaaS marketing site? Compare speed, content velocity, ongoing maintenance, and SEO before writing any code.",
    summary: "Deep architectural comparison for CTOs and growth marketers weighing developer flexibility against non-technical publishing speed. Analyzes Core Web Vitals, publishing velocity, and maintenance overhead.",
    highlights: [
      "Structured with scannable H2/H3 hierarchy and technical feature comparison table",
      "Integrates internal linking paths to J/Dev engineering services",
      "Addresses real-world marketer objections regarding WYSIWYG editing velocity"
    ],
    fullMarkdownPath: "lib/content/seo-articles/article-1-saas.md"
  },
  {
    id: "seo-article-wellness",
    title: "Magnesium Glycinate vs Citrate for Sleep: Which One Actually Works?",
    category: "seo-articles",
    niche: "Health & Wellness",
    targetKeyword: "magnesium glycinate vs citrate for sleep",
    wordCount: "1,120 words",
    intent: "Informational & Pre-Purchase",
    metaTitle: "Magnesium Glycinate vs Citrate for Sleep: Which Is Best?",
    metaDescription: "Trouble falling asleep? Discover whether magnesium glycinate or citrate works better for sleep, including absorption rates, digestive safety, and dosage tips.",
    summary: "Evidence-based health article breaking down GABA receptor pathways, glycine amino acid synergy, dipeptide intestinal absorption, and osmotic laxative trade-offs.",
    highlights: [
      "Explains complex biochemistry in clear, high-school-accessible language",
      "Head-to-head comparison table analyzing elemental yield and GI tolerance",
      "Includes structured dosage protocols and safety contraindications for kidney health"
    ],
    fullMarkdownPath: "lib/content/seo-articles/article-2-wellness.md"
  },
  {
    id: "seo-article-local",
    title: "Commercial Plumbing Repair Cost Guide: Facility Pricing Benchmarks",
    category: "seo-articles",
    niche: "High-Ticket Commercial Trade",
    targetKeyword: "commercial plumbing repair cost guide",
    wordCount: "1,150 words",
    intent: "Transactional & Emergency Local",
    metaTitle: "Commercial Plumbing Repair Cost Guide (2026 Price Ranges)",
    metaDescription: "Facing a plumbing crisis? Explore real commercial plumbing repair costs for emergency dispatch, sewer line backups, pipe bursts, and average hourly trade rates.",
    summary: "High-value commercial cost guide targeting facility directors and restaurant owners facing pipe bursts, main line backups, and hydro-jetting emergencies ($18–$45 Google Ads CPC intent).",
    highlights: [
      "Hourly trade rate tiers (Journeyman vs Master Plumber vs 2-man crew)",
      "Itemized emergency price ranges for burst risers, hydro-jetting, and boilers",
      "Preventative facilities checklist saving up to 40% in annual maintenance"
    ],
    fullMarkdownPath: "lib/content/seo-articles/article-3-local-services.md"
  },
  {
    id: "service-page-jdev",
    title: "J/Dev WordPress Engineering Service Page (Conversion Focused)",
    category: "service-pages",
    niche: "Digital Engineering Agency",
    wordCount: "950 words",
    intent: "Conversion Rate Optimization (CRO)",
    summary: "High-converting B2B landing page engineered with problem agitation, Core Web Vitals benchmark comparison (95+ score vs 32 theme average), modular Gutenberg blocks, and discovery call CTA.",
    highlights: [
      "Above-the-fold value proposition focused on marketer autonomy & speed",
      "Performance comparison table highlighting TTFB and HTTP request cuts",
      "Risk-reversal technical discovery call booking funnel"
    ],
    fullMarkdownPath: "lib/content/service-pages/service-1-jdev-wordpress.md"
  },
  {
    id: "service-page-local",
    title: "Apex Industrial HVAC & Refrigeration: 24/7 Emergency Dispatch",
    category: "service-pages",
    niche: "Emergency Commercial Local Service",
    wordCount: "890 words",
    intent: "Emergency Direct-Response Lead Gen",
    summary: "High-urgency commercial landing page designed to capture restaurant and warehouse facilities managers during catastrophic refrigeration breakdowns.",
    highlights: [
      "Sub-90 minute guaranteed arrival trigger with direct click-to-call hotline",
      "Commercial EPA Universal certification & $5M liability trust anchors",
      "Emergency parts diagnostic protocol explaining 84% first-visit fix rate"
    ],
    fullMarkdownPath: "lib/content/service-pages/service-2-local-business.md"
  },
  {
    id: "brand-voice-test",
    title: "Brand Voice Alignment Test: Corporate Law Firm vs. Playful Skincare",
    category: "brand-voice",
    niche: "Multi-Brand Tone Adaptation",
    wordCount: "840 words",
    intent: "Tone & Voice Calibration",
    summary: "Rewrote the identical core subject ('The Cost of Neglecting Preventative Care') into two polar opposite client voices with complete style guidelines and prohibited word lists.",
    highlights: [
      "Voice A: Vanguard & Sterling LLP (White-shoe, fiduciary liability, formal cadence)",
      "Voice B: Glowbotanica (Witty, conversational D2C skincare, barrier-care metaphor)",
      "Includes a 5-dimension Comparative Voice Matrix (sentence length, humor, reading grade)"
    ],
    fullMarkdownPath: "lib/content/brand-voice-sample.md"
  },
  {
    id: "multilingual-sample",
    title: "Multilingual Tech Localization: DeepL Spanish Translation & Audit",
    category: "multilingual",
    niche: "International Localization",
    wordCount: "542 words",
    intent: "Tool-Assisted Global Translation",
    summary: "Localized a 500-word technical WordPress guide into Spanish using DeepL Pro, followed by a human back-translation audit correcting machine misinterpretations.",
    highlights: [
      "Transparent disclosure: 'Tool-assisted localization with human semantic QA'",
      "Audit table detailing adjustments (e.g. correcting 'WordPress hinchado' to 'sobrecargado')",
      "Ensures technical SEO terminology (CDN, Core Web Vitals, bounce rate) matches Hispanic market standards"
    ],
    fullMarkdownPath: "lib/content/multilingual-sample.md"
  }
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [selectedSample, setSelectedSample] = useState<SampleItem | null>(null)
  const [aiViewMode, setAiViewMode] = useState<"side-by-side" | "raw" | "edited">("side-by-side")

  const filteredSamples = activeFilter === "all" 
    ? SAMPLES 
    : SAMPLES.filter(s => s.category === activeFilter)

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="mb-12 border-b border-gray-100 dark:border-white/10 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 mb-4">
          <FiCode className="w-3.5 h-3.5" /> Editorial & SEO Content Portfolio
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
          Real Proof of Work: AI Editing, High-Intent SEO & CRO Copy
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          A demonstration portfolio engineered for modern content teams. Highlights include rigorous AI draft editing, keyword-targeted pillar articles, conversion-focused service architecture, brand voice calibration, and tool-assisted multilingual localization.
        </p>

        {/* Evaluation Disclaimer */}
        <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
          <FiAlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <span className="font-bold">Portfolio Evaluation Notice:</span> All articles and landing pages presented below are structured demonstration samples produced for technical editorial evaluation and live index testing. Keyword metrics derived from Google Keyword Planner and AlsoAsked.
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-sm">
        {[
          { id: "all", label: "All Samples", icon: FiLayers },
          { id: "ai-edit", label: "AI vs Human Edit", icon: FiSliders },
          { id: "seo-articles", label: "SEO Articles", icon: FiFileText },
          { id: "service-pages", label: "Service Pages (CRO)", icon: FiCode },
          { id: "brand-voice", label: "Brand Voice", icon: FiCheckCircle },
          { id: "multilingual", label: "Multilingual", icon: FiGlobe },
        ].map(tab => {
          const Icon = tab.icon
          const isActive = activeFilter === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                isActive 
                  ? "bg-[#0a0a0a] text-white dark:bg-white dark:text-[#0a0a0a] shadow-sm" 
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Flagship Featured Item: AI Comparison Component (Show if 'all' or 'ai-edit') */}
      {(activeFilter === "all" || activeFilter === "ai-edit") && (
        <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-white/[0.03] dark:to-transparent border border-gray-200 dark:border-white/10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
            <div>
              <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Flagship Proof of Work
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-2">
                Project 1: Raw AI Draft vs. Ruthless Human Edit
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                Target Keyword: <span className="font-mono text-teal-600 dark:text-teal-400">headless cms for saas</span> • Word Count: 1,060 raw → 980 edited
              </p>
            </div>

            {/* View Selector Buttons */}
            <div className="flex items-center p-1 rounded-lg bg-gray-200/80 dark:bg-white/10 text-xs font-semibold">
              <button
                onClick={() => setAiViewMode("side-by-side")}
                className={`px-3 py-1.5 rounded-md transition-colors ${aiViewMode === "side-by-side" ? "bg-white dark:bg-[#0a0a0a] text-black dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
              >
                Split Comparison
              </button>
              <button
                onClick={() => setAiViewMode("raw")}
                className={`px-3 py-1.5 rounded-md transition-colors ${aiViewMode === "raw" ? "bg-white dark:bg-[#0a0a0a] text-black dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
              >
                Raw AI Only
              </button>
              <button
                onClick={() => setAiViewMode("edited")}
                className={`px-3 py-1.5 rounded-md transition-colors ${aiViewMode === "edited" ? "bg-white dark:bg-[#0a0a0a] text-black dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
              >
                Human Edit Only
              </button>
            </div>
          </div>

          {/* Side-by-Side Diff Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {(aiViewMode === "side-by-side" || aiViewMode === "raw") && (
              <div className="p-5 rounded-xl bg-red-500/[0.04] border border-red-500/20">
                <div className="flex items-center justify-between mb-3 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wide">
                  <span>❌ Unedited AI Draft (Claude / ChatGPT)</span>
                  <span className="text-[10px] bg-red-500/10 px-2 py-0.5 rounded">Generic Fluff</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed space-y-3">
                  <p>
                    &ldquo;In today&apos;s fast-paced digital landscape, modern software-as-a-service (SaaS) companies are constantly seeking innovative solutions to enhance their online presence. One technology that has garnered significant attention in recent years is the headless Content Management System (CMS)...&rdquo;
                  </p>
                  <p>
                    &ldquo;It is widely claimed that headless architectures are universally cheaper, faster, and require virtually zero ongoing maintenance once configured... In this article, we will delve into the various benefits...&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-red-500/10 text-[11px] text-red-700 dark:text-red-300 font-medium space-y-1">
                  <div>⚠️ <strong>AI Flaw 1:</strong> Throat-clearing cliché intro with zero hook.</div>
                  <div>⚠️ <strong>AI Flaw 2:</strong> Dangerous hallucination that headless is &quot;universally cheaper&quot;.</div>
                  <div>⚠️ <strong>AI Flaw 3:</strong> Passive voice (&quot;garnered significant attention&quot;).</div>
                </div>
              </div>
            )}

            {(aiViewMode === "side-by-side" || aiViewMode === "edited") && (
              <div className="p-5 rounded-xl bg-teal-500/[0.04] border border-teal-500/20">
                <div className="flex items-center justify-between mb-3 text-teal-600 dark:text-teal-400 font-bold text-xs uppercase tracking-wide">
                  <span>✅ Human-Edited Production Version</span>
                  <span className="text-[10px] bg-teal-500/10 px-2 py-0.5 rounded">High Retention</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-900 dark:text-white font-medium leading-relaxed space-y-3">
                  <p>
                    &ldquo;Every week, another seed-stage SaaS founder burns $15,000 on a custom headless CMS because a developer told them WordPress &apos;doesn&apos;t scale.&apos;&rdquo;
                  </p>
                  <p>
                    &ldquo;Six months later, that same founder is stuck: marketing can&apos;t publish a single landing page without an engineer pulling a Git ticket, and three separate API bills are draining their burn rate before product-market fit...&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-teal-500/10 text-[11px] text-teal-700 dark:text-teal-300 font-medium space-y-1">
                  <div>🎯 <strong>Editor Fix 1:</strong> Cut 280 words of fluff directly to a $15k pain-point hook.</div>
                  <div>🎯 <strong>Editor Fix 2:</strong> Introduced real multi-vendor cost realities (Vercel, Sanity, Algolia).</div>
                  <div>🎯 <strong>Editor Fix 3:</strong> Structured with benefit-driven H2/H3s and a cost matrix.</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setSelectedSample(SAMPLES[0])}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              View Full Changelog & Audit Table <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      )}

      {/* Grid of All Portfolio Samples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map(sample => (
          <div
            key={sample.id}
            className="flex flex-col justify-between p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider text-[10px]">
                  {sample.niche}
                </span>
                <span className="text-[11px] font-mono">{sample.wordCount}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug mb-2">
                {sample.title}
              </h3>

              {sample.targetKeyword && (
                <div className="mb-3 text-[11px] text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-white/5 px-2 py-1 rounded inline-block">
                  KW: {sample.targetKeyword}
                </div>
              )}

              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                {sample.summary}
              </p>

              <div className="space-y-1.5 mb-6">
                {sample.highlights.slice(0, 2).map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                    <FiCheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                {sample.intent}
              </span>
              <button
                onClick={() => setSelectedSample(sample)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition-colors"
              >
                Inspect Sample <FiArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Inspector Drawer for Sample Details */}
      {selectedSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 text-gray-600 dark:text-gray-300"
            >
              <FiX className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
              {selectedSample.niche} • {selectedSample.intent}
            </span>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-3 mb-2">
              {selectedSample.title}
            </h2>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-6">
              Word Count: {selectedSample.wordCount} | Target KW: {selectedSample.targetKeyword || "N/A"}
            </p>

            {selectedSample.metaTitle && (
              <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Target Search Metadata (SERP Preview)
                </div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  {selectedSample.metaTitle}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {selectedSample.metaDescription}
                </div>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                Core Editorial & Strategic Highlights
              </h4>
              <ul className="space-y-2">
                {selectedSample.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <FiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 text-xs text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-bold text-teal-700 dark:text-teal-300">Full Source File:</span>{" "}
              <code className="text-[11px] font-mono text-gray-800 dark:text-gray-200">{selectedSample.fullMarkdownPath}</code>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
              <button
                onClick={() => setSelectedSample(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}


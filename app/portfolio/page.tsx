"use client"

import React, { useState } from "react"
import Link from "next/link"
import { PORTFOLIO_ITEMS, PortfolioWorkItem } from "../../lib/portfolioData"
import FormattedArticle from "../../components/FormattedArticle"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [activeItem, setActiveItem] = useState<PortfolioWorkItem | null>(null)
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null)
  const [comparisonTab, setComparisonTab] = useState<"side-by-side" | "edited" | "raw" | "changelog">("side-by-side")

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory)

  const handleCopy = (item: PortfolioWorkItem) => {
    navigator.clipboard.writeText(item.fullBodyText)
    setCopyFeedback(item.id)
    setTimeout(() => setCopyFeedback(null), 2500)
  }

  const flagshipItem = PORTFOLIO_ITEMS[0]

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "editorial":
        return "bg-teal-500/15 text-teal-800 dark:text-teal-300 border-teal-500/30"
      case "seo":
        return "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30"
      case "cro":
        return "bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-500/30"
      case "voice-translation":
        return "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30"
      default:
        return "bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-white/20"
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-24 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors border border-gray-200 dark:border-white/10"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Page Header (Big, bold, colorful) */}
        <header className="border-b-2 border-gray-200 dark:border-white/10 pb-10 mb-12">
          <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30 mb-4">
            Production Writing &amp; SEO
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-5">
            Writing, Content Strategy &amp; Technical Editing
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-normal">
            Real samples across search-intent optimization, technical editorial revision, and conversion-focused landing pages. Each piece includes keyword research, on-page strategy, and complete web-formatted copy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold">
            <span className="bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 px-3.5 py-1.5 rounded-lg">
              7 Complete Samples
            </span>
            <span className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg">
              3 Industry Niches
            </span>
            <span className="bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-3.5 py-1.5 rounded-lg">
              Live Web Formatting
            </span>
          </div>
        </header>

        {/* Flagship: Editorial Overhaul (Raw AI Draft vs Revised Production Version) */}
        <section className="mb-16 border-2 border-teal-500/30 dark:border-teal-400/20 rounded-2xl p-6 sm:p-10 bg-teal-500/[0.02] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-md text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-teal-500/15 text-teal-800 dark:text-teal-300 border border-teal-500/30">
              Sample 01 : Editorial Overhaul
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">
              Target: headless cms for saas : 1,060 → 980 words
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
            {flagshipItem.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
            A line-by-line editorial overhaul of an AI-generated draft. Demonstrates cutting empty throat-clearing, fact-checking hosting and API pricing claims, and restructuring content into a high-retention decision framework with a side-by-side cost matrix.
          </p>

          {/* REAL BUTTONS: Tactile, well-padded button group */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 mb-8 border-b-2 border-gray-200 dark:border-white/10 pb-6">
            <button
              onClick={() => setComparisonTab("side-by-side")}
              className={`px-4 py-3 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                comparisonTab === "side-by-side"
                  ? "bg-[#0d9488] text-white border-2 border-[#0d9488] shadow-md shadow-teal-500/20"
                  : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-white/10 shadow-sm"
              }`}
            >
              Side-by-Side Review
            </button>
            <button
              onClick={() => setComparisonTab("edited")}
              className={`px-4 py-3 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                comparisonTab === "edited"
                  ? "bg-[#0d9488] text-white border-2 border-[#0d9488] shadow-md shadow-teal-500/20"
                  : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-white/10 shadow-sm"
              }`}
            >
              Revised Production
            </button>
            <button
              onClick={() => setComparisonTab("raw")}
              className={`px-4 py-3 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                comparisonTab === "raw"
                  ? "bg-[#0d9488] text-white border-2 border-[#0d9488] shadow-md shadow-teal-500/20"
                  : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-white/10 shadow-sm"
              }`}
            >
              Unedited AI Draft
            </button>
            <button
              onClick={() => setComparisonTab("changelog")}
              className={`px-4 py-3 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-center ${
                comparisonTab === "changelog"
                  ? "bg-[#0d9488] text-white border-2 border-[#0d9488] shadow-md shadow-teal-500/20"
                  : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-white/10 shadow-sm"
              }`}
            >
              Editorial Changelog
            </button>
          </div>

          {/* Comparison Panels */}
          {comparisonTab === "side-by-side" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-red-500/20 rounded-xl p-6 bg-red-500/[0.03]">
                <div className="text-xs font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400 pb-3 mb-4 border-b border-red-500/20">
                  Unedited AI Draft (Fluff &amp; Hallucinations)
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                  <p>
                    &ldquo;In today’s fast-paced digital landscape, modern software-as-a-service (SaaS) companies are constantly seeking innovative solutions to enhance their online presence. One technology that has garnered significant attention in recent years is the headless Content Management System (CMS)...&rdquo;
                  </p>
                  <p>
                    &ldquo;It is widely claimed that headless architectures are universally cheaper, faster, and require virtually zero ongoing maintenance once configured...&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-red-500/20 text-xs font-bold text-red-700 dark:text-red-300">
                  Issues: 280 words of filler, passive voice, and false cost claims.
                </div>
              </div>

              <div className="border-2 border-teal-500/40 rounded-xl p-6 bg-teal-500/[0.04] shadow-sm">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0d9488] pb-3 mb-4 border-b border-[#0d9488]/30">
                  Revised Production Version (High Retention)
                </div>
                <div className="text-sm sm:text-base text-gray-900 dark:text-gray-100 leading-relaxed space-y-4 font-medium">
                  <p>
                    &ldquo;Every week, another seed-stage SaaS founder burns $15,000 on a custom headless CMS because a developer told them WordPress &apos;doesn&apos;t scale.&apos;&rdquo;
                  </p>
                  <p>
                    &ldquo;Six months later, that same founder is stuck: marketing can&apos;t publish a single landing page without an engineer pulling a Git ticket, and three separate API bills are draining their burn rate before product-market fit...&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#0d9488]/30 text-xs font-bold text-[#0d9488]">
                  Fixes: Direct financial hook, active voice, and concrete multi-vendor pricing breakdown.
                </div>
              </div>
            </div>
          )}

          {comparisonTab === "raw" && (
            <div className="border-2 border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 bg-white dark:bg-[#0d0d0d] mb-8">
              <div className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-4">Unedited Draft (Pre-Editorial Pass)</div>
              <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  In today’s fast-paced digital landscape, modern software-as-a-service (SaaS) companies are constantly seeking innovative solutions to enhance their online presence. One technology that has garnered significant attention in recent years is the headless Content Management System (CMS). A headless CMS is often heralded as a revolutionary paradigm shift that completely decouples the frontend presentation layer from the backend content repository.
                </p>
                <p>
                  Many businesses rush into implementing headless CMS architecture because they believe it will seamlessly solve all of their digital agility challenges. It is widely claimed that headless architectures are universally cheaper, faster, and require virtually zero ongoing maintenance once configured. Furthermore, industry proponents assert that decoupling your website guarantees instant improvements in Core Web Vitals and search engine rankings.
                </p>
              </div>
            </div>
          )}

          {comparisonTab === "edited" && (
            <div className="border-2 border-teal-500/30 rounded-xl p-6 sm:p-8 bg-white dark:bg-[#0d0d0d] mb-8">
              <div className="text-xs font-extrabold text-[#0d9488] uppercase tracking-widest mb-4">Revised Production Draft</div>
              <div className="text-base sm:text-lg text-gray-900 dark:text-gray-100 leading-relaxed space-y-4">
                <p className="font-bold">
                  Every week, another seed-stage SaaS founder burns $15,000 on a custom headless CMS because a developer told them WordPress &quot;doesn&apos;t scale.&quot;
                </p>
                <p>
                  Six months later, that same founder is stuck: marketing can&apos;t publish a single landing page without an engineer pulling a Git ticket, the live preview breaks constantly, and three separate monthly subscriptions drain the burn rate before product-market fit.
                </p>
              </div>
            </div>
          )}

          {comparisonTab === "changelog" && (
            <div className="border-2 border-gray-200 dark:border-white/10 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead className="bg-gray-100 dark:bg-white/10 font-bold text-xs uppercase tracking-wide text-gray-700 dark:text-gray-200">
                  <tr>
                    <th className="p-4">Issue Detected</th>
                    <th className="p-4">Editorial Resolution</th>
                    <th className="p-4">Strategic Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-700 dark:text-gray-300">
                  {flagshipItem.changelog?.map((entry, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                      <td className="p-4 font-bold text-gray-900 dark:text-white">{entry.issue}</td>
                      <td className="p-4">{entry.resolution}</td>
                      <td className="p-4 text-gray-500 dark:text-gray-400">{entry.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Action Row: Real Tactile Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              onClick={() => handleCopy(flagshipItem)}
              className="px-4 py-2.5 rounded-xl border-2 border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 hover:border-gray-400 dark:hover:border-white/30 text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 shadow-sm transition-all"
            >
              {copyFeedback === flagshipItem.id ? "✓ Copied to Clipboard" : "Copy Plain Text"}
            </button>
            <button
              onClick={() => setActiveItem(flagshipItem)}
              className="px-6 py-3.5 rounded-xl bg-[#0d9488] text-white text-sm sm:text-base font-extrabold hover:bg-[#0b7a70] transition-all shadow-md shadow-teal-500/20 active:scale-95"
            >
              Read Full Piece →
            </button>
          </div>
        </section>

        {/* Filter Navigation: Real Tactile Buttons */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            Filter by Discipline:
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pb-4 border-b-2 border-gray-200 dark:border-white/10">
            {[
              { id: "all", label: "All Works (7)" },
              { id: "seo", label: "Search Articles (3)" },
              { id: "cro", label: "Service Pages (2)" },
              { id: "editorial", label: "Editorial Overhaul (1)" },
              { id: "voice-translation", label: "Tone & Translation (1)" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#0d9488] text-white border-2 border-[#0d9488] shadow-md shadow-teal-500/20"
                    : "bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-white/10 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Index Grid (Big, bold typography with category color differentiation) */}
        <div className="divide-y-2 divide-gray-100 dark:divide-white/10">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="py-12 first:pt-4 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-sm font-bold text-gray-400">{item.number}</span>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider border ${getCategoryBadgeClass(item.category)}`}>
                    {item.niche}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">
                  {item.wordCount}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-[#0d9488] transition-colors tracking-tight leading-snug">
                {item.title}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-5 max-w-3xl font-normal">
                {item.summary}
              </p>

              {/* SERP Target & Intent Strip with Color Accents */}
              <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border-2 border-gray-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 flex flex-wrap items-center gap-x-6 gap-y-2">
                <div>
                  <span className="text-gray-400">Target Query:</span>{" "}
                  <span className="text-teal-700 dark:text-teal-300 font-bold">{item.targetKeyword}</span>
                </div>
                <div>
                  <span className="text-gray-400">Search Intent:</span>{" "}
                  <span className="text-gray-900 dark:text-white font-bold">{item.searchIntent}</span>
                </div>
              </div>

              {/* Action Buttons: Real Tactile Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => handleCopy(item)}
                  className="px-4 py-2.5 rounded-xl border-2 border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 hover:border-gray-400 dark:hover:border-white/30 text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 shadow-sm transition-all"
                >
                  {copyFeedback === item.id ? "✓ Copied to Clipboard" : "Copy Plain Text"}
                </button>
                <button
                  onClick={() => setActiveItem(item)}
                  className="px-6 py-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black text-sm sm:text-base font-extrabold hover:bg-[#0d9488] dark:hover:bg-[#0d9488] dark:hover:text-white transition-all shadow-md active:scale-95"
                >
                  Read Full Piece →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Web Reader Modal (HTML Formatted Web Copy, Big & Bold) */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
            <div className="w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/15 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
              
              {/* Reader Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider border ${getCategoryBadgeClass(activeItem.category)}`}>
                    {activeItem.niche}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">
                    {activeItem.wordCount}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopy(activeItem)}
                    className="px-3 py-1.5 text-xs sm:text-sm font-bold border-2 border-gray-300 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 hover:border-gray-400"
                  >
                    {copyFeedback === activeItem.id ? "✓ Copied" : "Copy Text"}
                  </button>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-[#0d9488] dark:hover:bg-[#0d9488] dark:hover:text-white transition-colors"
                  >
                    Close [✕]
                  </button>
                </div>
              </div>

              {/* Reader Body: Formatted Web HTML */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 sm:py-12">
                {activeItem.metaTitle && (
                  <div className="mb-10 p-5 sm:p-6 rounded-xl border-2 border-teal-500/30 bg-teal-500/[0.03]">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-2">
                      Search Engine Metadata (SERP Preview)
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white mb-2">
                      {activeItem.metaTitle}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {activeItem.metaDescription}
                    </div>
                  </div>
                )}

                {/* Formatted HTML Web Rendering */}
                <FormattedArticle content={activeItem.fullBodyText} />
              </div>

              {/* Reader Footer */}
              <div className="px-6 sm:px-8 py-4 border-t-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] flex items-center justify-between text-xs sm:text-sm font-medium text-gray-500">
                <span className="font-bold text-gray-700 dark:text-gray-300 truncate max-w-xs sm:max-w-md">{activeItem.title}</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="font-extrabold text-[#0d9488] hover:underline"
                >
                  Done Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  )
}

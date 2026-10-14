"use client"

import React, { useState } from "react"
import Link from "next/link"
import { PORTFOLIO_ITEMS, PortfolioWorkItem } from "../../lib/portfolioData"

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

  const handleDownload = (item: PortfolioWorkItem) => {
    const blob = new Blob([item.fullBodyText], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = item.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const flagshipItem = PORTFOLIO_ITEMS[0]

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pt-24 pb-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb / Top label */}
        <div className="mb-4">
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-[#0d9488] transition-colors"
          >
            ← Back to J/Dev
          </Link>
        </div>

        {/* Page Title & Context */}
        <header className="border-b border-gray-200 dark:border-white/10 pb-10 mb-12">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-5">
            Writing, Content Strategy &amp; Technical Editing
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Real samples across search-intent optimization, technical editorial revision, and conversion-focused landing pages. Each piece includes keyword strategy, on-page architecture notes, and direct access to source text.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span>6 Complete Samples</span>
            <span className="text-gray-300 dark:text-white/20">/</span>
            <span>3 Industry Niches</span>
            <span className="text-gray-300 dark:text-white/20">/</span>
            <span>Raw Source Files (.md) Available</span>
          </div>
        </header>

        {/* Flagship: Editorial Overhaul (Raw AI vs Revised Production) */}
        <section className="mb-16 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8 bg-gray-50/50 dark:bg-white/[0.01]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0d9488]">
              Sample 01 · Editorial Review
            </span>
            <span className="text-xs font-mono text-gray-400">
              Query: headless cms for saas · 1,060 → 980 words
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
            {flagshipItem.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-6">
            A line-by-line editorial overhaul of an AI-generated draft. Demonstrates cutting empty throat-clearing, fact-checking hosting and API pricing claims, and restructuring content into a high-retention decision framework with a side-by-side cost matrix.
          </p>

          {/* View Mode Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-gray-200 dark:border-white/10 pb-4 text-xs font-medium">
            <button
              onClick={() => setComparisonTab("side-by-side")}
              className={`px-3 py-1.5 rounded transition-colors ${
                comparisonTab === "side-by-side"
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Side-by-Side Review
            </button>
            <button
              onClick={() => setComparisonTab("edited")}
              className={`px-3 py-1.5 rounded transition-colors ${
                comparisonTab === "edited"
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Revised Production Version
            </button>
            <button
              onClick={() => setComparisonTab("raw")}
              className={`px-3 py-1.5 rounded transition-colors ${
                comparisonTab === "raw"
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Unedited Draft
            </button>
            <button
              onClick={() => setComparisonTab("changelog")}
              className={`px-3 py-1.5 rounded transition-colors ${
                comparisonTab === "changelog"
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Editorial Changelog
            </button>
          </div>

          {/* Comparison Panels */}
          {comparisonTab === "side-by-side" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 dark:border-white/10 rounded-lg p-5 bg-white dark:bg-[#0d0d0d]">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 pb-3 mb-3 border-b border-gray-100 dark:border-white/5">
                  Unedited Draft Excerpt
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed space-y-3 font-serif">
                  <p>
                    &ldquo;In today’s fast-paced digital landscape, modern software-as-a-service (SaaS) companies are constantly seeking innovative solutions to enhance their online presence. One technology that has garnered significant attention in recent years is the headless Content Management System (CMS)...&rdquo;
                  </p>
                  <p>
                    &ldquo;It is widely claimed that headless architectures are universally cheaper, faster, and require virtually zero ongoing maintenance once configured...&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 text-[11px] font-mono text-gray-500">
                  Issues: 280 words of filler, passive voice, and hallucinated cost claims.
                </div>
              </div>

              <div className="border border-[#0d9488]/30 rounded-lg p-5 bg-white dark:bg-[#0d0d0d]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0d9488] pb-3 mb-3 border-b border-[#0d9488]/20">
                  Revised Production Excerpt
                </div>
                <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 leading-relaxed space-y-3 font-serif">
                  <p>
                    &ldquo;Every week, another seed-stage SaaS founder burns $15,000 on a custom headless CMS because a developer told them WordPress &apos;doesn&apos;t scale.&apos;&rdquo;
                  </p>
                  <p>
                    &ldquo;Six months later, that same founder is stuck: marketing can&apos;t publish a single landing page without an engineer pulling a Git ticket, and three separate API bills are draining their burn rate before product-market fit...&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0d9488]/20 text-[11px] font-mono text-[#0d9488]">
                  Fixes: Direct financial hook, active voice, real multi-vendor pricing breakdown.
                </div>
              </div>
            </div>
          )}

          {comparisonTab === "raw" && (
            <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 bg-white dark:bg-[#0d0d0d] mb-6">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Unedited Draft (Pre-Editorial Pass)</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-serif whitespace-pre-line">
                {flagshipItem.rawDraft}
              </p>
            </div>
          )}

          {comparisonTab === "edited" && (
            <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 bg-white dark:bg-[#0d0d0d] mb-6">
              <div className="text-xs font-mono text-[#0d9488] uppercase tracking-widest mb-3">Revised Production Draft</div>
              <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed font-serif whitespace-pre-line">
                {flagshipItem.editedDraft}
              </p>
            </div>
          )}

          {comparisonTab === "changelog" && (
            <div className="border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden mb-6">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-100 dark:bg-white/5 font-mono text-[11px] text-gray-500 uppercase">
                  <tr>
                    <th className="p-3">Issue Detected</th>
                    <th className="p-3">Editorial Resolution</th>
                    <th className="p-3">Strategic Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-gray-700 dark:text-gray-300">
                  {flagshipItem.changelog?.map((entry, idx) => (
                    <tr key={idx}>
                      <td className="p-3 font-medium text-gray-900 dark:text-white">{entry.issue}</td>
                      <td className="p-3">{entry.resolution}</td>
                      <td className="p-3 text-gray-500 dark:text-gray-400">{entry.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs font-mono text-gray-400">
              Source file: <span className="text-gray-600 dark:text-gray-300">ai-draft-vs-human-edit.md</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCopy(flagshipItem)}
                className="px-3 py-1.5 rounded border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-colors"
              >
                {copyFeedback === flagshipItem.id ? "Copied to Clipboard" : "Copy Plain Text"}
              </button>
              <button
                onClick={() => handleDownload(flagshipItem)}
                className="px-3 py-1.5 rounded border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-700 dark:text-gray-300 hover:border-gray-400 transition-colors"
              >
                Download .md
              </button>
              <button
                onClick={() => setActiveItem(flagshipItem)}
                className="px-4 py-1.5 rounded bg-[#0a0a0a] text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-[#0d9488] dark:hover:bg-[#0d9488] dark:hover:text-white transition-colors"
              >
                Read Full Piece →
              </button>
            </div>
          </div>
        </section>

        {/* Filter Navigation (Text only, zero icons) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 text-xs font-mono border-b border-gray-100 dark:border-white/5">
          <span className="text-gray-400 uppercase tracking-widest mr-2">Filter:</span>
          {[
            { id: "all", label: "All Works (6)" },
            { id: "seo", label: "Search Articles (3)" },
            { id: "cro", label: "Service Pages (1)" },
            { id: "editorial", label: "Editorial Overhaul (1)" },
            { id: "voice-translation", label: "Tone & Translation (1)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black font-bold"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Index Grid */}
        <div className="divide-y divide-gray-200 dark:divide-white/10">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="py-10 first:pt-4 group"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400">{item.number}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0d9488]">
                    {item.niche}
                  </span>
                  <span className="text-xs font-mono text-gray-400">·</span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="text-xs font-mono text-gray-400">
                  {item.wordCount}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#0d9488] transition-colors tracking-tight">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 max-w-3xl">
                {item.summary}
              </p>

              {/* SERP Target & Intent Strip */}
              <div className="mb-6 p-3.5 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-xs font-mono text-gray-600 dark:text-gray-400 flex flex-wrap items-center gap-x-6 gap-y-2">
                <div>
                  <span className="text-gray-400">Target Query:</span>{" "}
                  <span className="text-gray-900 dark:text-white font-medium">{item.targetKeyword}</span>
                </div>
                <div>
                  <span className="text-gray-400">Search Intent:</span>{" "}
                  <span className="text-gray-900 dark:text-white font-medium">{item.searchIntent}</span>
                </div>
              </div>

              {/* Action Buttons: Read, Copy, Download */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs font-mono text-gray-400">
                  Deliverable: <span className="text-gray-600 dark:text-gray-300">{item.deliverableType}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopy(item)}
                    className="px-3 py-1.5 rounded border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 hover:border-gray-400 transition-colors"
                  >
                    {copyFeedback === item.id ? "Copied to Clipboard" : "Copy Plain Text"}
                  </button>
                  <button
                    onClick={() => handleDownload(item)}
                    className="px-3 py-1.5 rounded border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 hover:border-gray-400 transition-colors"
                  >
                    Download .md
                  </button>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="px-4 py-1.5 rounded bg-gray-900 text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-[#0d9488] dark:hover:bg-[#0d9488] dark:hover:text-white transition-colors"
                  >
                    Read Full Piece →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Reader Modal (Full Text Display, No generic icons) */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <div className="w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl flex flex-col shadow-2xl overflow-hidden">
              
              {/* Reader Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]">
                <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  {activeItem.number} · {activeItem.niche} · {activeItem.wordCount}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopy(activeItem)}
                    className="px-2.5 py-1 text-xs font-mono border border-gray-200 dark:border-white/10 rounded text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    {copyFeedback === activeItem.id ? "Copied" : "Copy Text"}
                  </button>
                  <button
                    onClick={() => handleDownload(activeItem)}
                    className="px-2.5 py-1 text-xs font-mono border border-gray-200 dark:border-white/10 rounded text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Download .md
                  </button>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                  >
                    Close [ESC]
                  </button>
                </div>
              </div>

              {/* Reader Body */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8">
                {activeItem.metaTitle && (
                  <div className="mb-8 p-4 rounded border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.01]">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1">
                      Target Search Metadata (SERP Preview)
                    </div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      {activeItem.metaTitle}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {activeItem.metaDescription}
                    </div>
                  </div>
                )}

                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none font-serif leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {activeItem.fullBodyText}
                </div>
              </div>

              {/* Reader Footer */}
              <div className="px-6 py-3 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] flex items-center justify-between text-xs font-mono text-gray-400">
                <span>File: {activeItem.fileName}</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Close Reader
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  )
}

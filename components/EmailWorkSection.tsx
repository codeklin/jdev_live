"use client"
import React from "react"
import SlideUp from "./SlideUp"

const campaigns = [
  {
    type: "Welcome Series",
    platform: "Klaviyo",
    industry: "Fashion E-commerce",
    description:
      "Designed and deployed a 5-email welcome series for a fashion DTC brand. Focused on brand storytelling, product education, and a first-purchase incentive. Built the full flow wireframe in Figma before Klaviyo build.",
    metrics: [
      { label: "Open Rate", value: "48%", note: "vs 21% industry avg" },
      { label: "Click Rate", value: "9.2%", note: "vs 2.7% industry avg" },
      { label: "Revenue Attr.", value: "$4,200", note: "first 30 days" },
    ],
    tags: ["Klaviyo", "Figma", "Segmentation", "A/B Testing"],
    accent: "border-[#0d9488]",
    metricColor: "text-[#0d9488]",
  },
  {
    type: "Abandoned Cart Recovery",
    platform: "Klaviyo",
    industry: "Health & Wellness",
    description:
      "Built a 3-step abandoned cart sequence with dynamic product blocks pulling from the Shopify catalogue. Included a time-sensitive discount on step 3. Designed mobile-first in Figma, integrated Klaviyo's product feed.",
    metrics: [
      { label: "Recovery Rate", value: "18.4%", note: "of abandoned carts" },
      { label: "Open Rate", value: "42%", note: "avg across sequence" },
      { label: "ROI", value: "11×", note: "on campaign build cost" },
    ],
    tags: ["Klaviyo", "Shopify", "Figma", "Dynamic Content"],
    accent: "border-blue-500",
    metricColor: "text-blue-400",
  },
  {
    type: "Post-Purchase Retention",
    platform: "Klaviyo",
    industry: "SaaS / Digital Product",
    description:
      "Engineered a post-purchase flow to reduce churn and drive upsells for a digital subscription product. Included onboarding tips, usage milestones, and a referral ask at day 14. Full funnel mapped in Figma before build.",
    metrics: [
      { label: "Churn Reduction", value: "23%", note: "over 60-day window" },
      { label: "Upsell Conv.", value: "7.1%", note: "from flow touchpoints" },
      { label: "Referrals", value: "55+", note: "driven via day-14 email" },
    ],
    tags: ["Klaviyo", "Figma", "Automation", "Retention"],
    accent: "border-purple-500",
    metricColor: "text-purple-400",
  },
]

const EmailWorkSection = () => {
  return (
    <section id="email-work" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <SlideUp offset="-100px 0px -100px 0px">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0d9488] mb-3">02 — Email Work</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Campaigns That{" "}
              <span className="text-[#0d9488]">Actually Performed</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
              Real flows. Real numbers. Every campaign was designed in Figma, built in Klaviyo, and measured against industry benchmarks.
            </p>
          </div>
        </SlideUp>

        {/* Campaign cards */}
        <div className="space-y-6">
          {campaigns.map((c, i) => (
            <SlideUp key={i} offset="-80px 0px -80px 0px">
              <div className={`bg-white/5 border-l-4 ${c.accent} border-t border-r border-b border-white/10 rounded-r-2xl overflow-hidden`}>

                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 px-7 py-4 border-b border-white/10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">{c.industry}</p>
                    <p className="text-base font-black text-white mt-0.5">{c.type}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>via</span>
                    <span className="font-semibold text-white">{c.platform}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Description */}
                  <div className="lg:col-span-2 px-7 py-6 border-b lg:border-b-0 lg:border-r border-white/10">
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{c.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="px-7 py-6">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-4">Results</p>
                    <div className="space-y-4">
                      {c.metrics.map((m, j) => (
                        <div key={j} className="flex items-baseline justify-between gap-4">
                          <p className="text-xs text-gray-500">{m.label}</p>
                          <div className="text-right">
                            <p className={`text-xl font-black ${c.metricColor} leading-none tabular-nums`}>{m.value}</p>
                            <p className="text-[9px] text-gray-600 mt-0.5">{m.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Process line */}
        <SlideUp offset="-80px 0px -80px 0px">
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-2">My process</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                {["Strategy", "Figma Design", "Klaviyo Build", "Test & QA", "Deploy", "Report"].map((step, i, arr) => (
                  <React.Fragment key={step}>
                    <span className="font-medium text-gray-300">{step}</span>
                    {i < arr.length - 1 && <span className="text-[#0d9488] text-xs">›</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg hover:bg-[#0b7a70] transition-colors text-sm"
            >
              Start a campaign
            </a>
          </div>
        </SlideUp>

      </div>
    </section>
  )
}

export default EmailWorkSection

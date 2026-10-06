// lib/workData.ts — Single source of truth for all WorkItem data

// ─── Category ─────────────────────────────────────────────────────────────────

export type WorkCategory = "catalog" | "social" | "email" | "web" | "video"

// ─── Base ────────────────────────────────────────────────────────────────────

interface WorkItemBase {
  id: string
  category: WorkCategory
  title: string
  description: string
  thumbnail: string
  tags?: string[]
}

// ─── Catalog ─────────────────────────────────────────────────────────────────

export interface CatalogItem extends WorkItemBase {
  category: "catalog"
  pages: string[]
  pageCount: number
}

// ─── Social Media ────────────────────────────────────────────────────────────

export interface SocialItem extends WorkItemBase {
  category: "social"
  slides: string[]
  clientName?: string
}

// ─── Email ───────────────────────────────────────────────────────────────────

export interface EmailItem extends WorkItemBase {
  category: "email"
  fullImagePath: string
  frameType: "browser" | "phone"
}

// ─── Web Project ─────────────────────────────────────────────────────────────

export interface WebProjectItem extends WorkItemBase {
  category: "web"
  liveUrl: string
  tags: string[]
}

// ─── AI Video ────────────────────────────────────────────────────────────────

export interface VideoItem extends WorkItemBase {
  category: "video"
  /** Local file path e.g. /videos/ad.mp4 — use this OR youtubeId, not both */
  videoSrc?: string
  /** YouTube video ID (the part after ?v=) — embed player shown in modal */
  youtubeId?: string
  aspectRatio?: "16/9" | "9/16" | "1/1"
}

// ─── Union ───────────────────────────────────────────────────────────────────

export type WorkItem = CatalogItem | SocialItem | EmailItem | WebProjectItem | VideoItem

// ─── Data ────────────────────────────────────────────────────────────────────

export const WORK_ITEMS: WorkItem[] = [
  // ── Catalogs ──────────────────────────────────────────────────────────────
  {
    id: "home-interior",
    category: "catalog",
    title: "Home & Interior Catalogue",
    description: "Editorial-style product catalogue with warm layouts and precise typography.",
    thumbnail: "/home.png",
    pages: ["/home.png"],
    pageCount: 1,
  },
  {
    id: "auto-tools",
    category: "catalog",
    title: "Automobile Tools Catalogue",
    description: "Technical product data transformed into a clean, high-end brand asset.",
    thumbnail: "/tools.png",
    pages: ["/tools.png"],
    pageCount: 1,
  },

  // ── Social Media ──────────────────────────────────────────────────────────
  {
    id: "social-placeholder-1",
    category: "social",
    title: "Brand Social Pack",
    description: "Social media graphics for a fintech brand — Instagram and Twitter formats.",
    thumbnail: "/social/placeholder-1/slide-01.jpg",
    slides: [
      "/social/placeholder-1/slide-01.jpg",
      "/social/placeholder-1/slide-02.jpg",
    ],
    clientName: "Fintech Brand",
  },
  {
    id: "social-placeholder-2",
    category: "social",
    title: "Product Launch Campaign",
    description: "Visual content suite for a product launch across social platforms.",
    thumbnail: "/social/placeholder-2/slide-01.jpg",
    slides: [
      "/social/placeholder-2/slide-01.jpg",
      "/social/placeholder-2/slide-02.jpg",
    ],
    clientName: "Product Brand",
  },

  // ── Email Designs ─────────────────────────────────────────────────────────
  {
    id: "email-welcome",
    category: "email",
    title: "Welcome Series Email",
    description: "Klaviyo welcome flow email — high-contrast, mobile-first layout.",
    thumbnail: "/emails/email-welcome-thumb.png",
    fullImagePath: "/emails/email-welcome.png",
    frameType: "browser",
  },
  {
    id: "email-promo",
    category: "email",
    title: "Promotional Campaign Email",
    description: "Conversion-focused promotional email with bold visuals and clear CTAs.",
    thumbnail: "/emails/email-promo-thumb.png",
    fullImagePath: "/emails/email-promo.png",
    frameType: "browser",
  },

  // ── AI Videos ─────────────────────────────────────────────────────────────
  {
    id: "daniel-said-no",
    category: "video",
    title: "Daniel Said No!",
    description: "AI-generated kids safety video teaching children the rules that keep them safe. Produced entirely with AI visuals, voice, and animation.",
    thumbnail: "/daniel.jpg",
    youtubeId: "qwauV3B9E4I",
    aspectRatio: "9/16",
    tags: ["AI Video", "YouTube", "Kids Content"],
  },

  // ── Web Projects ──────────────────────────────────────────────────────────
  {
    id: "yawdesh",
    category: "web",
    title: "Yawdesh",
    description:
      "Designed and developed Yadesh, a digital reading platform that delivers short Christian readings designed for users with limited time.",
    thumbnail: "/yadesh.png",
    liveUrl: "https://yadesh.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "phytogenix",
    category: "web",
    title: "Phytogenix",
    description:
      "Digital herbal clinical research platform bridging university research and medical institutions. Research submission, peer review, and publication workflows.",
    thumbnail: "/phyto.png",
    liveUrl: "https://phytogenix.org",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "secacad",
    category: "web",
    title: "Secacad",
    description:
      "Cybersecurity skills assessment platform for individuals and organisations. Adaptive testing, progress tracking, and certification-aligned question banks.",
    thumbnail: "/secacad.png",
    liveUrl: "https://secacad.vercel.app",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "panaceutics",
    category: "web",
    title: "Panaceutics",
    description:
      "Biotech company advancing wellness through science-backed, plant-based formulations. Built with performance and SEO as primary goals.",
    thumbnail: "/panaceutics1.png",
    liveUrl: "https://panaceutics.org",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    id: "soprep",
    category: "web",
    title: "Soprep",
    description:
      "Exam prep web app with past questions, AI-assisted explanations, and real-time progress tracking. Helped thousands of students improve their scores.",
    thumbnail: "/soprep.png",
    liveUrl: "https://soprep.app",
    tags: ["React", "OpenAI API", "TypeScript"],
  },
  {
    id: "tizzle-shop",
    category: "web",
    title: "Tizzle Shop",
    description:
      "E-commerce platform with an integrated talent marketplace. Product catalogue, checkout flow, and seller onboarding built from scratch.",
    thumbnail: "/tizzle.png",
    liveUrl: "https://tizzleshop.vercel.app/",
    tags: ["Next.js", "E-commerce", "Tailwind CSS"],
  },
  {
    id: "secquiz",
    category: "web",
    title: "Secquiz App",
    description:
      "Cybersecurity quiz application for skill testing and certification prep. Gamified learning with leaderboards and topic-based filtering.",
    thumbnail: "/secquiz.png",
    liveUrl: "https://secquizz.vercel.app/",
    tags: ["React", "TypeScript", "Gamification"],
  },
]

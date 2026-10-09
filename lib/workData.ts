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
  /** Hero piece — spans full width and gets elevated visual treatment */
  featured?: boolean
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
  /** Controls the frame shape in the carousel modal. Defaults to "9/16" (portrait phone) */
  aspectRatio?: "1/1" | "9/16" | "4/5"
}

// ─── Email ───────────────────────────────────────────────────────────────────

export interface EmailItem extends WorkItemBase {
  category: "email"
  fullImagePath: string
  frameType: "browser" | "phone"
  /** Optional Figma prototype/design link */
  figmaUrl?: string
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
    id: "panaceutics-catalog",
    category: "catalog",
    featured: true,
    title: "Panaceutics Product Catalogue",
    description: "High-end brand catalogue for a biotech wellness company — science-backed design with clean layouts.",
    thumbnail: "/catalogs/panaceutics/pANACEUTICS_final-1_page-0001.jpg",
    pages: [
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0001.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0002.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0003.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0004.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0005.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0006.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0007.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0008.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0009.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0010.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0011.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0012.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0013.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0014.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0015.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0016.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0017.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0018.jpg",
    "/catalogs/panaceutics/pANACEUTICS_final-1_page-0019.jpg",
    ],
    pageCount: 19,
  },
  {
    id: "home-interior",
    category: "catalog",
    title: "Home & Interior Catalogue",
    description: "Editorial-style product catalogue with warm layouts and precise typography.",
    thumbnail: "/catalogs/home-interior/Interiro-images-0.jpg",
    pages: [
      "/catalogs/home-interior/Interiro-images-0.jpg",
      "/catalogs/home-interior/Interiro-images-1.jpg",
      "/catalogs/home-interior/Interiro-images-2.jpg",
    ],
    pageCount: 3,
  },
  {
    id: "auto-tools",
    category: "catalog",
    title: "Automobile Tools Catalogue",
    description: "Technical product data transformed into a clean, high-end brand asset.",
    thumbnail: "/catalogs/auto-tools/NowTuBroCure_compressed-images-0.jpg",
    pages: [
      "/catalogs/auto-tools/NowTuBroCure_compressed-images-0.jpg",
      "/catalogs/auto-tools/NowTuBroCure_compressed-images-1.jpg",
      "/catalogs/auto-tools/NowTuBroCure_compressed-images-2.jpg",
    ],
    pageCount: 3,
  },


  // ── Social Media ──────────────────────────────────────────────────────────
  {
    id: "ashertin-social",
    category: "social",
    featured: true,
    title: "Ashertin Natural Snacks Pack",
    description: "Product packaging social graphics for Ashertin — a natural snacks brand. Clean, appetite-driven visuals showcasing Chin Chin and Plantain Chips across jar and pouch formats.",
    thumbnail: "/social/food-package/ashertin.png",
    slides: [
      "/social/food-package/ashertin.png",
      "/social/food-package/food-flier.jpg",
    ],
    clientName: "Ashertin Natural Snacks",
    aspectRatio: "1/1",
  },
  {
    id: "remote30-social",
    category: "social",
    title: "Remote30 Challenge Campaign",
    description: "Bold LinkedIn-focused campaign graphic for the Remote30 Challenge — a 30-day programme helping freelancers land their first 3 international paying clients.",
    thumbnail: "/social/social-media/soc-.png",
    slides: [
      "/social/social-media/soc-.png",
      "/social/social-media/soc2.png",
    ],
    clientName: "Remote30",
    aspectRatio: "1/1",
  },

  // ── Email Designs ─────────────────────────────────────────────────────────
  {
    id: "email-h2booster",
    category: "email",
    featured: true,
    title: "H2Booster Product Email",
    description: "Dutch-language e-commerce email for a hydrogen wellness brand. Product grid, benefit blocks, and a strong CTA — built to convert.",
    thumbnail: "/emails/1.png",
    fullImagePath: "/emails/1.png",
    frameType: "browser",
  },
  {
    id: "email-mammie",
    category: "email",
    title: "Mammie Motherhood Email",
    description: "Warm, story-led product email for a baby gear brand. Leads with emotion, converts with product bundles and a clear upgrade CTA.",
    thumbnail: "/emails/2.png",
    fullImagePath: "/emails/2.png",
    frameType: "browser",
  },
  {
    id: "email-nomly",
    category: "email",
    title: "Nomly Porridge Launch Email",
    description: "Clean, appetite-driven email for a gluten-free porridge brand. Four flavour highlights, trust stats, and a 10% discount hook.",
    thumbnail: "/emails/3.png",
    fullImagePath: "/emails/3.png",
    frameType: "browser",
  },
  {
    id: "email-figma-collection",
    category: "email",
    title: "Email Marketing Design Collection",
    description: "Full collection of email marketing designs crafted in Figma — layouts, brand campaigns, and conversion-focused templates.",
    thumbnail: "/emails/4.png",
    fullImagePath: "/emails/4.png",
    frameType: "browser",
    figmaUrl: "https://www.figma.com/design/1V2XvcfFrvj5bspX5vvA3t/Email-Marketin-Figma-Designs?node-id=2-537&t=uwH6w3PlgDfdjGWx-0",
  },

  // ── AI Videos ─────────────────────────────────────────────────────────────
  {
    id: "daniel-said-no",
    category: "video",
    featured: true,
    title: "Daniel Said No!",
    description: "AI-generated kids safety video teaching children the rules that keep them safe. Produced entirely with AI visuals, voice, and animation.",
    thumbnail: "/daniel.jpg",
    youtubeId: "qwauV3B9E4I",
    aspectRatio: "16/9",
    tags: ["AI Video", "YouTube", "Kids Content"],
  },

  {
    id: "ai-income-class",
    category: "video",
    title: "AI Income Class",
    description: "Learn how to build real income streams using AI tools and animation. Practical steps anyone can start today.",
    thumbnail: "/ai_training.png",
    youtubeId: "qwauV3B9E4I",
    aspectRatio: "9/16",
    tags: ["AI Video", "YouTube", "Animation"],
  },

  // ── Web Projects ──────────────────────────────────────────────────────────
  {
    id: "yawdesh",
    category: "web",
    featured: true,
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

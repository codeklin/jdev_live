# Portfolio Visual Redesign — Design

## Overview

The redesign collapses the current 8-section portfolio into three sections: **Hero**, **Work**, and **Contact**. The primary goal is to let the work itself do the selling — a unified, filterable Work grid replaces the separate MediaSection, ProjectsSection, EmailWorkSection, and related prose sections. Four distinct display modes handle catalog, social media, email, and web project items respectively.

**What changes:**
- `app/page.tsx` is reduced to three section imports
- `HeroSection` is dramatically simplified: name, tagline, 2–3 line bio, headshot, single CTA
- `WorkSection` (new) absorbs the responsibilities of `ProjectsSection`, `MediaSection`, and `EmailWorkSection`
- `CTASection` becomes the minimal Contact section
- `Navbar` and `Footer` link arrays are updated to the three-section structure
- Five components are deleted: `WhatIDoSection`, `HowIWorkSection`, `AboutSection`, `LeadMagnetSection`, `EmailWorkSection`

**What stays:**
- Next.js 14+ App Router, TypeScript, Tailwind CSS
- `Navbar`, `Footer`, `SlideUp`, `ThemeWrapper` — unchanged in structure
- Dark theme (`#0a0a0a` background), teal (`#0d9488`) and purple (`#a855f7`) accents
- All existing `tailwind.config.ts` animations (`slideUpCubiBezier`, etc.)

**New npm dependencies needed:**
- `page-flip` — flip-book viewer (code-split via dynamic import)
- `embla-carousel-react` — social media carousel
- No other new runtime dependencies

---

## Glossary

- **WorkItem**: The union type representing a single piece of work across all four categories (catalog, social, email, web)
- **WorkCategory**: `"catalog" | "social" | "email" | "web"` — the four filter values
- **FlipBook Modal**: Full-screen overlay that renders catalog pages with realistic page-turn animation via the `page-flip` library
- **MockupCarousel**: Embla-powered slide carousel that frames social media images inside a phone device mockup SVG
- **ScrollPreviewModal**: Overlay that displays a tall email PNG inside a browser/phone frame with a JS-driven slow auto-scroll animation
- **FilterBar**: Horizontal pill-tab row (`All / Catalog / Social / Email / Web`) that controls which `WorkItem` entries are visible
- **SlideUp**: Existing scroll-triggered entrance animation component (IntersectionObserver, `animate-slideUpCubiBezier`)
- **page-flip**: npm package (`page-flip@2.0.7`) — `PageFlip` class with TypeScript types, renders realistic book/magazine turns
- **Embla Carousel**: Lightweight, framework-agnostic carousel engine with a React wrapper (`embla-carousel-react`)

---

## Component Architecture

### File Tree (after redesign)

```
app/
  page.tsx                          ← Hero + Work + Contact (3 imports only)
  layout.tsx                        ← unchanged
  portfolio/page.tsx                ← unchanged

components/
  Navbar.tsx                        ← nav links updated (Work, Contact only)
  Footer.tsx                        ← footer links updated to match
  HeroSection.tsx                   ← REFACTORED (simplified)
  SlideUp.tsx                       ← unchanged
  ThemeWrapper.tsx                  ← unchanged

  work/
    WorkSection.tsx                 ← NEW — unified Work section shell
    FilterBar.tsx                   ← NEW — pill filter tabs
    WorkGrid.tsx                    ← NEW — renders filtered grid of cards
    cards/
      CatalogCard.tsx               ← NEW — thumbnail card for catalog items
      SocialCard.tsx                ← NEW — phone-frame thumbnail card
      EmailCard.tsx                 ← NEW — browser-frame thumbnail card
      WebProjectCard.tsx            ← NEW — screenshot card (from old ProjectsSection)
    modals/
      FlipBookModal.tsx             ← NEW — full-screen page-flip viewer
      MockupCarousel.tsx            ← NEW — Embla carousel inside phone frame
      ScrollPreviewModal.tsx        ← NEW — email auto-scroll viewer

  CTASection.tsx                    ← REFACTORED (simplified to 3-line contact)

  # DELETED:
  # WhatIDoSection.tsx
  # HowIWorkSection.tsx
  # AboutSection.tsx
  # LeadMagnetSection.tsx
  # EmailWorkSection.tsx
  # ProjectsSection.tsx            ← absorbed into WorkSection/WebProjectCard
  # MediaSection.tsx               ← absorbed into WorkSection

lib/
  workData.ts                       ← NEW — single source of truth for all WorkItem data

public/
  catalogs/
    {catalog-id}/
      page-01.jpg
      page-02.jpg
      ...
  social/
    {project-id}/
      slide-01.jpg
      ...
  emails/
    {email-id}.png
```

---

## Data Models

### WorkCategory

```typescript
// lib/workData.ts

export type WorkCategory = "catalog" | "social" | "email" | "web"

// ─── Base ────────────────────────────────────────────────────────────────────

interface WorkItemBase {
  id: string                  // kebab-case, used in anchor links and asset paths
  category: WorkCategory
  title: string
  description: string         // ≤2 lines shown on grid card
  thumbnail: string           // path relative to /public — shown in the grid card
  tags?: string[]             // optional tech/tool tags shown on card (web items use these most)
}

// ─── Catalog ─────────────────────────────────────────────────────────────────

export interface CatalogItem extends WorkItemBase {
  category: "catalog"
  pages: string[]             // ordered array of image paths, e.g. ["/catalogs/home/page-01.jpg", ...]
  pageCount: number           // convenience — length of pages[]
}

// ─── Social Media ────────────────────────────────────────────────────────────

export interface SocialItem extends WorkItemBase {
  category: "social"
  slides: string[]            // ordered image paths for the carousel
  clientName?: string         // optional brand label shown in carousel header
}

// ─── Email ───────────────────────────────────────────────────────────────────

export interface EmailItem extends WorkItemBase {
  category: "email"
  fullImagePath: string       // path to full-height email PNG (tall, ~600px wide at 1x)
  frameType: "browser" | "phone"  // which device frame to render
}

// ─── Web Project ─────────────────────────────────────────────────────────────

export interface WebProjectItem extends WorkItemBase {
  category: "web"
  liveUrl: string
  tags: string[]              // required for web items
}

// ─── Union ───────────────────────────────────────────────────────────────────

export type WorkItem = CatalogItem | SocialItem | EmailItem | WebProjectItem
```

### Sample Data Shape

```typescript
// lib/workData.ts (continued)

export const WORK_ITEMS: WorkItem[] = [
  // ── Catalogs ──
  {
    id: "home-interior",
    category: "catalog",
    title: "Home & Interior Catalogue",
    description: "Editorial-style product catalogue with warm layouts and precise typography.",
    thumbnail: "/catalogs/home-interior/page-01.jpg",
    pages: [
      "/catalogs/home-interior/page-01.jpg",
      "/catalogs/home-interior/page-02.jpg",
      "/catalogs/home-interior/page-03.jpg",
    ],
    pageCount: 3,
  },
  {
    id: "auto-tools",
    category: "catalog",
    title: "Automobile Tools Catalogue",
    description: "Technical product data transformed into a clean, high-end brand asset.",
    thumbnail: "/catalogs/auto-tools/page-01.jpg",
    pages: [
      "/catalogs/auto-tools/page-01.jpg",
      "/catalogs/auto-tools/page-02.jpg",
    ],
    pageCount: 2,
  },

  // ── Social Media ──
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

  // ── Email Designs ──
  {
    id: "email-welcome",
    category: "email",
    title: "Welcome Series Email",
    description: "Klaviyo welcome flow email — high-contrast, mobile-first layout.",
    thumbnail: "/emails/email-welcome-thumb.png",
    fullImagePath: "/emails/email-welcome.png",
    frameType: "browser",
  },

  // ── Web Projects ──
  {
    id: "yawdesh",
    category: "web",
    title: "Yawdesh",
    description: "Digital reading platform delivering short Christian readings.",
    thumbnail: "/yadesh.png",
    liveUrl: "https://yadesh.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  // ... remaining web projects mirror existing ProjectsSection data
]
```

---

## Visual Layout Spec

### 1. `app/page.tsx` — New Structure

```tsx
// Three imports only
<main className="pt-16">
  <HeroSection />
  <WorkSection />
  <CTASection />
</main>
```

---

### 2. `HeroSection` — Simplified

**Layout:** Two-column (image right, text left) on desktop, stacked on mobile. Same structure as current, but the interior is stripped.

**Remove:**
- Availability pulse indicator
- Stack pills row (`Klaviyo`, `Figma`, etc.)
- Metrics row (the 4-stat border strip)
- The teal badge on the image (`42% open rate`)
- Secondary CTA button ("Let's Talk") — replaced by arrow/anchor to `#work`

**Keep:**
- `#0a0a0a` / `dark:bg-white` background
- The grid line background overlay
- The headshot `<Image>` with offset shadow block
- The role label card (`-top-3 -left-3`)

**New content:**
```
Name:     Olajide Igbalaye
Tagline:  Designer. Developer. End to end.
Bio:      2–3 lines absorbing the old About/Services/HowIWork content.
          Covers: visual design (email, catalogs, social), fullstack dev (Next.js/TypeScript),
          and the bridge between marketing strategy and technical execution.
CTA:      Single button → "#work" (anchor)
          "See My Work  ↓"  (teal button, same style as existing primary CTA)
```

**Tailwind classes (key changes):**
- Remove `space-y-7`, replace with `space-y-6`
- Bio `<p>`: `text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed`
- Single CTA: existing teal button class `px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg`

---

### 3. `WorkSection` — Unified

**Shell structure:**
```
<section id="work" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <SlideUp>  ← section header: "04 — Work" label + h2 "All My Work"  </SlideUp>
    <FilterBar />
    <WorkGrid items={filtered} />
  </div>
</section>
```

**State:** `activeFilter: WorkCategory | "all"` — managed in `WorkSection`, passed down to `FilterBar` (setter) and `WorkGrid` (reader).

---

### 4. `FilterBar`

**Layout:** Horizontal scrollable pill row, centered on desktop, left-aligned with overflow scroll on mobile.

```
[ All ]  [ Catalog ]  [ Social ]  [ Email ]  [ Web ]
```

**Active pill:** `bg-white text-[#0a0a0a] font-bold`
**Inactive pill:** `border border-white/20 text-gray-400 hover:border-white/40 hover:text-white`
**Transition:** `transition-all duration-200`
**Container:** `flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-10`

Filter selection triggers a CSS transition on the `WorkGrid` — items fade out/scale down then back in using a brief opacity transition (≤300ms, implemented with a `useEffect` + `useState(visible)` pattern, not framer-motion).

---

### 5. `WorkGrid`

**Layout:** CSS grid, uniform 3-column on desktop, 2-column on tablet, 1-column on mobile.

```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
```

Each cell renders the appropriate card component based on `item.category`:
- `"catalog"` → `<CatalogCard>`
- `"social"` → `<SocialCard>`
- `"email"` → `<EmailCard>`
- `"web"` → `<WebProjectCard>`

Items are wrapped in `<SlideUp>` for scroll-entrance animations.

**Filter transition pattern:**
```tsx
// WorkGrid.tsx
const [visible, setVisible] = useState(true)

useEffect(() => {
  setVisible(false)
  const t = setTimeout(() => setVisible(true), 150)
  return () => clearTimeout(t)
}, [activeFilter])

// wrapper div:
className={`transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}
```

---

### 6. Card Components

All cards share this base shell:
```
bg-white/5 border border-white/10 rounded-xl overflow-hidden
group hover:border-white/25 transition-colors flex flex-col
```
Thumbnail area: `h-44 overflow-hidden`
Body area: `p-5 flex flex-col flex-1 gap-3`

#### 6a. `CatalogCard`

```
Thumbnail: page-01.jpg of the catalog (with "Catalog" badge top-right in purple)
Body:      title, description (2 lines), pageCount pill ("X pages")
Action:    "View Flipbook" button → opens FlipBookModal
           onClick sets modalOpen=true and passes item to modal
```

Badge: `bg-purple-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded`
Button: `text-xs font-semibold text-purple-400 hover:text-white flex items-center gap-1.5`

#### 6b. `SocialCard`

```
Thumbnail: slide-01.jpg displayed inside a scaled-down phone frame SVG overlay
           (phone frame is a thin SVG div positioned absolute over the image)
Body:      title, description, optional clientName tag
Action:    "View Designs" button → opens MockupCarousel
```

Phone frame overlay: positioned absolute, `pointer-events-none`, uses a simple CSS border-radius + shadow to suggest a device without requiring an external image asset.

```css
/* phone frame approach — pure CSS, no SVG file needed */
.phone-frame {
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  box-shadow: 0 0 0 4px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.6);
}
```

Badge: `bg-pink-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded`

#### 6c. `EmailCard`

```
Thumbnail: top cropped ~44px of the email PNG (or a dedicated thumb image)
           displayed inside a minimal browser frame chrome (3 dots + URL bar mockup)
Body:      title, description
Action:    "Preview Email" button → opens ScrollPreviewModal
```

Browser frame chrome (pure HTML/Tailwind, no SVG file):
```tsx
<div className="bg-[#1a1a1a] border-b border-white/10 flex items-center gap-1.5 px-3 py-2">
  <span className="w-2 h-2 rounded-full bg-red-500/60" />
  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
  <span className="w-2 h-2 rounded-full bg-green-500/60" />
  <span className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-gray-600 px-2 py-0.5 truncate">
    email preview
  </span>
</div>
```

Badge: `bg-teal-500/80 text-white text-[10px] font-black px-2 py-0.5 rounded`

#### 6d. `WebProjectCard`

Functionally equivalent to the current `ProjectsSection` card — no modal, direct live link.

```
Thumbnail: screenshot image with hover scale
Body:      title, description, tech tags
Actions:   "View live" link (BsArrowUpRightSquare) + Share button (FiShare2)
```

This card is essentially the existing card from `ProjectsSection.tsx` moved to `work/cards/WebProjectCard.tsx` with no functional change.

---

### 7. `FlipBookModal` — Full-Screen Flip Viewer

**Trigger:** Rendered in `WorkSection` with `{isOpen && <FlipBookModal .../>}`, portaled to `document.body` via `createPortal`.

**Dependencies:** `page-flip` npm package — loaded via Next.js `dynamic()` with `{ ssr: false }` to keep it out of the initial bundle.

```tsx
// Conceptual structure inside FlipBookModal.tsx
import dynamic from "next/dynamic"

// The actual PageFlip instantiation lives in a child that is dynamically imported
const FlipBookInner = dynamic(() => import("./FlipBookInner"), { ssr: false })
```

**Layout:**
```
Fixed inset-0, z-50, bg-black/95
  ├── Close button (top-right, ×, white)
  ├── Page counter (top-center, "3 / 12")
  ├── FlipBook canvas (centered, max-w-4xl)
  ├── Left arrow button (absolutely positioned left-4, vertically centered)
  └── Right arrow button (right-4, vertically centered)
```

**PageFlip configuration:**
```typescript
new PageFlip(containerRef.current, {
  width: 550,         // single page width in px (two pages = 1100px spread)
  height: 733,        // 4:3 ratio portrait page
  size: "stretch",    // scales to container
  minWidth: 280,
  maxWidth: 1000,
  minHeight: 373,
  maxHeight: 1333,
  showCover: true,
  mobileScrollSupport: true,
  drawShadow: true,
  flippingTime: 700,
  usePortrait: true,  // single-page on mobile
})
```

**Mobile:** `usePortrait: true` means the library automatically shows one page at a time on narrow viewports.

**Loading state:** While images are loading, show a centered spinner:
```tsx
<div className="flex items-center justify-center h-96">
  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
</div>
```

**Keyboard:** `useEffect` adds `keydown` listener for `ArrowLeft` / `ArrowRight` / `Escape` while modal is open.

**Focus trap:** On open, focus moves to the close button. Tab cycles only within modal children.

---

### 8. `MockupCarousel` — Embla Carousel in Phone Frame

**Trigger:** Rendered as a modal overlay (same portal pattern as FlipBookModal).

**Layout:**
```
Fixed inset-0, z-50, bg-black/95
  ├── Close button (top-right)
  ├── Project title (top-left)
  ├── Phone frame container (centered, max-w-sm on mobile, up to 3 phones on lg)
  │     └── Embla viewport → slides (each slide = one image in phone frame)
  ├── Prev / Next arrow buttons
  └── Dot pagination (bottom-center)
```

**Phone frame per slide (CSS-only, no SVG file):**
```tsx
<div className="relative mx-auto" style={{width: 280, height: 560}}>
  {/* Phone shell */}
  <div className="absolute inset-0 rounded-[2.5rem] border-4 border-white/20
                  shadow-[0_0_0_2px_rgba(0,0,0,0.8),0_20px_60px_rgba(0,0,0,0.8)]
                  pointer-events-none z-10" />
  {/* Notch */}
  <div className="absolute top-3 left-1/2 -translate-x-1/2
                  w-16 h-5 bg-[#0a0a0a] rounded-full z-20" />
  {/* Image */}
  <Image src={slide} fill className="object-cover rounded-[2.2rem]" alt="..." />
</div>
```

**Embla config:**
```typescript
useEmblaCarousel({ loop: false, align: "center" })
```

**Responsive slides per view:**
- Mobile: 1 phone centered
- `lg:` (≥976px): up to 3 phones visible at once (handled by Embla `slidesToScroll` + CSS)

**Autoplay:** disabled (per requirements 4.5). Manual navigation only.

**Dot indicators:** Rendered from `emblaApi.scrollSnapList().length` — active dot is white, inactive dots are `bg-white/30`.

---

### 9. `ScrollPreviewModal` — Email Auto-Scroll Viewer

**Trigger:** Same portal pattern.

**Layout:**
```
Fixed inset-0, z-50, bg-black/90
  ├── Close button (top-right)
  ├── Email title (top-center)
  └── Frame container (centered, max-w-lg)
        ├── Browser chrome bar (3 dots + URL bar — see §6c)
        └── Scroll viewport (overflow-hidden, fixed height ~70vh)
              └── Email image (full height PNG, width 600px, auto-scrolls via scrollTop)
```

**Auto-scroll implementation:**
```typescript
// ScrollPreviewModal.tsx
const scrollRef = useRef<HTMLDivElement>(null)
const animFrameRef = useRef<number | null>(null)
const isPausedRef = useRef(false)
const hasEndedRef = useRef(false)

const SCROLL_SPEED = 0.4  // px per animation frame (~24px/sec at 60fps)

const animate = () => {
  if (!scrollRef.current || isPausedRef.current || hasEndedRef.current) {
    animFrameRef.current = requestAnimationFrame(animate)
    return
  }
  const el = scrollRef.current
  const maxScroll = el.scrollHeight - el.clientHeight
  if (el.scrollTop >= maxScroll) {
    hasEndedRef.current = true
    return  // stop — do not loop (requirement 5.5)
  }
  el.scrollTop += SCROLL_SPEED
  animFrameRef.current = requestAnimationFrame(animate)
}

useEffect(() => {
  animFrameRef.current = requestAnimationFrame(animate)
  return () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
  }
}, [])

// Pause on hover / touch
const handleMouseEnter = () => { isPausedRef.current = true }
const handleMouseLeave = () => { isPausedRef.current = false }
const handleTouchStart = () => { isPausedRef.current = true }
const handleTouchEnd   = () => { isPausedRef.current = false }
```

**"End of email" indicator (requirement 5.5):**
When `hasEndedRef` is true, render a small fade-in element at the bottom of the frame:
```tsx
{hasEnded && (
  <div className="absolute bottom-0 left-0 right-0 text-center py-3
                  bg-gradient-to-t from-black/60 to-transparent
                  text-xs text-gray-400 animate-fadeIn">
    End of email
  </div>
)}
```

**Keyboard:** `Escape` closes the modal. No left/right arrows needed.

---

### 10. `CTASection` — Minimal Contact

**Replaces:** The current `CTASection` (which has reasonable bones but may have excess copy).

**Target layout:**
```
<section id="contact" className="bg-[#0a0a0a] py-24 px-4 sm:px-6 border-t border-white/10">
  <div className="max-w-2xl mx-auto text-center space-y-6">
    <h2 className="text-4xl sm:text-5xl font-black text-white">
      Let's build something.
    </h2>
    <p className="text-gray-400 text-base leading-relaxed">
      Open to remote work — full-time, contract, or freelance.
      Drop me a line and let's talk.
    </p>
    <a href="mailto:olajide@example.com"
       className="inline-block px-8 py-4 bg-[#0d9488] text-white font-bold
                  rounded-lg hover:bg-[#0b7a70] transition-colors text-sm tracking-wide">
      olajide@example.com
    </a>
  </div>
</section>
```

No multi-column layout, no form, no additional copy blocks.

---

### 11. `Navbar` Link Updates

```typescript
// New NAV_ITEMS (replaces current 5-item array)
const NAV_ITEMS: NavItem[] = [
  { label: "Work",    page: "work"    },
  { label: "Contact", page: "contact" },
]
```

Remove the `/portfolio` standalone link — the Work section replaces the portfolio page's role on the homepage. The `Portfolio` link can be kept if the `/portfolio` route still serves a purpose, but it should be deprioritized (moved to Footer only, or removed from the Navbar's primary nav).

---

### 12. `Footer` Link Updates

```typescript
// Footer quick links (replaces current 7-item array)
const links = [
  { label: "Home",    to: "home"    },
  { label: "Work",    to: "work"    },
  { label: "Contact", to: "contact" },
]
```

Social links and copyright remain unchanged.

---

## Dependency Installation

```bash
# page-flip — flip-book viewer
pnpm add page-flip@2.0.7

# Embla Carousel — social media carousel
pnpm add embla-carousel-react@8.5.1 embla-carousel@8.5.1
```

Both are exact-pinned versions. Neither has peer dependency conflicts with Next.js 16 / React 19.

`page-flip` must be dynamically imported with `ssr: false` in `FlipBookModal.tsx`. Embla is React-hook-based and works with SSR; no special treatment needed.

---

## Correctness Properties

Property 1: Filter — Work Grid Shows Only Matching Items

_For any_ selected `WorkCategory` filter value (`"catalog"`, `"social"`, `"email"`, or `"web"`), the Work grid SHALL display exactly and only those `WorkItem` entries whose `category` field matches the selected filter, and no items from other categories SHALL be visible.

**Validates: Requirements 2.2, 2.3**

Property 2: Filter Transition — Smooth Animation

_For any_ filter change (including changes to and from `"all"`), the grid SHALL complete its opacity transition within 300ms without abrupt layout shifts, and all previously visible items SHALL fade out before newly matching items fade in.

**Validates: Requirements 2.4**

Property 3: FlipBook Modal — Page Navigation Completeness

_For any_ `CatalogItem` with `pages.length = N`, the FlipBookModal SHALL allow the user to navigate from page 1 to page N using arrow buttons, keyboard arrows, or page-edge clicks, and SHALL display each page in the correct order without skipping or repeating.

**Validates: Requirements 3.1, 3.2, 3.3**

Property 4: Email Scroll — Auto-Scroll Pause and Stop

_For any_ `EmailItem`, the ScrollPreviewModal SHALL auto-scroll the email image downward at a constant rate, pause immediately when the pointer enters or touch begins on the content area, resume when the pointer leaves or touch ends, and stop permanently (not loop) when `scrollTop >= scrollHeight - clientHeight`.

**Validates: Requirements 5.2, 5.3, 5.4, 5.5**

Property 5: Preservation — Existing Web Project Behavior

_For any_ `WebProjectItem`, the card SHALL render a thumbnail, title, description (≤2 lines), tech tags, and a live link that opens in a new tab — preserving the exact functional behavior of the original `ProjectsSection` card with no regressions.

**Validates: Requirements 6.1, 6.2**

Property 6: Accessibility — Modal Focus Trap and Escape

_For any_ open overlay (FlipBookModal, MockupCarousel, ScrollPreviewModal), keyboard focus SHALL be trapped within the overlay, the Escape key SHALL close it, and focus SHALL return to the triggering card element when the overlay closes.

**Validates: Requirements 8.4**

---

## Fix Implementation

*(This section uses "Fix" in the redesign sense: the changes required to go from the current codebase to the target architecture.)*

### Phase A — File Deletion and Page Cleanup

**Files to delete:**
- `components/WhatIDoSection.tsx`
- `components/HowIWorkSection.tsx`
- `components/AboutSection.tsx`
- `components/LeadMagnetSection.tsx`
- `components/EmailWorkSection.tsx`
- `components/ProjectsSection.tsx`
- `components/MediaSection.tsx`
- `components/CTASection.tsx` *(replaced by new minimal version)*

**`app/page.tsx` changes:**
Remove 5 section imports and their JSX. Keep `HeroSection`. Add `WorkSection`, `CTASection`.

### Phase B — Data Layer

**Create `lib/workData.ts`:**
Migrate all project entries from `ProjectsSection.tsx` and `MediaSection.tsx` into the typed `WORK_ITEMS` array. Add catalog, social, and email entries with placeholder paths where assets aren't yet uploaded.

### Phase C — New Components

Creation order (dependency-safe):
1. `lib/workData.ts` — data, no deps
2. `components/work/cards/WebProjectCard.tsx` — simplest, mirrors existing card
3. `components/work/cards/CatalogCard.tsx`
4. `components/work/cards/SocialCard.tsx`
5. `components/work/cards/EmailCard.tsx`
6. `components/work/WorkGrid.tsx` — depends on all four cards
7. `components/work/FilterBar.tsx` — standalone
8. `components/work/modals/FlipBookModal.tsx` — depends on page-flip
9. `components/work/modals/MockupCarousel.tsx` — depends on embla-carousel-react
10. `components/work/modals/ScrollPreviewModal.tsx` — standalone JS
11. `components/work/WorkSection.tsx` — composes all of the above
12. `components/CTASection.tsx` — new minimal version
13. `components/HeroSection.tsx` — refactored
14. `components/Navbar.tsx` — nav link array update
15. `components/Footer.tsx` — footer link array update
16. `app/page.tsx` — final assembly

### Phase D — Asset Directory Setup

Create placeholder directories in `/public`:
```
public/catalogs/.gitkeep
public/social/.gitkeep
public/emails/.gitkeep
```

For current catalogs (home interior, auto tools): copy existing `/public/home.png` and `/public/tools.png` as temporary `page-01.jpg` thumbnails until real page-by-page JPGs are uploaded.

### Phase E — Build Verification

```bash
pnpm build
```

Must pass with zero TypeScript errors and zero ESLint errors.

---

## Testing Strategy

### Validation Approach

Testing follows the same two-phase structure used for all correctness properties: first verify the existing behavior is preserved (no regression on web project cards), then verify the new behaviors work correctly.

### Exploratory Testing (Manual, Pre-Implementation)

**Goal:** Confirm the current codebase baseline before making changes.

1. Note all 8 web projects render correctly in `ProjectsSection`
2. Note the 2 catalog items and 4 video items in `MediaSection`
3. Screenshot the current Hero metrics/stack pills layout for before/after comparison

### Fix Checking (Per Correctness Property)

**Property 1 — Filter logic:**
Unit test `WorkGrid`'s filtering: given `WORK_ITEMS` with mixed categories, asserting that filtering by `"catalog"` returns only items where `category === "catalog"`.

**Property 2 — Transition timing:**
Manual test: click each filter pill, observe no abrupt layout shift, transition completes visually in ~150ms.

**Property 3 — FlipBook navigation:**
- Open FlipBookModal with a 3-page catalog
- Click right arrow 2 times → assert page counter reads "3 / 3"
- Click left arrow 2 times → assert page counter reads "1 / 3"
- Press keyboard ArrowRight → assert page advances
- Press Escape → assert modal closes

**Property 4 — Email scroll:**
- Open ScrollPreviewModal
- Wait 2 seconds → assert `scrollTop > 0` (scroll has started)
- Hover over email → assert `scrollTop` stops changing
- Move mouse away → assert `scrollTop` resumes changing
- Wait for scroll to reach bottom → assert `scrollTop` stops and "End of email" indicator appears
- Assert `scrollTop` does not reset or continue after bottom

**Property 5 — Web card preservation:**
- All 8 existing projects appear in the Work grid when filter is "All" or "Web"
- Each live link opens in `target="_blank"`
- Tech tags are visible on each card

**Property 6 — Focus trap:**
- Open FlipBookModal → `document.activeElement` should be the close button
- Tab through — focus should not escape to background
- Press Escape → modal closes, focus returns to the CatalogCard that opened it

### Unit Tests

- `filterWorkItems(items, "catalog")` returns only catalog items
- `filterWorkItems(items, "all")` returns all items unchanged
- `filterWorkItems([], "web")` returns `[]`
- `WorkItem` type guard: each item in `WORK_ITEMS` satisfies its subtype (TypeScript compile-time check)

### Property-Based Tests

- Generate random subsets of `WORK_ITEMS` → applying filter `f` and then filter `f` again yields the same result as applying `f` once (idempotence)
- Generate random `WorkCategory` values → filter applied to `WORK_ITEMS` never returns items of a different category
- Generate random scroll positions → `SCROLL_SPEED` applied N times always converges to `maxScroll` and never exceeds it

### Integration Tests

- Full page render: `app/page.tsx` renders Hero + Work + Contact with no console errors
- `pnpm build` passes with zero TypeScript/ESLint errors (Requirement 8.3)
- Work section with all 4 filter categories — each filter shows a non-empty grid (assuming data is populated)
- Mobile viewport (375px): filter pills scroll horizontally, grid is single-column, no horizontal overflow

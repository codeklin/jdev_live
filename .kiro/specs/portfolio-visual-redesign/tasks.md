# Implementation Plan — Portfolio Visual Redesign

> Tasks follow the Phase A → E order defined in the design document.
> Tasks within the same phase that have no intra-phase dependency are marked **(parallel)**.
> Each task is atomic: it can be reviewed and verified independently.

---

## Phase A — File Deletion + Page Cleanup

- [x] A.1 Delete legacy section components **(parallel)**
  - Delete `components/WhatIDoSection.tsx`
  - Delete `components/HowIWorkSection.tsx`
  - Delete `components/AboutSection.tsx`
  - Delete `components/LeadMagnetSection.tsx`
  - Delete `components/EmailWorkSection.tsx`
  - Delete `components/ProjectsSection.tsx`
  - Delete `components/MediaSection.tsx`
  - Delete `components/CTASection.tsx` (will be replaced by the new minimal version in Phase C)
  - _Requirements: 1.1_

- [x] A.2 Strip `app/page.tsx` to three-section skeleton **(parallel)**
  - Remove all imports for deleted components
  - Remove their JSX from the page
  - Keep `<HeroSection />` import and JSX in place (refactored in Phase C)
  - Add placeholder comments `{/* <WorkSection /> */}` and `{/* <CTASection /> */}` so TypeScript compiles cleanly
  - Verify: `pnpm build` (or `pnpm tsc --noEmit`) produces no "module not found" errors after deletions
  - _Requirements: 1.1, 8.3_

- [x] A.3 Retire `/portfolio` route **(parallel)**
  - Delete `app/portfolio/page.tsx`
  - Add a Next.js redirect in `next.config.mjs`: `{ source: '/portfolio', destination: '/#work', permanent: true }`
  - Verify: navigating to `/portfolio` in dev redirects to `/#work`
  - _Requirements: 1.1, 1.3_

---

## Phase B — Data Layer

- [x] B.1 Create `lib/workData.ts` with all WorkItem types and initial data
  - Define and export `WorkCategory`, `WorkItemBase`, `CatalogItem`, `SocialItem`, `EmailItem`, `WebProjectItem`, `WorkItem` types exactly as specified in design §Data Models
  - Migrate all existing web project entries from the deleted `ProjectsSection.tsx` into `WORK_ITEMS` as `WebProjectItem` entries (preserve all existing project titles, descriptions, URLs, tags, and thumbnail paths)
  - Migrate catalog entries: `home-interior` (thumbnail `/home.png` as temp page-01) and `auto-tools` (thumbnail `/tools.png` as temp page-01) as `CatalogItem` entries with placeholder `pages` arrays
  - Add two placeholder `SocialItem` entries with placeholder slide paths (`/social/placeholder-1/slide-01.jpg`, etc.)
  - Add two placeholder `EmailItem` entries with placeholder `fullImagePath` values
  - Export `WORK_ITEMS: WorkItem[]` as the single source of truth
  - Verify: `pnpm tsc --noEmit` passes with zero type errors on this file
  - _Requirements: 2.1, 2.2, 6.1_

---

## Phase C — New Components

> Steps 1–16 from design §Phase C, Creation Order. Steps with no shared dependency are marked **(parallel)**.

- [x] C.1 Create `components/work/cards/WebProjectCard.tsx` **(parallel with C.2, C.3, C.4, C.5)**
  - Accept `item: WebProjectItem` prop
  - Render: thumbnail (`<Image>` with lazy loading + `sizes`), title, description (2-line clamp), tech tags, "View live" link (`target="_blank" rel="noopener noreferrer"`)
  - Use the shared card shell classes from design §6: `bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-white/25 transition-colors flex flex-col`
  - On thumbnail hover: scale effect (`group-hover:scale-105 transition-transform duration-300`)
  - If image fails to load, show a placeholder `bg-white/10` fallback div (Requirement 8.5)
  - _Requirements: 6.1, 6.2, 6.3, 8.1, 8.5_

- [x] C.2 Create `components/work/cards/CatalogCard.tsx` **(parallel with C.1, C.3, C.4, C.5)**
  - Accept `item: CatalogItem` and `onOpen: (item: CatalogItem) => void` props
  - Render: thumbnail with purple `Catalog` badge (top-right), title, description, `pageCount` pill, "View Flipbook" button
  - Clicking the card or button calls `onOpen(item)`
  - Hover affordance: `hover:border-white/25` border highlight
  - If image fails to load, show a placeholder fallback (Requirement 8.5)
  - _Requirements: 3.1, 2.5, 2.6, 8.5_

- [x] C.3 Create `components/work/cards/SocialCard.tsx` **(parallel with C.1, C.2, C.4, C.5)**
  - Accept `item: SocialItem` and `onOpen: (item: SocialItem) => void` props
  - Render: thumbnail inside a CSS-only phone frame overlay (no SVG file — use `border border-white/15 rounded-[12px] shadow` per design §6b), pink `Social` badge, title, description, optional `clientName` tag, "View Designs" button
  - Clicking the card or button calls `onOpen(item)`
  - If image fails to load, show a placeholder fallback (Requirement 8.5)
  - _Requirements: 4.1, 2.5, 2.6, 8.5_

- [x] C.4 Create `components/work/cards/EmailCard.tsx` **(parallel with C.1, C.2, C.3, C.5)**
  - Accept `item: EmailItem` and `onOpen: (item: EmailItem) => void` props
  - Render: thumbnail with browser-chrome header (3 dots + URL bar mockup per design §6c), teal `Email` badge, title, description, "Preview Email" button
  - Clicking the card or button calls `onOpen(item)`
  - If image fails to load, show a placeholder fallback (Requirement 8.5)
  - _Requirements: 5.1, 2.5, 2.6, 8.5_

- [x] C.5 Create `components/work/FilterBar.tsx` **(parallel with C.1, C.2, C.3, C.4)**
  - Accept `active: WorkCategory | "all"` and `onChange: (v: WorkCategory | "all") => void` props
  - Render five pill buttons: All, Catalog, Social, Email, Web
  - Active pill: `bg-white text-[#0a0a0a] font-bold`; inactive: `border border-white/20 text-gray-400 hover:border-white/40 hover:text-white transition-all duration-200`
  - Container: `flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-10`
  - _Requirements: 2.2, 2.3, 1.4_

- [x] C.6 Create `components/work/WorkGrid.tsx`
  - Depends on C.1–C.4 (card components)
  - Accept `items: WorkItem[]`, `activeFilter: WorkCategory | "all"`, and modal-opener callbacks for each category
  - Implement the filter + fade transition pattern from design §5: `useState(visible)` + `useEffect` that sets `visible=false`, waits 150ms, then sets `visible=true` on filter change
  - Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`
  - Wrap each card in `<SlideUp>` for scroll entrance
  - Render the correct card component per `item.category`
  - **Property 1: Bug Condition** — Filter correctness
    - Write a unit test (Jest or Vitest) for the filter logic: given `WORK_ITEMS` with all four categories, filtering by `"catalog"` returns only items where `category === "catalog"`, and no items from other categories are present
    - Run on unfixed code (before filter logic is implemented): **EXPECTED TO FAIL**
    - Document the counterexample found
    - _Requirements: 2.2, 2.3, 2.4_

- [x] C.7 Create `components/work/modals/FlipBookModal.tsx`
  - Depends on `page-flip` being installed (run `pnpm add page-flip@2.0.7` if not yet done)
  - Dynamically import a `FlipBookInner` child with `{ ssr: false }` per design §7
  - `FlipBookInner`: instantiates `PageFlip` on a `<div>` ref with config from design §7, populates pages from `item.pages`, shows a spinner loading state, renders left/right arrow buttons, and a page counter
  - Portal to `document.body` via `createPortal`
  - Keyboard: `useEffect` binds `ArrowLeft`, `ArrowRight`, `Escape` on mount; cleans up on unmount
  - Focus trap: on open, focus moves to the close (×) button; Tab cycles only within modal children
  - Mobile: `usePortrait: true` (handled by page-flip config)
  - Close button dismisses overlay; focus returns to the triggering `CatalogCard`
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 8.4_

- [x] C.8 Create `components/work/modals/MockupCarousel.tsx`
  - Depends on `embla-carousel-react` being installed (run `pnpm add embla-carousel-react@8.5.1 embla-carousel@8.5.1` if not yet done)
  - Portal to `document.body` via `createPortal`
  - CSS-only phone frame per design §8: `rounded-[2.5rem] border-4 border-white/20 shadow-[…]` + notch div + `<Image fill>` inside
  - Embla config: `{ loop: false, align: "center" }`; autoplay disabled (no plugin added)
  - Prev/Next arrow buttons; dot pagination from `emblaApi.scrollSnapList().length`
  - Desktop (≥976px): up to 3 phone mockups visible per slide via CSS `flex`
  - Keyboard: `Escape` closes; focus trap within modal
  - Close button returns focus to the triggering `SocialCard`
  - _Requirements: 4.2, 4.3, 4.4, 4.5, 8.4_

- [x] C.9 Create `components/work/modals/ScrollPreviewModal.tsx`
  - Portal to `document.body` via `createPortal`
  - Browser-chrome header (3 dots + URL bar, per design §6c) above a `overflow-hidden` scroll viewport
  - Auto-scroll via `requestAnimationFrame` loop at `SCROLL_SPEED = 0.4px/frame` per design §9
  - `isPausedRef` toggled by `onMouseEnter`/`onMouseLeave` and `onTouchStart`/`onTouchEnd` on the scroll viewport
  - `hasEndedRef` set to `true` when `scrollTop >= scrollHeight - clientHeight`; loop stops (does not loop back)
  - "End of email" fade-in indicator at bottom when `hasEnded` is true
  - Keyboard: `Escape` closes
  - Focus trap; close button returns focus to the triggering `EmailCard`
  - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6, 8.4_

- [x] C.10 Create `components/work/WorkSection.tsx`
  - Depends on C.5 (FilterBar), C.6 (WorkGrid), C.7 (FlipBookModal), C.8 (MockupCarousel), C.9 (ScrollPreviewModal)
  - Manages state: `activeFilter`, `flipBookItem`, `socialItem`, `emailItem`
  - Section shell: `<section id="work" className="bg-[#0a0a0a] py-24 px-4 sm:px-6">`
  - Renders `<FilterBar>`, `<WorkGrid>`, and conditionally renders the three modals
  - Section header: "04 — Work" label + `<h2>All My Work</h2>` wrapped in `<SlideUp>`
  - _Requirements: 2.1, 2.2, 2.3_

- [x] C.11 Create new `components/CTASection.tsx`
  - Minimal contact section with a contact form that sends messages directly to WhatsApp via the `wa.me` link pattern — no backend or email needed
  - The component is a **client component** (`"use client"`) using React controlled state (`useState`) for name, email, and message fields — no HTML form `action` attribute
  - On submit, prevent default, build a pre-filled WhatsApp URL, and open it in a new tab:
    - Build message string: `` `Name: ${name}\nEmail: ${email}\nMessage: ${message}` ``
    - Build URL: `` `https://wa.me/2347031098097?text=${encodeURIComponent(text)}` ``
    - Open with: `window.open(url, "_blank", "noopener,noreferrer")`
  - Fields: Name (`<input type="text">`), Email (`<input type="email">`), Message (`<textarea rows={4}>`)
  - Submit button label: "Send via WhatsApp" with `FaWhatsapp` icon from `react-icons/fa`
  - Submit button style: `bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold rounded-lg px-6 py-3 flex items-center gap-2 mx-auto` (WhatsApp green)
  - Input/textarea base classes: `w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#25D366] transition-colors`
  - Form layout: stacked fields, `space-y-4`, labels left-aligned (`text-left text-sm text-gray-400`)
  - Layout: `<section id="contact">`, `max-w-2xl mx-auto`, headline "Let's build something.", 1–2 line subtext, then the form
  - All inputs have visible `<label>` elements with `htmlFor` attributes (accessibility)
  - Section `id="contact"` so Navbar anchor link works
  - Verify: submitting the form with test values opens `https://wa.me/2347031098097?text=Name%3A+...` in a new tab with fields correctly URL-encoded
  - _Requirements: 7.4, 1.4_

- [x] C.12 Refactor `components/HeroSection.tsx`
  - Remove: availability pulse indicator, stack pills row, metrics row (4-stat strip), teal badge on image, secondary "Let's Talk" CTA button
  - Keep: `#0a0a0a` background, grid line overlay, headshot `<Image>`, role label card (`-top-3 -left-3`)
  - Add: name, tagline "Designer. Developer. End to end.", 2–3 line bio blurb (absorbing About/Services/HowIWork content per design §2), single teal CTA button linking to `#work`
  - Bio `<p>` class: `text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed`
  - CTA: `px-6 py-3 bg-[#0d9488] text-white font-bold rounded-lg` with text "See My Work ↓"
  - Verify: no TypeScript errors; component renders without importing any deleted components
  - _Requirements: 1.2, 7.3_

- [x] C.13 Update `components/Navbar.tsx` nav link array
  - Replace existing nav items array with two entries: `{ label: "Work", page: "work" }` and `{ label: "Contact", page: "contact" }`
  - Remove any links to removed sections (Services, HowIWork, WhatIDo, About, Portfolio)
  - Verify: no TypeScript errors; no broken references
  - _Requirements: 1.3_

- [x] C.14 Update `components/Footer.tsx` quick-links array **(parallel with C.13)**
  - Replace footer links with: Home, Work, Contact (per design §12)
  - Remove links to all deleted sections
  - Social links and copyright text: unchanged
  - _Requirements: 1.3_

- [x] C.15 Assemble `app/page.tsx`
  - Depends on C.10, C.11, C.12 being complete
  - Replace placeholder comments from A.2 with real imports: `WorkSection` and `CTASection`
  - Final structure: `<HeroSection />`, `<WorkSection />`, `<CTASection />` — three and only three section-level components
  - Verify: `pnpm tsc --noEmit` passes; no orphan imports
  - _Requirements: 1.1, 8.3_

- [x] C.16 Install npm dependencies
  - Run: `pnpm add page-flip@2.0.7`
  - Run: `pnpm add embla-carousel-react@8.5.1 embla-carousel@8.5.1`
  - Verify: packages appear in `package.json` with exact pinned versions; `pnpm tsc --noEmit` still passes
  - _Requirements: 3.2, 4.2, 8.2_

---

## Phase D — Asset Directory Setup

- [x] D.1 Create placeholder asset directories in `/public` **(parallel)**
  - Create `public/catalogs/home-interior/` — copy `public/home.png` as `page-01.jpg` (temp thumbnail until real pages uploaded)
  - Create `public/catalogs/auto-tools/` — copy `public/tools.png` as `page-01.jpg`
  - Create `public/social/placeholder-1/` with a `slide-01.jpg` placeholder (copy any existing image as temp)
  - Create `public/emails/` with a `email-welcome-thumb.png` placeholder
  - Add `.gitkeep` to each directory so empty dirs are tracked
  - Verify: all `thumbnail` and `pages` paths in `lib/workData.ts` resolve to an actual file (no 404 in dev)
  - _Requirements: 3.6, 8.1, 8.5_

---

## Phase E — Build Verification + Preservation Check

- [x] E.1 Write preservation property tests (BEFORE running final build)
  - **Property 2: Preservation** — Existing Web Project Behavior
  - **Follow observation-first methodology**: run the current dev build, observe that all existing web projects (Yawdesh, GigsDev, etc.) render with thumbnail, title, description, tags, and live link in the new `WorkGrid`
  - Write property-based tests (Vitest/Jest + fast-check or equivalent):
    - For all `WebProjectItem` entries in `WORK_ITEMS`: card renders a `<a target="_blank">` live link
    - For all `WebProjectItem` entries: `tags` array is non-empty and every tag is rendered
    - For all `WorkItem` entries after filter `"all"`: rendered count equals `WORK_ITEMS.length`
  - Verify tests **PASS on the current (pre-build) code** — confirms baseline is preserved
  - _Requirements: 6.1, 6.2, 6.3_

- [x] E.2 Run production build verification
  - Depends on all Phase A–D tasks and C.16 being complete
  - Run: `pnpm build`
  - **EXPECTED OUTCOME**: Zero TypeScript errors, zero ESLint errors, build succeeds
  - If errors appear: fix them before marking complete
  - _Requirements: 8.3_

- [x] E.3 Verify filter correctness property test now passes
  - **Property 1: Expected Behavior** — Filter correctness
  - Re-run the **same test** written in C.6 (do NOT write a new test)
  - With `WorkGrid` filter logic now implemented, test should PASS
  - **EXPECTED OUTCOME**: Test PASSES (confirms filter returns only matching categories)
  - _Requirements: 2.2, 2.3_

- [x] E.4 Verify preservation tests still pass after build
  - **Property 2: Preservation** — Existing Web Project Behavior
  - Re-run the **same tests** written in E.1 (do NOT write new tests)
  - **EXPECTED OUTCOME**: All preservation tests still PASS (no regressions on web project cards)
  - _Requirements: 6.1, 6.2, 6.3_

- [x] E.5 Manual smoke test — responsive layout
  - Open dev server, test at 375px, 768px, 1280px, 1440px viewports
  - Verify: no horizontal overflow at any width (Requirement 1.4)
  - Verify: Work grid is 1-col (mobile), 2-col (tablet), 3-col (desktop)
  - Verify: filter pills scroll horizontally on mobile without breaking layout
  - Verify: Hero, Work, Contact sections render correctly in both light and dark mode (Requirement 7.5)
  - _Requirements: 1.4, 7.5_

- [x] E.6 Manual smoke test — modal accessibility
  - Open FlipBookModal: confirm focus moves to close button, Tab stays within modal, Escape closes it, focus returns to the triggering card
  - Open MockupCarousel: same focus trap check
  - Open ScrollPreviewModal: same focus trap check; confirm Escape closes; confirm auto-scroll pauses on hover/touch and stops at bottom without looping
  - _Requirements: 8.4, 5.3, 5.4, 5.5_

- [x] E.7 Checkpoint — all tests pass, build is clean
  - All property tests (C.6, E.1) pass
  - `pnpm build` output is clean (E.2)
  - `/portfolio` redirects to `/#work` (A.3)
  - Contact form opens WhatsApp (`wa.me/2347031098097`) in a new tab with pre-filled message (C.11)
  - Ask the user if any questions arise before closing the spec

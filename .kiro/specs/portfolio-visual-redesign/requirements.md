# Requirements: Portfolio Visual Redesign

## Introduction

The current portfolio (Next.js + Tailwind + TypeScript) is structured around text-heavy service descriptions and metric cards. The owner is a visual/graphic designer and frontend developer whose actual work — catalogs, social media designs, email templates, and web apps — is far more persuasive than any written copy. The redesign replaces the text-first approach with a work-first, visual-storytelling site: a minimal Hero, a unified filterable Work section with four distinct display modes (catalog flip-book, social media mockup carousel, email scroll preview, web project grid), and a minimal Contact/CTA. Sections like About, Services, and HowIWork are consolidated into a 2–3 line bio blurb inside the Hero. The existing stack (Next.js, Tailwind CSS, TypeScript) is retained.

---

## Requirements

### 1. Page Structure & Navigation

**1.1** WHEN a visitor lands on the site, the page SHALL present exactly three primary sections in order: Hero, Work, and Contact/CTA — with no standalone About, Services, HowIWork, WhatIDo, LeadMagnet, or EmailWork sections appearing as separate full-page sections.

**1.2** WHEN a visitor views the Hero section, the section SHALL display: the designer's name, a single one-liner tagline, a 2–3 line compact bio blurb (absorbing the former About/Services/HowIWork content), and a primary CTA link to the Work section.

**1.3** WHEN a visitor views the Navbar, the navigation SHALL contain only links relevant to the new three-section structure (e.g., Work, Contact) and SHALL NOT include links to removed sections (Services, HowIWork, WhatIDo, About as standalone).

**1.4** WHEN a visitor views the site on any screen width from 320px to 1440px+, all sections SHALL be fully responsive with no horizontal overflow or broken layouts.

---

### 2. Work Section — Unified Filterable Grid

**2.1** WHEN a visitor views the Work section, the section SHALL display a single unified grid or masonry layout containing all work items across all categories.

**2.2** WHEN a visitor uses the filter controls at the top of the Work section, the grid SHALL filter to show only items matching the selected category: **Catalog**, **Social Media**, **Email**, or **Web**.

**2.3** WHEN no filter is active (default state), the grid SHALL display all work items across all categories simultaneously.

**2.4** WHEN a filter is applied or removed, the grid items SHALL transition in/out with a smooth animation (fade or scale, ≤ 300ms) rather than an abrupt layout shift.

**2.5** WHEN a visitor views the Work grid, each item thumbnail SHALL display clearly against the dark/neutral background with enough contrast to make the work visually dominant.

**2.6** WHEN a visitor hovers over any Work grid item, the item SHALL surface a subtle visual affordance (e.g., scale, overlay, border highlight) indicating it is interactive.

---

### 3. Catalog Work Items — Page-Flip Book Viewer

**3.1** WHEN a visitor clicks a Catalog work item in the Work grid, the site SHALL open a full-screen overlay/modal containing an interactive page-flip book viewer rendering the catalog as a magazine/book experience.

**3.2** WHEN the page-flip viewer is open, it SHALL use a flip-book library (StPageFlip or turn.js or equivalent) that renders realistic page-turn animations between spreads.

**3.3** WHEN the page-flip viewer is open, the visitor SHALL be able to navigate pages via: clickable left/right arrow controls, clicking the page edge, and keyboard left/right arrow keys.

**3.4** WHEN the page-flip viewer is open on a mobile viewport, the viewer SHALL adapt to a single-page view (not a two-page spread) and remain fully operable by touch swipe.

**3.5** WHEN the page-flip viewer is open, a close control (×) SHALL be visible and SHALL dismiss the overlay, returning focus to the Work grid.

**3.6** WHEN the page-flip viewer is loading catalog assets, a loading state SHALL be shown to the user rather than a blank overlay.

---

### 4. Social Media Work Items — Device Mockup Carousel

**4.1** WHEN a visitor views Social Media work items in the Work grid, each item SHALL be displayed inside a phone/device frame mockup rather than as a flat image.

**4.2** WHEN a visitor clicks a Social Media work item (or it is opened in a detail view), the designs for that project SHALL be displayed in a scrollable carousel, with each slide showing one or more designs inside device mockups.

**4.3** WHEN the Social Media carousel is active, the visitor SHALL be able to navigate between slides via swipe (touch), arrow button controls, and dot/indicator pagination.

**4.4** WHEN the Social Media carousel is active on desktop, the carousel SHALL display 1–3 mockups per slide depending on viewport width.

**4.5** WHEN the Social Media carousel is active, autoplay SHALL be disabled by default; the user controls navigation manually.

---

### 5. Email Work Items — Browser/Phone Frame with Auto-Scroll Preview

**5.1** WHEN a visitor views Email work items in the Work grid, each item SHALL be displayed inside a browser frame or phone frame that gives context (as if viewing an email in a client).

**5.2** WHEN a visitor clicks an Email work item, a detail view SHALL open showing the full email design inside the frame with a slow auto-scroll animation that mimics a human reading the email from top to bottom.

**5.3** WHEN the auto-scroll animation is running, it SHALL pause immediately when the visitor hovers over or touches the email content area.

**5.4** WHEN the visitor moves their cursor away from (or lifts touch from) the email content area, the auto-scroll SHALL resume from where it paused.

**5.5** WHEN the auto-scroll reaches the bottom of the email, it SHALL stop (not loop) and optionally display a subtle "end of email" indicator.

**5.6** WHEN the Email detail view is open, a close control SHALL be visible to dismiss it and return to the Work grid.

---

### 6. Web Project Items — Standard Grid Cards

**6.1** WHEN a visitor filters to Web or views all items, Web project items SHALL appear as card entries in the grid with a screenshot/mockup thumbnail, project name, short description (≤ 2 lines), tech tags, and a live link.

**6.2** WHEN a visitor clicks a Web project card's live link, it SHALL open the project URL in a new browser tab.

**6.3** WHEN a visitor views Web project cards, the cards SHALL be visually consistent with the overall dark/neutral aesthetic established by the site.

---

### 7. Visual Aesthetic & Transitions

**7.1** WHEN a visitor views the site, the overall background SHALL be dark or neutral (dark gray/near-black as the dominant color), with work content and imagery providing the primary visual contrast and color.

**7.2** WHEN a visitor scrolls between sections, the transitions SHALL feel smooth — using scroll-triggered entrance animations (fade, slide-up) consistent with the existing `SlideUp` animation pattern already in the codebase.

**7.3** WHEN a visitor views the Hero, the section SHALL feel minimal — no metrics rows, no stack pill tags, no availability indicators cluttering the headline area.

**7.4** WHEN a visitor views the Contact/CTA section, it SHALL be minimal: a headline, 1–2 lines of copy, and a direct contact action (email link or contact form). No multi-column layouts or extensive copy.

**7.5** WHEN the site is viewed in both light and dark mode (via the existing theme toggle), the visual design SHALL remain coherent and the work grid SHALL be clearly legible in both themes.

---

### 8. Performance & Technical Constraints

**8.1** WHEN images are loaded in the Work grid, they SHALL use Next.js `<Image>` with lazy loading and appropriate `sizes` attributes to avoid layout shift and excessive network load.

**8.2** WHEN the page-flip library is loaded, it SHALL be code-split (dynamic import) so it does not bloat the initial page bundle.

**8.3** WHEN the site is built, it SHALL pass a Next.js production build (`next build`) with no TypeScript errors and no ESLint errors under the project's existing configuration.

**8.4** WHEN any interactive overlay (catalog viewer, email detail, social media carousel) is open, keyboard focus SHALL be trapped within the overlay and Escape key SHALL close it, meeting basic accessibility requirements.

**8.5** WHEN work item images fail to load, a graceful fallback (placeholder background or error state) SHALL be shown rather than a broken image element.

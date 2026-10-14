# AGENTS.md - Repository Standards & Agent Guidelines

## 1. Typography & Copy Standards
- **Strictly No Em Dashes:** Never use em dashes (`—` or `&mdash;` or `--`) anywhere in the codebase copy, markdown files, UI text, or comments. Use hyphens (`-`), colons (`:`), or rewrite the sentence with clean punctuation.
- **Big & Bold Fonts:** Default to bold, prominent, highly legible typography. On mobile devices, ensure font sizes never feel tiny or washed out. Use high contrast and robust line-heights (Poppins preferred for headings and interface copy).
- **No AI Slop / Generic Copy:** Eliminate robotic AI throat-clearing clichés (e.g., "In today's fast-paced digital landscape", "delve into", "pivotal role", "it is crucial to remember", "ruthlessly", "high-friction hook"). Write with grounded, human, direct authority.
- **Label Demonstration Scenarios:** Any fictional client or sample scenario (e.g., Vanguard & Sterling, Glowbotanica, Apex HVAC) must be explicitly marked with `[Sample]`.

## 2. UI / UX & Design Rules
- **Buttons Must Look Like Buttons:** Never render interactive filter buttons or tabs as raw, naked text. Every button must have:
  - Clear background (solid or subtle tint)
  - Defined border and rounded corners (`rounded-lg` or `rounded-xl`)
  - Generous padding for comfortable finger-tap targets (`px-4 py-2.5` to `px-6 py-3.5`)
  - Tactile states: distinct active, hover, and pressed states with shadow
  - Mobile containers must allow wrapping or horizontal scrolling with proper gaps, never breaking into cramped, unstyled vertical text lists.
- **Color Differentiation for Categories & Headings:** Use purposeful color coding (brand teal, emerald, amber, purple) to separate categories, section tags, and key headings. Avoid dull monochrome layouts.
- **No Generic AI Icons:** Do not use generic, overused AI icon packs (e.g. generic spark, robot, or generic Lucide/Feather icons scattered everywhere). If an icon or visual cue is strictly required, use rare, customized, minimal SVGs or clean typographic glyphs.
- **Live Web-Formatted Copy:** Never display raw unformatted markdown (`#`, `*`, `|`) inside reader views or web displays. Always render clean semantic HTML with styled headings, real tables, blockquotes, and lists.

## 3. Tech Stack & Build Integrity
- **Framework:** Next.js (App Router), TypeScript, Tailwind CSS.
- **Package Manager:** `pnpm` (lockfile must remain in sync; `vercel.json` configured with `--no-frozen-lockfile` to prevent Vercel deployment blocks).
- **TypeScript:** Strict type safety, run `npx tsc --noEmit` to verify zero errors before committing.


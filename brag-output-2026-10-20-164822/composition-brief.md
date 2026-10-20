# Hyperframes Composition Brief: J/Dev Portfolio

## Objective
Create a concise, polished portfolio launch video that shows the portfolio's real positioning and a real project preview.

## Output
- Composition directory: `brag-output-2026-10-20-164822/composition/`
- Rendered video: `brag-output-2026-10-20-164822/brag.mp4`
- Format: landscape - 1920x1080
- Duration: 18 seconds

## Source Material
- Project root: repository root
- Primary files read: `app/page.tsx`, `components/HeroSection.tsx`, `components/work/WorkSection.tsx`, `lib/workData.ts`, `app/globals.css`, `app/layout.tsx`
- Product name: J/Dev portfolio
- Tagline / strongest claim: "Designer. Developer. End to end."
- Key UI or visual moment to recreate: the hero headline, the `<J/Dev>` mark, and the Secquiz portfolio preview
- Copy that must appear verbatim:
  - "Designer. Developer. End to end."
  - "See My Work"

## Creative Direction
- Tone preset: polished
- Creative direction: a concise, confident portfolio film
- Interpretation: measured pacing, clear typography, restrained motion, and no inflated claims.
- Angle: Let the portfolio's own headline make the case, then show a real work sample before returning to the end-to-end promise.
- Hook: The real headline assembles word by word.
- Outro / punchline: The `<J/Dev>` mark with "End to end." and "See My Work."
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Personal names or customer details

## Visual Identity
- Background: `#0a0a0a`
- Text: `#ffffff`
- Accent: `#0d9488`
- Display font: Poppins, matching the portfolio's global typography
- Body font: Poppins, matching the portfolio's global typography
- Visual references from the project: the portfolio hero headline, dark work section, and the real Secquiz project preview at `public/secquiz.png`

## Storyboard
Use the storyboard in `brag-plan.md` as the creative contract.

Scene summary:
1. The promise - 3.5s - Reveal the real "Designer. Developer. End to end." headline.
2. The range - 4.5s - Show design, copy, and engineering as the connected portfolio disciplines.
3. Real work - 5.5s - Feature a real Secquiz portfolio preview.
4. End to end - 4.5s - Close on the actual `<J/Dev>` mark and "See My Work" CTA.

## Audio
- Audio role: intentional quiet with a few restrained accents
- Audio arc: sparse, warm impacts on important reveals, then a quiet ending
- Music: none. The bundled track's exact reuse terms could not be verified, so it is excluded from this public-facing video.
- Music treatment: none
- Music cue guidance: not applicable
- Audio-reactive treatment: none
- Audio-coupled moments:
  - Headline reveal - soft accent when "Developer." locks into place
  - Project card - quiet impact as the Secquiz preview settles
  - Final mark - warm accent on the final lockup
- SFX selection guidance: use only sparse, low-risk CC0 sounds that match visible motion.
- SFX analysis guidance: follow the installed Brag `assets/sfx/sfx-analysis.md`; prefer low high-frequency-risk accents.
- Exact SFX choice: choose after the animation exists; copy selected files into `composition/assets/`.
- Audio files: keep only the selected CC0 effects in `composition/assets/`.

## Hyperframes Instructions
Use the required Hyperframes skills and native composition conventions. Keep all assets local, make motion deterministic and seek-safe, keep the complete text readable, and run `npx hyperframes check` before rendering. Do not generate voiceover or publish remotely.

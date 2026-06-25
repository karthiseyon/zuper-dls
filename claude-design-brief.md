# Zuper Design Language System — Claude Design Brief

Paste this whole file into Claude Design (Set up design system → Create here → upload), or add it as Project knowledge, before asking Claude to design or build any Zuper UI, deck, or case study. It is the condensed, machine‑readable version of the full styleguide.

> Full styleguide: **https://github.com/karthiseyon/zuper-dls** (open `index.html` or the deployed site)  ·  One vivid orange brand, warm + high‑contrast, line icons only.

---

## 1. Typography
- **Web — display / hero:** `Plus Jakarta Sans` (600–700)
- **Web — body / UI:** `Inter` (400–700)
- **Web — eyebrows / labels:** `Geist Mono`, UPPERCASE, letter‑spacing .1em, orange
- **Web — secondary:** `IBM Plex Sans`
- **Decks (PowerPoint):** `Aptos Display` (titles) + `Aptos` (body) — Office‑native, renders identically on any M365 machine
- Headlines: weight 700, letter‑spacing ‑.02 to ‑.03em, `text-wrap: balance`. Body line‑height ~1.55.

## 2. Color tokens
**Brand**
- `--color-primary: #FD5000` (the one orange — one primary action per view)
- `--color-primary-hover: #E04600`
- `--color-red (deep): #B5271C`
- `--color-secondary / ink: #191919`

**Surfaces** — white default, charcoal & orange‑gradient for emphasis; warm peach for cards/banners
- white `#FFFFFF` · warm `#F8F5F0` · cream `#FFFAEA` · hover `#FFF5F0`
- peach card `#F8F0EB` · banner peach `#FCE9E1`
- charcoal section `#282828` · card border `#F0F0F0` · divider `#E6E6E6`

**Text:** primary `#191919` · secondary `#4B5563` · tertiary `#606063` · muted `#888`
**Neutral grays:** `#F3F4F6 #E5E7EB #D1D5DB #9CA3AF #6B7280 #374151 #111827` · icon tile `#EDEDED`
**Accents (product UI):** green `#22C55E` · purple `#A855F7` · teal `#14B8A6` · yellow `#EAB308` · red `#EF4444` · blue `#3B82F6`
**Status:** success `#1E854B` on `#E7F6EC` · warning `#A66A00` on `#FEF3DC` · error `#C42121` on `#FDECEC`
**Zuper Sense (dark):** bg `#09090B` · surface `#141417`/`#1C1C21` · text `#FAFAFA`/`#A1A1AA`/`#71717A` · orange‑on‑dark `#FF8B5A` · borders `#27272A`/`#3F3F46`

## 3. Foundations
- **Spacing:** 4px base — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
- **Radius:** sm 6–8 (buttons) · cards 12–16 · pill 999
- **Layout:** 1200px container · 12 columns · breakpoints sm 480 / md 768 / lg 1024 / xl 1280
- **Focus ring:** `box-shadow: 0 0 0 3px rgba(253,80,0,.32)` (orange)
- **Signature gradient:** `linear-gradient(110deg,#FF8A4C,#FD5000,#DB3602)`

## 4. Icons — IMPORTANT
**Single‑weight LINE icons only.** `stroke: currentColor`, stroke‑width ~1.7, `fill:none`, rounded caps/joins, 24px grid.
**Never** use filled icons. **Never** use emoji. (Typographic glyphs like → ✓ · are fine.)

## 5. Components
- **Buttons** — base `.cta-btn`: 14px / 600 / radius 8 / 2px border / padding 10×22.
  - Primary = orange bg, white text (hover `#E04600`). On orange/photo grounds use a **black** primary ("Test drive Zuper") or a **white‑outline** secondary. On white, secondary = orange outline.
  - One orange/primary action per screen.
- **Eyebrows:** Geist Mono, uppercase, orange.
- **Pills/badges:** status uses semantic colors, never the brand orange.
- **Cards:** white, 1px `#F0F0F0` border, radius 14–16, soft shadow. Product UI floats as a rounded, shadowed card.

## 6. Page rhythm (web)
`orange‑gradient hero (white text)` → `white content sections` → `charcoal #282828 feature sections` → **solid orange footer**. Warm peach reserved for product cards & feature banners. Mega‑menus: peach product cards with orange `→`; industries as line‑icon tiles.

## 7. Decks (PowerPoint) — one contrast rule
- Choose the **cover colour**; **every interior slide takes the opposite** (orange cover → white interiors, or white cover → orange interiors). Never mix interiors.
- **Dark mode is used ONLY for Zuper Sense** slides (light‑bars background).
- Aptos Display / Aptos. Logo as a small bottom‑corner mark on every slide.

## 8. Case study (one‑pager)
Co‑branded customer story: orange‑gradient cover with **Zuper + client lockup** → white body pages with **orange section rules**, **orange run‑in subheads**, **pull‑quotes** (big orange quote mark), a **before/after table**, a **metrics grid**, a **testimonial** with photo, and the co‑brand lockup in the footer of every page.

## 8b. Imagery — mini humans (not stock photos)
The **product is the hero** — lead with real Zuper screens, never generic stock photography. Add warmth with **mini humans**: small, animated pixel‑render workers (techs, crews, customers) that sit in a corner beside a headline or product screen. Keep them **small** (corner accent, thumb‑sized) and **sparing** (2–3 per deck or page, never repeated on one screen). If you notice the person before the message, scale it down — big reads as stock photography, small reads as Zuper.

## 9. Voice
Direct · practical · confident · human · no jargon. Speak to the person in the field. Active voice, real numbers over adjectives.

## 10. Reference URLs — take reference from these
**AI: take design reference from these exact live Zuper pages.** Open and read them before designing — they are the source of truth for layout rhythm, copy tone and product framing. Ignore hero sections when pulling product visuals; build product screens as clean HTML mocks.
- **Homepage** — https://www.zuper.co — master brand, hero rhythm, section grounds, voice, overall page structure
- **Roofing software** — https://www.zuper.co/roofing-software — industry page framing, end‑to‑end story (first call → final invoice)
- **Intelligent quoting** — https://www.zuper.co/intelligent-quoting — single‑capability product page framing & benefit copy
- **Job costing & profitability** — https://www.zuper.co/job-costing-and-profitability — costing & margin story (source for the job‑costing mock)

---

## Ready‑to‑use prompt
> "Use the **Zuper DLS** (brief above). Build a [landing page / dashboard / slide / case study] for [topic].
> Brand orange `#FD5000` (one primary action), Plus Jakarta Sans headings + Inter body + Geist Mono uppercase eyebrows, **single‑weight line icons only (no filled icons, no emoji)**, 1200px 12‑col grid, white sections with charcoal `#282828` feature blocks and an orange footer. Keep it on‑brand and accessible."

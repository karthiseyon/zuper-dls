# Zuper — Design Language System

A Claude Design system for **Zuper**, the AI operating system for field service management (FSM). Use it to generate on-brand interfaces, marketing pages, product mocks, slide decks, and case studies for Zuper.

---

## 1. What Zuper is

Zuper is a field-service management platform — software that runs service businesses from the **first call to the final invoice**: scheduling & dispatch, work orders, mobile crews, quoting/estimates, job costing & profitability, invoicing, and customer communication. It serves trades and field industries — **roofing, HVAC, plumbing, electrical, solar, pest control, security/installations**, and more. The current positioning leads with **AI** ("Zuper Sense" — an AI layer/command center that automates dispatch, summarizes jobs, and surfaces insights).

**Core message:** built for the person in the field, not the back office. Lead with the product (real Zuper screens); add warmth with small "mini-human" worker illustrations — never generic stock photography.

### Products / surfaces represented
- **Marketing website** (zuper.co) — homepage, industry pages (e.g. roofing), single-capability product pages (intelligent quoting, job costing & profitability).
- **Product UI** — the FSM web app (schedule/dispatch board, job detail, quoting, job costing dashboards) shown as clean, floating rounded cards.
- **Zuper Sense** — the AI command center, shown in a **dark** theme (the only place dark mode is used).
- **Decks** (PowerPoint) and **co-branded case studies** (one-pagers).

---

## 2. Sources used to build this system

This system was derived from materials the user provided. Explore them to build richer, more accurate Zuper designs:

- **GitHub — `karthiseyon/zuper-dls`** (Zuper Design Language System styleguide): https://github.com/karthiseyon/zuper-dls — a single self-contained `index.html` styleguide with embedded fonts, the mini-human GIF set, deck layouts, website DLS atoms/molecules, and a case-study template. Live: https://zuper-dls.vercel.app
  - `claude-design-brief.md` in that repo is the condensed, machine-readable spec and was the primary source for the tokens here.
- **Live Zuper pages** (source of truth for layout rhythm, copy tone, product framing — open these before designing):
  - Homepage — https://www.zuper.co
  - Roofing software — https://www.zuper.co/roofing-software
  - Intelligent quoting — https://www.zuper.co/intelligent-quoting
  - Job costing & profitability — https://www.zuper.co/job-costing-and-profitability

> **Reader:** if you have access, open the repo's `index.html` and the live pages — they contain richer assets (official logo files, the mini-human GIFs, full deck/case-study layouts) than could be re-created here. See **Caveats** at the end of this file.

---

## 3. Content fundamentals (voice & copy)

Zuper's voice is **direct, practical, confident, and human** — it speaks to the person in the field, never the boardroom.

- **Person & address:** Talk to "**you**" (the contractor / tech / owner). "We" is Zuper. Imperative, active voice — "Schedule the right tech," "Invoice on the spot," "Test drive Zuper."
- **Tone:** Plain-spoken and outcome-led. No corporate jargon, no buzzword stacking. Confidence without hype.
- **Numbers over adjectives:** Prefer real figures ("cut drive time 28%", "win 1 in 3 quotes") to vague claims ("dramatically faster"). Metrics carry the proof.
- **Casing:** Sentence case for headlines and buttons ("Book a demo", not "Book A Demo"). Eyebrows are the exception — **UPPERCASE** Geist Mono labels in orange.
- **Headlines:** Short, benefit-first, often a verb phrase. End-to-end framing is a recurring motif: "From first call to final invoice."
- **Industry-specific:** On industry pages, use the trade's own language (roofers, crews, job sites, tear-offs) rather than generic "service businesses."
- **Emoji:** **Never.** Not in product, marketing, or decks. (Typographic glyphs like → ✓ · are fine as quiet accents.)
- **CTAs:** One primary action per view. Common verbs: "Book a demo," "Get started," "Test drive Zuper," "See pricing," "Talk to sales."

**Examples of the vibe:**
> "Run service from first call to invoice."
> "Built for the field, not the back office."
> "Quotes that win, on the spot."

---

## 4. Visual foundations

**The brand is one vivid orange against warm, high-contrast neutrals.** Restraint is the rule: orange is precious — one primary action per view.

- **Color:** Brand orange `#FD5000` is the single hero color. Ink `#191919` for text. Warm neutrals (`#F8F5F0`, peach `#F8F0EB`, banner `#FCE9E1`) add warmth; charcoal `#282828` anchors feature sections; **Zuper Sense dark `#09090B`** is reserved for the AI command center only. Status colors (green/amber/red) are semantic and **never** borrow the brand orange. See `tokens/colors.css`.
- **The signature gradient** `linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)` — **darkest at the top-left, lightest at the bottom-right** — appears on hero grounds, deck covers, and the solid-orange footer.
- **Type:** Display & headings in **Plus Jakarta Sans** (700, letter-spacing −0.02 to −0.03em, `text-wrap: balance`). Body/UI in **Inter** (400–600, line-height ~1.55). Eyebrows in **Geist Mono**, uppercase, +0.1em, orange. Secondary **IBM Plex Sans**. Decks use **Aptos** (Office-native) — substituted with Plus Jakarta Sans for HTML here.
- **Spacing & layout:** 4px base scale (4/8/12/16/24/32/48/64/96). 1200px container, 12 columns, breakpoints 480/768/1024/1280. Generous section rhythm (~96px vertical).
- **Backgrounds:** Mostly clean white and warm off-white. **Imagery = real product screens** (the product is the hero) plus small mini-human illustrations as corner accents — **no stock photography**, no abstract decorative blobs, no bluish-purple gradients. Charcoal feature blocks and the orange gradient provide contrast beats.
- **Page rhythm (web):** orange-gradient hero (white text) → white content sections → charcoal `#282828` feature sections → **solid orange footer**. Peach reserved for product cards & feature banners. Mega-menus: peach product cards with an orange `→`, industries as line-icon tiles.
- **Cards:** White, 1px `#F0F0F0` border, radius **14–16**, soft warm shadow. Product UI floats as a rounded, shadowed card on a warm ground.
- **Corner radii:** buttons/inputs 8, cards 14–16, pills 999.
- **Borders & dividers:** hairline `#F0F0F0` (cards) / `#E6E6E6` (dividers); stronger `#D1D5DB` for inputs.
- **Shadows:** soft and warm (tinted toward ink, low opacity) — `--shadow-card` for resting cards, `--shadow-float` on hover, an orange-tinted glow for emphasis. No hard/black drop shadows.
- **Motion:** restrained and quick — fades and short rises (120–320ms), standard ease `cubic-bezier(.4,0,.2,1)` and an `ease-out` for entrances. No bounces, no infinite decorative loops.
- **Hover states:** primary button darkens to `#E04600`; secondary fills with a faint orange wash `#FFF5F0`; cards rise 3px and deepen their shadow. **Press:** quick 1px translate-down / darker orange `#DB3602`.
- **Focus:** orange ring `box-shadow: 0 0 0 3px rgba(253,80,0,.32)` on every focusable control.
- **Transparency & blur:** used sparingly — mega-menu / sticky-header backdrops only. Not a decorative motif.
- **Imagery color vibe:** warm, bright, true-to-life product screenshots; mini-humans are clean pixel-render illustrations, not photographic.

---

## 5. Iconography

**Use a single-weight outline icon set.** This is a hard rule.

- Style: clean outline glyphs on a **256px grid**, coloured with `currentColor` so they inherit the surrounding text colour (ink on light, white on dark, orange only as a deliberate accent).
- **One weight, one library** everywhere — UI, slides, ads, email. **Never** mix weights or fills, a second icon set, emoji, or clip-art.
- Use glyphs **as-drawn** — don't re-stroke, add fills/tints, or shadows. Render at 16–32px on whole pixels.
- The styleguide ships **~150 named outline glyphs** (home, search, check, x, plus, arrow, chevrons, settings, edit, trash, bell, calendar, chart, mail, chat, phone, users, invoice, dollar, briefcase, truck, wrench, toolbox, hammer, hard-hat, gauge, target, map, cpu, robot, sparkle, zap, shield …). See the **Iconography** page in the styleguide for the full gallery, names, and size ladder. The HTML components here render matching single-weight outline SVGs (`stroke: currentColor`, rounded caps/joins, `fill: none`).
- Industries are drawn as **outline-icon tiles** (e.g. a roof, a wrench, a bolt) on a neutral `#EDEDED` tile.
- Typographic glyphs (`→ ✓ ·`) are used as quiet inline accents and are fine.

---

## 6. Imagery — mini-humans

The **product is the hero** — lead with real Zuper screens. Add warmth with **mini-humans**: small, animated pixel-render workers (techs, crews, customers) tucked into a corner beside a headline or product screen. Keep them **small** (thumb-sized corner accents) and **sparing** (2–3 per page/deck, never repeated on one screen). If you notice the person before the message, scale it down. *(The animated GIF set lives in the source repo — see Caveats; it could not be embedded here.)*

---

## 6a. Product screens in creatives

The product is the hero. Whenever a creative (deck, social post, ad, web hero) calls for a product screen, **use a recreated HTML screen** from `components/product/` rather than a flat image — it stays crisp and recolors at any ratio. Mount via `window.ZuperDesignSystem_4b4e77.DispatchBoard` (or `QuoteEstimate` / `JobCosting` / `MobileJob`), float it on a warm ground, and size it with `style`. These are cosmetic recreations, not live data. The pitch-deck Product slide and the website hero already use them.



**Root**
- `styles.css` — the single entry point consumers link (an `@import` manifest only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front matter for use in Claude Code.

**`tokens/`** — CSS custom properties (all `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/logos/`** — the official Zuper logo files (provided by the brand):
- `zuper-horizontal.png` / `-white` / `-inverted` / `-gray` — primary horizontal lockup (mark + ZUPER wordmark). Use `-white` on dark and orange grounds.
- `zuper-logomark.png` / `-white` / `-inverted` + `zuper-logomark.svg` — the standalone 4-parallelogram mark.
- `zuper-vertical.png` / `-white` — stacked lockup.

**`assets/shows/`** — Raise the Roof show-cover art:
- `raise-the-roof-logo.svg` — the tilted white "RAISE THE ROOF" sticker badge (fills baked as presentation attributes so it rasterizes/exports correctly).
- `speaker-b.png` / `speaker-c.png` — sample speaker headshots; drop in real per-episode photos here.

**`foundations/`** — specimen cards (Design System tab): Colors (brand, surfaces, text, gray, accents, status, Sense dark), Type (display, body, eyebrow, scale), Spacing (scale, radius, shadows), Brand (gradient, interaction, logo, logomark).

**`components/`** — reusable React primitives (namespace `window.ZuperDesignSystem_4b4e77`)
- `brand/` — `Logo` (recolorable inline-SVG logomark)
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Select`, `Checkbox`, `Switch`
- `data-display/` — `Card`, `Badge`, `Tag`, `Avatar`, `Eyebrow`
- `navigation/` — `Tabs`
- `product/` — recreated product screens: `DispatchBoard`, `QuoteEstimate`, `JobCosting`, `MobileJob`

**`ui_kits/`** — full-screen product recreations
- `website/` — Zuper marketing site (hero, product grid, industries, footer)
- `sense/` — Zuper Sense AI command center (dark dispatch dashboard)

**`templates/`** — copyable starting artifacts (Templates picker)
- `landing-page/` — marketing landing page (composes DS components)
- `case-study/` — co-branded customer one-pager, A4 multi-page
- `pitch-deck-white/` — 16:9 deck, **white cover → orange interiors (Aptos) — PRIMARY/default scheme**
- `pitch-deck/` — 16:9 deck, orange cover → white interiors (Aptos) — secondary scheme
- `social-creatives/` — 15 social formats (IG square / story, landscape, quote, stat, Sense)
- `email/` — branded 600px email announcement
- `ad-banners/` — display-ad set at standard IAB sizes
- `raise-the-roof/` · `raise-the-roof-1/` · `-2/` · `-4/` — Raise the Roof Facebook Live show covers (1280×720), one per speaker count (1 / 2 / 3 / 4); shared builder in `raise-the-roof/rtr.js`

**`slides/`** — 16:9 deck layout specimens (title, agenda, metrics, quote, product, section break, Zuper Glass, Sense dark). Section break, Zuper Glass and the Sense fluted slide are full-bleed image grounds that sit outside the white/orange contrast rule — drop them into any deck as-is.

---

## 7. Raise the Roof — Facebook Live show covers

The cover for the **Raise the Roof** roofing podcast — a 1280×720 FB Live creative on the signature orange gradient (dark top-left → light bottom-right). Fixed chrome: the tilted white **RAISE THE ROOF** sticker badge top-left, the white **Zuper** logo, an orange-outline `FACEBOOK LIVE` pill, a bold white headline, and a date/time row. A full-bleed thin-line grid frames the layout with small filled 4-point **sparkle** marks at the intersections. The right panel holds the speakers — photo cells with **name / role / company in white** (text only, no speaker logos).

- **One layout, four speaker counts** — separate templates `raise-the-roof-1/`, `-2/`, `raise-the-roof/` (3), `-4/`. 1 = full-bleed photo with overlay, 2/3 = stacked rows (photo + text), 4 = 2×2 grid with overlays. The chrome stays identical across all four.
- **Shared builder** — all four are thin DC wrappers over `templates/raise-the-roof/rtr.js`, which returns the whole 1280×720 creative for a given speaker count. Edit the builder once and every variant updates.
- **Sticker is inlined SVG** (not `<img>`), so the white sticker renders correctly in the live preview, html-to-image capture, and PPTX/PNG export. Source art: `assets/shows/raise-the-roof-logo.svg` (fills baked as presentation attributes, not a `<style>` block).
- **Per-episode edits** via Tweaks: the date, time, headline, and each speaker's name / role / company. Keep the chrome fixed; swap only those. Speaker photos live in `assets/shows/`.
- **Not part of the brand chrome:** any partner/event lockup (e.g. a conference logo) is a one-off per collaboration and is intentionally **not** baked into the template — add it manually only when a specific episode calls for it.

---

## 8. Caveats

- **Fonts**: the web/UI fonts (Plus Jakarta Sans, Inter, IBM Plex Sans, Geist Mono) are CDN-linked from Google Fonts. **Aptos / Aptos Display** (the deck font) is now **self-hosted** from `assets/fonts/` (TTFs — Microsoft 365's Aptos, via the `ironveil/ttf-aptos` mirror) with `@font-face` using `local()` first, so it renders natively in PowerPoint and on Office machines and from the bundled TTF everywhere else.
- **Mini-humans**: the brand's 8-worker pixel-render GIF set (carrying gear, on the tools, reaching up, on the job, on the ladder, ready to work, waving, crew) lives in `assets/mini-humans/` and is placed as small, sparing corner accents across the site, decks and case study.
- **Zuper agents**: the brand's caped 3D superhero mascots — one per AI agent — live in `assets/agents/` (`sales-coach`, `front-office`, `field-technician`, `business-analyst`, `review-analyser`, `weather`). Transparent PNGs; use them on warm or dark grounds as the hero of agent-specific creatives. See the "Zuper agents" card in the Brand group.
- **Icons**: the styleguide ships Zuper's own single-weight outline icon set (~150 named glyphs on a 256px grid, `currentColor`). The HTML components here render matching inline outline SVGs (`stroke: currentColor`, rounded caps/joins, `fill: none`) as a faithful stand-in — swap to the official named glyphs when wiring production UI.

See the bold **ask** in chat for what to send to make this perfect.

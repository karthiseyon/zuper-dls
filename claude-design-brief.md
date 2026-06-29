# Zuper Design Language System — Claude Design Brief

Paste this whole file into Claude Design (Set up design system → Create here → upload), or add it as Project knowledge, before asking Claude to design or build any Zuper UI, deck, or case study. It is the condensed, machine‑readable version of the full styleguide.

> Full styleguide: **https://github.com/karthiseyon/zuper-dls** (open `index.html` or the deployed site)  ·  One vivid orange brand, warm + high‑contrast, single‑weight outline icons.

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
- **Signature gradient:** dark top-left → light bottom-right — `linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)` (deep near-black‑red corner easing into bright orange). Use this diagonal flow wherever the orange gradient appears.

## 4. Icons — IMPORTANT
**Use a single‑weight outline icon set.** Clean outline glyphs on a 256px grid, coloured with `currentColor` so they inherit the surrounding text colour (ink on light, white on dark, orange only as a deliberate accent).
- **One weight, one library:** the same outline set everywhere — UI, slides, ads, email. **Never** mix weights or fills, a second icon set, emoji or clip‑art. (Typographic glyphs like → ✓ · are still fine.)
- Use glyphs **as‑drawn** — don't re‑stroke, add fills/tints or shadows. Render at 16–32px on whole pixels.
The styleguide ships ~150 named glyphs (home, search, check, x, plus, arrow, chevrons, copy, download, upload, link, refresh, filter, list, grid, settings, sliders, edit, trash, eye, lock, bell, info, warning, help, star, heart, tag, pin, clock, calendar, play/pause, doc, folder, clipboard, image, camera, chart/chart‑line/chart‑pie, database, cloud, mail, chat, send, phone, megaphone, share, users, user, card, invoice, receipt, dollar, briefcase, building, truck, wrench, toolbox, hammer, screwdriver, hard‑hat, gauge, target, package, map, cpu, robot, sparkle, zap, monitor, shield, github, git‑branch, code, sun, droplet, leaf, qr, barcode, printer, video, mic, headset …). See the **Iconography** page in the styleguide for the full gallery, names and size ladder.

## 4b. Logo usage
- **Variants:** Logomark / Horizontal / Vertical, each in Full‑colour / Gray / White / Inverted (SVG + PNG). Full‑colour on light grounds; **white** on charcoal, dark UI or the orange gradient. Never put the full‑colour (dark) logo on a dark or busy ground.
- **Clear space:** keep padding on all sides ≥ **x**, where x = the height of the Zuper mark — no text, edges or other logos inside that zone.
- **Minimum size:** horizontal lockup ≥ **100px** (web) / **10mm** (print); logomark ≥ **24px**. Below that, use the logomark alone.
- **Misuse — never:** stretch/distort, rotate, recolour, add shadows/effects/outlines, reduce opacity/ghost, or place on a low‑contrast or busy background. The mark is fixed artwork — use the supplied files as‑is.

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

## 8c. Social & display ads
On‑brand banners across the standard IAB sizes — **leaderboard 728×90 · billboard 970×250 · medium rectangle 300×250 · large rectangle 336×280 · half page 300×600 · skyscraper 160×600 · mobile 320×100**.
- Two looks: the **orange gradient** ground (`linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)` — dark top-left → light bottom-right, white text) and the **white** card (1px `#E7E0D6` border, an 8–10px orange gradient bar across the top, orange eyebrow).
- Plus Jakarta Sans 800 headline, tight tracking (‑.02 to ‑.04em). One CTA per unit — on orange use a **black** button ("Book a demo"), on white use the **orange** button.
- White logo lockup on orange grounds, dark logo on white. Headlines stay short and benefit‑led ("Win 1 in 3 quotes on‑site", "First call to invoice").
- **Show templates** (e.g. **Raise the Roof** Facebook Live, **1280×720**): the orange gradient ground (dark top‑left → light bottom‑right), the tilted white "RAISE THE ROOF" sticker badge top‑left, the Zuper logo + event lockup, an orange‑outline `FACEBOOK LIVE` pill, a bold white headline, a date/time row, and a speaker panel on the right. A full‑bleed thin‑line grid frames the layout with small filled 4‑point "sparkle" marks at the intersections. Speakers are shown as **text only — name, role, company** (no speaker logos); photos fill each cell. One layout, four variants by speaker count (1 / 2 / 3 / 4) — keep the chrome fixed, swap the date and speaker details per episode.

## 8d. Emailer
A **600px** branded campaign email, built from a kit of reusable **inline‑styled** blocks so it survives every email client. Mix and match:
- **Header lockup** — orange‑gradient band + white horizontal logo
- **Hero** — Geist Mono eyebrow → Plus Jakarta 800 headline → Inter body → orange CTA
- **Product screen** — a clean **HTML product mock** (e.g. an Intelligent Quoting screen with good/better/best tiers + a margin readout), framed in faux browser chrome (peach title bar + traffic‑light dots). **Never** an `<img>` of a background or stock photo — always build the screen in markup so it reads as the real product.
- **Feature row** — title + body, separated by hairline `#E7E0D6` dividers
- **Two‑up cards** — side‑by‑side `#FBF7F2` cards with a mono eyebrow
- **Checklist** — orange `✓` glyphs (typographic, email‑safe), one item per line
- **Stat banner** — peach `#FFE7DC` card, big orange number + supporting line
- **Testimonial** — `#FBF7F2` card, 3px orange left rule, big orange quote mark, attribution
- **CTA banner** — full orange‑gradient band, white headline, **black** button
- **Button** — standalone centered orange CTA
- **Divider** — hairline rule with breathing room
- **Footer** — warm `#FBF2EA`, dark logo, social links, mono legal + unsubscribe / manage‑preferences
- Everything inline‑styled (no `<style>` block, no external CSS), peach/warm neutrals (`#FBF7F2 #FFE7DC #FBF2EA`), hairlines `#E7E0D6`. Use typographic glyphs (`✓ → "`) rather than SVG icons — they render everywhere. Aptos is **not** used here — web stack (Plus Jakarta + Inter + Geist Mono).

## 8e. Email signature
An Outlook/Gmail‑safe signature, table‑based with **inline styles and Arial/Helvetica** fallbacks (no web fonts in mail clients):
- Logomark, then a **2px orange left border** rule, then: **name** (17px bold ink) · **title** (13px bold orange) · **email + phone** (12px gray, `|` separators) · optional orange **"Book a demo →"** button.
- Optional banner image below (`380×95`, rounded). Keep it to logo + rule + text + one optional CTA — never a full marketing layout.

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
> Brand orange `#FD5000` (one primary action), Plus Jakarta Sans headings + Inter body + Geist Mono uppercase eyebrows, **single‑weight outline icons, currentColor, no emoji**, 1200px 12‑col grid, white sections with charcoal `#282828` feature blocks and an orange footer. Keep it on‑brand and accessible."

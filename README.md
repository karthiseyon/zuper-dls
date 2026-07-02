# Zuper — Design Language System

A single, self‑contained HTML styleguide for **Zuper**, built to plug into **Claude Design**.

**Live**
- Site: https://zuper-dls.vercel.app
- Repo: https://github.com/karthiseyon/zuper-dls

Open `index.html` locally, or visit the deployed site. Every push to `main` auto‑deploys via Vercel.

---

## What's inside
A sidebar switches between an overview, eight foundations and six systems:

**Start**
- **Overview** — the cover: one brand, every system, with quick links into each.
- **How to use this** — one button opens the published **Zuper Design System** in **Claude Design**; then pick **Zuper Design System** from the Design system dropdown on any project. *(The repo itself is the source the system was built from.)*

**Foundations**
- **Logo usage** — how to place the mark: clear space (= `x`, the mark height), minimum sizes (24px mark / 100px lockup / 10mm print), the right variant per background, and a misuse grid (don't stretch, rotate, recolour, add effects, fade, or sit it on low contrast).
- **Colour** — the one orange `#FD5000`, the signature gradient, ink, warm + high‑contrast neutrals, and where each colour lives.
- **Typography** — Plus Jakarta Sans (headings) · Inter (body) · Geist Mono (uppercase eyebrows) for web; Aptos Display / Aptos for decks; the scale and rhythm.
- **Iconography** — Zuper's one icon language: a **single‑weight outline set** (clean outline glyphs, 256px grid, `currentColor`). The consistency rules, plus an **Icon Studio** — search the full icon library by name or keyword (trade synonyms like "roof"→house), recolour / resize, then copy or download SVG/PNG. Everything comes out on‑brand.
- **Voice & tone** — the five principles (plain-spoken, approachable, customer-obsessed, celebrate field teams, forward-looking), the banned vocab, and on-tone/off-tone examples.
- **Agent avatars** — the AI agent portrait set (business analyst, field technician, sales coach and friends) and how to use them.
- **Mini humans** — why Zuper uses small animated workers instead of stock photos, and the copy‑ready GIF set.
- **Brand assets** — the official logo library (Logomark / Horizontal / Vertical × Full colour / Gray / White / Inverted, SVG + PNG) plus Zoom backgrounds and LinkedIn covers, each with **Copy** and **Download**, plus a downloadable Word document template and the full design-system `.zip`.

**Systems**
- **Deck** (PowerPoint) — one contrast rule (**primary:** white cover with orange title → orange interiors; **secondary:** orange cover → white interiors; **dark = Zuper Sense only**), foundations, atoms, full‑bleed photo slides that sit outside the contrast rule (section breaker + Zuper Glass), and a library of 16:9 slide layouts. *(On any content‑heavy slide, drop the footer logo mark so it never crowds the layout.)*
- **Website DLS** — foundations → atoms → molecules → page patterns → usage / states / anatomy, plus a **Reference** section linking the live Zuper pages to design from.
- **Case study** — co‑branded one‑pager: cover, body, before/after table, metrics, testimonial. *(Uses a generic sample customer, "Summit Roofing".)*
- **Emailer** — a 600px campaign email built from a 12-block kit (header, hero, **HTML product screen**, feature rows, two-up cards, checklist, stat banner, testimonial, CTA banner, button, divider, footer), all inline-styled to survive every client.
- **Email signature** — a live, editable signature builder (name, title, email, phone, CTA) with copy-ready output and a tight Zuper logo.
- **Social & ads** — on-brand social creatives at real export sizes (1080 / 1920 / 1200), a full set of display ads at standard IAB sizes, and show templates (e.g. **Raise the Roof** FB Live, 1280×720, with 1/2/3/4-speaker layouts); orange-gradient and dark (Sense) looks, one CTA each.

## Repo layout
- `index.html` — the whole styleguide site (markup, CSS and logic in one file).
- `skills/zuper-brand/` — the **Claude Agent Skill**: SKILL.md + reference files (decks, web, email, social, voice, assets). Install the packaged `assets/zuper-brand-skill.zip` in Claude.ai (Settings → Capabilities → Skills) or unzip into `.claude/skills/` for Claude Code.
- `assets/` — fonts, logos, GIFs, backgrounds and the downloadable `zuper-design-system.zip`.
- `slides/` — the 16:9 deck slide layouts (title, agenda, metrics, quote, product, section break, Glass, Sense).
- `templates/` — the Claude Design templates (both pitch decks, case study, emailer, ads, landing page, Raise the Roof).
- `bundle/` — sources that ship only inside the design-system zip (SKILL.md, tokens, components, UI kits).
- `scripts/build-zip.sh` — rebuilds `assets/zuper-design-system.zip` from the repo, so the download never drifts. Run it after editing the brief, slides or templates.

## Brand at a glance
- **Color:** brand orange `#FD5000` (one primary action per view) · ink `#191919` · warm + high‑contrast neutrals · charcoal `#282828` feature sections · Zuper Sense dark `#09090B`.
- **Type:** Plus Jakarta Sans (web headings) · Inter (body) · Geist Mono (uppercase eyebrows) · **Aptos Display / Aptos** (decks).
- **Icons:** a **single‑weight outline set** — one icon language, `currentColor`, never emoji or a second library.
- **Grid:** 1200px container · 12 columns · breakpoints 480 / 768 / 1024 / 1280.

## Use with Claude Design
Open the **How to use this** page in the styleguide for the full walkthrough, or see `claude-design-brief.md` for the condensed spec to paste/upload.

> `index.html` (~470 KB) holds all the markup, CSS and logic; fonts, GIFs and images live in `assets/` and load by relative path. Keep `assets/` next to `index.html`.

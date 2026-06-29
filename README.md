# Zuper — Design Language System

A single, self‑contained HTML styleguide for **Zuper**, built to plug into **Claude Design**.

**Live**
- Site: https://zuper-dls.vercel.app
- Repo: https://github.com/karthiseyon/zuper-dls

Open `index.html` locally, or visit the deployed site. Every push to `main` auto‑deploys via Vercel.

---

## What's inside
A sidebar switches between an overview and twelve systems:

1. **Overview** — the cover: one brand, twelve systems, with quick links into each.
2. **How to use this** — one button opens the published **Zuper Design System** in **Claude Design**; then pick **Zuper Design System** from the Design system dropdown on any project. *(The repo itself is the source the system was built from.)*
3. **Deck** (PowerPoint) — one contrast rule (orange cover → white interiors, or vice‑versa; **dark = Zuper Sense only**), foundations, atoms, and a library of 16:9 slide layouts.
4. **Website DLS** — foundations → atoms → molecules → page patterns → usage / states / anatomy, plus a **Reference** section linking the live Zuper pages to design from.
5. **Case study** — co‑branded one‑pager: cover, body, before/after table, metrics, testimonial. *(Uses a generic sample customer, "Summit Roofing".)*
6. **Mini humans** — why Zuper uses small animated workers instead of stock photos, and the copy‑ready GIF set.
7. **Iconography** — Zuper's one icon language: a **single‑weight outline set** (clean outline glyphs, 256px grid, `currentColor`). The consistency rules, plus an **Icon Studio** — search the full icon library by name or keyword (trade synonyms like "roof"→house), recolour / resize, then copy or download SVG/PNG. Everything comes out on‑brand.
8. **Social & ads** — on-brand social creatives at real export sizes (1080 / 1920 / 1200), a full set of display ads at standard IAB sizes, and show templates (e.g. **Raise the Roof** FB Live, 1280×720, with 1/2/3/4-speaker layouts); orange-gradient and dark (Sense) looks, one CTA each.
9. **Emailer** — a 600px campaign email built from a 12-block kit (header, hero, **HTML product screen**, feature rows, two-up cards, checklist, stat banner, testimonial, CTA banner, button, divider, footer), all inline-styled to survive every client.
10. **Email signature** — a live, editable signature builder (name, title, email, phone, CTA) with copy-ready output and a tight Zuper logo.
11. **Logo usage** — how to place the mark: clear space (= `x`, the mark height), minimum sizes (24px mark / 100px lockup / 10mm print), the right variant per background, and a misuse grid (don't stretch, rotate, recolour, add effects, fade, or sit it on low contrast).
12. **Brand assets** — the official logo library (Logomark / Horizontal / Vertical × Full colour / Gray / White / Inverted, SVG + PNG) plus Zoom backgrounds and LinkedIn covers, each with **Copy** and **Download**, plus a downloadable Word document template and the full design-system `.zip`.

## Brand at a glance
- **Color:** brand orange `#FD5000` (one primary action per view) · ink `#191919` · warm + high‑contrast neutrals · charcoal `#282828` feature sections · Zuper Sense dark `#09090B`.
- **Type:** Plus Jakarta Sans (web headings) · Inter (body) · Geist Mono (uppercase eyebrows) · **Aptos Display / Aptos** (decks).
- **Icons:** a **single‑weight outline set** — one icon language, `currentColor`, never emoji or a second library.
- **Grid:** 1200px container · 12 columns · breakpoints 480 / 768 / 1024 / 1280.

## Use with Claude Design
Open the **How to use this** page in the styleguide for the full walkthrough, or see `claude-design-brief.md` for the condensed spec to paste/upload.

> `index.html` (~250 KB) holds all the markup, CSS and logic; fonts, GIFs and images live in `assets/` and load by relative path. Keep `assets/` next to `index.html`.

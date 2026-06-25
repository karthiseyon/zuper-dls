# Zuper — Design Language System

A single, self‑contained HTML styleguide for **Zuper**, built to plug into **Claude Design**.

**Live**
- Site: https://zuper-dls.vercel.app
- Repo: https://github.com/karthiseyon/zuper-dls

Open `index.html` locally, or visit the deployed site. Every push to `main` auto‑deploys via Vercel.

---

## What's inside
A sidebar switches between an overview and five systems:

1. **Overview** — the cover: one brand, five systems, with quick links into each.
2. **How to use this** — connect this GitHub repo to **Claude Design** once, then pick **Zuper** from the Design system dropdown on any project.
3. **Deck** (PowerPoint) — one contrast rule (orange cover → white interiors, or vice‑versa; **dark = Zuper Sense only**), foundations, atoms, and a library of 16:9 slide layouts.
4. **Website DLS** — foundations → atoms → molecules → page patterns → usage / states / anatomy, plus a **Reference** section linking the live Zuper pages to design from.
5. **Case study** — co‑branded one‑pager: cover, body, before/after table, metrics, testimonial. *(Uses a generic sample customer, "Summit Roofing".)*
6. **Mini humans** — why Zuper uses small animated workers instead of stock photos, and the copy‑ready GIF set.
7. **Brand assets** — the official logo library (Logomark / Horizontal / Vertical × Full colour / Gray / White / Inverted, SVG + PNG) plus Zoom backgrounds and LinkedIn covers, each with **Copy** and **Download**.

## Brand at a glance
- **Color:** brand orange `#FD5000` (one primary action per view) · ink `#191919` · warm + high‑contrast neutrals · charcoal `#282828` feature sections · Zuper Sense dark `#09090B`.
- **Type:** Plus Jakarta Sans (web headings) · Inter (body) · Geist Mono (uppercase eyebrows) · **Aptos Display / Aptos** (decks).
- **Icons:** single‑weight **line icons only** — never filled, never emoji.
- **Grid:** 1200px container · 12 columns · breakpoints 480 / 768 / 1024 / 1280.

## Use with Claude Design
Open the **How to use this** page in the styleguide for the full walkthrough, or see `claude-design-brief.md` for the condensed spec to paste/upload.

> `index.html` (~190 KB) holds all the markup, CSS and logic; fonts, GIFs and images live in `assets/` and load by relative path. Keep `assets/` next to `index.html`.

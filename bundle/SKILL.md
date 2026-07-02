---
name: zuper-design
description: Use this skill to generate well-branded interfaces and assets for Zuper (the AI operating system for field service management), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Link `styles.css` for tokens and fonts; reusable React primitives live in `components/` (load the compiled bundle and read them from `window.ZuperDesignSystem_4b4e77`). If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand orange `#FD5000`** — one primary action per view. Ink `#191919`, warm neutrals, charcoal `#282828` feature blocks, orange footer. Zuper Sense uses dark `#09090B` (only place dark mode appears).
- **Type:** Plus Jakarta Sans (display) · Inter (body) · Geist Mono uppercase orange eyebrows · IBM Plex Sans (secondary) · Aptos for PowerPoint decks.
- **Icons:** a single-weight outline icon set (clean outline glyphs on a 256px grid, `currentColor`, ~150 named glyphs in the styleguide). One weight, one library — never mixed weights/fills, a second set, or emoji.
- **Voice:** direct, practical, confident, human. Talk to "you" (the person in the field). Real numbers over adjectives. Sentence case.
- **Imagery:** the product is the hero (real screens). Mini-human worker illustrations as small, sparing corner accents — never stock photography.

## What's here
- `readme.md` — full design guide (voice, visual foundations, iconography, manifest).
- `styles.css` + `tokens/` — the global stylesheet and CSS custom properties.
- `foundations/` — color / type / spacing / brand specimen cards.
- `components/` — Button, IconButton, Input, Select, Checkbox, Switch, Card, Badge, Tag, Avatar, Eyebrow, Tabs.
- `ui_kits/website/` — Zuper marketing site recreation.
- `ui_kits/sense/` — Zuper Sense AI command center (dark).
- `slides/` — 16:9 deck layouts (title, agenda, metrics, quote, product, Sense dark).

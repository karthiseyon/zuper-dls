---
name: zuper-brand
description: Apply Zuper's brand system when creating anything for Zuper (the AI operating system for field service management) - presentations, decks, landing pages, emails, email signatures, social posts, display ads, case studies, product mocks, or UI. Contains the colors, typography, gradient, icon rules, deck contrast schemes, email kits, and voice guidelines that make output on-brand.
---

# Zuper brand skill

Zuper makes field service management software for the skilled trades (roofing, HVAC, plumbing, electrical, solar). Everything created for Zuper follows one brand system. This file holds the rules you need for any task; the `references/` files go deeper per format. Read the reference file for your deliverable before designing it.

| Building a… | Read |
|---|---|
| Deck / presentation | `references/deck-rules.md` |
| Landing page / website / UI mock | `references/web-patterns.md` |
| Email campaign / signature | `references/email.md` |
| Social post / display ad | `references/social-ads.md` |
| Any copy or messaging | `references/voice.md` |
| Logo placement / imagery | `references/brand-assets.md` |

## Colour

- **One orange: `#FD5000`.** One primary action per view. Hover `#E04600`, deep red accent `#B5271C`. Status colours are semantic (success `#1E854B`, warning `#A66A00`, error `#C42121`), never the brand orange.
- **Ink `#191919`** for text on light. Secondary text `#4B5563`, tertiary `#7A7268`.
- **Surfaces:** white default · warm `#F8F5F0` · cream `#FFFAEA` · peach card `#F8F0EB` · banner peach `#FCE9E1` · charcoal feature sections `#282828` · borders `#E6E6E6`/`#F0F0F0`.
- **Signature gradient** (the only orange gradient): `linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)` — dark top-left easing to light. Keep copy over the dark end.
- **Zuper Sense (dark mode) only:** bg `#09090B`, surfaces `#141417`/`#1C1C21`, text `#FAFAFA`/`#A1A1AA`, orange-on-dark `#FF8B5A`. Dark is reserved for Zuper Sense; nothing else goes dark.

## Contrast (measured)

Orange on white is 3.3:1 — large or bold text only (18px+, or 14px+ at 600+). Never body copy. White on the gradient reads 10:1 over the dark corner but 2.5:1 over the light end, so anchor text on the dark ground. Body copy rides the safe pairs: ink on white (17.6:1), white on charcoal (14.7:1), `#FAFAFA` on Sense black (19:1).

## Typography

- **Web, email, ads:** Plus Jakarta Sans 600-700 (headings) · Inter 400-700 (body) · Geist Mono uppercase orange eyebrows (letter-spacing .1em).
- **PowerPoint decks:** Aptos Display (titles) + Aptos (body) — Office-native so slides render identically everywhere.
- Headlines: 700, letter-spacing -.02 to -.03em, sentence case, one claim each. Body line-height ~1.55.

## Layout

4px spacing scale (4/8/12/16/24/32/48/64/96) · radius 6-8 buttons, 12-16 cards, 999 pills · 1200px container, 12 columns · breakpoints 480/768/1024/1280 · focus ring `box-shadow: 0 0 0 3px rgba(253,80,0,.32)`.

## Icons

One single-weight outline set (Phosphor regular), 256px grid, coloured with `currentColor`. Never mix weights or fills, never a second icon library, never emoji as icons. Typographic glyphs (→ ✓ ·) are fine.

## Imagery

The product is the hero: build product screens as clean HTML mocks, never stock photos or image backgrounds. Warmth comes from mini-human worker GIFs used small (thumb-sized corner accents, 2-3 per deck or page). If you notice the person before the message, scale it down.

## Voice (short form)

Plain-spoken, approachable, customer-obsessed, celebrate field teams, forward-looking. Write to "you", lead with the outcome, use real numbers. **No em dashes in output copy.** Banned: seamless, leverage, unlock, empower, streamline, robust, elevate, holistic, synergy, ecosystem, revolutionary, "in today's fast-paced world". Full rules and examples: `references/voice.md`.

## Hosted assets

Logos, banners and GIFs are served from `https://zuper-dls.vercel.app/assets/…` — use these absolute URLs in emails and anything that leaves the page. Full index: `references/brand-assets.md`. The live styleguide is at https://zuper-dls.vercel.app (AI digest at /llms.txt).

# Zuper Design System — project rules

## Keep every surface in sync (do this on ANY brand/DLS change)
The same brand rules live in several places. When a colour, font, rule, template, asset or link changes, update ALL of these, then run `scripts/build-zip.sh` (it rebuilds both zips + `llms-full.txt`) before committing:

1. `index.html` — the styleguide pages themselves (incl. the Overview cards and How-to page).
2. `claude-design-brief.md` — the condensed spec.
3. `CLAUDE.md` — this file's rules below.
4. `skills/zuper-brand/` — SKILL.md + the matching reference file (deck-rules, web-patterns, email, social-ads, voice, brand-assets).
5. `llms.txt` — the hand-written AI index (llms-full.txt is generated).
6. `bundle/` — the Claude Design sources (SKILL.md, readme.md, tokens/, foundations/) if the change touches tokens, components or slides.
7. `README.md` — if structure or counts changed.

Never edit `assets/zuper-design-system.zip`, `assets/zuper-brand-skill.zip` or `llms-full.txt` by hand — they are build outputs of `scripts/build-zip.sh`.

## Deck colour scheme (always apply)
Every Zuper deck uses ONE of two contrast schemes — pick the cover colour, and every interior slide takes the opposite. Never mix interior colours.

- **Primary (default):** WHITE cover/hero slide (orange title text) → all other slides on the ORANGE gradient with white text. Use this unless the user says otherwise. Template: `templates/pitch-deck-white/`.
- **Secondary:** ORANGE cover/hero slide (white title, orange title treatment) → all other slides WHITE. Template: `templates/pitch-deck/`.
- **Zuper Sense → BLACK slides, always.** Whenever a deck talks about Zuper Sense, those slides use the dark/black ground (`#09090B`, light-bars / fluted background, `#FF8B5A` orange-on-dark), no matter which scheme the rest of the deck uses. Dark mode is reserved for Sense.

Aptos Display (titles) + Aptos (body); small Zuper logo in a bottom corner of every slide — **but on ANY content-heavy slide where it would crowd the layout, drop the logo** rather than cram it in. This applies to every slide type (agenda, content, split, data, comparison, two-column, Sense, full-bleed product, etc.) — not just one.

## Special full-bleed slides (sit outside the white/orange contrast rule)
These are image-ground slides — use them as-is regardless of the deck's scheme; they don't count as "interiors". Keep all copy in one corner/column over the scrim so it never overlaps the focal subject:

- **Section break** (`slides/section-break.html`) — full-bleed orange "Outcome Era" houses illustration, white headline, `ZUPER CONFIDENTIAL` tag. Use between major sections of any deck.
- **Zuper Glass** (`slides/glass.html`) — full-bleed AR smart-glasses photo (`assets/backgrounds/zuper-glass-bg.jpg`) with a dark scrim, white headline + badge. Reserved for whenever the deck talks about **Zuper Glass**.
- **Zuper Sense — fluted** (`slides/sense-fluted.html`) — the black Sense slide (see above).

## Copy & voice (all on-brand writing)
Zuper's voice has five principles: plain-spoken, approachable, customer-obsessed, celebrate field teams, forward-looking. Write to "you," lead with the outcome before the feature, use the language the trade actually uses, and prove you know the work with real numbers and real field scenarios.

Avoid the tells that make copy read as AI-generated or salesy:
- **No em dashes.** Use commas, periods, colons or parentheses instead.
- **No banned vocab:** seamless, leverage, unlock, empower, streamline, robust, elevate, holistic, synergy, ecosystem, revolutionary, "in today's fast-paced world."
- No throat-clearing openers, hollow wrap-ups, reflexive triads, or "not just X, Y" parallelism. Headlines make one claim, in sentence case.

References:
- **Signs of AI writing** (the checklist behind these rules): https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- **LLM Website Copywriting Best Practices v3** — the Zuper voice source of truth (five principles, banned lists, litmus test).
- The live **Voice & tone** page in the DLS documents all of this with examples.

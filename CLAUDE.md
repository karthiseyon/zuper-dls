# Zuper Design System — project rules

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

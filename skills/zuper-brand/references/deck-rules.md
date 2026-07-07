# Deck rules (PowerPoint / slides)

Fonts: **Aptos Display** for titles, **Aptos** for body (Office-native, renders identically on any M365 machine). Sentence case, one claim per title.

## The one contrast rule

Pick the cover colour; **every interior slide takes the opposite**. Never mix interiors.

- **Primary (default):** WHITE cover with orange title text → every other slide on the orange gradient with white text. Use this unless told otherwise.
- **Secondary:** ORANGE-gradient cover with white title → every other slide white.

The gradient is always `linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)`, dark top-left to light bottom-right. Keep slide copy over the dark end.

## Zuper Sense = black, always

Any slide about **Zuper Sense** uses the dark ground (`#09090B`, light-bars/fluted background, `#FF8B5A` orange-on-dark), regardless of the deck's scheme. Dark mode is reserved for Sense; no other slide goes dark.

## Special full-bleed slides (outside the contrast rule)

Use as-is in any deck; they don't count as interiors. Keep all copy in one corner or column over the scrim so it never overlaps the focal subject.

- **Section break** — full-bleed orange "Outcome Era" houses illustration, white headline, `ZUPER CONFIDENTIAL` tag. Use between major sections.
- **Zuper Glass** — full-bleed AR smart-glasses photo with a dark scrim. Reserved for slides about Zuper Glass.
- **Zuper Sense fluted** — the black Sense slide above.

## Logo on slides

Small Zuper logomark in a bottom corner of every slide, **but on any content-heavy slide where it would crowd the layout, drop the logo** rather than cram it in. White logo on orange/dark grounds, dark logo on white.

## Layout reference

Live 16:9 HTML layouts to copy from: title, agenda, metrics, quote, product, section-break, glass, sense-fluted at `https://zuper-dls.vercel.app/slides/<name>.html`. Product slides show the product as an HTML mock in a rounded, shadowed card, never a screenshot of a stock image.

## Charts in decks

The emphasis ladder, never a rainbow: focus `#FD5000` (one series per chart), comparison `#191919`, context `#7A7268`, field `#E7E0D6`. Direct-label every series. Sequential = orange tints light→dark (`#FFE7DC → #F2864F → #FD5000 → #D43A14 → #7E1C0B`); polarity = status green `#1E854B` / red `#C42121` with an arrow, never brand orange. White slides: chart straight on the slide, hairline `#E7E0D6` grid. Orange-gradient slides: marks never sit on the gradient — put the chart on a white card. Sense slides: `#FF8B5A` leads, white comparison, `rgba(255,255,255,.14)` grid. Values in Aptos or Geist Mono, labels short, one takeaway per chart, real numbers. Never gradient fills, 3D, shadows or dual y-axes. Unsure which chart form fits the data? https://datavizproject.com/ catalogues them by shape and job.

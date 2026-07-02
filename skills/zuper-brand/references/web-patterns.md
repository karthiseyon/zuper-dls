# Website & UI patterns

## Page rhythm

`orange-gradient hero (white text, copy over the dark end)` → `white content sections` → `charcoal #282828 feature sections` → `solid orange footer`. Warm peach (`#F8F0EB`/`#FCE9E1`) is reserved for product cards and feature banners. Mega-menus: peach product cards with orange `→`; industries as line-icon tiles.

## Components

- **Buttons** (base: 14px / 600 / radius 8 / 2px border / padding 10×22):
  - Primary = orange bg, white text, hover `#E04600`. One primary per screen.
  - On orange or photo grounds: BLACK primary button ("Test drive Zuper") or white-outline secondary.
  - On white: secondary = orange outline.
- **Eyebrows:** Geist Mono, uppercase, orange, letter-spacing .1em, above headlines.
- **Pills/badges:** status colours only (success `#1E854B` on `#E7F6EC`, warning `#A66A00` on `#FEF3DC`, error `#C42121` on `#FDECEC`), never brand orange.
- **Cards:** white, 1px `#F0F0F0` border, radius 14-16, soft shadow. Product UI floats as a rounded, shadowed card.
- **Focus ring:** `box-shadow: 0 0 0 3px rgba(253,80,0,.32)` on every focusable control.

## Type scale (web)

Display/H1 60px · H2 44px · H3 32px · H4 24px (600) · Lead 20px (500) · Body 16px · Small 14px. Headings Plus Jakarta Sans 700, tracking -.02 to -.03em; body Inter, line-height ~1.55.

## Grid

1200px container, 12 columns, breakpoints 480 / 768 / 1024 / 1280. Spacing on the 4px scale.

## Product screens

Always build product UI as a clean HTML mock (e.g. an Intelligent Quoting screen with good/better/best tiers and a margin readout), framed in faux browser chrome (peach title bar, traffic-light dots). Never an `<img>` of a stock photo or blurred screenshot.

## Live reference pages (source of truth for rhythm and tone)

- https://www.zuper.co — master brand, hero rhythm, section grounds
- https://www.zuper.co/roofing-software — industry page framing (first call → final invoice)
- https://www.zuper.co/intelligent-quoting — single-capability product page
- https://www.zuper.co/job-costing-and-profitability — costing and margin story

CTA links point to https://www.zuper.co/demo ("Book a demo").

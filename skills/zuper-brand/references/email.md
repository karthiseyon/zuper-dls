# Email: campaign emailer & signature

## Campaign emailer

A **600px** email built from reusable blocks, **everything inline-styled** (no `<style>` block, no external CSS) so it survives every client. Web font stack (Plus Jakarta Sans + Inter + Geist Mono with system fallbacks); Aptos is never used in email. Use typographic glyphs (✓ → ") instead of SVG icons.

Blocks (mix and match):

- **Header lockup** — orange-gradient band + white horizontal logo
- **Hero** — Geist Mono eyebrow → Plus Jakarta 800 headline → Inter body → orange CTA
- **Product screen** — an HTML product mock in faux browser chrome (peach title bar + traffic-light dots). Never an image of a screen.
- **Feature row** — title + body, hairline `#E7E0D6` dividers
- **Two-up cards** — side-by-side `#FBF7F2` cards with a mono eyebrow
- **Checklist** — orange `✓` glyphs, one item per line
- **Stat banner** — peach `#FFE7DC` card, big orange number + supporting line
- **Testimonial** — `#FBF7F2` card, 3px orange left rule, big orange quote mark, attribution
- **CTA banner** — full orange-gradient band, white headline, **black** button
- **Button** — standalone centered orange CTA linking to https://www.zuper.co/demo
- **Divider** — hairline rule with breathing room
- **Footer** — warm `#FBF2EA`, dark logo, social links, mono legal + unsubscribe/manage-preferences

Palette: peach/warm neutrals `#FBF7F2 #FFE7DC #FBF2EA`, hairlines `#E7E0D6`.

## Email signature

Outlook/Gmail-safe: table-based, inline styles, **Arial/Helvetica** fallbacks (no web fonts in mail clients).

Structure: logomark image → 2px orange left border rule → **name** (17px bold ink) · **title** (13px bold orange) · **email + phone** (12px gray, `|` separators) · optional orange **"Book a demo →"** button linking to https://www.zuper.co/demo. Optional banner image below (380×95, rounded).

Keep it to logo + rule + text + one CTA; never a full marketing layout. Image URLs must be absolute and hosted:

- Logo: `https://zuper-dls.vercel.app/assets/email/zuper-vertical-tight.png`
- Banners: `https://zuper-dls.vercel.app/assets/email/zuper-emailer-sense.png`, `…/zuper-emailer-trades.png`

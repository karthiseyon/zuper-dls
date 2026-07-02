Primary call-to-action button — orange by default; use exactly one primary action per view.

```jsx
<Button variant="primary">Book a demo</Button>
<Button variant="secondary">See pricing</Button>
<Button variant="black">Test drive Zuper</Button>      {/* on orange/photo grounds */}
<Button variant="whiteOutline">Watch the tour</Button>  {/* on orange/dark grounds */}
```

Variants: `primary` (orange bg, white text, hover #E04600), `secondary` (orange outline on white), `black`, `whiteOutline`, `ghost`. Sizes `sm | md | lg`. Pass line-icon SVGs via `iconLeft` / `iconRight`. `fullWidth` stretches to container.

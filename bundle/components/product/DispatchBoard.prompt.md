Recreated Zuper product screens — drop the real UI into any creative (deck, social, ad, web) so the product is the hero at the right ratio. Each floats as a rounded, shadowed card; size it with `style`.

```jsx
<DispatchBoard style={{ width: 520 }} />
<QuoteEstimate style={{ width: 560 }} />
<JobCosting style={{ width: 560 }} />
<MobileJob />   {/* fixed 300px phone frame */}
```

Use a warm ground behind them (var(--surface-warm)) and keep one per composition. They're cosmetic recreations, not live data.

import React from 'react';

/**
 * Zuper logomark — the official 4-parallelogram "Z" mark, inlined as SVG so it
 * stays crisp at any size and recolors via `tone`. Geometry from the brand
 * Zuper logomark.svg. For the full horizontal/vertical lockup (mark + ZUPER
 * wordmark), use the PNG/SVG files in assets/logos/ directly.
 */
export function Logo({ tone = 'color', size = 36, style = {} }) {
  const tones = {
    color: ['#FD5000', '#3A3A3C'],   // orange top, charcoal bottom
    ink: ['#191919', '#191919'],
    gray: ['#6B7280', '#6B7280'],
    white: ['#FFFFFF', '#FFFFFF'],
    inverted: ['#FD5000', '#FFFFFF'], // orange mark on dark grounds
  };
  const [top, bottom] = tones[tone] || tones.color;
  return (
    <svg width={size} height={size} viewBox="0 0 500 500" style={style} role="img" aria-label="Zuper">
      <polygon fill={top} points="316.8,180.5 433.5,181.1 371.1,277.2 254,277.2" />
      <polygon fill={top} points="229.9,71 387.5,71.2 317.5,180.5 157.6,181.1" />
      <polygon fill={bottom} points="130.3,222.2 247,222.8 184.6,318.9 67.5,318.9" />
      <polygon fill={bottom} points="184.7,318.9 342.3,319.1 270.3,428.4 112.4,429" />
    </svg>
  );
}

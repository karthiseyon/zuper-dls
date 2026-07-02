import React from 'react';

/** Zuper Eyebrow — uppercase Geist Mono label, orange by default. */
export function Eyebrow({ children, color = 'var(--color-primary)', style = {} }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500,
      textTransform: 'uppercase', letterSpacing: '0.1em', color, ...style,
    }}>
      {children}
    </span>
  );
}

import React from 'react';

/** Zuper Avatar — initials on a warm tint, or an image. */
export function Avatar({ name = '', src, size = 40, style = {} }) {
  const initials = name.split(' ').map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--surface-banner)', color: 'var(--color-primary-press)',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size * 0.4,
      ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> : initials}
    </span>
  );
}

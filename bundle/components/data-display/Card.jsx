import React from 'react';

/**
 * Zuper Card — white surface, 1px border, soft shadow, 14px radius.
 * `peach` uses the warm product-card ground; `dark` for Zuper Sense.
 */
export function Card({ children, variant = 'default', padding = 24, hoverable = false, style = {}, ...rest }) {
  const variants = {
    default: { background: 'var(--surface-white)', border: '1px solid var(--border-card)', color: 'var(--text-primary)' },
    peach: { background: 'var(--surface-peach)', border: '1px solid transparent', color: 'var(--text-primary)' },
    dark: { background: '#141417', border: '1px solid #27272A', color: '#FAFAFA' },
  };
  const v = variants[variant] || variants.default;
  return (
    <div
      style={{
        borderRadius: 'var(--radius-card)',
        padding, boxShadow: 'var(--shadow-card)',
        transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => { if (hoverable) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-float)'; } }}
      onMouseLeave={(e) => { if (hoverable) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; } }}
      {...rest}
    >
      {children}
    </div>
  );
}

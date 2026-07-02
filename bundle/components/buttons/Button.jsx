import React from 'react';

/**
 * Zuper Button — the one primary action per view is orange.
 * Variants: primary (orange), secondary (orange outline on white),
 * black (on orange/photo grounds), whiteOutline (on orange/dark grounds), ghost.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 13, padding: '8px 16px', radius: 8, gap: 6 },
    md: { fontSize: 14, padding: '10px 22px', radius: 8, gap: 8 },
    lg: { fontSize: 16, padding: '14px 28px', radius: 10, gap: 8 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: '2px solid var(--color-primary)' },
    secondary: { background: 'transparent', color: 'var(--color-primary)', border: '2px solid var(--color-primary)' },
    black: { background: 'var(--color-ink)', color: '#fff', border: '2px solid var(--color-ink)' },
    whiteOutline: { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)' },
    ghost: { background: 'transparent', color: 'var(--text-primary)', border: '2px solid transparent' },
  };
  const v = variants[variant] || variants.primary;

  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base)',
    whiteSpace: 'nowrap',
    ...v,
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)', e.currentTarget.style.borderColor = 'var(--color-primary-hover)';
    else if (variant === 'secondary') e.currentTarget.style.background = 'var(--surface-hover)';
    else if (variant === 'black') e.currentTarget.style.background = '#000';
    else if (variant === 'whiteOutline') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
    else e.currentTarget.style.background = 'var(--surface-warm)';
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.borderColor = (v.border || '').split(' ').slice(2).join(' ') || 'transparent';
  };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'none'; };
  const onFocus = (e) => { e.currentTarget.style.boxShadow = 'var(--focus-ring)'; };
  const onBlur = (e) => { e.currentTarget.style.boxShadow = 'none'; };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={(e) => { onLeave(e); onUp(e); }}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

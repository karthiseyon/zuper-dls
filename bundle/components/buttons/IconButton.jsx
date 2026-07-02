import React from 'react';

/**
 * Zuper IconButton — square, outline-icon-only control.
 * Pass a single-weight outline icon (SVG with stroke:currentColor, fill:none) as children.
 */
export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || dims.md;

  const variants = {
    primary: { background: 'var(--color-primary)', color: '#fff', border: '1px solid var(--color-primary)' },
    outline: { background: 'var(--surface-white)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      style={{
        width: d, height: d,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-base) var(--ease-standard)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--surface-warm)'; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = v.background; }}
      onFocus={(e) => { e.currentTarget.style.boxShadow = 'var(--focus-ring)'; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      {...rest}
    >
      {children}
    </button>
  );
}

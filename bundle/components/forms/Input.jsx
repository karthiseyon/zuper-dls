import React from 'react';

/**
 * Zuper text Input — white field, 1px border, orange focus ring.
 * Optional label, hint and error state.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pad = size === 'sm' ? '8px 12px' : '11px 14px';
  const fieldId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const borderColor = error ? 'var(--status-error-fg)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && <span style={{ position: 'absolute', left: 12, color: 'var(--text-muted)', display: 'inline-flex' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          style={{
            width: '100%', boxSizing: 'border-box',
            fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)',
            padding: iconLeft ? '11px 14px 11px 40px' : pad,
            background: 'var(--surface-white)',
            border: `1px solid ${borderColor}`,
            borderRadius: 'var(--radius-sm)',
            outline: 'none',
            boxShadow: focused && !error ? 'var(--focus-ring)' : 'none',
            transition: 'border-color var(--duration-base), box-shadow var(--duration-base)',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      {(hint || error) && <span style={{ fontSize: 12, color: error ? 'var(--status-error-fg)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}

import React from 'react';

/** Zuper Select — native select styled with a line chevron. */
export function Select({ label, options = [], hint, style = {}, id, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          style={{
            width: '100%', boxSizing: 'border-box', appearance: 'none',
            fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)',
            padding: '11px 38px 11px 14px',
            background: 'var(--surface-white)',
            border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-sm)', outline: 'none',
            boxShadow: focused ? 'var(--focus-ring)' : 'none',
            transition: 'border-color var(--duration-base), box-shadow var(--duration-base)',
            cursor: 'pointer',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }}><path d="m6 9 6 6 6-6"/></svg>
      </div>
      {hint && <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}

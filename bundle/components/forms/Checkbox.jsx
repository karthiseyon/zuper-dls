import React from 'react';

/** Zuper Checkbox — orange when checked, line check glyph. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style = {} }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={toggle}
        style={{
          width: 20, height: 20, borderRadius: 6, flexShrink: 0,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: on ? 'var(--color-primary)' : 'var(--surface-white)',
          border: `2px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
          transition: 'background var(--duration-base), border-color var(--duration-base)',
        }}
      >
        {on && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
      </span>
      {label && <span onClick={toggle}>{label}</span>}
    </label>
  );
}

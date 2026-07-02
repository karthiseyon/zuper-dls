import React from 'react';

/** Zuper Switch — pill toggle, orange when on. */
export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style = {} }) {
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
        role="switch"
        aria-checked={on}
        onClick={toggle}
        style={{
          width: 40, height: 24, borderRadius: 999, flexShrink: 0, position: 'relative',
          background: on ? 'var(--color-primary)' : 'var(--border-strong)',
          transition: 'background var(--duration-base) var(--ease-standard)',
        }}
      >
        <span style={{
          position: 'absolute', top: 3, left: on ? 19 : 3, width: 18, height: 18, borderRadius: '50%',
          background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,.25)',
          transition: 'left var(--duration-base) var(--ease-out)',
        }}/>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

import React from 'react';

/** Zuper Tabs — underline style, orange active indicator. */
export function Tabs({ tabs = [], value, defaultValue, onChange, style = {} }) {
  const isControlled = value !== undefined;
  const first = defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value));
  const [internal, setInternal] = React.useState(first);
  const active = isControlled ? value : internal;
  const select = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };

  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-divider)', fontFamily: 'var(--font-body)', ...style }}>
      {tabs.map((t) => {
        const val = typeof t === 'string' ? t : t.value;
        const lbl = typeof t === 'string' ? t : t.label;
        const on = val === active;
        return (
          <button
            key={val}
            role="tab"
            aria-selected={on}
            onClick={() => select(val)}
            style={{
              border: 0, background: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
              padding: '10px 14px', marginBottom: -1,
              color: on ? 'var(--text-primary)' : 'var(--text-muted)',
              borderBottom: `2px solid ${on ? 'var(--color-primary)' : 'transparent'}`,
              transition: 'color var(--duration-base), border-color var(--duration-base)',
            }}
            onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-secondary)'; }}
            onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            {lbl}
          </button>
        );
      })}
    </div>
  );
}

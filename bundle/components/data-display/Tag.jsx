import React from 'react';

/** Zuper Tag — neutral filter/category chip, optionally removable. */
export function Tag({ children, onRemove, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
      padding: '5px 10px', borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-white)', color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)', ...style,
    }}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove" style={{ display: 'inline-flex', border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-muted)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}

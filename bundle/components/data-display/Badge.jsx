import React from 'react';

/**
 * Zuper Badge — status pill using semantic colors (never brand orange).
 * tone: success | warning | error | neutral | info
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {} }) {
  const tones = {
    success: { bg: 'var(--status-success-bg)', fg: 'var(--status-success-fg)' },
    warning: { bg: 'var(--status-warning-bg)', fg: 'var(--status-warning-fg)' },
    error: { bg: 'var(--status-error-bg)', fg: 'var(--status-error-fg)' },
    info: { bg: '#E8F0FE', fg: '#1A56DB' },
    neutral: { bg: 'var(--gray-50)', fg: 'var(--gray-500)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
      padding: '4px 10px', borderRadius: 999,
      background: t.bg, color: t.fg, ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg }}/>}
      {children}
    </span>
  );
}

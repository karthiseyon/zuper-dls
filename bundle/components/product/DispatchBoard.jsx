import React from 'react';

/**
 * Zuper dispatch board — recreated product screen for use in creatives.
 * Wrapped in a mac-style window; floats as a rounded shadowed card.
 */
export function DispatchBoard({ style = {} }) {
  const jobs = [
    { t: '8:00', n: 'Tear-off — 14 Maple Ave', who: 'Crew A', bg: 'var(--status-success-bg)', fg: 'var(--status-success-fg)', s: 'Completed' },
    { t: '9:30', n: 'Roof inspection — Summit Plaza', who: 'M. Reyes', bg: '#E8F0FE', fg: '#1A56DB', s: 'En route' },
    { t: '11:00', n: 'Leak repair — 9 Oak Court', who: 'Crew B', bg: 'var(--status-warning-bg)', fg: 'var(--status-warning-fg)', s: 'Scheduled' },
    { t: '13:30', n: 'Gutter install — 220 Pine St', who: 'Crew A', bg: 'var(--status-warning-bg)', fg: 'var(--status-warning-fg)', s: 'Scheduled' },
    { t: '15:00', n: 'Estimate — 5 Birch Ln', who: 'Unassigned', bg: 'var(--gray-50)', fg: 'var(--gray-500)', s: 'Unassigned' },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', overflow: 'hidden', fontFamily: 'var(--font-body)', color: 'var(--text-primary)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 18px', borderBottom: '1px solid var(--border-divider)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }}/>
        <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>Dispatch board · Today</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>Tue, Jun 25</span>
      </div>
      <div style={{ padding: 12 }}>
        {jobs.map((j) => (
          <div key={j.n} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '13px 14px', borderRadius: 10, marginBottom: 6, border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-muted)', width: 46 }}>{j.t}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{j.n}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{j.who}</div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, padding: '5px 12px', borderRadius: 999, background: j.bg, color: j.fg }}>{j.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

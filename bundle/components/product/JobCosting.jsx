import React from 'react';

/**
 * Zuper job-costing dashboard — KPI tiles + margin bars for creatives.
 */
export function JobCosting({ style = {} }) {
  const kpis = [['Revenue booked', '$48.2k'], ['Avg margin', '34%'], ['Jobs this week', '12']];
  const bars = [
    { n: 'Tear-off — Maple Ave', m: 48 },
    { n: 'Inspection — Summit', m: 36 },
    { n: 'Repair — Oak Court', m: 22 },
    { n: 'Install — Pine St', m: 41 },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', overflow: 'hidden', fontFamily: 'var(--font-body)', color: 'var(--text-primary)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 18px', borderBottom: '1px solid var(--border-divider)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }}/>
        <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>Job costing &amp; profitability</span>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 18 }}>
          {kpis.map(([l, v]) => (
            <div key={l} style={{ border: '1px solid var(--border-card)', borderRadius: 12, padding: '14px 16px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text-muted)', marginBottom: 8 }}>{l}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-.02em' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bars.map((b) => (
            <div key={b.n} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 190, fontSize: 13, color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.n}</span>
              <span style={{ flex: 1, height: 10, background: 'var(--gray-50)', borderRadius: 999, overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: b.m + '%', background: b.m < 30 ? 'var(--status-warning-fg)' : 'var(--color-primary)', borderRadius: 999 }}/>
              </span>
              <span style={{ width: 40, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: b.m < 30 ? 'var(--status-warning-fg)' : 'var(--text-primary)' }}>{b.m}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

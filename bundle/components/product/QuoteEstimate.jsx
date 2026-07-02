import React from 'react';

/**
 * Zuper Intelligent Quoting — good/better/best estimate screen for creatives.
 */
export function QuoteEstimate({ style = {} }) {
  const tiers = [
    { name: 'Good', price: '$11,400', sub: '3-tab shingles · 25-yr', active: false },
    { name: 'Better', price: '$16,250', sub: 'Architectural · 30-yr', active: false },
    { name: 'Best', price: '$23,800', sub: 'Premium · lifetime', active: true },
  ];
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', overflow: 'hidden', fontFamily: 'var(--font-body)', color: 'var(--text-primary)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 18px', borderBottom: '1px solid var(--border-divider)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }}/>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }}/>
        <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>Estimate · 14 Maple Ave</span>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 14 }}>Pick a package to send</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
          {tiers.map((t) => (
            <div key={t.name} style={{
              border: t.active ? '2px solid var(--color-primary)' : '1px solid var(--border-card)',
              borderRadius: 12, padding: 16, position: 'relative',
              background: t.active ? 'var(--surface-hover)' : '#fff',
            }}>
              {t.active && <span style={{ position: 'absolute', top: -10, right: 12, background: 'var(--color-primary)', color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.06em', padding: '3px 8px', borderRadius: 999 }}>Recommended</span>}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, marginBottom: 6, color: t.active ? 'var(--color-primary-press)' : 'var(--text-primary)' }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-.02em' }}>{t.price}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{t.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18 }}>
          <span style={{ flex: 1, fontSize: 13, color: 'var(--text-muted)' }}>Gross margin <strong style={{ color: 'var(--status-success-fg)' }}>42%</strong></span>
          <span style={{ background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, padding: '10px 20px', borderRadius: 8 }}>Send estimate</span>
        </div>
      </div>
    </div>
  );
}

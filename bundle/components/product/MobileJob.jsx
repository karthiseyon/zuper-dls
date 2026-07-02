import React from 'react';

/**
 * Zuper mobile app — field job view inside a phone frame, for creatives.
 */
export function MobileJob({ style = {} }) {
  return (
    <div style={{ width: 300, background: '#fff', borderRadius: 36, boxShadow: 'var(--shadow-float)', border: '8px solid #191919', overflow: 'hidden', fontFamily: 'var(--font-body)', color: 'var(--text-primary)', ...style }}>
      {/* status bar */}
      <div style={{ background: 'var(--gradient-brand)', color: '#fff', padding: '16px 18px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 12, opacity: .9 }}><span>9:41</span><span>Zuper</span></div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', opacity: .85, marginTop: 16 }}>Current job</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-.02em', marginTop: 4 }}>Leak repair</div>
        <div style={{ fontSize: 13, opacity: .92, marginTop: 2 }}>9 Oak Court · 11:00 AM</div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <span style={{ flex: 1, textAlign: 'center', background: 'var(--surface-banner)', color: 'var(--color-primary-press)', fontWeight: 600, fontSize: 13, padding: '9px 0', borderRadius: 8 }}>Navigate</span>
          <span style={{ flex: 1, textAlign: 'center', background: 'var(--surface-warm)', color: 'var(--text-secondary)', fontWeight: 600, fontSize: 13, padding: '9px 0', borderRadius: 8 }}>Call</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text-muted)', margin: '4px 0 10px' }}>Checklist</div>
        {[['Inspect flashing', true], ['Photo before', true], ['Seal &amp; replace', false], ['Photo after', false]].map(([t, done], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
            <span style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: done ? 'var(--color-primary)' : '#fff', border: done ? '2px solid var(--color-primary)' : '2px solid var(--border-strong)' }}>
              {done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
            </span>
            <span style={{ fontSize: 14, color: done ? 'var(--text-muted)' : 'var(--text-primary)', textDecoration: done ? 'line-through' : 'none' }} dangerouslySetInnerHTML={{ __html: t }}/>
          </div>
        ))}
        <div style={{ background: 'var(--color-primary)', color: '#fff', textAlign: 'center', fontWeight: 600, fontSize: 15, padding: '13px 0', borderRadius: 10, marginTop: 14 }}>Complete job</div>
      </div>
    </div>
  );
}

/* Zuper Sense — AI command center (dark). Self-contained screen parts. */

const SIco = ({ size = 20, sw = 1.7, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const NavGrid = (p) => <SIco {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></SIco>;
const NavCal = (p) => <SIco {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></SIco>;
const NavMap = (p) => <SIco {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></SIco>;
const NavFile = (p) => <SIco {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/></SIco>;
const NavChart = (p) => <SIco {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></SIco>;
const NavSpark = (p) => <SIco {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></SIco>;
const NavSearch = (p) => <SIco {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></SIco>;
const NavBell = (p) => <SIco {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></SIco>;

function SenseSidebar({ active, setActive }) {
  const items = [['Overview', NavGrid], ['Dispatch', NavMap], ['Schedule', NavCal], ['Jobs', NavFile], ['Insights', NavChart]];
  return (
    <aside style={{ width: 232, background: '#0E0E11', borderRight: '1px solid #27272A', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="../../assets/logos/zuper-horizontal-white.png" alt="Zuper" style={{ height: 24, width: 'auto' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.12em', color: '#FF8B5A', border: '1px solid #3F3F46', borderRadius: 5, padding: '2px 6px' }}>Sense</span>
      </div>
      <nav style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(([label, I]) => {
          const on = label === active;
          return (
            <button key={label} onClick={() => setActive(label)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 9, border: 0, cursor: 'pointer', textAlign: 'left',
              background: on ? '#1C1C21' : 'transparent', color: on ? '#FAFAFA' : '#A1A1AA', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: on ? 600 : 500 }}>
              <span style={{ color: on ? '#FF8B5A' : '#71717A', display: 'inline-flex' }}><I /></span>{label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid #27272A', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#FF8B5A', color: '#191919', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: 13 }}>MT</span>
        <div><div style={{ fontSize: 13, fontWeight: 600, color: '#FAFAFA' }}>Maya Torres</div><div style={{ fontSize: 12, color: '#71717A' }}>Dispatcher</div></div>
      </div>
    </aside>
  );
}

function SenseTopbar() {
  return (
    <div style={{ height: 60, borderBottom: '1px solid #27272A', display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px', flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#141417', border: '1px solid #27272A', borderRadius: 9, padding: '8px 12px', width: 320, color: '#71717A' }}>
        <NavSearch size={16} /><span style={{ fontSize: 13 }}>Ask Sense or search jobs…</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16, color: '#A1A1AA' }}>
        <NavBell size={18} />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,139,90,.14)', color: '#FF8B5A', borderRadius: 999, padding: '6px 12px', fontSize: 13, fontWeight: 600 }}><NavSpark size={15} />Sense active</span>
      </div>
    </div>
  );
}

function SenseDashboard() {
  const insights = [
    { t: 'Reroute Crew B', d: 'Two jobs on the east side can be swapped to save 41 min of drive time.', tag: 'Routing' },
    { t: '3 jobs at risk', d: 'Materials not confirmed for tomorrow\u2019s tear-offs. Nudge suppliers?', tag: 'Risk' },
    { t: 'Margin alert', d: 'Job #4192 trending 12% under estimate — labor overrun on day 2.', tag: 'Profitability' },
  ];
  const board = [
    { t: '8:00', n: 'Tear-off — 14 Maple Ave', who: 'Crew A', tone: 'success', s: 'Completed' },
    { t: '9:30', n: 'Roof inspection — Summit Plaza', who: 'M. Reyes', tone: 'info', s: 'En route' },
    { t: '11:00', n: 'Leak repair — 9 Oak Court', who: 'Crew B', tone: 'warning', s: 'Scheduled' },
    { t: '13:30', n: 'Gutter install — 220 Pine St', who: 'Crew A', tone: 'warning', s: 'Scheduled' },
    { t: '15:00', n: 'Estimate — 5 Birch Ln', who: 'M. Torres', tone: 'neutral', s: 'Unassigned' },
  ];
  const toneColor = { success: ['#103D26', '#4ADE80'], info: ['#13294B', '#60A5FA'], warning: ['#3A2A0A', '#FBBF24'], neutral: ['#27272A', '#A1A1AA'] };
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: '#FAFAFA', margin: 0, letterSpacing: '-.02em' }}>Good morning, Maya</h1>
        <p style={{ color: '#A1A1AA', fontSize: 14, margin: '6px 0 0' }}>12 jobs scheduled today · 3 crews active · Sense found 3 things worth your attention.</p>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 22 }}>
        {[['On-time today', '92%', '#4ADE80'], ['Jobs completed', '7 / 12', '#FAFAFA'], ['Revenue booked', '$48.2k', '#FAFAFA'], ['Avg margin', '34%', '#FF8B5A']].map(([l, v, c]) => (
          <div key={l} style={{ background: '#141417', border: '1px solid #27272A', borderRadius: 'var(--radius-card)', padding: '16px 18px' }}>
            <div style={{ fontSize: 12, color: '#71717A', marginBottom: 8, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: c, letterSpacing: '-.02em' }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        {/* Dispatch board */}
        <div style={{ background: '#141417', border: '1px solid #27272A', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid #27272A', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#FAFAFA' }}>Today’s board</span>
            <span style={{ fontSize: 13, color: '#71717A' }}>Tue, Jun 25</span>
          </div>
          <div style={{ padding: 10 }}>
            {board.map((j) => {
              const [bg, fg] = toneColor[j.tone];
              return (
                <div key={j.n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px', borderRadius: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#71717A', width: 42 }}>{j.t}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#FAFAFA' }}>{j.n}</div>
                    <div style={{ fontSize: 12, color: '#71717A' }}>{j.who}</div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 999, background: bg, color: fg }}>{j.s}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sense insights */}
        <div style={{ background: 'linear-gradient(180deg,#1A130F,#141417)', border: '1px solid #3A2A1F', borderRadius: 'var(--radius-card)', padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, color: '#FF8B5A' }}>
            <NavSpark size={16} /><span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Sense insights</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {insights.map((it) => (
              <div key={it.t} style={{ background: '#141417', border: '1px solid #27272A', borderRadius: 12, padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#FAFAFA' }}>{it.t}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: '#FF8B5A' }}>{it.tag}</span>
                </div>
                <p style={{ margin: '0 0 10px', fontSize: 13, lineHeight: 1.5, color: '#A1A1AA' }}>{it.d}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ border: 0, borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, background: '#FD5000', color: '#fff', cursor: 'pointer' }}>Apply</button>
                  <button style={{ border: '1px solid #3F3F46', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, background: 'transparent', color: '#A1A1AA', cursor: 'pointer' }}>Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SenseApp() {
  const [active, setActive] = React.useState('Overview');
  return (
    <div className="zuper-sense" style={{ display: 'flex', height: '100vh', background: '#09090B', color: '#FAFAFA', fontFamily: 'var(--font-body)' }}>
      <SenseSidebar active={active} setActive={setActive} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <SenseTopbar />
        <SenseDashboard />
      </div>
    </div>
  );
}

Object.assign(window, { SenseApp });

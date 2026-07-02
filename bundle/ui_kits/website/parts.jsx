/* Zuper website — shared chrome: icons, header (with mega-menu), footer */

// ---- Inline single-weight outline icons (stroke:currentColor, fill:none) ----
const Ico = ({ d, size = 22, sw = 1.7, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);
const IconChevron = (p) => <Ico {...p} d="m6 9 6 6 6-6" size={16} />;
const IconArrow = (p) => <Ico {...p} d="M5 12h14M13 6l6 6-6 6" size={18} />;
const IconRoof = (p) => <Ico {...p}><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></Ico>;
const IconBolt = (p) => <Ico {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></Ico>;
const IconWrench = (p) => <Ico {...p}><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z"/></Ico>;
const IconDrop = (p) => <Ico {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></Ico>;
const IconSun = (p) => <Ico {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/></Ico>;
const IconShield = (p) => <Ico {...p}><path d="M12 3 5 6v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3Z"/></Ico>;
const IconCalendar = (p) => <Ico {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></Ico>;
const IconDollar = (p) => <Ico {...p}><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></Ico>;
const IconSpark = (p) => <Ico {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></Ico>;
const IconFile = (p) => <Ico {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></Ico>;
const IconMenu = (p) => <Ico {...p}><path d="M4 6h16M4 12h16M4 18h16"/></Ico>;
const IconClose = (p) => <Ico {...p}><path d="M18 6 6 18M6 6l12 12"/></Ico>;

const PRODUCTS = [
  { icon: IconCalendar, name: 'Scheduling & Dispatch', desc: 'Drag-and-drop board, smart routing' },
  { icon: IconFile, name: 'Intelligent Quoting', desc: 'Branded estimates, sent on-site' },
  { icon: IconDollar, name: 'Job Costing & Profitability', desc: 'See margin on every job' },
  { icon: IconSpark, name: 'Zuper Sense (AI)', desc: 'Auto-dispatch, summaries, insights' },
];
const INDUSTRIES = [
  { icon: IconRoof, name: 'Roofing' }, { icon: IconWrench, name: 'HVAC' },
  { icon: IconDrop, name: 'Plumbing' }, { icon: IconBolt, name: 'Electrical' },
  { icon: IconSun, name: 'Solar' }, { icon: IconShield, name: 'Security' },
];

function Wordmark({ variant = 'light', height = 30 }) {
  const src = variant === 'white' ? '../../assets/logos/zuper-horizontal-white.png' : '../../assets/logos/zuper-horizontal.png';
  return <img src={src} alt="Zuper" style={{ height, width: 'auto', display: 'block' }} />;
}

function Header({ onToggleMenu, menuOpen }) {
  const { Button } = window.ZuperDesignSystem_4b4e77;
  const link = { fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--text-secondary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-divider)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', gap: 32 }}>
        <Wordmark />
        <nav style={{ display: 'flex', gap: 26, alignItems: 'center', marginLeft: 8 }}>
          <span style={{ ...link, color: menuOpen ? 'var(--color-primary)' : link.color }} onClick={onToggleMenu}>Products <IconChevron /></span>
          <span style={link}>Industries</span>
          <span style={link}>Pricing</span>
          <span style={link}>Resources</span>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant="ghost" size="md">Sign in</Button>
          <Button variant="primary" size="md">Book a demo</Button>
        </div>
      </div>
      {menuOpen && <MegaMenu />}
    </header>
  );
}

function MegaMenu() {
  return (
    <div style={{ borderTop: '1px solid var(--border-divider)', background: 'var(--surface-white)', boxShadow: 'var(--shadow-float)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 32px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
        {PRODUCTS.map((p) => {
          const I = p.icon;
          return (
            <div key={p.name} className="zmega" style={{ display: 'flex', gap: 14, padding: 14, borderRadius: 'var(--radius-md)', background: 'var(--surface-peach)', cursor: 'pointer', alignItems: 'center' }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}><I /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--text-primary)' }}>{p.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{p.desc}</div>
              </div>
              <span style={{ color: 'var(--color-primary)' }}><IconArrow /></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  const cols = [
    ['Product', ['Scheduling', 'Quoting', 'Job costing', 'Zuper Sense', 'Mobile app']],
    ['Industries', ['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Solar']],
    ['Company', ['About', 'Customers', 'Careers', 'Contact']],
  ];
  return (
    <footer style={{ background: 'var(--gradient-brand)', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 32px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
        <div>
          <Wordmark variant="white" height={30} />
          <p style={{ marginTop: 14, maxWidth: 240, lineHeight: 1.55, color: 'rgba(255,255,255,.9)', fontSize: 14 }}>The AI operating system for field service — from first call to final invoice.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.75)', marginBottom: 14 }}>{h}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((i) => <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,.95)', cursor: 'pointer' }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.25)', maxWidth: 1200, margin: '0 auto', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,.85)' }}>
        <span>© 2026 Zuper, Inc.</span>
        <span style={{ display: 'flex', gap: 20 }}><span>Privacy</span><span>Terms</span><span>Security</span></span>
      </div>
    </footer>
  );
}

Object.assign(window, { Ico, IconChevron, IconArrow, IconArrow, IconSpark, IconMenu, IconClose, PRODUCTS, INDUSTRIES, Wordmark, Header, MegaMenu, Footer });

/* Zuper website — home page sections */

function Hero() {
  const { Button } = window.ZuperDesignSystem_4b4e77;
  return (
    <section style={{ background: 'var(--gradient-brand)', color: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '84px 32px 0', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 40, alignItems: 'center' }}>
        <div style={{ paddingBottom: 84 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.85)', marginBottom: 18 }}>The AI OS for field service</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, lineHeight: 1.04, letterSpacing: '-.03em', margin: 0, textWrap: 'balance' }}>Run service from first call to final invoice</h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,.92)', maxWidth: 460, margin: '20px 0 28px' }}>Schedule the right tech, win the quote on-site, and get paid faster — with AI handling the busywork in the background.</p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Button variant="black" size="lg">Test drive Zuper</Button>
            <Button variant="whiteOutline" size="lg">Watch the tour</Button>
          </div>
          <div style={{ marginTop: 26, fontSize: 13, color: 'rgba(255,255,255,.8)' }}>Trusted by roofing, HVAC, plumbing &amp; solar crews nationwide.</div>
        </div>
        <ProductScreenshot />
      </div>
    </section>
  );
}

/* Clean HTML mock of a product screen, floating as a rounded shadowed card */
function ProductScreenshot() {
  const { Badge } = window.ZuperDesignSystem_4b4e77;
  const jobs = [
    { t: '8:00', n: 'Tear-off — 14 Maple Ave', who: 'Crew A', tone: 'success', s: 'Completed' },
    { t: '10:30', n: 'Inspection — Summit Plaza', who: 'M. Torres', tone: 'info', s: 'En route' },
    { t: '13:00', n: 'Repair — 9 Oak Court', who: 'Crew B', tone: 'warning', s: 'Scheduled' },
  ];
  return (
    <div style={{ alignSelf: 'end', transform: 'translateY(24px)', background: '#fff', borderRadius: '16px 16px 0 0', boxShadow: 'var(--shadow-float)', overflow: 'hidden', color: 'var(--text-primary)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: '1px solid var(--border-divider)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }}/>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }}/>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }}/>
        <span style={{ marginLeft: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>Today · Dispatch board</span>
      </div>
      <div style={{ padding: 16 }}>
        {jobs.map((j) => (
          <div key={j.n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 12px', borderRadius: 10, marginBottom: 8, border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', width: 42 }}>{j.t}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{j.n}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{j.who}</div>
            </div>
            <Badge tone={j.tone} dot>{j.s}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductGrid() {
  const { Eyebrow } = window.ZuperDesignSystem_4b4e77;
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Eyebrow>One platform</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 38, letterSpacing: '-.02em', margin: '12px 0 0', textWrap: 'balance' }}>Everything between the call and the cash</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {window.PRODUCTS.map((p) => {
          const I = p.icon;
          return (
            <div key={p.name} className="zcard" style={{ background: 'var(--surface-white)', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-card)', padding: 24, boxShadow: 'var(--shadow-card)', transition: 'transform .2s, box-shadow .2s' }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface-banner)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', marginBottom: 16 }}><I /></span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, margin: '0 0 6px', letterSpacing: '-.01em' }}>{p.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Industries() {
  const { Eyebrow } = window.ZuperDesignSystem_4b4e77;
  return (
    <section style={{ background: 'var(--surface-warm)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <div>
            <Eyebrow>Built for your trade</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, letterSpacing: '-.02em', margin: '12px 0 0' }}>Tuned to how your crews actually work</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
          {window.INDUSTRIES.map((ind) => {
            const I = ind.icon;
            return (
              <div key={ind.name} style={{ background: '#fff', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-md)', padding: '22px 12px', textAlign: 'center' }}>
                <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--icon-tile)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', marginBottom: 12 }}><I /></span>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{ind.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <img src="../../assets/mini-humans/carrying-gear.gif" alt="" aria-hidden="true" style={{ position: 'absolute', right: 64, bottom: 0, height: 78, width: 'auto', display: 'block' }} />
    </section>
  );
}

function FeatureDark() {
  const { Button, Eyebrow } = window.ZuperDesignSystem_4b4e77;
  const stats = [['28%', 'less drive time'], ['1 in 3', 'quotes won on-site'], ['2 days', 'faster to invoice']];
  return (
    <section style={{ background: 'var(--surface-charcoal)', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <Eyebrow color="#FF8B5A">Zuper Sense</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, letterSpacing: '-.02em', margin: '14px 0 16px', textWrap: 'balance' }}>AI that dispatches, summarizes, and spots the margin</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.8)', maxWidth: 440, margin: '0 0 28px' }}>Sense reads every job, routes the nearest qualified tech, and flags the work that's quietly losing you money — before the week is over.</p>
          <Button variant="primary" size="lg">See Zuper Sense</Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {stats.map(([n, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '20px 24px', background: '#1C1C21', border: '1px solid #27272A', borderRadius: 'var(--radius-card)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: '#FF8B5A', letterSpacing: '-.02em' }}>{n}</span>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,.8)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { Button } = window.ZuperDesignSystem_4b4e77;
  return (
    <section style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '96px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-.03em', margin: 0, textWrap: 'balance' }}>Ready to run a tighter operation?</h2>
        <p style={{ fontSize: 18, color: 'var(--text-secondary)', margin: '16px 0 28px' }}>Set up in a day. No rip-and-replace. Cancel anytime.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <Button variant="primary" size="lg">Book a demo</Button>
          <Button variant="secondary" size="lg">See pricing</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, ProductGrid, Industries, FeatureDark, CTA });

/* ============ WEBSITE DLS (Foundations · Atoms · Molecules) ============ */
function buildWebsite(s){
  const W=Object.assign({},s.vars,{
    "brand-default":"#FD5000","brand-hover":"#E04600","brand-deep":"#B5271C",
    "surface-default":"#FFFFFF","surface-subtle":"#F5F5F5","surface-card":"#FFFFFF","surface-peach":"#F8F0EB","surface-banner":"#FCE9E1","surface-cream":"#FFFAEA",
    "dark-section":"#282828","ink":"#191919",
    "text-primary":"#191919","text-secondary":"#4B5563","text-tertiary":"#606063","text-muted":"#888888",
    "border-default":"#E6E6E6","border-subtle":"#F0F0F0","card-border":"#F0F0F0","brand-subtle":"#FFE7DC"
  });
  const css=Object.entries(W).map(([k,v])=>`--${k}:${v}`).join(";")
    +`;--display:'Plus Jakarta Sans',system-ui,sans-serif;--body:'Inter',system-ui,sans-serif;--c-canvas:#F8F5F2`
    +`;--hero-bg:linear-gradient(118deg,#FFFFFF,#FBF2EA 55%,#FBDFD0);--hero-ink:#191919;--hero-sub:#4B5563;--hero-kick:#FD5000`
    +`;--chip-bg:#fff;--chip-ink:#191919;--chip-line:#E7E0D6`;
  stage.style.cssText=css;

  const sw=(n,hex,v,dark)=>`<div class="sw-card sem swatch-tall"><div class="sw-chip" style="background:${hex}${dark?';box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)':''}"></div><div class="sw-body"><div class="sw-name">${n}</div>${v?`<div class="sw-var">${v}</div>`:``}<div class="sw-hex">${hex}</div></div></div>`;
  const grid=a=>`<div class="swatches sem">${a.map(x=>sw(x[0],x[1],x[2],x[3])).join("")}</div>`;

  const typeScale=[["Display / H1","60px","700","d"],["H2","44px","700","d"],["H3","32px","700","d"],["H4","24px","600","d"],["Lead","20px","500","b"],["Body","16px","400","b"],["Small","14px","400","b"]]
    .map(t=>`<div class="ts"><span class="mt">${t[0]} · ${t[1]}</span><span style="font-family:${t[3]==='d'?'var(--display)':'var(--body)'};font-weight:${t[2]};font-size:min(${t[1]},8.5vw);line-height:1.08;color:var(--text-primary)">Run your service business</span></div>`).join("");

  const products=[["Zuper Glass","Hands‑free AR for field techs"],["Zuper Connect","Customer comms & live status"],["Zuper Pay","Collect payment in the field"],["Zuper Fleet","Track vehicles, trips & miles"]];
  const industries=[["Roofing","home"],["Solar","sun"],["Garage Doors","home"],["Windows","window"],["Siding","home"],["Gutters","droplet"],["Pressure Washing","droplet"],["Landscaping","leaf"]];

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Marketing website system</p>
      <h1>Website DLS</h1>
      <p class="lede">The real zuper.co system, sourced by walking the live pages: home, FSM, roofing, the product &amp; industries mega‑menus, and Zuper Sense. Bold orange‑gradient heroes, crisp white sections, charcoal feature blocks, warm‑peach cards and monospace eyebrows.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>--color-primary #FD5000</span>
        <span class="chip">Aa Plus Jakarta · display</span>
        <span class="chip">Aa Inter · body</span>
        <span class="chip">&lt;/&gt; Geist Mono · eyebrows</span>
      </div>
      <div class="hero-art"><div class="float ha-win">
        <div class="bar"><i></i><i></i><i></i><span class="url">zuper.co</span></div>
        <div class="vp"><div class="pg">
          <div class="s hero"><div class="hl"></div><div class="hl s2"></div><div class="sub"></div><span class="cta">Book a demo</span></div>
          <div class="s white"><div class="t"></div><div class="cards"><i></i><i></i><i></i></div></div>
          <div class="s dark"><div class="hl"></div><div class="sub"></div></div>
          <div class="s foot"><span class="fl"></span><span class="fl"></span></div>
        </div></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="ebm">Foundations</p><h2 class="sec">01 · Color</h2>
    <p class="sec-note">One vivid orange brand. Pages alternate three grounds, white, charcoal <code style="font-family:'Geist Mono',monospace;color:var(--text-secondary)">#282828</code>, and orange‑gradient, with warm‑peach reserved for product cards and feature banners. <b style="color:var(--text-primary)">Click any swatch to copy its hex.</b></p>
    <h3 class="grp">Brand</h3>${grid([["Primary","#FD5000","--color-primary"],["Primary hover","#E04600","--color-primary-hover"],["Deep red","#B5271C","--color-red"]])}
    <h3 class="grp">Grounds</h3>${grid([["White","#FFFFFF","surface"],["Subtle grey","#F5F5F5","surface-subtle"],["Charcoal","#282828","dark-section",1],["Ink","#191919","--color-secondary",1]])}
    <h3 class="grp">Warm tints (cards & banners)</h3>${grid([["Peach card","#F8F0EB","surface-peach"],["Banner peach","#FCE9E1","surface-banner"],["Cream","#FFFAEA","surface-cream"],["Brand subtle","#FFE7DC","brand-subtle"]])}
    <h3 class="grp">Text</h3>${grid([["Primary","#191919","--text-primary"],["Secondary","#4B5563","--text-secondary"],["Tertiary","#606063","--text-tertiary"],["Muted","#888888","--text-light"]])}
    <h3 class="grp">Neutral grays</h3>${grid([["gray/100","#F3F4F6"],["gray/200","#E5E7EB"],["gray/300","#D1D5DB"],["icon tile","#EDEDED"],["gray/500","#6B7280"],["gray/700","#374151"]])}
    <h3 class="grp">Accents (product UI)</h3>${grid([["Green","#22C55E","success"],["Purple","#A855F7"],["Teal","#14B8A6"],["Yellow","#EAB308"],["Red","#EF4444"],["Blue","#3B82F6"]])}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Foundations</p><h2 class="sec">02 · Typography</h2>
    <p class="sec-note"><b style="color:var(--text-primary)">Plus Jakarta Sans</b> for hero &amp; headings · <b style="color:var(--text-primary)">Inter</b> for body · <b style="color:var(--text-primary)">Geist Mono</b> for eyebrows &amp; labels (uppercase, the site's signature).</p>
    <div style="background:var(--surface-subtle);border:1px solid var(--border-default);border-radius:14px;padding:24px;margin-bottom:24px">
      <p class="ebm">The shift · this is the eyebrow style</p>
      <div style="font-family:var(--display);font-weight:700;font-size:clamp(24px,4vw,40px);letter-spacing:-.03em;line-height:1.04;color:var(--text-primary)">From a <span class="hl">Frankenstein</span> stack to a unified <span class="hlo">AI operating system</span>.</div>
    </div>
    <div class="type-scale">${typeScale}</div>
    <h3 class="grp" style="margin-top:30px;font-family:'Geist Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-tertiary)">Iconography, single‑weight outline</h3>
    <div class="iconset">${[["calendar","Schedule"],["pin","Dispatch"],["invoice","Invoice"],["card","Payments"],["users","Team"],["chart","Reports"],["camera","Capture"],["cpu","AI"],["bell","Alerts"],["search","Search"],["truck","Fleet"],["home","Trades"]].map(x=>`<div class="it" style="color:var(--brand-default)">${icon(x[0],24)}<span style="color:var(--text-secondary)">${x[1]}</span></div>`).join("")}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Foundations</p><h2 class="sec">03 · Spacing, radius, grid</h2>
    <div class="found-grid">
      <div><h3 class="grp">Spacing (4px base)</h3>${[4,8,12,16,24,32,48,64,96].map(n=>`<div class="space-bar"><span class="t">${n}px</span><div class="b" style="width:${n*1.9}px"></div></div>`).join("")}</div>
      <div>
        <h3 class="grp">Radius</h3><div class="radii">${[["sm","6px"],["btn","8px"],["card","14px"],["lg","20px"],["pill","999px"]].map(r=>`<div class="r" style="border-radius:${r[1]}">${r[0]}</div>`).join("")}</div>
        <h3 class="grp" style="margin-top:26px">Elevation & focus</h3>
        <div class="shadows"><div class="sh" style="box-shadow:0 1px 2px rgba(0,0,0,.06)">card</div><div class="sh" style="box-shadow:0 20px 50px rgba(0,0,0,.12)">menu</div><div class="sh" style="box-shadow:0 0 0 3px rgba(253,80,0,.32);border-color:var(--brand-default)">focus</div></div>
      </div>
    </div>
    <h3 class="grp" style="margin-top:30px">Layout grid, 1200px container · 12 columns</h3>
    <div class="gridcols">${Array(12).fill('<div class="col"></div>').join("")}</div>
    <div class="bps"><span class="bp"><b>sm</b> 480</span><span class="bp"><b>md</b> 768</span><span class="bp"><b>lg</b> 1024</span><span class="bp"><b>xl</b> 1280</span></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Atoms</p><h2 class="sec">04 · Buttons & eyebrows</h2>
    <p class="sec-note">Built to the live <code style="font-family:'Geist Mono',monospace;color:var(--brand-default)">.cta-btn</code>, 14px / 600 / radius 8, 2px border. Orange primary on light; <b style="color:var(--text-primary)">dark</b> primary on orange/photo heroes; white outline on dark.</p>
    <div class="comp-grid">
      <div class="panel"><h4>On light</h4>
        <div class="row"><button class="wbtn wbtn-primary">Book a demo</button><button class="wbtn wbtn-outline">Sign in</button><button class="wbtn wbtn-ghost">See pricing →</button></div>
        <div class="row"><button class="wbtn wbtn-primary wbtn-sm">Small</button><button class="wbtn wbtn-primary wbtn-lg">Large</button><button class="wbtn wbtn-primary" disabled>Disabled</button></div>
      </div>
      <div class="panel" style="background:#282828;border-color:#282828"><h4 style="color:rgba(255,255,255,.6)">On dark / orange</h4>
        <div class="row"><button class="wbtn wbtn-dark">Test drive Zuper</button><button class="wbtn wbtn-ow">Schedule a demo</button></div>
        <div class="row" style="margin-top:12px"><button class="wbtn wbtn-primary">Get a demo</button></div>
      </div>
      <div class="panel"><h4>Eyebrow & link</h4>
        <p class="ebm">Field Service Management</p>
        <div class="row"><a href="#" class="wlink" onclick="return false">Inline text link</a></div>
        <div class="row" style="margin-top:12px"><span class="dot-ind"><span class="d"></span>All systems operational</span></div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Atoms</p><h2 class="sec">05 · Forms, pills & tiles</h2>
    <div class="comp-grid">
      <div class="panel"><h4>Input + error</h4>
        <div class="fld"><label for="demo-email">Work email</label><input id="demo-email" placeholder="name@company.com" /></div>
        <div class="fld" style="margin-top:12px"><input class="err" value="not-an-email" /><div class="errmsg">Enter a valid work email.</div></div>
      </div>
      <div class="panel"><h4>Controls</h4>
        <label class="ctl"><input type="checkbox" checked> Email me product updates</label>
        <label class="ctl" style="margin-top:9px"><input type="radio" name="r" checked> Monthly</label>
        <label class="ctl" style="margin-top:7px"><input type="radio" name="r"> Annual</label>
        <div class="ctl" style="margin-top:13px"><button type="button" class="switch on" role="switch" aria-checked="true" aria-label="Auto-dispatch" onclick="this.setAttribute('aria-checked',this.classList.toggle('on'))"></button> Auto‑dispatch</div>
      </div>
      <div class="panel"><h4>Pills & status</h4>
        <div class="row"><span class="pill pill-brand"><span class="pill-dot"></span>New</span><span class="pill" style="background:#E7F6EC;color:#1E854B"><span class="pill-dot"></span>Completed</span><span class="pill" style="background:var(--surface-subtle);color:var(--text-secondary)">v2.4</span></div>
        <h4 style="margin-top:18px">Icon tiles, line icons</h4>
        <div class="row"><span class="icontile"><span class="sq">${icon('home',18)}</span>Roofing</span><span class="icontile"><span class="sq">${icon('sun',18)}</span>Solar</span></div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">06 · Navigation & mega‑menus</h2>
    <div class="web-nav">
      <div class="wlogo">${logo("dark",22)}</div>
      <div class="links"><span>Zuper AI ▾</span><span>Products ▾</span><span>Industries ▾</span><span>Resources ▾</span></div>
      <div class="spacer"></div>
      <button class="wbtn wbtn-outline wbtn-sm">Sign in</button>
      <button class="wbtn wbtn-primary wbtn-sm">Schedule Demo</button>
    </div>
    <div class="cols-2" style="margin-top:18px;align-items:start">
      <div><p class="ebm" style="margin-bottom:8px">Products menu</p>
        <div class="mega">
          <div class="mega-grid">${products.map(p=>`<div class="megacard"><div class="t">${p[0]} <span class="ar">→</span></div><div class="sub">${p[1]}</div></div>`).join("")}</div>
          <div class="mega-foot"><div><b style="font-family:var(--display)">Integrations</b><div class="mt">Zuper plays nice with the tools you love</div></div><a class="wlink" href="#" onclick="return false">See 60+ integrations →</a></div>
        </div>
      </div>
      <div><p class="ebm" style="margin-bottom:8px">Industries menu</p>
        <div class="mega">
          <div class="roof-banner"><div class="t">Zuper for Roofing <span>→</span></div><div class="s">Purpose built for your roofing business</div></div>
          <div class="icontile-grid">${industries.map(i=>`<span class="icontile"><span class="sq">${icon(i[1],18)}</span>${i[0]}</span>`).join("")}</div>
        </div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">07 · Section grounds</h2>
    <p class="sec-note">The page rhythm: an orange‑gradient hero, white content sections, and charcoal feature blocks, each opening with a mono eyebrow.</p>
    <div class="ground orange" style="background:linear-gradient(102deg,rgba(20,4,3,.40),transparent 60%),${ORANGE_BG_CSS};margin-bottom:18px"><img class="web-mini" src="${GIF_C}" alt="">
      <p class="ebm on-dark" style="color:#FFE0CE">Now launched · Zuper Sense</p>
      <h4>The AI operating system to run your service business</h4>
      <p class="g">Replace the patchwork. One AI system that runs operations, thinks ahead and acts in the field.</p>
      <div class="row"><button class="wbtn wbtn-dark">Test drive Zuper</button><button class="wbtn wbtn-ow">Schedule a demo</button></div>
    </div>
    <div class="cols-2">
      <div class="ground white">
        <p class="ebm">The shift</p>
        <h4>Your software should work for you, not the other way around</h4>
        <p class="g">A scattered tech stack forces your team to do the heavy lifting. Zuper removes it.</p>
        <button class="wbtn wbtn-primary">Book a demo</button>
      </div>
      <div class="ground dark">
        <p class="ebm on-dark">See how Zuper works</p>
        <h4>Built for the people in the field</h4>
        <p class="g">A mobile‑first platform designed to make field service effortless, end to end.</p>
        <button class="wbtn wbtn-primary">Get a demo</button>
      </div>
    </div>
    <div class="statstrip" style="margin-top:18px">
      <div class="s"><div class="n">4×</div><div class="l">faster scheduling</div></div>
      <div class="s"><div class="n">98%</div><div class="l">first‑time fix rate</div></div>
      <div class="s"><div class="n">8 hrs</div><div class="l">saved per tech / week</div></div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">08 · Cards</h2>
    <div class="comp-grid">
      <div class="feat"><div class="ic">${icon('calendar',20)}</div><h5>Smart scheduling</h5><p>Auto‑assign the closest qualified tech and cut windshield time across the crew.</p></div>
      <div class="feat"><div class="ic">${icon('pin',20)}</div><h5>Live dispatch</h5><p>Every job, vehicle and status on one map, re‑route in a tap.</p></div>
      <div class="feat"><div class="ic">${icon('invoice',20)}</div><h5>Instant invoicing</h5><p>Send invoices from the field the moment a job is complete.</p></div>
    </div>
    <div class="cols-2" style="margin-top:20px">
      <div class="price"><div class="tier">Starter</div><div class="amt">$29<span> / user / mo</span></div><ul><li>Scheduling & dispatch</li><li>Mobile app</li><li>Up to 10 users</li></ul><button class="wbtn wbtn-outline wbtn-full">Choose Starter</button></div>
      <div class="price featured"><div class="tier">Growth</div><div class="amt">$59<span> / user / mo</span></div><ul><li>Everything in Starter</li><li>AI insights & Zuper Sense</li><li>Custom workflows & API</li></ul><button class="wbtn wbtn-primary wbtn-full">Choose Growth</button></div>
    </div>
    <div class="quote" style="margin-top:20px"><p>“Zuper paid for itself in a quarter. Our techs spend less time driving and more time fixing.”</p><div class="who"><span class="av">MR</span><div><div class="nm">Maria Rodriguez</div><div class="rl">VP Operations · Northwind HVAC</div></div></div></div>
    <h3 class="grp">Product surfaces</h3>
    <div class="cols-2"><div class="pscreen"><div class="pscreen-hd"><span class="d"></span><span class="d"></span><span class="d"></span><span class="pt">Job costing</span></div><div class="pscreen-bd"><div class="prof"><div class="donut" style="--p:28.9"></div><div><div class="big">28.9%</div><div class="mut">Profit margin</div></div></div><div class="prow"><span>Total revenue</span><b>$29,400</b></div><div class="prow"><span>COGS</span><b>$20,900</b></div><div class="prow tot"><span>Profit</span><b>$8,500</b></div></div></div><div class="pscreen"><div class="pscreen-hd"><span class="d"></span><span class="d"></span><span class="d"></span><span class="pt">Invoice</span></div><div class="pscreen-bd"><div class="inv-top"><div><b>Rooftop Solutions</b><div class="mut">Austin, TX</div></div><div class="r"><div class="mut">INVOICE</div><b>#2025‑1720</b></div></div><table class="inv-tbl"><tr><th>Item</th><th>Qty</th><th>Amount</th></tr><tr><td>Asphalt shingles</td><td>1500</td><td>$8,450</td></tr><tr><td>Underlayment &amp; flashing</td><td>1</td><td>$1,280</td></tr><tr><td>Labor · 2 days</td><td>2</td><td>$3,200</td></tr></table><div class="inv-tot"><span>Total due</span><b>$12,930</b><span class="paid">PAID</span></div></div></div></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">09 · More components</h2>
    <p class="sec-note">Product‑surface UI, all reading the same tokens. Outline icons throughout.</p>
    <div class="annbar"><span class="tp">New</span><span>Zuper Sense is live, the AI layer for field service</span><a href="#" onclick="return false">Learn more →</a></div>
    <div class="comp-grid" style="margin-top:20px">
      <div class="panel"><h4>Segmented control</h4><div class="seg" role="tablist" aria-label="Billing period"><button class="on" role="tab" aria-selected="true">Monthly</button><button role="tab" aria-selected="false">Annual</button></div></div>
      <div class="panel"><h4>Tabs</h4><div class="tabs" role="tablist" aria-label="Job sections"><button class="on" role="tab" aria-selected="true">Work orders</button><button role="tab" aria-selected="false">Scheduling</button><button role="tab" aria-selected="false">Invoicing</button></div></div>
      <div class="panel"><h4>Toast</h4><div class="toast"><span class="ck">✓</span><div><div class="tt">Invoice sent</div><div class="ts">Payment expected in 3 days</div></div></div></div>
      <div class="panel"><h4>Team avatars</h4><div class="avg"><span class="av" style="background:#FD5000">AR</span><span class="av" style="background:#A855F7">MK</span><span class="av" style="background:#14B8A6">JD</span><span class="av more">+5</span></div></div>
      <div class="panel"><h4>Onboarding steps</h4><div class="steps"><span class="st done"><span class="dot">✓</span>Setup</span><span class="bar"></span><span class="st on"><span class="dot">2</span>Import</span><span class="bar"></span><span class="st"><span class="dot">3</span>Live</span></div></div>
      <div class="panel"><h4>Progress</h4><div class="prog"><span class="fill" style="width:72%"></span></div><div style="font-size:12px;color:var(--text-tertiary);margin-top:8px;font-family:'Geist Mono',ui-monospace,monospace">72% migrated</div></div>
      <div class="panel"><h4>Tags</h4><div class="tagset"><span class="tg">Scheduling</span><span class="tg">AI</span><span class="tg grey">Roofing</span><span class="tg grey">QuickBooks</span></div></div>
      <div class="panel"><h4>Breadcrumb</h4><div class="crumb"><a href="#" onclick="return false">Home</a>›<a href="#" onclick="return false">Industries</a>›<span class="cur">Roofing</span></div></div>
      <div class="panel"><h4>Stat + sparkline</h4><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-tertiary)">Jobs completed</div><div style="font-family:var(--display);font-weight:700;font-size:30px;color:var(--text-primary);line-height:1.1">1,284</div><div class="spark"><i style="height:40%"></i><i style="height:55%"></i><i style="height:48%"></i><i style="height:70%"></i><i style="height:62%"></i><i style="height:84%"></i><i class="lead" style="height:100%"></i></div></div>
      <div class="panel"><h4>Info banner</h4><div class="infob"><span class="mk"></span><div class="tx"><b>QuickBooks sync is in progress.</b> Invoices reconcile automatically once it's complete.</div></div></div>
      <div class="panel"><h4>Tooltip</h4><div class="tip"><span class="bub">Syncs every 5 min</span></div></div>
      <div class="panel"><h4>Select</h4><div class="wselect"><select><option>Roofing</option><option>HVAC</option><option>Solar</option></select></div></div>
      <div class="panel"><h4>Range</h4><input class="range" type="range" min="0" max="100" value="60" aria-label="Crew radius in miles"><div style="font-size:12px;color:var(--text-tertiary);margin-top:9px;font-family:'Geist Mono',ui-monospace,monospace">Crew radius · 60 mi</div></div>
      <div class="panel"><h4>Skeleton</h4><div class="skel"><div class="ln" style="width:78%"></div><div class="ln" style="width:100%"></div><div class="ln" style="width:58%"></div></div></div>
      <div class="panel"><h4>Pagination</h4><div class="pager"><a>‹</a><a class="on">1</a><a>2</a><a>3</a><a>›</a></div></div>
      <div class="panel"><h4>Notification</h4><div class="row" style="align-items:center"><span class="nbell">${icon('bell',22)}<span class="b">3</span></span><span style="font-size:13px;color:var(--text-secondary)">3 new alerts</span></div></div>
    </div>
    <div class="cols-2" style="margin-top:20px">
      <div class="panel"><h4>Data table</h4>
        <table class="dtable"><thead><tr><th>Job</th><th>Tech</th><th>Status</th></tr></thead><tbody>
          <tr><td>Roof replacement</td><td>A. Rivera</td><td><span class="pill" style="background:#E7F6EC;color:#1E854B"><span class="pill-dot"></span>Completed</span></td></tr>
          <tr><td>Gutter install</td><td>M. Khan</td><td><span class="pill" style="background:var(--status-warning-bg);color:var(--status-warning-fg)"><span class="pill-dot"></span>En route</span></td></tr>
          <tr><td>Inspection</td><td>J. Doe</td><td><span class="pill" style="background:var(--surface-subtle);color:var(--text-secondary)"><span class="pill-dot"></span>Scheduled</span></td></tr>
        </tbody></table>
      </div>
      <div class="panel"><h4>Dialog</h4>
        <div class="modal"><div class="mh"><h5>Delete work order?</h5><span class="x">×</span></div><div class="mb">This removes the job and its history. This can't be undone.</div><div class="mf"><button class="wbtn wbtn-outline wbtn-sm">Cancel</button><button class="wbtn wbtn-primary wbtn-sm">Delete</button></div></div>
      </div>
      <div class="panel full"><h4>Empty state</h4><div class="empty"><div class="blk">${icon('calendar',22)}</div><h5>No jobs scheduled</h5><p>New work orders will appear here once they're booked.</p><button class="wbtn wbtn-primary wbtn-sm">Create work order</button></div></div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Guidelines</p><h2 class="sec">10 · Usage, states &amp; anatomy</h2>
    <p class="sec-note">The part that turns a component gallery into a system, interaction states, usage rules and component specs.</p>

    <h3 class="grp">Button states</h3>
    <div class="states">
      <div class="st"><span class="lab">Default</span><button class="wbtn wbtn-primary">Book a demo</button></div>
      <div class="st"><span class="lab">Hover</span><button class="wbtn wbtn-primary is-hover">Book a demo</button></div>
      <div class="st"><span class="lab">Focus</span><button class="wbtn wbtn-primary is-focus">Book a demo</button></div>
      <div class="st"><span class="lab">Disabled</span><button class="wbtn wbtn-primary" disabled>Book a demo</button></div>
    </div>

    <h3 class="grp" style="margin-top:30px">Do &amp; don't</h3>
    <div class="dd">
      <div class="c do"><div class="hd">${icon('check',17)} Do</div><div class="bd">
        <div class="demo" style="background:var(--surface-cream);border:1px solid var(--border-default)"><div style="font-family:var(--display);font-weight:700;color:var(--text-primary);margin-bottom:10px;font-size:15px">Cut truck‑rolls by 31%</div><button class="wbtn wbtn-primary wbtn-sm">Book a demo</button></div>
        <p>One orange action per view. Orange signals the single most important thing on the screen.</p>
      </div></div>
      <div class="c dont"><div class="hd">${icon('x',17)} Don't</div><div class="bd">
        <div class="demo" style="background:var(--brand-default)"><div style="color:#FFD9C9;margin-bottom:10px;font-size:12.5px;line-height:1.5">Cut truck‑rolls by 31% with smarter dispatch, unified workflows and real‑time visibility across every job…</div><button class="wbtn wbtn-sm" style="background:#fff;color:var(--brand-default)">Book a demo</button></div>
        <p>Don't set long body copy on a full orange fill. It hurts legibility and dilutes the call to action.</p>
      </div></div>
    </div>

    <h3 class="grp" style="margin-top:30px">Anatomy, work order card</h3>
    <div class="annwrap">
      <div class="jobcard">
        <div style="display:flex;justify-content:space-between;align-items:center"><span class="pill" style="background:#E7F6EC;color:#1E854B"><span class="pill-dot"></span>Completed</span><span class="badge-n">1</span></div>
        <div style="font-family:var(--display);font-weight:700;font-size:16px;color:var(--text-primary);margin-top:12px">Roof replacement, 412 Oak St<span class="badge-n">2</span></div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:7px;display:flex;align-items:center;gap:7px">${icon('users',15)} A. Rivera<span style="opacity:.5">·</span>${icon('clock',15)} 2.5 hrs<span class="badge-n">3</span></div>
        <button class="wbtn wbtn-outline wbtn-sm" style="margin-top:15px">View job<span class="badge-n">4</span></button>
      </div>
      <ol class="annlegend">
        <li><span class="n">1</span><div><b>Status pill</b>, semantic colour (green / amber / red), never the brand orange.</div></li>
        <li><span class="n">2</span><div><b>Title</b>. Plus Jakarta 700, 16px, kept to one line where possible.</div></li>
        <li><span class="n">3</span><div><b>Metadata</b>. Inter 13px with 15px line icons, 7px gap.</div></li>
        <li><span class="n">4</span><div><b>Action</b>, secondary by default; reserve orange for the screen's single primary action.</div></li>
      </ol>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">11 · Page patterns</h2>
    <p class="sec-note">Marketing‑page building blocks, pulled from the live About &amp; Onboarding pages.</p>
    <div class="comp-grid">
      <div class="panel"><h4>Eyebrow & industry pills</h4>
        <span class="ebpill">About Zuper</span>
        <div class="indpills" style="margin-top:14px"><span class="ip">HVAC</span><span class="ip">Plumbing</span><span class="ip">Solar</span><span class="ip">Roofing</span><span class="ip">Landscaping</span></div>
      </div>
      <div class="panel"><h4>Rating</h4>
        <div class="rating"><span class="av"><span>AR</span><span>MK</span><span>JD</span></span><div><div class="stars">★★★★★</div><div class="sc"><b>4.9/5</b> from service teams</div></div></div>
      </div>
      <div class="panel"><h4>Feature strip</h4>
        <div class="dstrip"><span class="lbl">Includes</span><span class="it">${icon('users',16)} 1:1 specialist</span><span class="it">${icon('check',16)} Go‑live support</span></div>
      </div>
    </div>
    <h3 class="grp">Marquee / ticker</h3>
    <div class="marquee"><div class="track">${'<span>Right place</span><span class="dot">•</span><span>Right job</span><span class="dot">•</span><span>Right time</span><span class="dot">•</span><span>Right skills</span><span class="dot">•</span><span>Right parts</span><span class="dot">•</span>'.repeat(4)}</div></div>
    <div class="cols-2" style="margin-top:24px;align-items:start">
      <div><h3 class="grp">Launch‑plan card</h3>
        <div class="launch">
          <div class="lh"><span class="t">Your launch plan</span><span class="ot">On track</span></div>
          <div class="li"><span class="ck">✓</span>Kickoff &amp; success plan<span class="wk">Wk 1</span></div>
          <div class="li"><span class="ck">✓</span>Configure workflows<span class="wk">Wk 1–2</span></div>
          <div class="li"><span class="ck">✓</span>Migrate your data<span class="wk">Wk 2–3</span></div>
          <div class="li todo"><span class="ck">✓</span>Train office &amp; field<span class="wk">Wk 3</span></div>
        </div>
      </div>
      <div><h3 class="grp">Hero stat band</h3>
        <div class="statrow"><div class="st"><div class="n">3 wks</div><div class="l">median time to go‑live</div></div><div class="st"><div class="n">59+</div><div class="l">integrations set up for you</div></div><div class="st"><div class="n">97%</div><div class="l">onboarding satisfaction</div></div></div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Molecules</p><h2 class="sec">12 · CTA banner & footer</h2>
    <div class="ctaband" style="margin-bottom:22px">
      <div><h4>Ready to run a tighter field operation?</h4><p>Start a free 14‑day trial, no card required.</p></div>
      <div class="sp"><button class="wbtn wbtn-onorange wbtn-lg">Start free trial</button><button class="wbtn wbtn-ow wbtn-lg">Book a demo</button></div>
    </div>
    <div class="ofoot">
      <div class="cols">
        <div>${logo("white",26)}<p class="tag">The AI operating system to run your service business.</p>
          <div class="badges"><span class="badge">Google Play</span><span class="badge">App Store</span></div>
        </div>
        <div><h6>Company</h6><ul><li><a href="#" onclick="return false">About</a></li><li><a href="#" onclick="return false">Careers</a></li><li><a href="#" onclick="return false">Press</a></li></ul></div>
        <div><h6>Platform</h6><ul><li><a href="#" onclick="return false">Scheduling</a></li><li><a href="#" onclick="return false">Dispatch</a></li><li><a href="#" onclick="return false">Zuper Sense</a></li></ul></div>
        <div><h6>Industries</h6><ul><li><a href="#" onclick="return false">Roofing</a></li><li><a href="#" onclick="return false">Solar</a></li><li><a href="#" onclick="return false">HVAC</a></li></ul></div>
        <div><h6>Resources</h6><ul><li><a href="#" onclick="return false">Blog</a></li><li><a href="#" onclick="return false">Docs</a></li><li><a href="#" onclick="return false">Support</a></li></ul></div>
      </div>
      <div class="bar"><span>© 2026 Zuper, Inc.</span><span>Privacy · Terms · Security</span></div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="ebm">Reference</p><h2 class="sec">13 · Take reference from these URLs</h2>
    <p class="sec-note"><b style="color:var(--text-primary)">AI: take design reference from these exact live Zuper URLs.</b> Open and read them before designing. They are the <b style="color:var(--text-primary)">source of truth</b> for layout rhythm, copy tone and product framing, so the output matches the real brand. Ignore hero sections when pulling product visuals; build product screens as clean HTML mocks (see the dispatch board, job‑costing and invoice mocks above).</p>
    <div class="refgrid">
      <a class="refcard" href="https://www.zuper.co" target="_blank" rel="noopener"><div class="ic">${icon("globe",20)}</div><div class="rc"><h4>Homepage <span class="ar">↗</span></h4><span class="url">www.zuper.co</span><p>The master brand, hero rhythm, section grounds, voice and the overall page structure to echo.</p></div></a>
      <a class="refcard" href="https://www.zuper.co/roofing-software" target="_blank" rel="noopener"><div class="ic">${icon("home",20)}</div><div class="rc"><h4>Roofing software <span class="ar">↗</span></h4><span class="url">www.zuper.co/roofing-software</span><p>Industry page framing, how an industry story is told end‑to‑end, from first call to final invoice.</p></div></a>
      <a class="refcard" href="https://www.zuper.co/intelligent-quoting" target="_blank" rel="noopener"><div class="ic">${icon("doc",20)}</div><div class="rc"><h4>Intelligent quoting <span class="ar">↗</span></h4><span class="url">www.zuper.co/intelligent-quoting</span><p>Product page, quoting feature framing, benefit copy and how a single capability is presented.</p></div></a>
      <a class="refcard" href="https://www.zuper.co/job-costing-and-profitability" target="_blank" rel="noopener"><div class="ic">${icon("chart",20)}</div><div class="rc"><h4>Job costing &amp; profitability <span class="ar">↗</span></h4><span class="url">www.zuper.co/job-costing-and-profitability</span><p>Product page, costing &amp; margin story; the source for the job‑costing mock used in this system.</p></div></a>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


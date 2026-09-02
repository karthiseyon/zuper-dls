/* ============ DECK (one system · three modes) ============ */
function buildDeck(){
  const L=SYS.find(s=>s.id==="deck-light").vars;
  stage.style.cssText=Object.entries(L).map(([k,v])=>`--${k}:${v}`).join(";")
    +`;--display:'Aptos Display','Aptos','Segoe UI',system-ui,sans-serif;--body:'Aptos','Segoe UI',system-ui,sans-serif;--c-canvas:#F8F5F2`
    +`;--hero-bg:linear-gradient(118deg,#FFFFFF,#FBF2EA 55%,#FBDFD0);--hero-ink:#191919;--hero-sub:#4B5563;--hero-kick:#FD5000;--chip-bg:#fff;--chip-ink:#191919;--chip-line:#E7E0D6`;

  const sw=(n,hex,d)=>`<div class="sw-card"><div class="sw-chip" style="background:${hex}${d?';box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)':''}"></div><div class="sw-body"><div class="sw-name">${n}</div><div class="sw-hex">${hex}</div></div></div>`;
  const ramp=a=>`<div class="swatches">${a.map(x=>sw(x[0],x[1],x[2])).join("")}</div>`;
  const top=`<div class="topbar" style="background:linear-gradient(90deg,#7E1C0B,#D43A14 55%,#F2864F)"></div>`;
  const obg=` style="background-image:linear-gradient(102deg,rgba(20,4,3,.32),transparent 60%),url(${ORANGE_BG})"`;
  const sbg=` style="background-image:linear-gradient(180deg,rgba(9,9,11,.30),rgba(9,9,11,.72)),url(${SENSE_BG})"`;
  const wm=m=>`<div class="slogo2">${logo(m==="white"?"dark":"white",16)}</div>`;
  /* nolog = drop the footer logo mark on content‑heavy slides so it never crowds the layout */
  const slide=(m,inner,cls,mini,nolog)=>{const bg=m==="orange"?obg:m==="dark"?sbg:"";return `<div class="dslide ${m}${cls?' '+cls:''}${mini?' has-mini':''}"${bg}>${m==="white"?top:""}${inner}${mini?`<img class="dmini" src="${mini}" alt="">`:""}${nolog?"":wm(m)}</div>`;};
  const fig=(m,cap,inner,cls,mini,nolog)=>`<div class="dfig">${slide(m,inner,cls,mini,nolog)}<div class="dcap">${cap}</div></div>`;
  const ilist=items=>`<ul class="dlist-c">${items.map(it=>`<li><span class="ci">${icon(it[0],16,1.7)}</span><span>${it[1]}</span></li>`).join("")}</ul>`;
  const olist=items=>`<ol class="dol">${items.map((it,i)=>`<li><span class="no">0${i+1}</span><span>${it}</span></li>`).join("")}</ol>`;
  const hbar=(m,rows)=>`<div class="hbar">${rows.map(r=>`<div class="row"><span class="lb">${r[0]}</span><span class="tr"><span class="fl" style="width:${r[1]}%"></span></span><span class="pc">${r[1]}%</span></div>`).join("")}</div>`;
  const iconRow=`<div class="iconset">${[["calendar","Schedule"],["pin","Dispatch"],["invoice","Invoice"],["card","Payments"],["users","Team"],["chart","Reports"],["camera","Capture"],["cpu","AI"],["bell","Alerts"],["truck","Fleet"]].map(x=>`<div class="it" style="color:#FD5000">${icon(x[0],24)}<span style="color:var(--text-secondary)">${x[1]}</span></div>`).join("")}</div>`;

  /* ---- layout builders ---- */
  const sTitle=(m,mini)=>fig(m,"Title slide",`<p class="deyebrow">Zuper for Roofing</p><h3 class="big">${m==="white"?'Welcome to the <span class="hl">Outcome Era.</span>':'The AI Operating System for Roofing'}</h3>`,null,mini);
  const sDivider=m=>fig(m,"Section divider",`<p class="deyebrow">Section 02</p><div class="dnum">02</div><h3 style="margin-top:8px">Why field service is changing</h3>`);
  const sAgenda=m=>fig(m,"Agenda (numbered)",`<p class="deyebrow">Agenda</p><h3>What we'll cover</h3>${olist(["Intros","Challenges","Why Zuper?","Demo","Questions & next steps"])}`,null,null,true);
  const sContent=(m,mini)=>fig(m,"Content, bullets",`<p class="deyebrow">The platform</p><h3>From first call to final invoice</h3>${ilist([["calendar","Smart scheduling & dispatch"],["pin","Mobile‑first field app"],["invoice","Instant invoicing & payments"]])}`,null,mini,true);
  const DISP=`<div class="pscreen"><div class="pscreen-hd"><span class="d"></span><span class="d"></span><span class="d"></span><span class="pt">Dispatch board</span></div><div class="pscreen-bd disp"><div class="jr"><div style="flex:1"><div class="nm">Roof replacement</div><div class="meta">412 Oak St · A. Rivera</div></div><span class="pill" style="background:#E7F6EC;color:#1E854B"><span class="pill-dot"></span>Scheduled</span></div><div class="jr"><div style="flex:1"><div class="nm">Gutter install</div><div class="meta">88 Pine Rd · M. Khan</div></div><span class="pill" style="background:#FEF3DC;color:#A66A00"><span class="pill-dot"></span>En route</span></div><div class="jr"><div style="flex:1"><div class="nm">Inspection</div><div class="meta">5 Elm Ct · J. Doe</div></div><span class="pill" style="background:#F2F0EC;color:#666"><span class="pill-dot"></span>Queued</span></div></div></div>`;
  const sCheck=fig("white","Content, split + product",`<div class="txt"><p class="deyebrow">Scheduling &amp; Dispatch</p><h3>Assign the right crew in seconds</h3>${ilist([["calendar","Smart dispatch board"],["users","Match skills to the job"]])}</div><div class="imgp">${DISP}</div>`,"split",null,true);
  const sStat=m=>fig(m,"Stat",`<p class="deyebrow">Outcome</p><div class="dstat"${m==="white"?' style="color:#FD5000"':''}>31%</div><div class="dbody" style="opacity:1;font-weight:700;margin-top:8px">fewer truck‑rolls in the first quarter</div>`);
  const sBignum=m=>fig(m,"Big‑number grid",`<p class="deyebrow">The impact</p><h3 style="font-size:24px">Two months in</h3><div class="dbig"><div><div class="n">4×</div><div class="l">premium sales</div></div><div><div class="n">98%</div><div class="l">first‑time fix</div></div><div><div class="n">2 mo</div><div class="l">to value</div></div></div>`);
  const sData=m=>fig(m,"Data, bar chart",`<p class="deyebrow">Zuper Sense insights · 30 days</p><h3 style="font-size:23px">What roofers ask, ranked</h3>${hbar(m,[["Sales performance",25],["Where's the money",18],["A person, by name",15],["Build a report",13]])}`,null,null,true);
  const sCompare=m=>fig(m,"Comparison, before/after",`<p class="deyebrow">Before & after</p><h3 style="font-size:22px">From patchwork to one platform</h3><div class="dsplit"><div class="col" style="background:${m==='white'?'#F5F5F5':'rgba(255,255,255,.14)'}"><div class="h" style="opacity:.7">Before</div>${ilist([["clock","Spreadsheets + CRM"],["camera","Photos elsewhere"]])}</div><div class="col" style="background:${m==='white'?'#FFF1EA':'rgba(255,255,255,.2)'}"><div class="h" style="color:${m==='white'?'#FD5000':'#fff'}">After</div>${ilist([["calendar","One dispatch board"],["check","Guided workflows"]])}</div></div>`,null,null,true);
  const sTimeline=m=>fig(m,"Timeline",`<p class="deyebrow">Rollout</p><h3 style="font-size:22px">Live in two months</h3><div class="dtl"><div class="m"><span class="dot"></span><div><div class="t">Week 1. Kickoff</div><div class="d">Workflows configured</div></div></div><div class="m"><span class="dot"></span><div><div class="t">Week 4. Go live</div><div class="d">Board replaces the spreadsheet</div></div></div><div class="m"><span class="dot"></span><div><div class="t">Month 2. Scale</div><div class="d">4× premium sales</div></div></div></div>`);
  const s2col=m=>fig(m,"Two‑column",`<p class="deyebrow">The shift</p><h3 style="font-size:22px">Stop running a Frankenstein stack</h3><div class="d2col"><div><div class="h">The old way</div><p>A patchwork of tools forces your team to do the heavy lifting between systems.</p></div><div><div class="h">The Zuper way</div><p>One AI system runs operations, thinks ahead and acts in the field.</p></div></div>`,null,null,true);
  const sQuote=m=>fig(m,"Quote",`<p class="deyebrow">Customer · Maven Roofing</p><div class="dquote">“One platform replaced our multiple roofing tools.”</div><div style="margin-top:14px"><div style="font-weight:700;font-size:15px">Maven Roofing</div><div style="font-size:13px;opacity:.78">Modernized operations with Zuper</div></div>`);
  const sSense=()=>fig("dark","Zuper Sense, the only dark slide",`<p class="deyebrow">Zuper Sense</p><h3>The AI intelligence layer</h3>${ilist([["bell","Monitor, always‑on sensing"],["chart","Predict, demand & churn"],["cpu","Recommend, next‑best actions"],["search","Analyze, ranked insights"]])}`,null,null,true);
  const sClose=(m,mini)=>fig(m,"Closing",`<p class="deyebrow">Thank you</p><h3 class="big" style="margin-top:auto">Let's get to the demo.</h3><div class="dbody" style="opacity:1;font-weight:700;margin-top:6px">zuper.co</div>`,null,mini);
  /* full-bleed photo grounds */
  const photoSlide=(bg,grad,cap,inner)=>`<div class="dfig"><div class="dslide dark photo" style="background-image:${grad},url(${bg})">${inner}${wm("dark")}</div><div class="dcap">${cap}</div></div>`;
  const sBreaker=()=>photoSlide(BREAKER_BG,
    "linear-gradient(180deg,rgba(20,4,3,.16) 0%,rgba(20,4,3,.06) 34%,rgba(20,4,3,.82) 100%)",
    "Section breaker, full‑bleed photo",
    `<div style="margin-top:auto"><p class="deyebrow" style="color:#FFD9C9">The shift</p><h3 class="big" style="margin-top:8px">Welcome to the Outcome Era.</h3><div class="dbody" style="opacity:1;font-weight:600;margin-top:10px;max-width:30ch">The question is no longer “should we use AI?” It's “what does it actually deliver?”</div></div>`);
  const glassGrad="linear-gradient(90deg,rgba(7,11,20,.94) 0%,rgba(7,11,20,.80) 30%,rgba(7,11,20,.34) 50%,rgba(7,11,20,0) 68%),linear-gradient(180deg,rgba(7,11,20,.34),transparent 24%)";
  const sGlass=()=>`<div class="dfig"><div class="dslide dark photo glass" style="background-image:${glassGrad},url(${GLASS_BG})">
       <div class="ghead"><h3 style="margin:0">Zuper Glass</h3><span class="gpill">V2 Beta in Q3</span></div>
       <div class="dbody gsub">Smart glasses for the field crew, paired with your phone and connected to Zuper.</div>
       ${ilist([["mic","Voice activation, hands‑free"],["camera","Photo & video capture, phone‑free"],["check","AI checklists for field docs"],["cpu","Field Agent on your glasses"]])}
       </div><div class="dcap">Zuper Glass, full‑bleed product slide</div></div>`;

  /* layout library (one of each, modes varied) */
  const layouts=[sTitle("orange",GIF_A),sTitle("white"),sBreaker(),sDivider("orange"),sAgenda("white"),sContent("white",GIF_B),sCheck,sStat("orange"),sBignum("orange"),sData("white"),sCompare("white"),sTimeline("orange"),s2col("white"),sQuote("white"),sSense(),sGlass(),sClose("white",GIF_C)].join("");
  /* the rule, both ways */
  const variantA=[sTitle("orange"),sAgenda("white"),sContent("white"),sStat("white"),sSense(),sClose("orange")].join("");
  const variantB=[sTitle("white"),s2col("orange"),sCompare("orange"),sTimeline("orange"),sSense(),sClose("white")].join("");
  const vhead=(t,a,b)=>`<div class="vhead"><span class="vt">${t}</span><span class="vtiles"><i style="background:${a}"></i><span class="varr">then</span><i style="background:${b}"></i></span></div>`;

  /* ---- atoms ---- */
  const mini=(m,inner)=>`<div class="dslide ${m} amini">${inner}</div>`;
  const atoms=`<div class="deckatoms">
    <div class="ac2"><span class="lbl">Eyebrow</span><p style="font-family:'Aptos','Segoe UI',sans-serif;font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#FD5000;margin:0">Q3 Business Review</p></div>
    <div class="ac2"><span class="lbl">Title / 42 · Section / 24</span><div style="font-family:'Aptos Display','Aptos',sans-serif;font-weight:700;font-size:30px;letter-spacing:-.02em;color:#1B1919;line-height:1">Run your business</div><div style="font-family:'Aptos Display','Aptos',sans-serif;font-weight:700;font-size:18px;color:#1B1919;margin-top:8px">Section heading</div></div>
    <div class="ac2"><span class="lbl">Body</span><p style="font-family:'Aptos','Segoe UI',sans-serif;font-size:14px;color:#4B5563;line-height:1.5;margin:0">One platform for the whole job, from first call to final invoice.</p></div>
    <div class="ac2"><span class="lbl">Bulleted list (line icons)</span>${mini("white",ilist([["calendar","Scheduling & dispatch"],["invoice","Instant invoicing"]]))}</div>
    <div class="ac2"><span class="lbl">Numbered list</span>${mini("white",olist(["Intros","Challenges"]))}</div>
    <div class="ac2"><span class="lbl">Stat number</span><div style="font-family:'Aptos Display','Aptos',sans-serif;font-weight:700;font-size:54px;color:#FD5000;letter-spacing:-.03em;line-height:1">31%</div></div>
    <div class="ac2"><span class="lbl">Pull‑quote</span><div style="font-family:'Aptos Display','Aptos',sans-serif;font-weight:700;font-size:20px;color:#1B1919;line-height:1.2;letter-spacing:-.01em">“Paid for itself in a quarter.”</div></div>
    <div class="ac2"><span class="lbl">Bar chart</span>${mini("white",hbar("white",[["Sales",25],["Money",18]]))}</div>
    <div class="ac2"><span class="lbl">Pill / tag</span><span class="dpill">Field Service Intelligence</span></div>
    <div class="ac2"><span class="lbl">Top accent bar</span><div class="atopbar"></div></div>
    <div class="ac2"><span class="lbl">Footer logo mark</span><div style="margin-top:6px">${logo("dark",18)}</div></div>
  </div>`;

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="kicker" style="font-family:'Aptos',sans-serif">Presentation system · PowerPoint</p>
      <h1>Deck</h1>
      <p class="lede">One deck, one contrast rule, built like a system: foundations, atoms and slide layouts. Set in <b style="color:#191919">Aptos Display</b> &amp; <b style="color:#191919">Aptos</b>. <b style="color:#191919">Primary: a white cover with orange interiors. Secondary: an orange cover with white interiors. Dark is used only for Zuper Sense.</b></p>
      <div class="chips"><span class="chip">Aa Aptos Display · titles</span><span class="chip">Aa Aptos · body</span><span class="chip">PowerPoint · 16:9</span></div>
      <div class="hero-art"><div class="float ha-fan">
        <div class="sl s1"><div class="e">Interior · orange</div><div class="t">From first call to final invoice</div></div>
        <div class="sl s2"><div class="e">Interior · orange</div><div class="t">Run your service business</div></div>
        <div class="sl s3"><div class="e">Cover · white · primary</div><div class="t">The AI operating system</div></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Template</p><h2 class="sec">Download the deck template</h2>
    <p class="sec-note">The whole system as one PowerPoint file: every layout on this page, at full size, with placeholder copy. Slides 1&ndash;18 run the <b style="color:var(--text-primary)">primary</b> scheme (white cover, orange interiors); slides 19&ndash;36 run the <b style="color:var(--text-primary)">secondary</b> one (orange cover, white interiors). Delete the half you don't need, then duplicate the layouts you do. <b style="color:var(--text-primary)">Every shape is editable</b>, so a four-up team row drops to three. The rules behind it are below. Prefer the browser? Open the <a href="templates/deck-master/DeckMaster.dc.html" style="color:var(--color-primary);font-weight:600">HTML master</a>.</p>
    ${deckTemplateCard()}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · The rule</p><h2 class="sec">One deck. One contrast.</h2>
    <p class="sec-note"><b style="color:var(--text-primary)">Choose the cover's colour, and every interior slide takes the opposite.</b> The <b style="color:var(--text-primary)">primary</b> option is a white cover with orange interiors; the <b style="color:var(--text-primary)">secondary</b> option flips it, an orange cover with white interiors. Never mix orange and white interiors in one deck. <b style="color:var(--text-primary)">Dark is reserved exclusively for Zuper Sense.</b></p>
    <div class="modecards">
      <div class="modecard"><div class="sw" style="background:#fff;border:1px solid var(--border-default)"></div><h5>White · primary cover</h5><p>The default cover; interiors then run orange.</p></div>
      <div class="modecard"><div class="sw" style="background-image:linear-gradient(102deg,#DB3602,#FD5000)"></div><h5>Orange · secondary cover</h5><p>The flipped cover; interiors then run white.</p></div>
      <div class="modecard"><div class="sw" style="background:#161616"></div><h5>Dark. Sense only</h5><p>Used exclusively for Zuper Sense content.</p></div>
    </div>
    <div class="rulebar" style="font-size:15px">
      <span class="tag" style="background:#fff;color:#1B1919;border:1px solid var(--border-default)">White cover</span><span class="arr">→</span><span class="tag" style="background:#FD5000;color:#fff">All interiors orange</span><span style="opacity:.55;font:600 11px/1 'Geist Mono',monospace;letter-spacing:.08em;text-transform:uppercase">Primary</span>
      <span style="opacity:.4">·</span>
      <span class="tag" style="background:#FD5000;color:#fff">Orange cover</span><span class="arr">→</span><span class="tag" style="background:#fff;color:#1B1919;border:1px solid var(--border-default)">All interiors white</span><span style="opacity:.55;font:600 11px/1 'Geist Mono',monospace;letter-spacing:.08em;text-transform:uppercase">Secondary</span>
      <span style="opacity:.4">·</span>
      <span class="tag" style="background:#161616;color:#fff">Sense only</span><span class="arr">→</span><span class="tag" style="background:#161616;color:#fff">Dark</span>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Foundations</p><h2 class="sec">Palette, type &amp; icons</h2>
    <h3 class="grp">Orange (brand)</h3>${ramp([["orange/300","#FFB088"],["orange/400","#FF8A4C"],["orange/500","#FD5000"],["orange/600","#DB3602"],["orange/700","#B42E00"]])}
    <h3 class="grp">Neutral</h3>${ramp([["white","#FFFFFF"],["paper","#F8F5F0"],["slate","#6E675F"],["ink","#1B1919"],["black","#000000"]])}
    <h3 class="grp">Dark. Sense only</h3>${ramp([["bg","#09090B",1],["surface","#141417",1],["text","#FAFAFA"],["orange‑on‑dark","#FF8B5A"]])}
    <h3 class="grp">Type. Aptos</h3>
    <div class="type-row"><div class="tag">Display / 48</div><div class="demo" style="font-family:'Aptos Display','Aptos',sans-serif;font-weight:700;font-size:48px;letter-spacing:-.02em;color:var(--text-primary)">Run your service business</div></div>
    <div class="type-row"><div class="tag">Body / 15</div><div class="demo" style="font-family:'Aptos','Segoe UI',sans-serif;font-size:15px;color:var(--text-secondary);max-width:60ch;line-height:1.55">Aptos is Microsoft Office's native typeface, so decks built here look the same in PowerPoint on any machine.</div></div>
    <h3 class="grp">Icons, single‑weight outline</h3>${iconRow}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · Atoms</p><h2 class="sec">Slide building blocks</h2>
    <p class="sec-note">The elements every slide is composed from, set in Aptos, with line icons and one orange accent. <b style="color:var(--text-primary)">The footer logo mark sits in a clear bottom corner, but on content‑heavy slides, drop it to avoid clutter.</b></p>
    ${atoms}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">05 · Layouts</p><h2 class="sec">Slide layouts</h2>
    <p class="sec-note">↔ Scroll the library. Seventeen 16:9 layouts, title, full‑bleed section breaker, divider, agenda, content, split, stat, big‑number grid, data, comparison, timeline, two‑column, quote, Sense, Zuper Glass and closing. <b style="color:var(--text-primary)">On content‑heavy slides the footer logo mark is dropped</b> so it never crowds the layout.</p>
    <div class="slidewrap">${layouts}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">06 · In practice</p><h2 class="sec">The rule, both ways</h2>
    <p class="sec-note">The same story run as two valid decks, primary first. The Zuper Sense slide stays dark in both.</p>
    ${vhead("Primary · White cover → orange interiors","#FFFFFF","#FD5000")}
    <div class="slidewrap">${variantB}</div>
    ${vhead("Secondary · Orange cover → white interiors","#FD5000","#FFFFFF")}
    <div class="slidewrap">${variantA}</div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


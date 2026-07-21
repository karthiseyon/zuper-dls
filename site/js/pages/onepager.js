/* ===== One‑pager (custom) ===== */
function buildOnePager(){
  stage.style.cssText=chromeCss();

  const foot=n=>`<div class="pfoot"><div class="fl">${logo("dark",13)}<span class="fdiv"></span><span class="cmk">SUMMIT ROOFING</span></div><span class="pg">zuper.co · <b>0${n}</b> / 05</span></div>`;

  const coverPage=`<div class="page cover" style="background-image:linear-gradient(104deg,rgba(20,4,3,.50),rgba(20,4,3,.04) 62%),url(${ORANGE_BG})">
    <div class="pad">
      <div class="cobrand-sm">${logo("white",17)}<span class="div"></span><span class="clogo">SUMMIT ROOFING</span></div>
      <p class="cv-tag">Customer story · Roofing</p>
      <div style="margin-top:auto">
        <div class="cv-h">From spreadsheets to scale<span class="sub">How Summit Roofing runs a smarter operation with Zuper</span></div>
        <p class="cp">Summit Roofing &amp; Construction is a family‑owned roofer across the region, residential &amp; commercial.</p>
        <p class="cp">Running production on spreadsheets and a legacy CRM, they knew something had to change. That's when they found Zuper.</p>
      </div>
    </div></div>`;

  const challengePage=`<div class="page"><div class="pad">
    <div class="psech"><h6>The Challenge</h6><span class="ru"></span></div>
    <p class="ri">Before Zuper, Summit relied on a legacy CRM, and it created as many problems as it solved.</p>
    <p class="ri"><b>Scheduling was flying blind.</b> The dispatch board showed a job existed, but not its size, pitch or status, so the team kept a separate spreadsheet.</p>
    <p class="ri"><b>Upsells were left on the table.</b> Reps filtered out premium options before presenting them, so high‑margin products were rarely sold.</p>
    <p class="ri"><b>Field docs were scattered.</b> Notes lived in the CRM, photos in a separate app, neither talked to the other.</p>
    <p class="ri"><b>Finance ran on friction.</b> The manager drove to the bank daily just to deposit checks.</p>
    ${foot(2)}
  </div></div>`;

  const enabledPage=`<div class="page"><div class="pad">
    <div class="psech"><h6>What Zuper Enabled</h6><span class="ru"></span></div>
    <div class="ftile"><span class="mk">${icon('invoice',14)}</span><div><div class="t">Intelligent Quoting</div><div class="d">Every quote now offers good‑better‑best automatically, on track for a 4× lift in premium sales.</div></div></div>
    <div class="ftile"><span class="mk">${icon('pin',14)}</span><div><div class="t">Smart Dispatch Board</div><div class="d">Job size, pitch and status at a glance, the scheduling spreadsheet is gone for good.</div></div></div>
    <div class="ftile"><span class="mk">${icon('check',14)}</span><div><div class="t">Guided Field Workflows</div><div class="d">New hires run jobs perfectly within weeks, nothing missed, everything documented.</div></div></div>
    <div class="ftile"><span class="mk">${icon('card',14)}</span><div><div class="t">Zuper Pay &amp; AI Expenses</div><div class="d">Mobile check deposit and an AI receipt scanner replaced the daily bank run.</div></div></div>
    ${foot(3)}
  </div></div>`;

  const trow=(a,b,c)=>`<tr><td class="a">${a}</td><td>${b}</td><td class="a">${c}</td></tr>`;
  const impactPage=`<div class="page"><div class="pad">
    <div class="psech"><h6>The Impact</h6><span class="ru"></span></div>
    <table class="pt"><thead><tr><th>Area</th><th>Before Zuper</th><th>After Zuper</th></tr></thead><tbody>
      ${trow("Premium sales","Rarely upsold","On track for a 4× increase")}
      ${trow("Scheduling","Spreadsheet + CRM","One smart dispatch board")}
      ${trow("Field docs","CRM + photo app","Unified guided workflows")}
      ${trow("New‑hire ramp","Needs experience","Running jobs in weeks")}
      ${trow("Deposits","Daily bank trips","Mobile via Zuper Pay")}
      ${trow("Expenses","Manual receipts","AI‑powered scanner")}
    </tbody></table>
    ${foot(4)}
  </div></div>`;

  const resultsPage=`<div class="page"><div class="pad">
    <div class="psech"><h6>What's Next</h6><span class="ru"></span></div>
    <p class="ri">Zuper Connect is rolling out to the whole team, call masking, AI call summaries and after‑hours response. QuickBooks integration and an instant‑estimate website widget are next.</p>
    <div class="pquote"><div class="q">Your software blows any software out of the water. For roofing, this is just the best.</div><div class="a">. Jordan Reyes, Office Manager</div></div>
    <div class="tcard-sm"><div class="ph" style="background:url(${CHRIS_IMG}) center 14%/cover"></div><div><div class="q">"It's crazy what's been possible in just two months."</div><div class="a"><b>Jordan Reyes</b> · Office Manager · Summit Roofing</div></div></div>
    ${foot(5)}
  </div></div>`;

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Case study · one‑pager system</p>
      <h1>Case Study</h1>
      <p class="lede">Zuper's co‑branded customer story, a print‑ready document, not a slide. An orange‑gradient cover opens it; white body pages carry orange section rules, run‑in subheads, pull‑quotes, a before/after table and a testimonial. Shown live with the Summit Roofing story.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>brand #FD5000</span>
        <span class="chip">Aa Plus Jakarta · headings</span>
        <span class="chip">Aa Inter · body</span>
        <span class="chip">co‑branded · A4</span>
      </div>
      <div class="hero-art"><div class="float ha-doc">
        <div class="rule"></div>
        <div class="lk">ZUPER × SUMMIT ROOFING</div>
        <div class="l" style="width:92%"></div><div class="l" style="width:80%"></div><div class="l" style="width:88%"></div><div class="l" style="width:64%"></div>
        <div class="m"><b>92.4%</b><span>on‑time jobs<br>after Zuper</span></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Anatomy</p><h2 class="sec">The building blocks</h2>
    <p class="sec-note">The components every case study is composed from. Headings &amp; quotes are Plus Jakarta; body is Inter; one orange does the accenting. Line icons throughout, single weight; photos are filled.</p>
    <div class="anat">
      <div class="ac">
        <p class="lbl">Section heading + rule</p>
        <div class="cs-sech"><h4>The Challenge</h4><span class="rule"></span></div>
        <p class="runin" style="margin:14px 0 0"><b>Run‑in subhead.</b> A bold orange lead‑in opens the paragraph, then black body text continues the thought without a line break.</p>
      </div>
      <div class="ac">
        <p class="lbl">Pull‑quote</p>
        <div class="pullq"><div class="q">Before, the sales guys wouldn't have even offered it, then the homeowner said, "that's only a little more a month."</div><div class="a"><b>Jordan Reyes</b>, Office Manager</div></div>
      </div>
      <div class="ac">
        <p class="lbl">Callout box</p>
        <div class="callout"><span class="mk"></span><div class="bd"><p><b>The shift:</b> Zuper doesn't patch holes. It replaces the patchwork entirely with one system that runs operations end to end.</p></div></div>
      </div>
      <div class="ac">
        <p class="lbl">Stat callout</p>
        <div class="statbig"><div class="n">4×</div><div class="l">premium product sales, driven by removing friction, not hiring</div></div>
      </div>
      <div class="ac">
        <p class="lbl">Metric + sparkline</p>
        <div class="ametk">First‑time fix rate</div><div class="ametn">92.4%</div>
        <div class="aspark"><i style="height:42%"></i><i style="height:50%"></i><i style="height:46%"></i><i style="height:64%"></i><i style="height:72%"></i><i class="lead" style="height:100%"></i></div>
      </div>
      <div class="ac">
        <p class="lbl">Module tags</p>
        <div class="atagset"><span class="tg">Intelligent Quoting</span><span class="tg">Dispatch Board</span><span class="tg">Guided Workflows</span><span class="tg grey">Zuper Pay</span><span class="tg grey">AI Expenses</span></div>
      </div>
      <div class="ac">
        <p class="lbl">Before / after table</p>
        <div style="overflow-x:auto"><table class="cstable"><thead><tr><th>Area</th><th>Before</th><th>After</th></tr></thead><tbody>
          <tr><td class="area">Scheduling</td><td>Spreadsheet + CRM</td><td class="aft">One dispatch board</td></tr>
          <tr><td class="area">Expenses</td><td>Manual receipts</td><td class="aft">AI scanner</td></tr>
        </tbody></table></div>
      </div>
      <div class="ac">
        <p class="lbl">Feature tile</p>
        <div class="ftile-lg"><span class="mk">${icon('invoice',18)}</span><div><div class="t">Intelligent Quoting</div><div class="d">Auto good‑better‑best packages so every homeowner sees the premium option.</div></div></div>
      </div>
      <div class="ac"><p class="lbl">Line icons · single weight</p><div class="iconset" style="grid-template-columns:repeat(auto-fill,minmax(74px,1fr))">${[["calendar","Schedule"],["pin","Dispatch"],["invoice","Invoice"],["card","Pay"],["check","Done"],["cpu","AI"]].map(x=>`<div class="it" style="color:var(--brand-default);padding:13px 8px">${icon(x[0],22)}<span style="color:var(--text-secondary);font-size:10.5px">${x[1]}</span></div>`).join("")}</div></div>
      <div class="ac"><p class="lbl">Metrics grid</p><div class="cs-grid2" style="gap:12px"><div class="statbig" style="padding:16px"><div class="n" style="font-size:32px">4×</div><div class="l">premium sales</div></div><div class="statbig" style="padding:16px;background:var(--surface-subtle)"><div class="n" style="font-size:32px;color:#191919">98%</div><div class="l">first‑time fix</div></div></div></div>
      <div class="ac"><p class="lbl">Customer profile</p><div class="cprofile"><span class="clogo" style="color:#191919;border-color:#E7E0D6">SUMMIT ROOFING</span><div style="font-size:13px;color:var(--text-secondary);line-height:1.5"><b style="color:var(--text-primary)">Summit Roofing</b><br>Residential &amp; commercial · 40‑person crew</div></div></div>
      <div class="ac" style="grid-column:1/-1">
        <p class="lbl">Testimonial + co‑brand lockup</p>
        <div class="tcard">
          <div class="photo" style="background:#3a352f url(${CHRIS_IMG}) center 16%/cover"></div>
          <div class="body">
            <p>“It's crazy to think what's been possible in two months. Your software blows any software out of the water, for roofing, this is just the best.”</p>
            <div class="who"><b>Jordan Reyes</b>, Office Manager</div>
            <div style="margin-top:14px"><span class="cobrand-foot">${logo("dark",20)}<span class="div"></span><span class="clogo">SUMMIT ROOFING</span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">The deliverable</p><h2 class="sec">A 5‑page co‑branded story</h2>
    <p class="docnote">↔ scroll the pages · A4 · Zuper + client lockup on every page</p>
    <div class="docstrip">${coverPage}${challengePage}${enabledPage}${impactPage}${resultsPage}</div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


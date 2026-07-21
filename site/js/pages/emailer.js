/* ============ EMAILER ============ */
function buildEmailer(){
  stage.style.cssText=chromeCss();

  const DISP="'Plus Jakarta Sans',system-ui,sans-serif",BODY="'Inter',system-ui,sans-serif",MONO="'Geist Mono',ui-monospace,monospace";
  const GRAD="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)",INK="#191919",L="assets/logos/";

  const header=`<div style="background:${GRAD};padding:28px 40px"><img src="${L}zuper-horizontal-white.png" alt="Zuper" style="height:28px;width:auto;display:block"></div>`;
  const hero=`<div style="padding:36px 40px">
      <div style="font-family:${MONO};font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#FD5000;margin-bottom:14px">Product update</div>
      <h1 style="font-family:${DISP};font-weight:800;font-size:34px;line-height:1.1;letter-spacing:-.02em;margin:0 0 16px">Win the quote before you leave the driveway</h1>
      <p style="font-family:${BODY};font-size:16px;line-height:1.6;color:#4B5563;margin:0 0 24px">Intelligent Quoting now builds a branded good / better / best estimate from your roof measurements, so every homeowner sees the premium option.</p>
      <a href="#" style="display:inline-block;background:#FD5000;color:#fff;text-decoration:none;font-family:${BODY};font-weight:600;font-size:15px;padding:13px 26px;border-radius:8px">See what's new →</a></div>`;
  const featureRow=`<div style="padding:0 40px"><div style="border-top:1px solid #E7E0D6;padding:22px 0"><div style="font-family:${DISP};font-weight:700;font-size:17px;margin-bottom:5px;color:${INK}">Tiered packages, automatically</div><div style="font-family:${BODY};font-size:14px;line-height:1.55;color:#4B5563">Every quote presents three tiers, no judgment call for the rep.</div></div></div>`;
  const statBanner=`<div style="padding:18px 40px"><div style="background:#FFE7DC;border-radius:12px;padding:22px 24px;display:flex;align-items:center;gap:18px"><span style="font-family:${DISP};font-weight:800;font-size:40px;letter-spacing:-.03em;color:#FD5000;line-height:1">42%</span><span style="font-family:${BODY};font-size:14px;line-height:1.5;color:${INK}">gross margin on a recent $41k insurance job, full scope captured the first time.</span></div></div>`;
  const footer=`<div style="background:#FBF2EA;border-top:1px solid #F0EAE1;padding:28px 40px"><img src="${L}zuper-horizontal.png" alt="Zuper" style="height:20px;width:auto;display:block;margin-bottom:14px"><p style="font-family:${BODY};font-size:13px;line-height:1.55;color:#7A7268;margin:0 0 14px">The AI operating system for field service, from first call to final invoice.</p><div style="margin-bottom:14px">${["LinkedIn","X","YouTube"].map(s=>`<a href="#" style="display:inline-block;font-family:${MONO};font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#7A7268;text-decoration:none;margin-right:16px">${s}</a>`).join("")}</div><div style="font-family:${MONO};font-size:11px;color:#7A7268">Zuper, Inc. · You're receiving this because you subscribed. <span style="text-decoration:underline">Unsubscribe</span> · <span style="text-decoration:underline">Manage preferences</span></div></div>`;

  /* additional reusable blocks */
  /* product screen, built in HTML (never a background image) */
  const screen=`<div style="background:#fff">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:15px 20px;border-bottom:1px solid #F0EAE1">
      <div style="display:flex;align-items:center;gap:10px"><img src="${L}zuper-logomark.png" alt="" style="height:18px;width:auto;display:block"><span style="font-family:${DISP};font-weight:700;font-size:14px;color:${INK}">Intelligent Quoting</span></div>
      <span style="font-family:${MONO};font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#A66A00;background:#FEF3DC;padding:5px 11px;border-radius:999px">Draft</span>
    </div>
    <div style="padding:18px 20px">
      <div style="font-family:${MONO};font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#7A7268;margin-bottom:5px">Summit Roofing · 2,400 sq ft</div>
      <div style="font-family:${DISP};font-weight:800;font-size:20px;color:${INK};letter-spacing:-.02em;margin-bottom:16px">Roof replacement, asphalt</div>
      <div style="display:flex;gap:12px">${[["Good","$9,200","Architectural shingles",false],["Better","$11,800","+ synthetic underlayment",true],["Best","$14,500","+ 50-yr workmanship warranty",false]].map(t=>`<div style="flex:1;border:1.5px solid ${t[3]?"#FD5000":"#E7E0D6"};background:${t[3]?"#FFF6F1":"#fff"};border-radius:12px;padding:14px 12px"><div style="font-family:${MONO};font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:${t[3]?"#FD5000":"#7A7268"};margin-bottom:8px">${t[0]}</div><div style="font-family:${DISP};font-weight:800;font-size:21px;color:${INK};letter-spacing:-.02em">${t[1]}</div><div style="font-family:${BODY};font-size:11px;line-height:1.4;color:#7A7268;margin-top:6px">${t[2]}</div></div>`).join("")}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:18px;padding-top:15px;border-top:1px solid #F0EAE1">
        <div><span style="font-family:${BODY};font-size:12px;color:#7A7268">Est. gross margin</span><span style="font-family:${DISP};font-weight:800;font-size:16px;color:#1E854B;margin-left:8px">42%</span></div>
        <span style="font-family:${BODY};font-weight:600;font-size:13px;color:#fff;background:#FD5000;padding:10px 18px;border-radius:8px">Send quote →</span>
      </div>
    </div>
  </div>`;
  const shot=`<div style="padding:6px 40px 4px"><div style="border:1px solid #E7E0D6;border-radius:12px;overflow:hidden"><div style="background:#F6F1EB;padding:10px 14px;border-bottom:1px solid #E7E0D6">${["#E0584A","#E9B23C","#56B36B"].map(c=>`<span style="width:9px;height:9px;border-radius:50%;background:${c};display:inline-block;margin-right:6px"></span>`).join("")}</div>${screen}</div></div>`;
  const twoUp=`<div style="padding:6px 40px 4px"><div style="display:flex;gap:16px">${[["Faster quotes","Good / better / best in one tap, built straight from the measurements."],["Bigger margins","See the profit on a job before you ever commit a crew to it."]].map(c=>`<div style="flex:1;background:#FBF7F2;border:1px solid #E7E0D6;border-radius:12px;padding:20px"><div style="font-family:${MONO};font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#FD5000;margin-bottom:10px">Zuper</div><div style="font-family:${DISP};font-weight:700;font-size:16px;color:${INK};margin-bottom:5px">${c[0]}</div><div style="font-family:${BODY};font-size:13px;line-height:1.5;color:#4B5563">${c[1]}</div></div>`).join("")}</div></div>`;
  const checklist=`<div style="padding:6px 40px 8px"><div style="font-family:${MONO};font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#FD5000;margin-bottom:12px">What you get</div>${["Scheduling &amp; dispatch","Intelligent quoting","Job costing &amp; invoicing"].map(x=>`<div style="padding:7px 0;font-family:${BODY};font-size:15px;color:${INK}"><span style="color:#FD5000;font-weight:800;font-size:16px;margin-right:12px">&check;</span>${x}</div>`).join("")}</div>`;
  const quote=`<div style="padding:10px 40px"><div style="background:#FBF7F2;border-left:3px solid #FD5000;border-radius:0 12px 12px 0;padding:22px 26px"><div style="font-family:${DISP};font-weight:800;font-size:42px;color:#FD5000;line-height:.5;margin-bottom:6px">&ldquo;</div><p style="font-family:${DISP};font-weight:600;font-size:18px;line-height:1.4;color:${INK};margin:0 0 14px">We win more jobs on the first visit, the quote is done before we pack up the ladder.</p><div style="font-family:${BODY};font-size:13px;color:#7A7268">Dana R. · Operations Lead, Summit Roofing</div></div></div>`;
  const ctaBand=`<div style="padding:14px 40px"><div style="background:${GRAD};border-radius:14px;padding:30px 28px;text-align:center"><div style="font-family:${DISP};font-weight:800;font-size:24px;line-height:1.15;color:#fff;margin-bottom:16px">See it on your own jobs</div><a href="https://www.zuper.co/demo" style="display:inline-block;background:#191919;color:#fff;text-decoration:none;font-family:${BODY};font-weight:600;font-size:15px;padding:13px 28px;border-radius:8px">Book a demo →</a></div></div>`;
  const button=`<div style="padding:4px 40px 30px;text-align:center"><a href="https://www.zuper.co/demo" style="display:inline-block;background:#FD5000;color:#fff;text-decoration:none;font-family:${BODY};font-weight:600;font-size:15px;padding:14px 34px;border-radius:8px">Book a demo →</a></div>`;
  const divider=`<div style="padding:12px 40px"><div style="border-top:1px solid #E7E0D6"></div></div>`;

  const blk=(t,inner)=>`<div style="margin-bottom:22px"><div style="font-family:${MONO};font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#7A7268;margin-bottom:8px">${t}</div><div style="width:600px;max-width:100%;background:#fff;border:1px solid #E7E0D6;border-radius:10px;overflow:hidden">${inner}</div></div>`;

  const fullEmail=`<div style="width:600px;max-width:100%;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 12px 40px rgba(25,25,25,.12)">
    ${header}
    ${hero}
    ${shot}
    <div style="padding:14px 0 4px">${[["Tiered packages, automatically","Every quote presents three tiers, no judgment call for the rep."],["Carrier-aligned line items","Estimates mirror what adjusters expect, fewer denials, faster approvals."],["Built from measurements","Enter the roof; quantities, waste factor and pricing auto-populate."]].map(f=>`<div style="padding:0 40px"><div style="border-top:1px solid #E7E0D6;padding:22px 0"><div style="font-family:${DISP};font-weight:700;font-size:17px;margin-bottom:5px;color:${INK}">${f[0]}</div><div style="font-family:${BODY};font-size:14px;line-height:1.55;color:#4B5563">${f[1]}</div></div></div>`).join("")}</div>
    ${statBanner}
    ${quote}
    ${ctaBand}
    ${footer}
  </div>`;

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Lifecycle · email system</p>
      <h1>Emailer</h1>
      <p class="lede">A 600px branded email, built from a kit of reusable blocks, header lockup, hero, product shot, feature rows, cards, checklist, stat banner, testimonial, CTA banner, button, divider and footer. All inline‑styled so they survive every email client.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>brand #FD5000</span>
        <span class="chip">600px · inline styles</span>
        <span class="chip">Aa Plus Jakarta + Inter</span>
        <span class="chip">client‑safe</span>
      </div>
      <div class="hero-art"><div class="float ha-mail">
        <div class="top">${logo("dark",15)}</div>
        <div class="band"><div class="t">From first call to final invoice</div><div class="s">One platform to run your service business.</div></div>
        <div class="bd"><div class="l"></div><div class="l"></div><div class="l s"></div><div class="btn"></div></div>
        <div class="ft">Zuper · Unsubscribe</div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Anatomy</p><h2 class="sec">Building blocks</h2>
    <p class="sec-note">Mix and match these blocks to build any announcement. Each is a self‑contained, inline‑styled section sized to the 600px email width.</p>
    <div class="adscroll" style="padding-top:6px">
      ${blk("01 · Header lockup",header)}
      ${blk("02 · Hero, eyebrow, headline, body, CTA",hero)}
      ${blk("03 · Product screen",shot)}
      ${blk("04 · Feature row",featureRow)}
      ${blk("05 · Two‑up cards",twoUp)}
      ${blk("06 · Checklist",checklist)}
      ${blk("07 · Stat banner",statBanner)}
      ${blk("08 · Testimonial",quote)}
      ${blk("09 · CTA banner",ctaBand)}
      ${blk("10 · Button",button)}
      ${blk("11 · Divider",divider)}
      ${blk("12 · Footer",footer)}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Assembled</p><h2 class="sec">Email announcement</h2>
    <p class="sec-note">The blocks stacked into a complete, ready‑to‑send announcement.</p>
    <div class="adscroll"><div style="padding:6px 2px 4px">${fullEmail}</div></div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


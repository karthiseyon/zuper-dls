/* ============ SOCIAL & ADS ============ */
function buildSocial(){
  stage.style.cssText=chromeCss();

  const DISP="'Plus Jakarta Sans',system-ui,sans-serif",BODY="'Inter',system-ui,sans-serif",MONO="'Geist Mono',ui-monospace,monospace";
  const GRAD="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)",INK="#191919",L="assets/logos/";
  const lbl=t=>`<div style="font-family:${MONO};font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#7A7268">${t}</div>`;
  const col=(t,box)=>`<div style="display:flex;flex-direction:column;gap:8px">${lbl(t)}${box}</div>`;

  const leaderboard=col("Leaderboard · 728 × 90",`<div style="width:728px;height:90px;box-sizing:border-box;background:${GRAD};color:#fff;border-radius:4px;display:flex;align-items:center;gap:22px;padding:0 26px;overflow:hidden"><img src="${L}zuper-logomark-white.png" alt="" style="height:40px;width:auto"><div style="font-family:${DISP};font-weight:800;font-size:26px;letter-spacing:-.02em;line-height:1.05;flex:1">Run service from first call to final invoice</div><span style="background:${INK};color:#fff;font-family:${DISP};font-weight:700;font-size:15px;padding:11px 22px;border-radius:8px;white-space:nowrap">Book a demo</span></div>`);

  const billboard=col("Billboard · 970 × 250",`<div style="width:970px;height:250px;box-sizing:border-box;background:${GRAD};color:#fff;border-radius:6px;padding:40px 48px;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden"><div style="font-family:${MONO};font-size:14px;text-transform:uppercase;letter-spacing:.14em;color:rgba(255,255,255,.85);margin-bottom:14px">The AI OS for field service</div><div style="font-family:${DISP};font-weight:800;font-size:50px;line-height:1.02;letter-spacing:-.03em;max-width:640px">Win 1 in 3 quotes on-site</div><span style="align-self:flex-start;margin-top:22px;background:${INK};color:#fff;font-family:${DISP};font-weight:700;font-size:17px;padding:13px 26px;border-radius:8px">Book a demo →</span><img src="${L}zuper-horizontal-white.png" alt="" style="position:absolute;top:36px;right:48px;height:30px;width:auto"></div>`);

  const medrect=col("Medium rectangle · 300 × 250",`<div style="width:300px;height:250px;box-sizing:border-box;background:#fff;color:${INK};border-radius:6px;padding:26px;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden;border:1px solid #E7E0D6"><div style="position:absolute;top:0;left:0;right:0;height:8px;background:${GRAD}"></div><div style="font-family:${MONO};font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#FD5000;margin-bottom:10px">Field service · AI</div><div style="font-family:${DISP};font-weight:800;font-size:30px;line-height:1.05;letter-spacing:-.02em">Run a tighter operation</div><span style="align-self:flex-start;margin-top:18px;background:#FD5000;color:#fff;font-family:${DISP};font-weight:700;font-size:14px;padding:10px 20px;border-radius:8px">Book a demo</span><img src="${L}zuper-horizontal.png" alt="" style="position:absolute;left:26px;bottom:22px;height:18px;width:auto"></div>`);

  const lgrect=col("Large rectangle · 336 × 280",`<div style="width:336px;height:280px;box-sizing:border-box;background:${GRAD};color:#fff;border-radius:6px;padding:28px;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden"><div style="font-family:${DISP};font-weight:800;font-size:96px;letter-spacing:-.04em;line-height:.9">28%</div><div style="font-family:${DISP};font-weight:700;font-size:22px;line-height:1.2;margin-top:10px;max-width:240px">less drive time per crew</div><img src="${L}zuper-horizontal-white.png" alt="" style="position:absolute;left:28px;bottom:24px;height:22px;width:auto"></div>`);

  const halfpage=col("Half page · 300 × 600",`<div style="width:300px;height:600px;box-sizing:border-box;background:#fff;color:${INK};border-radius:6px;padding:32px 28px;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden;border:1px solid #E7E0D6"><div style="position:absolute;top:0;left:0;right:0;height:10px;background:${GRAD}"></div><div style="font-family:${MONO};font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#FD5000;margin-bottom:14px">From first call to invoice</div><div style="font-family:${DISP};font-weight:800;font-size:40px;line-height:1.03;letter-spacing:-.03em">Everything between the call and the cash</div><div style="display:flex;flex-direction:column;gap:10px;margin:22px 0;font-size:14px;font-family:${BODY}"><div style="display:flex;gap:10px;align-items:center"><span style="color:#FD5000;font-weight:800">&check;</span> Scheduling &amp; dispatch</div><div style="display:flex;gap:10px;align-items:center"><span style="color:#FD5000;font-weight:800">&check;</span> Intelligent quoting</div><div style="display:flex;gap:10px;align-items:center"><span style="color:#FD5000;font-weight:800">&check;</span> Job costing</div></div><span style="align-self:flex-start;background:#FD5000;color:#fff;font-family:${DISP};font-weight:700;font-size:15px;padding:12px 24px;border-radius:8px">Book a demo</span><img src="${L}zuper-horizontal.png" alt="" style="position:absolute;left:28px;bottom:26px;height:18px;width:auto"></div>`);

  const skyscraper=col("Skyscraper · 160 × 600",`<div style="width:160px;height:600px;box-sizing:border-box;background:linear-gradient(180deg,#DB3602,#FD5000);color:#fff;border-radius:6px;padding:26px 20px;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden"><div style="font-family:${DISP};font-weight:800;font-size:38px;line-height:1.02;letter-spacing:-.03em">First call to invoice</div><span style="align-self:flex-start;margin-top:18px;background:${INK};color:#fff;font-family:${DISP};font-weight:700;font-size:13px;padding:10px 16px;border-radius:8px">Demo →</span><img src="${L}zuper-horizontal-white.png" alt="" style="position:absolute;left:20px;bottom:24px;height:18px;width:auto"></div>`);

  const mobile=col("Mobile · 320 × 100",`<div style="width:320px;height:100px;box-sizing:border-box;background:${GRAD};color:#fff;border-radius:4px;display:flex;align-items:center;gap:14px;padding:0 18px;overflow:hidden"><img src="${L}zuper-logomark-white.png" alt="" style="height:34px;width:auto"><div style="font-family:${DISP};font-weight:800;font-size:18px;line-height:1.1;letter-spacing:-.02em;flex:1">Run a tighter operation</div><span style="background:${INK};color:#fff;font-family:${DISP};font-weight:700;font-size:12px;padding:8px 14px;border-radius:6px;white-space:nowrap">Demo</span></div>`);

  const email=`<div style="width:600px;max-width:100%;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 12px 40px rgba(25,25,25,.12);font-family:${BODY};color:${INK}">
    <div style="background:${GRAD};padding:28px 40px"><img src="${L}zuper-horizontal-white.png" alt="Zuper" style="height:28px;width:auto;display:block"></div>
    <div style="padding:44px 40px 8px">
      <div style="font-family:${MONO};font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#FD5000;margin-bottom:14px">Product update</div>
      <h1 style="font-family:${DISP};font-weight:800;font-size:34px;line-height:1.1;letter-spacing:-.02em;margin:0 0 16px">Win the quote before you leave the driveway</h1>
      <p style="font-size:16px;line-height:1.6;color:#4B5563;margin:0 0 24px">Intelligent Quoting now builds a branded good / better / best estimate from your roof measurements, so every homeowner sees the premium option, and you send on-site.</p>
      <a href="#" style="display:inline-block;background:#FD5000;color:#fff;text-decoration:none;font-family:${BODY};font-weight:600;font-size:15px;padding:13px 26px;border-radius:8px">See what's new →</a>
    </div>
    <div style="padding:36px 40px 8px">
      ${[["Tiered packages, automatically","Every quote presents three tiers, no judgment call for the rep."],["Carrier-aligned line items","Estimates mirror what adjusters expect, fewer denials, faster approvals."],["Built from measurements","Enter the roof; quantities, waste factor and pricing auto-populate."]].map(f=>`<div style="border-top:1px solid #E7E0D6;padding:22px 0"><div style="font-family:${DISP};font-weight:700;font-size:17px;margin-bottom:5px">${f[0]}</div><div style="font-size:14px;line-height:1.55;color:#4B5563">${f[1]}</div></div>`).join("")}
    </div>
    <div style="margin:16px 40px 40px;background:#FFE7DC;border-radius:12px;padding:22px 24px;display:flex;align-items:center;gap:18px">
      <span style="font-family:${DISP};font-weight:800;font-size:40px;letter-spacing:-.03em;color:#FD5000;line-height:1">42%</span>
      <span style="font-size:14px;line-height:1.5;color:${INK}">gross margin on a recent $41k insurance job, full scope captured the first time.</span>
    </div>
    <div style="background:#FBF2EA;border-top:1px solid #F0EAE1;padding:28px 40px">
      <img src="${L}zuper-horizontal.png" alt="Zuper" style="height:20px;width:auto;display:block;margin-bottom:14px">
      <p style="font-size:13px;line-height:1.55;color:#7A7268;margin:0 0 12px">The AI operating system for field service, from first call to final invoice.</p>
      <div style="font-family:${MONO};font-size:11px;color:#7A7268">Zuper, Inc. · You're receiving this because you subscribed. <span style="text-decoration:underline">Unsubscribe</span></div>
    </div>
  </div>`;

  // ---- social creatives (real export sizes, scaled down for reference) ----
  const MH="assets/mini-humans/",SBG="assets/backgrounds/zuper-sense-bg.jpg",WARM="#FBF2EA",BANNER="#FFE7DC",CHAR="#18181B";
  const sb=(w,h,inner,s)=>{s=s||0.32;return `<div style="width:${Math.round(w*s)}px;height:${Math.round(h*s)}px;overflow:hidden;flex:0 0 auto;border-radius:8px;box-shadow:0 6px 20px rgba(20,4,3,.10)"><div style="width:${w}px;height:${h}px;transform:scale(${s});transform-origin:top left">${inner}</div></div>`;};
  const cr=(t,w,h,inner,s)=>`<div style="display:flex;flex-direction:column;gap:8px;break-inside:avoid;margin-bottom:26px;width:fit-content">${lbl(t)}${sb(w,h,inner,s)}</div>`;
  const creatives=[
    cr("Instagram · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.85); margin-bottom: 32px;">Field service · AI</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 118px; line-height: 1.02; letter-spacing: -.03em; margin: 0; max-width: 860px; text-wrap: balance;">Win 1 in 3 quotes on-site</h2>
      <p style="font-size: 34px; line-height: 1.45; color: rgba(255,255,255,.92); max-width: 740px; margin: 36px 0 0;">Build a branded estimate in the driveway, and send it before you leave.</p>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 52px; width: auto;">
      <img src="assets/mini-humans/reaching-up.gif" alt="" aria-hidden="true" style="position: absolute; right: 88px; bottom: 0; height: 92px; width: auto; display: block;">
    </div>`),
    cr("Story / Reel · 1080 × 1920",1080,1920,`<div style="width: 1080px; height: 1920px; box-sizing: border-box; background: #fff; color: #191919; padding: 110px 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 28px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 36px;">The AI OS for field service</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 130px; line-height: 1.02; letter-spacing: -.03em; margin: 0;">From first call to final invoice</h2>
      <p style="font-size: 38px; line-height: 1.5; color: #4B5563; max-width: 820px; margin: 44px 0 56px;">Schedule the right tech, win the quote on-site, and get paid faster, with AI doing the busywork.</p>
      <span style="display: inline-flex; align-self: flex-start; background: #FD5000; color: #fff; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 36px; padding: 26px 52px; border-radius: 14px;">Book a demo →</span>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 96px; height: 56px; width: auto;">
      <img src="assets/mini-humans/ready-to-work.gif" alt="" aria-hidden="true" style="position: absolute; right: 88px; bottom: 0; height: 128px; width: auto; display: block;">
    </div>`),
    cr("LinkedIn / X · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; background: #18181B; color: #fff; padding: 72px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 20px; text-transform: uppercase; letter-spacing: .14em; color: #FF8B5A; margin-bottom: 24px;">Zuper Sense</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 70px; line-height: 1.04; letter-spacing: -.03em; margin: 0; max-width: 780px; text-wrap: balance;">AI that dispatches, summarizes &amp; spots the margin</h2>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 72px; bottom: 56px; height: 40px; width: auto;">
      <img src="assets/mini-humans/on-the-job.gif" alt="" aria-hidden="true" style="position: absolute; right: 72px; bottom: 0; height: 92px; width: auto; display: block;">
    </div>`),
    cr("Quote card · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #FBF2EA; color: #191919; padding: 100px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 220px; line-height: .6; color: #FD5000; height: 110px;">&ldquo;</div>
      <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 60px; line-height: 1.28; letter-spacing: -.02em; margin: 0; max-width: 860px; text-wrap: balance;">Your software blows any software out of the water. For roofing, this is just the best.</blockquote>
      <div style="display: flex; align-items: center; gap: 24px; margin-top: 56px;">
        <span style="width: 88px; height: 88px; border-radius: 50%; background: #FD5000; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 32px;">CL</span>
        <div><div style="font-weight: 700; font-size: 34px;">Chris Little</div><div style="font-size: 28px; color: #4B5563;">Office Manager, Dickinson Roofing</div></div>
      </div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; right: 100px; bottom: 92px; height: 44px; width: auto;">
    </div>`),
    cr("Zuper Sense · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #09090B url(assets/backgrounds/zuper-sense-bg.jpg) center/cover; color: #FAFAFA; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FF8B5A; margin-bottom: 32px;">Zuper Sense</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 110px; line-height: 1.03; letter-spacing: -.03em; margin: 0; max-width: 880px; text-wrap: balance;">AI that runs in the background</h2>
      <p style="font-size: 34px; line-height: 1.45; color: #A1A1AA; max-width: 780px; margin: 36px 0 0;">Auto-dispatch, job summaries and margin alerts, before the week is lost.</p>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 52px; width: auto;">
    </div>`),
    cr("Stat card · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #fff; color: #191919; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 28px;">The impact · first 90 days</div>
      <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 360px; line-height: .85; letter-spacing: -.04em; color: #FD5000;">28%</div>
      <p style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 52px; line-height: 1.25; letter-spacing: -.02em; color: #191919; max-width: 720px; margin: 28px 0 0;">less drive time per crew, every week</p>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 48px; width: auto;">
      <img src="assets/mini-humans/carrying-gear.gif" alt="" aria-hidden="true" style="position: absolute; right: 88px; bottom: 0; height: 92px; width: auto; display: block;">
    </div>`),
    cr("Job costing · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.85); margin-bottom: 32px;">Job costing &amp; profitability</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 116px; line-height: 1.02; letter-spacing: -.03em; margin: 0; max-width: 860px; text-wrap: balance;">See the margin on every job</h2>
      <p style="font-size: 34px; line-height: 1.45; color: rgba(255,255,255,.92); max-width: 740px; margin: 36px 0 0;">Gross profit updates live on the job card as costs come in. No spreadsheets.</p>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 52px; width: auto;">
    </div>`),
    cr("Intelligent Quoting · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #fff; color: #191919; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 28px;">Intelligent Quoting</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 110px; line-height: 1.02; letter-spacing: -.03em; margin: 0 0 44px;">Good. Better.<br>Best, every time.</h2>
      <div style="display: flex; gap: 18px;">
        <span style="background: #FBF2EA; color: #4B5563; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 18px 34px; border-radius: 12px;">Good</span>
        <span style="background: #FFE7DC; color: #B5271C; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 18px 34px; border-radius: 12px;">Better</span>
        <span style="background: #FD5000; color: #fff; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 18px 34px; border-radius: 12px;">Best</span>
      </div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 48px; width: auto;">
    </div>`),
    cr("Testimonial · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #FBF2EA; color: #191919; padding: 110px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 6px; overflow: hidden;">
      <span style="width: 136px; height: 136px; border-radius: 50%; background: #FD5000; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 52px; margin-bottom: 36px;">LC</span>
      <div style="color: #FD5000; font-size: 30px; letter-spacing: 7px; margin-bottom: 30px;">★★★★★</div>
      <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 54px; line-height: 1.3; letter-spacing: -.02em; margin: 0; max-width: 820px; text-wrap: balance;">Zuper took a huge load off our office, saved time on every job, and made inspections safer and more professional.</blockquote>
      <div style="margin-top: 46px;">
        <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 34px;">Lisa Crocker</div>
        <div style="font-size: 27px; color: #4B5563; margin-top: 4px;">Chief Admin Officer, Roof Doctors</div>
      </div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 50%; transform: translateX(-50%); bottom: 60px; height: 38px; width: auto;">
    </div>`),
    cr("CTA · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 72px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 76px; line-height: 1.03; letter-spacing: -.03em; margin: 0; max-width: 820px; text-wrap: balance;">Ready to run a tighter operation?</h2>
      <p style="font-size: 28px; color: rgba(255,255,255,.92); margin: 22px 0 34px;">Set up in a day. No rip-and-replace.</p>
      <span style="align-self: flex-start; background: #191919; color: #fff; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 28px; padding: 20px 40px; border-radius: 12px;">Book a demo →</span>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 72px; bottom: 52px; height: 38px; width: auto;">
      <img src="assets/mini-humans/on-the-tools.gif" alt="" aria-hidden="true" style="position: absolute; right: 72px; bottom: 0; height: 92px; width: auto; display: block;">
    </div>`),
    cr("Stat card · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #fff; color: #191919; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 28px;">Intelligent Quoting</div>
      <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 360px; line-height: .85; letter-spacing: -.04em; color: #FD5000;">4×</div>
      <p style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 52px; line-height: 1.25; letter-spacing: -.02em; max-width: 720px; margin: 28px 0 0;">premium product sales, no new hires</p>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 48px; width: auto;">
    </div>`),
    cr("Hiring story · 1080 × 1920",1080,1920,`<div style="width: 1080px; height: 1920px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 110px 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 28px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.85); margin-bottom: 36px;">We're hiring</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 128px; line-height: 1.02; letter-spacing: -.03em; margin: 0;">Join a crew that runs on Zuper</h2>
      <p style="font-size: 38px; line-height: 1.5; color: rgba(255,255,255,.92); max-width: 820px; margin: 44px 0 56px;">New hires run clean jobs in weeks, guided workflows do the heavy lifting.</p>
      <span style="align-self: flex-start; background: #191919; color: #fff; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 36px; padding: 26px 52px; border-radius: 14px;">See open roles →</span>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 88px; bottom: 96px; height: 56px; width: auto;">
      <img src="assets/mini-humans/ready-to-work.gif" alt="" aria-hidden="true" style="position: absolute; right: 88px; bottom: 0; height: 130px; width: auto; display: block;">
    </div>`),
    cr("Zuper Sense · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #09090B url(assets/backgrounds/zuper-sense-bg.jpg) center/cover; color: #FAFAFA; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FF8B5A; margin-bottom: 32px;">Zuper Sense</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 110px; line-height: 1.03; letter-spacing: -.03em; margin: 0; max-width: 880px; text-wrap: balance;">It dispatches the nearest qualified tech</h2>
      <p style="font-size: 34px; line-height: 1.45; color: #A1A1AA; max-width: 780px; margin: 36px 0 0;">Sense reads the job, the location and the load, and routes the right crew.</p>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 52px; width: auto;">
    </div>`),
    cr("Industries · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #fff; color: #191919; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 28px;">Built for your trade</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 104px; line-height: 1.02; letter-spacing: -.03em; margin: 0 0 44px;">Tuned to how your crews work</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 16px; max-width: 880px;">
        <span style="background: #FBF2EA; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 16px 30px; border-radius: 999px;">Roofing</span>
        <span style="background: #FBF2EA; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 16px 30px; border-radius: 999px;">HVAC</span>
        <span style="background: #FBF2EA; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 16px 30px; border-radius: 999px;">Plumbing</span>
        <span style="background: #FBF2EA; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 16px 30px; border-radius: 999px;">Electrical</span>
        <span style="background: #FBF2EA; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px; padding: 16px 30px; border-radius: 999px;">Solar</span>
      </div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 48px; width: auto;">
    </div>`),
    cr("Feature · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; background: #fff; color: #191919; padding: 72px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 14px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 20px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 22px;">Scheduling &amp; Dispatch</div>
      <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 68px; line-height: 1.03; letter-spacing: -.03em; margin: 0; max-width: 820px; text-wrap: balance;">One board for every crew, every job</h2>
      <p style="font-size: 26px; color: #4B5563; margin: 20px 0 0; max-width: 720px;">Drag a job, reassign a tech, the customer gets an updated ETA automatically.</p>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 72px; bottom: 52px; height: 38px; width: auto;">
      <img src="assets/mini-humans/carrying-gear.gif" alt="" aria-hidden="true" style="position: absolute; right: 72px; bottom: 0; height: 92px; width: auto; display: block;">
    </div>`),
    cr("Product · Dispatch · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 80px; position: relative; display: flex; flex-direction: column; justify-content: center; gap: 60px; border-radius: 6px; overflow: hidden;">
      <div>
        <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 24px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.85); margin-bottom: 24px;">Scheduling &amp; Dispatch</div>
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 92px; line-height: 1.02; letter-spacing: -.03em; margin: 0; max-width: 900px; text-wrap: balance;">Dispatch on autopilot</h2>
      </div>
      <div style="width:900px;align-self:center;box-shadow:0 40px 90px rgba(20,8,2,.42);background:#fff;border-radius:20px;padding:22px 26px;color:#191919;font-family:'Plus Jakarta Sans',system-ui,sans-serif"><div style="display:flex;align-items:center;justify-content:space-between;padding:4px 6px 18px"><div style="display:flex;align-items:center;gap:9px"><span style="width:14px;height:14px;border-radius:50%;background:#E0584A;display:inline-block"></span><span style="width:14px;height:14px;border-radius:50%;background:#E9B23C;display:inline-block"></span><span style="width:14px;height:14px;border-radius:50%;background:#56B36B;display:inline-block"></span><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:19px;color:#7A7268;margin-left:10px">Dispatch board · Today</span></div><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:19px;color:#9A938A">Tue, Jun 25</span></div><div style="display:flex;align-items:center;gap:20px;border:1px solid #EFECE6;border-radius:14px;padding:18px 22px;margin-bottom:10px"><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#7A7268;width:88px;flex:0 0 auto">8:00</span><div style="flex:1"><div style="font-weight:700;font-size:26px;color:#191919">Tear-off, 14 Maple Ave</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#9A938A;margin-top:3px">Crew A</div></div><span style="font-weight:700;font-size:19px;background:#E6F4EA;color:#1E854B;padding:9px 18px;border-radius:999px;white-space:nowrap">Completed</span></div><div style="display:flex;align-items:center;gap:20px;border:1px solid #EFECE6;border-radius:14px;padding:18px 22px;margin-bottom:10px"><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#7A7268;width:88px;flex:0 0 auto">9:30</span><div style="flex:1"><div style="font-weight:700;font-size:26px;color:#191919">Roof inspection. Summit Plaza</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#9A938A;margin-top:3px">M. Reyes</div></div><span style="font-weight:700;font-size:19px;background:#E7EEFB;color:#3B5BDB;padding:9px 18px;border-radius:999px;white-space:nowrap">En route</span></div><div style="display:flex;align-items:center;gap:20px;border:1px solid #EFECE6;border-radius:14px;padding:18px 22px;margin-bottom:10px"><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#7A7268;width:88px;flex:0 0 auto">11:00</span><div style="flex:1"><div style="font-weight:700;font-size:26px;color:#191919">Leak repair, 9 Oak Court</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#9A938A;margin-top:3px">Crew B</div></div><span style="font-weight:700;font-size:19px;background:#FBEFD3;color:#A66A00;padding:9px 18px;border-radius:999px;white-space:nowrap">Scheduled</span></div><div style="display:flex;align-items:center;gap:20px;border:1px solid #EFECE6;border-radius:14px;padding:18px 22px;margin-bottom:10px"><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#7A7268;width:88px;flex:0 0 auto">13:30</span><div style="flex:1"><div style="font-weight:700;font-size:26px;color:#191919">Gutter install, 220 Pine St</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#9A938A;margin-top:3px">Crew A</div></div><span style="font-weight:700;font-size:19px;background:#FBEFD3;color:#A66A00;padding:9px 18px;border-radius:999px;white-space:nowrap">Scheduled</span></div><div style="display:flex;align-items:center;gap:20px;border:1px solid #EFECE6;border-radius:14px;padding:18px 22px;margin-bottom:10px"><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:22px;color:#7A7268;width:88px;flex:0 0 auto">15:00</span><div style="flex:1"><div style="font-weight:700;font-size:26px;color:#191919">Estimate, 5 Birch Ln</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#9A938A;margin-top:3px">Unassigned</div></div><span style="font-weight:700;font-size:19px;background:#EFEEEC;color:#7A7268;padding:9px 18px;border-radius:999px;white-space:nowrap">Unassigned</span></div></div>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; right: 80px; bottom: 60px; height: 42px; width: auto;">
    </div>`),
    cr("Product · Quoting · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #FBF2EA; color: #191919; padding: 80px; position: relative; display: flex; flex-direction: column; justify-content: center; gap: 56px; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div>
        <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 24px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 22px;">Intelligent Quoting</div>
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 88px; line-height: 1.02; letter-spacing: -.03em; margin: 0; max-width: 880px; text-wrap: balance;">Good, better, best, in under a minute</h2>
      </div>
      <div style="width:900px;align-self:center;box-shadow:0 40px 90px rgba(120,40,0,.16);background:#fff;border-radius:20px;overflow:hidden;color:#191919;font-family:'Plus Jakarta Sans',system-ui,sans-serif"><div style="display:flex;align-items:center;justify-content:space-between;padding:24px 30px;border-bottom:1px solid #F0EAE1"><div style="display:flex;align-items:center;gap:12px"><span style="width:14px;height:14px;border-radius:50%;background:#E0584A;display:inline-block"></span><span style="width:14px;height:14px;border-radius:50%;background:#E9B23C;display:inline-block"></span><span style="width:14px;height:14px;border-radius:50%;background:#56B36B;display:inline-block"></span><span style="font-weight:700;font-size:24px;margin-left:8px">Intelligent Quoting</span></div><span style="font-family:'Geist Mono',ui-monospace,monospace;font-size:16px;text-transform:uppercase;letter-spacing:.1em;color:#A66A00;background:#FEF3DC;padding:7px 16px;border-radius:999px">Draft</span></div><div style="padding:30px 32px 34px"><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:16px;text-transform:uppercase;letter-spacing:.12em;color:#7A7268;margin-bottom:8px">Summit Roofing · 2,400 sq ft</div><div style="font-weight:800;font-size:40px;letter-spacing:-.02em;margin-bottom:26px">Roof replacement, asphalt</div><div style="display:flex;gap:18px"><div style="flex:1;border:2px solid #E7E0D6;background:#fff;border-radius:16px;padding:22px 20px"><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:15px;text-transform:uppercase;letter-spacing:.1em;color:#7A7268;margin-bottom:12px">Good</div><div style="font-weight:800;font-size:38px;letter-spacing:-.02em;color:#191919">$9,200</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:17px;line-height:1.4;color:#7A7268;margin-top:8px">Architectural shingles</div></div><div style="flex:1;border:2px solid #FD5000;background:#FFF6F1;border-radius:16px;padding:22px 20px"><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:15px;text-transform:uppercase;letter-spacing:.1em;color:#FD5000;margin-bottom:12px">Better</div><div style="font-weight:800;font-size:38px;letter-spacing:-.02em;color:#191919">$11,800</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:17px;line-height:1.4;color:#7A7268;margin-top:8px">+ synthetic underlayment</div></div><div style="flex:1;border:2px solid #E7E0D6;background:#fff;border-radius:16px;padding:22px 20px"><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:15px;text-transform:uppercase;letter-spacing:.1em;color:#7A7268;margin-bottom:12px">Best</div><div style="font-weight:800;font-size:38px;letter-spacing:-.02em;color:#191919">$14,500</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:17px;line-height:1.4;color:#7A7268;margin-top:8px">+ 50-yr workmanship warranty</div></div></div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:28px;padding-top:24px;border-top:1px solid #F0EAE1"><div><span style="font-family:'Inter',system-ui,sans-serif;font-size:20px;color:#7A7268">Est. gross margin</span><span style="font-weight:800;font-size:28px;color:#1E854B;margin-left:12px">42%</span></div><span style="font-weight:700;font-size:22px;color:#fff;background:#FD5000;padding:14px 28px;border-radius:12px">Send quote →</span></div></div></div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; right: 80px; bottom: 60px; height: 42px; width: auto;">
    </div>`),
    cr("Product · Job costing · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; background: #18181B; color: #fff; padding: 64px; position: relative; display: flex; align-items: center; gap: 56px; border-radius: 6px; overflow: hidden;">
      <div style="flex: 1;">
        <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 18px; text-transform: uppercase; letter-spacing: .14em; color: #FF8B5A; margin-bottom: 20px;">Job costing &amp; profitability</div>
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 60px; line-height: 1.04; letter-spacing: -.03em; margin: 0; text-wrap: balance;">Know the margin before the job closes</h2>
        <img src="assets/logos/zuper-horizontal-white.png" alt="" style="margin-top: 40px; height: 36px; width: auto;">
      </div>
      <div style="width:500px;flex:none;box-shadow:0 30px 70px rgba(0,0,0,.45);background:#fff;border-radius:18px;padding:32px 34px;color:#191919;font-family:'Plus Jakarta Sans',system-ui,sans-serif"><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:15px;letter-spacing:.1em;color:#9A938A;margin-bottom:6px">INSURANCE · FULL ROOF</div><div style="font-weight:800;font-size:34px;letter-spacing:-.02em;margin-bottom:22px">Job 4821</div><div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #F0EAE1;font-family:'Inter',system-ui,sans-serif;font-size:23px"><span style="color:#4B5563">Contract value</span><span style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:700;color:#191919">$41,000</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #F0EAE1;font-family:'Inter',system-ui,sans-serif;font-size:23px"><span style="color:#4B5563">Materials</span><span style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:700;color:#7A7268">− $13,200</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #F0EAE1;font-family:'Inter',system-ui,sans-serif;font-size:23px"><span style="color:#4B5563">Labor</span><span style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:700;color:#7A7268">− $9,100</span></div><div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid #F0EAE1;font-family:'Inter',system-ui,sans-serif;font-size:23px"><span style="color:#4B5563">Permits & disposal</span><span style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:700;color:#7A7268">− $1,480</span></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;background:#E6F4EA;border-radius:12px;padding:20px 22px"><div><div style="font-family:'Inter',system-ui,sans-serif;font-size:19px;color:#1E854B">Gross margin</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:16px;color:#4B5563">$17,220 gross profit</div></div><span style="font-weight:800;font-size:48px;letter-spacing:-.02em;color:#1E854B">42%</span></div></div>
    </div>`),
    cr("Product · Mobile · 1080 × 1920",1080,1920,`<div style="width: 1080px; height: 1920px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 120px 88px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 80px; text-align: center; border-radius: 6px; overflow: hidden;">
      <div>
        <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.85); margin-bottom: 28px;">The mobile app</div>
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 104px; line-height: 1.02; letter-spacing: -.03em; margin: 0 0 24px; max-width: 880px; text-wrap: balance;">Built mobile-first for the crew</h2>
        <p style="font-size: 34px; line-height: 1.45; color: rgba(255,255,255,.92); max-width: 760px; margin: 0 auto;">Everything a tech needs on the job, checklists, photos, costs and sign-off, in one app.</p>
      </div>
      <div style="height: 1000px; display: flex; align-items: center; justify-content: center;">
        <div style="transform:scale(1.6);transform-origin:center;filter:drop-shadow(0 40px 80px rgba(20,8,2,.5));width:300px;background:#0E0E10;border-radius:40px;padding:9px;font-family:'Plus Jakarta Sans',system-ui,sans-serif"><div style="background:#fff;border-radius:32px;overflow:hidden;text-align:left"><div style="background:linear-gradient(135deg,#C0341A,#E8784A);color:#fff;padding:16px 18px 18px"><div style="display:flex;justify-content:space-between;font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;margin-bottom:14px"><span>9:41</span><span>Zuper</span></div><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.85);margin-bottom:5px">CURRENT JOB</div><div style="font-weight:800;font-size:24px;letter-spacing:-.02em">Leak repair</div><div style="font-family:'Inter',system-ui,sans-serif;font-size:13px;color:rgba(255,255,255,.9);margin-top:4px">9 Oak Court · 11:00 AM</div></div><div style="padding:16px 18px 18px"><div style="display:flex;gap:10px;margin-bottom:16px"><span style="flex:1;text-align:center;background:#FFE7DC;color:#C23A14;font-weight:700;font-size:13px;padding:11px 0;border-radius:10px">Navigate</span><span style="flex:1;text-align:center;background:#F1EFEC;color:#191919;font-weight:700;font-size:13px;padding:11px 0;border-radius:10px">Call</span></div><div style="font-family:'Geist Mono',ui-monospace,monospace;font-size:10px;letter-spacing:.12em;color:#9A938A;margin-bottom:10px">CHECKLIST</div><div style="display:flex;align-items:center;gap:11px;padding:8px 0"><span style="width:20px;height:20px;border-radius:6px;flex:0 0 auto;background:#FD5000;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:12px">&check;</span><span style="font-family:'Inter',system-ui,sans-serif;font-size:15px;color:#A7A097;text-decoration:line-through">Inspect flashing</span></div><div style="display:flex;align-items:center;gap:11px;padding:8px 0"><span style="width:20px;height:20px;border-radius:6px;flex:0 0 auto;background:#FD5000;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:12px">&check;</span><span style="font-family:'Inter',system-ui,sans-serif;font-size:15px;color:#A7A097;text-decoration:line-through">Photo before</span></div><div style="display:flex;align-items:center;gap:11px;padding:8px 0"><span style="width:20px;height:20px;border-radius:6px;flex:0 0 auto;border:2px solid #D8D2C8;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:12px"></span><span style="font-family:'Inter',system-ui,sans-serif;font-size:15px;color:#191919">Seal & replace</span></div><div style="display:flex;align-items:center;gap:11px;padding:8px 0"><span style="width:20px;height:20px;border-radius:6px;flex:0 0 auto;border:2px solid #D8D2C8;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:12px"></span><span style="font-family:'Inter',system-ui,sans-serif;font-size:15px;color:#191919">Photo after</span></div><div style="margin-top:14px;background:#FD5000;color:#fff;text-align:center;font-weight:700;font-size:15px;padding:13px 0;border-radius:12px">Complete job</div></div></div></div>
      </div>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 50%; transform: translateX(-50%); bottom: 72px; height: 48px; width: auto;">
    </div>`),
    cr("Zuper Glass · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #09090B; color: #FAFAFA; position: relative; display: flex; flex-direction: column; border-radius: 6px; overflow: hidden;">
      <div style="height: 596px; background: #08080a url(assets/backgrounds/zuper-glass-bg.jpg) center/cover no-repeat; position: relative;">
        <span style="position: absolute; top: 36px; left: 36px; display: inline-flex; align-items: center; gap: 10px; background: rgba(9,9,11,.55); border: 1px solid rgba(255,139,90,.4); color: #FF8B5A; font-family: 'Geist Mono',ui-monospace,monospace; font-size: 20px; text-transform: uppercase; letter-spacing: .12em; padding: 9px 18px; border-radius: 999px; backdrop-filter: blur(8px);"><span style="background: #FF8B5A; color: #1a1a1a; font-weight: 800; border-radius: 5px; padding: 2px 9px; font-size: 16px;">New</span> Zuper Glass</span>
        <div style="position: absolute; left: 0; right: 0; bottom: 0; height: 180px; background: linear-gradient(180deg, rgba(9,9,11,0), #09090B);"></div>
      </div>
      <div style="flex: 1; padding: 8px 72px 70px; display: flex; flex-direction: column; justify-content: center; gap: 26px;">
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 92px; line-height: .98; letter-spacing: -.035em; margin: 0; text-wrap: balance;">See it. Say it. Get it done.</h2>
        <p style="font-size: 31px; line-height: 1.45; color: #A1A1AA; max-width: 760px; margin: 0;">AI smart glasses built for the trades, damage detection and job context, hands-free.</p>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
          <span style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 28px; color: #FF8B5A;">Explore Zuper Glass →</span>
          <img src="assets/logos/zuper-horizontal-white.png" alt="" style="height: 40px; width: auto;">
        </div>
      </div>
    </div>`),
    cr("Stat card · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #fff; color: #191919; padding: 88px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 16px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 26px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000; margin-bottom: 28px;">Guided selling</div>
      <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 340px; line-height: .85; letter-spacing: -.04em; color: #FD5000;">98%</div>
      <p style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 52px; line-height: 1.25; letter-spacing: -.02em; max-width: 760px; margin: 28px 0 0;">faster new-hire ramp-up, selling like a pro on day one</p>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; left: 88px; bottom: 80px; height: 48px; width: auto;">
      <img src="assets/mini-humans/waving.gif" alt="" aria-hidden="true" style="position: absolute; right: 88px; bottom: 0; height: 96px; width: auto; display: block;">
    </div>`),
    cr("Testimonial · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 100px; position: relative; display: flex; flex-direction: column; justify-content: space-between; border-radius: 6px; overflow: hidden;">
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 24px; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.8);">Customer story</div>
      <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 92px; line-height: 1.08; letter-spacing: -.03em; margin: 0; text-wrap: balance;">Zuper took the operational noise out of the business, so we could focus on growth.</blockquote>
      <div>
        <div style="height: 3px; width: 130px; background: rgba(255,255,255,.55); margin-bottom: 30px;"></div>
        <div style="display: flex; align-items: flex-end; justify-content: space-between;">
          <div><div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 38px;">JT Ulyatt</div><div style="font-size: 27px; color: rgba(255,255,255,.85); margin-top: 4px;">CEO, Maven Roofing</div></div>
          <img src="assets/logos/zuper-horizontal-white.png" alt="" style="height: 40px; width: auto;">
        </div>
      </div>
    </div>`),
    cr("Testimonial · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #FBF2EA; color: #191919; padding: 96px; position: relative; display: flex; flex-direction: column; justify-content: center; gap: 56px; border-radius: 6px; overflow: hidden;">
      <div style="position: relative; background: #fff; border: 1px solid #E7E0D6; border-radius: 34px; padding: 66px 64px; box-shadow: 0 24px 60px rgba(120,40,0,.10);">
        <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 56px; line-height: 1.3; letter-spacing: -.02em; margin: 0; text-wrap: balance;">It&rsquo;s mobile-first, and for the guys out in the field, that&rsquo;s where it really shines.</blockquote>
        <div style="position: absolute; left: 96px; bottom: -27px; width: 54px; height: 54px; background: #fff; border-right: 1px solid #E7E0D6; border-bottom: 1px solid #E7E0D6; transform: rotate(45deg);"></div>
      </div>
      <div style="display: flex; align-items: center; gap: 24px; padding-left: 30px;">
        <span style="width: 84px; height: 84px; border-radius: 50%; background: #FD5000; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px;">CK</span>
        <div><div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 34px;">Cooper Knutson</div><div style="font-size: 27px; color: #4B5563; margin-top: 4px;">Bookkeeper, Russell&rsquo;s Quality Roofing</div></div>
      </div>
      <img src="assets/logos/zuper-horizontal.png" alt="" style="position: absolute; right: 96px; bottom: 80px; height: 40px; width: auto;">
    </div>`),
    cr("Testimonial · Zuper Glass · 1080 × 1080",1080,1080,`<div style="width: 1080px; height: 1080px; box-sizing: border-box; background: #09090B; color: #FAFAFA; padding: 100px; position: relative; display: flex; flex-direction: column; justify-content: center; border-radius: 6px; overflow: hidden;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 44px;">
        <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 24px; text-transform: uppercase; letter-spacing: .14em; color: #FF8B5A;">Zuper Glass</div>
        <div style="color: #FF8B5A; font-size: 40px; letter-spacing: 6px;">★★★★★</div>
      </div>
      <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 64px; line-height: 1.24; letter-spacing: -.02em; margin: 0; text-wrap: balance;">Zuper Glass has already saved my life once on a roof. I won&rsquo;t go up without it.</blockquote>
      <div style="margin-top: 60px; border-top: 1px solid #27272A; padding-top: 40px; display: flex; align-items: center; gap: 22px;">
        <span style="width: 84px; height: 84px; border-radius: 50%; background: rgba(255,139,90,.18); border: 1px solid rgba(255,139,90,.4); color: #FF8B5A; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 30px;">JM</span>
        <div><div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 34px;">John Marrah</div><div style="font-size: 27px; color: #A1A1AA; margin-top: 4px;">CEO, Marasun</div></div>
        <img src="assets/logos/zuper-horizontal-white.png" alt="" style="margin-left: auto; height: 40px; width: auto;">
      </div>
    </div>`),
    cr("Testimonial · split · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; display: flex; border-radius: 6px; overflow: hidden;">
      <div style="width: 440px; flex: none; background: linear-gradient(160deg,#7E1C0B 0%,#D43A14 58%,#F2864F 100%); color: #fff; padding: 60px; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="display: flex; flex-direction: column; gap: 22px;">
          <span style="width: 100px; height: 100px; border-radius: 50%; background: #fff; color: #FD5000; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 40px;">NM</span>
          <div>
            <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 36px;">Noe Madrigal</div>
            <div style="font-size: 24px; color: rgba(255,255,255,.9); margin-top: 6px;">Founder &amp; CEO, A&amp;A Roofing</div>
          </div>
          <div style="color: #fff; font-size: 26px; letter-spacing: 5px;">★★★★★</div>
        </div>
        <img src="assets/logos/zuper-horizontal-white.png" alt="" style="height: 30px; width: auto; align-self: flex-start;">
      </div>
      <div style="flex: 1; background: #fff; color: #191919; padding: 60px 68px; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 128px; line-height: .5; color: #FD5000; height: 58px;">&ldquo;</div>
        <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 44px; line-height: 1.3; letter-spacing: -.02em; margin: 0; text-wrap: balance;">As you scale you need a CRM, photo management, a phone system and a proposal builder. With Zuper, we have all of it in one place.</blockquote>
      </div>
    </div>`),
    cr("Testimonial · proof wall · 1200 × 630",1200,630,`<div style="width: 1200px; height: 630px; box-sizing: border-box; background: #FBF2EA; color: #191919; padding: 60px; position: relative; display: flex; flex-direction: column; justify-content: center; gap: 30px; border-radius: 6px; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 14px; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);"></div>
      <div style="font-family: 'Geist Mono',ui-monospace,monospace; font-size: 19px; text-transform: uppercase; letter-spacing: .14em; color: #FD5000;">Loved by roofers</div>
      <div style="display: flex; gap: 24px;">
        <div style="flex: 1; background: #fff; border: 1px solid #E7E0D6; border-radius: 18px; padding: 34px; display: flex; flex-direction: column; gap: 18px;">
          <div style="color: #FD5000; font-size: 20px; letter-spacing: 3px;">★★★★★</div>
          <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 27px; line-height: 1.34; letter-spacing: -.01em; margin: 0;">Zuper blows any software out of the water. For roofing, this is just the best.</blockquote>
          <div style="display: flex; align-items: center; gap: 14px; margin-top: auto;"><span style="width: 50px; height: 50px; border-radius: 50%; background: #FD5000; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 19px;">CL</span><div><div style="font-weight: 700; font-size: 19px;">Chris Little</div><div style="font-size: 15px; color: #4B5563;">Dickinson Roofing</div></div></div>
        </div>
        <div style="flex: 1; background: #fff; border: 1px solid #E7E0D6; border-radius: 18px; padding: 34px; display: flex; flex-direction: column; gap: 18px;">
          <div style="color: #FD5000; font-size: 20px; letter-spacing: 3px;">★★★★★</div>
          <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 27px; line-height: 1.34; letter-spacing: -.01em; margin: 0;">A huge load off our office, every job is faster, and inspections are safer and more professional.</blockquote>
          <div style="display: flex; align-items: center; gap: 14px; margin-top: auto;"><span style="width: 50px; height: 50px; border-radius: 50%; background: #FD5000; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 19px;">LC</span><div><div style="font-weight: 700; font-size: 19px;">Lisa Crocker</div><div style="font-size: 15px; color: #4B5563;">Roof Doctors</div></div></div>
        </div>
      </div>
    </div>`),
    cr("Testimonial · rating strip · 1080 × 1920",1080,1920,`<div style="width: 1080px; height: 1920px; box-sizing: border-box; background: linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%); color: #fff; padding: 110px 88px; position: relative; display: flex; flex-direction: column; justify-content: center; gap: 36px; border-radius: 6px; overflow: hidden;">
      <div style="text-align: center; margin-bottom: 18px;">
        <div style="color: #fff; font-size: 42px; letter-spacing: 8px;">★★★★★</div>
        <h2 style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 800; font-size: 86px; line-height: 1.04; letter-spacing: -.03em; margin: 22px 0 0;">Roofers don't go back</h2>
      </div>
      <div style="background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.22); border-radius: 22px; padding: 44px;">
        <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 38px; line-height: 1.32; margin: 0;">It's designed mobile-first, and for the guys in the field, it really, really shines.</blockquote>
        <div style="margin-top: 24px; font-size: 26px; color: rgba(255,255,255,.9);"><strong>Cooper Knutson</strong> · Russell's Quality Roofing</div>
      </div>
      <div style="background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.22); border-radius: 22px; padding: 44px;">
        <blockquote style="font-family: 'Plus Jakarta Sans',system-ui,sans-serif; font-weight: 700; font-size: 38px; line-height: 1.32; margin: 0;">Zuper Glass has already saved my life once, both hands free, I caught myself on a wet roof.</blockquote>
        <div style="margin-top: 24px; font-size: 26px; color: rgba(255,255,255,.9);"><strong>John Marrah</strong> · Marasun</div>
      </div>
      <img src="assets/logos/zuper-horizontal-white.png" alt="" style="position: absolute; left: 50%; transform: translateX(-50%); bottom: 64px; height: 44px; width: auto;">
    </div>`)
  ].join("");

  /* ---- Raise the Roof · Facebook Live show templates (1280 × 720, built in HTML) ---- */
  const SH="assets/shows/",RTRG="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)";
  const SP=[
    {n:["John","Doe"],full:"John Doe",t:"Chief Executive Officer",c:"Zuper",img:"speaker-b.png"},
    {n:["Mike","Aaron"],full:"Mike Aaron",t:"Sr. Director",c:"Acme Cloud Solutions",img:"speaker-c.png"},
    {n:["Scott","Beechuk"],full:"Scott Beechuk",t:"Partner",c:"Norwest",img:"speaker-b.png"}
  ];
  const coTxt=(c,sz)=>`<div style="font-family:${DISP};font-weight:700;font-size:${sz||15}px;line-height:1.1">${c}</div>`;
  const line=s=>`<div style="position:absolute;background:rgba(255,255,255,.42);${s}"></div>`;
  const FL=77,FR=1203,FT=67,FB=648,PL=730,PAD=13;
  const ln=(x1,y1,x2,y2)=>`<div style="position:absolute;left:${Math.min(x1,x2)}px;top:${Math.min(y1,y2)}px;width:${x1===x2?1:Math.abs(x2-x1)}px;height:${y1===y2?1:Math.abs(y2-y1)}px;background:rgba(255,255,255,.4);z-index:1"></div>`;
  const dia=(x,y)=>`<svg width="13" height="13" viewBox="0 0 16 16" style="position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%);z-index:4"><path d="M8 0 9.2 6.8 16 8 9.2 9.2 8 16 6.8 9.2 0 8 6.8 6.8Z" fill="#fff"/></svg>`;
  const frameBase=ln(0,FT,1280,FT)+ln(0,FB,1280,FB)+ln(FL,0,FL,720)+ln(FR,0,FR,720)+ln(PL,0,PL,720);
  const diaBase=dia(FL,FT)+dia(FR,FT)+dia(FL,FB)+dia(FR,FB)+dia(PL,FT)+dia(PL,FB);
  const pcell=(x,y,w,h,s,o)=>{o=o||{};return `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:12px;overflow:hidden;background:#333;z-index:2"><img src="${SH}${s.img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">${o.overlay?`<div style="position:absolute;left:0;right:0;bottom:0;padding:${o.sm?"13px 13px 11px":"24px 22px 20px"};background:linear-gradient(transparent,rgba(0,0,0,.86))"><div style="font-family:${DISP};font-weight:800;font-size:${o.sm?21:34}px;line-height:1.0">${o.twoline?s.n[0]+"<br>"+s.n[1]:s.full}</div><div style="font-family:${BODY};font-size:${o.sm?10:15}px;color:rgba(255,255,255,.86);margin-top:4px">${s.t}</div><div style="margin-top:${o.sm?5:9}px">${coTxt(s.c,o.sm?11:16)}</div></div>`:""}</div>`;};
  const tcell=(x,y,w,h,s,big)=>`<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;display:flex;flex-direction:column;justify-content:space-between;padding:4px 0;z-index:2"><div><div style="font-family:${DISP};font-weight:800;font-size:${big?32:27}px;line-height:1.03">${big?s.n[0]+"<br>"+s.n[1]:s.full}</div><div style="font-family:${BODY};font-size:${big?14:13}px;color:rgba(255,255,255,.86);margin-top:8px;max-width:210px">${s.t}</div></div><div>${coTxt(s.c)}</div></div>`;
  const badge=`<img src="${SH}raise-the-roof-logo.svg" alt="Raise the Roof" style="position:absolute;left:44px;top:38px;width:256px;height:auto;z-index:3">`;
  const rpcMark=`<svg width="50" height="48" viewBox="0 0 50 48" fill="none" stroke="#fff" stroke-width="2.4"><path d="M25 4 46 19V39a3 3 0 0 1-3 3H22l-7 5V42H7a3 3 0 0 1-3-3V19Z" stroke-linejoin="round"/><circle cx="25" cy="24" r="6"/><path d="M25 13.5v3.5M25 31v3.5M14.5 24h3.5M31.5 24H35M17.6 16.6l2.5 2.5M29.9 28.9l2.5 2.5M32.4 16.6l-2.5 2.5M20.1 28.9l-2.5 2.5" stroke-width="2"/></svg>`;
  const rpc=`<div style="display:flex;align-items:center;gap:11px">${rpcMark}<div><div style="font-family:${DISP};font-weight:800;font-size:17px;line-height:.96;letter-spacing:-.01em">Roofing Process<sup style="font-size:7px;font-weight:600;margin-left:3px;opacity:.92">7th Annual</sup></div><div style="font-family:${DISP};font-weight:800;font-size:17px;line-height:.96;letter-spacing:-.01em;margin-top:1px">Conference</div><div style="font-family:${BODY};font-weight:600;font-size:6.5px;letter-spacing:.1em;margin-top:4px;opacity:.92">"BUILDING FOR TOMORROW"</div></div></div>`;
  const lockup=`<div style="display:flex;align-items:center;gap:20px">${logo("white",32)}<span style="width:1px;height:50px;background:rgba(255,255,255,.4)"></span>${rpc}</div>`;
  const pill=`<div style="display:inline-flex;align-items:center;border:1.5px solid rgba(255,170,130,.8);border-radius:999px;padding:7px 16px;font-family:${MONO};font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:#FFC6A6">Facebook Live</div>`;
  const headline=`<div style="font-family:${DISP};font-weight:800;font-size:54px;line-height:1.02;letter-spacing:-.02em">Talking all things<br>Roofing process<br>conference</div>`;
  const dateRow=`<div style="display:flex;align-items:center;gap:26px;font-family:${BODY};font-size:16px;margin-top:30px"><span style="display:flex;align-items:center;gap:9px">${icon("calendar",18)} 26th March</span><span style="display:flex;align-items:center;gap:9px">${icon("clock",18)} 12 PM CST</span></div>`;
  const leftCol=`<div style="position:absolute;left:96px;top:236px;width:600px;z-index:2"><div style="margin-bottom:34px">${lockup}</div><div style="margin-bottom:24px">${pill}</div>${headline}${dateRow}</div>`;
  const rtrRight=mode=>{
    if(mode===1)return pcell(PL+PAD,FT+PAD,FR-PL-2*PAD,FB-FT-2*PAD,SP[1],{overlay:1,co:1});
    if(mode===4){const mx=(PL+FR)/2,my=(FT+FB)/2,cw=(mx-PL)-PAD-6,ch=(my-FT)-PAD-6;const q=[SP[1],SP[2],SP[1],SP[2]],pos=[[PL+PAD,FT+PAD],[mx+6,FT+PAD],[PL+PAD,my+6],[mx+6,my+6]];
      return q.map((s,i)=>pcell(pos[i][0],pos[i][1],cw,ch,s,{overlay:1,sm:1,twoline:1})).join("")+ln(mx,FT,mx,FB)+ln(PL,my,FR,my)+dia(mx,FT)+dia(mx,FB)+dia(PL,my)+dia(FR,my)+dia(mx,my);}
    const list=mode===2?[SP[1],SP[2]]:[SP[0],SP[1],SP[2]],N=list.length,rowH=(FB-FT)/N,pw=mode===2?198:174;
    return list.map((s,i)=>{const ry=FT+i*rowH,tx=PL+PAD+pw+24;return pcell(PL+PAD,ry+PAD,pw,rowH-2*PAD,s,{})+tcell(tx,ry+PAD,FR-tx-16,rowH-2*PAD,s,mode===2)+(i>0?ln(PL,ry,FR,ry)+dia(PL,ry)+dia(FR,ry):"");}).join("");
  };
  const rtr=mode=>`<div style="width:1280px;height:720px;position:relative;overflow:hidden;background:${RTRG};color:#fff;font-family:${BODY}">${frameBase}${rtrRight(mode)}${diaBase}${badge}${leftCol}</div>`;
  const shows=[[3,"3 speakers"],[2,"2 speakers"],[1,"1 speaker"],[4,"4 speakers"]].map(m=>cr(`Raise the Roof · ${m[1]} · 1280 × 720`,1280,720,rtr(m[0]),0.42)).join("");

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Social, ads &amp; campaigns</p>
      <h1>Social &amp; ads</h1>
      <p class="lede">The campaign side of the brand, social creatives at real export sizes, a full set of display ads at standard IAB sizes, and show templates like Raise the Roof. One orange gradient, the logo lockup, a single bold claim and a CTA. Use these as the starting frame for any paid or social push.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>brand #FD5000</span>
        <span class="chip">Aa Plus Jakarta · display</span>
        <span class="chip">1080 / 1920 / 1200 social</span>
        <span class="chip">IAB ad sizes</span>
      </div>
      <div class="hero-art"><div class="float ha-ads">
        <div class="tool">
          <div class="tb"><i></i><i></i><i></i><span class="lbl"><span class="l1">Instagram · 1080 × 1080</span><span class="l2">Story / Reel · 1080 × 1920</span></span><span class="exp">Export</span></div>
          <div class="cnv">
            <div class="art">
              <img class="lg" src="assets/logos/zuper-logomark-white.svg" alt="">
              <span class="eb">Field service · AI</span>
              <span class="ttl">Win 1 in 3 quotes on&#8209;site</span>
              <span class="cta">Book a demo</span>
            </div>
            <b class="hd8 h1"></b><b class="hd8 h2"></b><b class="hd8 h3"></b><b class="hd8 h4"></b>
          </div>
        </div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Social</p><h2 class="sec">Social media creatives</h2>
    <p class="docnote">↔ scroll · real export sizes, shown to scale · Instagram square &amp; story, landscape, quote/stat cards, Sense</p>
    <div class="adscroll"><div class="adcols">${creatives}</div></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Live show</p><h2 class="sec">Raise the Roof. Facebook Live</h2>
    <p class="docnote">↔ scroll · 1280 × 720 FB Live cover · one template, four speaker layouts</p>
    <p class="sec-note">The cover for the Raise the Roof roofing podcast. Keep the badge, logo lockup, headline and date fixed; swap the date and each speaker's <b>name, role and company</b> per episode. The layout adapts to <b>one, two, three or four speakers</b>, pick the matching variant.</p>
    <div class="adscroll"><div class="adrow">${shows}</div></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Display</p><h2 class="sec">Ad banners</h2>
    <p class="docnote">↔ scroll · standard IAB sizes · orange gradient + logo lockup + one CTA</p>
    <div class="adscroll"><div class="adrow">${leaderboard}${billboard}${medrect}${lgrect}${mobile}${halfpage}${skyscraper}</div></div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


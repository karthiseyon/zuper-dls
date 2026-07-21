/* ============ FOUNDATIONS: colour · type · voice ============ */
function foundTheme(canvas){
  return chromeCss(canvas);
}

function buildColor(){
  stage.style.cssText=foundTheme();
  const copyline=(code)=>`<div style="margin-top:14px;display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--border-default);border-radius:10px;padding:11px 13px"><code class="ct" style="font-family:'Geist Mono',monospace;font-size:12px;color:#191919;flex:1;overflow-x:auto;white-space:nowrap">${code}</code><button class="copybtn" style="font:600 11px/1 'Inter',sans-serif;color:var(--brand-default);background:var(--brand-subtle);border:0;border-radius:7px;padding:8px 11px;cursor:pointer">Copy</button></div>`;
  const gr=(bg,brd,h5,p)=>`<div class="modecard"><div style="height:56px;border-radius:10px;margin-bottom:12px;${brd};background:${bg}"></div><h5>${h5}</h5><p>${p}</p></div>`;
  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Colour</p>
      <h1>Colour</h1>
      <p class="lede">One vivid orange carries the whole brand; everything else is a neutral that lets the orange, and the product, do the talking. The same palette holds across decks, the site, email and ads.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>One orange · #FD5000</span>
        <span class="chip">Charcoal #282828</span>
        <span class="chip">Warm‑peach grounds</span>
        <span class="chip">click a swatch to copy</span>
      </div>
      <div class="hero-art"><div class="float ha-pal">
        <div class="band b1"><b>Zuper orange</b><span>#FD5000</span></div>
        <div class="band b2"><b>Charcoal</b><span>#282828</span></div>
        <div class="band b3"><b>Ink</b><span>#191919</span></div>
        <div class="band b4"><b>Peach</b><span>#FCE9E1</span></div>
        <div class="band b5"><b>Cream</b><span>#FFFAEA</span></div>
        <div class="band b6"><b>White</b><span>#FFFFFF</span></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · The one orange</p><h2 class="sec">#FD5000 does the work</h2>
    <p class="sec-note">Zuper is a single, high‑energy orange. Use it for <b style="color:var(--text-primary)">one thing at a time</b>, the primary action, a key number, an accent, never as a wash. On light grounds it's the call to action; on the orange gradient it becomes the whole surface.</p>
    <div class="swatches sem">
      ${swatch("color/brand/default","#FD5000","brand-default",true)}
      ${swatch("color/brand/hover","#E04600","brand-hover",true)}
      ${swatch("color/brand/subtle","#FFE7DC","brand-subtle",true)}
      ${swatch("color/brand/on-dark","#FF8B5A","brand-on-dark",true)}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · The gradient</p><h2 class="sec">The orange gradient</h2>
    <p class="sec-note">The signature ground for covers, hero panels and CTAs. <b style="color:var(--text-primary)">The rule: dark at the top‑left, light at the bottom‑right</b>, always this direction and these stops. Don't flip it or invent new gradients.</p>
    <div style="border-radius:16px;height:150px;background:linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);box-shadow:0 18px 44px rgba(20,4,3,.18)"></div>
    ${copyline("linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)")}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Neutrals</p><h2 class="sec">Ink, neutrals &amp; grounds</h2>
    <p class="sec-note">The quiet supporting cast. Charcoal carries high‑contrast feature bands; warm peach softens cards; the canvas is a barely‑there off‑white.</p>
    <div class="swatches">
      ${swatch("ink","#191919",null,false)}
      ${swatch("charcoal","#282828",null,false)}
      ${swatch("body","#4B5563",null,false)}
      ${swatch("muted","#7A7268",null,false)}
      ${swatch("border","#E7E0D6",null,false)}
      ${swatch("warm peach","#FBF2EA",null,false)}
      ${swatch("peach card","#FFE7DC",null,false)}
      ${swatch("canvas","#FBF8F4",null,false)}
      ${swatch("white","#FFFFFF",null,false)}
      ${swatch("sense black","#09090B",null,false)}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · Grounds</p><h2 class="sec">Where each colour lives</h2>
    <p class="sec-note">Pick the ground first; the rest follows. Never put body text on the gradient, and keep Sense black for Zuper Sense only.</p>
    <div class="modecards">
      ${gr("#fff","border:1px solid var(--border-default)","White","Default page ground, the everyday surface.")}
      ${gr("#FBF2EA","","Warm peach","Cards and soft feature blocks.")}
      ${gr("#282828","","Charcoal","High‑contrast feature bands.")}
      ${gr("linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)","","Orange gradient","Covers, hero panels and CTAs.")}
      ${gr("#09090B","","Sense black","Reserved for Zuper Sense only.")}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">05 · Contrast</p><h2 class="sec">Keep it readable</h2>
    <p class="sec-note">Orange is a <b style="color:var(--text-primary)">large‑text and UI‑accent</b> colour, not body copy. Body stays ink (#191919) on light and near‑white (#FAFAFA) on dark; on the orange ground, text and the logo go white.</p>
    <div class="modecards" style="margin-top:18px">
      <div class="modecard"><div class="sw" style="background:#fff;border:1px solid var(--border-default);display:flex;align-items:center;justify-content:center"><span style="color:#FD5000;font-weight:800;font-size:19px">Orange on white · 3.3:1</span></div><h5>Large or bold only</h5><p>Passes AA only for large text (18px+, or 14px+ bold). Fine for headlines, eyebrows and button labels at 14px/600+; never body copy or small regular text.</p></div>
      <div class="modecard"><div class="sw" style="background:linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%);display:flex;align-items:center;padding:0 14px"><span style="color:#fff;font-weight:800;font-size:19px">White on the gradient</span></div><h5>Keep copy on the dark end</h5><p>White reads at 10:1 over the dark corner but drops to 2.5:1 over the light end (#F2864F). Anchor text top‑left over the dark ground; never let copy sit on the bright corner.</p></div>
      <div class="modecard"><div class="sw" style="background:#09090B;display:flex;align-items:center;justify-content:center"><span style="color:#FF8B5A;font-weight:800;font-size:19px">Sense · 8.6:1</span></div><h5>The safe pairs</h5><p>Ink on white 17.6:1 · white on charcoal 14.7:1 · zinc #FAFAFA on Sense black 19:1 · orange‑on‑dark #FF8B5A 8.6:1. These carry body copy; orange carries emphasis.</p></div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">06 · Charts &amp; data</p><h2 class="sec">One series wears the orange</h2>
    <p class="sec-note">The chart palette is the brand palette: an <b style="color:var(--text-primary)">emphasis ladder, not a rainbow</b>. The series that carries the claim wears #FD5000; everything else steps down through ink and warm gray. Label series directly (colour is never the only cue), and past three series split into small multiples or fold the tail into "Other".</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;margin-bottom:22px">
      ${[["1 · Focus","#FD5000","#fff","The point of the chart. One series per chart, same as buttons."],
         ["2 · Comparison","#191919","#fff","The series it's measured against."],
         ["3 · Context","#7A7268","#fff","Older periods, benchmarks, trend lines."],
         ["4 · The field","#E7E0D6","#191919","Everything de‑emphasised behind the claim."]]
        .map(s=>`<div style="background:#fff;border:1px solid var(--border-default);border-radius:14px;overflow:hidden"><div style="height:54px;background:${s[1]};display:flex;align-items:flex-end;padding:10px 14px"><span style="font-family:'Geist Mono',monospace;font-size:11px;color:${s[2]}">${s[1]}</span></div><div style="padding:12px 14px"><h5 style="font:700 13px/1.2 'Inter',sans-serif;color:var(--text-primary);margin:0 0 5px">${s[0]}</h5><p style="font:400 12px/1.5 'Inter',sans-serif;color:var(--text-secondary);margin:0">${s[3]}</p></div></div>`).join("")}
    </div>
    <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:stretch">
      <div style="flex:1;min-width:290px;position:relative;background:#fff;border:1px solid var(--border-default);border-radius:16px;padding:24px">
        <span style="position:absolute;top:10px;right:10px;width:22px;height:22px;border-radius:50%;background:#1E854B;color:#fff;display:flex;align-items:center;justify-content:center">${icon("check",13)}</span>
        <div style="font-family:'Geist Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#7A7268;margin-bottom:18px">Quotes won on‑site</div>
        <div style="display:flex;gap:12px;align-items:flex-end;border-bottom:1px solid #E7E0D6;padding:0 6px">
          ${[["Q1","31%",62,"#E7E0D6","#7A7268",500],["Q2","34%",70,"#E7E0D6","#7A7268",500],["Q3","38%",82,"#E7E0D6","#7A7268",500],["Q4","46%",104,"#FD5000","#191919",700]]
            .map(b=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:7px"><span style="font-family:'Geist Mono',monospace;font-size:11px;font-weight:${b[5]};color:${b[4]}">${b[1]}</span><div style="width:100%;max-width:42px;height:${b[2]}px;background:${b[3]};border-radius:4px 4px 0 0"></div></div>`).join("")}
        </div>
        <div style="display:flex;gap:12px;padding:7px 6px 0">${["Q1","Q2","Q3","Q4"].map(q=>`<span style="flex:1;text-align:center;font:500 11px/1 'Inter',sans-serif;color:#7A7268">${q}</span>`).join("")}</div>
        <div style="font-family:'Geist Mono',monospace;font-size:11px;color:#7A7268;margin-top:16px;letter-spacing:.02em">One orange bar carries the claim, the rest recede. Values in Geist Mono, labels in Inter, hairline grid, no axis spines.</div>
      </div>
      <div style="flex:1;min-width:290px;position:relative;background:#fff;border:1px solid var(--border-default);border-radius:16px;padding:24px">
        <span style="position:absolute;top:10px;right:10px;width:22px;height:22px;border-radius:50%;background:#C42121;color:#fff;display:flex;align-items:center;justify-content:center">${icon("x",13)}</span>
        <div style="font-family:'Geist Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#7A7268;margin-bottom:18px">The same data, off‑brand</div>
        <div style="display:flex;gap:12px;align-items:flex-end;border-bottom:1px solid #E7E0D6;padding:0 6px">
          ${[["Q1","31%",62,"linear-gradient(180deg,#63A4FF,#1A56C4)","#1A56C4"],["Q2","34%",70,"linear-gradient(180deg,#7ADB8F,#1E854B)","#1E854B"],["Q3","38%",82,"linear-gradient(180deg,#FFD34D,#C99700)","#C99700"],["Q4","46%",104,"linear-gradient(135deg,#7E1C0B,#F2864F)","#D43A14"]]
            .map(b=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:7px"><span style="font-family:'Geist Mono',monospace;font-size:11px;font-weight:700;color:${b[4]}">${b[1]}</span><div style="width:100%;max-width:42px;height:${b[2]}px;background:${b[3]};border-radius:6px 6px 0 0;box-shadow:0 6px 12px rgba(0,0,0,.28)"></div></div>`).join("")}
        </div>
        <div style="display:flex;gap:12px;padding:7px 6px 0">${["Q1","Q2","Q3","Q4"].map(q=>`<span style="flex:1;text-align:center;font:500 11px/1 'Inter',sans-serif;color:#7A7268">${q}</span>`).join("")}</div>
        <div style="font-family:'Geist Mono',monospace;font-size:11px;color:#7A7268;margin-top:16px;letter-spacing:.02em">Never a rainbow, gradient fills, shadows or 3D, a second y‑axis, or values wearing the series colour. The gradient is a ground, not a fill.</div>
      </div>
    </div>
    <div class="modecards" style="margin-top:22px">
      <div class="modecard"><div style="display:flex;height:44px;border-radius:10px;overflow:hidden;margin-bottom:12px">${["#FFE7DC","#F2864F","#FD5000","#D43A14","#7E1C0B"].map(c=>`<span style="flex:1;background:${c}"></span>`).join("")}</div><h5>Magnitude runs through orange tints</h5><p>Sequential scales (heatmaps, funnels, intensity) run light→dark through the one hue: #FFE7DC → #F2864F → #FD5000 → #D43A14 → #7E1C0B. One hue, ordered, never a rainbow ramp.</p></div>
      <div class="modecard"><div style="height:44px;border-radius:10px;margin-bottom:12px;background:#fff;border:1px solid var(--border-default);display:flex;align-items:center;justify-content:center;gap:18px"><span style="font-family:'Geist Mono',monospace;font-size:13px;font-weight:700;color:#1E854B">▲ +12%</span><span style="font-family:'Geist Mono',monospace;font-size:13px;font-weight:700;color:#C42121">▼ −8%</span></div><h5>Good and bad are status colours</h5><p>Positive #1E854B, negative #C42121, always with an arrow or label, never colour alone. Brand orange never signals polarity; it signals focus.</p></div>
      <div class="modecard"><div style="height:44px;border-radius:10px;margin-bottom:12px;background:#09090B;display:flex;align-items:flex-end;gap:6px;padding:8px 14px">${[14,20,26,17,29].map((h,i)=>`<span style="flex:1;height:${h}px;background:${i===4?"#FF8B5A":"rgba(255,255,255,.28)"};border-radius:3px 3px 0 0"></span>`).join("")}</div><h5>Charts sit on white, or Sense black</h5><p>On white: ink text, #E7E0D6 hairlines. On a Sense slide: #FF8B5A leads, white comparison, rgba(255,255,255,.14) grid. Never place marks on the orange gradient; on an orange slide the chart rides a white card.</p></div>
    </div>
    <p style="font-family:'Geist Mono',monospace;font-size:11px;color:#7A7268;margin-top:18px;letter-spacing:.02em">Unsure which form fits the data? <a href="https://datavizproject.com/" target="_blank" rel="noopener" style="color:var(--brand-default);text-decoration:none;border-bottom:1px solid currentColor">datavizproject.com</a> catalogues every chart type by data shape and job, then colour it with the ladder above.</p>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


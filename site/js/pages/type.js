function buildType(){
  stage.style.cssText=foundTheme();
  const MONO="'Geist Mono',ui-monospace,monospace";
  const spec=(fam,label,meta,big,sample)=>`<div style="border:1px solid var(--border-default);border-radius:16px;padding:26px;background:#fff;margin-bottom:16px">
    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px"><span style="font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-tertiary)">${label}</span><span style="font-family:${MONO};font-size:11px;color:var(--text-tertiary)">${meta}</span></div>
    <div style="font-family:${fam};font-weight:700;font-size:clamp(32px,6vw,60px);letter-spacing:-.03em;line-height:1.02;margin-top:14px;color:#191919">${big}</div>
    <div style="font-family:${fam};font-weight:500;font-size:19px;color:#4B5563;margin-top:12px">${sample}</div>
  </div>`;
  const pairing=(ic,t,fams,use)=>`<div class="feat"><div class="ic">${icon(ic,20)}</div><h5>${t}</h5><p style="margin-bottom:10px">${use}</p><div style="font-family:${MONO};font-size:11px;color:var(--brand-default);letter-spacing:.04em">${fams}</div></div>`;
  const scaleRow=(name,px,fam,wt)=>`<div class="scrow"><span class="lb">${name}</span><span style="font-family:${fam};font-weight:${wt};font-size:${px}px;line-height:1;letter-spacing:-.02em;color:#191919">Run your service business</span><span class="px">${px}px</span></div>`;
  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Type</p>
      <h1>Typography</h1>
      <p class="lede">Two type systems, one voice. <b style="color:#191919">Aptos</b> powers the deck. It's the native Office face, so slides render identically anywhere. <b style="color:#191919">Plus Jakarta Sans</b> + <b style="color:#191919">Inter</b> power the site, email and ads. <b style="color:#191919">Geist Mono</b> sets the little uppercase eyebrows that are unmistakably Zuper.</p>
      <div class="chips">
        <span class="chip">Aa Aptos · decks</span>
        <span class="chip">Aa Plus Jakarta · display</span>
        <span class="chip">Aa Inter · body</span>
        <span class="chip">&lt;/&gt; Geist Mono · eyebrows</span>
      </div>
      <div class="hero-art"><div class="float ha-typ">
        <div class="big"><span class="f1">Ag</span><span class="f2">Ag</span></div>
        <div class="who"><span class="f1">Plus Jakarta Sans · web</span><span class="f2">Aptos Display · decks</span></div>
        <div class="line"><span class="tw">Field service, intelligently run</span><span class="cr"></span></div>
        <div class="fams"><span>Aptos</span><span>Plus Jakarta</span><span>Geist Mono</span></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Two systems</p><h2 class="sec">One voice, the right face for each medium</h2>
    <p class="sec-note">Match the typeface to where the work lives, then never mix the two display faces in one artefact.</p>
    <div class="cols-2" style="margin-top:6px">
      ${pairing("presentation","Decks","Aptos Display · titles &nbsp;/&nbsp; Aptos · body","PowerPoint is built for Aptos, the native Microsoft face, so every deck renders the same on any machine.")}
      ${pairing("globe","Web · marketing · email","Plus Jakarta Sans · display &nbsp;/&nbsp; Inter · body","The zuper.co pairing: Plus Jakarta for headlines and Inter for readable body and UI.")}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · Specimens</p><h2 class="sec">The families</h2>
    ${spec("'Plus Jakarta Sans',sans-serif","Plus Jakarta Sans","Display · 600 / 700","Run your service business","The quick brown fox jumps over the lazy dog · 0123456789")}
    ${spec("'Aptos Display','Aptos',sans-serif","Aptos Display","Deck titles · 700","From first call to final invoice","The quick brown fox jumps over the lazy dog · 0123456789")}
    ${spec("'Inter',sans-serif","Inter","Body &amp; UI · 400 / 500 / 700","Schedule, dispatch and invoice from one platform.","The quick brown fox jumps over the lazy dog · 0123456789")}
    ${spec("'Geist Mono',monospace","Geist Mono","Eyebrows &amp; labels · 400 / 500","FOUNDATION · TYPOGRAPHY","01 · THE RULE · CONFIDENTIAL · 0123456789")}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · The scale</p><h2 class="sec">Hierarchy</h2>
    <p class="sec-note">Big, tight display for headlines; calm body. Tighten letter‑spacing as size grows.</p>
    <div class="sccard">
      ${scaleRow("Display / H1 · 58","58","'Plus Jakarta Sans',sans-serif",700)}
      ${scaleRow("Section / H2 · 34","34","'Plus Jakarta Sans',sans-serif",700)}
      ${scaleRow("Subhead / H3 · 22","22","'Plus Jakarta Sans',sans-serif",600)}
      ${scaleRow("Body · 16","16","'Inter',sans-serif",400)}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · The signature</p><h2 class="sec">Geist Mono eyebrows</h2>
    <p class="sec-note">The one detail that instantly reads as Zuper: a small, <b style="color:var(--text-primary)">uppercase, letter‑spaced</b> monospace label above a section or headline. Keep them short, a category, a number, a tag.</p>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:6px">
      <span style="font-family:${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-default);border:1px dashed var(--chip-line);border-radius:8px;padding:9px 12px">Foundation · Colour</span>
      <span style="font-family:${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-default);border:1px dashed var(--chip-line);border-radius:8px;padding:9px 12px">01 · The rule</span>
      <span style="font-family:${MONO};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-default);border:1px dashed var(--chip-line);border-radius:8px;padding:9px 12px">Zuper Confidential</span>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">05 · Playground</p><h2 class="sec">Try the scale</h2>
    <p class="sec-note">Pick a family and drag the size. Tracking and leading follow the DLS rules on their own, and every slider is yours to override. Weight runs the full range on the web fonts and snaps to real cuts on Aptos. Click the sample and type your own line.</p>
    <div class="tplay">
      <div class="ctl">
        <div class="row2"><span class="lbl">Family</span><div class="fsel" id="tpFsel">
          <button data-f="pjs" class="on" aria-pressed="true">Plus Jakarta</button>
          <button data-f="aptos" aria-pressed="false">Aptos</button>
          <button data-f="inter" aria-pressed="false">Inter</button>
          <button data-f="geist" aria-pressed="false">Geist Mono</button>
        </div></div>
        <div class="row2"><span class="lbl">Size</span><input type="range" id="tpSize" min="10" max="96" step="1" value="58" aria-label="Font size in pixels"><span class="num" id="tpSizeV">58px</span></div>
        <div class="row2"><span class="lbl">Weight</span><input type="range" id="tpWt" min="200" max="800" step="10" value="700" aria-label="Font weight"><span class="num" id="tpWtV">700</span></div>
        <div class="row2"><span class="lbl">Tracking</span><input type="range" id="tpTr" min="-0.05" max="0.2" step="0.001" value="-0.03" aria-label="Letter spacing in em"><span class="num" id="tpTrV">-0.03em</span></div>
        <div class="row2"><span class="lbl">Leading</span><input type="range" id="tpLh" min="0.9" max="1.8" step="0.05" value="1.05" aria-label="Line height"><span class="num" id="tpLhV">1.05</span></div>
        <div class="read">
          <div class="r"><span>family</span><b id="tpRfam">Plus Jakarta Sans</b></div>
          <div class="r"><span>use</span><b id="tpRuse">Display · site &amp; email</b></div>
        </div>
        <button class="tp-copy" id="tpCopy">${icon("copy",14)} Copy as CSS</button>
      </div>
      <div>
        <div class="stage2"><div class="sample" id="tpSample" contenteditable="true" spellcheck="false" role="textbox" aria-label="Editable type sample">Run your service business</div></div>
        <p class="hint">Tracking rule: -0.03em at 44px+, -0.025em from 28px, -0.02em from 20px. Eyebrows run +0.16em, uppercase, always.</p>
      </div>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  (function(){
    const F={
      pjs:{css:"'Plus Jakarta Sans',sans-serif",name:"Plus Jakarta Sans",use:"Display · site & email",wt:700,def:58,tx:"Run your service business",up:false},
      aptos:{css:"'Aptos',sans-serif",name:"Aptos",use:"Decks",wt:700,def:48,tx:"From first call to final invoice",up:false},
      inter:{css:"'Inter',sans-serif",name:"Inter",use:"Body & UI",wt:400,def:16,tx:"Schedule, dispatch and invoice from one platform.",up:false},
      geist:{css:"'Geist Mono',monospace",name:"Geist Mono",use:"Eyebrows & labels",wt:500,def:12,tx:"Foundation · Typography",up:true}
    };
    let fam="pjs";
    const el=id=>document.getElementById(id);
    const sel=el("tpFsel"),smp=el("tpSample");
    const rngS=el("tpSize"),rngW=el("tpWt"),rngT=el("tpTr"),rngL=el("tpLh");
    const WTS={pjs:{min:200,max:800},aptos:{min:300,max:900,snap:[300,400,600,700,800,900]},inter:{min:100,max:900},geist:{min:100,max:900}};
    const track=(f,s)=>f==="geist"?0.16:(f==="inter"?(s>=15&&s<=20?-0.011:0):(f==="aptos"&&s<20?0:(s>=44?-0.03:s>=28?-0.025:s>=20?-0.02:-0.01)));
    const lineh=(f,s)=>f==="inter"?1.55:f==="geist"?1.4:(s>=28?1.05:(f==="aptos"?1.5:1.25));
    const snapW=v=>{const w=WTS[fam];return w.snap?w.snap.reduce((b,x)=>Math.abs(x-v)<Math.abs(b-v)?x:b,w.snap[0]):v;};
    const fill=r=>r.style.setProperty("--p",((r.value-r.min)/(r.max-r.min)*100||0)+"%");
    function render(){
      const f=F[fam],s=+rngS.value,w=+rngW.value,tr=+rngT.value,lh=+rngL.value;
      smp.style.cssText=`font-family:${f.css};font-weight:${w};font-size:${s}px;letter-spacing:${tr}em;line-height:${lh};text-transform:${f.up?"uppercase":"none"}`;
      el("tpSizeV").textContent=s+"px";
      el("tpWtV").textContent=w;
      el("tpTrV").textContent=(tr>0?"+":"")+(+tr.toFixed(3))+"em";
      el("tpLhV").textContent=(+lh.toFixed(2)).toString();
      el("tpRfam").textContent=f.name;
      el("tpRuse").textContent=f.use;
      [rngS,rngW,rngT,rngL].forEach(fill);
    }
    function derive(){rngT.value=track(fam,+rngS.value);rngL.value=lineh(fam,+rngS.value);}
    sel.addEventListener("click",e=>{
      const b=e.target.closest("button");if(!b)return;
      fam=b.dataset.f;
      sel.querySelectorAll("button").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on?"true":"false");});
      const f=F[fam],ws=WTS[fam];
      rngS.value=f.def;
      rngW.min=ws.min;rngW.max=ws.max;rngW.value=f.wt;
      smp.textContent=f.tx;
      derive();render();
    });
    rngS.addEventListener("input",()=>{derive();render();});
    rngW.addEventListener("input",()=>{rngW.value=snapW(+rngW.value);render();});
    rngT.addEventListener("input",render);
    rngL.addEventListener("input",render);
    const cpBtn=el("tpCopy"),cpOrig=cpBtn.innerHTML;
    cpBtn.addEventListener("click",()=>{
      const f=F[fam],tr=+(+rngT.value).toFixed(3);
      const css=`font-family: ${f.css};\nfont-weight: ${+rngW.value};\nfont-size: ${+rngS.value}px;\nletter-spacing: ${tr}em;\nline-height: ${+(+rngL.value).toFixed(2)};${f.up?"\ntext-transform: uppercase;":""}`;
      const done=()=>{cpBtn.classList.add("done");cpBtn.textContent="Copied ✓";setTimeout(()=>{cpBtn.classList.remove("done");cpBtn.innerHTML=cpOrig;},1400);};
      if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(css).then(done).catch(()=>{});
    });
    derive();render();
  })();
  window.scrollTo(0,0);
}


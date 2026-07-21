/* ============ BRAND ASSETS (logos + social) ============ */
function buildAssets(){
  stage.style.cssText=chromeCss();

  const variants=[["","Full colour",false],["-gray","Gray",false],["-white","White",true],["-inverted","Inverted",true]];
  const fams=[
    ["Logomark","The diamond mark on its own, favicons, app icons and tight spaces.","zuper-logomark",true],
    ["Horizontal logo","Mark + wordmark side by side, the default lockup for headers and documents.","zuper-horizontal",true],
    ["Vertical logo","Mark stacked above the wordmark, for square and centred placements.","zuper-vertical",true]
  ];
  const dn=icon("download",13);
  const logoCard=(key,svg,v)=>{
    const base=`assets/logos/${key}${v[0]}`;
    return `<div class="la-card${v[2]?' dark':''}">
      <div class="la-prev"><img src="${base}.png" alt="Zuper ${key} ${v[1]}" loading="lazy"></div>
      <div class="la-meta"><span class="la-name">${v[1]}</span><div class="la-btns">
        ${svg?`<button class="la-dl dl-btn" data-href="${base}.svg">${dn}SVG</button>`:``}
        <button class="la-dl dl-btn" data-href="${base}.png">${dn}PNG</button>
        ${svg?`<button class="la-dl dl-btn" data-href="${base}.eps">${dn}EPS</button>`:``}
      </div></div></div>`;
  };
  const families=fams.map(f=>`<div class="la-fam fam-${f[2]}"><h3 class="grp">${f[0]}</h3><p class="grp-note">${f[1]}</p>
      <div class="la-grid">${variants.map(v=>logoCard(f[2],f[3],v)).join("")}</div></div>`).join("");

  const socCard=(src,nm,dim)=>`<div class="s-card">
      <div class="s-prev"><img src="${src}" alt="${nm}" loading="lazy"></div>
      <div class="s-meta"><div><div class="nm">${nm}</div><div class="dim">${dim}</div></div>
        <div class="s-btns">
          <button class="la-dl dl-btn" data-href="${src}">${dn}Download</button>
        </div></div></div>`;
  const zoom=[
    socCard("assets/zoom/zuper-zoom-wordmark.png","Zoom background, wordmark","1920 × 1080 · 16:9"),
    socCard("assets/zoom/zuper-zoom-logomark.png","Zoom background, logomark","1920 × 1080 · 16:9")
  ].join("");
  const linkedin=[
    socCard("assets/linkedin/zuper-linkedin-trades.png","Personal cover. Skilled Trades","1584 × 396"),
    socCard("assets/linkedin/zuper-linkedin-sense.png","Personal cover. Zuper Sense","1584 × 396")
  ].join("");

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Brand · Downloads</p>
      <h1>Brand assets</h1>
      <p class="lede">Grab‑and‑go brand files, no design tools needed. The Zuper logo in every lockup and colour variant, plus ready‑made Zoom backgrounds, LinkedIn covers and a branded Word document. <b>Download</b> and it's on‑brand.</p>
      <div class="chips" style="margin-top:24px">
        <span class="chip">3 logo lockups · 4 variants</span>
        <span class="chip">SVG + PNG + EPS</span>
        <span class="chip">Zoom &amp; LinkedIn templates</span>
        <span class="chip">Word .docx</span>
      </div>
      <div class="hero-art"><div class="float ha-assets">
        <div class="hd">${icon("folder",14)} zuper-brand-assets <em>SVG · PNG · EPS · DOCX</em></div>
        <div class="f"><div class="ic">${icon("users",20)}</div><div class="meta"><div class="nm">LinkedIn cover photo</div><div class="mt">1584 × 396</div></div><div class="dl">${icon("download",18)}</div></div>
        <div class="f"><div class="ic">${icon("camera",20)}</div><div class="meta"><div class="nm">Zoom background</div><div class="mt">1920 × 1080</div></div><div class="dl">${icon("download",18)}</div></div>
        <div class="f"><div class="ic">${icon("invoice",20)}</div><div class="meta"><div class="nm">Branded Word doc</div><div class="mt">.docx</div></div><div class="dl">${icon("download",18)}</div></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Logos</p><h2 class="sec">Logo library</h2>
    <p class="sec-note">Three lockups, each in four variants. Use <b style="color:var(--text-primary)">Full colour</b> or <b style="color:var(--text-primary)">Gray</b> on light grounds; <b style="color:var(--text-primary)">White</b> or <b style="color:var(--text-primary)">Inverted</b> on dark or photographic grounds. Never recolour, stretch or add effects. <b style="color:var(--text-primary)">Download</b> any variant as SVG (for design tools &amp; code), PNG (for docs &amp; web) or EPS (for print), or grab the whole library as a zip.</p>
    <div class="la-pack" id="laPack">
      <button class="la-pack-all" data-pack="all">${icon("download",15)} Download all (SVG + PNG + EPS)</button>
      <button class="la-dl" data-pack="svg">${dn}All SVG (.zip)</button>
      <button class="la-dl" data-pack="png">${dn}All PNG (.zip)</button>
      <button class="la-dl" data-pack="eps">${dn}All EPS (.zip)</button>
    </div>
    ${families}
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · Zoom backgrounds</p><h2 class="sec">Video call backgrounds</h2>
    <p class="sec-note">On‑brand 16:9 virtual backgrounds for Zoom, Meet and Teams. Download and add under <i>Backgrounds &amp; effects</i>.</p>
    <div class="la-soc">${zoom}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · LinkedIn covers</p><h2 class="sec">LinkedIn personal cover photos</h2>
    <p class="sec-note">Personal profile banners at LinkedIn's 1584 × 396 cover size.</p>
    <div class="la-soc">${linkedin}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · Document</p><h2 class="sec">Word document template</h2>
    <p class="sec-note">A branded <b style="color:var(--text-primary)">.docx</b> with the Zuper logo header, orange rule, <i>Page X of Y</i> and a confidentiality footer. Aptos throughout. <b style="color:var(--text-primary)">Download</b> and start typing.</p>
    <div class="la-soc">
      <div class="s-card">
        <div class="s-prev" style="background:#ECEAE6;padding:26px 26px 0">
          <div style="width:100%;background:#fff;border-radius:6px 6px 0 0;box-shadow:0 8px 22px rgba(20,4,3,.14);padding:18px 18px 22px;font-family:'Inter',sans-serif">
            <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #FD5000;padding-bottom:9px">${logo("dark",13)}<span style="font:700 8px/1 'Inter',sans-serif;color:#191919">Field Service Operations Brief</span></div>
            <div style="height:7px;width:34%;background:#FD5000;border-radius:2px;margin:13px 0 9px"></div>
            <div style="height:9px;width:78%;background:#191919;border-radius:2px;margin-bottom:11px"></div>
            <div style="height:5px;width:96%;background:#E2DCD3;border-radius:2px;margin-bottom:6px"></div>
            <div style="height:5px;width:90%;background:#E2DCD3;border-radius:2px;margin-bottom:6px"></div>
            <div style="height:5px;width:64%;background:#E2DCD3;border-radius:2px"></div>
          </div>
        </div>
        <div class="s-meta"><div><div class="nm">Zuper document template</div><div class="dim">.docx · Aptos · letter</div></div>
          <div class="s-btns"><button class="la-dl dl-btn" data-href="assets/zuper-document-template.docx" data-name="Zuper-Document.docx">${dn}Download</button></div>
        </div></div>
    </div>
  </div></section>
  <div style="height:60px"></div>`;

  document.getElementById("laPack").addEventListener("click",e=>{
    const b=e.target.closest("[data-pack]");if(!b||b.disabled)return;
    const kind=b.dataset.pack,urls=[];
    const exts=kind==="all"?["svg","png","eps"]:[kind];
    fams.forEach(f=>variants.forEach(v=>exts.forEach(x=>urls.push(`assets/logos/${f[2]}${v[0]}.${x}`))));
    const o=b.innerHTML;b.disabled=true;b.innerHTML="Preparing…";
    const enc=new TextEncoder();
    Promise.all(urls.map(u=>fetch(u).then(r=>{if(!r.ok)throw 0;return r.arrayBuffer();}).then(buf=>({name:enc.encode(u.split("/").pop()),data:new Uint8Array(buf)}))))
      .then(files=>{
        const url=URL.createObjectURL(makeZip(files)),a=document.createElement("a");
        a.href=url;a.download=kind==="all"?"zuper-logos.zip":`zuper-logos-${kind}.zip`;
        document.body.appendChild(a);a.click();
        setTimeout(()=>{URL.revokeObjectURL(url);a.remove();},1500);
        b.innerHTML="Saved ✓";setTimeout(()=>{b.disabled=false;b.innerHTML=o;},1600);
      })
      .catch(()=>{
        urls.forEach((u,i)=>setTimeout(()=>zDownload(u),i*350));
        b.innerHTML="Downloading…";
        setTimeout(()=>{b.disabled=false;b.innerHTML=o;},urls.length*350+800);
      });
  });
  window.scrollTo(0,0);
}


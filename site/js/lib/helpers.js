function swatch(name,hex,varName,sem){
  return `<div class="sw-card${sem?' sem':''}">
    <div class="sw-chip" style="background:${hex}"></div>
    <div class="sw-body">
      <div class="sw-name">${name}</div>
      ${varName?`<div class="sw-var">--${varName}</div>`:''}
      <div class="sw-hex">${hex}</div>
      <div class="sw-fmts"><button data-fmt="rgb" aria-label="Copy ${name} as RGB">RGB</button><button data-fmt="hsl" aria-label="Copy ${name} as HSL">HSL</button></div>
    </div></div>`;
}
function hexToRgb(hex){let h=hex.replace("#","");if(h.length===3)h=h.split("").map(x=>x+x).join("");return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)];}
function hexFmt(hex,fmt){
  const [r,g,b]=hexToRgb(hex);
  if(fmt==="rgb")return `rgb(${r}, ${g}, ${b})`;
  const rn=r/255,gn=g/255,bn=b/255,mx=Math.max(rn,gn,bn),mn=Math.min(rn,gn,bn),l=(mx+mn)/2;
  let h=0,s=0;
  if(mx!==mn){
    const d=mx-mn;
    s=l>0.5?d/(2-mx-mn):d/(mx+mn);
    h=mx===rn?(gn-bn)/d+(gn<bn?6:0):mx===gn?(bn-rn)/d+2:(rn-gn)/d+4;
    h*=60;
  }
  return `hsl(${Math.round(h)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
}


/* ===== Shared page-chrome tokens — single source of truth for every light styleguide page ===== */
const CHROME_TOKENS={
  "brand-default":"#FD5000","brand-hover":"#E04600","brand-deep":"#B5271C","brand-subtle":"#FFE7DC",
  "surface-default":"#FFFFFF","surface-subtle":"#F6F1EB","surface-card":"#FFFFFF","surface-cream":"#FFF7EE",
  "text-primary":"#191919","text-secondary":"#4B5563","text-tertiary":"#7A7268",
  "border-default":"#E7E0D6","border-subtle":"#F0EAE1"};
function chromeCss(canvas){
  const W=Object.assign({},SYS.find(s=>s.id==="website").vars,CHROME_TOKENS);
  return Object.entries(W).map(([k,v])=>`--${k}:${v}`).join(";")
    +`;--display:'Plus Jakarta Sans',system-ui,sans-serif;--body:'Inter',system-ui,sans-serif;--c-canvas:${canvas||"#F8F5F2"}`
    +`;--hero-bg:linear-gradient(118deg,#FFFFFF,#FBF2EA 55%,#FBDFD0);--hero-ink:#191919;--hero-sub:#4B5563;--hero-kick:#FD5000;--chip-bg:#fff;--chip-ink:#191919;--chip-line:#E7E0D6`;
}


/* ── Deck master template · download card ────────────────────────────────
   One card, used on both the Deck page and Brand assets, so the two stay in
   step. Previews the two covers the file ships: primary (white) and
   secondary (orange gradient). */
function deckTemplateCard(){
  const GRAD="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)";
  const thumb=(scheme)=>{
    const white=scheme==="white";
    return `<div style="flex:1;min-width:0;border-radius:8px;overflow:hidden;box-shadow:0 10px 26px rgba(20,4,3,.16);background:${white?"#fff":GRAD};aspect-ratio:16/9;position:relative;padding:16px 18px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center">
      ${white?`<div style="position:absolute;top:0;left:0;right:0;height:3px;background:${GRAD}"></div>`:``}
      <div style="font:700 7px/1 'Inter',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:${white?"#FD5000":"rgba(255,255,255,.9)"};margin-bottom:7px">Eyebrow</div>
      <div style="font:700 17px/1.05 'Aptos Display','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;color:${white?"#191919":"#fff"}">Deck title<br>goes here</div>
      ${white?`<div style="align-self:flex-start;margin-top:5px;background:#FCE9E1;color:#FD5000;font:700 17px/1.05 'Aptos Display','Plus Jakarta Sans',sans-serif;letter-spacing:-.02em;padding:1px 6px;border-radius:4px">in two lines.</div>`:``}
      <div style="position:absolute;bottom:11px;right:12px">${logo(white?"dark":"white",9)}</div>
      <div style="position:absolute;bottom:12px;left:18px;font:500 6px/1 'Geist Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:${white?"#888":"rgba(255,255,255,.85)"}">${white?"Primary · orange interiors":"Secondary · white interiors"}</div>
    </div>`;
  };
  return `<div class="la-soc"><div class="s-card">
    <div class="s-prev" style="background:#ECEAE6;padding:26px;display:flex;gap:16px;align-items:stretch">
      ${thumb("white")}${thumb("orange")}
    </div>
    <div class="s-meta">
      <div><div class="nm">Zuper deck master</div><div class="dim">.pptx · 36 slides · 16:9 · Aptos</div></div>
      <div class="s-btns"><button class="la-dl dl-btn" data-href="assets/zuper-deck-master.pptx" data-name="Zuper-Deck-Master.pptx">${icon("download",13)}Download</button></div>
    </div>
  </div></div>`;
}

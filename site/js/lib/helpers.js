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


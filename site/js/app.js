/* ============ NAV ============ */
const ALL=[{id:"use",name:"How to use this",hex:"#FD5000",meta:"start",grp:"",desc:"Plug the system into Claude."},{id:"voice",name:"Voice & tone",hex:"#FD5000",meta:"voice",grp:"Foundations",desc:"How Zuper sounds, words we skip."},{id:"logo-usage",name:"Logo usage",hex:"#FD5000",meta:"brand",grp:"Foundations",desc:"Clear space, sizing, misuse."},{id:"color",name:"Colour",hex:"#FD5000",meta:"palette",grp:"Foundations",desc:"One orange, plus neutrals."},{id:"type",name:"Typography",hex:"#FD5000",meta:"type",grp:"Foundations",desc:"Aptos, Jakarta and Inter."},{id:"icons",name:"Iconography",hex:"#FD5000",meta:"icons",grp:"Foundations",desc:"One weight, on a 256 grid."},{id:"agents",name:"Agent avatars",hex:"#FD5000",meta:"agents",grp:"Foundations",desc:"A mascot per AI agent."},{id:"humans",name:"Mini humans",hex:"#FD5000",meta:"brand",grp:"Foundations",desc:"Crews for empty states."},{id:"assets",name:"Brand assets",hex:"#FD5000",meta:"logos",grp:"Foundations",desc:"Logos, backgrounds, files."},{id:"deck",name:"Deck",hex:"#FD5000",meta:"PPT",grp:"Systems",desc:"White, orange, or Sense dark."},{id:"website",name:"Website DLS",hex:"#FD5000",meta:"web",grp:"Systems",desc:"The zuper.co system."},{id:"one-pager",name:"Case study",hex:"#FD5000",meta:"1‑pager",grp:"Systems",desc:"One-page customer story."},{id:"emailer",name:"Emailer",hex:"#FD5000",meta:"email",grp:"Systems",desc:"Lifecycle email layouts."},{id:"email-sig",name:"Email signature",hex:"#FD5000",meta:"mail",grp:"Systems",desc:"The signature builder."},{id:"social",name:"Social & ads",hex:"#FD5000",meta:"promo",grp:"Systems",desc:"Post and ad sizes."}];
const CHAP={"":["00","Start"],"Foundations":["01","Foundations"],"Systems":["02","Systems"]};
function setActive(id,push){
  [...nav.querySelectorAll("button")].forEach(b=>{const on=b.dataset.id===id;b.classList.toggle("active",on);if(on)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");});
  if(id==="overview")buildOverview();
  else if(id==="assets")buildAssets();
  else if(id==="deck")buildDeck();
  else if(id==="one-pager")buildOnePager();
  else if(id==="use")buildUse();
  else if(id==="email-sig")buildEmailSig();
  else if(id==="social")buildSocial();
  else if(id==="emailer")buildEmailer();
  else if(id==="humans")buildHumans();
  else if(id==="icons")buildIcons();
  else if(id==="logo-usage")buildLogos();
  else if(id==="color")buildColor();
  else if(id==="type")buildType();
  else if(id==="voice")buildVoice();
  else if(id==="agents")buildAgents();
  else if(id==="website")buildWebsite(SYS.find(s=>s.id===id));
  else buildOverview();
  appendPager(id);
  buildSubnav(id);
  stage.querySelectorAll("img").forEach(im=>{if(!im.loading)im.loading="lazy";im.decoding="async";if(!im.hasAttribute("alt"))im.setAttribute("alt","");});
  stage.querySelectorAll(".s-prev img,.acard .frame img,.la-prev img").forEach(im=>{im.tabIndex=0;im.setAttribute("role","button");if(!im.getAttribute("aria-label"))im.setAttribute("aria-label","View larger"+(im.alt?": "+im.alt:""));});
  if(push!==false)window.scrollTo(0,0);
  stage.classList.remove("pgin");void stage.offsetWidth;stage.classList.add("pgin");
  revealSections();
  freezeGifs(stage);
  if(push===false){if(history.replaceState)history.replaceState(null,"","#"+id);}
  else if(history.pushState&&location.hash!=="#"+id)history.pushState(null,"","#"+id);
  nav.classList.remove("open");
}
function gotoHash(raw,push){
  const [pid,si]=raw.split("@");
  const ok=ALL.some(a=>a.id===pid);
  setActive(ok?pid:"overview",push);
  if(ok&&si!==undefined){const t=document.getElementById("s-"+pid+"-"+si);if(t)setTimeout(()=>t.scrollIntoView({behavior:"smooth",block:"start"}),80);}
}
window.addEventListener("hashchange",()=>{
  gotoHash((location.hash||"").slice(1),false);
});
/* Reduced motion: swap animated GIFs for a static first frame */
const _rmq=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)");
function freezeGifs(root){
  if(!_rmq||!_rmq.matches)return;
  root.querySelectorAll('img[src$=".gif"]').forEach(img=>{
    if(img.dataset.frozen)return;
    const freeze=()=>{if(img.dataset.frozen)return;try{const c=document.createElement("canvas");c.width=img.naturalWidth;c.height=img.naturalHeight;if(!c.width)return;c.getContext("2d").drawImage(img,0,0);img.dataset.frozen="1";img.src=c.toDataURL("image/png");}catch(_){}};
    if(img.complete&&img.naturalWidth)freeze();else img.addEventListener("load",freeze,{once:true});
  });
}
let _io;
function revealSections(){
  if(_io)_io.disconnect();
  const secs=[...stage.querySelectorAll("section.block")];
  secs.forEach(s=>s.classList.add("reveal"));
  if(!("IntersectionObserver" in window)){secs.forEach(s=>s.classList.add("in"));return;}
  /* re-trigger every time a section scrolls in/out of view (Guidy-style) */
  _io=new IntersectionObserver((ents)=>{ents.forEach(e=>{e.target.classList.toggle("in",e.isIntersecting);});},{rootMargin:"0px 0px -12% 0px"});
  secs.forEach(s=>_io.observe(s));
}
const NAVIC={overview:"home",deck:"monitor",website:"globe",humans:"users",icons:"grid",use:"cpu","one-pager":"doc",social:"megaphone",emailer:"chat","email-sig":"mail","logo-usage":"shield",assets:"download",color:"droplet",type:"edit",voice:"chat-text",agents:"sparkle"};
nav.innerHTML=(function(){var g=null,out="";ALL.forEach(function(a){var grp=a.grp||"";if(grp!==g){var c=CHAP[grp]||["",grp];out+=`<div class="ch-head"><span class="no">${c[0]}</span><span class="nm">${c[1]}</span></div>`;g=grp;}out+=`<button data-id="${a.id}"><span class="it-name">${a.name}</span><span class="it-desc">${a.desc||""}</span></button>`;});return out;})();
nav.addEventListener("click",e=>{const b=e.target.closest("button");if(b)setActive(b.dataset.id)});
document.getElementById("menuBtn").addEventListener("click",function(){const open=nav.classList.toggle("open");this.setAttribute("aria-expanded",open?"true":"false");});
var brandLogoEl=document.getElementById("brandLogo");
brandLogoEl.innerHTML=logo("white",26);
brandLogoEl.style.cursor="pointer";
brandLogoEl.addEventListener("click",()=>setActive("overview"));
function zDownload(url,name){
  var nm=name||url.split("/").pop();
  fetch(url).then(function(r){if(!r.ok)throw 0;return r.blob();}).then(function(b){
    var u=URL.createObjectURL(b),a=document.createElement("a");
    a.href=u;a.download=nm;document.body.appendChild(a);a.click();
    setTimeout(function(){URL.revokeObjectURL(u);a.remove();},1500);
  }).catch(function(){
    var a=document.createElement("a");a.href=url;a.download=nm;document.body.appendChild(a);a.click();a.remove();
  });
}
function crc32(u8){
  if(!crc32.T){crc32.T=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;crc32.T[n]=c;}}
  let r=-1;for(let i=0;i<u8.length;i++)r=(r>>>8)^crc32.T[(r^u8[i])&0xFF];return (r^-1)>>>0;
}
function makeZip(files){
  const num=(n,b)=>{const a=new Uint8Array(b);for(let i=0;i<b;i++)a[i]=(n>>>(8*i))&255;return a;};
  const parts=[],cd=[];let off=0;
  files.forEach(f=>{
    const crc=crc32(f.data);
    parts.push(num(0x04034b50,4),num(20,2),num(0,2),num(0,2),num(0,2),num(0,2),num(crc,4),num(f.data.length,4),num(f.data.length,4),num(f.name.length,2),num(0,2),f.name,f.data);
    cd.push({name:f.name,crc,len:f.data.length,off});
    off+=30+f.name.length+f.data.length;
  });
  let cdLen=0;
  cd.forEach(e=>{
    parts.push(num(0x02014b50,4),num(20,2),num(20,2),num(0,2),num(0,2),num(0,2),num(0,2),num(e.crc,4),num(e.len,4),num(e.len,4),num(e.name.length,2),num(0,2),num(0,2),num(0,2),num(0,2),num(0,4),num(e.off,4),e.name);
    cdLen+=46+e.name.length;
  });
  parts.push(num(0x06054b50,4),num(0,2),num(0,2),num(cd.length,2),num(cd.length,2),num(cdLen,4),num(off,4),num(0,2));
  return new Blob(parts,{type:"application/zip"});
}
stage.addEventListener("click",function(e){var b=e.target.closest(".dl-btn");if(!b)return;e.preventDefault();zDownload(b.getAttribute("data-href"),b.getAttribute("data-name"));});
stage.addEventListener("click",function(e){var b=e.target.closest(".icon-dl");if(!b)return;e.preventDefault();var name=b.getAttribute("data-name");var gal=document.getElementById("iconGallery");var col=gal?gal.getAttribute("data-color"):"ink";var hex={ink:"#191919",white:"#FFFFFF",orange:"#FD5000"}[col]||"#191919";var inner=ICON[name]||"";var svg='<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="'+hex+'">'+inner+'</svg>';var blob=new Blob([svg],{type:"image/svg+xml"}),u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download="zuper-"+name+"-"+col+".svg";document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(u);a.remove();},1200);});
stage.addEventListener("click",function(e){var b=e.target.closest(".url-copy");if(!b)return;var t=b.getAttribute("data-copy"),o=b.innerHTML,done=function(){b.innerHTML="Copied ✓";setTimeout(function(){b.innerHTML=o;},1700);};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done).catch(function(){});}else{var ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");done();}catch(_){}document.body.removeChild(ta);}});

/* in-page section nav + scrollspy */
function buildSubnav(id){
  nav.querySelectorAll(".subnav").forEach(n=>n.remove());
  const btn=nav.querySelector(`button[data-id="${id}"]`);
  const secs=[...stage.querySelectorAll("section.block")].filter(s=>s.querySelector("h2.sec"));
  if(typeof SECIDX!=="undefined"&&secs.length)SECIDX[id]=secs.map(s=>s.querySelector("h2.sec").textContent.replace(/^\s*\d+\s*[·—\-]\s*/,"").trim());
  if(!btn||secs.length<2)return;
  const sub=document.createElement("div");sub.className="subnav";
  secs.forEach((sec,i)=>{
    const hh=sec.querySelector("h2.sec");
    const sid=`s-${id}-${i}`;sec.id=sid;sec.style.scrollMarginTop="22px";
    if(!hh.querySelector(".alink")){
      const cp=document.createElement("button");cp.className="alink";cp.title="Copy link to this section";cp.innerHTML=icon("link",13);
      cp.addEventListener("click",ev=>{ev.stopPropagation();
        const url=location.origin+location.pathname+"#"+id+"@"+i;
        const done=()=>{cp.classList.add("ok");cp.innerHTML=icon("check",13);setTimeout(()=>{cp.classList.remove("ok");cp.innerHTML=icon("link",13);},1300);};
        if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done).catch(()=>{});}
      });
      hh.appendChild(cp);
    }
    const a=document.createElement("a");a.href="#"+sid;
    a.textContent=hh.textContent.replace(/^\s*\d+\s*[·—\-]\s*/,"");
    a.addEventListener("click",ev=>{ev.preventDefault();_pin=a;_pinT=Date.now();spy();sec.scrollIntoView({behavior:"smooth",block:"start"});});
    sub.appendChild(a);
  });
  btn.insertAdjacentElement("afterend",sub);
  requestAnimationFrame(spy);
}
let _pin=null,_pinT=0;
function spy(){
  const links=[...nav.querySelectorAll(".subnav a")];if(!links.length)return;
  if(_pin&&!_pin.isConnected)_pin=null;
  let cur;
  if(_pin){cur=_pin;}
  else{
    cur=links[0];
    for(const l of links){const t=document.getElementById(l.getAttribute("href").slice(1));if(t&&t.getBoundingClientRect().top<150)cur=l;}
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-2)cur=links[links.length-1];
  }
  links.forEach(l=>l.classList.toggle("cur",l===cur));
}
let _spyR;window.addEventListener("scroll",()=>{if(_pin&&Date.now()-_pinT>1600)_pin=null;cancelAnimationFrame(_spyR);_spyR=requestAnimationFrame(spy);},{passive:true});
["wheel","touchmove","keydown"].forEach(ev=>window.addEventListener(ev,()=>{_pin=null;},{passive:true}));
stage.addEventListener("click",e=>{const b=e.target.closest(".copybtn");if(!b)return;const ct=b.parentElement.querySelector(".ct");if(!ct)return;const t=ct.textContent;const done=()=>{b.textContent="Copied ✓";setTimeout(()=>{b.textContent="Copy";},1600);};const fb=()=>{try{const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);done();}catch(_){}};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done).catch(fb);}else{fb();}});
stage.addEventListener("click",e=>{const c=e.target.closest(".sw-card");if(!c)return;const hx=c.querySelector(".sw-hex");if(!hx)return;const fmtBtn=e.target.closest(".sw-fmts button");const t=fmtBtn?hexFmt(hx.textContent.trim(),fmtBtn.dataset.fmt):hx.textContent.trim();const flash=()=>{c.classList.add("copied");setTimeout(()=>c.classList.remove("copied"),1000);};const fb=()=>{try{const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);flash();}catch(_){}};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(flash).catch(fb);}else{fb();}});
/* ===== prev / next pager ===== */
function appendPager(id){
  const seq=[{id:"overview",name:"Home",meta:"cover"}].concat(ALL);
  const i=seq.findIndex(p=>p.id===id);if(i<0)return;
  const pv=seq[i-1],nx=seq[i+1];
  if(!pv&&!nx)return;
  const el=document.createElement("div");el.className="pgrwrap";
  el.innerHTML=`<nav class="pgr" aria-label="Page navigation">
    ${pv?`<a href="#${pv.id}" class="pv"><span class="k">Previous</span><span class="t"><span class="ar">←</span><span>${pv.name}</span></span></a>`:`<span class="gap"></span>`}
    ${nx?`<a href="#${nx.id}" class="nx"><span class="k">Next</span><span class="t"><span>${nx.name}</span><span class="ar">→</span></span></a>`:`<span class="gap"></span>`}
  </nav>
  <p class="pgr-hint"><b>[</b> <b>]</b> flip pages &nbsp;·&nbsp; <b>⌘K</b> jump anywhere</p>`;
  el.querySelectorAll("a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();setActive(a.getAttribute("href").slice(1));}));
  stage.appendChild(el);
}

/* ===== section index (seed; refreshed by buildSubnav on visit) ===== */
const SECIDX={
  overview:["Pick a tile to open","The brand building blocks","Built with the brand"],
  use:["Design in the browser","Install the brand skill in chat","Bring it into Claude Code"],
  "logo-usage":["Clear space & minimum size","Pick the variant for the background","Logo misuse","Co-branding & partner lockups"],
  color:["#FD5000 does the work","The orange gradient","Ink, neutrals & grounds","Where each colour lives","Keep it readable","One series wears the orange"],
  type:["One voice, the right face for each medium","The families","Hierarchy","Geist Mono eyebrows","Try the scale"],
  icons:["What makes it one set","Icon studio","Colour comes from context"],
  voice:["How Zuper sounds","The difference in one example","The lines that sound like us","Trade jargon for outcomes","The AI & jargon tells","Prove you get the work","Before it ships"],
  agents:["Meet the agents","Keep the team consistent"],
  humans:["Mini humans, not stock photos","Eight workers"],
  assets:["Logo library","Video call backgrounds","LinkedIn personal cover photos","Word document template"],
  deck:["One deck. One contrast.","Palette, type & icons","Slide building blocks","Slide layouts","The rule, both ways"],
  website:["Color","Typography","Spacing, radius, grid","Buttons & eyebrows","Forms, pills & tiles","Navigation & mega-menus","Section grounds","Cards","More components","Usage, states & anatomy","Page patterns","CTA banner & footer","Take reference from these URLs"],
  "one-pager":["The building blocks","A 5-page co-branded story"],
  emailer:["Building blocks","Email announcement"]
};

/* ===== command palette (⌘K) ===== */
const ckw=document.createElement("div");ckw.className="ckwrap";ckw.setAttribute("role","dialog");ckw.setAttribute("aria-modal","true");ckw.setAttribute("aria-label","Quick navigation");
ckw.innerHTML=`<div class="scrim"></div><div class="ck"><input type="text" placeholder="Jump to a page or section…" aria-label="Search pages and sections"><div class="ls" role="listbox"></div><div class="ft"><span><b>↑↓</b> navigate</span><span><b>↵</b> open</span><span><b>esc</b> close</span></div></div>`;
document.body.appendChild(ckw);
const ckInput=ckw.querySelector("input"),ckList=ckw.querySelector(".ls");
const CKITEMS=[{id:"overview",name:"Home · Overview",grp:"Start",ic:"home"}].concat(ALL.map(a=>({id:a.id,name:a.name,grp:a.grp||"Start",ic:NAVIC[a.id]||"home"})));
let ckSel=0,ckShown=[],ckPrevFocus=null;
function ckRender(){
  const q=ckInput.value.trim().toLowerCase();
  ckShown=CKITEMS.filter(p=>!q||p.name.toLowerCase().includes(q)||p.grp.toLowerCase().includes(q)||p.id.includes(q));
  if(q){
    const secs=[];
    Object.keys(SECIDX).forEach(pid=>{
      const pg=CKITEMS.find(p=>p.id===pid);if(!pg)return;
      SECIDX[pid].forEach((t,i)=>{if(t.toLowerCase().includes(q))secs.push({id:pid+"@"+i,name:t,grp:pg.name.replace(" · Overview",""),ic:pg.ic});});
    });
    ckShown=ckShown.concat(secs).slice(0,14);
  }
  if(ckSel>ckShown.length-1)ckSel=Math.max(0,ckShown.length-1);
  ckList.innerHTML=ckShown.length?ckShown.map((p,i)=>`<button class="it${i===ckSel?" on":""}" role="option" aria-selected="${i===ckSel}" data-id="${p.id}"><span class="ic">${icon(p.ic,15)}</span>${p.name}<span class="grp">${p.grp}</span></button>`).join(""):`<div class="none">No page or section matches that</div>`;
  const on=ckList.querySelector(".it.on");if(on)on.scrollIntoView({block:"nearest"});
}
function lockScroll(on){document.documentElement.style.overflow=on?"hidden":"";}
function ckOpen(){ckPrevFocus=document.activeElement;ckw.classList.add("open");ckInput.value="";ckSel=0;ckRender();lockScroll(true);ckInput.focus();}
function ckClose(){ckw.classList.remove("open");lockScroll(false);if(ckPrevFocus&&ckPrevFocus.focus)ckPrevFocus.focus();}
function ckGo(id){ckClose();if(id.indexOf("@")>=0)gotoHash(id);else setActive(id);}
ckInput.addEventListener("input",()=>{ckSel=0;ckRender();});
ckInput.addEventListener("keydown",e=>{
  if(e.key==="ArrowDown"){e.preventDefault();if(ckSel<ckShown.length-1){ckSel++;ckRender();}}
  else if(e.key==="ArrowUp"){e.preventDefault();if(ckSel>0){ckSel--;ckRender();}}
  else if(e.key==="Enter"){e.preventDefault();if(ckShown[ckSel])ckGo(ckShown[ckSel].id);}
});
ckList.addEventListener("click",e=>{const b=e.target.closest(".it");if(b)ckGo(b.dataset.id);});
ckw.querySelector(".scrim").addEventListener("click",ckClose);
document.getElementById("ckOpenBtn").addEventListener("click",ckOpen);

/* ===== image lightbox ===== */
const lbw=document.createElement("div");lbw.className="lbwrap";lbw.setAttribute("role","dialog");lbw.setAttribute("aria-modal","true");lbw.setAttribute("aria-label","Image preview");
lbw.innerHTML=`<div class="scrim"></div><figure class="lb"><button class="x" aria-label="Close preview">✕</button><img alt=""><figcaption class="cap"></figcaption></figure>`;
document.body.appendChild(lbw);
let lbPrevFocus=null;
function lbOpen(src,alt){
  lbPrevFocus=document.activeElement;
  const im=lbw.querySelector("img");im.src=src;im.alt=alt||"";
  lbw.querySelector(".cap").textContent=alt||"";
  lbw.classList.add("open");lockScroll(true);
  lbw.querySelector(".x").focus();
}
function lbClose(){lbw.classList.remove("open");lockScroll(false);lbw.querySelector("img").removeAttribute("src");if(lbPrevFocus&&lbPrevFocus.focus)lbPrevFocus.focus();}
lbw.querySelector(".scrim").addEventListener("click",lbClose);
lbw.querySelector(".x").addEventListener("click",lbClose);
stage.addEventListener("click",e=>{
  const im=e.target.closest(".s-prev img,.acard .frame img,.la-prev img");
  if(!im||e.target.closest("a,button"))return;
  lbOpen(im.currentSrc||im.src,im.alt);
});
stage.addEventListener("keydown",e=>{
  if(e.key!=="Enter"&&e.key!==" ")return;
  const im=e.target.closest&&e.target.closest(".s-prev img,.acard .frame img,.la-prev img");
  if(!im)return;
  e.preventDefault();
  lbOpen(im.currentSrc||im.src,im.alt);
});

/* ===== back to top ===== */
const topBtn=document.createElement("button");topBtn.className="totop";topBtn.setAttribute("aria-label","Back to top");topBtn.innerHTML=icon("arrow-up",16);
document.body.appendChild(topBtn);
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll",()=>{topBtn.classList.toggle("show",window.scrollY>900);},{passive:true});

/* global keys: ⌘K palette, esc closes overlays, [ ] page prev/next */
window.addEventListener("keydown",e=>{
  if((e.metaKey||e.ctrlKey)&&(e.key==="k"||e.key==="K")){e.preventDefault();ckw.classList.contains("open")?ckClose():ckOpen();return;}
  if(e.key==="Escape"){if(ckw.classList.contains("open"))ckClose();else if(lbw.classList.contains("open"))lbClose();return;}
  if((e.key==="["||e.key==="]")&&!e.metaKey&&!e.ctrlKey&&!e.altKey){
    if(ckw.classList.contains("open")||lbw.classList.contains("open"))return;
    const t=e.target;
    if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable))return;
    const seq=["overview"].concat(ALL.map(a=>a.id));
    const cur=Math.max(0,seq.indexOf((location.hash||"#overview").slice(1).split("@")[0]));
    const nxt=e.key==="]"?Math.min(cur+1,seq.length-1):Math.max(cur-1,0);
    if(nxt!==cur){e.preventDefault();setActive(seq[nxt]);}
  }
});

gotoHash((location.hash||"").slice(1),false);

/* preloader: run the logomark assemble on a fixed ~2s timeline (not tied to asset
   load, so it never lingers), then fade out to reveal the site */
(function(){var pl=document.getElementById("preloader");if(!pl)return;
  setTimeout(function(){pl.classList.add("hide");setTimeout(function(){if(pl.parentNode)pl.parentNode.removeChild(pl);},450);},1050);})();

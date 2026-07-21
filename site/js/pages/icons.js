/* ============ ICONOGRAPHY ============ */
function buildIcons(){
  stage.style.cssText=chromeCss();

  const MONO="'Geist Mono',ui-monospace,monospace",GRAD="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)";
  const names=Object.keys(ICON);

  /* the system, single-weight outline set */
  const rules=[
    ["sparkle","One weight, one set","Every glyph is a single‑weight clean outline on a 256px grid. One consistent weight across the whole set, never mix weights, fills or a second icon library."],
    ["droplet","currentColor, never hard‑coded","Glyphs are coloured with <b>currentColor</b>, so they inherit the surrounding text colour: ink on light, white on dark, orange only as a deliberate accent. One token, every ground."],
    ["check","Even optical weight","Consistent corners and line weight are what make the set read as one family. Use glyphs as‑drawn, don't restyle, re‑stroke or add detail."],
    ["x","One set, no emoji","No emoji, no clip‑art, no second library. One outline set everywhere. UI, slides, ads and email, so an icon means the same thing in every surface."]
  ].map(c=>`<div class="why-card"><div class="ic">${icon(c[0],22)}</div><div><h4>${c[1]}</h4><p>${c[2]}</p></div></div>`).join("");

  /* size ladder, same icon, fixed stroke, four sizes */
  const sizes=[[16,"16 · inline / meta"],[18,"18 · sidebar nav"],[22,"22 · cards & components"],[32,"32 · feature"]]
    .map(s=>`<div style="display:flex;flex-direction:column;align-items:center;gap:10px"><div style="height:40px;display:flex;align-items:center;color:#191919">${icon("zap",s[0],1.7)}</div><div style="font-family:${MONO};font-size:11px;color:#7A7268;letter-spacing:.02em">${s[1]}</div></div>`).join("");

  /* full named, copy-ready gallery, colour via parent currentColor */
  /* search synonyms. Zuper trades & FSM terms → matching glyph names */
  const SYN={roof:["house","house-line"],roofing:["house","house-line"],hvac:["snowflake","fan","thermometer-simple","wind"],ac:["snowflake","fan","wind"],cooling:["snowflake","fan"],heating:["fire","flame","thermometer-simple"],plumbing:["wrench","drop","pipe","faucet"],pipe:["pipe","wrench"],water:["drop","faucet"],electric:["plug","lightning"],electrical:["plug","lightning"],power:["plug","lightning","battery-high"],solar:["solar-panel","sun"],pest:["bug","bug-beetle"],landscaping:["tree","plant","leaf","flower-lotus"],lawn:["tree","plant","leaf"],garden:["plant","flower-lotus","tree"],security:["security-camera","shield-check","lock","siren"],alarm:["siren","bell-ringing"],cleaning:["broom","spray-bottle"],appliance:["washing-machine","oven"],telecom:["broadcast","cell-signal-high","wifi-high"],internet:["wifi-high","globe"],invoice:["invoice","receipt","file-text"],quote:["file-text","receipt"],estimate:["file-text","receipt"],payment:["credit-card","currency-dollar","money","bank"],pay:["credit-card","currency-dollar","money"],schedule:["calendar","calendar-check","calendar-plus","clock"],booking:["calendar-check","clock"],dispatch:["truck","van","navigation-arrow","map-pin"],route:["path","navigation-arrow","map-trifold"],technician:["user-gear","wrench","hard-hat"],tech:["user-gear","wrench"],job:["clipboard-text","wrench","check-square"],task:["check-square","list-checks","clipboard-text"],customer:["user","users","address-book"],contractor:["hard-hat","wrench","toolbox"],tools:["toolbox","wrench","hammer","screwdriver"],warranty:["shield-check","certificate"],report:["chart-bar","chart-line","file-text"],analytics:["chart-bar","chart-line","gauge"],location:["map-pin","navigation-arrow"],ai:["robot","sparkle","cpu"],mobile:["device-mobile","device-mobile-camera"],signature:["signature","scribble-loop"]};

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Iconography</p>
      <h1>One icon set</h1>
      <p class="lede">Zuper runs on a single set of clean <b>outline icons</b>, one consistent weight, coloured by <b>currentColor</b>. They carry meaning in the UI, on slides, in ads and in email without ever competing with the product. Search, customise and export any icon in the studio below, every one on‑brand.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>single‑weight outline</span>
        <span class="chip">currentColor</span>
        <span class="chip">256px grid</span>
        <span class="chip">searchable library</span>
      </div>
      <div class="hero-art"><div class="float ha-studio">
        <div class="sbar">${icon("search",15)}<span class="q">dispatch</span><span class="cr"></span></div>
        <div class="sgrid">
          <span class="si">${icon("truck",22)}</span>
          <span class="si sel">${icon("pin",22)}</span>
          <span class="si">${icon("map",22)}</span>
          <span class="si">${icon("calendar",22)}</span>
          <span class="si">${icon("users",22)}</span>
          <span class="si">${icon("bell",22)}</span>
        </div>
        <div class="sfoot"><span>1,500+ glyphs</span><span class="dot"></span><span>currentColor</span></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · The system</p><h2 class="sec">What makes it one set</h2>
    <p class="sec-note">The rules below are the whole system. Stick to the one set and any glyph will look like it always belonged.</p>
    <div class="why-grid">${rules}</div>
    <div class="why-card" style="margin-top:18px"><div class="ic">${icon("target",22)}</div><div><h4>Crisp at every size</h4><p>The set is drawn on a 256px grid and scales cleanly. Render it at <b>16–32px</b> on whole pixels and let <b>currentColor</b> do the colouring, never add an extra stroke, fill tint or shadow.</p></div></div>
    <div style="margin-top:26px;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:30px;display:flex;gap:40px;align-items:flex-end;flex-wrap:wrap;justify-content:center">${sizes}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · Studio</p><h2 class="sec">Icon studio</h2>
    <p class="sec-note"><b>Search the full icon library</b>, try <i>roof, invoice, truck, solar</i>. Pick one, set the colour and size, then copy or download it ready to drop in, everything comes out on‑brand.</p>
    <div class="icst">
      <div class="icst-side">
        <div class="icst-stage" id="icstStage"></div>
        <div class="icst-name"><span id="icstName">wrench</span><span class="dim" id="icstDim">96px</span></div>
        <div class="icst-ctl"><span class="icst-lbl">Colour</span><div class="icst-sws" id="icstSws"><button class="icst-sw on" data-col="#191919" style="background:#191919" aria-label="Ink #191919" aria-pressed="true"></button><button class="icst-sw" data-col="#FFFFFF" style="background:#fff" aria-label="White #FFFFFF" aria-pressed="false"></button><button class="icst-sw" data-col="#FD5000" style="background:#FD5000" aria-label="Orange #FD5000" aria-pressed="false"></button></div></div>
        <div class="icst-ctl"><span class="icst-lbl">Hex</span><div class="icst-hexwrap"><label class="icst-chip" id="icstChip" style="background:#191919" title="Pick a colour"><input type="color" id="icstColor" value="#191919" aria-label="Pick a colour"></label><input type="text" class="icst-hex" id="icstHex" value="#191919" spellcheck="false" maxlength="7" aria-label="Hex colour value"></div></div>
        <div class="icst-ctl"><span class="icst-lbl">Size</span><input type="range" id="icstSize" min="16" max="256" step="2" value="96" aria-label="Icon size"><input type="number" id="icstSizeV" class="icst-num" min="16" max="256" value="96" aria-label="Icon size in pixels"></div>
        <div class="icst-exp"><button class="icst-btn" data-exp="svg">${icon("copy",14)} Copy SVG</button><button class="icst-btn" data-exp="copy-png">${icon("copy",14)} Copy PNG</button><button class="icst-btn" data-exp="dl-svg">${icon("download",14)} Download SVG</button><button class="icst-btn" data-exp="dl-png">${icon("download",14)} Download PNG</button></div>
      </div>
      <div class="icst-pickwrap">
        <input class="icst-search" id="icstSearch" aria-label="Search icons" placeholder="Search icons, roof, invoice, truck, solar…" autocomplete="off">
        <div class="icst-multi"><button class="icst-btn" id="icstMultiT" aria-pressed="false">${icon("grid",13)} Select multiple</button><button class="icst-btn" id="icstZip" style="display:none">${icon("download",13)} Download <span id="icstZipN">0</span> as .zip</button></div>
        <div class="icst-meta" id="icstMeta" role="status" aria-live="polite">Loading icons…</div>
        <div class="icst-pick" id="icstPick"></div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · In use</p><h2 class="sec">Colour comes from context</h2>
    <p class="sec-note">The same glyph, four grounds, coloured only by the inherited text colour, never restyled.</p>
    <div style="display:flex;gap:18px;flex-wrap:wrap;padding-top:4px">
      <div style="flex:1;min-width:170px;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:30px;display:flex;flex-direction:column;align-items:center;gap:14px;color:#191919">${icon("zap",30,1.7)}<span style="font-family:${MONO};font-size:11px;color:#7A7268">ink on light</span></div>
      <div style="flex:1;min-width:170px;background:#282828;border-radius:16px;padding:30px;display:flex;flex-direction:column;align-items:center;gap:14px;color:#fff">${icon("zap",30,1.7)}<span style="font-family:${MONO};font-size:11px;color:rgba(255,255,255,.6)">white on charcoal</span></div>
      <div style="flex:1;min-width:170px;background:${GRAD};border-radius:16px;padding:30px;display:flex;flex-direction:column;align-items:center;gap:14px;color:#fff">${icon("zap",30,1.7)}<span style="font-family:${MONO};font-size:11px;color:rgba(255,255,255,.85)">white on orange</span></div>
      <div style="flex:1;min-width:170px;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:30px;display:flex;flex-direction:column;align-items:center;gap:14px;color:#FD5000">${icon("zap",30,1.7)}<span style="font-family:${MONO};font-size:11px;color:#7A7268">orange accent, sparingly</span></div>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  /* ---- icon studio: search full library → customise → export ---- */
  (function(){
    const $=id=>document.getElementById(id);
    const LOCAL=Object.keys(ICON);
    const st={name:LOCAL[Math.floor(Math.random()*LOCAL.length)],color:"#191919",size:96};
    const stg=$("icstStage"),nm=$("icstName"),dim=$("icstDim"),pick=$("icstPick"),meta=$("icstMeta");
    if(!stg||!pick)return;
    const glyph=n=>(window.PHOSPHOR&&window.PHOSPHOR[n])||ICON[n]||"";
    function lum(h){h=h.replace("#","");if(h.length===3)h=h.split("").map(x=>x+x).join("");const r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);return(0.299*r+0.587*g+0.114*b)/255;}
    function draw(){stg.style.background=lum(st.color)>0.68?"#2b2b2f":"#F4EEE6";stg.innerHTML=`<svg viewBox="0 0 256 256" width="${st.size}" height="${st.size}" fill="${st.color}" style="display:block">${glyph(st.name)}</svg>`;nm.textContent=st.name;dim.textContent=st.size+"px";}
    function svgStr(){return `<svg xmlns="http://www.w3.org/2000/svg" width="${st.size}" height="${st.size}" viewBox="0 0 256 256" fill="${st.color}">${glyph(st.name)}</svg>`;}
    const msel=new Set();let multi=false;
    function cells(list){pick.innerHTML=list.map(n=>`<button class="icst-cell${n===st.name?" on":""}${msel.has(n)?" sel":""}" data-n="${n}" title="${n}"><svg viewBox="0 0 256 256" width="26" height="26" fill="currentColor">${glyph(n)}</svg></button>`).join("");}
    function setMeta(){meta.textContent=window.PHOSPHOR?`${Object.keys(window.PHOSPHOR).length.toLocaleString()} icons · search by name or keyword`:"Loading icons…";}
    function search(q){q=(q||"").trim().toLowerCase();const src=window.PHOSPHOR?Object.keys(window.PHOSPHOR):LOCAL;const T=window.PHOSPHOR_TAGS||{};
      if(!q){const seen=new Set(LOCAL);cells(LOCAL.concat(src.filter(n=>!seen.has(n))));setMeta();return;}
      const starts=[],has=[],tag=[];
      src.forEach(n=>{if(n.indexOf(q)===0)starts.push(n);else if(n.indexOf(q)>0)has.push(n);else if(T[n]&&T[n].indexOf(q)>=0)tag.push(n);});
      let m=starts.concat(has,tag);
      Object.keys(SYN).forEach(k=>{if(k.indexOf(q)>=0||q.indexOf(k)>=0){for(const n of SYN[k].slice().reverse()){if(src.indexOf(n)>=0){const i=m.indexOf(n);if(i>=0)m.splice(i,1);m.unshift(n);}}}});
      const total=m.length;
      meta.textContent=total?`${total} result${total>1?"s":""} for “${q}”`:`No icons match “${q}”`;
      cells(m);}
    pick.addEventListener("click",e=>{const b=e.target.closest(".icst-cell");if(!b)return;
      if(multi){const n=b.dataset.n;msel.has(n)?msel.delete(n):msel.add(n);b.classList.toggle("sel",msel.has(n));syncMulti();return;}
      [...pick.children].forEach(c=>c.classList.remove("on"));b.classList.add("on");st.name=b.dataset.n;draw();});
    const mtBtn=$("icstMultiT"),zipBtn=$("icstZip");
    function syncMulti(){
      $("icstZipN").textContent=msel.size;
      zipBtn.style.display=multi&&msel.size?"":"none";
      mtBtn.innerHTML=multi?`${icon("check",13)} Done selecting`:`${icon("grid",13)} Select multiple`;
      mtBtn.setAttribute("aria-pressed",multi?"true":"false");
    }
    mtBtn.addEventListener("click",()=>{multi=!multi;if(!multi){msel.clear();pick.querySelectorAll(".sel").forEach(c=>c.classList.remove("sel"));}syncMulti();});
    zipBtn.addEventListener("click",()=>{
      if(!msel.size)return;
      const enc=new TextEncoder();
      const files=[...msel].map(n=>({name:enc.encode(`zuper-${n}.svg`),data:enc.encode(`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="${st.color}">${glyph(n)}</svg>`)}));
      dl(makeZip(files),"zuper-icons.zip");
      const o=zipBtn.innerHTML;zipBtn.classList.add("done");zipBtn.textContent="Saved ✓";
      setTimeout(()=>{zipBtn.classList.remove("done");zipBtn.innerHTML=o;},1400);
    });
    $("icstSearch").addEventListener("input",e=>search(e.target.value));
    const chip=$("icstChip"),hex=$("icstHex"),nat=$("icstColor");
    function setColor(c,sw){st.color=c;if(chip)chip.style.background=c;if(hex&&document.activeElement!==hex)hex.value=c.toUpperCase();if(nat&&/^#[0-9a-f]{6}$/i.test(c))nat.value=c.toLowerCase();$("icstSws").querySelectorAll(".icst-sw").forEach(x=>{x.classList.toggle("on",sw===x);x.setAttribute("aria-pressed",sw===x);});draw();}
    $("icstSws").addEventListener("click",e=>{const s=e.target.closest(".icst-sw[data-col]");if(!s)return;setColor(s.dataset.col,s);});
    nat.addEventListener("input",e=>setColor(e.target.value,null));
    hex.addEventListener("input",e=>{const v=e.target.value.trim().replace(/^#/,"");if(/^[0-9a-fA-F]{6}$/.test(v))setColor("#"+v,null);else if(/^[0-9a-fA-F]{3}$/.test(v))setColor("#"+v.split("").map(x=>x+x).join(""),null);});
    $("icstSize").addEventListener("input",e=>{st.size=+e.target.value;$("icstSizeV").value=st.size;draw();});
    $("icstSizeV").addEventListener("input",e=>{let v=parseInt(e.target.value,10);if(isNaN(v))return;if(v>256){v=256;e.target.value=256;}st.size=v;$("icstSize").value=Math.max(16,Math.min(256,v));draw();});
    $("icstSizeV").addEventListener("blur",e=>{let v=parseInt(e.target.value,10);if(isNaN(v)||v<16)v=16;if(v>256)v=256;e.target.value=v;st.size=v;$("icstSize").value=v;draw();});
    const flash=b=>{const o=b.innerHTML;b.classList.add("done");b.textContent="Copied ✓";setTimeout(()=>{b.classList.remove("done");b.innerHTML=o;},1400);};
    function dl(blob,fn){const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=fn;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(u);a.remove();},1200);}
    function rasterize(cb){const s=st.size,sc=Math.max(2,Math.ceil(512/s)),cv=document.createElement("canvas");cv.width=s*sc;cv.height=s*sc;const ctx=cv.getContext("2d"),img=new Image();img.onload=()=>{ctx.drawImage(img,0,0,cv.width,cv.height);cv.toBlob(cb);};img.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svgStr());}
    document.querySelector(".icst-exp").addEventListener("click",e=>{const b=e.target.closest(".icst-btn");if(!b)return;const x=b.dataset.exp;
      if(x==="svg"&&navigator.clipboard){navigator.clipboard.writeText(svgStr());flash(b);}
      else if(x==="copy-png"){rasterize(bl=>{try{navigator.clipboard.write([new ClipboardItem({"image/png":bl})]).then(()=>flash(b)).catch(()=>{});}catch(_){}});}
      else if(x==="dl-svg"){dl(new Blob([svgStr()],{type:"image/svg+xml"}),`zuper-${st.name}.svg`);}
      else if(x==="dl-png"){rasterize(bl=>dl(bl,`zuper-${st.name}.png`));}
    });
    cells(LOCAL);draw();setMeta();
    if(!window.PHOSPHOR&&!window.__phLoad){window.__phLoad=1;const s=document.createElement("script");s.src="assets/phosphor-icons.js";s.onload=()=>{const si=$("icstSearch");if(si&&document.body.contains(si)){setMeta();search(si.value);}};document.body.appendChild(s);}
  })();
  window.scrollTo(0,0);
}


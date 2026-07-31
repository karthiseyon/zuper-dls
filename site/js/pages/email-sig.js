/* ============ EMAIL SIGNATURE ============ */
function buildEmailSig(){
  stage.style.cssText=chromeCss();

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Brand toolkit · for everyone at Zuper</p>
      <h1>Email signature</h1>
      <p class="lede">Fill in your details, see it update live, then copy a clean, on‑brand signature straight into Outlook.</p>
      <div class="hero-art"><div class="float ha-sig">
        <div class="nm">Superstar Rajinikanth</div>
        <div class="rl">Visual Design Manager · Zuper</div>
        <div class="dv"></div>
        <div class="ct">${icon("mail",13)} <span class="type">superstar@zuper.co</span><span class="cr"></span></div>
        <div class="ct">${icon("globe",13)} zuper.co</div>
        <div class="lg">${logo("dark",16)}</div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">Make it yours</p><h2 class="sec">Build your signature</h2>
    <p class="sec-note">Everything you type updates the live preview. When it looks good, hit <b style="color:var(--text-primary)">Copy signature</b> and paste it into your Outlook signature settings.</p>
    <div class="esig">
      <div class="form">
        <div class="fld"><label for="es-name">Full name</label><input id="es-name" placeholder="Jane Doe" value="Jane Doe" /></div>
        <div class="fld"><label for="es-title">Job title</label><input id="es-title" placeholder="Field Service Consultant" value="Field Service Consultant" /></div>
        <div class="fld"><label for="es-email">Email</label><input id="es-email" type="email" placeholder="name@zuper.co" value="name@zuper.co" /></div>
        <div class="fld"><label for="es-phone">Phone <span style="color:var(--text-tertiary);font-weight:500">· optional</span></label><input id="es-phone" placeholder="+1 (555) 000‑0000" value="+1 (555) 000‑0000" /></div>
        <div class="ctl-row">
          <label class="ctl"><input type="checkbox" id="es-cta" checked> Show "Book a demo" call‑to‑action</label>
        </div>
        <div class="fld" id="es-burl-fld" style="display:none"><label for="es-burl">Banner link URL <span style="color:var(--text-tertiary);font-weight:500">· where the banner goes when clicked</span></label><input id="es-burl" type="url" placeholder="https://www.zuper.co" value="https://www.zuper.co" /></div>
      </div>
      <div class="preview-col"><div class="pv-sticky">
        <div class="pv-label">Live preview</div>
        <div class="pv-card"><div id="es-preview"></div></div>
        <div class="pv-actions">
          <button class="btn-copy" id="es-copy">${icon("copy",17)} Copy signature</button>
          <button class="btn-copy alt" id="es-copy-html">${icon("code",17)} Copy HTML</button>
        </div>
        <p class="pv-hint"><b>Paste into Outlook:</b> open <b>Settings</b> → <b>Account</b> → <b>Signatures</b> → <b>New signature</b>, click into the signature box and paste (<b>⌘/Ctrl + V</b>). Give it a name and Save. The logo, banner and colours come along automatically.</p>
        <p class="pv-hint"><b>Copy HTML</b> gives you the raw markup instead of the rich text, for HubSpot or any editor that wants source.</p>
      </div></div>
      <div class="fld es-bfld">
        <label id="esb-lbl">Email banner <span style="color:var(--text-tertiary);font-weight:500">· optional, pick one</span></label>
        <div class="es-banners" role="radiogroup" aria-labelledby="esb-lbl">
          <label class="bopt"><input type="radio" name="esb" value="none" checked><span class="bnone">No banner</span></label>
          <div class="bopt bup" id="es-bcustom">
            <input type="radio" name="esb" value="custom" aria-label="Your own banner">
            <img id="es-bimg" alt="Your banner" hidden>
            <span class="bupi" id="es-bupi">${icon("upload",18)}<b>Upload your own</b></span>
            <button type="button" class="bup-chg" id="es-bchg" hidden>${icon("refresh",12)} Change</button>
            <input type="file" id="es-bfile" tabindex="-1" accept="image/png,image/jpeg,image/gif,image/webp">
          </div>
          <label class="bopt"><input type="radio" name="esb" value="sense"><img src="assets/email/zuper-emailer-sense.png" alt="Introducing Zuper Sense"></label>
          <label class="bopt"><input type="radio" name="esb" value="trades"><img src="assets/email/zuper-emailer-trades.png" alt="The AI Operating System for the Skilled Trades"></label>
        </div>
        <p class="es-bnote" id="es-bnote">Your banner travels with the copied signature and links to whatever you put in <b>Banner link URL</b>. It shows up in Outlook for Windows and Mac. Outlook on the web and Gmail can drop pasted image files, so send yourself one test mail before you rely on it.</p>
      </div>
    </div>
  </div></section>

  <div style="height:60px"></div>`;

  // ---- signature renderer (inline styles + hosted PNG, so it survives copy/paste into Outlook/Gmail) ----
  // preview/picker use relative paths (load from same origin as this page); copy rewrites them to absolute hosted URLs
  const RAW="https://zuper-dls.vercel.app/";
  const toAbs=html=>html.replace(/(src|href)="assets\//g,'$1="'+RAW+'assets/');
  const esImg=`<img src="assets/email/zuper-vertical-tight.png" alt="Zuper" width="100" height="69" style="display:block;border:0;outline:none;-ms-interpolation-mode:bicubic" />`;
  const BAN={sense:{u:"assets/email/zuper-emailer-sense.png",a:"Introducing Zuper Sense. Monitor. Analyze. Predict. Recommend"},trades:{u:"assets/email/zuper-emailer-trades.png",a:"Zuper. The AI Operating System for the Skilled Trades"}};
  const BW=380; // banner display width in the signature
  const CUSTOM={src:"",w:0,h:0};      // your own banner, uploaded as a data URL
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  // banner link: allow http(s) only, add https:// to bare domains, fall back to zuper.co
  function esUrl(u){u=(u||"").trim();if(/^https?:\/\//i.test(u))return u;if(/^[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i.test(u))return "https://"+u;return "https://www.zuper.co";}
  // which image the chosen banner shows, and how tall it renders at 380px wide
  function banImg(d){
    if(d.banner==="custom"){
      if(!CUSTOM.src)return null;
      return{u:CUSTOM.src,a:"Zuper",h:CUSTOM.w?Math.round(BW*CUSTOM.h/CUSTOM.w):0};
    }
    const b=BAN[d.banner];
    return b?{u:b.u,a:b.a,h:95}:null;
  }
  function sigHTML(d){
    const A='color:#FD5000', INK='#191919', SUB='#5b6470';
    const rows=[];
    rows.push(`<div style="font-family:Arial,Helvetica,sans-serif;font-size:17px;font-weight:bold;color:${INK};line-height:1.25">${esc(d.name||"Your Name")}</div>`);
    if(d.title)rows.push(`<div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;${A};margin-top:2px;line-height:1.3">${esc(d.title)}</div>`);
    const contact=[];
    if(d.email)contact.push(`<a href="mailto:${esc(d.email)}" style="color:${SUB};text-decoration:none">${esc(d.email)}</a>`);
    if(d.phone)contact.push(`<span style="color:${SUB}">${esc(d.phone)}</span>`);
    if(contact.length)rows.push(`<div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${SUB};margin-top:9px;line-height:1.4">${contact.join('<span style="color:#c9c3ba">&nbsp;|&nbsp;</span>')}</div>`);
    if(d.cta)rows.push(`<div style="margin-top:11px"><a href="https://www.zuper.co/demo" style="font-family:Arial,Helvetica,sans-serif;display:inline-block;background:#FD5000;color:#ffffff;text-decoration:none;font-size:12px;font-weight:bold;padding:8px 16px;border-radius:7px">Book a demo →</a></div>`);
    const sig=`<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif"><tr>`
      +`<td style="vertical-align:middle;padding:0 14px 0 0">${esImg}</td>`
      +`<td style="vertical-align:middle;padding:0 0 0 14px;border-left:2px solid #FD5000">${rows.join("")}</td>`
      +`</tr></table>`;
    const b=banImg(d);
    if(!b)return sig;
    const dim=b.h?`width="${BW}" height="${b.h}"`:`width="${BW}"`;
    const esBanner=`<a href="${esc(esUrl(d.burl))}" style="text-decoration:none"><img src="${b.u}" alt="${esc(b.a)}" ${dim} style="display:block;border:0;outline:none;-ms-interpolation-mode:bicubic;border-radius:8px;width:${BW}px;height:auto" /></a>`;
    return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse"><tr><td style="padding:0 0 14px 0">${sig}</td></tr><tr><td>${esBanner}</td></tr></table>`;
  }
  const $=id=>document.getElementById(id);
  function read(){const br=document.querySelector('input[name="esb"]:checked');return{name:$("es-name").value.trim(),title:$("es-title").value.trim(),email:$("es-email").value.trim(),phone:$("es-phone").value.trim(),cta:$("es-cta").checked,banner:br?br.value:"none",burl:$("es-burl").value.trim()};}
  function render(){
    const d=read();
    $("es-burl-fld").style.display=d.banner==="none"?"none":"";
    $("es-bnote").style.display=d.banner==="custom"?"":"none";
    $("es-preview").innerHTML=sigHTML(d);
  }
  ["es-name","es-title","es-email","es-phone","es-burl"].forEach(id=>$(id).addEventListener("input",render));
  $("es-cta").addEventListener("change",render);
  [...document.querySelectorAll('input[name="esb"]')].forEach(r=>r.addEventListener("change",render));

  // ---- your own banner: upload a file, or point at a hosted image ----
  const bTile=$("es-bcustom"),bRad=bTile.querySelector('input[name="esb"]'),bFile=$("es-bfile"),bImg=$("es-bimg");
  function showThumb(src){bImg.src=src;bImg.hidden=false;$("es-bupi").hidden=true;$("es-bchg").hidden=false;}
  function pick(){bRad.checked=true;render();}
  bTile.addEventListener("click",e=>{
    if(e.target===bRad)return;                                   // radio handles itself
    if($("es-bchg").contains(e.target)||!bImg.src){bFile.click();return;}
    pick();
  });
  bFile.addEventListener("change",()=>{
    const f=bFile.files&&bFile.files[0];
    if(!f)return;
    if(!/^image\//.test(f.type)){alert("Pick an image file (PNG, JPG, GIF or WebP).");bFile.value="";return;}
    if(f.size>3*1024*1024){alert("That image is "+Math.round(f.size/1024/1024*10)/10+" MB. Keep it under 3 MB, or host it and use Banner image URL instead.");bFile.value="";return;}
    const fr=new FileReader();
    fr.onload=()=>{
      const probe=new Image();
      probe.onload=()=>{CUSTOM.src=String(fr.result);CUSTOM.w=probe.naturalWidth;CUSTOM.h=probe.naturalHeight;showThumb(CUSTOM.src);pick();};
      probe.onerror=()=>alert("That image could not be read. Try a PNG or JPG.");
      probe.src=String(fr.result);
    };
    fr.onerror=()=>alert("That image could not be read. Try a PNG or JPG.");
    fr.readAsDataURL(f);
  });
  render();

  // ---- copy handlers ----
  const flash=(btn,msg)=>{const o=btn.innerHTML;btn.innerHTML=msg;setTimeout(()=>{btn.innerHTML=o;},1700);};
  function selectAndCopy(node){const r=document.createRange();r.selectNode(node);const s=window.getSelection();s.removeAllRanges();s.addRange(r);let ok=false;try{ok=document.execCommand("copy");}catch(_){}s.removeAllRanges();return ok;}
  $("es-copy").addEventListener("click",function(){
    const node=$("es-preview"),html=toAbs(node.innerHTML),btn=this;
    const done=()=>flash(btn,'Copied ✓'),fail=()=>{selectAndCopy(node)?done():flash(btn,'Press ⌘/Ctrl+C');};
    if(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write){
      const item=new ClipboardItem({"text/html":new Blob([html],{type:"text/html"}),"text/plain":new Blob([node.innerText],{type:"text/plain"})});
      navigator.clipboard.write([item]).then(done).catch(fail);
    }else{fail();}
  });

  // ---- HubSpot: copy the raw source as plain text, indented so it reads in a source editor ----
  const HSBLOCK=/^(table|tbody|tr|td)$/;
  function fmtHTML(h){
    let out="",depth=0;
    h.replace(/</g,"\n<").split("\n").filter(Boolean).forEach(function(seg){
      const m=/^<(\/?)([a-z]+)/i.exec(seg);
      if(!m||!HSBLOCK.test(m[2].toLowerCase())){out+=seg;return;}
      const closing=m[1]==="/";
      if(closing)depth=Math.max(0,depth-1);
      out+="\n"+"  ".repeat(depth)+seg;
      if(!closing)depth++;
    });
    return out.trim();
  }
  function copyText(t,btn){
    const done=()=>flash(btn,'Copied ✓');
    const fb=()=>{const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();let ok=false;try{ok=document.execCommand("copy");}catch(_){}document.body.removeChild(ta);ok?done():flash(btn,'Press ⌘/Ctrl+C');};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done).catch(fb);}else{fb();}
  }
  $("es-copy-html").addEventListener("click",function(){copyText(fmtHTML(toAbs($("es-preview").innerHTML)),this);});

  window.scrollTo(0,0);
}


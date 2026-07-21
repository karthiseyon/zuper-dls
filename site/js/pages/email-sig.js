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
    <p class="sec-note">Everything you type updates the preview on the right. When it looks good, hit <b style="color:var(--text-primary)">Copy signature</b> and paste it into your Outlook signature settings.</p>
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
      <div class="preview-col">
        <div class="pv-label">Live preview</div>
        <div class="pv-card"><div id="es-preview"></div></div>
        <div class="pv-actions">
          <button class="btn-copy" id="es-copy">${icon("copy",17)} Copy signature</button>
        </div>
        <p class="pv-hint"><b>Paste into Outlook:</b> open <b>Settings</b> → <b>Account</b> → <b>Signatures</b> → <b>New signature</b>, click into the signature box and paste (<b>⌘/Ctrl + V</b>). Give it a name and Save. The logo, banner and colours come along automatically.</p>
      </div>
      <div class="fld es-bfld">
        <label id="esb-lbl">Email banner <span style="color:var(--text-tertiary);font-weight:500">· optional, pick one</span></label>
        <div class="es-banners" role="radiogroup" aria-labelledby="esb-lbl">
          <label class="bopt"><input type="radio" name="esb" value="none" checked><span class="bnone">No banner</span></label>
          <label class="bopt"><input type="radio" name="esb" value="sense"><img src="assets/email/zuper-emailer-sense.png" alt="Introducing Zuper Sense"></label>
          <label class="bopt"><input type="radio" name="esb" value="trades"><img src="assets/email/zuper-emailer-trades.png" alt="The AI Operating System for the Skilled Trades"></label>
        </div>
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
  function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
  // banner link: allow http(s) only, add https:// to bare domains, fall back to zuper.co
  function esUrl(u){u=(u||"").trim();if(/^https?:\/\//i.test(u))return u;if(/^[\w.-]+\.[a-z]{2,}([\/?#].*)?$/i.test(u))return "https://"+u;return "https://www.zuper.co";}
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
    const b=BAN[d.banner];
    if(!b)return sig;
    const esBanner=`<a href="${esc(esUrl(d.burl))}" style="text-decoration:none"><img src="${b.u}" alt="${esc(b.a)}" width="380" height="95" style="display:block;border:0;outline:none;-ms-interpolation-mode:bicubic;border-radius:8px" /></a>`;
    return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse"><tr><td style="padding:0 0 14px 0">${sig}</td></tr><tr><td>${esBanner}</td></tr></table>`;
  }
  const $=id=>document.getElementById(id);
  function read(){const br=document.querySelector('input[name="esb"]:checked');return{name:$("es-name").value.trim(),title:$("es-title").value.trim(),email:$("es-email").value.trim(),phone:$("es-phone").value.trim(),cta:$("es-cta").checked,banner:br?br.value:"none",burl:$("es-burl").value.trim()};}
  function render(){const d=read();$("es-burl-fld").style.display=d.banner==="none"?"none":"";$("es-preview").innerHTML=sigHTML(d);}
  ["es-name","es-title","es-email","es-phone","es-burl"].forEach(id=>$(id).addEventListener("input",render));
  $("es-cta").addEventListener("change",render);
  [...document.querySelectorAll('input[name="esb"]')].forEach(r=>r.addEventListener("change",render));
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
  window.scrollTo(0,0);
}


/* ============ LOGO USAGE ============ */
function buildLogos(){
  stage.style.cssText=chromeCss();

  const MONO="'Geist Mono',ui-monospace,monospace",GRAD="linear-gradient(135deg,#1C0A06 0%,#7E1C0B 30%,#D43A14 64%,#F2864F 100%)",INK="#191919";
  const cap=t=>`<div style="font-family:${MONO};font-size:11px;color:#7A7268;margin-top:10px;letter-spacing:.02em">${t}</div>`;

  /* grounds, approved placements */
  const ok=`<span style="position:absolute;top:10px;right:10px;width:22px;height:22px;border-radius:50%;background:#1E854B;color:#fff;display:flex;align-items:center;justify-content:center">${icon("check",13)}</span>`;
  const grounds=[
    [logo("dark",30),"#fff","border:1px solid #E7E0D6","Full colour, on white &amp; light neutrals"],
    [logo("dark",30),"#FBF2EA","","Full colour, on warm peach"],
    [logo("white",30),"#282828","","White, on charcoal &amp; dark UI"],
    [logo("white",30),GRAD,"","White, on the orange gradient"]
  ].map(g=>`<div><div style="position:relative;background:${g[1]};${g[2]};border-radius:16px;padding:38px 22px;display:flex;align-items:center;justify-content:center;min-height:104px">${ok}${g[0]}</div>${cap(g[3])}</div>`).join("");

  /* misuse, never do this */
  const donts=[
    ["Don't stretch or distort",`<span style="display:block;transform:scaleX(1.7)">${logo("dark",26)}</span>`,"#fff"],
    ["Don't rotate it",`<span style="display:block;transform:rotate(-13deg)">${logo("dark",26)}</span>`,"#fff"],
    ["Don't recolour the mark",`<span style="display:block;filter:hue-rotate(175deg) saturate(1.7)">${logo("dark",26)}</span>`,"#fff"],
    ["Don't add shadows or effects",`<span style="display:block;filter:drop-shadow(0 5px 4px rgba(0,0,0,.45))">${logo("dark",26)}</span>`,"#fff"],
    ["Don't ghost or fade it",`<span style="display:block;opacity:.3">${logo("dark",26)}</span>`,"#fff"],
    ["Don't sit it on a low‑contrast ground",`<span style="display:block">${logo("dark",26)}</span>`,GRAD]
  ].map(d=>`<div><div style="position:relative;background:${d[2]};border:1px solid #E7E0D6;border-radius:14px;padding:28px 16px;display:flex;align-items:center;justify-content:center;min-height:94px;overflow:hidden"><span style="position:absolute;top:9px;right:9px;width:22px;height:22px;border-radius:50%;background:#C42121;color:#fff;display:flex;align-items:center;justify-content:center">${icon("x",13)}</span>${d[1]}</div>${cap(d[0])}</div>`).join("");

  /* co-branding, partner lockups. HubSpot (a real Zuper integration partner) is the worked example */
  const HUBW="M11.48 4.974v8.475H3.694V4.974H0v20.231h3.695v-8.2h7.784v8.2h3.696V4.974zm15.522 13.692a3.057 3.057 0 1 1-6.115 0V10h-3.505v8.666a6.556 6.556 0 0 0 13.112 0V10h-3.492v8.666zm25.971-7.773c0-1.777 1.175-2.34 2.462-2.34 1.038 0 2.408.79 3.305 1.748l2.295-2.706c-1.146-1.55-3.47-2.621-5.373-2.621-3.803 0-6.553 2.227-6.553 5.919 0 6.85 8.372 4.676 8.372 8.51 0 1.182-1.148 2.226-2.462 2.226-2.073 0-2.745-1.013-3.697-2.085l-2.548 2.649c1.63 2 3.64 3.016 6.047 3.016 3.613 0 6.519-2.254 6.519-5.778 0-7.604-8.373-5.241-8.373-8.538m51.8 11.08c-2.071 0-2.66-.896-2.66-2.268V13.63h3.22v-3.078h-3.22V6.491l-3.554 1.595V20.46c0 3.165 2.184 4.76 5.178 4.76.47.008.94-.03 1.402-.112l.867-3.192c-.391.027-.84.054-1.233.054M40.344 10.101c-1.736 0-2.948.504-4.12 1.653V5.095h-3.51v12.343c0 4.62 3.34 7.786 7.094 7.786 4.164 0 7.827-3.222 7.827-7.56 0-4.284-3.371-7.56-7.291-7.56m-.022 11.587a3.983 3.983 0 1 1 0-7.967 3.983 3.983 0 0 1 0 7.967m38.142-4.211c0-4.346-3.655-7.56-7.827-7.56-3.753 0-7.094 3.165-7.094 7.786v12.35h3.51v-6.668c1.17 1.147 2.384 1.653 4.118 1.653 3.92 0 7.292-3.276 7.292-7.561m-3.323-.044a3.983 3.983 0 1 1-7.967 0 3.983 3.983 0 0 1 7.967 0";
  const HUBS="M89.806 9.75V6.223a2.716 2.716 0 0 0 1.566-2.448v-.081c0-1.5-1.216-2.716-2.716-2.716h-.081a2.716 2.716 0 0 0-2.716 2.716v.081a2.716 2.716 0 0 0 1.566 2.448V9.75a7.691 7.691 0 0 0-3.657 1.61l-9.673-7.534c.069-.249.105-.505.109-.762a3.06 3.06 0 1 0-3.064 3.054 3.027 3.027 0 0 0 1.507-.41l9.525 7.412a7.715 7.715 0 0 0 .118 8.69l-2.897 2.898a2.488 2.488 0 0 0-.724-.118 2.513 2.513 0 1 0 2.515 2.515 2.48 2.48 0 0 0-.118-.724l2.866-2.867A7.728 7.728 0 1 0 89.806 9.75m-1.188 11.6a3.965 3.965 0 1 1 0-7.927 3.965 3.965 0 0 1 .004 7.925";
  const hub=(w,s,px)=>`<svg viewBox="0 0 106 31" height="${px}" style="width:auto;display:block" role="img" aria-label="HubSpot"><g fill="none"><path d="${HUBW}" fill="${w}"/><path d="${HUBS}" fill="${s}"/></g></svg>`;
  const pmark=(c,px)=>c==="full"?hub("#33475B","#FF7A59",px):hub(c,c,px);
  const lockup=(v,dc,pc,px)=>`<span style="display:inline-flex;align-items:center;gap:${Math.round(px*.8)}px">${logo(v,px)}<span style="width:1px;height:${Math.round(px*1.3)}px;background:${dc};display:inline-block;flex:none"></span>${pmark(pc,Math.round(px*.95))}</span>`;
  const codonts=[
    ["Don't let the partner outweigh the mark",`<span style="display:inline-flex;align-items:center;gap:14px">${logo("dark",15)}<span style="width:1px;height:34px;background:#D8D0C4"></span>${pmark("full",30)}</span>`,"#fff"],
    ["Don't merge the marks, keep the divider",`<span style="display:inline-flex;align-items:center;gap:5px">${logo("dark",22)}${pmark("full",19)}</span>`,"#fff"],
    ["Don't recolour the partner in Zuper orange",lockup("dark","#D8D0C4","#FD5000",22),"#fff"],
    ["Don't pair on a ground either mark can't clear",lockup("dark","#7E1C0B","full",22),GRAD]
  ].map(d=>`<div><div style="position:relative;background:${d[2]};border:1px solid #E7E0D6;border-radius:14px;padding:28px 16px;display:flex;align-items:center;justify-content:center;min-height:94px;overflow:hidden"><span style="position:absolute;top:9px;right:9px;width:22px;height:22px;border-radius:50%;background:#C42121;color:#fff;display:flex;align-items:center;justify-content:center">${icon("x",13)}</span>${d[1]}</div>${cap(d[0])}</div>`).join("");
  const corules=[
    ["shield","Same rules as ours","The supplied files, clear space, minimum sizes and the misuse list above all apply when a partner uses the Zuper mark."],
    ["droplet","Match the ground","Full colour on white and light neutrals, white on dark. If either mark can't clear the ground, move the pair onto a white panel. Never recolour a mark to fit."],
    ["check","Sign-off before it ships","A co-branded piece claims a real partnership. Zuper marketing approves every co-branded asset before it goes out."],
    ["download","Get the files","Logos live on the <b>Brand assets</b> page. Partners get the same files, never screenshots or redraws."]
  ].map(c=>`<div style="background:#fff;border:1px solid #E7E0D6;border-radius:14px;padding:20px;display:flex;gap:14px;align-items:flex-start"><span style="color:#FD5000;flex:none;margin-top:2px">${icon(c[0],20)}</span><div><h4 style="font:700 14px/1.3 'Inter',sans-serif;color:${INK};margin:0 0 6px">${c[1]}</h4><p style="font:400 13px/1.55 'Inter',sans-serif;color:#5C554C;margin:0">${c[2]}</p></div></div>`).join("");

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Brand</p>
      <h1>Logo usage</h1>
      <p class="lede">How to place the Zuper mark so it always reads as Zuper, clear space, minimum sizes, the right ground for each variant, the things to never do, and how the mark pairs with partner brands. Grab the files themselves on the <b>Brand assets</b> page.</p>
      <div class="chips">
        <span class="chip"><span class="swt" style="background:#FD5000"></span>protect the mark</span>
        <span class="chip">clear space = x</span>
        <span class="chip">min 24px · 100px</span>
        <span class="chip">currentColor grounds</span>
      </div>
      <div class="hero-art"><div class="float ha-logo">
        <div class="frame">
          <span class="x t">x</span><span class="x b">x</span><span class="x l">x</span><span class="x r">x</span>
          <span class="lg l1">${logo("dark",26)}</span><span class="lg l2">${logo("white",26)}</span>
        </div>
        <div class="grounds"><span class="g g1"></span><span class="g g2"></span><span class="g g3"></span><span class="cap">right variant per ground</span></div>
        <div class="ruler"><i></i><span>clear space = x</span><i></i></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Breathing room</p><h2 class="sec">Clear space &amp; minimum size</h2>
    <p class="sec-note">Give the logo room and never render it so small it breaks up. <b>x</b> = the height of the Zuper mark.</p>
    <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:stretch">
      <div style="flex:2;min-width:280px;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center">
        <div style="padding:30px;outline:1.5px dashed #E8C4B3;outline-offset:0;border-radius:4px">${logo("dark",36)}</div>
        ${cap("Clear space on all four sides ≥ x, keep text, edges and other logos out of this zone")}
      </div>
      <div style="flex:1;min-width:220px;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:32px;display:flex;flex-direction:column;justify-content:center;gap:22px">
        <div style="display:flex;align-items:center;gap:14px">${logo("dark",18)}<span style="font-family:${MONO};font-size:11px;color:#7A7268">100px, horizontal min (web)</span></div>
        <div style="display:flex;align-items:center;gap:14px"><img src="assets/logos/zuper-logomark.svg" alt="" style="height:24px;width:auto;display:block"><span style="font-family:${MONO};font-size:11px;color:#7A7268">24px, mark min (web)</span></div>
        <div style="border-top:1px solid #F0EAE1;padding-top:16px;font-family:${MONO};font-size:11px;color:#7A7268;line-height:1.6">In print, keep the horizontal lockup ≥ <b style="color:${INK}">10&nbsp;mm</b> tall. Below the minimum, use the <b style="color:${INK}">logomark</b> alone.</div>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · The right ground</p><h2 class="sec">Pick the variant for the background</h2>
    <p class="sec-note">Full‑colour on light, white on dark or orange. The mark must always clear the background it sits on.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:18px;padding-top:4px">${grounds}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Never do this</p><h2 class="sec">Logo misuse</h2>
    <p class="sec-note">The mark is fixed artwork. Don't redraw, restyle or recolour it, use the supplied files as‑is.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:18px;padding-top:4px">${donts}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · With partners</p><h2 class="sec">Co‑branding &amp; partner lockups</h2>
    <p class="sec-note">When Zuper appears next to a partner brand, pair the marks, don't merge them. Zuper first, a hairline divider, clear space ≥ <b>x</b> on either side of it, and the partner scaled to the same optical height.</p>
    <div style="display:flex;gap:18px;flex-wrap:wrap;align-items:stretch">
      <div style="flex:2;min-width:300px;position:relative;background:#fff;border:1px solid #E7E0D6;border-radius:16px;padding:44px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center">${ok}${lockup("dark","#D8D0C4","full",30)}${cap("On white &amp; light neutrals: full‑colour Zuper, the partner in its own colours")}</div>
      <div style="flex:1;min-width:240px;position:relative;background:#282828;border-radius:16px;padding:44px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center">${ok}${lockup("white","rgba(255,255,255,.35)","#fff",26)}<div style="font-family:${MONO};font-size:11px;color:#B8B2A9;margin-top:10px;letter-spacing:.02em">On dark or orange grounds, both marks go white</div></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:18px;padding-top:22px">${codonts}</div>
    <h3 style="font:800 17px/1.2 'Inter',sans-serif;color:${INK};letter-spacing:-.01em;margin:34px 0 14px">If you're the partner</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px">${corules}</div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


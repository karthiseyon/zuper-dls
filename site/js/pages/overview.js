/* ============ OVERVIEW / COVER (Guidy-style card grid) ============ */
function buildOverview(){
  stage.style.cssText=chromeCss();

  const ARROW='<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const WORK='<div class="pv-work"><div class="scr"><div class="scr-hd"><i></i><i></i><i></i></div><div class="scr-bd"><div class="row"></div><div class="row"></div><div class="bar"></div></div></div><img class="wk" src="assets/mini-humans/on-the-job.gif" alt=""></div>';

  /* per-motif scale (small motifs larger, big ones a touch smaller) */
  const SCALE={use:.98,voice:1.06,"logo-usage":.98,color:.88,type:1.16,icons:1.04,agents:.86,work:1,
    assets:.82,deck:.86,website:.82,"one-pager":1.04,emailer:.86,"email-sig":1.14,social:.82};

  /* [pageId, motifKey, title, description] */
  const FOUND=[
    ["use","use","How to use this","Plug the system into Claude, then design on-brand."],
    ["voice","voice","Voice &amp; tone","How Zuper sounds, and the words we skip."],
    ["logo-usage","logo-usage","Logo usage","Clear space, sizing and what not to do."],
    ["color","color","Colour","One vivid orange, and the neutrals around it."],
    ["type","type","Typography","Aptos for decks, Jakarta and Inter elsewhere."],
    ["icons","icons","Iconography","One line weight, drawn on a 256 grid."],
    ["agents","agents","Agent avatars","The caped mascots, one per AI agent."],
    ["humans","work","Mini humans","Field crews in motion for empty states."],
    ["assets","assets","Brand assets","Logos, backgrounds and templates to download."]
  ];
  const SYS_=[
    ["deck","deck","Deck","One deck, white or orange, Sense goes dark."],
    ["website","website","Website DLS","The real zuper.co marketing system."],
    ["one-pager","one-pager","Case study","The one-page co-branded customer story."],
    ["emailer","emailer","Emailer","A 600px branded email from reusable blocks."],
    ["social","social","Social &amp; ads","Real export and IAB sizes, one CTA."]
  ];
  const APP_=[
    ["email-sig","email-sig","Email signature","Build an on-brand Outlook signature fast."]
  ];

  const preview=(key)=>{
    const inner = key==="work" ? WORK : (HEROART[key]||"");
    return `<div class="hs" style="--s:${SCALE[key]||.82}">${inner}</div>`;
  };
  const card=(c,i)=>`<button class="gy-card" onclick="setActive('${c[0]}')">
      <div class="prev">${preview(c[1])}</div>
      <div class="gy-foot">
        <div class="gy-txt"><h3>${c[2]}</h3><p>${c[3]}</p></div>
        <div class="gy-end"><span class="gy-num">(${String(i+1).padStart(2,"0")})</span><span class="gy-arrow">${ARROW}</span></div>
      </div>
    </button>`;

  stage.innerHTML=`
  <div class="gy-overview">
    <header class="gy-head">
      <p class="eb">Design Language System · for Claude Design</p>
      <h1>Brand‑perfect, every time</h1>
      <p>One home for everything on‑brand at Zuper. Pick a card to open the foundation or system you need. The systems are published in Claude Design; the tools run right here.</p>
    </header>
    <div class="gy-chapter"><span class="no">01</span><span class="nm">Foundations</span></div>
    <div class="gy-grid">${FOUND.map(card).join("")}</div>
    <div class="gy-divider"></div>
    <div class="gy-chapter"><span class="no">02</span><span class="nm">Application</span></div>
    <div class="gy-grid">${APP_.map(card).join("")}</div>
    <div class="gy-divider"></div>
    <div class="gy-chapter"><span class="no">03</span><span class="nm">AI learning systems</span></div>
    <div class="gy-grid">${SYS_.map(card).join("")}</div>
  </div>`;
  window.scrollTo(0,0);

  /* Guidy-style scroll reveal: cards fade up one-by-one, re-triggering every
     time they scroll into/out of view */
  const rv=[...stage.querySelectorAll(".gy-head,.gy-chapter,.gy-card")];
  rv.forEach(function(el){el.classList.add("rv");});
  if(!("IntersectionObserver" in window)){rv.forEach(function(el){el.classList.add("in");});return;}
  const io=new IntersectionObserver(function(ents){ents.forEach(function(e){
    const el=e.target, grid=el.closest(".gy-grid");
    if(e.isIntersecting){
      if(grid){var i=[...grid.children].indexOf(el);el.style.transitionDelay=(i*90)+"ms";}
      el.classList.add("in");
    }else{
      el.style.transitionDelay="0ms";
      el.classList.remove("in");
    }
  });},{rootMargin:"0px 0px -12% 0px"});
  rv.forEach(function(el){io.observe(el);});
}

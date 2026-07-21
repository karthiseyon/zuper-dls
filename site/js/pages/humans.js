/* ============ MINI HUMANS ============ */
function buildHumans(){
  stage.style.cssText=chromeCss();

  const HUMANS=[[GIF_C,"Carrying gear"],[GIF_B,"On the tools"],[GIF_A,"Reaching up"],[GIF_02,"On the job"],[GIF_03,"On the ladder"],[GIF_06,"Ready to work"],[GIF_08,"Inspecting"],[GIF_09,"The crew"]];
  const gallery=HUMANS.map((x,i)=>`<div class="human-card"><img src="${x[0]}" alt=""><span class="lbl">${x[1]}</span><button class="gcopy dl-btn" data-href="${x[0]}" data-name="zuper-mini-human-${i+1}.gif">${icon("download",12)} Download</button></div>`).join("");
  const why=[
    ["monitor","The product is the hero","Real Zuper screens do the talking, live dashboards, not stock smiles."],
    ["users","The real people who use it","Field techs, crews and customers, the people Zuper is built for, and with."],
    ["check","A supporting role","They live in a corner and add warmth &amp; motion. They never compete with the product or the message."],
    ["bell","Used sparingly","2–3 per deck or page, never repeated on one screen."]
  ].map(c=>`<div class="why-card"><div class="ic">${icon(c[0],22)}</div><div><h4>${c[1]}</h4><p>${c[2]}</p></div></div>`).join("");

  stage.innerHTML=`
  <header class="sys-hero">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Brand · Imagery</p>
      <h1>Mini humans</h1>
      <p class="lede">Zuper doesn't sell with stock photography. The <b>product is the hero</b>, and these small, animated workers add the human touch in a corner, never stealing the show. They're the techs, crews and customers Zuper is built for.</p>
    </div>
    <img class="ha-walker" src="${GIF_C}" alt="">
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Why</p><h2 class="sec">Mini humans, not stock photos</h2>
    <p class="sec-note">Competitors fill pages with generic stock photography of people. We lead with the product and let a single mini human carry the warmth.</p>
    <div class="why-grid">${why}</div>
    <div class="why-card" style="margin-top:18px"><div class="ic">${icon("scale",22)}</div><div><h4>Keep them small. This matters most</h4><p>A mini human is a <b>corner accent</b>, roughly thumb‑sized beside a headline or product screen. If you notice the person before the message, scale it down. Big reads as stock photography; small reads as Zuper. They support the product. They never become the hero.</p></div></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · The set</p><h2 class="sec">Eight workers</h2>
    <p class="sec-note">Pixel‑render loops with transparent backgrounds. They sit on any surface (white, orange, dark). <b style="color:var(--text-primary)">Download a GIF</b> to drop it straight into your design. Keep it small.</p>
    <div class="humans-grid">${gallery}</div>
  </div></section>

  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


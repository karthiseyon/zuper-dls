function buildVoice(){
  stage.style.cssText=foundTheme();
  const MONO="'Geist Mono',ui-monospace,monospace";
  const vprin=(n,ic,t,d)=>`<div class="vprin"><div class="top"><span class="ic">${icon(ic,19)}</span><span class="num">${n}</span></div><h5>${t}</h5><p>${d}</p></div>`;
  const vline=(eb,q,g)=>`<div class="vline ${g}"><p class="veb">${eb}</p><h4>${q}</h4><button class="cp url-copy" data-copy="${q}">Copy</button></div>`;
  const sd=(say,dont)=>`<tr><td class="area sd-ok" style="color:#1E854B;font-weight:600">${say}</td><td class="sd-no" style="color:#B4341C">${dont}</td></tr>`;
  const vcta=(t)=>`<div class="vcta"><i class="l1"></i><i class="l2"></i><b>${t}</b></div>`;
  const lit=(t,d)=>`<label><input type="checkbox"><span class="bx">${icon("check",13)}</span><span class="qt"><b>${t}</b> ${d}</span></label>`;
  const banned=["seamless","leverage","unlock","empower","streamline","robust","cutting‑edge","game‑changing","elevate","harness","synergy","ecosystem","holistic","revolutionary"];
  const tell=(t,eg)=>`<div class="row3"><b>${t}</b><span class="eg">${eg}</span></div>`;
  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Voice</p>
      <h1>Voice &amp; tone</h1>
      <p class="lede">How Zuper writes, plain‑spoken, warm and confident, from the homepage to a button label. Say what the product does <b style="color:#191919">for the customer</b>, in their words, and get out of the way. If a roofing contractor wouldn't say it at a trade show, it doesn't belong on the page.</p>
      <div class="chips">
        <span class="chip">Plain‑spoken</span>
        <span class="chip">Approachable</span>
        <span class="chip">Customer‑obsessed</span>
        <span class="chip">Celebrate field teams</span>
        <span class="chip">Forward‑looking</span>
      </div>
      <div class="hero-art"><div class="float ha-voice">
        <div class="bub"><span class="tw">Run your service business.</span><span class="cr"></span></div>
        <div class="sd"><span class="ok">✓ "Win 1 in 3 quotes on‑site"</span><span class="no"><s>seamless · leverage · empower</s></span></div>
        <div class="tag">Zuper voice · plain · warm · field‑first</div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · The five principles</p><h2 class="sec">How Zuper sounds</h2>
    <p class="sec-note">Five principles carry every word we write. Each one has a concrete copy rule, and an anti‑pattern to avoid.</p>
    <div class="vpgrid">
      ${vprin("01","chat","Plain‑spoken","Write like you're talking to a friend at a trade show. 8th‑grade words, no hyperbole. Industry terms techs use daily are fine; vendor‑speak isn't.")}
      ${vprin("02","handshake","Approachable","Warm and direct. Use contractions, short sentences, second person. Professional warmth, not startup‑bro.")}
      ${vprin("03","heart","Customer‑obsessed","Lead with the outcome, then the capability. The customer is the hero of every section, and the pain gets named in their words, not the product's.")}
      ${vprin("04","hard-hat","Celebrate field teams","Name the roles: field techs, crew leads, installers. Show their real day, a crew lead juggling six jobs across three zip codes. Respect them, don't “manage resources.”")}
      ${vprin("05","trend-up","Forward‑looking","Confidently optimistic. Future‑tense outcomes (“you'll see…”). No hedging, no hype.")}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · On‑tone vs off‑tone</p><h2 class="sec">The difference in one example</h2>
    <p class="sec-note">Write to <b style="color:var(--text-primary)">“you,”</b> not “we, we, we.” Lead with the reader's world; use “we” only to show how we help.</p>
    <div class="cols-2" style="margin-top:6px">
      <div style="border:1px solid #F0C9C0;background:#FCF3F1;border-radius:14px;padding:20px 22px">
        <div style="font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#B4341C;margin-bottom:12px">✕ Off‑tone · generic AI</div>
        <p style="margin:0;font-size:16px;line-height:1.55;color:#7A5148">“<span class="bw">Leverage</span> our innovative platform to <span class="bw">streamline</span> operations and <span class="bw">unlock</span> unprecedented <span class="bw">efficiency</span> across your entire organization.”</p>
      </div>
      <div style="border:1px solid #CDE9D6;background:#F1F9F3;border-radius:14px;padding:20px 22px">
        <div style="font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#1E854B;margin-bottom:12px">✓ On‑tone · Zuper voice</div>
        <p style="margin:0;font-size:16px;line-height:1.55;color:#1B3A28">“The office manager <span class="gw">stops playing phone tag</span> with crews. Techs get the job details they need <span class="gw">before they leave the truck</span>. And every dollar, earned and spent, is visible <span class="gw">without waiting for month‑end</span>.”</p>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Signature lines &amp; CTAs</p><h2 class="sec">The lines that sound like us</h2>
    <p class="sec-note">Pulled from the live brand, reuse and adapt these; keep their shape. Headlines make <b style="color:var(--text-primary)">one</b> claim, in sentence case, over a Geist Mono eyebrow. Shown here the way they ship, on the brand's own grounds.</p>
    <div class="vlines">
      ${vline("Scheduling &amp; dispatch","Stop losing revenue to missed calls and slow estimates.","white")}
      ${vline("Payments","From the first call to the final payment.","peach")}
      ${vline("Zuper Voice","Answer every call. Win every job.","grad")}
      ${vline("Zuper Sense","Type a question, get an answer, deploy an agent.","dark")}
      ${vline("The platform","The AI operating system to run your service business.","cream wide")}
    </div>
    <p class="sec-note" style="margin-top:28px;margin-bottom:14px">One primary action per surface, use the brand's own verbs:</p>
    <div class="vctas">${vcta("Test drive Zuper")}${vcta("Schedule a demo")}${vcta("Request early access")}${vcta("See how it works")}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">04 · Say / don't say</p><h2 class="sec">Trade jargon for outcomes</h2>
    <div style="overflow-x:auto"><table class="cstable"><thead><tr><th>Say this</th><th>Not this</th></tr></thead><tbody>
      ${sd("You see every job and every dollar from your phone","We leverage robust analytics to unlock efficiency")}
      ${sd("You'll see better margins in your first month","Our platform is proven to drive operational efficiencies")}
      ${sd("Field techs, crews, installers","Resources, workforce, headcount")}
      ${sd("Callback hell, the Monday morning scramble","Communication inefficiencies, operational bottlenecks")}
      ${sd("One system, not 6–8 disconnected tools","A best‑in‑class unified ecosystem")}
      ${sd("Book a demo","Begin your transformation journey")}
    </tbody></table></div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">05 · Words we never use</p><h2 class="sec">The AI &amp; jargon tells</h2>
    <p class="sec-note">These read as robotic or salesy, and break the plain‑spoken rule. When three or more land on a page, the copy stops sounding human. Skip <b style="color:var(--text-primary)">em dashes</b> too (use commas, colons or parentheses).</p>
    <div class="vtells">
      <div class="vtell">
        <h5>${icon("x",12)} Words we never use</h5>
        <div class="pill-row">${banned.map(w=>`<span style="font:500 12.5px/1 'Inter',sans-serif;color:#B4341C;background:#FCEEEA;border:1px solid #F2D3CB;border-radius:8px;padding:9px 12px;text-decoration:line-through;text-decoration-color:rgba(180,52,28,.45)">${w}</span>`).join("")}</div>
      </div>
      <div class="vtell">
        <h5>${icon("x",12)} Patterns that give it away</h5>
        ${tell("Em dashes","use commas, colons or parentheses")}
        ${tell("Reflexive triads","faster, smarter, better")}
        ${tell("“Not just X, Y”","not just software, a partner")}
        ${tell("Throat‑clearing openers","in today's fast‑paced world…")}
        ${tell("Hollow wrap‑ups","at the end of the day, it's a game‑changer")}
      </div>
    </div>
    <p class="sec-note" style="margin-top:18px;font-size:13px">Reference: <a href="https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing" target="_blank" rel="noopener" style="color:var(--brand-default);font-weight:600;text-decoration:none">Wikipedia · Signs of AI writing ↗</a>, the checklist these rules are built on.</p>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">06 · Write like an insider</p><h2 class="sec">Prove you get the work</h2>
    <p class="sec-note">Generic copy could belong to any competitor; specifics can't be faked. Real numbers, real workflows and real field moments show we actually know this world. <b style="color:var(--text-primary)">The test:</b> if you can swap in a competitor's name and the sentence still works, rewrite it.</p>
    <div class="cols-2" style="margin-top:6px">
      <div style="border:1px solid #F0C9C0;background:#FCF3F1;border-radius:14px;padding:20px 22px">
        <div style="font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#B4341C;margin-bottom:12px">✕ Too generic</div>
        <p style="margin:0;font-size:16px;line-height:1.55;color:#7A5148">“Zuper helps roofing businesses <span class="bw">improve efficiency</span> and <span class="bw">streamline their operations</span>.”</p>
      </div>
      <div style="border:1px solid #CDE9D6;background:#F1F9F3;border-radius:14px;padding:20px 22px">
        <div style="font-family:${MONO};font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#1E854B;margin-bottom:12px">✓ Straight from a live Zuper page</div>
        <p style="margin:0;font-size:16px;line-height:1.55;color:#1B3A28">“Every missed call is a <span class="gw">$15K–$100K job</span> walking to a competitor. You carry material and labor costs for <span class="gw">45–90 days</span> waiting on claims, while <span class="gw">$300K–$800K</span> sits trapped in receivables.”</p>
      </div>
    </div>
    <div class="vpgrid" style="margin-top:20px">
      ${vprin("01","percent","Use real numbers","“8 hrs saved per person, per week.” “35% fewer aging receivables.” “100% of calls answered.” Specifics beat adjectives.")}
      ${vprin("02","checklist","Name the workflow","“Aging supplements by carrier,” “good‑better‑best proposals,” “the supplement dance with adjusters.” The words the trade uses.")}
      ${vprin("03","chat-dots","Name the pain in their words","“Callback hell,” “the Monday morning scramble,” “scope creep on every tear‑off.” Use the exact phrases your ICP already says.")}
      ${vprin("04","truck","Set the scene","Time, weather, the truck, the customer at the door. Concrete situations prove you've been on the job.")}
      ${vprin("05","users-three","Write to the crew lead","Their real day, six jobs across three zip codes, not the org chart. Respect the people doing the work.")}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">07 · The litmus test</p><h2 class="sec">Before it ships</h2>
    <p class="sec-note">Read it out loud. If a crew‑lead peer wouldn't say it, rewrite it. Then run the five checks, for real:</p>
    <div class="litmus" id="litmus">
      <div class="lh"><b>The litmus test</b><span class="cnt" id="litCnt">0 / 5</span></div>
      ${lit("Plain‑spoken?","Would you say this to a friend? Any word a 14‑year‑old wouldn't get (roofing terms aside)?")}
      ${lit("Approachable?","Does it read like a conversation or a legal filing? Are there contractions?")}
      ${lit("Customer‑obsessed?","Is the customer the hero of every section? Does each feature earn a “so what”?")}
      ${lit("Celebrate field teams?","Would a crew lead feel respected, or managed?")}
      ${lit("Forward‑looking?","Does it project confidence without hedging or hype?")}
      <div class="lf"><span class="st" id="litSt">Nothing ships until all five pass.</span></div>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  (function(){
    const box=document.getElementById("litmus");if(!box)return;
    const cbs=[...box.querySelectorAll("input")],cnt=document.getElementById("litCnt"),st=document.getElementById("litSt");
    box.addEventListener("change",()=>{
      const n=cbs.filter(c=>c.checked).length;
      cnt.textContent=n+" / 5";
      box.classList.toggle("done",n===5);
      st.textContent=n===5?"All five pass. Ship it.":n===0?"Nothing ships until all five pass.":(5-n)+" more to go.";
    });
  })();
  window.scrollTo(0,0);
}


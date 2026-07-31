/* ============ FOUNDATIONS: agent avatars ============ */
/* Imported from Claude Design · foundations/brand-agents.html, caped 3D superhero mascots, one per AI agent. */
const AGENTS=[
  ["front-office","CSR Agent","Dispatch · support"],
  ["field-technician","Field Agent","On the job"],
  ["business-analyst","Business Analyst","Insights"],
  ["sales-coach","Sales Coach","Training officer"],
  ["review-analyser","Review Analyser","Reputation"],
  ["weather","Weather Forecast","Scheduling"],
  ["ar-agent","AR Agent","Collections"]
];
function agentFrame(a){return `<div class="frame"><img src="assets/agents/${a[0]}.png" alt="${a[1]}" loading="lazy" onerror="this.remove()"></div>`;}
function buildAgents(){
  stage.style.cssText=foundTheme();
  const card=(a)=>`<div class="acard">${agentFrame(a)}<div class="bd"><div class="meta"><div class="nm">${a[1]}</div><div class="role">${a[2]}</div></div><button class="dl-btn agdl" data-href="assets/agents/${a[0]}.png" data-name="zuper-${a[0]}.png" aria-label="Download ${a[1]}">${icon("download",16)}</button></div></div>`;
  const rule=(t)=>`<div style="display:flex;gap:11px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--border-subtle)"><span style="color:var(--brand-default);flex:0 0 auto;margin-top:1px">${icon("check",18)}</span><span style="font-size:14.5px;line-height:1.5;color:var(--text-secondary)">${t}</span></div>`;
  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Agents</p>
      <h1>Agent avatars</h1>
      <p class="lede">The faces of <b style="color:#191919">Zuper Sense</b>, one caped 3D superhero mascot per AI agent. Each agent keeps a single, consistent avatar across product, deck and web, framed on the orange gradient so the character pops.</p>
      <div class="chips">
        <span class="chip">Caped 3D mascots</span>
        <span class="chip">One avatar per agent</span>
        <span class="chip">Orange‑gradient ground</span>
        <span class="chip">Bottom‑aligned in frame</span>
      </div>
      <div class="hero-art"><div class="float ha-shift">
        <div class="hd"><span class="mk"><img src="assets/logos/zuper-logomark-white.svg" alt="" style="width:15px;height:auto;display:block"></span><span><b>Zuper</b><i>Agents on shift</i></span><span class="live"><u></u>Live</span></div>
        <div class="r r1"><span class="av"><img src="assets/agents/front-office.png" alt=""></span><span class="who"><b>CSR Agent</b><i>Dispatch · support</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("calendar-check",12)} Booked 9:30 AM</span></span></div>
        <div class="r r2"><span class="av"><img src="assets/agents/sales-coach.png" alt=""></span><span class="who"><b>Sales Coach</b><i>Training officer</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("lightbulb",12)} Upsell tip sent</span></span></div>
        <div class="r r3"><span class="av"><img src="assets/agents/business-analyst.png" alt=""></span><span class="who"><b>Business Analyst</b><i>Insights</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("trend-up",12)} Margin up 18%</span></span></div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · The line‑up</p><h2 class="sec">Meet the agents</h2>
    <p class="sec-note">Zuper Sense ships as a team of agents. Always use the mascot with the agent's name and its role label.</p>
    <div class="agrid">
      ${AGENTS.map(card).join("")}
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · Usage</p><h2 class="sec">Keep the team consistent</h2>
    <p class="sec-note">The avatars work because they never change. Same character, same ground, same label, everywhere an agent shows up.</p>
    <div class="dodont">
      <div class="col ok"><h5>${icon("check",13)} Do</h5><ul>
        <li>One avatar per agent, the same character in product, decks and web.</li>
        <li>Frame on the orange gradient or warm peach ground so the cape reads.</li>
        <li>Bottom-align the character in its frame; cropping from the waist up is fine.</li>
        <li>Caption with the agent's name and role label, set in Geist Mono.</li>
      </ul></div>
      <div class="col no"><h5>${icon("x",13)} Don't</h5><ul>
        <li>Don't swap characters between agents or invent new ones per deck.</li>
        <li>Don't place avatars on busy photos or colours outside the palette.</li>
        <li>Don't flip, recolour, outline or restyle the renders.</li>
        <li>Don't use an avatar without naming the agent it belongs to.</li>
      </ul></div>
    </div>
    <div style="margin-top:24px;display:flex;align-items:center;gap:14px;flex-wrap:wrap">
      <button class="ag-dl-all" id="agDlAll">${icon("download",16)} Download all ${AGENTS.length} avatars</button>
      <span style="font:500 11.5px/1.4 'Geist Mono',ui-monospace,monospace;color:var(--text-tertiary)">PNG · one file per agent</span>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  document.getElementById("agDlAll").addEventListener("click",()=>{
    AGENTS.forEach((a,i)=>setTimeout(()=>zDownload(`assets/agents/${a[0]}.png`,`zuper-${a[0]}.png`),i*380));
  });
  window.scrollTo(0,0);
}


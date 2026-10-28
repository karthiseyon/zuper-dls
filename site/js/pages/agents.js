/* ============ FOUNDATIONS: agent avatars ============ */
/* Imported from Claude Design · foundations/brand-agents.html, caped 3D superhero mascots, one per AI agent. */
/* alphabetical by agent role, so the grid has an order a reader can predict; 4th field is the persona name from the homepage (v5) */
const AGENTS=[
  ["ar-agent","AR Agent","Collections","Max"],
  ["business-analyst","Business Analyst","Insights","Mark"],
  ["front-office","CSR Agent","Dispatch · support","Nova"],
  ["field-technician","Field Agent","On the job","Bob"],
  ["review-analyser","Review Analyser","Reputation","Ruby"],
  ["sales-coach","Sales Coach","Training officer","Ted"],
  ["weather","Weather Forecast","Scheduling","Skye"]
];
/* the app's custom-agent avatars: 33 faces a customer picks from when they create an agent in Agent Studio */
const CUSTOM_AGENTS=Array.from({length:33},(_,i)=>"agent-"+String(i+1).padStart(2,"0"));
function agentFrame(a){return `<div class="frame"><img src="assets/agents/${a[0]}.png" alt="${a[3]?a[3]+", "+a[1]:a[1]}" loading="lazy" onerror="this.remove()"></div>`;}
function buildAgents(){
  stage.style.cssText=foundTheme();
  const card=(a)=>`<div class="acard">${agentFrame(a)}<div class="bd"><div class="meta"><div class="nm">${a[3]||a[1]}</div><div class="role">${a[3]?a[1]+" · "+a[2]:a[2]}</div></div><button class="dl-btn agdl" data-href="assets/agents/${a[0]}.png" data-name="zuper-${a[0]}.png" aria-label="Download ${a[1]}">${icon("download",16)}</button></div></div>`;
  const rule=(t)=>`<div style="display:flex;gap:11px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--border-subtle)"><span style="color:var(--brand-default);flex:0 0 auto;margin-top:1px">${icon("check",18)}</span><span style="font-size:14.5px;line-height:1.5;color:var(--text-secondary)">${t}</span></div>`;
  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Foundation · Agents</p>
      <h1>Agent avatars</h1>
      <p class="lede">The faces of <b style="color:#191919">Zuper Sense</b>, one caped 3D superhero mascot per AI agent. Each agent keeps a single, consistent avatar across product, deck and web, framed on the orange gradient so the character pops. Agents customers create in Agent Studio pick from a separate set of ${CUSTOM_AGENTS.length} custom avatars.</p>
      <div class="chips">
        <span class="chip">Caped 3D mascots</span>
        <span class="chip">One avatar per agent</span>
        <span class="chip">Orange‑gradient ground</span>
        <span class="chip">Bottom‑aligned in frame</span>
        <span class="chip">${CUSTOM_AGENTS.length} custom‑agent faces</span>
      </div>
      <div class="hero-art"><div class="float ha-shift">
        <div class="hd"><span class="mk"><img src="assets/logos/zuper-logomark-white.svg" alt="" style="width:15px;height:auto;display:block"></span><span><b>Zuper</b><i>Agents on shift</i></span><span class="live"><u></u>Live</span></div>
        <div class="r r1"><span class="av"><img src="assets/agents/front-office.png" alt=""></span><span class="who"><b>CSR Agent</b><i>Dispatch · support</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("calendar-check",12)} Booked 9:30 AM</span></span></div>
        <div class="r r2"><span class="av"><img src="assets/agents/sales-coach.png" alt=""></span><span class="who"><b>Sales Coach</b><i>Training officer</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("lightbulb",12)} Upsell tip sent</span></span></div>
        <div class="r r3"><span class="av"><img src="assets/agents/review-analyser.png" alt=""></span><span class="who"><b>Review Analyser</b><i>Reputation</i></span><span class="st"><span class="w">On it…</span><span class="d">${icon("star",12)} New 5‑star review</span></span></div>
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
    <p class="eyebrow">02 · Custom agents</p><h2 class="sec">Faces for the agents customers create</h2>
    <p class="sec-note">When someone creates an agent in Agent Studio, they give it one of these ${CUSTOM_AGENTS.length} avatars. Same caped 3D style as the mascots, so custom agents sit next to the ready-made ones as one team. Use them for custom agents only, never for a ready-made agent.</p>
    <div class="cgrid">
      ${CUSTOM_AGENTS.map(c=>`<div class="acard ccard2"><div class="frame"><img src="assets/agents/custom/${c}.webp" alt="Custom agent avatar ${c.slice(6)}" loading="lazy" onerror="this.remove()"></div><div class="bd"><div class="meta"><div class="role">${c.replace("-"," ")}</div></div><button class="dl-btn agdl" data-href="assets/agents/custom/${c}.png" data-name="zuper-custom-${c}.png" aria-label="Download custom avatar ${c.slice(6)}">${icon("download",14)}</button></div></div>`).join("")}
    </div>
    <div style="margin-top:24px;display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <a class="ag-dl-all" href="assets/agents/custom/zuper-custom-agent-avatars.zip" download>${icon("download",16)} Download all (PNG, 640px)</a>
      <a class="ag-dl-all ag-dl-all--line" href="assets/agents/custom/zuper-custom-agent-avatars-2x.zip" download>${icon("download",16)} Download all @2x (1280px)</a>
      <span style="font:500 11.5px/1.4 'Geist Mono',ui-monospace,monospace;color:var(--text-tertiary)">Transparent PNG · square · bottom‑aligned</span>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Usage</p><h2 class="sec">Keep the team consistent</h2>
    <p class="sec-note">The avatars work because they never change. Same character, same ground, same label, everywhere an agent shows up.</p>
    <div class="dodont">
      <div class="col ok"><h5>${icon("check",13)} Do</h5><ul>
        <li>One avatar per agent, the same character in product, decks and web.</li>
        <li>Frame on the orange gradient or warm peach ground so the cape reads.</li>
        <li>Bottom-align the character in its frame; cropping from the waist up is fine.</li>
        <li>Caption with the agent's name and role label, set in Geist Mono.</li>
        <li>Give each custom agent one face from the custom set and keep it.</li>
      </ul></div>
      <div class="col no"><h5>${icon("x",13)} Don't</h5><ul>
        <li>Don't swap characters between agents or invent new ones per deck.</li>
        <li>Don't place avatars on busy photos or colours outside the palette.</li>
        <li>Don't flip, recolour, outline or restyle the renders.</li>
        <li>Don't use an avatar without naming the agent it belongs to.</li>
        <li>Don't give a custom agent a ready-made mascot, or a ready-made agent a custom face.</li>
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


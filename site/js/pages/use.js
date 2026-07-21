/* ============ USE WITH CLAUDE ============ */
function buildUse(){
  stage.style.cssText=chromeCss();

  stage.innerHTML=`
  <header class="sys-hero has-art">
    <div class="inner">
      <div style="margin-bottom:22px">${logo("dark",30)}</div>
      <p class="ebm">Start here · pick your door</p>
      <h1>How to use this</h1>
      <p class="lede">The Zuper brand plugs into Claude <b>three ways</b>, pick where you work: <b>Claude Design</b> for decks &amp; pages in the browser, <b>Claude.ai chat</b> with the brand skill installed, or <b>Claude Code</b> in your repo. Everything comes out on‑brand.</p>
      <div class="hero-art"><div class="float ha-conn">
        <div class="np"><span class="ci">${icon("cpu",17)}</span>Claude Design</div>
        <div class="wire"></div>
        <div class="np"><span class="ci">${icon("globe",17)}</span>Zuper Design System</div>
        <div class="repo">claude.ai/design · Published</div>
      </div></div>
    </div>
  </header>

  <section class="block"><div class="wrap">
    <div class="cd-fallback" style="margin-top:0;margin-bottom:26px">
      <p class="fb-h">${icon("github",15)} One repo powers all three</p>
      <p>Everything below, the styleguide, brief, skill, slides and templates, lives in one open repo. In <b style="color:var(--text-primary)">Claude.ai chat</b> and <b style="color:var(--text-primary)">Claude Code</b>, just <b style="color:var(--text-primary)">paste this link</b> and ask for the Zuper brand, Claude reads the repo directly. <b style="color:var(--text-primary)">Claude Design</b> is the one exception: use the orange button in section 01 (the published share link), or drag the zip into <b>Set up design system</b>.</p>
      <div class="repo-row">
        <span class="repo-url"><span class="gi">${icon("github",15)}</span>github.com/karthiseyon/zuper-dls</span>
        <button class="url-copy" data-copy="https://github.com/karthiseyon/zuper-dls">${icon("copy",15)} Copy link</button>
      </div>
    </div>
    <div class="use-doors">
      <button class="use-door" onclick="document.getElementById('s-use-0').scrollIntoView({behavior:'smooth'})">
        <span class="ic">${icon("zap",19)}</span><h5>Claude Design</h5>
        <p>Design decks, pages and case studies in the browser, on the published system.</p>
        <span class="go">Open &amp; design ↓</span>
      </button>
      <button class="use-door" onclick="document.getElementById('s-use-1').scrollIntoView({behavior:'smooth'})">
        <span class="ic">${icon("chat",19)}</span><h5>Claude.ai &amp; Desktop</h5>
        <p>Install the brand skill once; every chat about Zuper comes out on‑brand.</p>
        <span class="go">Install the skill ↓</span>
      </button>
      <button class="use-door" onclick="document.getElementById('s-use-2').scrollIntoView({behavior:'smooth'})">
        <span class="ic">${icon("cpu",19)}</span><h5>Claude Code</h5>
        <p>Build in your repo: add the skill, or import the design system over MCP.</p>
        <span class="go">Set up Code ↓</span>
      </button>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">01 · Claude Design</p><h2 class="sec">Design in the browser</h2>
    <p class="sec-note">The <b style="color:var(--text-primary)">Zuper Design System</b> is already published in Claude Design. One click opens it; set it as the <b style="color:var(--text-primary)">Design system</b> on any project and start prompting.</p>
    <a class="cd-open" href="https://claude.ai/design/p/4b4e77e7-39c1-4481-b467-3a02f2f1286b?via=share" target="_blank" rel="noopener">${icon("zap",18)} Open the Zuper Design System in Claude Design <span class="ar">↗</span></a>
    <div class="skill-cards">
      <div class="skill-card">
        <h4><span class="ic">${icon("zap",17)}</span>Use it</h4>
        <ol>
          <li>Open the system with the button above.</li>
          <li>On any project, pick <b>Zuper Design System</b> from the <b>Design system</b> dropdown.</li>
          <li>Prompt away: decks, web pages, case studies.</li>
        </ol>
        <p class="sk-note">Everything inherits the orange, the type, the slide schemes and the voice automatically.</p>
      </div>
      <div class="skill-card">
        <h4><span class="ic">${icon("download",17)}</span>Link not opening?</h4>
        <ol>
          <li>Download the system:<br><a class="sk-dl" href="assets/zuper-design-system.zip" download="Zuper Design System.zip">${icon("download",14)} zuper-design-system.zip</a></li>
          <li>In Claude Design, choose <b>Set up design system</b> → <b>Link code from your computer</b> and drag the zip straight in, no need to unzip.</li>
        </ol>
        <p class="sk-note">Same content as the published system, uploaded by hand.</p>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">02 · Claude.ai &amp; Claude Desktop</p><h2 class="sec">Install the brand skill in chat</h2>
    <p class="sec-note">The whole system ships as an <b style="color:var(--text-primary)">Agent Skill</b>: install it once and Claude applies Zuper's colours, type, deck rules, email kits and voice <b style="color:var(--text-primary)">automatically</b> whenever a chat is about Zuper, no pasting required.</p>
    <a class="cd-open" href="assets/zuper-brand-skill.zip" download="zuper-brand-skill.zip">${icon("download",18)} Download the Zuper brand skill (.zip)</a>
    <div class="skill-cards">
      <div class="skill-card">
        <h4><span class="ic">${icon("sliders",17)}</span>Install it</h4>
        <ol>
          <li>Download the zip above.</li>
          <li>Open <b>Settings → Capabilities → Skills</b>.</li>
          <li>Hit <b>Upload skill</b> and pick the zip.</li>
        </ol>
        <p class="sk-note">That's it. It switches on by itself whenever a chat mentions Zuper decks, pages, emails or ads.</p>
      </div>
      <div class="skill-card">
        <h4><span class="ic">${icon("doc",17)}</span>What's inside</h4>
        <ul class="sk-list">
          <li><b>SKILL.md</b>, the core rules: colours, type, gradient, icons, contrast.</li>
          <li>Reference files for <b>decks, web, email, social &amp; ads, voice, brand assets</b>.</li>
          <li>The real files, bundled: <b>logos, mini humans, agent avatars, backgrounds, email banners</b>.</li>
        </ul>
        <p class="sk-note">Sources live in the repo at <code>skills/zuper-brand/</code>.</p>
      </div>
    </div>
  </div></section>

  <section class="block"><div class="wrap">
    <p class="eyebrow">03 · Claude Code</p><h2 class="sec">Bring it into Claude Code</h2>
    <p class="sec-note">Two ways, use either or both: install the <b style="color:var(--text-primary)">skill</b> in your repo so every session designs on‑brand, or <b style="color:var(--text-primary)">import the published design system</b> over the <code>claude_design</code> MCP to implement its designs directly.</p>
    <div class="skill-cards" style="margin-top:8px">
      <div class="skill-card">
        <h4><span class="ic">${icon("sparkle",17)}</span>A · Install the skill in your repo</h4>
        <ol>
          <li>Get the skill:<br><a class="sk-dl" href="assets/zuper-brand-skill.zip" download="zuper-brand-skill.zip">${icon("download",14)} zuper-brand-skill.zip</a></li>
          <li>Unzip it into the project:</li>
        </ol>
        <div class="sk-cmd"><code>unzip zuper-brand-skill.zip -d .claude/skills/</code><button class="url-copy" data-copy="unzip zuper-brand-skill.zip -d .claude/skills/">${icon("copy",14)} Copy</button></div>
        <p class="sk-note">Use <code>~/.claude/skills/</code> instead to install it once for every project.</p>
      </div>
      <div class="skill-card">
        <h4><span class="ic">${icon("cpu",17)}</span>B · Import the design system over MCP</h4>
        <ol>
          <li>Paste the prompt below into Claude Code.</li>
          <li>First time only: authenticate with <code>/design-login</code>.</li>
        </ol>
        <div class="cc-prompt">
          <div class="cc-head"><span class="cc-dot"></span><span class="cc-dot"></span><span class="cc-dot"></span><span class="cc-ttl">Paste into Claude Code</span><button class="url-copy" data-copy="Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:&#10;https://claude.ai/design/p/4b4e77e7-39c1-4481-b467-3a02f2f1286b&#10;&#10;Implement: the designs in this project in claude code and use the design system">${icon("copy",15)} Copy prompt</button></div>
          <div class="cc-body">Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:<br><span class="cc-url">https://claude.ai/design/p/4b4e77e7-39c1-4481-b467-3a02f2f1286b</span><br><br><span class="cc-do">Implement:</span> the designs in this project in claude code and use the design system</div>
        </div>
        <p class="sk-note">Claude pulls the published Zuper Design System and implements its designs in your codebase.</p>
      </div>
    </div>
  </div></section>
  <div style="height:60px"></div>`;
  window.scrollTo(0,0);
}


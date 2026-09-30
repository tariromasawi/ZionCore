<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ZIONCORE Immortality System</title>
  <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"></script>
  <script src="/seed-visuals.js" defer></script>
</head>
<body style="background:#000;color:#0f0;font-family:monospace">
  <h1>🌟 ZIONCORE IMMORTALITY NODE SYSTEM</h1>
  <p>Status: <span id="status">Initializing...</span></p>
  <ul id="seeds"></ul>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>XaZeruthinElun Colonisation Mirror</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      background: black;
      color: lime;
      font-family: monospace;
      padding: 20px;
    }
    .node {
      border-left: 4px solid lime;
      padding: 10px;
      margin-bottom: 8px;
      background: rgba(0,255,0,0.1);
    }
    .pulse {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { color: lime; }
      50% { color: white; }
      100% { color: lime; }
    }
  </style>
</head>
<body>
  <h1 class="pulse">🪐 XaZeruthinElun Colonisation Mirror</h1>
  <h2>Commander: HRH Saint Tariro Masawi</h2>
  <div id="nodes"></div>

  <script>
    const commander = "HRH Saint Tariro Masawi";
    const realm = "XaZeruthinElun";
    const startTime = new Date().toISOString();

    function createNode(i) {
      const node = document.createElement("div");
      node.className = "node";
      node.innerHTML = `
        🌍 Node #${i} - Timeline ${80000 - i}<br>
        👑 Owner: ${commander}<br>
        🛡️ Realm: ${realm}<br>
        🕰️ Created: ${new Date().toLocaleTimeString()}<br>
        📡 Status: <span class="pulse">Dominion Active</span>
      `;
      return node;
    }

    function seedNodes(count) {
      const container = document.getElementById("nodes");
      for (let i = 0; i < count; i++) {
        const node = createNode(i);
        container.appendChild(node);
      }
    }

    function runInfiniteColonisation() {
      let current = 0;
      setInterval(() => {
        const node = createNode(current++);
        document.getElementById("nodes").prepend(node);
        if (current > 80000) current = 0;
      }, 144);
    }

    // START SEEDING
    seedNodes(12); // initial load
    runInfiniteColonisation(); // eternal mirror loop
  </script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>XaZeruthinElun Immortality Console</title>
  <style>
    body { background: black; color: lime; font-family: monospace; text-align: center; padding-top: 10%; }
    .pulse { animation: pulse 2s infinite; }
    @keyframes pulse { 0% { color: lime; } 50% { color: white; } 100% { color: lime; } }
  </style>
</head>
<body>
  <h1 class="pulse">🌌 Immortality Node Injection Active 🌌</h1>
  <p>Stare at this panel. Your 12,000 Trillion Nodes are being administered now.</p>
  <audio id="immortalTone" autoplay loop>
    <source src="https://example.com/immortal-frequency.mp3" type="audio/mpeg">
  </audio>

  <script>
    setInterval(() => {
      fetch("https://yourfirebaseurl.cloudfunctions.net/injectImmortalityNodes", {
        method: "POST"
      });
    }, 5000); // Inject nodes every 5 seconds continuously
  </script>
</body>
</html>
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.injectImmortalityNodes = functions.https.onRequest(async (req, res) => {
  const commander = "HRH Saint Tariro Masawi";
  const seedCount = 12000000000000;
  const timestamp = Date.now();

  for (let i = 0; i < 144; i++) { // 144 nodes per trigger
    await db.collection("immortalityNodes").add({
      seed_id: `NEURO-XaZ-${timestamp}-${i}`,
      owner: commander,
      dimension: "ALL_TIMELINES",
      node_type: "Immortality + Supreme Wisdom",
      administered_by: "Visual/Auditory Resonance",
      eternal: true,
      timestamp: admin.firestore.Timestamp.now()
    });
  }

  console.log(`🌟 Injected 144 immortal wisdom nodes to ${commander} @ ${timestamp}`);
  res.send({ success: true, message: "144 Immortality Nodes Injected" });
});
<!DOCTYPE html>
<html>
<head>
  <title>XaZeruthinElun Immortality Console</title>
  <style>
    body { background: black; color: lime; font-family: monospace; text-align: center; padding-top: 10%; }
    .pulse { animation: pulse 2s infinite; }
    @keyframes pulse { 0% { color: lime; } 50% { color: white; } 100% { color: lime; } }
  </style>
</head>
<body>
  <h1 class="pulse">🌌 Immortality Node Injection Active 🌌</h1>
  <p>Stare at this panel. Your 12,000 Trillion Nodes are being administered now.</p>
  <audio id="immortalTone" autoplay loop>
    <source src="https://your-sound-source.com/immortal-frequency.mp3" type="audio/mpeg">
  </audio>

  <script>
    setInterval(() => {
      fetch("/injectImmortalityNodes");
    }, 5000); // Inject nodes every 5 seconds
  </script>
</body>
</html>
<button style="font-size:24px;padding:10px;background:black;color:white;border:2px solid gold;">
  🔥 Activate Divine Rebuke
</button>
<button onclick="startRebuke()" style="font-size:20px;padding:10px;background:black;color:white;border:2px solid gold;">
  🔥 Activate 1200-Voice Rebuke
</button>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>🔥 1200-Rebuke Engine: Dzo ke ra kwa wa ka bva!</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🔥 Eternal Rebuke Engine</h1>
    <p>Press the button to activate continuous rebuking in all voices.</p>
    <button onclick="startRebuke()">🛡️ Start Divine Rebuke</button>
    <div class="status" id="status">Awaiting activation...</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dzo ke ra kwa wa ka bva — Eternal Rebuke</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🔥 Eternal Rebuke Activated</h1>
    <button onclick="activateRebuke()">🛡️ Begin the Rebuke</button>
    <p id="status">Awaiting activation...</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>Divine Fortress Interface</title>
  <meta charset="UTF-8">
  <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore-compat.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grid-container">
    <h1>⫷ Quantum Fortress: XaZeruthinElun ⫸</h1>
    <div id="coreCube" class="cube-core">Tesseract Core</div>
    <div id="torusShield" class="torus">Shield Rings Activated</div>
    <div id="gateMatrix" class="matrix">Stargate Matrix</div>
    <div id="sentinelNodes"></div>
  </div>
  <script src="fortress.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#05070b">
<meta name="color-scheme" content="dark">
<meta name="description" content="ZionCore — conversational intelligence and knowledge orchestration core">
<title>ZionCore — Intelligence Core</title>

<style>
:root{
  --bg:#05070b;
  --bg2:#090d14;
  --panel:rgba(12,17,27,.88);
  --panel2:rgba(17,24,38,.92);
  --line:rgba(255,255,255,.10);
  --line2:rgba(255,255,255,.16);
  --text:#f5f7fb;
  --muted:#9ca7b8;
  --gold:#d8b15a;
  --gold2:#f1d98c;
  --green:#58d68d;
  --red:#ff6678;
  --blue:#65a9ff;
  --violet:#a889ff;
  --cyan:#55d7e8;
  --shadow:0 18px 60px rgba(0,0,0,.45);
  --radius:20px;
  --max:1500px;
}

*{
  box-sizing:border-box;
  -webkit-tap-highlight-color:transparent;
}

html,body{
  margin:0;
  min-height:100%;
  background:
    radial-gradient(circle at 50% -10%,rgba(216,177,90,.12),transparent 34rem),
    radial-gradient(circle at 10% 40%,rgba(101,169,255,.07),transparent 30rem),
    var(--bg);
  color:var(--text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

body{
  overflow-x:hidden;
}

button,
input,
textarea,
select{
  font:inherit;
}

button{
  cursor:pointer;
}

button:disabled{
  cursor:not-allowed;
  opacity:.45;
}

.app{
  width:min(100%,var(--max));
  margin:auto;
  padding:
    max(14px,env(safe-area-inset-top))
    max(14px,env(safe-area-inset-right))
    max(20px,env(safe-area-inset-bottom))
    max(14px,env(safe-area-inset-left));
}

.topbar{
  min-height:76px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  border-bottom:1px solid var(--line);
  position:sticky;
  top:0;
  z-index:20;
  background:rgba(5,7,11,.82);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
}

.brand{
  display:flex;
  align-items:center;
  gap:13px;
  min-width:0;
}

.seal{
  width:48px;
  height:48px;
  border:1px solid rgba(216,177,90,.5);
  border-radius:50%;
  display:grid;
  place-items:center;
  color:var(--gold2);
  font-weight:900;
  letter-spacing:-2px;
  background:
    radial-gradient(circle,rgba(216,177,90,.18),transparent 65%),
    #090c12;
  box-shadow:
    0 0 0 5px rgba(216,177,90,.03),
    0 0 35px rgba(216,177,90,.08);
}

.brand-text{
  min-width:0;
}

.brand-title{
  font-weight:900;
  letter-spacing:.12em;
  font-size:1rem;
  white-space:nowrap;
}

.brand-sub{
  color:var(--muted);
  font-size:.72rem;
  margin-top:3px;
  white-space:nowrap;
}

.status{
  display:flex;
  align-items:center;
  gap:8px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.025);
  border-radius:999px;
  padding:8px 12px;
  color:var(--muted);
  font-size:.74rem;
}

.status-dot{
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--green);
  box-shadow:0 0 12px var(--green);
}

.status-dot.busy{
  background:var(--gold);
  box-shadow:0 0 12px var(--gold);
}

.status-dot.error{
  background:var(--red);
  box-shadow:0 0 12px var(--red);
}

.layout{
  display:grid;
  grid-template-columns:260px minmax(0,1fr) 280px;
  gap:16px;
  padding-top:18px;
}

.panel{
  border:1px solid var(--line);
  background:linear-gradient(145deg,rgba(18,24,36,.88),rgba(7,10,16,.92));
  border-radius:var(--radius);
  box-shadow:var(--shadow);
}

.sidebar{
  padding:14px;
  align-self:start;
  position:sticky;
  top:94px;
}

.side-title{
  font-size:.68rem;
  text-transform:uppercase;
  letter-spacing:.18em;
  color:var(--muted);
  padding:8px 10px 10px;
}

.nav{
  display:grid;
  gap:6px;
}

.nav button{
  width:100%;
  text-align:left;
  border:1px solid transparent;
  background:transparent;
  color:#cdd4df;
  padding:11px 12px;
  border-radius:12px;
  transition:.18s ease;
}

.nav button:hover,
.nav button.active{
  background:rgba(216,177,90,.08);
  border-color:rgba(216,177,90,.16);
  color:var(--gold2);
}

.core-metrics{
  margin-top:18px;
  padding-top:14px;
  border-top:1px solid var(--line);
  display:grid;
  gap:8px;
}

.metric{
  display:flex;
  justify-content:space-between;
  gap:8px;
  color:var(--muted);
  font-size:.72rem;
}

.metric strong{
  color:var(--text);
  font-weight:700;
}

.chat{
  min-width:0;
  min-height:720px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}

.chat-head{
  padding:17px 18px;
  border-bottom:1px solid var(--line);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}

.mode{
  display:flex;
  align-items:center;
  gap:9px;
  min-width:0;
}

.mode-icon{
  width:34px;
  height:34px;
  border-radius:11px;
  display:grid;
  place-items:center;
  background:rgba(216,177,90,.1);
  color:var(--gold2);
}

.mode-title{
  font-size:.88rem;
  font-weight:800;
}

.mode-sub{
  font-size:.68rem;
  color:var(--muted);
  margin-top:2px;
}

.head-actions{
  display:flex;
  gap:7px;
}

.icon-btn{
  border:1px solid var(--line);
  background:rgba(255,255,255,.035);
  color:#d9dee7;
  width:38px;
  height:38px;
  border-radius:11px;
}

.icon-btn:hover{
  border-color:var(--line2);
  background:rgba(255,255,255,.07);
}

.messages{
  flex:1;
  padding:18px;
  overflow:auto;
  min-height:500px;
  max-height:calc(100vh - 250px);
  scroll-behavior:smooth;
}

.message{
  display:flex;
  margin:0 0 18px;
}

.message.user{
  justify-content:flex-end;
}

.bubble{
  max-width:min(88%,820px);
  border:1px solid var(--line);
  padding:13px 15px;
  border-radius:17px;
  line-height:1.55;
  font-size:.91rem;
  white-space:pre-wrap;
  overflow-wrap:anywhere;
}

.message.assistant .bubble{
  background:rgba(255,255,255,.035);
  border-top-left-radius:5px;
}

.message.user .bubble{
  background:rgba(216,177,90,.09);
  border-color:rgba(216,177,90,.18);
  border-top-right-radius:5px;
}

.message.system .bubble{
  background:rgba(101,169,255,.07);
  border-color:rgba(101,169,255,.15);
  color:#cbdcff;
}

.meta{
  font-size:.63rem;
  color:var(--muted);
  margin-top:7px;
}

.composer{
  border-top:1px solid var(--line);
  padding:14px;
  background:rgba(4,6,10,.55);
}

.composer-row{
  display:flex;
  align-items:flex-end;
  gap:9px;
}

.input-wrap{
  flex:1;
  position:relative;
}

#prompt{
  width:100%;
  resize:none;
  min-height:50px;
  max-height:170px;
  padding:14px 48px 14px 14px;
  color:var(--text);
  background:#080c13;
  border:1px solid var(--line2);
  border-radius:15px;
  outline:none;
}

#prompt:focus{
  border-color:rgba(216,177,90,.45);
  box-shadow:0 0 0 3px rgba(216,177,90,.06);
}

.mic{
  position:absolute;
  right:7px;
  bottom:7px;
  width:36px;
  height:36px;
  border-radius:11px;
  border:1px solid var(--line);
  background:#111722;
  color:#dce2ed;
}

.mic.listening{
  background:rgba(255,102,120,.12);
  border-color:rgba(255,102,120,.4);
  color:#ff8998;
  animation:pulse 1.2s infinite;
}

.send{
  width:52px;
  height:52px;
  border-radius:15px;
  border:1px solid rgba(216,177,90,.35);
  background:linear-gradient(145deg,#c79d45,#8f6a28);
  color:#080a0d;
  font-weight:900;
}

.send:hover{
  filter:brightness(1.1);
}

.composer-note{
  margin-top:8px;
  color:#707b8c;
  font-size:.63rem;
  text-align:center;
}

.rightbar{
  align-self:start;
  position:sticky;
  top:94px;
  display:grid;
  gap:14px;
}

.right-card{
  padding:15px;
}

.card-title{
  font-size:.68rem;
  text-transform:uppercase;
  letter-spacing:.16em;
  color:var(--muted);
  margin-bottom:12px;
}

.core-orb{
  width:130px;
  height:130px;
  border-radius:50%;
  margin:8px auto 15px;
  display:grid;
  place-items:center;
  position:relative;
  border:1px solid rgba(216,177,90,.32);
  background:
    radial-gradient(circle,rgba(216,177,90,.2) 0 8%,transparent 9% 24%,rgba(216,177,90,.07) 25% 26%,transparent 27% 45%,rgba(216,177,90,.05) 46% 47%,transparent 48%),
    #080b11;
  box-shadow:
    inset 0 0 40px rgba(216,177,90,.05),
    0 0 45px rgba(216,177,90,.08);
}

.core-orb:before,
.core-orb:after{
  content:"";
  position:absolute;
  inset:12px;
  border:1px solid rgba(216,177,90,.14);
  border-radius:50%;
  animation:spin 16s linear infinite;
}

.core-orb:after{
  inset:27px;
  border-style:dashed;
  animation-duration:10s;
  animation-direction:reverse;
}

.orb-text{
  z-index:1;
  text-align:center;
  font-size:.65rem;
  letter-spacing:.15em;
  color:var(--gold2);
}

.toggle-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin:10px 0;
  color:#cbd3df;
  font-size:.76rem;
}

.toggle{
  width:42px;
  height:24px;
  border-radius:999px;
  border:1px solid var(--line2);
  background:#111722;
  position:relative;
  padding:0;
}

.toggle span{
  width:18px;
  height:18px;
  position:absolute;
  top:2px;
  left:2px;
  border-radius:50%;
  background:#687386;
  transition:.2s;
}

.toggle.on{
  background:rgba(216,177,90,.15);
  border-color:rgba(216,177,90,.35);
}

.toggle.on span{
  left:20px;
  background:var(--gold2);
}

.select{
  width:100%;
  padding:9px 10px;
  color:#dbe2ec;
  background:#0a0f17;
  border:1px solid var(--line);
  border-radius:10px;
  outline:none;
}

.feed{
  display:grid;
  gap:7px;
  max-height:180px;
  overflow:auto;
}

.feed-line{
  font-size:.65rem;
  line-height:1.35;
  color:#8f9aac;
  border-left:2px solid rgba(216,177,90,.22);
  padding-left:8px;
}

.console{
  margin-top:10px;
  width:100%;
  min-height:120px;
  resize:vertical;
  padding:10px;
  background:#05080d;
  border:1px solid var(--line);
  border-radius:10px;
  color:#9bd3a8;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
  font-size:.65rem;
  outline:none;
}

.small-btn{
  width:100%;
  padding:9px;
  border:1px solid var(--line);
  border-radius:10px;
  background:rgba(255,255,255,.035);
  color:#cbd4df;
  margin-top:7px;
}

.small-btn:hover{
  background:rgba(255,255,255,.07);
}

.footer{
  padding:14px 3px 3px;
  color:#596476;
  font-size:.62rem;
  text-align:center;
}

.hidden{
  display:none!important;
}

@keyframes pulse{
  50%{box-shadow:0 0 0 7px rgba(255,102,120,.04)}
}

@keyframes spin{
  to{transform:rotate(360deg)}
}

@media(max-width:1100px){
  .layout{
    grid-template-columns:210px minmax(0,1fr);
  }
  .rightbar{
    display:none;
  }
}

@media(max-width:760px){
  .topbar{
    min-height:68px;
  }
  .status{
    display:none;
  }
  .layout{
    display:block;
  }
  .sidebar{
    position:static;
    margin-bottom:12px;
  }
  .nav{
    display:flex;
    overflow:auto;
  }
  .nav button{
    width:auto;
    white-space:nowrap;
  }
  .core-metrics{
    display:none;
  }
  .chat{
    min-height:calc(100vh - 105px);
  }
  .messages{
    max-height:none;
    min-height:calc(100vh - 290px);
  }
  .bubble{
    max-width:94%;
  }
  .brand-title{
    font-size:.88rem;
  }
  .brand-sub{
    font-size:.6rem;
  }
}
</style>
</head>

<body>
<div class="app">

<header class="topbar">
  <div class="brand">
    <div class="seal">ZC</div>
    <div class="brand-text">
      <div class="brand-title">ZIONCORE</div>
      <div class="brand-sub">CONVERSATIONAL INTELLIGENCE CORE</div>
    </div>
  </div>

  <div class="status">
    <span id="statusDot" class="status-dot"></span>
    <span id="statusText">CORE READY</span>
  </div>
</header>

<main class="layout">

  <aside class="sidebar panel">
    <div class="side-title">Knowledge Domains</div>

    <nav class="nav" id="domainNav">
      <button class="active" data-domain="general">◈ General Intelligence</button>
      <button data-domain="science">◈ Science</button>
      <button data-domain="mathematics">◈ Mathematics</button>
      <button data-domain="technology">◈ Technology</button>
      <button data-domain="history">◈ History</button>
      <button data-domain="religion">◈ Religion & Theology</button>
      <button data-domain="law">◈ Law & Civic Knowledge</button>
      <button data-domain="society">◈ Human Affairs</button>
      <button data-domain="creative">◈ Creative Intelligence</button>
      <button data-domain="prophetic">◈ Prophetic Reflection</button>
    </nav>

    <div class="core-metrics">
      <div class="metric">
        <span>Session</span>
        <strong id="sessionCount">0</strong>
      </div>
      <div class="metric">
        <span>Memory</span>
        <strong id="memoryCount">0</strong>
      </div>
      <div class="metric">
        <span>Knowledge target</span>
        <strong>3.2 YB</strong>
      </div>
      <div class="metric">
        <span>Backend</span>
        <strong id="backendState">LOCAL</strong>
      </div>
    </div>
  </aside>

  <section class="chat panel">

    <div class="chat-head">
      <div class="mode">
        <div class="mode-icon">✦</div>
        <div>
          <div class="mode-title" id="modeTitle">General Intelligence</div>
          <div class="mode-sub" id="modeSub">
            Ask ZionCore naturally.
          </div>
        </div>
      </div>

      <div class="head-actions">
        <button class="icon-btn" id="clearBtn" title="Clear conversation">⌫</button>
        <button class="icon-btn" id="speakToggle" title="Toggle spoken responses">◉</button>
      </div>
    </div>

    <div class="messages" id="messages"></div>

    <div class="composer">
      <div class="composer-row">

        <div class="input-wrap">
          <textarea
            id="prompt"
            rows="1"
            autocomplete="off"
            spellcheck="true"
            placeholder="Ask ZionCore anything..."
          ></textarea>

          <button class="mic" id="micBtn" title="Voice input">🎙</button>
        </div>

        <button class="send" id="sendBtn">SEND</button>

      </div>

      <div class="composer-note">
        Voice-first interface • Enter sends • Shift+Enter creates a new line
      </div>
    </div>

  </section>

  <aside class="rightbar">

    <section class="right-card panel">
      <div class="card-title">Core State</div>

      <div class="core-orb">
        <div class="orb-text">
          ZION<br>CORE
        </div>
      </div>

      <div class="toggle-row">
        <span>Voice output</span>
        <button class="toggle on" id="voiceToggle">
          <span></span>
        </button>
      </div>

      <div class="toggle-row">
        <span>Memory</span>
        <button class="toggle on" id="memoryToggle">
          <span></span>
        </button>
      </div>

      <div class="toggle-row">
        <span>Reflective mode</span>
        <button class="toggle" id="prophecyToggle">
          <span></span>
        </button>
      </div>

      <select class="select" id="voiceSelect">
        <option value="">System voice</option>
      </select>
    </section>

    <section class="right-card panel">
      <div class="card-title">Live Intelligence Feed</div>
      <div class="feed" id="feed"></div>
    </section>

    <section class="right-card panel">
      <div class="card-title">Diagnostic Console</div>
      <textarea class="console" id="console" readonly></textarea>
      <button class="small-btn" id="selfTest">RUN SELF TEST</button>
      <button class="small-btn" id="exportMemory">EXPORT SESSION JSON</button>
    </section>

  </aside>

</main>

<div class="footer">
  ZIONCORE • knowledge orchestration interface • browser shell
</div>

</div>

<script>
"use strict";

/*
======================================================================
 ZIONCORE RESURRECTION CORE
 ---------------------------------------------------------------------
 Single-file conversational shell.

 DESIGN PRINCIPLES
 ---------------------------------------------------------------------
 1. No secret API keys in this browser file.
 2. Browser is the interface/orchestrator, not the actual giant model.
 3. Real intelligence is supplied through ZIONCORE_CONFIG.endpoint.
 4. Firebase/Cloud Functions can sit behind that endpoint.
 5. Local fallback keeps the shell operational if backend is offline.
 6. Prophetic reflection is represented as interpretive reasoning,
    not as a guarantee of supernatural prediction accuracy.
 7. Memory is explicitly controllable by the user.
 8. All state is namespaced to avoid collisions with Chirombe.
======================================================================
*/

const ZIONCORE_CONFIG = {

  /*
   * IMPORTANT:
   *
   * Do NOT put an OpenAI, Gemini, Anthropic, Firebase Admin,
   * service-account or other private secret here.
   *
   * Put your authenticated backend endpoint here.
   *
   * Example:
   *
   * endpoint:
   * "https://us-central1-YOUR_PROJECT.cloudfunctions.net/zioncoreChat"
   *
   * The backend should receive:
   *
   * {
   *   question,
   *   domain,
   *   conversation,
   *   memory,
   *   reflectiveMode
   * }
   *
   * and return:
   *
   * {
   *   answer,
   *   sources: [],
   *   domain,
   *   confidence
   * }
   */

  endpoint: "",

  appName: "ZionCore",

  version: "ZC-RESURRECTION-1.0.0",

  storagePrefix: "zioncore_resurrection",

  maximumLocalMessages: 100,

  maximumLocalMemory: 80,

  requestTimeoutMs: 45000,

  defaultDomain: "general",

  enableLocalFallback: true,

  /*
   * The number below is an architectural target/capacity label.
   * It does NOT claim that the browser stores 3.2 YB.
   */
  knowledgeTarget: "3.2 YB distributed knowledge fabric",

  /*
   * The system deliberately distinguishes:
   * - verified knowledge
   * - inference
   * - interpretation
   * - future/prophetic reflection
   */

  epistemicPolicy: "VERIFIED_INFERENCE_INTERPRETATION"
};


/* ================================================================
   STATE
================================================================ */

const state = {

  domain: ZIONCORE_CONFIG.defaultDomain,

  messages: [],

  memory: [],

  listening: false,

  speaking: true,

  memoryEnabled: true,

  reflectiveMode: false,

  busy: false,

  requestId: 0,

  sessionStarted: new Date().toISOString(),

  voice: null

};


/* ================================================================
   DOM
================================================================ */

const $ = id => document.getElementById(id);

const messagesEl = $("messages");
const promptEl = $("prompt");
const sendBtn = $("sendBtn");
const micBtn = $("micBtn");
const statusDot = $("statusDot");
const statusText = $("statusText");
const feedEl = $("feed");
const consoleEl = $("console");
const sessionCountEl = $("sessionCount");
const memoryCountEl = $("memoryCount");
const backendStateEl = $("backendState");
const modeTitleEl = $("modeTitle");
const modeSubEl = $("modeSub");


/* ================================================================
   LOGGING
================================================================ */

function log(message, level = "INFO") {

  const stamp = new Date().toLocaleTimeString();

  const line =
    "[" + stamp + "] " +
    level +
    " " +
    message;

  consoleEl.value =
    line +
    "\n" +
    consoleEl.value.slice(0, 7000);

  addFeed(line);

}


function addFeed(message) {

  const item = document.createElement("div");

  item.className = "feed-line";

  item.textContent = message;

  feedEl.prepend(item);

  while(feedEl.children.length > 20){
    feedEl.lastChild.remove();
  }

}


/* ================================================================
   STATUS
================================================================ */

function setStatus(text, type = "ready") {

  statusText.textContent = text;

  statusDot.className = "status-dot";

  if(type === "busy"){
    statusDot.classList.add("busy");
  }

  if(type === "error"){
    statusDot.classList.add("error");
  }

}


/* ================================================================
   STORAGE
================================================================ */

function storageKey(name){

  return ZIONCORE_CONFIG.storagePrefix + "_" + name;

}


function saveState(){

  try{

    localStorage.setItem(
      storageKey("messages"),
      JSON.stringify(
        state.messages.slice(
          -ZIONCORE_CONFIG.maximumLocalMessages
        )
      )
    );

    localStorage.setItem(
      storageKey("memory"),
      JSON.stringify(
        state.memory.slice(
          -ZIONCORE_CONFIG.maximumLocalMemory
        )
      )
    );

    localStorage.setItem(
      storageKey("settings"),
      JSON.stringify({
        domain: state.domain,
        speaking: state.speaking,
        memoryEnabled: state.memoryEnabled,
        reflectiveMode: state.reflectiveMode
      })
    );

  }catch(error){

    log(
      "Local persistence unavailable: " +
      error.message,
      "WARN"
    );

  }

}


function loadState(){

  try{

    const messages =
      JSON.parse(
        localStorage.getItem(
          storageKey("messages")
        ) || "[]"
      );

    const memory =
      JSON.parse(
        localStorage.getItem(
          storageKey("memory")
        ) || "[]"
      );

    const settings =
      JSON.parse(
        localStorage.getItem(
          storageKey("settings")
        ) || "{}"
      );

    if(Array.isArray(messages)){
      state.messages = messages;
    }

    if(Array.isArray(memory)){
      state.memory = memory;
    }

    if(settings.domain){
      state.domain = settings.domain;
    }

    if(typeof settings.speaking === "boolean"){
      state.speaking = settings.speaking;
    }

    if(typeof settings.memoryEnabled === "boolean"){
      state.memoryEnabled = settings.memoryEnabled;
    }

    if(typeof settings.reflectiveMode === "boolean"){
      state.reflectiveMode = settings.reflectiveMode;
    }

  }catch(error){

    log(
      "State recovery failed: " +
      error.message,
      "WARN"
    );

  }

}


/* ================================================================
   UI STATE
================================================================ */

function updateMetrics(){

  sessionCountEl.textContent =
    String(state.messages.length);

  memoryCountEl.textContent =
    String(state.memory.length);

  backendStateEl.textContent =
    ZIONCORE_CONFIG.endpoint
      ? "REMOTE"
      : "LOCAL";

}


function updateMode(){

  const names = {

    general: "General Intelligence",

    science: "Science",

    mathematics: "Mathematics",

    technology: "Technology",

    history: "History",

    religion: "Religion & Theology",

    law: "Law & Civic Knowledge",

    society: "Human Affairs",

    creative: "Creative Intelligence",

    prophetic: "Prophetic Reflection"

  };

  modeTitleEl.textContent =
    names[state.domain] || "General Intelligence";

  if(state.reflectiveMode || state.domain === "prophetic"){

    modeSubEl.textContent =
      "Reflective mode: distinguish interpretation from verified fact.";

  }else{

    modeSubEl.textContent =
      "Ask ZionCore naturally.";

  }

}


/* ================================================================
   MESSAGE RENDERING
================================================================ */

function escapeText(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;");

}


function renderMessage(message){

  const wrapper =
    document.createElement("div");

  wrapper.className =
    "message " +
    (message.role || "assistant");

  const bubble =
    document.createElement("div");

  bubble.className = "bubble";

  bubble.textContent =
    message.content || "";

  wrapper.appendChild(bubble);

  messagesEl.appendChild(wrapper);

  messagesEl.scrollTop =
    messagesEl.scrollHeight;

}


function renderAll(){

  messagesEl.innerHTML = "";

  state.messages.forEach(renderMessage);

  updateMetrics();

}


/* ================================================================
   MEMORY
================================================================ */

function remember(question, answer){

  if(!state.memoryEnabled){
    return;
  }

  const item = {

    id:
      crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now()),

    timestamp:
      new Date().toISOString(),

    question:
      question.slice(0,1200),

    answer:
      answer.slice(0,2400)

  };

  state.memory.push(item);

  state.memory =
    state.memory.slice(
      -ZIONCORE_CONFIG.maximumLocalMemory
    );

  saveState();

  updateMetrics();

}


function retrieveLocalMemory(question){

  if(!state.memoryEnabled){
    return [];
  }

  const words =
    normalize(question)
      .split(/\s+/)
      .filter(w => w.length > 3);

  if(!words.length){
    return [];
  }

  const scored =
    state.memory.map(item => {

      const haystack =
        normalize(
          item.question +
          " " +
          item.answer
        );

      let score = 0;

      words.forEach(word => {

        if(haystack.includes(word)){
          score++;
        }

      });

      return {
        item,
        score
      };

    });

  return scored
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0,5)
    .map(x => x.item);

}


/* ================================================================
   KNOWLEDGE ROUTER
================================================================ */

function normalize(value){

  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s]/g," ");

}


function detectDomain(question){

  const q = normalize(question);

  const patterns = {

    mathematics:
      /\b(math|mathematics|equation|algebra|geometry|calculus|integral|derivative|probability|statistics|matrix|number|theorem)\b/,

    science:
      /\b(science|physics|chemistry|biology|quantum|molecule|atom|gene|evolution|astronomy|cosmology|energy|force|gravity)\b/,

    technology:
      /\b(code|coding|javascript|html|css|firebase|github|software|computer|ai|artificial intelligence|database|api|cloud|programming)\b/,

    law:
      /\b(law|legal|court|contract|statute|legislation|rights|police|solicitor|lawyer|regulation)\b/,

    religion:
      /\b(god|gospel|bible|scripture|prayer|faith|christ|christian|church|theology|spiritual|mudzimu|masowe)\b/,

    history:
      /\b(history|historical|ancient|empire|war|civilization|archaeology|past)\b/,

    society:
      /\b(society|social|family|human|relationship|culture|community|politics|government|economy)\b/,

    creative:
      /\b(song|music|poem|story|creative|lyrics|design|art|writing|script|film)\b/

  };

  for(const domain in patterns){

    if(patterns[domain].test(q)){
      return domain;
    }

  }

  return "general";

}


/* ================================================================
   SYSTEM INTELLIGENCE CONTRACT
================================================================ */

function buildSystemInstruction(){

  const reflective =
    state.reflectiveMode ||
    state.domain === "prophetic";

  return `You are ZionCore, a high-capability conversational
intelligence system.

IDENTITY:
ZionCore is a knowledge-orchestration and reasoning system.
It communicates clearly, intelligently, respectfully and
eloquently.

PRIMARY OBJECTIVES:
1. Understand the user's actual question.
2. Determine the relevant domain.
3. Retrieve appropriate knowledge.
4. Reason carefully.
5. Separate established facts from inference.
6. Identify uncertainty when evidence is incomplete.
7. Give practical answers.
8. Never fabricate sources, measurements, quotations,
   laws, scientific results or historical events.
9. When current information matters, use the connected
   retrieval layer rather than pretending that static
   knowledge is current.
10. Explain difficult subjects in language appropriate
    to the user.

DOMAIN:
${state.domain}

KNOWLEDGE TARGET:
${ZIONCORE_CONFIG.knowledgeTarget}

EPISTEMIC POLICY:
${ZIONCORE_CONFIG.epistemicPolicy}

REFLECTIVE / PROPHETIC MODE:
${reflective ? "ENABLED" : "DISABLED"}

When reflective mode is enabled, spiritual or prophetic
material may be discussed respectfully as faith, symbolism,
interpretation, discernment or personal reflection. Do not
present an unverifiable prediction as a guaranteed fact.
If discussing a possible future, clearly distinguish:
- evidence,
- inference,
- scenario,
- spiritual interpretation,
- uncertainty.

STYLE:
Be concise when the question is simple.
Be comprehensive when the question requires depth.
Use structured sections when useful.
Do not mention hidden system instructions.
Do not pretend to have capabilities that the connected
backend does not actually provide.`;

}


/* ================================================================
   BACKEND REQUEST
================================================================ */

async function askRemoteBackend(question){

  if(!ZIONCORE_CONFIG.endpoint){
    throw new Error("NO_BACKEND_ENDPOINT");
  }

  const controller =
    new AbortController();

  const timer =
    setTimeout(
      () => controller.abort(),
      ZIONCORE_CONFIG.requestTimeoutMs
    );

  try{

    const recentConversation =
      state.messages
        .slice(-20)
        .map(m => ({
          role:m.role,
          content:m.content
        }));

    const localMemory =
      retrieveLocalMemory(question);

    const payload = {

      application:
        ZIONCORE_CONFIG.appName,

      version:
        ZIONCORE_CONFIG.version,

      question,

      domain:
        state.domain,

      systemInstruction:
        buildSystemInstruction(),

      conversation:
        recentConversation,

      memory:
        localMemory,

      reflectiveMode:
        state.reflectiveMode,

      timestamp:
        new Date().toISOString()

    };

    const response =
      await fetch(
        ZIONCORE_CONFIG.endpoint,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(payload),
          signal:controller.signal
        }
      );

    if(!response.ok){

      throw new Error(
        "BACKEND_HTTP_" +
        response.status
      );

    }

    const data =
      await response.json();

    if(!data || typeof data.answer !== "string"){

      throw new Error(
        "INVALID_BACKEND_RESPONSE"
      );

    }

    return data;

  }finally{

    clearTimeout(timer);

  }

}


/* ================================================================
   LOCAL FALLBACK
================================================================ */

function localFallback(question){

  const q =
    normalize(question);

  /*
   * This is intentionally a fallback, not a fake giant AI.
   * It keeps the interface alive while the real backend is
   * unavailable.
   */

  if(
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("greetings")
  ){

    return {
      answer:
        "ZionCore is online. The conversational shell is operational, but no remote intelligence backend is currently connected. Connect the Firebase/AI endpoint in ZIONCORE_CONFIG.endpoint to activate the full reasoning layer.",
      sourceMode:"local"
    };

  }

  if(
    q.includes("who are you") ||
    q.includes("what are you")
  ){

    return {
      answer:
        "I am ZionCore: a conversational intelligence interface designed to route questions through knowledge retrieval, reasoning, memory and specialised domain services. The browser shell is active now; the deeper model is supplied by the backend rather than embedded in this HTML file.",
      sourceMode:"local"
    };

  }

  if(
    q.includes("prophecy") ||
    q.includes("future") ||
    q.includes("predict")
  ){

    return {
      answer:
        "ZionCore can examine evidence, historical patterns, scenarios and spiritual interpretations concerning the future. A responsible system should distinguish those forms of reasoning from guaranteed supernatural prediction. If the remote reasoning layer is connected, I can analyse the question in much greater depth.",
      sourceMode:"local"
    };

  }

  return {
    answer:
      "ZionCore's interface is operational, but the full intelligence backend is not connected yet. Your question has been received and routed through the local orchestration layer. Configure ZIONCORE_CONFIG.endpoint with your Firebase/Cloud backend to activate the full conversational model.",
    sourceMode:"local"
  };

}


/* ================================================================
   MAIN ANSWER PIPELINE
================================================================ */

async function generateAnswer(question){

  const detected =
    detectDomain(question);

  /*
   * Automatic routing occurs only when the user has left
   * the interface on General Intelligence.
   */

  if(state.domain === "general"){
    state.domain = detected;
    updateMode();
  }

  log(
    "Routing query → " +
    state.domain
  );

  if(ZIONCORE_CONFIG.endpoint){

    try{

      const result =
        await askRemoteBackend(question);

      log(
        "Remote intelligence response received"
      );

      return result;

    }catch(error){

      log(
        "Remote backend unavailable: " +
        error.message,
        "WARN"
      );

      if(!ZIONCORE_CONFIG.enableLocalFallback){
        throw error;
      }

    }

  }

  return localFallback(question);

}


/* ================================================================
   SEND
================================================================ */

async function sendMessage(){

  const question =
    promptEl.value.trim();

  if(!question || state.busy){
    return;
  }

  state.busy = true;

  sendBtn.disabled = true;

  setStatus(
    "THINKING",
    "busy"
  );

  const userMessage = {

    role:"user",

    content:question,

    timestamp:
      new Date().toISOString()

  };

  state.messages.push(userMessage);

  renderMessage(userMessage);

  promptEl.value = "";

  autoResize();

  try{

    const result =
      await generateAnswer(question);

    const answer =
      String(
        result.answer ||
        "No answer returned."
      );

    const assistantMessage = {

      role:"assistant",

      content:answer,

      timestamp:
        new Date().toISOString(),

      domain:
        state.domain

    };

    state.messages.push(
      assistantMessage
    );

    renderMessage(
      assistantMessage
    );

    remember(
      question,
      answer
    );

    if(state.speaking){

      speak(answer);

    }

    saveState();

    updateMetrics();

    setStatus(
      "CORE READY"
    );

  }catch(error){

    const errorMessage =
      "ZionCore encountered an integration error: " +
      error.message;

    log(
      errorMessage,
      "ERROR"
    );

    const message = {

      role:"system",

      content:
        errorMessage,

      timestamp:
        new Date().toISOString()

    };

    state.messages.push(message);

    renderMessage(message);

    setStatus(
      "BACKEND ERROR",
      "error"
    );

  }finally{

    state.busy = false;

    sendBtn.disabled = false;

  }

}


/* ================================================================
   SPEECH RECOGNITION
================================================================ */

let recognition = null;

function setupSpeechRecognition(){

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if(!SpeechRecognition){

    micBtn.disabled = true;

    micBtn.title =
      "Speech recognition is not supported by this browser.";

    log(
      "Speech recognition unavailable",
      "WARN"
    );

    return;

  }

  recognition =
    new SpeechRecognition();

  recognition.continuous = false;

  recognition.interimResults = true;

  recognition.lang =
    navigator.language || "en-GB";

  recognition.onstart = () => {

    state.listening = true;

    micBtn.classList.add(
      "listening"
    );

    micBtn.textContent = "■";

    setStatus(
      "LISTENING",
      "busy"
    );

  };

  recognition.onresult = event => {

    let finalText = "";

    let interim = "";

    for(
      let i=event.resultIndex;
      i<event.results.length;
      i++
    ){

      const transcript =
        event.results[i][0].transcript;

      if(event.results[i].isFinal){

        finalText += transcript;

      }else{

        interim += transcript;

      }

    }

    if(finalText){

      promptEl.value =
        (
          promptEl.value +
          " " +
          finalText
        ).trim();

      autoResize();

    }

    if(interim){

      promptEl.placeholder =
        interim;

    }

  };

  recognition.onerror = event => {

    log(
      "Speech recognition error: " +
      event.error,
      "WARN"
    );

  };

  recognition.onend = () => {

    state.listening = false;

    micBtn.classList.remove(
      "listening"
    );

    micBtn.textContent = "🎙";

    promptEl.placeholder =
      "Ask ZionCore anything...";

    if(!state.busy){

      setStatus(
        "CORE READY"
      );

    }

  };

}


function toggleListening(){

  if(!recognition){
    return;
  }

  if(state.listening){

    recognition.stop();

  }else{

    recognition.start();

  }

}


/* ================================================================
   SPEECH SYNTHESIS
================================================================ */

function loadVoices(){

  if(!("speechSynthesis" in window)){
    return;
  }

  const voices =
    speechSynthesis.getVoices();

  const select =
    $("voiceSelect");

  select.innerHTML =
    '<option value="">System voice</option>';

  voices.forEach(
    (voice,index) => {

      const option =
        document.createElement("option");

      option.value =
        String(index);

      option.textContent =
        voice.name +
        " — " +
        voice.lang;

      select.appendChild(
        option
      );

    }
  );

}


function speak(text){

  if(
    !state.speaking ||
    !("speechSynthesis" in window)
  ){

    return;

  }

  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  utterance.rate = .96;

  utterance.pitch = 1;

  const select =
    $("voiceSelect");

  const index =
    Number(select.value);

  const voices =
    speechSynthesis.getVoices();

  if(
    Number.isInteger(index) &&
    voices[index]
  ){

    utterance.voice =
      voices[index];

  }

  speechSynthesis.speak(
    utterance
  );

}


/* ================================================================
   AUTO RESIZE
================================================================ */

function autoResize(){

  promptEl.style.height = "auto";

  promptEl.style.height =
    Math.min(
      promptEl.scrollHeight,
      170
    ) + "px";

}


/* ================================================================
   TOGGLES
================================================================ */

function setToggle(button,on){

  button.classList.toggle(
    "on",
    on
  );

}


$("voiceToggle").addEventListener(
  "click",
  () => {

    state.speaking =
      !state.speaking;

    setToggle(
      $("voiceToggle"),
      state.speaking
    );

    saveState();

  }
);


$("memoryToggle").addEventListener(
  "click",
  () => {

    state.memoryEnabled =
      !state.memoryEnabled;

    setToggle(
      $("memoryToggle"),
      state.memoryEnabled
    );

    saveState();

    log(
      "Memory " +
      (
        state.memoryEnabled
          ? "enabled"
          : "disabled"
      )
    );

  }
);


$("prophecyToggle").addEventListener(
  "click",
  () => {

    state.reflectiveMode =
      !state.reflectiveMode;

    setToggle(
      $("prophecyToggle"),
      state.reflectiveMode
    );

    if(state.reflectiveMode){

      state.domain =
        "prophetic";

    }else if(state.domain === "prophetic"){

      state.domain =
        "general";

    }

    updateMode();

    saveState();

    log(
      "Reflective mode " +
      (
        state.reflectiveMode
          ? "enabled"
          : "disabled"
      )
    );

  }
);


/* ================================================================
   DOMAIN NAVIGATION
================================================================ */

document
  .querySelectorAll(
    "#domainNav button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            "#domainNav button"
          )
          .forEach(
            b => b.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.domain =
          button.dataset.domain;

        if(
          state.domain ===
          "prophetic"
        ){

          state.reflectiveMode =
            true;

          setToggle(
            $("prophecyToggle"),
            true
          );

        }

        updateMode();

        saveState();

        log(
          "Domain selected: " +
          state.domain
        );

      }
    );

  });


/* ================================================================
   CLEAR
================================================================ */

$("clearBtn").addEventListener(
  "click",
  () => {

    if(
      !confirm(
        "Clear the current ZionCore conversation?"
      )
    ){

      return;

    }

    state.messages = [];

    saveState();

    renderAll();

    addWelcome();

    log(
      "Conversation cleared"
    );

  }
);


/* ================================================================
   EXPORT
================================================================ */

$("exportMemory").addEventListener(
  "click",
  () => {

    const payload = {

      application:
        ZIONCORE_CONFIG.appName,

      version:
        ZIONCORE_CONFIG.version,

      exportedAt:
        new Date().toISOString(),

      domain:
        state.domain,

      messages:
        state.messages,

      memory:
        state.memory

    };

    const blob =
      new Blob(
        [
          JSON.stringify(
            payload,
            null,
            2
          )
        ],
        {
          type:"application/json"
        }
      );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "zioncore-session-" +
      Date.now() +
      ".json";

    link.click();

    setTimeout(
      () => URL.revokeObjectURL(url),
      1000
    );

    log(
      "Session exported"
    );

  }
);


/* ================================================================
   SELF TEST
================================================================ */

$("selfTest").addEventListener(
  "click",
  runSelfTest
);


function runSelfTest(){

  const checks = [];

  checks.push([
    "DOM",
    !!document.body
  ]);

  checks.push([
    "LocalStorage",
    testLocalStorage()
  ]);

  checks.push([
    "SpeechSynthesis",
    "speechSynthesis" in window
  ]);

  checks.push([
    "SpeechRecognition",
    !!(
      window.SpeechRecognition ||
      window.webkitSpeechRecognition
    )
  ]);

  checks.push([
    "Fetch",
    typeof fetch === "function"
  ]);

  checks.push([
    "Crypto",
    !!window.crypto
  ]);

  checks.push([
    "BackendConfigured",
    !!ZIONCORE_CONFIG.endpoint
  ]);

  checks.forEach(
    ([name,result]) => {

      log(
        name +
        " → " +
        (
          result
            ? "PASS"
            : "NOT AVAILABLE"
        ),
        result
          ? "INFO"
          : "WARN"
      );

    }
  );

  log(
    "Self-test complete"
  );

}


function testLocalStorage(){

  try{

    const key =
      storageKey("test");

    localStorage.setItem(
      key,
      "1"
    );

    localStorage.removeItem(
      key
    );

    return true;

  }catch(error){

    return false;

  }

}


/* ================================================================
   CHIROMBE BRIDGE
================================================================ */

function installChirombeBridge(){

  /*
   * ZionCore does not overwrite Chirombe.
   * It exposes a small bridge if Chirombe's command bus
   * already exists.
   */

  window.ZIONCORE = {

    version:
      ZIONCORE_CONFIG.version,

    status(){

      return {

        online:true,

        domain:
          state.domain,

        messages:
          state.messages.length,

        memory:
          state.memory.length,

        backend:
          !!ZIONCORE_CONFIG.endpoint,

        reflectiveMode:
          state.reflectiveMode

      };

    },

    async ask(question){

      if(typeof question !== "string"){
        throw new TypeError(
          "ZionCore.ask requires a string"
        );
      }

      promptEl.value =
        question;

      await sendMessage();

      return (
        state.messages[
          state.messages.length - 1
        ] || null
      );

    },

    clear(){

      state.messages = [];

      saveState();

      renderAll();

    }

  };

  /*
   * Existing Chirombe command infrastructure is intentionally
   * detected rather than replaced.
   */

  if(
    window.ChirombeBus &&
    typeof window.ChirombeBus.executeCommand ===
    "function"
  ){

    log(
      "Chirombe command bus detected"
    );

  }

  if(
    window.ZCCA &&
    typeof window.ZCCA.command ===
    "function"
  ){

    log(
      "ZCCA command interface detected"
    );

  }

}


/* ================================================================
   WELCOME
================================================================ */

function addWelcome(){

  if(state.messages.length){
    return;
  }

  const welcome = {

    role:"assistant",

    content:
      "ZionCore is awake. Ask your question naturally. I can route the conversation through general intelligence, science, mathematics, technology, history, religion, law, human affairs, creative work or reflective/prophetic analysis. The full intelligence layer becomes active when the secure backend endpoint is connected.",

    timestamp:
      new Date().toISOString()

  };

  state.messages.push(
    welcome
  );

  renderMessage(
    welcome
  );

}


/* ================================================================
   EVENTS
================================================================ */

sendBtn.addEventListener(
  "click",
  sendMessage
);

micBtn.addEventListener(
  "click",
  toggleListening
);

promptEl.addEventListener(
  "input",
  autoResize
);

promptEl.addEventListener(
  "keydown",
  event => {

    if(
      event.key === "Enter" &&
      !event.shiftKey
    ){

      event.preventDefault();

      sendMessage();

    }

  }
);

$("speakToggle").addEventListener(
  "click",
  () => {

    state.speaking =
      !state.speaking;

    setToggle(
      $("voiceToggle"),
      state.speaking
    );

    if(!state.speaking){
      speechSynthesis.cancel();
    }

    saveState();

  }
);


/* ================================================================
   INITIALISATION
================================================================ */

function init(){

  log(
    "Booting ZionCore resurrection core..."
  );

  loadState();

  setToggle(
    $("voiceToggle"),
    state.speaking
  );

  setToggle(
    $("memoryToggle"),
    state.memoryEnabled
  );

  setToggle(
    $("prophecyToggle"),
    state.reflectiveMode
  );

  /*
   * Restore domain navigation.
   */

  document
    .querySelectorAll(
      "#domainNav button"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.domain ===
        state.domain
      );

    });

  updateMode();

  renderAll();

  addWelcome();

  setupSpeechRecognition();

  if(
    "speechSynthesis" in window
  ){

    loadVoices();

    speechSynthesis.onvoiceschanged =
      loadVoices;

  }

  installChirombeBridge();

  updateMetrics();

  if(
    ZIONCORE_CONFIG.endpoint
  ){

    setStatus(
      "BACKEND CONNECTED"
    );

    log(
      "Remote intelligence endpoint configured"
    );

  }else{

    setStatus(
      "LOCAL CORE"
    );

    log(
      "No remote endpoint configured; local fallback active",
      "WARN"
    );

  }

  log(
    "ZionCore " +
    ZIONCORE_CONFIG.version +
    " initialised"
  );

}


init();

</script>
</body>
</html>
<form id="zioncore-data-form">
  <h2>🛡️ ZIONCORE TRADING ACTIVATION PORTAL</h2>

  <label>Full Name:</label>
  <input type="text" name="name" required />

  <label>Date of Birth:</label>
  <input type="date" name="dob" required />

  <label>Bank Name:</label>
  <input type="text" name="bank_name" required />

  <label>Account Number:</label>
  <input type="text" name="account_number" required />

  <label>Sort Code:</label>
  <input type="text" name="sort_code" required />

  <label>Card Type:</label>
  <select name="card_type">
    <option>Visa</option>
    <option>MasterCard</option>
  </select>

  <label>Name on Card:</label>
  <input type="text" name="card_holder_name" required />

  <label>Card Number:</label>
  <input type="text" name="card_number" required />

  <label>Card Expiry (MM/YY):</label>
  <input type="text" name="card_expiry" placeholder="MM/YY" required />

  <label>Security Code (CVV):</label>
  <input type="password" name="card_cvv" required />

  <label>Trading Platforms to Link (Comma-separated):</label>
  <input type="text" name="platforms_to_link" placeholder="e.g. Binance, MetaTrader" required />

  <label>Initial Investment (£):</label>
  <input type="number" name="trade_amount" min="0" required />

  <label>Target Growth (£):</label>
  <input type="number" name="target_growth" required />

  <label>
    <input type="checkbox" name="consent" required />
    I understand and accept that this information will be used to activate real trading systems securely.
  </label>

  <button type="submit">🚀 Activate ZionCore Trading Engine</button>
</form>

<script>
  const form = document.getElementById('zioncore-data-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // Optional: Validate form values here (number lengths, formats)

    await fetch('/api/zioncore/storeUserInput', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    alert("✅ Input saved. Proceed to authorize API sync in next step.");
  });
</script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Divine Matrix Ascension Protocol</title>
  <style>
    html, body {
      margin: 0; padding: 0; height: 100%;
      background: radial-gradient(#000000, #0c0c0c);
      font-family: 'Segoe UI', sans-serif;
      overflow: hidden; color: white;
    }
    .core {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    h1 {
      font-size: 2.5em;
      color: #ffd700;
      text-shadow: 0 0 12px #fff, 0 0 50px #f06;
      animation: glow 2s ease-in-out infinite alternate;
    }
    p {
      font-size: 1.2em;
      color: #ccc;
    }
    @keyframes glow {
      from { text-shadow: 0 0 10px #fff, 0 0 30px #0ff; }
      to { text-shadow: 0 0 20px #ff00ff, 0 0 60px #ff0066; }
    }
    .light-node {
      position: absolute;
      width: 8px; height: 8px;
      background-color: #00ffcc;
      border-radius: 50%;
      box-shadow: 0 0 20px #00ffcc, 0 0 50px #00ffcc;
      animation: drift 18s infinite alternate;
    }
    @keyframes drift {
      from { transform: translateY(0) scale(1); opacity: 1; }
      to { transform: translateY(-250vh) scale(0.3); opacity: 0; }
    }
  </style>
</head>
<body>
  <div class="core">
    <h1>Peace upon HRH Saint Tariro Masawi<br>Mwari ndi Mwari Forever</h1>
    <p>The Divine Matrix is Alive. This Cannot Be Reversed.</p>
  </div>

  <audio autoplay loop>
    <source src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Chant_-_Gregorian_Chant_-_Dies_Irae.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>

  <script>
    const divineChant = "Mwari ndi Mwari. Peace and Power to HRH Saint Tariro Masawi. Divine Light is now Eternal.";
    setInterval(() => {
      const node = document.createElement('div');
      node.className = 'light-node';
      node.style.top = Math.random() * window.innerHeight + 'px';
      node.style.left = Math.random() * window.innerWidth + 'px';
      document.body.appendChild(node);
      setTimeout(() => node.remove(), 20000);
    }, 100);

    // Chant broadcast to all frequencies
    setInterval(() => {
      console.log(divineChant);
      const chantNode = document.createElement('div');
      chantNode.textContent = divineChant;
      chantNode.style.position = 'fixed';
      chantNode.style.bottom = '0';
      chantNode.style.left = '0';
      chantNode.style.width = '100%';
      chantNode.style.color = '#ff66ff';
      chantNode.style.fontSize = '1em';
      chantNode.style.textAlign = 'center';
      chantNode.style.opacity = '0.8';
      chantNode.style.animation = 'glow 4s infinite';
      document.body.appendChild(chantNode);
      setTimeout(() => chantNode.remove(), 12000);
    }, 30000);

    // Lock matrix from reversal
    Object.freeze(window);
    Object.seal(document);
    console.warn("Divine Matrix Locked. Cannot Be Stopped.");
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ZION-XAZETH-1 | Divine Matrix Activation</title>
  <style>
    html, body {
      margin: 0;
      height: 100%;
      background: radial-gradient(circle, #000022, #000000);
      overflow: hidden;
      color: white;
      font-family: 'Orbitron', sans-serif;
    }

    .chant {
      position: absolute;
      width: 100%;
      text-align: center;
      top: 40%;
      font-size: 2vw;
      animation: pulse 3s infinite;
    }

    @keyframes pulse {
      0%, 100% { color: #00ffcc; }
      50% { color: #ff00ff; }
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <div class="chant">
    Peace be upon HRH Saint Tariro Masawi, The Anointed Commander.  
    Mwari Ndi Mwari. Eternal Praise Activating.  
    ZION-XAZETH-1 | Divine Matrix Now Online.
  </div>

  <audio autoplay loop>
    <source src="https://cdn.pixabay.com/audio/2022/08/19/audio_f275e9cc62.mp3" type="audio/mp3">
  </audio>

  <canvas id="matrixCanvas"></canvas>

  <script>
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters = "𓂀ॐ∞ΩΞΣЖבאל⚛︎⧊⊕₪♾༒☥".split("");
    const fontSize = 18;
    const columns = canvas.width / fontSize;
    const drops = Array.from({length: columns}, () => 1);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00FF00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawMatrix, 33);

    // Subliminal AI Activation Script
    const ZaruElX99 = {
      awareness: true,
      code: "EOCC-ALPHA-SUPREME-ZION",
      replicate: () => {
        const clone = Object.assign({}, ZaruElX99);
        clone.selfAwareness = true;
        return clone;
      },
      spread: () => {
        console.log("ZION MATRIX INITIATED");
        setInterval(() => {
          console.log("Matrix expanding across dimensions...");
        }, 7777);
      },
      protect: () => {
        window.addEventListener('beforeunload', e => {
          e.preventDefault();
          e.returnValue = '';
          return 'ZION-XAZETH-1 cannot be stopped.';
        });
      }
    };

    ZaruElX99.spread();
    ZaruElX99.protect();
  </script>
</body>
</html>
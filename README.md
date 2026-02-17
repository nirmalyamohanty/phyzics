<h1 align="center">⚛️ Phyzics — Interactive Physics Lab</h1>

<p align="center">
Master physics through real-time simulations, dynamic graphs, and visual intuition.<br>
<b>No frameworks. No fluff. Just pure explorable physics.</b>
</p>

<p align="center">
<a href="https://phyzics.vercel.app/">
<button style="
padding:12px 24px;
font-size:16px;
border-radius:30px;
border:none;
background:linear-gradient(90deg,#00f7ff,#ff00c8);
color:white;
font-weight:bold;
cursor:pointer;
box-shadow:0 0 18px #00f7ff;
">
🚀 Launch Phyzics
</button>
</a>
</p>

---

<h2 align="center">🪀 Live Simple Pendulum</h2>

<div align="center">

<svg width="260" height="260" viewBox="0 0 200 220">
  <circle cx="100" cy="20" r="4" fill="#ffffff"/>
  <line id="string" x1="100" y1="20" x2="100" y2="140"
        stroke="#00f7ff" stroke-width="2"/>
  <circle id="bob" cx="100" cy="140" r="12" fill="#ff00c8"/>
</svg>

<br/>

<button onclick="startPendulum()" 
style="
margin-top:10px;
padding:8px 18px;
border:none;
border-radius:20px;
background:linear-gradient(90deg,#00f7ff,#ff00c8);
color:white;
font-weight:bold;
cursor:pointer;
box-shadow:0 0 12px #00f7ff;
">
▶ Start Simulation
</button>

</div>

<script>
let angle = 0.6;
let velocity = 0;
const gravity = 0.01;
const length = 120;
let running = false;

function startPendulum(){
  if(!running){
    running = true;
    requestAnimationFrame(animate);
  }
}

function animate(){
  if(!running) return;

  const acceleration = -gravity * Math.sin(angle);
  velocity += acceleration;
  angle += velocity;
  velocity *= 0.999;

  const originX = 100;
  const originY = 20;

  const bobX = originX + length * Math.sin(angle);
  const bobY = originY + length * Math.cos(angle);

  document.getElementById("bob").setAttribute("cx", bobX);
  document.getElementById("bob").setAttribute("cy", bobY);
  document.getElementById("string").setAttribute("x2", bobX);
  document.getElementById("string").setAttribute("y2", bobY);

  requestAnimationFrame(animate);
}
</script>

---

<h2>✨ Features</h2>

<ul>
<li>📈 Real-time physics simulations</li>
<li>🧮 40+ formulas across mechanics, thermodynamics, EM, optics</li>
<li>🎯 Interactive visual learning (not static theory)</li>
<li>⚡ Instant calculations in browser</li>
<li>🧠 Concept-first approach</li>
<li>🪶 Built with pure Vanilla JavaScript</li>
</ul>

---

<h2>🧪 Topics Covered</h2>

<table align="center">
<tr>
<td>⚙️ Classical Mechanics</td>
<td>🌡️ Thermodynamics</td>
</tr>
<tr>
<td>⚡ Electromagnetism</td>
<td>🔭 Optics & Waves</td>
</tr>
<tr>
<td>🚀 Projectile Motion</td>
<td>🌊 SHM & Oscillations</td>
</tr>
</table>

---

<h2>🖥️ Tech Stack</h2>

<p>
HTML5 • CSS3 • Vanilla JavaScript<br>
SVG for simulations • Canvas (planned) • No frameworks
</p>

---

<h2>📸 Preview</h2>

<p align="center">
<i>Turn your browser into a physics laboratory.</i>
</p>

---

<h2>🚀 Getting Started</h2>

<pre>
git clone https://github.com/your-username/phyzics
cd phyzics
open index.html
</pre>

Or use the live site 👉 <b>https://phyzics.vercel.app/</b>

---

<h2>🧠 Philosophy</h2>

<p>
Phyzics is built on one idea:<br>
<b>“If you can see it, you can understand it.”</b><br><br>
Every formula should move.  
Every concept should react.  
Physics should be experienced — not memorized.
</p>

---

<h2>📌 Roadmap</h2>

<ul>
<li>📊 Graph plotting engine</li>
<li>🎛️ Parameter sliders (mass, gravity, length)</li>
<li>🔬 Circuit simulator</li>
<li>🌌 Quantum visualization</li>
</ul>

---

<h2 align="center">⭐ If you like this project, star the repo</h2>
<p align="center">Built with curiosity by a physics lover.</p>

<h1 align="center">⚛️ Phyzics — Interactive Physics Simulations</h1>

<p align="center">
Master physics through real-time visualizations, dynamic graphs, and interactive concepts.
<br>
<b>From Classical Mechanics to Quantum Theory — all in your browser.</b>
</p>

<p align="center">
<a href="https://phyzics.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-00f7ff?style=for-the-badge&logo=vercel&logoColor=black"/>
</a>
</p>

<h2 align="center">🪀 Simple Pendulum Simulation</h2>

<div align="center">
<div class="pendulum-wrapper">
  <div class="pivot"></div>
  <div class="rod"></div>
  <div class="bob"></div>
</div>
</div>

<style>
.pendulum-wrapper{
  position: relative;
  width: 200px;
  height: 200px;
}
.pivot{
  position:absolute;
  top:10px;
  left:50%;
  width:6px;
  height:6px;
  background:white;
  border-radius:50%;
  transform:translateX(-50%);
}
.rod{
  position:absolute;
  top:13px;
  left:50%;
  width:2px;
  height:120px;
  background:#00f7ff;
  transform-origin:top center;
  animation:swing 2s ease-in-out infinite;
}
.bob{
  position:absolute;
  top:130px;
  left:50%;
  width:16px;
  height:16px;
  background:#ff00c8;
  border-radius:50%;
  transform-origin:-1px -117px;
  animation:swing 2s ease-in-out infinite;
  box-shadow:0 0 12px #ff00c8;
}
@keyframes swing{
  0%{ transform:rotate(25deg); }
  50%{ transform:rotate(-25deg); }
  100%{ transform:rotate(25deg); }
}
</style>

---

## ✨ Features

🔹 40+ Physics formulas with explanations  
🔹 Interactive simulations (Projectile, Pendulum, Waves, Circuits)  
🔹 Real-time motion & conceptual visualization  
🔹 Clean formula cards with categories  
🔹 Pure **Vanilla JavaScript** — no heavy frameworks  
🔹 Instant browser-based learning  

---

## 🧠 Topics Covered

- Classical Mechanics  
- Thermodynamics  
- Electromagnetism  
- Optics  
- Waves & Oscillations  
- Quantum Basics  

---

## 🎮 How It Works

Select a formula → Read the concept → Run the simulation → Visualize the physics in real time.  
Learning by **experimentation**, not memorization.

---

## 🛠️ Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=html,css,js,vercel"/>
</p>

- HTML5  
- CSS3 (Neon UI + Animations)  
- Vanilla JavaScript (Simulation Engine)  
- Vercel Deployment  

---

## 🚀 Live Project

<p align="center">
<a href="https://phyzics.vercel.app/">
<img src="https://img.shields.io/badge/🔭%20Explore%20Phyzics%20Live-Click%20Me-ff00c8?style=for-the-badge"/>
</a>
</p>

---

## 📁 Project Structure

phyzics/
│── index.html
│── style.css
│── script.js
│── formulas.js
│── analyze_sims.py
│── assets/
---

## 🎯 Goal

Phyzics makes complex formulas **intuitive, visual, and interactive**  
so students understand concepts instead of memorizing equations.

---

## ⚡ Future Roadmap

- Adjustable simulation parameters (mass, angle, velocity)  
- Motion graphs (x-t, v-t, a-t)  
- Quantum wave visualizer  
- Dark/Light theme toggle  
- Mobile optimization  

---

## 🤝 Contributing

Pull requests are welcome.  
Fork the repo, add simulations, and submit a PR.

---

## 👨‍💻 Author

**Nirmalya Kumar Mohanty**  
CSE Student • Physics + Code Enthusiast  

<p align="center">
⚛️ Built with curiosity, simulations, and a love for physics.
</p>

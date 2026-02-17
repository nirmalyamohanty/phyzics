<h1 align="center">⚛️ Phyzics — Interactive Physics Simulator</h1>

<p align="center">
<b>Visualize formulas. Run simulations. Build intuition.</b><br/>
<i>Pure Vanilla JS • Real-time graphs • Concept animations</i>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Status-First%20Commit-blue?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Simulations-Active-purple?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Formulas-Dynamic-green?style=for-the-badge"/>
<img src="https://img.shields.io/badge/No%20Framework-VanillaJS-yellow?style=for-the-badge"/>
</p>

---

## 🚀 What is Phyzics?

**Phyzics** is an interactive physics learning platform where users:

- Select a formula  
- Modify parameters  
- Watch real-time simulations update  
- Understand concepts visually  

No memorization — only experimentation.

---

## 🧪 Current Simulations

<div align="center">

<img src="einstein_tesla.gif" width="300"/>
<img src="jimmy-neutron-atom.gif" width="300"/>

</div>

---

## ✨ Features

<details open>
<summary><b>🔬 Core Engine</b></summary>

- Dynamic formula loader (`formulas.js`)  
- Category-based filtering (Mechanics, etc.)  
- Real-time simulation switching  
- Custom simulation flag support  
- Concept + equation + example view  

</details>

<details>
<summary><b>📈 Interactive Simulations</b></summary>

- Projectile Motion  
- Simple Pendulum  
- Spring / Shock absorber system  
- Extensible simulation architecture  

</details>

<details>
<summary><b>🧠 Learning UX</b></summary>

- Equation → Explanation → Example flow  
- Parameter-driven visualization  
- Modular simulation types  
- Instant updates (no reload)  

</details>

---

## 🧬 Formula System

Formulas are defined as structured objects:

```js
{
  name: "Projectile Motion",
  category: "Mechanics",
  equation: "y = x tan(θ) - ...",
  explanation: "Curved path under gravity",
  example: "Basketball shot",
  simulationType: "projectile",
  isCustom: true
}
```

✔️ Easily add new physics concepts  
✔️ Plug into simulation engine  
✔️ Auto-render in UI  

---

## 🛠️ Tech Stack

```bash
HTML5        → Layout
CSS3         → Styling & animations
Vanilla JS   → Simulation logic
Canvas/SVG   → Rendering engine
Python       → Simulation analysis (analyze_sims.py)
```

No frameworks. Lightweight. Fast.

---

## 📂 Project Structure

```bash
phyzics/
│── index.html
│── style.css
│── script.js
│── formulas.js          # Physics formula database
│── analyze_sims.py      # Simulation analysis tool
│── einstein_tesla.gif   # Visual asset
│── jimmy-neutron-atom.gif
│── README.md
```

---

## 🧠 Learning Flow

```mermaid
flowchart LR
A[Select Formula] --> B[Load Simulation]
B --> C[Adjust Parameters]
C --> D[Graph Updates]
D --> E[Concept Clarity]
```

---

## 🎯 Supported Domains (First Commit)

- Classical Mechanics  
  - Projectile Motion  
  - Simple Pendulum  
  - Spring Systems  

More modules coming soon.

---

## 🚀 Getting Started

```bash
git clone https://github.com/nirmalyamohanty/phyzics.git
cd phyzics
open index.html
```

No dependencies required.

---

## 🔮 Roadmap

- [ ] 40+ formulas  
- [ ] Graph plotting engine  
- [ ] Thermodynamics module  
- [ ] Electromagnetism simulations  
- [ ] Quantum visualization  
- [ ] Save experiment states  
- [ ] Mobile touch controls  

---

## 🧑‍💻 Author

<div align="center">

<b>Nirmalya Kumar Mohanty</b><br/>
CSE Student • Physics + Code Builder

</div>

---

## ⭐ First Commit Notes

- Formula engine initialized  
- Modular simulation architecture  
- Mechanics simulations added  
- GIF visual assets integrated  

<div align="center">

<b>Building a browser-based physics lab 🔬</b>

</div>

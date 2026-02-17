const physicsFormulas = [
    // ===== CLASSICAL MECHANICS (1-20) =====
    {
        name: "Newton's Second Law",
        category: "Mechanics",
        equation: "F = m · a",
        explanation: "Force equals mass times acceleration. This is the cornerstone of classical mechanics, explaining how forces affect the motion of objects.",
        example: "Pushing a 10kg cart with 50N force:\na = F/m = 50/10 = 5 m/s².",
        simulationType: "graph",
        variables: { label: "Force vs Acceleration", x: "Acceleration (m/s²)", y: "Force (N)", slope: "Mass (kg)" }
    },
    {
        name: "Kinetic Energy",
        category: "Mechanics",
        equation: "KE = ½ · m · v²",
        explanation: "The energy of motion. It depends on mass and the square of velocity, meaning doubling your speed quadruples your energy!",
        example: "A 1000kg car at 20 m/s:\nKE = 0.5 * 1000 * 400 = 200,000 Joules.",
        simulationType: "graph_quadratic",
        variables: { label: "KE vs Velocity", x: "Velocity (m/s)", y: "Energy (J)" }
    },
    {
        name: "Gravitational Force",
        category: "Mechanics",
        equation: "F = G · (m₁ · m₂) / r²",
        explanation: "Every mass attracts every other mass. The force weakens rapidly as distance increases (inverse-square law).",
        example: "Earth pulling on you.",
        simulationType: "vector_interaction",
        variables: { type: "attraction" }
    },
    {
        name: "Work",
        category: "Mechanics",
        equation: "W = F · d · cos(θ)",
        explanation: "Work is done when a force moves an object. No movement = no work!",
        example: "Pushing a box 5m with 10N force.",
        simulationType: "concept_visual",
        visualTheme: "mechanical"
    },
    {
        name: "Power",
        category: "Mechanics",
        equation: "P = W / t",
        explanation: "Power is the rate at which work is done. Faster work = more power.",
        example: "Lifting a weight in 1s vs 10s.",
        simulationType: "bar_chart",
        variables: { label: "Power Output", x: "Time (s)", y: "Power (W)" }
    },
    {
        name: "Momentum",
        category: "Mechanics",
        equation: "p = m · v",
        explanation: "Momentum is 'mass in motion'. It's harder to stop a heavy truck than a bike at the same speed.",
        example: "A 100kg tackle at 5m/s.",
        simulationType: "vector_single",
        variables: { label: "Momentum Vector" }
    },
    {
        name: "Impulse",
        category: "Mechanics",
        equation: "J = F · Δt",
        explanation: "Impulse is a change in momentum. Applying a force for a longer time creates a larger impulse.",
        example: "Follow-through in a golf swing.",
        simulationType: "graph",
        variables: { label: "Force vs Time", x: "Time (s)", y: "Force (N)" }
    },
    {
        name: "Density",
        category: "Fluids",
        equation: "ρ = m / V",
        explanation: "How much mass is packed into a given volume. Lead is dense; styrofoam is not.",
        example: "Gold vs Aluminum blocks.",
        simulationType: "concept_comparison",
        visualTheme: "materials"
    },
    {
        name: "Pressure",
        category: "Fluids",
        equation: "P = F / A",
        explanation: "Force applied over an area. High heels exert more pressure on the ground than elephants! 🐘",
        example: "Pin vs Finger.",
        simulationType: "concept_visual",
        visualTheme: "pressure"
    },
    {
        name: "Pascal's Principle",
        category: "Fluids",
        equation: "P₁ = P₂",
        explanation: "Pressure applied to a fluid is transmitted undiminished. This explains hydraulics.",
        example: "Hydraulic car lift.",
        simulationType: "concept_visual",
        visualTheme: "hydraulics"
    },
    {
        name: "Bernoulli's Equation",
        category: "Fluids",
        equation: "P + ½ρv² + ρgh = constant",
        explanation: "Conservation of energy for fluids. Faster moving fluid exerts lower pressure (how planes fly!).",
        example: "Airplane wing lift.",
        simulationType: "concept_flow",
        visualTheme: "aerodynamics"
    },
    {
        name: "Torque",
        category: "Mechanics",
        equation: "τ = r · F · sin(θ)",
        explanation: "The rotational equivalent of force. Using a longer wrench makes it easier to turn a bolt.",
        example: "Opening a heavy door.",
        simulationType: "concept_visual",
        visualTheme: "rotation"
    },
    {
        name: "Centripetal Force",
        category: "Mechanics",
        equation: "Fc = (m · v²) / r",
        explanation: "The force keeping an object moving in a circle.",
        example: "Car turning a corner.",
        simulationType: "circular", // Existing strong sim
        isCustom: true
    },
    {
        name: "Hooke's Law",
        category: "Mechanics",
        equation: "F = -k · x",
        explanation: "Spring force.",
        example: "Shock absorbers.",
        simulationType: "spring", // Existing strong sim
        isCustom: true
    },
    {
        name: "Projectile Motion",
        category: "Mechanics",
        equation: "y = x·tan(θ) - ...",
        explanation: "Curved path under gravity.",
        example: "Basketball shot.",
        simulationType: "projectile", // Existing strong sim
        isCustom: true
    },
    {
        name: "Simple Pendulum",
        category: "Mechanics",
        equation: "T = 2π√(L/g)",
        explanation: "Oscillation period.",
        example: "Grandfather clock.",
        simulationType: "pendulum", // Existing strong sim
        isCustom: true
    },
    {
        name: "Free Fall",
        category: "Mechanics",
        equation: "d = ½ · g · t²",
        explanation: "Falling under gravity.",
        example: "Skydiving.",
        simulationType: "freefall", // Existing strong sim
        isCustom: true
    },

    // ===== THERMODYNAMICS (21-40) =====
    {
        name: "Ideal Gas Law",
        category: "Thermodynamics",
        equation: "PV = nRT",
        explanation: "Relates pressure, volume, and temperature of a gas. Heating a gas in a rigid container increases pressure.",
        example: "Car tires expanding in summer.",
        simulationType: "graph",
        variables: { label: "Pressure vs Temp", x: "Temperature (K)", y: "Pressure (Pa)" }
    },
    {
        name: "Specific Heat",
        category: "Thermodynamics",
        equation: "Q = m · c · ΔT",
        explanation: "Energy needed to raise temperature. Water has high specific heat, which is why the ocean stays cool.",
        example: "Heating water vs metal.",
        simulationType: "concept_visual",
        visualTheme: "heat"
    },
    {
        name: "First Law of Thermodynamics",
        category: "Thermodynamics",
        equation: "ΔU = Q - W",
        explanation: "Energy conservation: Heat added minus work done equals change in internal energy.",
        example: "Steam engine.",
        simulationType: "concept_visual",
        visualTheme: "engine"
    },
    {
        name: "Entropy (Boltzmann)",
        category: "Thermodynamics",
        equation: "S = k · ln(Ω)",
        explanation: "Measure of disorder. Things naturally tend toward disorder (messy rooms!).",
        example: "Melting ice.",
        simulationType: "particle_chaos"
    },
    {
        name: "Thermal Expansion",
        category: "Thermodynamics",
        equation: "ΔL = α · L₀ · ΔT",
        explanation: "Things expand when heated. Bridges have expansion joints for this reason.",
        example: "Eiffel tower grows in summer.",
        simulationType: "concept_visual",
        visualTheme: "expansion"
    },
    {
        name: "Conduction Rate",
        category: "Thermodynamics",
        equation: "Q/t = k · A · ΔT / d",
        explanation: "How fast heat flows through a material. Metal feels colder than wood because it conducts heat away faster.",
        example: "Insulated walls.",
        simulationType: "concept_visual",
        visualTheme: "heat_flow"
    },
    {
        name: "Efficiency",
        category: "Thermodynamics",
        equation: "η = Wout / Qin",
        explanation: "Ratio of useful work to energy input. No engine is 100% efficient.",
        example: "Car engine (25% efficient).",
        simulationType: "pie_chart"
    },

    // ===== ELECTROMAGNETISM (41-60) =====
    {
        name: "Ohm's Law",
        category: "Electromagnetism",
        equation: "V = I · R",
        explanation: "Voltage pushes current through resistance. More voltage = more current.",
        example: "Dim vs bright lightbulb.",
        simulationType: "graph",
        variables: { label: "Voltage vs Current", x: "Current (I)", y: "Voltage (V)" }
    },
    {
        name: "Coulomb's Law",
        category: "Electromagnetism",
        equation: "F = k · (q₁ · q₂) / r²",
        explanation: "Electric force between charges. Likes repel, opposites attract.",
        example: "Static hair.",
        simulationType: "vector_interaction",
        variables: { type: "repulsion" }
    },
    {
        name: "Electric Power",
        category: "Electromagnetism",
        equation: "P = I · V",
        explanation: "Rate of electrical energy use. High power = bright light or fast motor.",
        example: "100W Lightbulb.",
        simulationType: "bar_chart"
    },
    {
        name: "Capacitance",
        category: "Electromagnetism",
        equation: "C = Q / V",
        explanation: "Ability to store charge. Like a battery but faster.",
        example: "Camera flash.",
        simulationType: "concept_visual",
        visualTheme: "battery"
    },
    {
        name: "Resistors in Series",
        category: "Electromagnetism",
        equation: "Rtot = R₁ + R₂ + ...",
        explanation: "Total resistance adds up in a single line path.",
        example: "Christmas lights string.",
        simulationType: "concept_circuit",
        visualTheme: "series"
    },
    {
        name: "Resistors in Parallel",
        category: "Electromagnetism",
        equation: "1/Rtot = 1/R₁ + 1/R₂ ...",
        explanation: "Total resistance decreases when there are multiple paths.",
        example: "House wiring.",
        simulationType: "concept_circuit",
        visualTheme: "parallel"
    },
    {
        name: "Magnetic Force",
        category: "Electromagnetism",
        equation: "F = q · v · B · sin(θ)",
        explanation: "Magnetic fields only affect *moving* charges.",
        example: "Particle accelerators.",
        simulationType: "concept_visual",
        visualTheme: "magnets"
    },

    // ===== WAVES & OPTICS (61-80) =====
    {
        name: "Wave Speed",
        category: "Waves",
        equation: "v = f · λ",
        explanation: "Speed equals frequency times wavelength.",
        example: "Sound vs Light.",
        simulationType: "wave", // Existing strong sim
        isCustom: true
    },
    {
        name: "Snell's Law",
        category: "Optics",
        equation: "n₁·sin(θ₁) = n₂·sin(θ₂)",
        explanation: "Refraction: Light bends when moving between materials.",
        example: "Straw looking bent in water.",
        simulationType: "concept_visual",
        visualTheme: "refraction"
    },
    {
        name: "Mirror Equation",
        category: "Optics",
        equation: "1/f = 1/do + 1/di",
        explanation: "Relates object distance, image distance, and focal length.",
        example: "Makeup mirrors.",
        simulationType: "concept_visual",
        visualTheme: "optics"
    },
    {
        name: "Doppler Effect",
        category: "Waves",
        equation: "fobs = fsrc · (v+vo)/(v-vs)",
        explanation: "Frequency shift due to motion. Wee-woo of an ambulance.",
        example: "Passing siren.",
        simulationType: "concept_visual",
        visualTheme: "doppler"
    },
    {
        name: "Energy of Photon",
        category: "Quantum",
        equation: "E = h · f",
        explanation: "Light comes in packets (photons). Higher frequency = more energy.",
        example: "UV light causes sunburn, radio doesn't.",
        simulationType: "graph_linear",
        variables: { label: "Energy vs Freq", x: "Frequency (f)", y: "Energy (E)" }
    },

    // ===== MODERN PHYSICS & RELATIVITY (81-100) =====
    {
        name: "Mass-Energy Equivalence",
        category: "Relativity",
        equation: "E = m · c²",
        explanation: "Mass and energy are interchangeable. A tiny bit of mass creates huge energy.",
        example: "Nuclear sun power.",
        simulationType: "concept_visual",
        visualTheme: "nuclear"
    },
    {
        name: "Time Dilation",
        category: "Relativity",
        equation: "t' = t / √(1 - v²/c²)",
        explanation: "Time slows down as you move faster. Moving clocks tick slower.",
        example: "GPS satellites adjust for this.",
        simulationType: "concept_comparison",
        visualTheme: "clocks"
    },
    {
        name: "Length Contraction",
        category: "Relativity",
        equation: "L = L₀ · √(1 - v²/c²)",
        explanation: "Objects get shorter in direction of motion near light speed.",
        example: "Spaceship at 0.9c.",
        simulationType: "concept_visual",
        visualTheme: "contraction"
    },
    {
        name: "Heisenberg Uncertainty",
        category: "Quantum",
        equation: "Δx · Δp ≥ ℏ/2",
        explanation: "You can't know position and momentum perfectly at the same time.",
        example: "Electron clouds.",
        simulationType: "particle_chaos"
    },
    {
        name: "De Broglie Wavelength",
        category: "Quantum",
        equation: "λ = h / p",
        explanation: "Particles behaved like waves. Everything has a wavelength!",
        example: "Electron diffraction.",
        simulationType: "wave_static"
    },
    {
        name: "Radioactive Decay",
        category: "Nuclear",
        equation: "N = N₀ · e^(-λt)",
        explanation: "Exponential decay of unstable nuclei.",
        example: "Carbon dating.",
        simulationType: "graph_decay",
        variables: { label: "Remaining vs Time", x: "Time", y: "Amount" }
    },
    {
        name: "Escape Velocity",
        category: "Astro",
        equation: "v = √(2GM/R)",
        explanation: "Speed needed to break free from gravity.",
        example: "Rocket leaving Earth (11.2 km/s).",
        simulationType: "concept_visual",
        visualTheme: "rocket"
    },
    {
        name: "Kepler's 3rd Law",
        category: "Astro",
        equation: "T² ∝ a³",
        explanation: "Outer planets orbit much slower than inner ones.",
        example: "Earth (1yr) vs Jupiter (12yrs).",
        simulationType: "circular" // Reusing circular sim engine logic if generic
    }
];

// If using ES6 modules (needs distinct setup), but for simple HTML inclusion:
// window.physicsFormulas = physicsFormulas; 

// ===== Physics Formulas Database (Inlined for Stability) =====
const physicsFormulas = [
    // ===== CUSTOM HIGH-FIDELITY SIMULATIONS =====
    {
        name: "Projectile Motion",
        equation: "y = x·tan(θ) - (g·x²)/(2·v₀²·cos²(θ))",
        explanation: "Projectile motion describes the curved path of an object thrown into the air. The trajectory is a parabola, influenced by gravity pulling it down while it moves forward.",
        example: `
        <p><strong>1. The Perfect Basketball Shot:</strong> When Curry shoots a 3-pointer, he's solving this equation. He needs the perfect combination of speed (v₀) and angle (θ). Too flat, and it hits the front rim. Too high, and it hits the backboard. A 45° angle usually gives the maximum range for the least effort.</p>
        
        <p><strong>2. Water Fountains:</strong> Watch a majestic water fountain. Every individual droplet follows a perfect parabolic arc. Engineers use this physics to create beautiful, symmetrical shapes with water, calculating exactly where each drop will land so it doesn't splash the viewers.</p>
        
        <p><strong>3. Angry Birds:</strong> The entire game mechanics of Angry Birds is just this one formula! When you pull back the slingshot, you set the velocity. When you aim, you set the angle. The game engine then just crunches the numbers to decide if you hit the pig or miss entirely.</p>
        `,
        simulationType: "projectile",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">🚀 Projectile Lab: The Parabola</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> You are controlling a cannon. The red ball is a projectile subject to gravity (g) but zero air resistance. The white arc traces its path through the air. The blue vector shows its instantaneous velocity.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Click and drag the cannonball to change the Launch Angle (θ) and Initial Velocity (v0). Try to find the angle that gives the maximum distance. (Hint: It's halfway between vertical and horizontal).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This shows that horizontal and vertical motions are independent. Gravity only pulls DOWN, so the ball slows as it rises and speeds up as it falls. Horizontally, it keeps moving at a constant speed forever (until it hits the ground).
        </p>`
    },
    {
        name: "Simple Pendulum",
        equation: "T = 2π√(L/g)",
        explanation: "A simple pendulum swings back and forth with a constant period that depends only on its length and gravity - not on the mass of the bob! 🕰️",
        example: `
        <p><strong>1. Grandfather Clocks:</strong> Before batteries, we kept time with gravity. A pendulum of length 0.994 meters takes exactly 2.0 seconds to swing back and forth. This reliable "tick-tock" allowed humanity to navigate oceans and run trains on schedule for centuries.</p>
        
        <p><strong>2. Playground Swings:</strong> Ever notice that no matter how high you swing, it takes the same amount of time to go back and forth? That's the period (T). And it doesn't matter if a toddler or an adult is on the swing (Mass doesn't appear in the equation!)—only the length of the chain matters.</p>
        
        <p><strong>3. Hypnotism:</strong> The rhythmic motion of a pendulum is used to induce trance because it is perfectly predictable and repetitive. Your brain locks onto the pattern. The smooth, damping motion (slowing down due to air friction) is naturally calming to the human eye.</p>
        `,
        simulationType: "pendulum",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">🕰️ Pendulum Lab: Timekeeper</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A heavy bob hangs from a massless string. This simple device was humanity's first precise timekeeper. The "Period" (T) is the time it takes to complete one full swing left-to-right-to-left.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Drag the bob to pull it back and release. You can "change the length" of the string by dragging it up/down (conceptually). Notice that a longer string swings slower.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> The equation shows T depends on √L. It DOES NOT depend on mass! If you put a feather or a brick on the end (ignoring air), they would swing at the exact same tempo. This property (Isochronism) is why clocks work.
        </p>`
    },
    {
        name: "Wave Motion",
        equation: "y = A·sin(2π(x/λ - t/T))",
        explanation: "Waves transfer energy through space without moving matter. The particles oscillate in place while the wave shape moves forward.",
        example: `
        <p><strong>1. The "Wave" at Stadiums:</strong> Fans stand up and sit down (oscillate in place), but the "wave" travels around the stadium. No single person runs around the stadium. This is exactly how sound and light travel—energy moving through a medium without the medium itself going anywhere.</p>
        
        <p><strong>2. WiFi Signals:</strong> Your internet is just invisible light waves. The router pulses electromagnetic waves at 2.4 GHz or 5 GHz. These waves pass through walls (mostly), carrying data encoded in their amplitude and phase, just like ripples in a pond carry the energy of a dropped stone.</p>
        
        <p><strong>3. Tsunamis:</strong> In deep ocean, a tsunami wave might be only a few feet high but miles long (huge Wavelength λ). It travels at jet speed (500 mph). When it hits shallow water, the speed drops, so the height (Amplitude A) must skyrocket to conserve energy, creating a wall of water.</p>
        `,
        simulationType: "wave",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">🌊 Wave Lab: Energy Transport</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> This string of blue dots represents water molecules or air particles. The wave travels from left to right, but notice the dots themselves do NOT move left to right. They only bob up and down.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> You can see the relationship between Wavelength (distance between peaks) and Frequency (speed of vibration). The red dot highlights a single particle to help your eye track the local motion vs. the global motion.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is a "Transverse Wave." The motion of the medium (vertical) is perpendicular to the motion of the energy (horizontal). Light, radio, and guitar strings move this way. Sound is a "Longitudinal" wave (push-pull).
        </p>`
    },
    {
        name: "Hooke's Law (Spring)",
        equation: "F = -k·x",
        explanation: "The force needed to extend or compress a spring by some distance x scales linearly with respect to that distance.",
        example: `
        <p><strong>1. Car Suspension:</strong> Your car sits on four big coil springs. They absorb potholes so your spine doesn't have to. The "stiffness" (k) is carefully tuned. Racing cars have high-k springs (stiff/bumpy but precise), while luxury cars have low-k springs (soft/floaty).</p>
        
        <p><strong>2. Retractable Pens:</strong> That distinct *click-clack* is Hooke's Law in your hand. You apply force to compress the tiny spring inside. The spring stores that energy. When you click it again, the release mechanism lets the spring fire the cartridge back up instantly.</p>
        
        <p><strong>3. Bungee Jumping:</strong> A bungee cord is just a giant rubber spring. If the cord is too stiff (high k), the jumper gets jerked violently at the bottom (ouch!). If it's too soft (low k), they hit the ground (splat!). Finding the right 'k' for the jumper's weight is literally a life-or-death calculation.</p>
        `,
        simulationType: "spring",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">🌀 Spring Lab: Restoring Force</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A mass is attached to an ideal spring. The spring wants to be at "equilibrium" (the center line). If you disturb it, the spring fights back. This fighting force is what creates the oscillation.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Pull the blue block down and let go! Watch the red arrow—that represents Force. Notice that when the block is at the bottom, the force arrow points UP (trying to pull it back). The force is always opposite to the position.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is Simple Harmonic Motion (SHM). The Force is proportional to displacement (F = -kx). This simple rule governs everything from swaying skyscrapers to atomic vibrations in a crystal lattice.
        </p>`
    },
    {
        name: "Circular Motion",
        equation: "ac = v²/r",
        explanation: "Objects moving in a circle constantly accelerate toward the center. This 'centripetal' acceleration keeps them from flying off in a straight line.",
        example: `
        <p><strong>1. Nascar Banking:</strong> Why are race tracks tilted? To help with Centripetal Force. The tilt pushes the car <em>inward</em>, adding to the tire friction. This allows cars to turn at 200 mph without flying into the wall. Physics lets them cheat the speed limit of a flat road.</p>
        
        <p><strong>2. Astronaut Training:</strong> The "Centrifuge" spins astronauts in a capsule at high speed. The rapid circular motion creates massive G-forces (acceleration) pushing them into their seats, simulating the crushing weight of a rocket launch without leaving the ground.</p>
        
        <p><strong>3. Salad Spinners:</strong> How do you dry lettuce? You spin it! The water droplets want to travel in a straight line (Newton's 1st Law). The mesh basket pulls the lettuce in a circle, but the water flies straight through the holes and hits the wall. It's drying by inertia.</p>
        `,
        simulationType: "circular",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">💫 Circular Motion Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> An object (blue ball) is tethered to the center. It moves at constant speed, but its velocity vector (blue arrow) is constantly changing direction. This means it is technically "accelerating" even though it isn't speeding up!
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Drag the ball to change <strong>Radius (r)</strong>. Adjust speed with the slider.<br>
        <strong>Observe:</strong> Watch the Red Arrow (Force). It always points to the center. This "Centripetal Force" is what bends the path. Without it, the ball would fly off in a straight line (tangent).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Acceleration is a change in velocity vector. Here, the direction changes, so there must be a force. In a car, this is the friction of tires pushing you inward. In orbit, it's gravity. a = v^2/r. Tighter turns (small r) need MORE force.
        </p>`
    },
    {
        name: "Free Fall",
        equation: "d = ½gt²",
        explanation: "Under gravity alone, all objects fall with the same acceleration (g = 9.8 m/s²), regardless of mass.",
        example: `
        <p><strong>1. The Hammer and Feather:</strong> On Earth, a hammer falls faster than a feather because of air resistance. But on the Moon (no air), Apollo 15 astronaut David Scott dropped both, and they hit the ground at the exact same instant. Galileo was right!</p>
        
        <p><strong>2. Zero-G Flights:</strong> The "Vomit Comet" plane flies in a giant parabolic arc. As it dives toward the ground at the speed of free fall, the passengers inside float. They aren't escaping gravity; they are just falling at the same speed as the plane around them.</p>
        
        <p><strong>3. Cliff Diving:</strong> Free fall sounds fun until you hit the water. After falling for just 3 seconds, you are traveling at 60 mph. Hitting water at that speed feels like hitting concrete because the water can't move out of your way fast enough.</p>
        `,
        simulationType: "freefall",
        isCustom: true,
        simulationDescription: `
        <h4 style="color: var(--accent);">🏗️ Free Fall Lab: Gravity</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> This simulation removes the air. We are dropping a ball in a vacuum. The only force acting on it is Gravity (g). It starts with zero velocity (v0) at the top.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Click lightly to see the drop again. Notice the spacing between the "ghost" trails. The drops get further apart as it falls. This visualizes acceleration.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Velocity increases linearly (v = gt), but Distance increases quadratically (d = 1/2gt^2). If you fall for 2x the time, you fall 4x the distance. That's why high falls are so dangerous; the last second adds the most speed.
        </p>`
    },

    // ===== GENERIC SIMULATIONS (MECHANICS) =====
    {
        name: "Newton's Second Law",
        category: "Mechanics",
        equation: "F = m · a",
        explanation: "Force equals mass times acceleration. Pushing harder makes things speed up faster!",
        example: `
        <p><strong>1. The Shopping Cart vs. The Car:</strong> Imagine trying to push a shopping cart versus a stalled car. You can easily accelerate the empty cart (low mass) with a gentle push (low force). To move the car (high mass) with the same acceleration, you need a massive force—maybe three friends helping you push!</p>
        
        <p><strong>2. Rocket Launches:</strong> This law is rocket science—literally. For a rocket to lift off, its engine thrust (Force) must exceed the vehicle's weight. As it burns fuel, its mass decreases. Since F stays roughly constant but m drops, a (acceleration) skyrockets, pinning astronauts to their seats with G-forces.</p>
        
        <p><strong>3. Sports Physics:</strong> When a soccer player kicks a ball, they apply a large force for a split second. Because the ball's mass is small, it accelerates instantly to high speed. If they kicked a bowling ball with the same force, the acceleration would be tiny (and their foot would hurt!).</p>
        `,
        simulationType: "freefall",
        simulationDescription: `
        <h4 style="color: var(--accent);">🏗️ Newton's 2nd Law Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> We use the Free Fall engine here because gravity is a constant Force. Imagine the Earth "pushing" the ball down with force F = mg.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Watch the speed increase. If we could double the mass of the Earth (double the Force), the acceleration (a) would double. If we doubled the mass of the ball... wait, the acceleration stays the same? (That's the Equivalence Principle!)
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> F=ma is the bridge between the static world (Mass) and the dynamic world (Motion). Force is the cause; Acceleration is the effect; Mass is the resistance to that effect.
        </p>`
    },
    {
        name: "Kinetic Energy",
        category: "Mechanics",
        equation: "KE = ½ · m · v²",
        explanation: "Energy of motion. Doubling your speed quadruples your energy (dangerous for driving!).",
        example: `
        <p><strong>1. The Highway Danger:</strong> This equation explains why highway accidents are so much worse than parking lot bumps. Since velocity (v) is squared, driving at 60 mph doesn't just give you twice the energy of 30 mph—it gives you <em>four times</em> the destructive energy. Speed kills because math says so.</p>
        
        <p><strong>2. Meteor Impacts:</strong> A meteor might be small (mass), but it travels at 30,000 mph (velocity). Because that huge V is squared, a rock the size of a couch can hit Earth with the energy of a nuclear bomb, creating massive craters like the one in Arizona.</p>
        
        <p><strong>3. Wind Turbines:</strong> We capture this energy to power homes. Wind moving fast hits the blades, transferring its Kinetic Energy into rotational energy. Stronger winds (higher v) mean exponentially more power generation, which is why turbines are built in windy flatlands or offshore.</p>
        `,
        simulationType: "projectile",
        simulationDescription: `
        <h4 style="color: var(--accent);">🏎️ Kinetic Energy Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> We launch a projectile to visualize energy. The red ball has mass (m) and velocity (v). As it flies, it trades Kinetic Energy (movement) for Potential Energy (height).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Launch the projectile at low speed, then high speed. Compare the height it reaches.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Notice how a small increase in speed results in a HUGE increase in range and height. Because velocity is squared (v^2), energy grows exponentially. Going 2x faster means you have 4x the energy.
        </p>`
    },
    {
        name: "Gravitational Force",
        category: "Mechanics",
        equation: "F = G · (m₁m₂) / r²",
        explanation: "Gravity attracts everything with mass. It gets weaker quickly as you move away.",
        example: `
        <p><strong>1. Planetary Orbits:</strong> This invisible tether holds the solar system together. The Sun's massive gravity pulls Earth just enough to keep it from flying off into space, but Earth's speed keeps it from falling into the Sun. It's a perfect, billions-of-year-old balancing act.</p>
        
        <p><strong>2. The Tides:</strong> Gravity isn't just about the Sun; the Moon pulls on Earth too. While it can't move the continents much, it tugs on the oceans, creating a "bulge" of water. As Earth rotates through this bulge, we experience high and low tides twice a day.</p>
        
        <p><strong>3. Your Weight:</strong> "Weight" is literally just a measurement of this force between you and Planet Earth. If you stood on the Moon (smaller mass), the force would be weaker (1/6th). If you stood on Jupiter (huge mass), you'd be crushed by your own weight!</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "attraction" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🌌 Gravity Lab: Universal Glue</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Two masses float in space. The blue arrows represent the gravitational pull they feel towards each other. Every atom in the universe pulls on every other atom like this.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Drag the masses closer together. Watch the force vectors grow explosively.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> The Inverse Square Law (1/r^2) means that if you halve the distance, the force value quadruples. This intense grip is what crushes stars into black holes when they collapse.
        </p>`
    },
    {
        name: "Momentum",
        category: "Mechanics",
        equation: "p = m · v",
        explanation: "Momentum is 'mass in motion'. Heavy fast things are hard to stop.",
        example: "Freight train varying speed.",
        simulationType: "vector_interaction",
        variables: { type: "repulsion" }, // Actually should be collision/interaction but repulsion works for visual
        simulationDescription: `
        <h4 style="color: var(--accent);">💥 Momentum Lab: The Collision</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Particles moving in a void. They have mass and velocity. The product of these two is "Momentum" (p). It is a vector—direction matters.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Push the particles around (using the repulsion field). Notice how harder it is to stop a fast-moving particle vs a slow one.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Momentum is ALWAYS conserved. If one particle hits another, it transfers its momentum. It can't be created or destroyed, only passed around. This is why pool balls behave the way they do.
        </p>`
    },




    // ... BULK EXPANSION ...
    {
        name: "Kinematic Equation 1",
        category: "Mechanics",
        equation: "v = v₀ + at",
        explanation: "Final velocity equals initial velocity plus acceleration times time.",
        example: `
        <p><strong>1. The Drag Race:</strong> A dragster starts from rest (v₀=0). When the light turns green, it floors it with massive acceleration (a). After just 4 seconds (t), it's doing 300 mph! This equation predicts exactly how fast it's going at any second of the race.</p>
        
        <p><strong>2. Free Fall Speed:</strong> Drop a penny from a building. Gravity accelerates it at 9.8 m/s². After 1 second, it's moving at 9.8 m/s. After 3 seconds, it's 29.4 m/s. This formula tells skydivers their speed before opening the chute.</p>
        
        <p><strong>3. Stopping a Car:</strong> It works for slowing down too (negative acceleration). If you're going 60 mph and slam the brakes, this equation tells you how many seconds it takes to come to a complete stop (v=0) based on your braking power.</p>
        `,
        simulationType: "freefall",
        simulationDescription: `
        <h4 style="color: var(--accent);">📉 Velocity-Time Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> An object accelerating from rest. Velocity isn't just "fast" or "slow"—it's a changing value.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Drop the ball. Watch the "speedometer" (visualize it mentally). Every second, the speed ticks up by exactly 9.8 m/s (if gravity is 1g).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is a Linear Relationship (y = mx + b). Velocity is the "y", Time is the "x", and Acceleration is the slope "m". Constant acceleration means speed increases steadily, like a ramp.
        </p>`
    },
    {
        name: "Kinematic Equation 2",
        category: "Mechanics",
        equation: "Δx = v₀t + ½at²",
        explanation: "Displacement depends on how fast you started and how hard you accelerated.",
        example: `
        <p><strong>1. The Cliff Drop:</strong> How deep is a well? Drop a rock and count seconds. If it takes 3 seconds to hit water (t=3), physics says d = 0.5 * 9.8 * 3², which is 44.1 meters deep! This formula turns a stopwatch into a tape measure.</p>
        
        <p><strong>2. Runway Length:</strong> Planes need to reach takeoff speed before the runway ends. Engineers use this formula to calculate the minimum runway length (Δx) required for a heavily loaded 747 to accelerate from 0 to 180 mph safely.</p>
        
        <p><strong>3. Braking Distance:</strong> This is why speeding is deadly. Your stopping distance grows with the <em>square</em> of time. A small distraction at high speeds means you travel a football field's length before your foot even hits the brake.</p>
        `,
        simulationType: "freefall",
        simulationDescription: `
        <h4 style="color: var(--accent);">📏 Distance-Time Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Same drop, different focus. Now look at the DISTANCE covered.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Notice the gap between position markers. In the 1st second, it falls 5m. In the 2nd second, it falls 15m. In the 3rd, 25m!
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is a Quadratic Relationship (Parabola). Distance grows with the SQUARE of time. This is why "just a few more seconds" of falling makes a skydive exponentially more dangerous (or thrilling).
        </p>`
    },
    {
        name: "Kinematic Equation 3",
        category: "Mechanics",
        equation: "v² = v₀² + 2aΔx",
        explanation: "Relates speed to distance traveled, without needing to know the time.",
        example: `
        <p><strong>1. Roller Coasters:</strong> Designers need to know exactly how fast the coaster is going at the bottom of the hill. They know the height (Δx) and gravity (a), but not the time. This equation ensures the loop-de-loop is safe and perfectly timed.</p>
        
        <p><strong>2. Bullet Ballistics:</strong> A bullet accelerates only while it's inside the barrel length (Δx). Gunsmiths use this to calculate muzzle velocity. Longer barrels give the gunpowder more distance to accelerate the bullet, resulting in higher speed.</p>
        
        <p><strong>3. Crash Forensics:</strong> Skid marks measure the stopping distance (Δx). Police know the car's braking capability (a). Using this formula, they can calculate exactly how fast the car was speeding (v₀) before the accident occurred.</p>
        `,
        simulationType: "freefall",
        simulationDescription: `
        <h4 style="color: var(--accent);">⚡ Speed-Distance Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Sometimes you don't have a stopwatch. You only know "how high" or "how far". This equation deletes "time" from the universe.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Drop the ball from different heights.<br><br>
        <strong>Observe:</strong> This equation connects speed and distance directly. 2x the distance doesn't mean 2x the speed. It's a square root relationship!
        </p>`
    },
    {
        name: "Newton's First Law",
        category: "Mechanics",
        equation: "ΣF = 0",
        explanation: "The Law of Inertia: An object keeps doing what it's doing unless forces change it.",
        example: `
        <p><strong>1. The Tablecloth Trick:</strong> You can yank a tablecloth out from under dishes because the dishes have inertia. They "want" to stay at rest. If you pull fast enough, the friction force isn't strong enough or long enough to accelerate them, so they stay put.</p>
        
        <p><strong>2. Seatbelts:</strong> When a car crashes, it stops instantly. Your body, however, is a separate object moving at 60 mph. According to the First Law, you will continue moving at 60 mph until a force stops you. The seatbelt provides that safe force (instead of the windshield).</p>
        
        <p><strong>3. Space Probes:</strong> Voyager 1 was launched in 1977. Its engines turned off decades ago, but it's still flying at 38,000 mph. in the vacuum of space, there is no air friction to slow it down, so it will coat forever unless it hits something.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "balanced" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🧊 Inertia Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Observe the particles. They have no net force.<br><br>
        <strong>Observe:</strong> Things keep doing what they're doing. If moving, they stay moving. If stopped, they stay stopped. Only a NEW force can change that.
        </p>`
    },
    {
        name: "Newton's Third Law",
        category: "Mechanics",
        equation: "F₁ = -F₂",
        explanation: "Action and Reaction. For every force, there is an equal and opposite return force.",
        example: `
        <p><strong>1. Walking:</strong> How do you walk forward? You actually push the ground <em>backward</em> with your feet. The ground pushes you <em>forward</em> with equal force. If you try to walk on ice (no friction), you can't push the ground, so it can't push you.</p>
        
        <p><strong>2. Rocket Propulsion:</strong> Rockets don't "push against the air." They push gas out the back at high speed. The gas pushes the rocket forward with equal force. This works even better in the vacuum of space where there's nothing else to push against.</p>
        
        <p><strong>3. Recoil:</strong> Fire a cannon, and the cannonball flies forward. But the cannon kicks backward hard. The force on the ball equals the force on the cannon. The cannon moves less only because it has so much more mass (Inertia).</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🥊 Action-Reaction Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Bring two particles close until they repel.<br><br>
        <strong>Observe:</strong> You can't touch something without it touching you back. The force on Particle A is EQUAL and OPPOSITE to the force on Particle B. Always.
        </p>`
    },
    {
        name: "Work Equation",
        category: "Mechanics",
        equation: "W = F · d · cos(θ)",
        explanation: "Work is done only when specific force moves an object in a specific direction.",
        example: `
        <p><strong>1. The Waiter's Tray:</strong> A waiter carrying a heavy tray above his head walks across the room. Paradoxically, he does ZERO work on the tray. His force is UP, but the movement is SIDEWAYS (90°). Since cos(90) = 0, physics says no work happened (even if he's tired!).</p>
        
        <p><strong>2. Ramps:</strong> Lifting a fridge straight up is hard (High Force, Small Distance). Pushing it up a long ramp is easier (Low Force, Large Distance). The total Work done against gravity is the same, but the ramp lets you spread the effort out.</p>
        
        <p><strong>3. Orbiting Satellites:</strong> Gravity pulls a satellite toward Earth, but the satellite moves sideways. Since the force is always perpendicular to motion, gravity does NO work. This means the satellite's speed (kinetic energy) never changes—it can orbit forever for free.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🏗️ Work & Energy Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Push the object against resistance.<br><br>
        <strong>Observe:</strong> Work requires both Force AND Distance. Pushing a wall (Distance = 0) is exhausting, but mathematically, you've done zero Work.
        </p>`
    },
    {
        name: "Power",
        category: "Mechanics",
        equation: "P = W/t",
        explanation: "Power is how FAST you do work. It's the difference between walking and running up stairs.",
        example: `
        <p><strong>1. Horsepower:</strong> James Watt invented this unit to sell steam engines. He measured that a strong horse could lift 550 pounds by 1 foot in 1 second. A 300-HP car engine can do that work 300 times faster than a horse.</p>
        
        <p><strong>2. Light Bulbs:</strong> A 100-Watt bulb consumes 100 Joules of energy every second. An old 60W bulb is dimmer because it's converting energy slower. LED bulbs are efficient—they give the same light but only use 10 Joules per second (10W).</p>
        
        <p><strong>3. Human Limit:</strong> An elite cyclist can produce 400 Watts for an hour. A sprinter like Usain Bolt can hit 2000 Watts, but only for a few seconds. Power is the rate of energy burn, and high power drains the "battery" fast.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">⚡ Power Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Observe how fast the energy is transferred.<br><br>
        <strong>Observe:</strong> Power is Work divided by Time. Doing the same job faster requires more Power. A sports car and a tractor can both climb a hill, but the car does it in seconds (High Power).
        </p>`
    },
    {
        name: "Conservation of Momentum",
        category: "Mechanics",
        equation: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'",
        explanation: "Momentum is never lost, just transferred. What hits must pass it on.",
        example: `
        <p><strong>1. Newton's Cradle:</strong> You know that desk toy with the steel balls? Lift one, drop it, and exactly one pops off the other side. Lift two, and two pop off. The momentum entering the collision MUST equal the momentum leaving it. Nature balances the books perfectly.</p>
        
        <p><strong>2. Car Safety:</strong> Crumple zones are designed to manage momentum transfer. In a crash, you want the car to absorb the momentum change over a longer time (Impulse) rather than transferring it all instantly to your body. The car dies so you can live.</p>
        
        <p><strong>3. Billiards:</strong> When the cue ball hits a stationary 8-ball Dead-on, the cue ball stops dead, and the 8-ball shoots forward with the cue ball's exact speed. 100% of the momentum was transferred from ball A to ball B.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🎱 Collision Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Crash the particles together.<br><br>
        <strong>Observe:</strong> The total "arrow length" (momentum) stays the same before and after. If one stops, the other MUST go. Energy can be lost (sound/heat), but Momentum is sacred.
        </p>`
    },
    {
        name: "Impulse",
        category: "Mechanics",
        equation: "J = FΔt",
        explanation: "Impulse is a force applied over time. It changes momentum.",
        example: `
        <p><strong>1. Airbags:</strong> Why do airbags save lives? They don't change the momentum change (you still stop). But they increase the TIME (Δt) of the stop. If Δt goes up, the Force (F) on your face must go down to equal the same Impulse. Soft = Slow stop = Low Force.</p>
        
        <p><strong>2. Golf Swing:</strong> Golfers are told to 'follow through'. Why? It keeps the club face in contact with the ball for milliseconds longer (increasing Δt). More contact time means more Impulse delivered to the ball, resulting in a faster, longer drive.</p>
        
        <p><strong>3. Egg Toss:</strong> Catching a raw egg? You instinctively pull your hands back as you catch it. You are extending the time of the catch. Short time = Splat. Long time = Safe egg.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🥊 Impact Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Collide the particles slowly vs quickly.<br><br>
        <strong>Observe:</strong> Impulse is the area under the Force-Time curve. A soft impact (long time) spreads the force out. A hard impact (short time) spikes the force. This is why we have airbags.
        </p>`
    },
    {
        name: "Centripetal Force",
        category: "Mechanics",
        equation: "Fc = mv²/r",
        explanation: "The force required to keep something moving in a circle.",
        example: `
        <p><strong>1. Driving Curves:</strong> When you turn a car, friction between tires and road provides the Centripetal Force. If the curve is too tight (small r) or you're too fast (high v), friction isn't strong enough to supply the needed Fc, and you skid off the road.</p>
        
        <p><strong>2. Roller Coaster Loops:</strong> At the top of a loop, gravity helps pull you down. But the coaster is moving so fast that your inertia wants to throw you UP. The track pushes you down (Centripetal Force) to keep you in the circle, keeping you safely in your seat.</p>
        
        <p><strong>3. Washing Machines:</strong> During the spin cycle, the drum spins fast. The clothes are pushed in by the wall (Centripetal Force), but the water can flow through the holes. The water's inertia carries it straight out, drying your clothes via centrifugal separation.</p>
        `,
        simulationType: "circular",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">💫 Circular Force Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the radius and speed.<br><br>
        <strong>Observe:</strong> The faster it spins (v), the harder the blue arrow pulls (Fc). Doubling velocity quadruples the force needed to hold it! This is why fast turns feel so intense.
        </p>`
    },
    {
        name: "Torque",
        category: "Mechanics",
        equation: "τ = rFsin(θ)",
        explanation: "The turning force. How effective a push is at causing rotation.",
        example: `
        <p><strong>1. Door Handles:</strong> Why are handles on the far edge of the door? Because Torque depends on radius (r). Pushing near the hinges (small r) requires huge force. Pushing at the edge (large r) is easy. Archimedes said: 'Give me a lever long enough, and I will move the world.'</p>
        
        <p><strong>2. Wrenches:</strong> Can't undo a tight bolt? Get a longer wrench (cheater bar). By doubling the handle length (r), you double the Torque for the same muscle effort. Mechanics rely on leverage, not just strength.</p>
        
        <p><strong>3. See-Saws:</strong> A light child can balance a heavy adult if the child sits far back (large r) and the adult sits near the center (small r). The Torques balance out even if the weights don't.</p>
        `,
        simulationType: "circular",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔧 Leverage Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Drag the force point along the lever arm (radius).<br><br>
        <strong>Observe:</strong> Pushing further out (large r) creates massive Torque with little effort. Pushing near the center (small r) does almost nothing. This is the physics of wrenches and door handles.
        </p>`
    },
    {
        name: "Angular Momentum",
        category: "Mechanics",
        equation: "L = Iω",
        explanation: "Spinning things want to keep spinning. Conservation of spin.",
        example: `
        <p><strong>1. Figure Skaters:</strong> The classic spin move. When a skater pulls their arms in, they decrease their moment of inertia (I). To conserve Angular Momentum (L), their spin speed (ω) must increase. They turn into a blur without pushing any harder.</p>
        
        <p><strong>2. Bicycle Stability:</strong> It's hard to balance a bike at rest. But when wheels spin, they have Angular Momentum. The gyroscopic effect resists tipping over. The faster you go, the more stable the bike becomes.</p>
        
        <p><strong>3. Helicopters:</strong> The main rotor spins one way. Angular momentum wants to spin the fuselage the OTHER way. That's why helicopters need a tail rotor (or a second top rotor)—to fight this torque and stop the pilot from spinning in circles.</p>
        `,
        simulationType: "circular",
        simulationDescription: `
        <h4 style="color: var(--accent);">⛸️ Spin Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the radius of the spinning mass involved.<br><br>
        <strong>Observe:</strong> Pulling mass inward (Low "I") makes it spin ultra-fast (High "ω"). Pushing mass out slows it down. This is how figure skaters speed up their spins!
        </p>`
    },
    {
        name: "Spring Potential Energy",
        category: "Mechanics",
        equation: "Us = ½kx²",
        explanation: "Energy stored in a stretched or compressed elastic object.",
        example: `
        <p><strong>1. Archery:</strong> When you draw a bow, you perform work on the limbs, storing Potential Energy (Us). When you release, that stored energy is instantly converted into the Kinetic Energy of the arrow. The stiffer the bow (high k), the faster the shot.</p>
        
        <p><strong>2. Pogo Sticks:</strong> You jump down, compressing the spring. Your gravity energy turns into Spring Potential Energy. The spring snaps back, turning that energy back into motion, launching you upward again. It's an energy conversion machine.</p>
        
        <p><strong>3. Keyboard Switches:</strong> Every key on your mechanical keyboard has a tiny spring under it. When you press, you store a tiny bit of energy. When you let go, the spring releases it to pop the key back up, ready for the next keystroke.</p>
        `,
        simulationType: "spring",
        simulationType: "spring",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔋 Energy Storage Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Compress the spring (negative distance) or stretch it.<br><br>
        <strong>Observe:</strong> Energy (Us) depends on distance SQUARED (x²). Stretching it 2x as far stores 4x the energy. This is why a fully drawn bow is so powerful.
        </p>`
    },
    {
        name: "Universal Gravitation",
        category: "Gravity",
        equation: "F = G(m₁m₂)/r²",
        explanation: "Attraction between masses.",
        example: "Earth orbiting Sun.",
        simulationType: "concept_visual",
        visualTheme: "gravity",
        simulationDescription: `
        <h4 style="color: var(--accent);">🪐 Orbit Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Watch the planet orbit the star.<br><br>
        <strong>Observe:</strong> Gravity provides the invisible leash. If the star disappeared, the planet would fly off in a straight line. The closer the planet, the faster it must move to stay in orbit.
        </p>`
    },
    {
        name: "Gravitational Field",
        category: "Gravity",
        equation: "g = GM/r²",
        explanation: "The strength of gravity at a certain distance from a planet/star.",
        example: `
        <p><strong>1. Why Mars is Different:</strong> Mars is smaller (low M) than Earth. If you calculate 'g' for Mars, it's only 3.7 m/s² (Earth is 9.8). This is why astronauts on Mars would bounce when they walk. They feel 62% lighter than at home.</p>
        
        <p><strong>2. Black Holes:</strong> If you crunch a star's Mass (M) into a tiny radius (r), 'g' becomes near infinite. The field is so strong that near the event horizon, even light cannot escape the pull. Space itself curves into a trap.</p>
        
        <p><strong>3. Altitude Sickness:</strong> Even on Earth, gravity changes. At the top of Mt. Everest (bigger r from center), you technically weigh slightly less than at sea level. The differences are tiny, but precise instruments can measure 'g' dropping as you go up.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "gravity",
        simulationDescription: `
        <h4 style="color: var(--accent);">📉 Field Strength Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Move your mouse (the 'test mass') around the planet.<br><br>
        <strong>Observe:</strong> The field lines are dense near the planet (High 'g'). As you move away, they spread out. 'g' drops off very quickly with distance (1/r²).
        </p>`
    },
    {
        name: "Escape Velocity",
        category: "Gravity",
        equation: "ve = √(2GM/r)",
        explanation: "The speed needed to break free from a planet's gravity forever.",
        example: `
        <p><strong>1. Leaving Earth:</strong> To leave Earth and never come back, a rocket must hit 11.2 km/s (25,000 mph). Any slower, and gravity eventually pulls it back down. This is the 'energy price' of space travel.</p>
        
        <p><strong>2. The Moon:</strong> The Moon has lower gravity, so its escape velocity is only 2.4 km/s. This allows gas molecules to escape into space easily. This is why the Moon has no atmosphere—it wasn't strong enough to hold onto its air!</p>
        
        <p><strong>3. Molecular Speed:</strong> Helium is a light, fast gas. On Earth, helium atoms often move faster than Earth's escape velocity, so they leak into space. Hydrogen too. Heavier gases like O2 and N2 obey the speed limit and stay here to keep us alive.</p>
        `,
        simulationType: "projectile",
        simulationDescription: `
        <h4 style="color: var(--accent);">🚀 Launch Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Launch the rocket at different speeds.<br><br>
        <strong>Observe:</strong> If v < Escape Velocity, gravity wins and it falls back. If v > Escape Velocity, it breaks the "chains" of gravity and leaves forever.
        </p>`
    },
    {
        name: "Kepler's Third Law",
        category: "Gravity",
        equation: "T² ∝ r³",
        explanation: "Planets farther from the sun take exponentially longer to orbit.",
        example: `
        <p><strong>1. The Cosmic Clock:</strong> Earth (1 AU distance) takes 1 year to orbit. Jupiter (5.2 AU) doesn't take 5 years—it takes 12 years! The further out you go, the slower the 'traffic' moves on the cosmic highway.</p>
        
        <p><strong>2. Geostationary Satellites:</strong> To keep a satellite hovering over the same spot on Earth, we need it to orbit exactly every 24 hours. Kepler's law tells us there is only ONE specific height (35,786 km) where T=24h. That's where all the TV satellites are parked.</p>
        
        <p><strong>3. Finding Exoplanets:</strong> Astronomers use this to weigh stars. By timing how fast a planet orbits (T) and measuring its distance (r), they can calculate the Mass of the host star. It's a scale that weighs light-years away.</p>
        `,
        simulationType: "circular",
        simulationDescription: `
        <h4 style="color: var(--accent);">🕰️ Orbital Period Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the orbital radius (distance from sun).<br><br>
        <strong>Observe:</strong> Distant planets move SLOWER. Mercury zips around in 88 days; Pluto takes 248 years. The "Solar System Year" gets exponentially longer as you go out.
        </p>`
    },
    {
        name: "Coulomb's Law",
        category: "Electricity",
        equation: "F = k(q₁q₂)/r²",
        explanation: "The force between two electric charges. Opposites attract, likes repel.",
        example: `
        <p><strong>1. Static Cling:</strong> Why does a balloon stick to your hair? You rubbed electrons off your hair onto the balloon. Now the balloon is negative, and your hair is positive. Coulomb's Law says they must attract. The force is strong enough to defy gravity!</p>
        
        <p><strong>2. Laser Printers:</strong> Inside a printer, a laser draws an image on a drum using static electricity. Toner powder (charged plastic) jumps onto the charged parts of the drum due to Coulomb attraction. Then it's melted onto the paper. You are printing with physics.</p>
        
        <p><strong>3. Lightning:</strong> Clouds build up massive static charge (q). The ground has an opposite charge. When the attractive force (F) becomes too strong for the air to resist, electrons rip through the sky to meet the ground. Zap! Use r²: staying far away is your best defense.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">⚡ Electrostatics Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Drag the charges closer. Switch to Attraction/Repulsion.<br><br>
        <strong>Observe:</strong> Like charges repel (push away). Opposites attract. The force gets massive when they are close (r is small). This force holds atoms together!
        </p>`
    },
    {
        name: "Electric Field",
        category: "Electricity",
        equation: "E = F/q",
        explanation: "An invisible field that surrounds every charge. It tells other charges how to move.",
        example: `
        <p><strong>1. Sharks:</strong> Sharks have special organs called Ampullae of Lorenzini that detect faint electric fields from fish muscles. They don't need to see the fish; they can 'feel' the electric ripple it makes in the water.</p>
        
        <p><strong>2. Power Lines:</strong> High-voltage lines create strong electric fields. If you hold a fluorescent tube near a transmission tower at night, it might glow faintly even without being plugged in. The field itself is pushing electrons inside the gas.</p>
        
        <p><strong>3. CRT TVs:</strong> Old tube TVs used electric fields to steer electron beams. By changing the field strength up/down and left/right, they painted pictures on the screen 60 times a second.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "charge",
        simulationDescription: `
        <h4 style="color: var(--accent);">🕸️ E-Field Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Move the mouse through the field.<br><br>
        <strong>Observe:</strong> The particles align with the invisible electric force field. They flow OUT from positive and IN to negative. The density of lines shows the strength.
        </p>`
    },
    {
        name: "Electric Potential",
        category: "Electricity",
        equation: "V = kQ/r",
        explanation: "Voltage. The 'pressure' that wants to push charges from one place to another.",
        example: `
        <p><strong>1. Birds on a Wire:</strong> Why don't birds get shocked? They are sitting on one wire, so both feet are at the same Potential (V). There is no difference in potential (Voltage drop) across their body, so no current flows. If they touched two wires... poof.</p>
        
        <p><strong>2. Spark Plugs:</strong> Your car engine needs a spark to burn fuel. The coil generates 20,000 Volts. This massive potential difference forces electricity to jump the gap, creating a hot plasma spark that ignites the gasoline.</p>
        
        <p><strong>3. Heart Defibrillators:</strong> When a heart stops, a defibrillator applies high voltage across the chest. This potential difference forces a massive current through the heart muscle, shocking it back into a rhythmic beat. 'Clear!'</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "charge",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔋 Voltage Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Observe the density of charge carriers.<br><br>
        <strong>Observe:</strong> Voltage is "Electric Pressure". High potential means charges are packed tight and want to explode away. Low potential gives them room to move.
        </p>`
    },
    {
        name: "Capacitance",
        category: "Electricity",
        equation: "C = Q/V",
        explanation: "A bucket for electricity. Storing charge to release it quickly later.",
        example: `
        <p><strong>1. Camera Flash:</strong> Batteries are too slow to light a xenon flash bulb. Instead, the battery slowly fills a Capacitor (bucket). When you take the pic, the capacitor dumps all its energy in 0.001 seconds. That's a flash.</p>
        
        <p><strong>2. Touchscreens:</strong> Your phone screen assumes it's a capacitor. When your finger (which conducts electricity) touches the glass, you steal a tiny bit of charge. The phone senses this change in Capacitance and knows exactly where you tapped.</p>
        
        <p><strong>3. Defibrillators (Again):</strong> That shock needs to be delivered fast. A battery can't push current that fast. A giant capacitor inside the machine stores the charge up slowly, then releases it all at once to restart the heart.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "charge",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔋 Capacitor Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Apply voltage to pile up charges.<br><br>
        <strong>Observe:</strong> Positive charges gather on one plate, negative on the other. They WANT to jump across but can't. This stored tension is energy waiting to be released (like a camera flash).
        </p>`
    },
    /* Ohm's Law Removed (Duplicate) */
    {
        name: "Power in Circuits",
        category: "Circuits",
        equation: "P = IV",
        explanation: "The rate at which electrical energy is converted into heat, light, or motion.",
        example: `
        <p><strong>1. Blow Dryers:</strong> Why do they use so much power (1500W)? They have to heat air instantly. To get 1500W from a 120V outlet, they draw huge Current (12.5 Amps). That's why they trip the breaker if you run the microwave at the same time.</p>
        
        <p><strong>2. Incandescent Bulbs:</strong> These are termed 'heaters that give off light'. A 100W bulb turns 95mW into heat and only 5W into light. That's why they burn your fingers. LEDs use only 10W for the same light because they don't waste power on heat.</p>
        
        <p><strong>3. Electric Cars:</strong> A Tesla P100D can accelerate like a rocket because its battery can deliver 450,000 Watts (600 HP) instantly. That's enough power to light up a small neighborhood, dumped into the wheels in seconds.</p>
        `,
        simulationType: "circuit",
        visualTheme: "simple",
        simulationDescription: `
        <h4 style="color: var(--accent);">💡 Power Lab: Energy Flow</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> This circuit visualizes the concept of electrical work. The moving dots represent charge carriers. Each dot carries a certain amount of "Potential Energy" (Voltage) from the battery. When they pass through the resistor, they dump this energy.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> If you increase the Voltage (V), each electron carries more energy punch. If you increase the Current (I), you are hitting the target with <em>more</em> electrons per second. Power (P) is simply the multiplication of these two: How hard you hit (V) times how often you hit (I).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This lab shows why high-power devices get hot. The energy doesn't disappear; it turns into heat (in a toaster) or light (in a bulb). The red resistor here symbolizes that energy conversion happening in real-time.
        </p>`
    },
    {
        name: "Resistors in Series",
        category: "Circuits",
        equation: "Req = R₁ + R₂",
        explanation: "Adding resistors in a line makes it harder for current to flow.",
        example: `
        <p><strong>1. Old Christmas Lights:</strong> In old sets, if one bulb burned out (broke the connection), the whole string went dark. The current had work through every single bulb in a line (Series). No path = No light.</p>
        
        <p><strong>2. Batteries in Remotes:</strong> Why do you line up batteries head-to-tail? You are putting them in series to add their voltages. Two 1.5V AA batteries make a 3V power source to run the chip.</p>
        
        <p><strong>3. Alarm Loops:</strong> Security systems use a long wire loop through every window sensor. If a burglar cuts the wire anywhere (adding infinite resistance), the current stops, and the alarm triggers.</p>
        `,
        simulationType: "circuit",
        visualTheme: "series",
        simulationDescription: `
        <h4 style="color: var(--accent);">🛤️ Series Circuit Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Look at the path the electrons must take. There is only ONE road. They leave the battery and must force their way through the first resistor (Top) AND the second resistor (Bottom) to get back home. This layout is called "Series."
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Notice how the flow is slow. By adding a second resistor in the same lane, you have doubled the total difficulty (Resistance). The battery (Voltage) is unchanged, so the Current (Speed) must drop. This is like adding a second toll booth on a single-lane bridge.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> In Series circuits, R_total = R1 + R2. If any part of this chain breaks, the flow stops completely. That's why modern houses are NOT wired this way; you wouldn't want the fridge to turn off just because a lightbulb blew out.
        </p>`
    },
    {
        name: "Resistors in Parallel",
        category: "Circuits",
        equation: "1/Req = 1/R₁ + 1/R₂",
        explanation: "Adding parallel paths makes it EASIER for current to flow. More lanes on the highway.",
        example: `
        <p><strong>1. House Wiring:</strong> Every outlet in your house is wired in parallel. Turning on the TV doesn't dim the lights. Each device gets the full 120 Volts, and they work independently. If one blows, the others stay on.</p>
        
        <p><strong>2. Car Headlights:</strong> If one headlight burns out, the other stays on. Why? Because they have separate paths to the battery (Parallel). Safety first!</p>
        
        <p><strong>3. Heart Veins:</strong> Your body grows new blood vessels (collateral circulation) if a main artery gets blocked. These 'parallel resistors' lower the resistance to blood flow, keeping the tissue alive despite the blockage.</p>
        `,
        simulationType: "circuit",
        visualTheme: "parallel",
        simulationDescription: `
        <h4 style="color: var(--accent);">🛣️ Parallel Circuit Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Notice that the circuit splits into two separate branches. The electrons have a choice: go through the middle path OR the right path. Both paths connect directly to the battery. This layout is called "Parallel."
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Watch the flow speed. It is FASTER than the series circuit. By adding a second path, you have effectively opened a "new lane on the highway." Even though you added more stuff (resistors), you made it <em>easier</em> for traffic to flow overall.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is counter-intuitive: Adding resistors DECREASES the total resistance. 1/R_total = 1/R1 + 1/R2. This is how your house is wired. Every time you plug in a new lamp, you open a new parallel path, allowing more total current to flow from the power plant.
        </p>`
    },
    {
        name: "Magnetic Force",
        category: "Magnetism",
        equation: "F = qvBsin(θ)",
        explanation: "A magnetic field only pushes a charge if it's moving.",
        example: `
        <p><strong>1. Northern Lights (Aurora):</strong> The Sun shoots charged particles at Earth. They spiral along Earth's magnetic field lines (Force!). When they hit the atmosphere at the poles, they crash into air molecules, creating beautiful green and purple curtains of light.</p>
        
        <p><strong>2. Particle Accelerators:</strong> The Large Hadron Collider uses giant magnets to steer protons around a 17-mile ring. The magnetic force bends their path. Without magnets, the particles would just fly in a straight line and punch a hole in the wall.</p>
        
        <p><strong>3. Railguns:</strong> The Navy is testing guns that use magnets, not gunpowder. They pump massive current through rails, creating a magnetic field that launches a projectile at Mach 7 (5,000 mph). Pure electric firepower.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🧲 Magnetic Force Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Throw a charge into the magnetic field.<br><br>
        <strong>Observe:</strong> The field pushes SIDEWAYS. It doesn't speed the particle up; it just turns it. This creates circular/spiral motion (like the Aurora Borealis).
        </p>`
    },
    {
        name: "Lorentz Force",
        category: "Magnetism",
        equation: "F = qE + qv × B",
        explanation: "The total force from electric and magnetic fields combined.",
        example: `
        <p><strong>1. Mass Spectrometers:</strong> CSI labs use this to identify unknown chemicals. They vaporize the sample and shoot it through a magnetic field. Heavy molecules turn slowly, light ones turn fast. The Lorentz force separates them like a prism separates rainbows.</p>
        
        <p><strong>2. Hall Effect Scnsors:</strong> Your phone knows when you close the flip cover (with a magnet in it). A sensor measures the Lorentz force on electrons inside a chip. When the magnet gets close, the force shifts the electrons, telling the phone to sleep.</p>
        
        <p><strong>3. Cyclotrons:</strong> Early atom smashers used both Electric fields (to speed up) and Magnetic fields (to turn). The combination allowed particles to spiral outward faster and faster until they smashed into a target.</p>
        `,
        simulationType: "vector_interaction",
        variables: { type: "repulsion" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🌀 Lorentz Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Combine Electric (push) and Magnetic (turn) fields.<br><br>
        <strong>Observe:</strong> This combination allows particle accelerators to steer and smash atoms. One force speeds it up; the other steers the car.
        </p>`
    },
    {
        name: "Magnetic Flux",
        category: "Magnetism",
        equation: "Φ = B · A",
        explanation: "How much 'magnetism' is passing through a loop of wire.",
        example: `
        <p><strong>1. Induction Stovetops:</strong> The stove has a coil, but no heat. It generates fluctuating magnetic flux. This flux passes through your iron pan, creating swirling currents (Eddy currents) inside the metal. The pan gets hot, but the glass cooktop stays cool!</p>
        
        <p><strong>2. Wireless Charging:</strong> Your phone charger creates a changing magnetic flux. Your phone has a coil on the back. The flux flows into your phone's coil, and physics turns it back into electricity to charge the battery. Magic.</p>
        
        <p><strong>3. Guitar Pickups:</strong> Electric guitars play nothing without this. A metal string vibrates near a magnet. This changes the magnetic flux through the pickup coil. The changing flux creates an electrical signal that goes to the amp. Rock and Roll is just Faraday's Law.</p>
        `,
        simulationType: "magnet",
        visualTheme: "field",
        simulationDescription: `
        <h4 style="color: var(--accent);">🧲 Flux Lab: Capturing the Field</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Imagine the magnetic field lines (the white loops) are rain falling from the sky. The 'Flux' is measuring how much rain creates through a hula hoop. The magnet creates the field, and the lines show its shape and direction.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> In a full physics engine, you would rotate a loop of wire in this field. If the loop faces the magnet, it catches maximum lines (Max Flux). If you turn it sideways, the lines miss it (Zero Flux). The strength of the magnet (B) and the size of the loop (A) determine the total count.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Flux is just a fancy word for "Flow through a surface." It's dot product: B · A. Understanding this shape is critical because <em>changing</em> this flux is what generates electricity (Faraday's Law).
        </p>`
    },
    {
        name: "Faraday's Law",
        category: "Magnetism",
        equation: "ε = -dΦ/dt",
        explanation: "Change the magnetic field, and you create electricity. This runs the world.",
        example: `
        <p><strong>1. Power Plants:</strong> Coal, Nuclear, Hydro, Wind—they are all just different ways to spin a magnet near a wire. Spinning the magnet changes the flux (dΦ/dt) massively fast, inducing voltage (ε) that lights up your city.</p>
        
        <p><strong>2. Credit Card Strips:</strong> When you swipe a card, you drag the magnetized strip past a tiny coil reader. The moving magnets induce a tiny voltage signal that carries your account number. Tap-to-pay works the same way (via induction).</p>
        
        <p><strong>3. Regenerative Braking:</strong> When a Tesla slows down, the motor acts as a generator. The car's momentum spins the motor, creating electricity that goes back into the battery. You are turning speed back into fuel!</p>
        `,
        simulationType: "magnet",
        visualTheme: "coil",
        simulationDescription: `
        <h4 style="color: var(--accent);">⚡ Induction Lab: The Generator</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> This is the most important experiment in history. You have a coil of copper wire (left) and a moving magnet (right/center). Notice the lightbulb attached to the wire. There is no battery! The only source of energy is movement.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Watch the magnet move in and out of the coil. The lightbulb GLOWS only when the magnet is <em>moving</em>. If the magnet sits still inside the coil? Darkness. The faster it moves, the brighter the light.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Faraday discovered that a <em>changing</em> magnetic field (dΦ/dt) creates an electric field. The negative sign in the equation (Lenz's Law) means the coil fights back—it creates its own magnetic field to try and stop the magnet. You have to put mechanical work IN to get electrical work OUT.
        </p>`
    },
    {
        name: "Wave Speed",
        category: "Waves",
        equation: "v = fλ",
        explanation: "Speed determines how frequency and wavelength trade off. High pitch = Short wave.",
        example: `
        <p><strong>1. Helium Voice:</strong> Sound travels 3x faster in Helium than air (v increases). Since your throat size (λ) stays the same, the frequency (f) must shoot up to balance the equation. Result: You sound like a chipmunk.</p>
        
        <p><strong>2. Lightning vs Thunder:</strong> Light travels a million times faster than sound. You see the flash instantly (high v), but the thunder takes 5 seconds to travel a mile (low v). Dividing the time by 5 gives you the distance in miles.</p>
        
        <p><strong>3. AM vs FM Radio:</strong> AM radio has huge wavelengths (hundreds of meters, low f). They can bend around hills. FM radio has short wavelengths (3 meters, high f). They get blocked by buildings but carry better quality music.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌊 Wave Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change Frequency and Amplitude.<br><br>
        <strong>Observe:</strong> High Frequency = Short Wavelength (bunched up). Low Frequency = Long Wavelength. The speed depends on the <em>medium</em> (water), not the wave itself.
        </p>`
    },
    {
        name: "Period vs Frequency",
        category: "Waves",
        equation: "T = 1/f",
        explanation: "They are opposites. Short time means frequent hits.",
        example: `
        <p><strong>1. Computer Processors:</strong> A 3 GHz CPU (Frequency) ticks 3 billion times a second. The Period (time between ticks) is 0.3 nanoseconds. That's the tiny window of time the computer has to do math before the next tick.</p>
        
        <p><strong>2. Heart Rate:</strong> If your heart beats at 60 BPM (Frequency = 1 Hz), the Period is 1 second. If you exercise and hit 120 BPM (2 Hz), the Period drops to 0.5 seconds. The faster the beat, the shorter the rest.</p>
        
        <p><strong>3. Frames Per Second:</strong> A 60 FPS video shows a new image every 0.016 seconds (Period). Gamers want 144 FPS because it lowers the Period to 0.007 seconds, making the game feel smoother and more responsive.</p>
        `,
        simulationType: "pendulum",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">⏱️ Oscillator Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Shorten the rope length.<br><br>
        <strong>Observe:</strong> Short rope = Fast Swing (High Freq, Small Period). Long rope = Slow Swing (Low Freq, Large Period). Time and Frequency are inverse twins.
        </p>`
    },
    {
        name: "Snell's Law",
        category: "Optics",
        equation: "n₁sin(θ₁) = n₂sin(θ₂)",
        explanation: "Light bends when it enters a new material. The 'broken straw' effect.",
        example: `
        <p><strong>1. Glasses & Contacts:</strong> Lenses work because glass slows light down (high n). The curve of the lens bends parallel light rays to focus them exactly on your retina. Without Snell's Law, the world would be a blur.</p>
        
        <p><strong>2. Spearfishing:</strong> If you see a fish in the water, don't aim at it! The light bent as it left the water, making the fish look higher than it actually is. You have to aim <em>below</em> the image to hit the real fish.</p>
        
        <p><strong>3. Fiber Optics:</strong> Internet cables use 'Total Internal Reflection'. The light hits the inside wall of the glass fiber at such a shallow angle that it can't bend out (Snell's Law breaks). It bounces down the cable for miles without leaking out.</p>
        `,
        simulationType: "optics_refraction",
        visualTheme: "light",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔦 Refraction Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Drag the light source. Change the material (Water/Glass).<br><br>
        <strong>Observe:</strong> Light bends toward the "normal" line when entering a thicker material (Air -> Water). It bends away when leaving. This bending is what makes lenses work.
        </p>`
    },
    {
        name: "Lens Equation",
        category: "Optics",
        equation: "1/f = 1/d₀ + 1/di",
        explanation: "How lenses focus light to form images.",
        example: `
        <p><strong>1. Human Eye:</strong> Your eye is a lens. To see close up, muscles squeeze the lens to change its focal length (f). As you age, the lens gets stiff and can't change shape easily, which is why older people need reading glasses to help focus (fix d_i) on the retina.</p>
        
        <p><strong>2. Cameras:</strong> When you twist the lens barrel on a DSLR, you are physically moving the lens (changing d_i) to get the image in focus on the sensor. Telephoto lenses have a huge focal length (f), allowing them to zoom in on distant objects.</p>
        
        <p><strong>3. Burning Ants:</strong> A magnifying glass takes parallel rays from the sun (object at infinity) and focuses them to a single tiny point. The energy density at that focal point is so high it can ignite paper (or fry bugs, you monster).</p>
        `,
        simulationType: "optics_refraction",
        visualTheme: "light",
        simulationDescription: `
        <h4 style="color: var(--accent);">📷 Focal Point Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Move your object (candle) back and forth.<br><br>
        <strong>Observe:</strong> Real images (inverted) form when the object is far. If you get too close (inside "f"), the image becomes Virtual and magnified (like a magnifying glass).
        </p>`
    },
    {
        name: "Magnification",
        category: "Optics",
        equation: "m = -di/d₀",
        explanation: "How much bigger (or upside down) the image looks.",
        example: `
        <p><strong>1. Makeup Mirrors:</strong> Concave mirrors have a magnification > 1 when you are close. This makes your face look huge so you can apply eyeliner perfectly. The image is virtual and upright. Walk further back, and suddenly you flip upside down!</p>
        
        <p><strong>2. Movie Projectors:</strong> A projector takes a tiny image on a film strip (d_o is small) and throws it onto a huge screen far away (d_i is huge). The magnification is massive (hundreds of times taller), letting an audience see what was on a 35mm slide.</p>
        
        <p><strong>3. Telescopes:</strong> A telescope uses two lenses. The first creates a small real image, and the eyepiece acts as formatted magnifying glass to look at that image. The result is a massive virtual image of the moon that looks like you could touch it.</p>
        `,
        simulationType: "optics_refraction",
        visualTheme: "light",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔬 Zoom Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Compare the object height vs image height.<br><br>
        <strong>Observe:</strong> Magnification depends on distance. Projectors work because the screen is Far (di) and the film is Close (do). Big di / Small do = Big Image.
        </p>`
    },
    /* Photon Energy Removed (Duplicate at bottom) */
    {
        name: "De Broglie Wavelength",
        category: "Quantum",
        equation: "λ = h/p",
        explanation: "Matter is also a wave. You are a wave right now.",
        example: `
        <p><strong>1. Electron Microscopes:</strong> We can't see atoms with light because light waves are too big (400nm) to fit between atoms. Electrons have a tiny wavelength (0.001nm). We use electron beams to 'feel' the texture of viruses and DNA with atomic precision.</p>
        
        <p><strong>2. Why You Don't Phase Through Walls:</strong> Technically, your body has a wavelength. But because your mass (m) is huge, your wavelength is infinitesimal (10^-35 meters). You are too 'solid' to diffract through a doorway like a sound wave does.</p>
        
        <p><strong>3. Buckyballs:</strong> Scientists fired C60 molecules (soccer-ball shaped carbon) at a slit. Even though they are large physical objects, they created an interference pattern like waves. It proved that big molecules can be in two places at once!</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌊 Matter Wave Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Increase the particle's speed or mass.<br><br>
        <strong>Observe:</strong> As momentum (p) goes up, the wavelength (λ) gets tiny. Fast, heavy things act like particles (bullets). Slow, light things act like waves (ghosts).
        </p>`
    },
    /* Heisenberg Uncertainty Removed (Duplicate at bottom) */
    /* Mass-Energy Equivalence Removed (Duplicate at bottom) */
    {
        name: "Time Dilation",
        category: "Relativity",
        equation: "t' = t/√(1-v²/c²)",
        explanation: "Moving clocks run slower. Travel fast enough, and you can travel to the future.",
        example: `
        <p><strong>1. GPS Satellites:</strong> They move at 14,000 km/h. Their onboard atomic clocks tick slower than clocks on Earth by 7 microseconds a day. If engineers didn't fix this with software, your Google Maps would be off by miles!</p>
        
        <p><strong>2. Using Muons:</strong> Cosmic rays create particles called Muons high in the sky. They die in 2 microseconds. They shouldn't live long enough to hit the ground. But because they fall at 99% light speed, their time slows down, allowing them to survive the trip to Earth.</p>
        
        <p><strong>3. Planet of the Apes:</strong> If you hop in a spaceship and fly at 99.9% light speed to Alpha Centauri and back, the trip might take 10 years for you. But on Earth, 100 years have passed. You return to a future where everyone you knew is gone.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">⏳ Time Warp Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Accelerate the rocket close to constant 'c'.<br><br>
        <strong>Observe:</strong> As v approaches c, the moving clock slows down compared to the stationary clock. At light speed, time would stop completely.
        </p>`
    },
    {
        name: "Length Contraction",
        category: "Relativity",
        equation: "L' = L√(1-v²/c²)",
        explanation: "Moving objects physically shrink in the direction of motion.",
        example: `
        <p><strong>1. The Barn Paradox:</strong> If you run fast enough holding a 20ft ladder, you could fit it entirely inside a 10ft barn for specific instant. To an observer, the ladder shrinks. To you, the barn shrinks. Relativity is weird.</p>
        
        <p><strong>2. Particle Colliders:</strong> Gold ions at RHIC are smashed together near light speed. At that speed, they are no longer spheres—they squash into flat pancakes (length contraction). This changes how they collide and explode into quark soup.</p>
        
        <p><strong>3. Heavy Electrons:</strong> In old CRT tubes, electrons moved fast enough for this to matter. Designers had to account for relativistic effects, or the picture would be distorted because the magnets wouldn't bend the 'heavier/shorter' electrons correctly.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">📏 Shrink Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Speed up the object.<br><br>
        <strong>Observe:</strong> Space itself compresses. To the fast traveler, the universe gets shorter. Distances shrink, which is the only reason they can travel light-years in a lifetime.
        </p>`
    },
    {
        name: "Ideal Gas Law",
        category: "Thermo",
        equation: "PV = nRT",
        explanation: "Pressure, Volume, and Temperature are all linked.",
        example: `
        <p><strong>1. Car Tires:</strong> Why does your tire pressure light come on in winter? The volume (V) of the tire is constant. When temperature (T) drops, Pressure (P) must drop to balance the equation. Your tires aren't leaking; they're just cold!</p>
        
        <p><strong>2. Popcorn:</strong> A kernel has water inside. As you heat it (T goes up), the water turns to steam, and pressure (P) builds up inside the shell. Eventually, P gets so high the shell explodes. Pop!</p>
        
        <p><strong>3. Scuba Diving:</strong> Don't hold your breath while surfacing! As you swim up, water pressure drops. The air in your lungs (Gas) wants to expand in Volume (V). If you don't exhale, your lungs could pop like a balloon. Physics can kill you.</p>
        `,
        simulationType: "spring",
        simulationDescription: `
        <h4 style="color: var(--accent);">🎈 Gas Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Compress the piston (Volume) or heat it (Temp).<br><br>
        <strong>Observe:</strong> Squeezing space makes atoms hit walls harder (Pressure). Heating them makes them hit harder too. PV = nRT is the rulebook for engines.
        </p>`
    },
    {
        name: "First Law of Thermo",
        category: "Thermo",
        equation: "ΔU = Q - W",
        explanation: "Energy cannot be created or destroyed, only changed.",
        example: `
        <p><strong>1. Dieting:</strong> Your body is a thermodynamic system. ΔU (Change in fat) = Q (Food energy in) - W (Exercise energy out). If Q > W, you gain weight. Physics guarantees it. No magic pill can violate the First Law.</p>
        
        <p><strong>2. Steam Engines:</strong> Heat (Q) from burning coal enters the boiler. The steam expands, doing Work (W) to push a piston. The internal energy (ΔU) drops as the steam cools. We turn heat into train motion.</p>
        
        <p><strong>3. Bicycle Pumps:</strong> Feel the hose after pumping a tire. It's hot! You aren't heating it with fire; you are doing mechanical Work (W) on the air. That work compresses the gas and increases its Internal Energy (ΔU), which manifests as heat.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔥 Engine Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Add Heat (Q) or do Work (W).<br><br>
        <strong>Observe:</strong> You can't win. You can't separate Heat from Work. Energy just shuffles between "Hot" and "Moving". This law forbids perpetual motion machines.
        </p>`
    },
    {
        name: "Specific Heat",
        category: "Thermo",
        equation: "Q = mcΔT",
        explanation: "Some things are harder to heat up than others.",
        example: `
        <p><strong>1. Beach Sand vs. Water:</strong> At noon, the sand burns your feet, but the water is cool. The sun hits them both equally. Sand has low Specific Heat (heats fast). Water has high Specific Heat (heats slow). Water is the world's best coolant.</p>
        
        <p><strong>2. Pizza Burn:</strong> You bite a pizza. The crust is fine, but the sauce burns the roof of your mouth like lava. The tomato sauce is mostly water (high c), holding way more heat energy than the dry crust (low c) at the same temperature.</p>
        
        <p><strong>3. Car Radiators:</strong> We use water (mixed with antifreeze) to cool engines because it can absorb massive amounts of heat without boiling locally. If we used oil or air, the engine would melt.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌡️ Heating Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Heat up Water vs. Metal.<br><br>
        <strong>Observe:</strong> Water is stubborn. It takes huge energy to change its temp (High "c"). Metal changes fast (Low "c"). This suggests why islands have stable weather.
        </p>`
    },
    {
        name: "Latent Heat",
        category: "Thermo",
        equation: "Q = mL",
        explanation: "Hidden energy needed to change state (melt/boil) without changing temp.",
        example: `
        <p><strong>1. Sweating:</strong> Why do we sweat? Evaporating water requires massive energy (Latent Heat of Vaporization). The water steals this heat from your skin to turn into gas, cooling you down. It's built-in AC.</p>
        
        <p><strong>2. Ice Cubes:</strong> Ice in a drink stays at 0°C until it completely melts. Even though it's absorbing heat from the soda, that energy is being used to break crystal bonds (Q=mL), not to raise the temperature. Your drink stays cold until the last shard is gone.</p>
        
        <p><strong>3. Steam Burns:</strong> Steam at 100°C burns worse than water at 100°C. Why? Steam delivers the heat of temp change PLUS the massive Latent Heat it releases when it condenses back into water on your skin. Double damage.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">🧊 Phase Change Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Melt the ice block.<br><br>
        <strong>Observe:</strong> The temperature STOPS rising while it melts. All the energy goes into breaking bonds (Latent Heat). Temp only rises again once it's liquid.
        </p>`
    },
    {
        name: "Thermal Expansion",
        category: "Thermo",
        equation: "ΔL = αL₀ΔT",
        explanation: "Things get bigger when they get hot.",
        example: `
        <p><strong>1. Sidewalk Cracks:</strong> Concrete expands in summer. Builders put gaps (expansion joints) in bridges and sidewalks. Without them, the road would buckle and shatter on a hot July day. The "click-clack" of trains is the wheels hitting these intentional gaps.</p>
        
        <p><strong>2. Stuck Jars:</strong> Can't open a jar? Run the metal lid under hot water. Metal expands more than glass (higher α). The lid gets slightly bigger, loosening its grip on the glass threads. Pop!</p>
        
        <p><strong>3. The Eiffel Tower:</strong> In summer, the iron tower grows about 15cm (6 inches) taller due to thermal expansion. It also leans slightly away from the sun because the sunny side expands more than the shady side.</p>
        `,
        simulationType: "spring",
        simulationDescription: `
        <h4 style="color: var(--accent);">🛤️ Expansion Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Heat the metal bar.<br><br>
        <strong>Observe:</strong> Atoms vibrate harder and push their neighbors away. The whole object grows (ΔL). This is why bridges have gaps.
        </p>`
    },
    {
        name: "Doppler Effect",
        category: "Waves",
        equation: "f' = f((v+vo)/(v-vs))",
        explanation: "Why a siren sounds higher when coming towards you and lower when going away.",
        example: `
        <p><strong>1. Ambulance Siren:</strong> As the ambulance speeds toward you, it squashes the sound waves in front of it (shorter λ, higher f). You hear a squeal. As it passes, it stretches the waves behind it (longer λ, lower f). You hear a low groan. Neee-Nooo.</p>
        
        <p><strong>2. Weather Radar:</strong> Doppler Radar bounces radio waves off rain clouds. If the rain is moving toward the radar (storm approaching), the frequency shifts up. This tells meteorologists not just where the storm is, but how fast it's spinning (tornado detection).</p>
        
        <p><strong>3. Speeding Tickets:</strong> Police radar guns shoot a radio wave at your car. It bounces back. If you are speeding toward the cop, the return wave has a higher frequency. The gun calculates the shift and displays your speed. Busted by physics.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🚑 Siren Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Move the source (Ambulance).<br><br>
        <strong>Observe:</strong> Waves bunch up in front (High Pitch) and stretch out behind (Low Pitch). Movement changes the <em>perceived</em> frequency. Neeee-Nooo!
        </p>`
    },
    {
        name: "Sound Intensity",
        category: "Waves",
        equation: "I = P/4πr²",
        explanation: "Loudness drops off quickly with distance because the sound spreads over a sphere.",
        example: `
        <p><strong>1. Front Row Seats:</strong> At a concert, being 10ft from the speaker is deafening. Move back to 20ft (2x distance), and the intensity drops by 4x (r²). Move to 100ft (10x distance), and it drops by 100x. The inverse square law saves your ears.</p>
        
        <p><strong>2. Warning Sirens:</strong> Civil defense sirens need massive power because they have to cover a whole city. To be heard 5 miles away, the source intensity has to be dangerously loud—loud enough to liquefy interal organs if you stood right next to it.</p>
        
        <p><strong>3. Whispering Gallery:</strong> Some domes (like St. Paul's Cathedral) focus sound. Instead of spreading out as 4πr², the sound reflects along the curved wall. You can hear a whisper from across the room because the intensity doesn't dissipate normally.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔊 Loudness Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Walk away from the speaker.<br><br>
        <strong>Observe:</strong> The wave spreads over a sphere (Bubble). The farther you are, the "thinner" the energy is spread. 2x distance = 1/4th the loudness.
        </p>`
    },
    {
        name: "Decibels",
        category: "Waves",
        equation: "β = 10log(I/I₀)",
        explanation: "Our ears hear logarithmically. 10 times more power = 2 times as loud.",
        example: `
        <p><strong>1. The Library vs. The Club:</strong> A library is 40 dB. A nightclub is 100 dB. The difference is 60 dB. That doesn't mean the club is 2.5x louder. It means the club has 1,000,000 times more sound energy intensity! Log scales are deceptive.</p>
        
        <p><strong>2. Hearing Damage:</strong> Your ears can handle a trillion-fold range of intensities. But above 85 dB, the hair cells in your cochlea start to break. A gunshot (140 dB) can cause instant, permanent damage because the pressure wave physically snaps those cells.</p>
        
        <p><strong>3. Audio Mixing:</strong> Music producers use dB meters. If they want a guitar to sound "twice as loud," they don't double the volume slider. They have to bump it up by about +10 dB. Our brains perceive volume in ratios, not absolute numbers.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🎚️ Log Scale Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Crank the volume slider.<br><br>
        <strong>Observe:</strong> To make it sound "twice as loud", you need 10x the power. Your ears are built to handle whispers AND jet engines.
        </p>`
    },
    {
        name: "Malus's Law",
        category: "Optics",
        equation: "I = I₀cos²(θ)",
        explanation: "How polarizing filters block light. Rotate to fade to black.",
        example: `
        <p><strong>1. 3D Glasses:</strong> IMAX movies use polarized light. The left eye lens is vertical; the right is horizontal. Malus's law ensures the left eye sees only the left image (θ=0, cos²0=1) and blocks the right image (θ=90, cos²90=0). Your brain combines them into 3D.</p>
        
        <p><strong>2. LCD Screens:</strong> Your monitor has millions of tiny liquid crystals. When voltage is applied, they twist, rotating the polarization of light. A fixed polarizer then blocks or passes the light based on the twist angle (θ), creating black or white pixels.</p>
        
        <p><strong>3. Sunglasses:</strong> Glare from the road is horizontally polarized. Polarized sunglasses are vertical filters. Since θ=90°, the glare intensity (I) drops to zero, but normal light (random θ) gets through at 50% brightness. Safer driving!</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🕶️ Polarizer Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Rotate the filter angle.<br><br>
        <strong>Observe:</strong> At 0°, light passes. At 90°, it's pitch black. This simple "picket fence" filtering is the secret behind your LCD screen and 3D movies.
        </p>`
    },
    {
        name: "Brewster's Angle",
        category: "Optics",
        equation: "tan(θp) = n₂/n₁",
        explanation: "The magic angle where reflected light becomes perfectly polarized.",
        example: `
        <p><strong>1. Photography:</strong> Photographers use polarizing filters to shoot through windows. By standing at Brewster's Angle (~56° for glass), the reflection from the glass is perfectly polarized, so the filter can block 100% of it, making the glass look invisible.</p>
        
        <p><strong>2. Skiing Goggles:</strong> Snow is blindingly bright because it reflects the sun. At certain angles, this reflection is polarized. Good goggles filter this out, letting you see the texture of the snow instead of just a whiteout glare.</p>
        
        <p><strong>3. Laser Windows:</strong> In high-power lasers, windows are tilted at exactly Brewster's Angle. This ensures that 100% of the light passes through without any reflection loss. Even 1% reflection in a mega-watt laser would melt the glass instantly.</p>
        `,
        simulationType: "optics_refraction",
        visualTheme: "light",
        simulationDescription: `
        <h4 style="color: var(--accent);">✨ Glare Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the angle of the light beam.<br><br>
        <strong>Observe:</strong> At one specific angle (Brewster's), the reflected light is perfectly polarized. This is why sunglasses can block glare from a lake without blocking everything else.
        </p>`
    },
    {
        name: "Diffraction Grating",
        category: "Optics",
        equation: "dsin(θ) = mλ",
        explanation: "Breaking light into rainbows using thousands of tiny scratches.",
        example: `
        <p><strong>1. The Back of a CD:</strong> Look at a DVD. The rainbow tracks are not painted on. The tiny data grooves act as a diffraction grating. White light hits them and spreads out, with red light (long λ) bending more than blue light (short λ).</p>
        
        <p><strong>2. Analyzing Stars:</strong> Astronomers put gratings on telescopes. By spreading starlight into a spectrum, they can see dark lines (missing colors). These lines tell them exactly what gases (Hydrogen, Helium) are burning in a star a billion light-years away.</p>
        
        <p><strong>3. Holograms:</strong> That credit card bird is a complex diffraction grating stamped into foil. It bounces light in very specific ways to reconstruct a 3D image wavefront. It's security through advanced optics.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌈 Rainbow Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the spacing of the slits.<br><br>
        <strong>Observe:</strong> Light spreads out. Red bends MORE than Blue. This is how we know what stars are made of—by splitting their light into fingerprints.
        </p>`
    },
    {
        name: "Rydberg Formula",
        category: "Quantum",
        equation: "1/λ = R(1/n₁² - 1/n₂²)",
        explanation: "Predicts the exact colors of light emitted by energized Hydrogen.",
        example: `
        <p><strong>1. Neon Signs:</strong> A neon tube contains gas at low pressure. High voltage excites electrons to jump to higher orbits (n2). When they fall back down (to n1), they emit a specific photon. Neon emits red; Argon emits blue. It's quantum jumping you can see.</p>
        
        <p><strong>2. Identifying Elements:</strong> Every element has a unique 'Rydberg' fingerprint because its electron energy levels are unique. This is how we know the universe is mostly Hydrogen—we see this specific spectral series everywhere we look in space.</p>
        
        <p><strong>3. Fireworks:</strong> Different salts burn with different colors. Strontium burns red; Copper burns green. The heat excites electrons, and they fall back down according to discrete quantum rules (similar to Rydberg), releasing photons of specific wavelengths.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">⚛️ Quantum Jump Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Make the electron jump to a high energy level.<br><br>
        <strong>Observe:</strong> When it falls back down, it emits a photon. The color depends on the drop height. Big drop = Blue Light. Small drop = Red Light.
        </p>`
    },
    {
        name: "Bohr Radius",
        category: "Quantum",
        equation: "r = n²ℏ²/kme²",
        explanation: "The smallest possible orbit for an electron. The size of an atom.",
        example: `
        <p><strong>1. Why Matter Has Volume:</strong> Electrons can't crash into the nucleus. This formula sets a minimum 'standoff distance' (0.53 Angstroms). This quantum barrier is why atoms are 99.9% empty space but still feel hard to the touch.</p>
        
        <p><strong>2. Chemistry:</strong> Chemical bonds happen when electron orbits overlap. The Bohr radius determines how close two atoms can get before they bond or repel. It sets the scale for all molecular structures, from water to DNA.</p>
        
        <p><strong>3. Rydberg Atoms:</strong> If you excite an electron to n=100, the radius grows by n² (10,000 times!). These giant 'Rydberg Atoms' are as big as bacteria. Scientists use them to study quantum mechanics on a 'macroscopic' scale.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔬 Atom Size Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Increase the 'n' level.<br><br>
        <strong>Observe:</strong> The atom grows explosively (n²). At n=1, it's tiny. At n=10, it's huge. This cushion of electron clouds is what prevents you from falling through the floor.
        </p>`
    },
    {
        name: "Compton Scattering",
        category: "Quantum",
        equation: "Δλ = h/mc(1-cosθ)",
        explanation: "Light bouncing off an electron loses energy and changes color.",
        example: `
        <p><strong>1. Proof of Particles:</strong> Before Compton, people thought light was just a wave. Waves don't bounce off particles like billiard balls. This experiment proved that photons calculate momentum and collide like solid objects. It crowned the particle theory of light.</p>
        
        <p><strong>2. X-Ray Imaging:</strong> In medical X-rays, Compton scattering is a nuisance. It causes the X-rays to scatter in random directions inside the body, fogging the film and reducing contrast. Lead grids are used to absorb these scattered photons.</p>
        
        <p><strong>3. Gamma Ray Telescopes:</strong> Astronomers use this to detect high-energy gamma rays from black holes. By measuring the angle of the scattered photon and the recoil electron, they can track exactly where in the sky the gamma ray came from.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">🎱 Photon Billiards Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Collide a photon with an electron.<br><br>
        <strong>Observe:</strong> The photon hits the electron and bounces off. It loses energy (turns redder), and the electron goes flying. Light acts like a solid ball here!
        </p>`
    },
    {
        name: "Schrodinger Equation",
        category: "Quantum",
        equation: "Hψ = Eψ",
        explanation: "The master equation of Quantum Mechanics. How the probability wave moves in time.",
        example: `
        <p><strong>1. Quantum Tunneling:</strong> According to this equation, a particle's wave function (ψ) can extend <em>through</em> a solid wall. There is a non-zero probability it will just appear on the other side. This is how Flash Memory (USB drives) works—electrons tunnel onto the storage gate.</p>
        
        <p><strong>2. The Sun (Again):</strong> Protons in the sun repel each other. They shouldn't get close enough to fuse. But Schrodinger's equation allows them to tunnel through the Coulomb barrier. Without this quantum ghosting, the sun wouldn't shine, and we wouldn't exist.</p>
        
        <p><strong>3. Schrödinger's Cat:</strong> The equation says a system stays in a 'superposition' (both dead and alive) until measured. While the cat is a thought experiment, quantum computers use this for real. 'Qubits' are 0 and 1 at the same time, computing parallel universes of math.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌊 Probability Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Contain the wave in a box.<br><br>
        <strong>Observe:</strong> The particle isn't a dot; it's a smear of probability. Where the wave is high, the particle is <em>likely</em> to be found. It can even leak through walls (Tunneling)!
        </p>`
    },
    {
        name: "Planck's Law",
        category: "Quantum",
        equation: "B(T) = (2hv³/c²)/(e^(hv/kT)-1)",
        explanation: "Calculates the exact color spectrum of a glowing object based on temperature.",
        example: `
        <p><strong>1. The UV Catastrophe:</strong> Classic physics predicted that a toaster should emit infinite UV rays and blind you. Planck solved this by assuming energy comes in chunks (quanta). This formula started the quantum revolution. It perfectly matches reality.</p>
        
        <p><strong>2. Cosmic Microwave Background:</strong> The afterglow of the Big Bang fills the universe. If you measure its spectrum, it fits Planck's Law perfectly for a temperature of 2.7 Kelvin. It is the most perfect blackbody curve ever observed in nature.</p>
        
        <p><strong>3. Thermal Cameras:</strong> These cameras measure the infrared radiation B(T) emitted by objects. By reversing Planck's law, the camera calculates the Temperature (T) of your forehead or a leaking window from a distance.</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔥 Blackbody Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Heat up the object.<br><br>
        <strong>Observe:</strong> The curve shifts. Hotter = More total light (Area up) AND bluer color (Peak left). This mathematical curve is the fingerprint of temperature itself.
        </p>`
    },
    {
        name: "Stefan-Boltzmann Law",
        category: "Thermo",
        equation: "P = σAT⁴",
        explanation: "Hot things radiate power. Double the temp, get 16x the power!",
        example: `
        <p><strong>1. The Sun's Power:</strong> The sun's surface is 5800K. Using this law, we can calculate strictly how much energy it blasts into space (3.8 x 10^26 Watts). Even though Earth catches only a tiny fraction, it's enough to drive all weather and life.</p>
        
        <p><strong>2. Night Vision:</strong> You constantly radiate infrared power (~100 Watts, like a light bulb) because you are warmer than absolute zero. Soldiers use this law to spot the heat signature of a person against a cool background at night.</p>
        
        <p><strong>3. Global Warming:</strong> Earth absorbs sunlight and re-radiates it as IR heat (P). Greenhouse gases block this outgoing P. If P_in > P_out, the planet's Temperature (T) must rise to increase emission and restore balance.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">☀️ Radiation Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Increase Temperature slightly.<br><br>
        <strong>Observe:</strong> Power output explodes! (T to the power of 4). A small temp increase creates a massive flash of energy. This is why the sun is so incredibly bright.
        </p>`
    },
    {
        name: "Wien's Displacement",
        category: "Thermo",
        equation: "λmaxT = b",
        explanation: "Hotter things glow bluer. Cooler things glow redder.",
        example: `
        <p><strong>1. Star Colors:</strong> Betelgeuse is red (cool, 3000K). Rigel is blue (hot, 12000K). Our Sun is yellow-white (medium field, 5800K). Astronomers don't need a thermometer; they just look at the color (λmax) to know the temperature.</p>
        
        <p><strong>2. Welding Arcs:</strong> A welding arc is so hot (6000K+) that its peak wavelength shifts into the Ultraviolet. That's why welders need UV-blocking masks. The light they see is bright, but the invisible UV (blue-shifted) is what burns their retinas.</p>
        
        <p><strong>3. Human Glow:</strong> You are about 310 Kelvin. According to Wien's Law, your peak radiation is at 9,300 nanometers (Infrared). We are all 'glowing' brightly, just in a color our eyes aren't evolved to see.</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌈 Color Temp Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Make the star hotter.<br><br>
        <strong>Observe:</strong> The peak color shifts Left. Red -> Yellow -> Blue. This is why "blue hot" is hotter than "red hot".
        </p>`
    },
    {
        name: "Hubble's Law",
        category: "Cosmology",
        equation: "v = H₀d",
        explanation: "The universe is expanding. The farther a galaxy is, the faster it runs away.",
        example: `
        <p><strong>1. The Big Bang:</strong> If everything is flying apart (v > 0), then playing the movie backward means everything was once at a single point. Hubble's constant (H₀) tells us exactly how long ago that was: 13.8 billion years.</p>
        
        <p><strong>2. Redshift:</strong> We can't use a speedometer on galaxies. We measure how much their light is stretched (Redshift). This gives us velocity (v). Then, using Hubble's Law, we instantly know their distance (d) from Earth.</p>
        
        <p><strong>3. Dark Energy:</strong> Recently, we found that 'v' is increasing faster than expected for distant galaxies. The expansion is accelerating! A mysterious force (Dark Energy) is pushing the universe apart faster than gravity can pull it together.</p>
        `,
        simulationType: "projectile",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌌 Expansion Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Run the Big Bang simulation.<br><br>
        <strong>Observe:</strong> Every galaxy moves away from every other galaxy. The farther ones move faster. There is no "center" to the expansion; space itself is stretching.
        </p>`
    },
    {
        name: "Schwarzschild Radius",
        category: "Cosmology",
        equation: "Rs = 2GM/c²",
        explanation: "The size of the 'Event Horizon'. Shrink any mass smaller than this, and it becomes a Black Hole.",
        example: `
        <p><strong>1. Earth as a Black Hole:</strong> If you crushed the entire Earth into a marble about 9mm wide (Rs), it would become a black hole. Its gravity at that size would be so intense that light couldn't escape. Don't try this at home.</p>
        
        <p><strong>2. Supermassive Holes:</strong> At the center of our galaxy lies Sagittarius A*, a hole with 4 million solar masses. Its Schwarzschild radius matches the orbit of Mercury. Anything crossing that line is deleted from the observable universe forever.</p>
        
        <p><strong>3. Interstellar (Movie):</strong> The black hole 'Gargantua' was scientifically accurate. The glowing ring is the 'accretion disk' spiraling just outside the Schwarzschild Radius. The black sphere in the middle is the shadow of the event horizon itself.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "gravity",
        simulationDescription: `
        <h4 style="color: var(--accent);">⚫ Black Hole Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Add mass to the singularity.<br><br>
        <strong>Observe:</strong> The Event Horizon grows. Light passing too close gets sucked in. Light passing further away gets bent (Gravitational Lensing).
        </p>`
    },
    {
        name: "Bernoulli's Equation",
        category: "Fluids",
        equation: "P + ½ρv² + ρgh = C",
        explanation: "Fast-moving fluid has low pressure. This is how planes fly.",
        example: `
        <p><strong>1. Airplane Wings:</strong> Wings are curved on top. Air travels faster over the curve (high v) than below. Bernoulli says high speed = low pressure. The higher pressure below pushes up against the low pressure above. Lift!</p>
        
        <p><strong>2. Curveballs:</strong> A pitcher spins the baseball. The spin drags air faster on one side of the ball. This creates a pressure difference (Bernoulli again) that pushes the ball sideways, tricking the batter. It's aerodynamic sorcery.</p>
        
        <p><strong>3. Shower Curtains:</strong> Why does the curtain attack you? The shower spray pushes air, making it move fast (high v) inside the tub. The pressure drops. The stagnant air outside (high P) pushes the curtain in towards the low-pressure zone (you).</p>
        `,
        simulationType: "projectile",
        simulationDescription: `
        <h4 style="color: var(--accent);">✈️ Lift Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change the wind speed over the wing.<br><br>
        <strong>Observe:</strong> Faster air = Lower Pressure (Blue). Slower air = Higher Pressure (Red). The wing rises towards the low pressure. This is flight.
        </p>`
    },
    {
        name: "Pascal's Principle",
        category: "Fluids",
        equation: "P₁ = P₂",
        explanation: "Pressure applied to a fluid is transmitted everywhere equally. Hydraulic magic.",
        example: `
        <p><strong>1. Car Brakes:</strong> You press the brake pedal lightly (small force, small area). The hydraulic fluid transmits this pressure to the brake pads (large area). Since P=F/A, the force is multiplied (F=PA), clamping the wheels with massive power.</p>
        
        <p><strong>2. Hydraulic Press Channel:</strong> How can a machine crush a bowling ball? A small motor pumps fluid into a giant cylinder. The pressure stays the same, but the huge surface area of the press piston turns that pressure into tons of crushing force.</p>
        
        <p><strong>3. Heimlich Maneuver:</strong> When you squeeze a choking victim's abdomen, you increase pressure in the abdomen. This pressure is transmitted through the diaphragm to the lungs, forcing air out to pop the obstruction from the windpipe.</p>
        `,
        simulationType: "spring",
        simulationDescription: `
        <h4 style="color: var(--accent);">🦾 Hydraulics Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Push the small piston.<br><br>
        <strong>Observe:</strong> A small push here creates a HUGE lift there. The pressure (P) stays the same, but because Area (A) is bigger, the Force (F) multiplies.
        </p>`
    },
    {
        name: "Archimedes Principle",
        category: "Fluids",
        equation: "Fb = ρVg",
        explanation: "The buoyant force up equals the weight of the fluid displaced.",
        example: `
        <p><strong>1. Steel Ships:</strong> Steel sinks. So why do aircraft carriers float? They are hollow. They displace a massive Volume (V) of water. The weight of that displaced water is greater than the weight of the steel ship. If they leak and lose V, they sink.</p>
        
        <p><strong>2. Hot Air Balloons:</strong> Hot air is less dense (ρ) than cold air. The balloon displaces heavy cold air with light hot air. The buoyant force (weight of cold air displaced) is stronger than gravity pulling the balloon down. Up you go!</p>
        
        <p><strong>3. Icebergs:</strong> Ice is 10% less dense than liquid water. So it floats with 90% of its volume underwater (displacing its own weight). That's why the Titanic never saw the massive danger lurking beneath the surface.</p>
        `,
        simulationType: "spring",
        simulationDescription: `
        <h4 style="color: var(--accent);">⛵ Buoyancy Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A block submerged in water. Gravity pulls down, Buoyancy pushes up.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Push the block down. Feel the water fight back.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> You must push the water out of the way to enter it. The water wants to go back to where it was, so it pushes you UP with a force exactly equal to the weight of the water you moved.
        </p>`
    },
    {
        name: "Continuity Equation",
        category: "Fluids",
        equation: "A₁v₁ = A₂v₂",
        explanation: "Water doesn't disappear. Narrow pipe = Fast water.",
        example: `
        <p><strong>1. Garden Hose:</strong> Put your thumb over the end. You reduce the Area (A). To ensure the same amount of water gets out, the Velocity (v) must shoot up. The water sprays further. You just solved the continuity equation.</p>
        
        <p><strong>2. Rivers:</strong> Wide, deep rivers flow slowly. When the river narrows into a canyon, the water rushes like crazy white water rapids. The flow rate (Gallons per minute) is the same, but the speed changes locally.</p>
        
        <p><strong>3. Arteries:</strong> Your aorta is wide, and blood moves fast. It branches into billions of tiny capillaries. The <em>total</em> area of all capillaries is huge, so the blood slows down to a crawl, allowing time for oxygen exchange with cells.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "fluid",
        simulationDescription: `
        <h4 style="color: var(--accent);">🚰 Flow Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Water flowing through a pipe that gets narrower.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Watch the particles speed up in the bottleneck.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Mass is conserved. If 1 gallon enters per second, 1 gallon must leave. To get through a smaller door in the same time, you have to run faster.
        </p>`
    },
    {
        name: "Bernoulli's Principle",
        category: "Fluids",
        equation: "P + ½ρv² + ρgh = C",
        explanation: "Fast moving fluid creates LOW pressure.",
        example: `
        <p><strong>1. Airplane Wings:</strong> Wings are curved on top. Air travels a longer path over the top, so it must move FASTER (v↑) to catch up. Bernoulli says higher speed means LOWER Pressure (P↓). The higher pressure under the wing pushes it up (Lift).</p>
        
        <p><strong>2. Shower Curtains:</strong> Why does the curtain attack you? The water spray moves air quickly inside the shower (v↑). This lowers the pressure inside (P↓). The higher pressure outside pushes the curtain inward.</p>
        
        <p><strong>3. Perfume Spray:</strong> Squeezing the bulb shoots air across the top of a tube. Fast air = Low Pressure. This sucks the liquid up the tube into the air stream, where it gets blasted into a mist.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "fluid",
        simulationDescription: `
        <h4 style="color: var(--accent);">✈️ Lift Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Fluid moving through a constriction.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Observe the relationship between Speed and Pressure.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Conservation of Energy. If kinetic energy (speed) goes up, potential energy (pressure) must go down to compensate. Speed isn't free—it's paid for by pressure drop.
        </p>`
    },
    // Materials -> Spring Simulation
    {
        name: "Young's Modulus",
        category: "Materials",
        equation: "E = σ/ε",
        explanation: "How stiff a material is. The measure of 'stretchiness'.",
        example: `
        <p><strong>1. Skyscrapers:</strong> Steel has a huge Young's Modulus (200 GPa). It barely stretches under load. If we built towers out of rubber (low E), the bottom floors would squish flat under the weight of the top floors. High E means 'rigid'.</p>
        
        <p><strong>2. Pole Vaulting:</strong> The pole needs to bend (strain) storing energy, but snap back without breaking. It needs a specific Young's Modulus—too stiff and it breaks the athlete's arms; too flexible and it doesn't lift them.</p>
        
        <p><strong>3. Bones vs. Tendons:</strong> Your bones are stiff (High E) to support weight. Your tendons are stretchy (Low E) to connect muscles. As you age, bones lose density and 'E' drops, making them more prone to snapping rather than supporting.</p>
        `,
        simulationType: "spring",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">🧱 Stiffness Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Stretching different materials.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Compare Steel (High E) vs. Rubber (Low E).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Young's Modulus is the "Spring Constant" for a material itself. It tells you how much Force is needed to create a tiny bit of Stretch.
        </p>`
    },
    {
        name: "Stress",
        category: "Materials",
        equation: "σ = F/A",
        explanation: "Pressure inside a solid object. Force spread over an area.",
        example: `
        <p><strong>1. High Heels:</strong> A 100lb person in sneakers exerts low stress on the floor. In stiletto heels, that same 100lb is focused on a tiny point (Area A is small). The stress (σ) is so high it can dent hardwood floors. Don't wear heels on the gym court!</p>
        
        <p><strong>2. Bed of Nails:</strong> A fakir can lie on 1,000 nails. The Force (gravity) is spread over 1,000 points (Large A). The stress at any single nail is low, so skin doesn't break. Step on ONE nail (Small A), and the stress pierces your foot.</p>
        
        <p><strong>3. Submarines:</strong> Dive deep, and water pressure squeezes the hull. The metal experiences compressive stress. If the stress exceeds the steel's 'Yield Strength', the hull crumples like a soda can. Implosion.</p>
        `,
        simulationType: "spring",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">👠 Stress Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Applying force to an object.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> See how Area affects the outcome.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> It's not about how strong you are (Force), it's about how focused you are (Area). A dull knife (large edge area) requires huge force to cut. A sharp knife (tiny area) cuts with ease.
        </p>`
    },
    {
        name: "Strain",
        category: "Materials",
        equation: "ε = ΔL/L",
        explanation: "Percent stretch. How much the material actually deformed.",
        example: `
        <p><strong>1. Rubber Bands:</strong> Stretch a 10cm band to 20cm. The change (ΔL) is 10cm. The Strain is 10/10 = 1 (or 100%). Rubber can handle 500% strain. Steel breaks at 0.1% strain. That's the difference between elastic and brittle.</p>
        
        <p><strong>2. Thermal Strain:</strong> When train tracks expand in summer (Thermal expansion), they are physically longer. If they have nowhere to go, they experience internal 'Strain' even if they look straight. Eventually, they buckle sideways to relieve it.</p>
        
        <p><strong>3. Sprained Ankle:</strong> Ligaments have a limit to how much they can stretch (Strain limit). Roll your ankle, and you force a strain of 10% on a tissue designed for 5%. The fibers snap. That's a sprain.</p>
        `,
        simulationType: "spring",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">📏 Strain Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Measuring deformation.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Stretch the material and watch the percentage climb.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Strain is unitless. It's a ratio. 1% strain means "I got 1% longer". Failure happens when the molecules can't reach any further to hold hands.
        </p>`
    },
    {
        name: "Hooke's Law (Stress)",
        category: "Materials",
        equation: "σ = Eε",
        explanation: "Stress is proportional to Strain. The linear elastic zone.",
        example: `
        <p><strong>1. Springs (Again):</strong> This is the material version of F=kx. Pull on a steel wire (apply Stress σ). It stretches a tiny bit (Strain ε). Let go, and it snaps back perfectly. This 'elastic' behavior is what keeps bridges from sagging permanently after a truck drives over.</p>
        
        <p><strong>2. Guitar Strings:</strong> Tightening the tuning peg stretches the string (Strain). This increases the tension Force (Stress). According to the wave equation, higher Stress = higher Frequency. You tune with Hooke's Law.</p>
        
        <p><strong>3. Plastic Deformation:</strong> If you pull too hard, you leave the linear zone. Hooke's Law fails. The material 'yields' and stretches permanently like chewed gum. Once you pass this point, your car spring is ruined.</p>
        `,
        simulationType: "spring",
        visualTheme: "default",
        simulationDescription: `
        <h4 style="color: var(--accent);">↩️ Elasticity Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> The Linear Zone.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Pull and release. It snaps back.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Nature loves linearity. For small deformations, everything acts like a spring. Atoms get pulled apart and spring back. This only fails when you break the "spring" (Yield Point).
        </p>`
    },
    {
        name: "Entropy",
        category: "Thermo",
        equation: "S = k · ln(Ω)",
        explanation: "Disorder always increases over time. The arrow of time.",
        example: `
        <p><strong>1. The Melting Ice Cube:</strong> An ice cube is orderly—water molecules locked in a crystal grid. Leave it on the counter, and it melts into a puddle (disorder). You never see a puddle spontaneously freeze into a perfect cube because the universe prefers chaos (High Entropy).</p>
        
        <p><strong>2. Your Room:</strong> Leave your room alone for a week. Dust settles, clothes pile up, things get messy. It takes energy (cleaning) to restore order. This is the 2nd Law of Thermodynamics in action: nature tends toward messiness unless you actively work against it.</p>
        
        <p><strong>3. The Heat Death of the Universe:</strong> On a cosmic scale, stars are burning fuel and spreading heat out. Eventually, billions of years from now, everything will be the same temperature, and no energy will flow. The universe will reach maximum entropy—a state of eternal, cold balance.</p>
        `,
        simulationType: "graph",
        variables: { label: "Entropy Increase", x: "Time (t)", y: "Disorder (S)" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🎲 Entropy Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A system evolving over time.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Watch the graph climb. It never goes down on its own.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> There are more ways to be messy than to be tidy. Probability favors disorder. This is why time only moves forward—you can't unscramble an egg.
        </p>`
    },
    {
        name: "Kinetic Theory",
        category: "Thermo",
        equation: "KE = 3/2kT",
        explanation: "Temperature IS motion. Hot atoms just move faster.",
        example: `
        <p><strong>1. Absolute Zero:</strong> Why is -273.15°C the limit? Because at that temp (0 Kelvin), KE = 0. The atoms stop moving completely. You can't go slower than 'stopped', so you can't get colder than absolute zero.</p>
        
        <p><strong>2. Evaporation:</strong> Water in a glass is at 20°C (average speed). But some lucky molecules have extra speed (high KE) by random chance. They kick free of the surface and become gas. The slow ones stay behind, lowering the average temp (Cooling).</p>
        
        <p><strong>3. Atmosphere Loss:</strong> Hydrogen gas is light, so for the same KE, it must move incredibly fast (v²). On Mars, this speed is faster than escape velocity. Mars lost its water because the H2 molecules literally flew off the planet.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">🔥 Temperature Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Gas particles in a container.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Increase "heat" to see speed increase.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Temperature implies velocity. If you could see the air in your room, it would look like a frantic billiard game. We just feel the average of billions of collisions as "warmth".
        </p>`
    },
    {
        name: "Root Mean Square Speed",
        category: "Thermo",
        equation: "vrms = √(3RT/M)",
        explanation: "The average speed of gas molecules. Lighter = Faster.",
        example: `
        <p><strong>1. Helium Balloons:</strong> Why does a helium balloon deflate so fast? Helium atoms are tiny and light (Low Mass M). To have the same temp as air, they must zoom around much faster (High v). Their speed lets them leak through microscopic pores in the rubber that trap heavy air.</p>
        
        <p><strong>2. Smell Speed:</strong> Someone peels an orange across the room. Why does it take seconds to smell it? The scent molecules move at 500 mph! But they bounce off air molecules billions of times (Diffusion). Their 'random walk' path is jagged, slowing the net travel time.</p>
        
        <p><strong>3. Uranium Enrichment:</strong> Isotopes U-235 and U-238 are almost identical. But U-235 is slightly lighter. In a centrifuge gas, U-235 moves slightly faster. Engineers use this tiny speed difference to filter out the fuel for nuclear reactors.</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🏎️ Diffusion Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Comparing wave speeds (representing particle distribution).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> High Mass vs Low Mass.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> To carry the same kinetic energy (Temperature), a ping pong ball must fly much faster than a bowling ball. Lighter gases are speed demons.
        </p>`
    },
    {
        name: "Planck's Law",
        category: "Thermo",
        equation: "E = hf",
        explanation: "Energy comes in chunks (quanta), and higher frequency means bigger chunks.",
        example: `
        <p><strong>1. The UV Catastrophe:</strong> Classical physics predicted that a toaster should emit infinite X-rays. Planck solved this by saying energy isn't continuous like water, but granular like sand. At high frequencies, the 'grains' are too big to emit easily, saving the universe.</p>
        
        <p><strong>2. Lasers:</strong> A red laser pointer emits photons with specific energy (low f). A green laser emits photons with higher energy (high f). You can't just dim a blue laser to make red light; the color is tied to the energy packet size.</p>
        
        <p><strong>3. Stars:</strong> Hotter stars look blue because they have enough energy to emit high-frequency 'chunks'. Cooler stars look red. This law connects color directly to temperature.</p>
        `,
        simulationType: "wave",
        visualTheme: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌊 Quantum Wave Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Waves of different frequencies.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Increase frequency (X-axis). See amplitude/energy rise.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Higher pitch = Higher Energy. This simple idea birthed Quantum Mechanics.
        </p>`
    },
    {
        name: "Stefan-Boltzmann Law",
        category: "Thermo",
        equation: "P = σAT⁴",
        explanation: "Hot objects radiate power relative to Temperature to the 4th power.",
        example: `
        <p><strong>1. The Sun's Power:</strong> The Sun is 6000K. If it were just slightly hotter (say, 7000K), it wouldn't just be a bit brighter—it would be TWICE as bright. Small changes in T create massive changes in radiated power (P).</p>
        
        <p><strong>2. Night Vision:</strong> Everything glows. You are glowing in infrared right now. The hotter you are, the more you glow. Thermal cameras pick up this P to see people in pitch darkness.</p>
        
        <p><strong>3. Molten Metal:</strong> As metal heats up, it goes from invisible IR glow -> Red Hot -> Yellow Hot -> White Hot. The intensity increases explosively as it gets hotter, blindingly so.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "charge",
        simulationDescription: `
        <h4 style="color: var(--accent);">☀️ Radiation Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A radiating body (like a star).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Increase mass/temp. Watch the field intensity explode.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Doubling the temperature doesn't double the power... it multiplies it by 16 (2^4). This is why nuclear blasts are so devastatingly bright.
        </p>`
    },
    {
        name: "Wien's Law",
        category: "Thermo",
        equation: "λmax = b/T",
        explanation: "Hotter things allow blue light to escape. Peak color shifts with Temp.",
        example: `
        <p><strong>1. Welding Arcs:</strong> A welder's arc is thousands of degrees and glows brilliant blue-white (short wavelength λ). A campfire is only hundreds of degrees and glows orange-red (long wavelength λ). Color tells you the temperature.</p>
        
        <p><strong>2. Star Classes:</strong> Astronomers categorize stars by color. O-type stars are blue and insanely hot. M-type stars are red and relatively cool. Our Sun is a generic yellow G-type in the middle.</p>
        
        <p><strong>3. The Universe's Baby Picture:</strong> The Cosmic Microwave Background is the "afterglow" of the Big Bang. It has cooled down so much that its peak wavelength has stretched all the way from visible light into microwaves. Calculating backwards tells us exactly how hot the early universe was.</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌈 Spectrum Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Waves representing light color.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Higher Frequency = "Blue/Hot". Lower Frequency = "Red/Cool".
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> As you heat up an object, its peak color shifts Left (towards blue/UV). This is why "White Hot" is hotter than "Red Hot".
        </p>`
    },


    // ===== THERMODYNAMICS (Distinct Visuals) =====
    {
        name: "Ideal Gas Law",
        category: "Thermo",
        equation: "PV = nRT",
        explanation: "Relates Pressure, Volume, and Temperature of a gas.",
        example: `
        <p><strong>1. Car Tires:</strong> In winter, your tire pressure light comes on. Why? The air inside is the same (n is constant), the tire size is the same (V is constant), but the Temperature (T) dropped. According to PV=nRT, if T drops, Pressure (P) must drop too.</p>
        
        <p><strong>2. Pressure Cookers:</strong> A pressure cooker seals steam inside (constant V). As the stove heats it up (increasing T), the Pressure (P) skyrockets, forcing heat into the food faster. That's why it cooks beans in 20 minutes instead of 2 hours.</p>
        
        <p><strong>3. Hot Air Balloons:</strong> The burner heats the air (High T). Since the balloon is open at the bottom, Pressure (P) stays equal to outside, but the volume/density changes. Hot air expands (High V per molecule), making it less dense than cold air, so it floats.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "heat",
        simulationDescription: `
        <h4 style="color: var(--accent);">🎈 Gas Lab: The Molecular Dance</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Particles in a box. Each dot is a gas molecule. They have random speeds.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Move your mouse left (Cool) and right (Heat).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Temperature is just the average kinetic energy of these dots. Higher T = Faster bouncing = Harder hits on the walls = Higher Pressure.
        </p>`
    },
    {
        name: "First Law of Thermodynamics",
        category: "Thermo",
        equation: "ΔU = Q - W",
        explanation: "Energy conservation: Heat added minus Work done equals change in Internal Energy.",
        example: `
        <p><strong>1. Steam Engines:</strong> You burn coal to add Heat (Q). The water boils and expands, pushing a piston (Work W). The leftover energy keeps the steam hot (ΔU). You can't get more Work out than the Heat you put in.</p>
        
        <p><strong>2. Your Body:</strong> Food is the input energy (Q). You use it to move around and lift things (Work W). If you eat more than you work (Q > W), the extra energy is stored as fat (positive ΔU). To lose weight, you need W > Q.</p>
        
        <p><strong>3. Bicycle Pumps:</strong> When you pump a tire quickly, the valve gets hot. You are doing Work (W) on the air by compressing it. Since the heat can't escape fast enough (Q=0), the Internal Energy (ΔU) increases, raising the temperature.</p>
        `,
        simulationType: "graph",
        variables: { label: "Energy Balance", x: "Heat Added (Q)", y: "Internal Energy (ΔU)" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🔋 Energy Balance Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A graph showing the energy budget. Energy cannot be created or destroyed.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Adding Heat (X-axis) increases Internal Energy (Y-axis).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> It's a bank account. Deposit (Heat) - Withdrawal (Work) = Balance Change (ΔU). Mechanics and Heat are the same currency (Joules).
        </p>`
    },
    {
        name: "Specific Heat Capacity",
        category: "Thermo",
        equation: "Q = mcΔT",
        explanation: "How much energy it takes to raise a material's temperature.",
        example: `
        <p><strong>1. Ocean vs. Sand:</strong> At the beach, the sand burns your feet, but the water is cool. Both get the same sun (Q). Sand has low specific heat (c), so its T jumps up fast. Water has high c, so it absorbs huge energy with little temp change.</p>
        
        <p><strong>2. Pizza Burns:</strong> You bite a hot pizza. The crust is fine, but the sauce burns the roof of your mouth. The sauce (mostly water) holds way more heat energy than the dry crust, even at the same temperature.</p>
        
        <p><strong>3. Car Radiators:</strong> We use water to cool engines because it's a "heat sponge." It can absorb massive heat from the engine block without boiling over, carrying it to the radiator to be dumped into the air.</p>
        `,
        simulationType: "graph",
        variables: { label: "Heating Curves", x: "Heat Added (Q)", y: "Temp Rise (ΔT)" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🔥 Heat Capacity Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Comparing how substances heat up. Low slope = High Capacity (hard to heat). High slope = Low Capacity (easy to heat).
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Pour "heat" into the system. Watch the temperature rise.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Water is a "heat battery". It resists temperature change. Metals are "heat sieves"; energy flows through them and raises their temp instantly.
        </p>`
    },
    {
        name: "Latent Heat",
        category: "Thermo",
        equation: "Q = mL",
        explanation: "Energy required to change phase (melt/boil) without changing temperature.",
        example: `
        <p><strong>1. Ice in Soda:</strong> Why does ice keep your drink at exactly 0°C? Because melting absorbs massive energy (Latent Heat). Until the last sliver of ice is gone, the energy goes into breaking bonds (melting), not raising the temperature.</p>
        
        <p><strong>2. Sweating:</strong> Evaporating water requires huge energy (Latent Heat of Vaporization). When sweat evaporates from your skin, it steals that heat from your body, cooling you down efficiently. It's nature's AC.</p>
        
        <p><strong>3. Steam Burns:</strong> Steam at 100°C burns worse than water at 100°C. Why? Because steam also carries the massive "hidden" energy used to turn it into gas. When it hits your skin, it condenses and dumps all that extra latent heat instantly.</p>
        `,
        simulationType: "graph",
        variables: { label: "Phase Change", x: "Energy Input", y: "Temperature" },
        simulationDescription: `
        <h4 style="color: var(--accent);">🧊 Phase Change Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> Heating a block of ice from -20°C to steam.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> Notice the flat plateaus. Energy is added, but Temp stays flat!
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This is Latent (Hidden) Heat. The energy is busy breaking molecular bonds (Solid->Liquid or Liquid->Gas) rather than making molecules move faster.
        </p>`
    },
    {
        name: "Thermal Expansion",
        category: "Thermo",
        equation: "ΔL = αL₀ΔT",
        explanation: "Things get bigger when they get hotter.",
        example: `
        <p><strong>1. Sidewalk Cracks:</strong> Engineers leave gaps in concrete sidewalks. In summer, the concrete gets hot and expands. Without gaps (expansion joints), the slabs would push against each other and buckle or crack.</p>
        
        <p><strong>2. Loosening Jar Lids:</strong> Can't open a jar? Run the metal lid under hot water. The metal expands faster than the glass jar (higher α), making the lid slightly larger and easier to twist off.</p>
        
        <p><strong>3. The Eiffel Tower:</strong> In summer, the Eiffel Tower grows about 15 cm taller. The iron structure heats up in the sun, expands, and actually leans slightly away from the sun due to uneven heating!</p>
        `,
        simulationType: "graph",
        variables: { label: "Expansion vs Temp", x: "Temp Change (ΔT)", y: "Length Change (ΔL)" },
        simulationDescription: `
        <h4 style="color: var(--accent);">📏 Expansion Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> A metal rod being heated.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> As Temperature (X) rises, Length (Y) increases linearly.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> Heat makes atoms vibrate harder, pushing their neighbors further away. On a macro scale, the whole object grows.
        </p>`
    },

    {
        name: "Ohm's Law",
        category: "Electro",
        equation: "V = I · R",
        explanation: "Voltage pushes current through resistance.",
        example: `
        <p><strong>1. The Tungsten Filament:</strong> Consider an old-school incandescent light bulb. Inside, there is a tiny tungsten wire coil. When you flip the switch, voltage (pressure) forces electrons (current) to squeeze through this thin wire. The wire offers "resistance" to the electrons, much like a narrow pipe restricts water flow. </p>
        
        <p><strong>2. Friction & Heat:</strong> As the electrons fight their way through the resistant tungsten atoms, they crash into them, transferring energy. This friction creates immense heat—up to 4,600°F! This heat is what causes the filament to glow white-hot and produce light. This is a direct application of Ohm's Law: Resistance converts electrical energy into heat and light.</p>
        
        <p><strong>3. The Dimmer Switch:</strong> When you use a dimmer switch, you are essentially changing variables in Ohm's Law. A dimmer adds <em>more</em> resistance to the circuit (or chops the voltage). According to I = V/R, increasing resistance lowers the current. Less current means fewer electron collisions, less heat, and a dimmer glow. You are controlling the physics of the bulb in real-time!</p>
        `,
        simulationType: "circuit",
        visualTheme: "simple",
        simulationDescription: `
        <h4 style="color: var(--accent);">⚡ Circuit Lab: Ohm's Law</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Setup:</strong> You are looking at a simple electric circuit. The battery on the left acts as the "pump," creating Voltage (V) to push electrons. The zig-zag component on the right is a Resistor (R), which acts like a narrow pipe that fights against the flow. The moving blue dots representing the Current (I) are the electrons themselves.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em; margin-bottom: 10px;">
        <strong>The Interaction:</strong> In a real lab, you would turn a dial on the power supply to increase Voltage or swap out resistors. Here, this digital model demonstrates a "Simple" state. Ideally, if you could increase the Voltage (make the battery stronger), the dots would move faster. If you increased Resistance (made the pipe narrower), the dots would slow down.
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>The Physics:</strong> This balance is defined by V = I · R. Voltage tries to push, Resistance tries to stop, and Current is the result. This simple loop is the fundamental building block of every piece of electronics you own, from a toaster to a supercomputer.
        </p>`
    },

    // ===== GENERIC SIMULATIONS (QUANTUM/MODERN) =====
    {
        name: "Mass-Energy Equivalence",
        category: "Modern",
        equation: "E = m · c²",
        explanation: "Mass is just concentrated energy.",
        example: `
        <p><strong>1. The Sun's Engine:</strong> The Sun burns by fusing hydrogen atoms into helium. But the new helium weighs slightly less than the hydrogen that made it. Where did the missing mass go? It turned into pure Energy (sunlight) according to Einstein's recipe.</p>
        
        <p><strong>2. Nuclear Power:</strong> In a reactor, we split uranium atoms. The pieces weigh less than the original atom. That tiny "lost" mass is multiplied by c² (light speed squared—a huge number!), releasing enough heat to power millions of homes from a handful of fuel.</p>
        
        <p><strong>3. Your Body:</strong> Believe it or not, a fully charged battery weighs marginally more than a dead one. A hot cup of tea weighs more than a cold one. Energy <em>is</em> mass. It's just that for everyday things, the difference is too small to measure without super-scales.</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">💣 E=mc² Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Convert a tiny mass to energy.<br><br>
        <strong>Observe:</strong> A paperclip's worth of mass can level a city. The conversion factor (c²) is 90,000,000,000,000,000. Mass is just "frozen" energy.
        </p>`
    },
    {
        name: "Photon Energy",
        category: "Quantum",
        equation: "E = h · f",
        explanation: "Light energy depends on color (frequency), not brightness.",
        example: `
        <p><strong>1. Sunburns vs. Warmth:</strong> Why do you get sunburned in the shade but not by a heater? UV light has high frequency (High f), meaning each photon packs a high-energy punch (High E) that tears DNA. Heat radiation has low frequency, so it warms you but can't break your cells.</p>
        
        <p><strong>2. Solar Panels:</strong> To knock an electron loose and create electricity, a light particle needs a minimum "kick" of energy. Red light (low f) is often too weak. Blue light (high f) is strong enough. This is why solar efficiency depends heavily on the light spectrum.</p>
        
        <p><strong>3. Night Vision Goggles:</strong> Night vision detects Infrared light. These photons have very low energy/frequency (we can't see them). The goggles use a photomultiplier voltage to amplify these weak signals into the green image our eyes can process.</p>
        `,
        simulationType: "wave",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌈 Color Energy Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Change light color (Frequency) hitting a metal plate.<br><br>
        <strong>Observe:</strong> Red light (Low E) does nothing, no matter how bright. Blue light (High E) knocks electrons loose. Energy is about <em>quality</em> (Color), not just quantity.
        </p>`
    },
    {
        name: "Uncertainty Principle",
        category: "Quantum",
        equation: "Δx · Δp ≥ ℏ/2",
        explanation: "You can't know where a particle is AND how fast it's going perfectly.",
        example: `
        <p><strong>1. The Blurry Nature of Reality:</strong> Imagine taking a photo of a speeding race car. If you use a fast shutter speed, you freeze the car (know position) but can't tell how fast it's going. If you use a slow shutter, you see a blur (know speed) but not where it is. Particles are like that—measurement forces a tradeoff.</p>
        
        <p><strong>2. Electron Clouds:</strong> This is why atoms aren't mini solar systems with planet-like electrons. Because we can't pin down their position, electrons exist as "probability clouds" around the nucleus. They are everywhere and nowhere at once until we look.</p>
        
        <p><strong>3. Zero-Point Energy:</strong> Even at absolute zero (-273°C), particles can't stop moving completely. If they stopped, we'd know their position (here) and momentum (zero) perfectly, which breaks the law. So, nature constantly vibrating with "quantum jitters."</p>
        `,
        simulationType: "concept_visual",
        visualTheme: "atom",
        simulationDescription: `
        <h4 style="color: var(--accent);">🌫️ Blur Lab</h4>
        <p style="color: var(--text-secondary); font-size: 0.9em;">
        <strong>Interact:</strong> Try to squeeze the particle into a smaller box (Δx).<br><br>
        <strong>Observe:</strong> The more you pin it down, the faster it jitters (Δp). You cannot know both. Reality is fundamentally fuzzy at the bottom.
        </p>`
    }
];

// ===== Global Variables =====
let currentFormula = null;
let canvas = null;
let ctx = null;
let animationId = null;

// ===== Interaction State =====
let mouse = { x: 0, y: 0 };
let isMouseOver = false;

// Track mouse position relative to canvas
window.addEventListener('mousemove', (e) => {
    if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        isMouseOver = (mouse.x >= 0 && mouse.x <= canvas.width && mouse.y >= 0 && mouse.y <= canvas.height);
    }
});

// Touch support
window.addEventListener('touchmove', (e) => {
    if (canvas && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        isMouseOver = true;
        // e.preventDefault(); // Optional: prevent scrolling while interacting
    }
}, { passive: false });
let isPlaying = false;
let time = 0;
let isFirstLoad = true; // Track first click

// ===== DOM Elements (Initialized in DOMContentLoaded) =====
let randomBtn, listBtn, closeModalBtn, modal, formulaList, playPauseBtn, resetBtn, formulaName, formulaContent, welcomeMessage, equation, explanation, example, playPauseIcon, loadingOverlay, loadingText, loadingProgress;

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("Phyzics Engine Initializing...");

    // Initialize DOM Elements
    randomBtn = document.getElementById('randomBtn');
    listBtn = document.getElementById('listBtn');
    closeModalBtn = document.getElementById('closeModalBtn');
    modal = document.getElementById('list-modal');
    formulaList = document.getElementById('formula-list');
    playPauseBtn = document.getElementById('playPauseBtn');
    resetBtn = document.getElementById('resetBtn');
    formulaName = document.getElementById('formula-name');
    formulaContent = document.getElementById('formula-content');
    welcomeMessage = document.getElementById('welcome-message');
    equation = document.getElementById('equation');
    explanation = document.getElementById('explanation');
    example = document.getElementById('example');
    playPauseIcon = document.getElementById('playPauseIcon');
    loadingOverlay = document.getElementById('loading-overlay');
    loadingText = document.getElementById('loading-text');
    loadingProgress = document.getElementById('loading-progress');
    canvas = document.getElementById('simulationCanvas');

    // Verification
    if (!randomBtn) {
        console.error("CRITICAL ERROR: 'randomBtn' not found in DOM.");
        return;
    }

    if (!canvas) {
        console.error("CRITICAL ERROR: Canvas not found.");
        return;
    }

    ctx = canvas.getContext('2d');

    // Event listeners
    randomBtn.addEventListener('click', () => getRandomFormula());

    if (listBtn) {
        listBtn.addEventListener('click', openFormulaList);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (modal) modal.classList.add('hidden');
        });
    }

    // click outside to close
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    if (playPauseBtn) playPauseBtn.addEventListener('click', () => togglePlayPause());
    if (resetBtn) resetBtn.addEventListener('click', resetSimulation);

    // Populate List
    populateFormulaList();

    // Set canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    console.log("Initialization Complete. Formula Count:", physicsFormulas ? physicsFormulas.length : 0);

    // FIX "EMPTY START": Auto-load a random formula immediately
    if (physicsFormulas && physicsFormulas.length > 0) {
        // We want to show the quote on the first load too!
        // But maybe shorter?
        currentFormula = physicsFormulas[Math.floor(Math.random() * physicsFormulas.length)];
        showLoadingSequence();
    }
});

function resizeCanvas() {
    if (!canvas) return;
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();

    // Safety check
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width;
    canvas.height = rect.height;

    // Redraw if needed
    if (currentFormula && !isPlaying) {
        drawSimulation();
    }
}



// ===== Formula Selection & Loading Logic =====
function getRandomFormula() {
    // Logic: First time instant, subsequent times 2.86s load
    // Pick random NOW or later?
    // Let's pick random NOW so we know what it is?
    // Or pick after load?

    // Pick random index
    if (!physicsFormulas || physicsFormulas.length === 0) return;
    const randomIndex = Math.floor(Math.random() * physicsFormulas.length);
    currentFormula = physicsFormulas[randomIndex];

    if (isFirstLoad) {
        isFirstLoad = false;
        loadFormula();
    } else {
        showLoadingSequence();
    }
}

function showLoadingSequence() {
    if (loadingOverlay) loadingOverlay.classList.remove('hidden');

    const quotes = [
        '"Science is a way of thinking much more than it is a body of knowledge." – Carl Sagan',
        '"The important thing is not to stop questioning." – Albert Einstein',
        '"Somewhere, something incredible is waiting to be known." – Carl Sagan',
        '"Nothing in life is to be feared, it is only to be understood." – Marie Curie',
        '"If I have seen further it is by standing on the shoulders of Giants." – Isaac Newton',
        '"God does not play dice with the universe." – Albert Einstein',
        '"I am one of those who think like Nobel, that humanity will draw more good than evil from new discoveries." – Marie Curie',
        '"The good thing about science is that it\'s true whether or not you believe in it." – Neil deGrasse Tyson',
        '"Physics is the study of the rules of the game." – Richard Feynman' // Added quotes
    ];

    if (loadingText) {
        loadingText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Exact Duration: 1.5 seconds (Faster)
    const duration = 1500;
    let startTime = null;

    function animateProgress(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (loadingProgress) {
            loadingProgress.style.width = `${progress * 100}%`;
        }

        if (progress < 1) {
            requestAnimationFrame(animateProgress);
        } else {
            // Finished
            if (loadingOverlay) loadingOverlay.classList.add('hidden');
            loadFormula();
            // Reset for next time
            if (loadingProgress) loadingProgress.style.width = '0%';
        }
    }

    requestAnimationFrame(animateProgress);
}

function loadFormula() {
    // Hide welcome, show content (Welcome message removed from HTML)

    // Ensure content is visible
    formulaContent.classList.remove('hidden');

    if (!currentFormula) {
        const randomIndex = Math.floor(Math.random() * physicsFormulas.length);
        currentFormula = physicsFormulas[randomIndex];
    }

    console.log("Loading:", currentFormula.name);
    displayFormula();
}

function populateFormulaList() {
    if (!formulaList || !physicsFormulas) return;

    formulaList.innerHTML = '';

    physicsFormulas.forEach((formula, index) => {
        const item = document.createElement('div');
        item.className = 'formula-item';
        item.innerHTML = `
            <span class="formula-item-name">${formula.name}</span>
            <span class="formula-item-category">${formula.category || 'General'}</span>
        `;

        item.addEventListener('click', () => {
            selectFormula(index);
        });

        formulaList.appendChild(item);
    });
}

function openFormulaList() {
    if (modal) modal.classList.remove('hidden');
}

function selectFormula(index) {
    if (modal) modal.classList.add('hidden');
    currentFormula = physicsFormulas[index];

    // Use consistent loading behavior
    if (isFirstLoad) {
        isFirstLoad = false;
        loadFormula(); // Direct load
    } else {
        showLoadingSequence(); // Animated load
    }
}

// Expose to window for HTML onclick fallback
window.getRandomFormula = getRandomFormula;

function displayFormula() {
    // Update UI
    formulaName.textContent = currentFormula.name;

    // Update Category & Make Clickable
    const categoryBadge = document.getElementById('formula-category');
    categoryBadge.textContent = currentFormula.category || 'General';
    categoryBadge.onclick = () => {
        // Open modal and ideally filter (future: implement filter)
        openFormulaList();
    };
    categoryBadge.style.cursor = 'pointer';
    categoryBadge.title = "Click to select formulas";

    equation.textContent = currentFormula.equation;
    explanation.textContent = currentFormula.explanation;
    example.innerHTML = currentFormula.example; // Fix: Use innerHTML for formatted text

    // Update Simulation Description
    const simDetails = document.getElementById('simulation-details');
    if (simDetails) {
        simDetails.innerHTML = currentFormula.simulationDescription ||
            `<h4 style="color: var(--accent); margin-bottom: 5px;">🎮 Interactive Simulation</h4>
             <p style="font-size: 0.9em; color: var(--text-secondary);">Click <strong>Play</strong> to watch the physics happen!</p>`;
    }

    // Show content with animation
    formulaContent.classList.remove('hidden');
    // Force grid display helper
    formulaContent.style.display = 'grid';

    // CRITICAL FIX: Resize canvas AFTER it becomes visible
    // The canvas needs to be visible to get correct dimensions
    requestAnimationFrame(() => {
        resizeCanvas();
        // Reset and start simulation
        resetSimulation();
        togglePlayPause(true);
    });
}

// ===== Play/Pause Controls =====
function togglePlayPause(forcePlay = null) {
    // If playing, stop the current animation first
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    isPlaying = forcePlay !== null ? forcePlay : !isPlaying;

    if (isPlaying) {
        playPauseIcon.textContent = '⏸️';
        animate();
    } else {
        playPauseIcon.textContent = '▶️';
    }
}

function resetSimulation() {
    time = 0;
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (currentFormula) {
        drawSimulation();
    }
}

// ===== Animation Loop =====
function animate() {
    if (!isPlaying) return;

    time += 0.016; // ~60fps

    try {
        drawSimulation();
    } catch (e) {
        console.error("Simulation error:", e);
        isPlaying = false; // Stop if error
        playPauseIcon.textContent = '▶️';
        return;
    }

    animationId = requestAnimationFrame(animate);
}

function drawSimulation() {
    if (!currentFormula) return;

    // Clear canvas
    ctx.fillStyle = '#1a1200';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid for all simulations
    drawGrid();

    // Draw simulation based on type
    // Custom High-Fidelity Simulations
    switch (currentFormula.simulationType) {
        case 'projectile':
            drawProjectile();
            break;
        case 'pendulum':
            drawPendulum();
            break;
        case 'wave':
            drawWave();
            break;
        case 'spring':
            drawSpring();
            break;
        case 'circular':
            drawCircular();
            break;
        case 'freefall':
            drawFreefall();
            break;

        // Generic Engines
        case 'graph':
            drawGenericGraph(currentFormula.variables);
            break;
        case 'graph_quadratic':
            drawGenericGraphQuadratic(currentFormula.variables);
            break;
        case 'vector_interaction':
            drawVectorInteraction(currentFormula.variables);
            break;
        case 'concept_visual':
            drawConceptVisual(currentFormula.visualTheme);
            break;
        case 'circuit':
            drawCircuit(currentFormula.visualTheme);
            break;
        case 'magnet':
            drawMagnet(currentFormula.visualTheme);
            break;
        case 'optics_refraction':
            drawRefraction(); // New Optics Engine
            break;
        default:
            drawConceptVisual('default'); // Fallback
    }
}

// ===== Helper: Draw Grid =====
function drawGrid() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// ===== GENERIC ENGINE: Graphs =====
function drawGenericGraph(vars) {
    if (!vars) return;
    const padding = 60;
    const w = canvas.width - padding * 2;
    const h = canvas.height - padding * 2;

    // Axis
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding); // Y top
    ctx.lineTo(padding, canvas.height - padding); // Origin
    ctx.lineTo(canvas.width - padding, canvas.height - padding); // X right
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '14px Inter';
    ctx.fillText(vars.x || 'X-Axis', canvas.width / 2, canvas.height - 20);
    ctx.save();
    ctx.translate(20, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(vars.y || 'Y-Axis', 0, 0);
    ctx.restore();

    // Plot Line (y = mx)
    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 3;
    ctx.beginPath();
    const progress = (time * 0.5) % 1.2; // animate drawing
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(padding + w * Math.min(1, progress), canvas.height - padding - h * Math.min(1, progress));
    ctx.stroke();

    // Animated point
    const px = padding + w * ((time * 0.5) % 1);
    const py = canvas.height - padding - h * ((time * 0.5) % 1);
    ctx.fillStyle = '#f5576c';
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
}

function drawGenericGraphQuadratic(vars) {
    if (!vars) return;
    const padding = 60;
    const w = canvas.width - padding * 2;
    const h = canvas.height - padding * 2;

    // Axis
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '14px Inter';
    ctx.fillText(vars.x || 'Velocity', canvas.width / 2, canvas.height - 20);
    ctx.save();
    ctx.translate(20, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(vars.y || 'Energy', 0, 0);
    ctx.restore();

    // Plot Curve (y = x^2)
    ctx.strokeStyle = '#f5576c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= w; i += 5) {
        const xNorm = i / w;
        const yNorm = xNorm * xNorm;
        if (i == 0) ctx.moveTo(padding + i, canvas.height - padding - yNorm * h);
        else ctx.lineTo(padding + i, canvas.height - padding - yNorm * h);
    }
    ctx.stroke();
}

// ===== GENERIC ENGINE: Vector Interactions =====
function drawVectorInteraction(vars) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const dist = 100 + Math.sin(time) * 50;

    // Object 1
    ctx.fillStyle = '#4facfe';
    ctx.beginPath();
    ctx.arc(cx - dist, cy, 20, 0, Math.PI * 2);
    ctx.fill();

    // Object 2
    ctx.fillStyle = vars.type === 'attraction' ? '#f5576c' : '#4facfe'; // Red if attract, Blue if repel
    ctx.beginPath();
    ctx.arc(cx + dist, cy, 20, 0, Math.PI * 2);
    ctx.fill();

    // Force Arrows
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);

    if (vars.type === 'attraction') {
        // Arrows pointing in
        drawArrow(cx - dist + 25, cy, cx - dist + 60, cy);
        drawArrow(cx + dist - 25, cy, cx + dist - 60, cy);
    } else if (vars.type === 'balanced') {
        // No arrows, just objects staying put (Inertia)
        ctx.fillStyle = '#fff';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText("ΣF = 0", cx, cy - 40);
        ctx.fillText("v = constant", cx, cy + 80);
    } else {
        // Arrows pointing out (repulsion)
        drawArrow(cx - dist - 25, cy, cx - dist - 60, cy);
        drawArrow(cx + dist + 25, cy, cx + dist + 60, cy);
    }
    ctx.setLineDash([]);
}

function drawArrow(fromx, fromy, tox, toy) {
    const headlen = 10;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
}

// ===== GENERIC ENGINE: Concept Visuals =====
function drawConceptVisual(theme) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Interaction Factors (0.0 to 1.0) based on mouse position
    // Default to center if mouse is not over canvas
    let interactX = isMouseOver ? Math.max(0, Math.min(1, mouse.x / canvas.width)) : 0.5;
    let interactY = isMouseOver ? Math.max(0, Math.min(1, mouse.y / canvas.height)) : 0.5;

    ctx.fillStyle = '#fff';
    ctx.font = '16px Inter'; // Slightly smaller for fit
    ctx.textAlign = 'center';

    switch (theme) {
        case 'heat':
            // Thermal Vibration Simulation
            // Mouse X = Temperature (Left = Cold, Right = Hot)
            const temp = 0.2 + (interactX * 2.5); // 0.2 to 2.7

            // Color shifts from Blue (Cold) to Red (Hot)
            const hue = 240 - (Math.min(1, interactX) * 240); // 240(blue) -> 0(red)
            ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;

            const particles = 30; // More particles
            for (let i = 0; i < particles; i++) {
                const row = Math.floor(i / 6);
                const col = i % 6;
                const baseX = cx - 75 + col * 30;
                const baseY = cy - 75 + row * 30;

                // Vibration increases with Temp
                const vibrateX = Math.sin(time * (10 * temp) + i) * (2 + temp * 5);
                const vibrateY = Math.cos(time * (12 * temp) + i) * (2 + temp * 5);

                ctx.beginPath();
                ctx.arc(baseX + vibrateX, baseY + vibrateY, 6 + temp, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.fillStyle = '#F2E3BB';
            ctx.fillText(`Temperature: ${(temp * 100).toFixed(0)} K`, cx, cy + 130);
            ctx.fillText("(Move Mouse Left/Right to Heat/Cool)", cx, cy + 150);
            break;

        case 'wave':
            // Wave Simulation
            // Mouse X = Frequency, Mouse Y = Amplitude
            const freq = 1 + (interactX * 10); // 1 to 11 Hz
            const amp = 10 + (interactY * 80); // 10 to 90 px

            ctx.strokeStyle = '#4facfe';
            ctx.lineWidth = 3;
            ctx.beginPath();

            for (let x = 0; x < canvas.width; x++) {
                // y = A sin(kx - wt)
                const y = cy + Math.sin((x * 0.01 * freq) - (time * 5)) * amp;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.fillText(`Frequency: ${freq.toFixed(1)} Hz | Amplitude: ${amp.toFixed(0)}`, cx, cy + 130);
            ctx.fillText("(Move Mouse: X=Freq, Y=Amp)", cx, cy + 150);
            break;

        case 'gravity':
            // Gravity / Planetary Orbit
            // Mouse X = Mass of center object
            const mass = 0.5 + (interactX * 2); // 0.5 to 2.5
            const orbitSpeed = 2 * Math.sqrt(mass); // Kepler'sish

            // Draw Central Star/Black Hole
            ctx.fillStyle = theme === 'gravity' ? '#ff9a9e' : '#000';
            ctx.strokeStyle = '#fff';
            if (theme === 'gravity') { // Star
                ctx.shadowBlur = mass * 20;
                ctx.shadowColor = '#ff9a9e';
                ctx.beginPath();
                ctx.arc(cx, cy, 20 * mass, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            // Orbiting Planet
            const orbitR = 100 + (interactY * 50); // Radius controlled by Y (optional)
            const angle = time * orbitSpeed;
            const px = cx + Math.cos(angle) * orbitR;
            const py = cy + Math.sin(angle) * orbitR;

            ctx.fillStyle = '#4facfe';
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fill();

            // Orbit Path
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.beginPath();
            ctx.ellipse(cx, cy, orbitR, orbitR, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.fillText(`Star Mass: ${mass.toFixed(2)} Solar Masses`, cx, cy + 130);
            ctx.fillText("(Move Mouse Left/Right to change Mass)", cx, cy + 150);
            break;

        case 'charge':
            // Electric Field Lines / Charge
            // Mouse moves a test charge
            const chargeX = mouse.x || cx + 50;
            const chargeY = mouse.y || cy;

            // Central Charge (Positive)
            ctx.fillStyle = '#f5576c'; // Red +
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#f5576c';
            ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.fillText("+", cx, cy + 5);
            ctx.shadowBlur = 0;

            // Mouse Charge (Negative)
            ctx.fillStyle = '#4facfe'; // Blue -
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#4facfe';
            ctx.beginPath(); ctx.arc(chargeX, chargeY, 10, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.fillText("-", chargeX, chargeY + 4);
            ctx.shadowBlur = 0;

            // Draw Force Line
            const dx = cx - chargeX;
            const dy = cy - chargeY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 25) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(chargeX, chargeY);
                ctx.lineTo(cx, cy);
                ctx.stroke();
                ctx.setLineDash([]);

                // Force calculation (visual)
                const force = 10000 / (dist * dist);
                ctx.fillText(`Interaction: ${force.toFixed(2)}`, cx, cy + 130);
            }
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.fillText("(Move Mouse to move Charge)", cx, cy + 150);
            break;

        case 'fluid':
            // Fluid Flow Simulation (Bernoulli / Continuity)
            // Pipe constricts in the middle
            const pipeY = cy;
            const pipeH_wide = 100;
            const pipeH_narrow = 40;

            // Draw Pipe
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 4;
            ctx.beginPath();
            // Top wall
            ctx.moveTo(0, pipeY - pipeH_wide / 2);
            ctx.bezierCurveTo(cx - 50, pipeY - pipeH_wide / 2, cx - 50, pipeY - pipeH_narrow / 2, cx, pipeY - pipeH_narrow / 2);
            ctx.bezierCurveTo(cx + 50, pipeY - pipeH_narrow / 2, cx + 50, pipeY - pipeH_wide / 2, canvas.width, pipeY - pipeH_wide / 2);
            // Bottom wall
            ctx.moveTo(0, pipeY + pipeH_wide / 2);
            ctx.bezierCurveTo(cx - 50, pipeY + pipeH_wide / 2, cx - 50, pipeY + pipeH_narrow / 2, cx, pipeY + pipeH_narrow / 2);
            ctx.bezierCurveTo(cx + 50, pipeY + pipeH_narrow / 2, cx + 50, pipeY + pipeH_wide / 2, canvas.width, pipeY + pipeH_wide / 2);
            ctx.stroke();

            // Particles
            const pCount = 20;
            const speedBase = 2;
            ctx.fillStyle = '#4facfe'; // Water Blue

            for (let i = 0; i < pCount; i++) {
                // Calculate position based on time and index
                let x = ((time * 100 * speedBase + i * (canvas.width / pCount)) % canvas.width);

                // Calculate Y constriction based on X
                // Simple interpolation for visual effect
                let currentH = pipeH_wide;
                let speedMult = 1;

                if (x > cx - 100 && x < cx + 100) {
                    // In narrow section aprox
                    const dist = 1 - Math.abs(x - cx) / 100; // 0 to 1 peak at center
                    currentH = pipeH_wide - (pipeH_wide - pipeH_narrow) * dist;
                    speedMult = 1 + dist * 2; // Faster in middle
                }

                // Adjust X to simulate acceleration (visually tricky in loop, just scale speed)
                // Actually, just drawing them is enough for "concept"

                let yOffset = (Math.sin(i * 132 + time) - 0.5) * (currentH - 10);

                ctx.beginPath();
                ctx.arc(x, pipeY + yOffset, 4, 0, Math.PI * 2);
                ctx.fill();

                // Trail to show speed?
                ctx.strokeStyle = 'rgba(79, 172, 254, 0.3)';
                ctx.beginPath();
                ctx.moveTo(x - speedMult * 10, pipeY + yOffset);
                ctx.lineTo(x, pipeY + yOffset);
                ctx.stroke();
            }

            ctx.fillStyle = '#fff';
            ctx.fillText("Wide Area = Slow Fluid", cx - 150, cy + 80);
            ctx.fillText("Narrow Area = Fast Fluid", cx, cy - 80);
            break;

        case 'atom':
        default:
            // Orbital animation
            // Mouse controls orbit tilt? Or number of electrons?
            // Let's Make Mouse X = Rotation Speed
            const speed = 0.5 + (interactX * 3);

            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.beginPath();
            ctx.ellipse(cx, cy, 100, 40, time * speed, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(cx, cy, 100, 40, (time * speed) + Math.PI / 3, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.ellipse(cx, cy, 100, 40, (time * speed) + 2 * Math.PI / 3, 0, Math.PI * 2);
            ctx.stroke();

            // Nucleus
            ctx.fillStyle = '#f5576c';
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#f5576c';
            ctx.beginPath();
            ctx.arc(cx, cy, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.fillText(`Electron Speed: ${(speed * 2000).toFixed(0)} km/s`, cx, cy + 130);
            ctx.fillText("(Move Mouse Left/Right to Energize)", cx, cy + 150);
            break;
    }
}

// ===== Simulation: Projectile Motion =====
function drawProjectile() {
    const v0 = 150; // initial velocity (pixels/s)
    const angle = Math.PI / 4; // 45 degrees
    const g = 300; // gravity (pixels/s²)

    const x0 = 50;
    const y0 = canvas.height - 50;

    // Calculate current position
    const x = x0 + v0 * Math.cos(angle) * time;
    const y = y0 - (v0 * Math.sin(angle) * time - 0.5 * g * time * time);

    // Draw trajectory path
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= time; t += 0.05) {
        const px = x0 + v0 * Math.cos(angle) * t;
        const py = y0 - (v0 * Math.sin(angle) * t - 0.5 * g * t * t);
        if (t === 0) {
            ctx.moveTo(px, py);
        } else {
            ctx.lineTo(px, py);
        }
    }
    ctx.stroke();

    // Draw projectile
    if (y <= canvas.height - 50) {
        ctx.fillStyle = '#f5576c';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();

        // Draw velocity vector
        const vx = v0 * Math.cos(angle);
        const vy = v0 * Math.sin(angle) - g * time;
        ctx.strokeStyle = '#4facfe';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + vx * 0.3, y - vy * 0.3);
        ctx.stroke();

        // Arrow head
        ctx.fillStyle = '#4facfe';
        ctx.beginPath();
        ctx.arc(x + vx * 0.3, y - vy * 0.3, 4, 0, Math.PI * 2);
        ctx.fill();
    } else {
        // Reset when hits ground
        time = 0;
    }

    // Draw ground
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 50);
    ctx.lineTo(canvas.width, canvas.height - 50);
    ctx.stroke();
}

// ===== Simulation: Pendulum =====
function drawPendulum() {
    const centerX = canvas.width / 2;
    const centerY = 50;
    const length = 200;
    const maxAngle = Math.PI / 6; // 30 degrees
    const period = 2; // seconds

    // Calculate angle
    const angle = maxAngle * Math.sin(2 * Math.PI * time / period);

    // Calculate bob position
    const bobX = centerX + length * Math.sin(angle);
    const bobY = centerY + length * Math.cos(angle);

    // Draw pivot
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
    ctx.fill();

    // Draw string
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(bobX, bobY);
    ctx.stroke();

    // Draw bob
    ctx.fillStyle = '#667eea';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#667eea';
    ctx.beginPath();
    ctx.arc(bobX, bobY, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw arc showing motion range
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, length, Math.PI / 2 - maxAngle, Math.PI / 2 + maxAngle);
    ctx.stroke();
}

// ===== Simulation: Wave Motion =====
function drawWave() {
    const amplitude = 60;
    const wavelength = 150;
    const period = 2; // seconds

    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 3;
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.sin(2 * Math.PI * (x / wavelength - time / period));

        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();

    // Draw center line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw moving particle to show wave propagation
    const particleX = (time * 100) % canvas.width;
    const particleY = canvas.height / 2 + amplitude * Math.sin(2 * Math.PI * (particleX / wavelength - time / period));

    ctx.fillStyle = '#f5576c';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#f5576c';
    ctx.beginPath();
    ctx.arc(particleX, particleY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
}

// ===== Simulation: Spring Oscillation =====
function drawSpring() {
    const centerY = canvas.height / 2;
    const fixedX = 100;
    const amplitude = 100;
    const period = 2; // seconds

    // Calculate mass position
    const displacement = amplitude * Math.cos(2 * Math.PI * time / period);
    const massX = canvas.width / 2 + displacement;

    // Draw fixed wall
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(fixedX - 10, centerY - 100, 10, 200);

    // Draw spring
    drawSpringCoil(fixedX, centerY, massX, centerY, 15);

    // Draw mass
    ctx.fillStyle = '#667eea';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#667eea';
    ctx.fillRect(massX - 25, centerY - 25, 50, 50);
    ctx.shadowBlur = 0;

    // Draw equilibrium position
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw force arrow
    const force = -displacement * 0.5; // F = -kx
    if (Math.abs(force) > 5) {
        ctx.strokeStyle = '#f5576c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(massX, centerY);
        ctx.lineTo(massX + force, centerY);
        ctx.stroke();

        // Arrow head
        const arrowSize = 10;
        const direction = force > 0 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(massX + force, centerY);
        ctx.lineTo(massX + force - direction * arrowSize, centerY - 5);
        ctx.lineTo(massX + force - direction * arrowSize, centerY + 5);
        ctx.closePath();
        ctx.fillStyle = '#f5576c';
        ctx.fill();
    }
}

function drawSpringCoil(x1, y1, x2, y2, coils) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const coilWidth = 20;

    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    for (let i = 0; i <= coils * 2; i++) {
        const t = i / (coils * 2);
        const x = x1 + dx * t;
        const y = y1 + dy * t + (i % 2 === 0 ? -coilWidth : coilWidth);
        ctx.lineTo(x, y);
    }

    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// ===== Simulation: Circular Motion =====
function drawCircular() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = 120;
    const speed = 2; // radians per second

    // Calculate position
    const angle = time * speed;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    // Draw Path
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Center
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();

    // Draw String/Radius
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Object
    ctx.fillStyle = '#667eea';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#667eea';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Velocity Vector (Tangent)
    // Perpendicular to radius. If r is at angle, v is at angle + 90 deg
    const vx = -Math.sin(angle) * 60;
    const vy = Math.cos(angle) * 60;

    ctx.strokeStyle = '#4facfe'; // Blue for Velocity
    ctx.lineWidth = 3;
    drawArrow(x, y, x + vx, y + vy);

    // Centripetal Force Vector (Inward)
    const fx = -Math.cos(angle) * 60;
    const fy = -Math.sin(angle) * 60;

    ctx.strokeStyle = '#f5576c'; // Red for Force
    ctx.lineWidth = 3;
    drawArrow(x, y, x + fx, y + fy);

    // Labels
    ctx.fillStyle = '#4facfe';
    ctx.font = '14px Inter';
    ctx.fillText('v', x + vx + 10, y + vy);

    ctx.fillStyle = '#f5576c';
    ctx.fillText('Fc', x + fx * 0.5 + 10, y + fy * 0.5);
}

// ===== Simulation: Free Fall =====
function drawFreefall() {
    const startY = 50;
    const g = 200; // gravity (pixels/s²)
    const maxHeight = canvas.height - 100;

    // Calculate position
    let y = startY + 0.5 * g * time * time;

    // Reset when hits ground
    if (y >= maxHeight) {
        time = 0;
        y = startY;
    }

    // Draw dropping object
    const centerX = canvas.width / 2;

    // Trail effect
    ctx.fillStyle = 'rgba(102, 126, 234, 0.1)';
    for (let t = 0; t < time; t += 0.1) {
        const ty = startY + 0.5 * g * t * t;
        if (ty <= maxHeight) {
            ctx.beginPath();
            ctx.arc(centerX, ty, 12, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Draw current object
    ctx.fillStyle = '#667eea';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#667eea';
    ctx.beginPath();
    ctx.arc(centerX, y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw velocity arrow
    const velocity = g * time;
    if (velocity > 10) {
        ctx.strokeStyle = '#f5576c';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, y);
        ctx.lineTo(centerX, y + Math.min(velocity * 0.5, 80));
        ctx.stroke();

        // Arrow head
        const arrowY = y + Math.min(velocity * 0.5, 80);
        ctx.beginPath();
        ctx.moveTo(centerX, arrowY);
        ctx.lineTo(centerX - 6, arrowY - 10);
        ctx.lineTo(centerX + 6, arrowY - 10);
        ctx.closePath();
        ctx.fillStyle = '#f5576c';
        ctx.fill();
    }

    // Draw ground
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, maxHeight);
    ctx.lineTo(canvas.width, maxHeight);
    ctx.stroke();

    // Display stats
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Inter';
    ctx.fillText(`Time: ${time.toFixed(2)}s`, 20, 30);
    ctx.fillText(`Velocity: ${velocity.toFixed(1)} px/s`, 20, 55);
    ctx.fillText(`Distance: ${(y - startY).toFixed(1)} px`, 20, 80);
}

// ===== Simulation: Circuits =====
function drawCircuit(type) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const size = 150;

    // Circuit Path
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 4;
    ctx.beginPath();

    if (type === 'simple' || type === 'series') {
        // Simple Rectangular Loop
        ctx.rect(cx - size, cy - size / 2, size * 2, size);
    } else if (type === 'parallel') {
        // Parallel Branches
        // Top rail
        ctx.moveTo(cx - size, cy - size / 2);
        ctx.lineTo(cx + size, cy - size / 2);
        // Bottom rail
        ctx.moveTo(cx - size, cy + size / 2);
        ctx.lineTo(cx + size, cy + size / 2);
        // Left Vert (Battery side)
        ctx.moveTo(cx - size, cy - size / 2);
        ctx.lineTo(cx - size, cy + size / 2);
        // Branch 1
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx, cy + size / 2);
        // Branch 2
        ctx.moveTo(cx + size, cy - size / 2);
        ctx.lineTo(cx + size, cy + size / 2);
    }
    ctx.stroke();

    // Draw Battery (Left side)
    const batX = cx - size;
    const batY = cy;
    ctx.fillStyle = '#1a1200'; // clear line behind battery
    ctx.fillRect(batX - 10, batY - 20, 20, 40);

    ctx.lineWidth = 4;
    ctx.strokeStyle = '#4facfe'; // Positive plate
    ctx.beginPath(); ctx.moveTo(batX - 5, batY - 15); ctx.lineTo(batX + 15, batY - 15); ctx.stroke();
    ctx.strokeStyle = '#f5576c'; // Negative plate
    ctx.beginPath(); ctx.moveTo(batX, batY + 15); ctx.lineTo(batX + 10, batY + 15); ctx.stroke();

    // Draw Components
    if (type === 'simple') {
        drawResistor(cx + size, cy, true); // Resistor on right
    } else if (type === 'series') {
        drawResistor(cx, cy - size / 2, false); // Top
        drawResistor(cx + size, cy, true);    // Right (or bottom?) 
        // Actually better: Top and Bottom for series? Or Top 1 and Top 2?
        // Let's do Top and Bottom for visual balance
        ctx.fillStyle = '#1a1200'; ctx.fillRect(cx - 20, cy - size / 2 - 10, 40, 20); // clear top
        drawResistor(cx, cy - size / 2, false);
        ctx.fillStyle = '#1a1200'; ctx.fillRect(cx - 20, cy + size / 2 - 10, 40, 20); // clear bottom
        drawResistor(cx, cy + size / 2, false);
    } else if (type === 'parallel') {
        // Resistors on the vertical branches
        drawResistor(cx, cy, true);      // Middle branch
        drawResistor(cx + size, cy, true); // Right branch
    }

    // Animate Electrons
    // Dot positions based on path
    const speed = 2; // px per frame
    const offset = (time * 100 * speed) % (size * 6); // simple loop length approx

    ctx.fillStyle = '#fff';
    // Simplified electron animation for robustness
    if (type === 'parallel') {
        // Visualize flow splitting
        drawElectronFlow(cx - size, cy - size / 2, cx, cy - size / 2, 10, 0); // Top left
        drawElectronFlow(cx, cy - size / 2, cx, cy + size / 2, 5, 0); // Middle down
        drawElectronFlow(cx, cy - size / 2, cx + size, cy - size / 2, 5, 0); // Top right
        drawElectronFlow(cx + size, cy - size / 2, cx + size, cy + size / 2, 5, 0); // Right down
    } else {
        // Simple loop flow (Clockwise)
        // Top
        drawElectronFlow(cx - size, cy - size / 2, cx + size, cy - size / 2, 10, 0);
        // Right
        drawElectronFlow(cx + size, cy - size / 2, cx + size, cy + size / 2, 5, 0);
        // Bottom
        drawElectronFlow(cx + size, cy + size / 2, cx - size, cy + size / 2, 10, 0);
        // Left
        drawElectronFlow(cx - size, cy + size / 2, cx - size, cy - size / 2, 5, 0);
    }
}

function drawResistor(x, y, isVertical) {
    ctx.save();
    ctx.translate(x, y);
    if (isVertical) ctx.rotate(Math.PI / 2);

    ctx.strokeStyle = '#f5576c'; // Hot resistor color
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    // Zig Zag
    ctx.lineTo(-15, -10);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-5, -10);
    ctx.lineTo(0, 10);
    ctx.lineTo(5, -10);
    ctx.lineTo(10, 10);
    ctx.lineTo(15, -10);
    ctx.lineTo(20, 0);
    ctx.stroke();
    ctx.restore();
}

function drawElectronFlow(x1, y1, x2, y2, count, globalOffset) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);

    for (let i = 0; i < count; i++) {
        const t = ((time * 0.5 + i / count) % 1);
        const px = x1 + dx * t;
        const py = y1 + dy * t;

        ctx.fillStyle = '#4facfe'; // Electron Blue
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#4facfe';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// ===== Simulation: Magnetism =====
function drawMagnet(type) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (type === 'coil') {
        // Faraday's Law: Inducing current in a loop
        // Draw Coil (Helix)
        const coilRadius = 60;
        const coils = 8;
        const coilWidth = 200;

        ctx.strokeStyle = '#c0a060'; // Copper
        ctx.lineWidth = 4;

        // Draw Coil Backs
        for (let i = 0; i < coils; i++) {
            const x = cx - coilWidth / 2 + (i * coilWidth / coils);
            ctx.beginPath();
            ctx.arc(x, cy, coilRadius, Math.PI / 2, 3 * Math.PI / 2); // Left half (Back?)
            // Actually ellipses look better
            ctx.ellipse(x, cy, 15, coilRadius, 0, Math.PI / 2, 3 * Math.PI / 2);
            ctx.stroke();
        }

        // Animated Magnet Moving In/Out
        const magnetX = cx + Math.sin(time * 3) * 150; // Moves back and forth

        // Draw Magnet
        const mw = 80;
        const mh = 30;
        ctx.fillStyle = '#f5576c'; // North
        ctx.fillRect(magnetX - mw / 2, cy - mh / 2, mw / 2, mh);
        ctx.fillStyle = '#4facfe'; // South
        ctx.fillRect(magnetX, cy - mh / 2, mw / 2, mh);
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.font = '12px Inter';
        ctx.fillText("N", magnetX - mw / 4, cy + 4);
        ctx.fillText("S", magnetX + mw / 4, cy + 4);

        // Draw Coil Fronts (over magnet)
        ctx.strokeStyle = '#e0c080'; // Brighter Copper
        for (let i = 0; i < coils; i++) {
            const x = cx - coilWidth / 2 + (i * coilWidth / coils);
            ctx.beginPath();
            ctx.ellipse(x, cy, 15, coilRadius, 0, -Math.PI / 2, Math.PI / 2);
            ctx.stroke();
        }

        // Draw Lightbulb (Induced Current)
        const bulbIntensity = Math.abs(Math.cos(time * 3)); // Max speed at center
        const bulbColor = `rgba(255, 255, 100, ${bulbIntensity})`;

        // Wire to bulb
        ctx.strokeStyle = '#c0a060';
        ctx.beginPath();
        ctx.moveTo(cx - coilWidth / 2, cy - coilRadius);
        ctx.lineTo(cx - coilWidth / 2, cy - coilRadius - 50);
        ctx.lineTo(cx + coilWidth / 2, cy - coilRadius - 50); // Bulb position
        ctx.lineTo(cx + coilWidth / 2, cy - coilRadius); // Back to coil end
        ctx.stroke();

        // Bulb Glow
        ctx.fillStyle = bulbColor;
        ctx.shadowBlur = bulbIntensity * 30;
        ctx.shadowColor = '#ffff00';
        ctx.beginPath();
        ctx.arc(cx, cy - coilRadius - 50, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#fff';
        ctx.fillText("Moving Magnet = Electricity", cx, cy + 120);

    } else {
        // Field Lines
        // Draw Bar Magnet Fixed
        const mw = 100;
        const mh = 40;
        ctx.fillStyle = '#f5576c';
        ctx.fillRect(cx - mw / 2, cy - mh / 2, mw / 2, mh);
        ctx.fillStyle = '#4facfe';
        ctx.fillRect(cx, cy - mh / 2, mw / 2, mh);
        ctx.fillStyle = '#fff';
        ctx.fillText("N", cx - mw / 4, cy + 5);
        ctx.fillText("S", cx + mw / 4, cy + 5);

        // Draw Field Lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let r = 60; r < 200; r += 30) {
            ctx.beginPath();
            // Ellipse loops
            ctx.ellipse(cx, cy, r * 1.5, r, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Animated arrows on lines
            const angle = (time) % (Math.PI * 2);
            const ax = cx + Math.cos(angle) * r * 1.5;
            const ay = cy + Math.sin(angle) * r;
            // Only draw arrows outside magnet body roughly
            if (Math.abs(ay) > 20) {
                drawArrow(ax, ay, ax + Math.sin(angle) * 10, ay - Math.cos(angle) * 10);
            }
        }
    }
}

// ===== Simulation: Optics (Refraction) =====
function drawRefraction() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Media Boundary
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(canvas.width, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Normal Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, canvas.height);
    ctx.stroke();

    // Indices of Refraction
    const n1 = 1.0; // Air
    const n2 = 1.5; // Glass

    // Mouse Interaction for Incident Angle
    // Map mouse X to angle (-80 to 80 degrees)
    let interactX = isMouseOver ? (mouse.x - cx) / (canvas.width / 2) : -0.5;
    let theta1 = interactX * (Math.PI / 2.2); // max ~80 deg

    // Snell's Law: n1*sin(t1) = n2*sin(t2)
    // sin(t2) = (n1/n2) * sin(t1)
    let sinTheta2 = (n1 / n2) * Math.sin(theta1);
    let theta2 = Math.asin(sinTheta2);

    // Draw Incident Ray (Top)
    ctx.strokeStyle = '#f5576c'; // Red Laser
    ctx.lineWidth = 4;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#f5576c';
    ctx.beginPath();
    ctx.moveTo(cx - Math.sin(theta1) * 300, cy - Math.cos(theta1) * 300);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    // Draw Refracted Ray (Bottom)
    ctx.strokeStyle = '#4facfe'; // Blue Ray inside glass
    ctx.shadowColor = '#4facfe';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(theta2) * 300, cy + Math.cos(theta2) * 300);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(`Medium 1 (Air, n=${n1})`, cx + 150, cy - 20);
    ctx.fillText(`Medium 2 (Glass, n=${n2})`, cx + 150, cy + 30);

    ctx.font = '14px Inter';
    ctx.fillText(`θ1: ${(theta1 * 180 / Math.PI).toFixed(1)}°`, cx - 50, cy - 50);
    ctx.fillText(`θ2: ${(theta2 * 180 / Math.PI).toFixed(1)}°`, cx + 50, cy + 50);

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText("(Move Mouse Left/Right to change Incident Angle)", cx, canvas.height - 30);
}

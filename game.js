const { Engine, Render, World, Bodies, Body } = Matter;

// Create engine and renderer
const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine
});

// Create a circle (player) body
const player = Bodies.circle(100, 100, 20, {
    restitution: 0.5, // Bounciness
    render: {
        fillStyle: '#ff0000' // Circle color
    }
});

// Add player to the world
World.add(engine.world, player);

// Health tracking
let playerHealth = 100;

// Elimination Logic
function eliminatePlayer() {
    if (playerHealth <= 0) {
        console.log("Player eliminated!");
        // Logic to remove player or reset position
    }
}

// Game update loop
function update() {
    Engine.update(engine);

    // Example health decrease for demonstration
    if (Math.random() < 0.01) { // Random health decrease
        playerHealth -= 1;
        console.log(`Player health: ${playerHealth}`);
    }

    eliminatePlayer();
    requestAnimationFrame(update);
}

// Start rendering
Render.run(render);
update();
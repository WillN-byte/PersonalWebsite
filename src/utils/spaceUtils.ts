export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function createStar(
  canvasWidth: number,
  canvasHeight: number,
  depth: number
) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    z: Math.random() * depth,
    size: randomBetween(0.1, 1.5),
  };
}

export function createShootingStar(canvasWidth: number, canvasHeight: number) {
  const angle = Math.atan2(canvasHeight, canvasWidth);
  const speed = randomBetween(5, 10);
  return {
    x: Math.random() * canvasWidth * 1.5 - canvasWidth * 0.25,
    y: -100,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: randomBetween(1, 3),
    tail: [],
    hue: randomBetween(0, 360), // Full color spectrum
    lifespan: 300,
  };
}

export function createPlanet(canvasWidth: number, canvasHeight: number) {
  return {
    x: randomBetween(0, canvasWidth),
    y: randomBetween(0, canvasHeight),
    radius: randomBetween(2, 8),
    color: `hsl(${randomBetween(0, 360)}, 70%, 50%)`,
    orbitRadius: randomBetween(20, 100),
    orbitSpeed: randomBetween(0.001, 0.005),
    angle: randomBetween(0, Math.PI * 2),
  };
}

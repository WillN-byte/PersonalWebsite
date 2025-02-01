"use client";

import React, { useRef, useEffect } from "react";

const STAR_COUNT = 1000;
const SHOOTING_STAR_COUNT = 1;
const DEPTH = 1000;
const TAIL_LENGTH = 75;

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  lifespan: number;
  hue: number;
  radius: number;
  tail: { x: number; y: number }[]; // Tail is an array of objects with x and y
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function createStar(canvasWidth: number, canvasHeight: number, depth: number) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    z: Math.random() * depth,
    size: randomBetween(0.1, 1.5),
  };
}
function createShootingStar(canvasWidth: number, canvasHeight: number) {
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

// function createPlanet(canvasWidth: number, canvasHeight: number) {
//   return {
//     x: randomBetween(0, canvasWidth),
//     y: randomBetween(0, canvasHeight),
//     radius: randomBetween(2, 8),
//     color: `hsl(${randomBetween(0, 360)}, 70%, 50%)`,
//     orbitRadius: randomBetween(20, 100),
//     orbitSpeed: randomBetween(0.001, 0.005),
//     angle: randomBetween(0, Math.PI * 2),
//   };
// }

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = Array.from({ length: STAR_COUNT }, () =>
      createStar(canvas.width, canvas.height, DEPTH)
    );
    let shootingStars = Array.from({ length: SHOOTING_STAR_COUNT }, () =>
      createShootingStar(canvas.width, canvas.height)
    );

    function drawStar(x: number, y: number, size: number, opacity: number) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"; // Updated opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate stars
      stars.forEach((star) => {
        star.z -= 0.1;
        if (star.z <= 0) {
          star.z = DEPTH;
        }

        const x =
          (star.x - canvas.width / 2) * (DEPTH / star.z) + canvas.width / 2;
        const y =
          (star.y - canvas.height / 2) * (DEPTH / star.z) + canvas.height / 2;
        const s = star.size * (DEPTH / star.z);

        drawStar(x, y, s, Math.min(1, 1 - star.z / DEPTH));
      });

      // Animate shooting stars
      shootingStars.forEach((star: Star, index) => {
        if (!star) return;
        star.x += star.vx;
        star.y += star.vy;
        star.tail.unshift({ x: star.x, y: star.y });
        star.lifespan--;

        if (star.tail.length > TAIL_LENGTH) {
          star.tail.pop();
        }

        if (
          star.lifespan <= 0 ||
          star.y > canvas.height ||
          star.x > canvas.width * 1.2
        ) {
          shootingStars[index] = createShootingStar(
            canvas.width,
            canvas.height
          );
        } else {
          const gradient = ctx.createLinearGradient(
            star.x,
            star.y,
            star.tail[star.tail.length - 1].x,
            star.tail[star.tail.length - 1].y
          );

          gradient.addColorStop(0, `hsla(${star.hue}, 100%, 75%, 1)`);
          gradient.addColorStop(1, `hsla(${star.hue}, 100%, 75%, 0)`);

          ctx.beginPath();
          ctx.moveTo(star.x, star.y);

          for (let i = 0; i < star.tail.length; i++) {
            const point = star.tail[i];
            ctx.lineTo(point.x, point.y);
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = star.radius;
          ctx.stroke();

          drawStar(star.x, star.y, star.radius, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: STAR_COUNT }, () =>
        createStar(canvas.width, canvas.height, DEPTH)
      );
      shootingStars = Array.from({ length: SHOOTING_STAR_COUNT }, () =>
        createShootingStar(canvas.width, canvas.height)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
  );
}

"use client";

import React, { useRef, useEffect } from "react";
import {
  randomBetween,
  createStar,
  createShootingStar,
} from "../utils/spaceUtils";

const STAR_COUNT = 1000;
const SHOOTING_STAR_COUNT = 1;
const DEPTH = 1000;
const TAIL_LENGTH = 75;

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
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
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
      shootingStars.forEach((star, index) => {
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

import React, { useEffect, useRef } from "react";
import "./cursor.css";

function Cursor() {
  const canvasRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Neon grey glowing ball (smaller size)
      const size = 12; // 🔹 reduced from 25 → 12
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, size * 2);
      gradient.addColorStop(0, "#bfbfbf");
      gradient.addColorStop(0.5, "#bfbfbfaa");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, size, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas"></canvas>;
}

export default Cursor;

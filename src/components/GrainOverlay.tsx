"use client";

import { useEffect, useRef } from "react";

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const resize = () => {
      const mobile = window.innerWidth < 768;
      const scale = mobile ? 2 : 1;
      w = Math.floor(window.innerWidth / scale);
      h = Math.floor(window.innerHeight / scale);
      canvas.width = w;
      canvas.height = h;
      if (mobile) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        canvas.style.imageRendering = "pixelated";
      }
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      if (w <= 0 || h <= 0) return;
      const idata = ctx.createImageData(w, h);
      const buffer = idata.data;
      for (let i = 0; i < buffer.length; i += 4) {
        buffer[i] = Math.random() * 255; // R
        buffer[i + 1] = Math.random() * 210; // G
        buffer[i + 2] = Math.random() * 150; // B
        buffer[i + 3] = 8 + Math.random() * 18; // A
      }
      ctx.putImageData(idata, 0, 0);
    };

    // 24fps-ish. Jika user pilih reduce motion, kurangi update.
    intervalId = setInterval(draw, prefersReducedMotion ? 220 : 42);

    // Ubah blend mode saat masuk section gelap
    const darkSections = document.querySelectorAll("[data-grain-dark]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            canvas.style.mixBlendMode = "overlay";
            canvas.style.opacity = "0.25";
          } else {
            canvas.style.mixBlendMode = "multiply";
            canvas.style.opacity = "0.4";
          }
        });
      },
      { threshold: 0.3 }
    );

    darkSections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("resize", resize);
      if (intervalId) clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[60] opacity-40 mix-blend-multiply"
    />
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();
    tl.fromTo(
      bgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.35
      )
      .fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
        0.45
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0.9
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        1.1
      );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProducts = () => {
    const el = document.querySelector("#produk") as HTMLElement | null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[100svh]">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 opacity-0">
        <Image
          src="/hero-bg.jpg"
          alt="Toko bangunan Kholid Jaya"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 [background:radial-gradient(80%_70%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-[clamp(1.25rem,5vw,4rem)] pb-[12svh]">
        <span
          ref={labelRef}
          className="text-[#C9A227] font-semibold text-[0.875rem] uppercase tracking-[0.12em] mb-4 drop-shadow-[0_1px_12px_rgba(0,0,0,0.45)] opacity-0"
        >
          TOKO BANGUNAN // LOBAR
        </span>

        <h1
          className="text-white uppercase"
          style={{
            fontFamily: "var(--font-display), var(--font-sans)",
            fontWeight: 900,
            fontSize: "clamp(3.1rem, 8vw, 6.8rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            textShadow: "0 2px 44px rgba(0,0,0,0.55)",
          }}
        >
          <span ref={line1Ref} className="block opacity-0">
            SOLUSI
          </span>
          <span ref={line2Ref} className="block opacity-0">
            BANGUNAN
          </span>
          <span ref={line3Ref} className="block opacity-0">
            ANDA
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-white mt-6 text-[1.125rem] leading-[1.7] max-w-[520px] drop-shadow-[0_1px_18px_rgba(0,0,0,0.45)] opacity-0"
        >
          Kholid Jaya — lengkapi semua kebutuhan konstruksi Anda di satu tempat.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            ref={ctaRef}
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center rounded-full bg-[#C9A227] text-[#111111] font-semibold text-[1rem] px-9 py-3.5 transition-all duration-300 hover:bg-[#D4AF37] hover:-translate-y-[1px] active:translate-y-0 opacity-0"
          >
            Lihat Produk
          </button>
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#kontak") as HTMLElement | null;
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 72;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className="text-white/90 font-semibold hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/25 hover:decoration-white/60"
          >
            Tanya stok & harga
          </a>
        </div>
      </div>
    </section>
  );
}

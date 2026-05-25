"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { icon: "/icon-semen.png", name: "Semen" },
  { icon: "/icon-besi.png", name: "Besi" },
  { icon: "/icon-cat.png", name: "Cat" },
  { icon: "/icon-atap.png", name: "Atap & Baja" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        gridItemsRef.current.filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16"
      style={{ marginTop: "-44px", zIndex: 10 }}
    >
      {/* Rotated wrapper */}
      <div className="px-4 sm:px-6" style={{ transform: "rotate(-2.5deg)" }}>
        {/* Counter-rotated card */}
        <div
          ref={cardRef}
          className="mx-auto max-w-[1280px] overflow-hidden rounded-[26px] bg-[#F5F3EE] shadow-[0_30px_90px_rgba(0,0,0,0.16)]"
          style={{ transform: "rotate(2.5deg)", opacity: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 p-[clamp(28px,4.5vw,64px)]">
            {/* Left */}
            <div className="lg:col-span-7">
              <span className="text-[#2D6A4F] font-semibold text-[0.875rem] uppercase tracking-[0.12em] block mb-4">
                TENTANG KHOLID JAYA
              </span>
              <h2
                className="text-[#111111] font-bold mb-6"
                style={{
                  fontFamily: "var(--font-display), var(--font-sans)",
                  fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Lengkapi Kebutuhan Bangunan Anda
              </h2>
              <p className="text-[#333333] text-[1.125rem] leading-[1.75] mb-6">
                Kholid Jaya adalah toko bangunan terpercaya di Lombok Barat. Kami
                menyediakan semua kebutuhan konstruksi — dari semen, besi, cat,
                baja ringan, spandek, hingga peralatan listrik dan alat
                pertukangan. Dengan pengalaman bertahun-tahun, kami berkomitmen
                memberikan produk berkualitas dengan harga bersaing.
              </p>

              <a
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#kontak") as HTMLElement | null;
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 font-semibold text-[#C75146] hover:underline underline-offset-4 transition-all duration-300"
              >
                Hubungi Kami →
              </a>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat, i) => (
                  <div
                    key={cat.name}
                    ref={(el) => {
                      gridItemsRef.current[i] = el;
                    }}
                    className="flex flex-col items-center justify-center gap-3 bg-white rounded-2xl shadow-[0_6px_26px_rgba(0,0,0,0.06)] p-6 min-h-[148px]"
                    style={{ opacity: 0 }}
                  >
                    <div className="relative h-16 w-16">
                      <Image
                        src={cat.icon}
                        alt={cat.name}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <span className="text-[#111111] font-semibold text-[0.95rem]">
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


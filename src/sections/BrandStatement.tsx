"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        statementRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="bg-[#E8E4DB] py-28 sm:py-40 px-[clamp(1.25rem,5vw,4rem)] text-center"
    >
      <div className="max-w-[980px] mx-auto">
        <span
          ref={labelRef}
          className="text-[#2D6A4F] font-semibold text-[0.875rem] uppercase tracking-[0.12em] block mb-6"
          style={{ opacity: 0 }}
        >
          KHOLID JAYA
        </span>

        <h2
          ref={statementRef}
          className="text-[#111111] font-bold mb-10"
          style={{
            fontFamily: "var(--font-display), var(--font-sans)",
            fontSize: "clamp(2.05rem, 5vw, 4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            opacity: 0,
          }}
        >
          Pilihan Utama untuk Bangunan Berkualitas di Lombok Barat
        </h2>

        <a
          ref={ctaRef}
          href="#kontak"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#kontak") as HTMLElement | null;
            if (!el) return;
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center rounded-full bg-[#2D6A4F] text-white font-semibold px-11 py-4 transition-all duration-300 hover:bg-[#245C3F] hover:-translate-y-[1px] active:translate-y-0"
          style={{ opacity: 0 }}
        >
          Kunjungi Toko Kami
        </a>
      </div>
    </section>
  );
}


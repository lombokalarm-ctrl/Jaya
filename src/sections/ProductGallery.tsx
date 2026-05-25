"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    image: "/product-semen.jpg",
    name: "Semen & Beton",
    category: "BAHAN DASAR",
    desc: "Semen Portland dan beton instan berkualitas untuk fondasi yang kokoh.",
  },
  {
    image: "/product-besi.jpg",
    name: "Besi & Baja",
    category: "STRUKTUR",
    desc: "Besi beton, wiremesh, dan baja struktural untuk konstruksi Anda.",
  },
  {
    image: "/product-bajaringan.jpg",
    name: "Baja Ringan",
    category: "ATAP & RANGKA",
    desc: "Rangka atap baja ringan tahan karat dengan garansi kualitas.",
  },
  {
    image: "/product-atap.jpg",
    name: "Atap Spandek",
    category: "ATAP & RANGKA",
    desc: "Genteng metal dan atap spandek tahan cuaca ekstrem.",
  },
  {
    image: "/product-cat.jpg",
    name: "Cat & Pelitur",
    category: "FINISHING",
    desc: "Berbagai pilihan cat interior, eksterior, dan pelitur kayu.",
  },
  {
    image: "/product-listrik.jpg",
    name: "Peralatan Listrik",
    category: "KELISTRIKAN",
    desc: "Kabel, saklar, stop kontak, dan komponen listrik lengkap.",
  },
  {
    image: "/product-alat.jpg",
    name: "Alat Pertukangan",
    category: "PERKAKAS",
    desc: "Peralatan tangan dan mesin untuk pekerjaan konstruksi.",
  },
];

export default function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
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
      id="produk"
      ref={sectionRef}
      data-grain-dark
      className="relative bg-[#141414] py-24 sm:py-28"
    >
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#141414] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#141414] to-transparent" />

      {/* Header */}
      <div
        ref={headerRef}
        className="text-center mb-12 px-[clamp(1.25rem,5vw,4rem)]"
        style={{ opacity: 0 }}
      >
        <span className="text-[#C9A227] font-semibold text-[0.875rem] uppercase tracking-[0.12em] block mb-4">
          PRODUK KAMI
        </span>
        <h2
          className="text-[#F5F3EE] font-bold"
          style={{
            fontFamily: "var(--font-display), var(--font-sans)",
            fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Semua yang Anda Butuhkan
        </h2>
      </div>

      {/* Scroll */}
      <div className="no-scrollbar flex gap-7 overflow-x-auto px-[clamp(1.25rem,5vw,4rem)] pb-4">
        {products.map((product, i) => (
          <article
            key={product.name}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="group flex w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-[#1E1E1E] shadow-[0_14px_50px_rgba(0,0,0,0.35)]"
            style={{ opacity: 0 }}
          >
            {/* Image */}
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <span className="text-[#C9A227] font-semibold text-[0.75rem] uppercase tracking-[0.1em] mb-2">
                {product.category}
              </span>
              <h3 className="text-[#F5F3EE] font-bold text-[1.125rem] mb-2">
                {product.name}
              </h3>
              <p className="text-[#A7A7A7] text-[0.9rem] leading-[1.6]">
                {product.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

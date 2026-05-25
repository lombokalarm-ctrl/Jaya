"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const moodImages = [
  { src: "/mood-1.jpg", alt: "Bahan bangunan di lokasi konstruksi" },
  { src: "/mood-2.jpg", alt: "Pengecoran beton" },
  { src: "/mood-3.jpg", alt: "Pemandangan lokasi konstruksi dari udara" },
  { src: "/mood-4.jpg", alt: "Ruang renovasi" },
  { src: "/mood-5.jpg", alt: "Pemasangan atap spandek" },
];

export default function MoodGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.9,
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
      id="galeri"
      ref={sectionRef}
      className="bg-[#E8E4DB] py-20"
    >
      <div className="no-scrollbar flex gap-4 overflow-x-auto px-[clamp(1.25rem,5vw,4rem)] pb-2">
        {moodImages.map((img, i) => (
          <div
            key={img.src}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="relative h-[350px] w-[500px] flex-shrink-0 overflow-hidden rounded-xl"
            style={{ opacity: 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 88vw, 500px"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Truck, Users, Tag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: CheckCircle,
    title: "Kualitas Terjamin",
    desc: "Kami hanya menyediakan produk dari merek terpercaya dan berkualitas tinggi untuk memastikan keamanan dan daya tahan bangunan Anda.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    desc: "Layanan pengiriman ke seluruh area Lombok Barat dengan armada yang handal dan tepat waktu.",
  },
  {
    icon: Users,
    title: "Konsultasi Gratis",
    desc: "Tim ahli kami siap membantu Anda memilih material yang tepat sesuai kebutuhan dan anggaran proyek.",
  },
  {
    icon: Tag,
    title: "Harga Bersaing",
    desc: "Kami menawarkan harga kompetitif tanpa mengorbankan kualitas, dengan berbagai pilihan untuk setiap anggaran.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
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
      id="layanan"
      ref={sectionRef}
      className="bg-[#F5F3EE] py-24 sm:py-28 px-[clamp(1.25rem,5vw,4rem)]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <span className="text-[#2D6A4F] font-semibold text-[0.875rem] uppercase tracking-[0.12em] block mb-4">
            LAYANAN KAMI
          </span>
          <h2
            className="text-[#111111] font-bold"
            style={{
              fontFamily: "var(--font-display), var(--font-sans)",
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Mengapa Memilih Kholid Jaya
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="relative overflow-hidden rounded-2xl bg-white p-10 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                style={{ opacity: 0 }}
              >
                <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#2D6A4F]/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-center mb-6 h-14 w-14 rounded-full bg-[#2D6A4F]/10">
                    <Icon className="h-6 w-6 text-[#2D6A4F]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[#111111] font-bold text-[1.25rem] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-[1.0625rem] leading-[1.75]">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


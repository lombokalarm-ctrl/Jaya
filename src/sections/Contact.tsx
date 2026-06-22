"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. KH Ahmad Dahlan, Desa Perampuan, Lombok Barat, Nusa Tenggara Barat",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "0878-6555-7001",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 08.00 - 17.00 WITA",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
          delay: 0.25,
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
      id="kontak"
      ref={sectionRef}
      className="bg-[#F5F3EE] py-24 sm:py-28 px-[clamp(1.25rem,5vw,4rem)]"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left */}
        <div ref={leftRef} className="lg:col-span-7" style={{ opacity: 0 }}>
          <span className="text-[#2D6A4F] font-semibold text-[0.875rem] uppercase tracking-[0.12em] block mb-4">
            HUBUNGI KAMI
          </span>
          <h2
            className="text-[#111111] font-bold mb-6"
            style={{
              fontFamily: "var(--font-display), var(--font-sans)",
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Siap Membantu Proyek Anda
          </h2>
          <p className="text-[#333333] text-[1.125rem] leading-[1.75] mb-8">
            Kunjungi toko kami di Jl. KH Ahmad Dahlan, Desa Perampuan, Lombok
            Barat. Tim kami siap membantu Anda menemukan material bangunan yang
            tepat untuk kebutuhan di Labuapi, Gerung, Kediri, Kuripan, Lembar,
            dan area Lombok Barat lainnya.
          </p>
          <a
            href="/area-layanan"
            className="mb-8 inline-flex items-center gap-1 font-semibold text-[#C75146] transition-all duration-300 hover:underline underline-offset-4"
          >
            Lihat area layanan kami →
          </a>
          <a
            href="https://wa.me/6287865557001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] text-white font-semibold px-10 py-4 transition-all duration-300 hover:bg-[#128C7E] hover:-translate-y-[1px] active:translate-y-0"
          >
            Hubungi via WhatsApp
          </a>
        </div>

        {/* Right */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={info.title}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="bg-white flex items-start gap-4 rounded-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                style={{ opacity: 0 }}
              >
                <div className="mt-1 h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[#111111] font-bold text-[1rem] mb-1">
                    {info.title}
                  </h4>
                  <p className="text-[#666666] text-[0.95rem] leading-[1.6]">
                    {info.content}
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

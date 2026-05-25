"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Share2, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Produk", target: "#produk" },
  { label: "Layanan", target: "#layanan" },
  { label: "Galeri", target: "#galeri" },
  { label: "Hubungi Kami", target: "#kontak" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleLinkClick = (target: string) => {
    const el = document.querySelector(target) as HTMLElement | null;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      data-grain-dark
      className="bg-[#141414] pt-20 pb-10 px-[clamp(1.25rem,5vw,4rem)]"
      style={{ opacity: 0 }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3
              className="text-[#F5F3EE] font-extrabold text-[1.125rem] uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
            >
              KHOLID JAYA
            </h3>
            <p className="text-[#9A9A9A] text-[0.95rem] leading-[1.75]">
              Toko Bangunan Terpercaya di Lombok Barat sejak 2010.
            </p>
          </div>

          <div>
            <h4 className="text-[#F5F3EE] font-semibold text-[0.875rem] uppercase tracking-[0.1em] mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => handleLinkClick(link.target)}
                    className="text-[#9A9A9A] text-[0.9rem] hover:text-[#C9A227] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F3EE] font-semibold text-[0.875rem] uppercase tracking-[0.1em] mb-4">
              Kontak
            </h4>
            <div className="space-y-2 text-[#9A9A9A] text-[0.9rem] leading-[1.75]">
              <p>Jl. KH Ahmad Dahlan, Desa Perampuan</p>
              <p>Lombok Barat, Nusa Tenggara Barat</p>
              <p>+62 8xx-xxxx-xxxx</p>
              <p>info@kholidjaya.com</p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-[#9A9A9A] text-[0.8125rem]">
            {year} Kholid Jaya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[#9A9A9A] hover:text-[#C9A227] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#9A9A9A] hover:text-[#C9A227] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

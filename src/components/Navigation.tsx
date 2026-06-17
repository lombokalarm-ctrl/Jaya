"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = { label: string; target: string };

export default function Navigation() {
  const navLinks: NavItem[] = useMemo(
    () => [
      { label: "Produk", target: "#produk" },
      { label: "Layanan", target: "#layanan" },
      { label: "Galeri", target: "#galeri" },
      { label: "Hubungi Kami", target: "#kontak" },
    ],
    []
  );

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("#produk");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.target.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pilih section yang paling dominan terlihat
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive("#" + visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.2, 0.4, 0.6] }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [navLinks]);

  const scrollToTarget = (target: string) => {
    const el = document.querySelector(target) as HTMLElement | null;
    if (!el) return;

    // Offset tinggi navbar (72px)
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[70] transition-all duration-300",
          scrolled ? "bg-[#F5F3EE]/85 backdrop-blur-md" : "bg-[#F5F3EE]"
        )}
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-[clamp(1.25rem,4vw,3.5rem)]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#2D6A4F] font-extrabold text-[1.05rem] sm:text-[1.125rem] uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-display), var(--font-sans)" }}
          >
            KHOLID JAYA
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToTarget(link.target)}
                className={cn(
                  "relative text-[0.95rem] font-medium transition-colors duration-300 tracking-[0.02em]",
                  active === link.target
                    ? "text-[#2D6A4F]"
                    : "text-[#111111] hover:text-[#2D6A4F]"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-[#2D6A4F] transition-transform duration-300",
                    active === link.target ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-6 h-[2px] bg-[#111111] transition-transform duration-300"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-[2px] bg-[#111111] transition-opacity duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-[2px] bg-[#111111] transition-transform duration-300"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[65] bg-[#F5F3EE] md:hidden">
          <div className="h-[72px]" />
          <div className="flex h-[calc(100vh-72px)] flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  setMobileOpen(false);
                  scrollToTarget(link.target);
                }}
                className={cn(
                  "text-[1.5rem] font-semibold transition-colors duration-300",
                  active === link.target ? "text-[#2D6A4F]" : "text-[#111111]"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

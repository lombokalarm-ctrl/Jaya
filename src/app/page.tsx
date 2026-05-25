"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GrainOverlay from "@/components/GrainOverlay";
import Navigation from "@/components/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import ProductGallery from "@/sections/ProductGallery";
import Services from "@/sections/Services";
import MoodGallery from "@/sections/MoodGallery";
import BrandStatement from "@/sections/BrandStatement";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProductGallery />
        <Services />
        <MoodGallery />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LeftRail } from "@/components/composite/left-rail/LeftRail";
import { content } from "@/content/hero.copy";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const scope = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial State
      gsap.set(".hero-content", { y: 0, opacity: 1 });
      gsap.set(".left-rail-item", { opacity: 0, x: -20 });

      // 2. ENTRANCE (Cukup Staggered Slide Up)
      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .to(".left-rail-item", { x: 0, opacity: 1, stagger: 0.1, duration: 1 })
        .from(".hero-title", { y: 60, opacity: 0, duration: 1.2 }, "-=0.8")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 1 }, "-=1")
        .from(".hero-meta", { opacity: 0, duration: 1 }, "-=0.5");

      // 3. SCROLL ANIMATION (Layered Exit)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      scrollTl
        .to(".hero-title", { y: -150, opacity: 0, scale: 0.95, ease: "none" }, 0)
        .to(".hero-sub", { y: -100, opacity: 0, ease: "none" }, 0.1)
        .to(".hero-container", { ease: "none" }, 0) // Efek transisi warna background
        .to(".hero-meta", { height: 0, opacity: 0 }, 0);

    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="relative w-full">
      <LeftRail />
      
      {/* Container Utama yang di-pin atau jadi base */}
      <section 
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="hero-content z-10 flex flex-col items-center">
          {/* Headline pake Text biasa aja biar gak ribet di SVG, tapi font-nya digedein */}
          <h1 className="hero-title text-6xl md:text-8xl font-black uppercase">
            {content.headline}
          </h1>

          <p className="hero-sub text-muted-foreground max-w-xl mt-8 text-lg md:text-xl font-medium">
            {content.subheadline}
          </p>
        </div>

        {/* Floating Explore */}
        <div className="hero-meta absolute bottom-10 flex flex-col items-center gap-2">
          <span className="uppercase text-muted">{content.meta}</span>
        </div>
      </section>
    </div>
  );
}
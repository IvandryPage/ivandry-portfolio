'use client'
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsCopy } from "@/contents/projects.copy";
import type { Project } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // REMOVED useSpring - ini source of "deg-deg"
  // Direct transform lebih smooth untuk scroll-driven animation

  // Content parallax - smoother range
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  // Visual transforms - REDUCED intensity
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]); // was 1.2→1→1.1
  const saturation = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.7, 0.7, 0.4]);

  return (
    <section ref={ref} className="relative h-[150vh] flex items-center overflow-hidden">
      {/* Visual Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div 
          style={{ 
            scale: imgScale,
            filter: useTransform(saturation, (s) => `grayscale(${1 - s}) saturate(${s})`),
            opacity: imgOpacity
          }}
          className="relative w-full h-full will-change-transform" // GPU acceleration hint
        >
          <Image 
            src={project.imageUrl || ""} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority={index < 2}
            quality={60} // Prevent quality jumps during scale
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </motion.div>
      </div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.5em] font-bold text-brand">
              PROJ {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-12 bg-brand/30" />
          </div>

          <div className="space-y-4">
            <h2 
              className="text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-[-0.05em] font-medium"
              style={{
                background: "linear-gradient(135deg, var(--foreground), var(--foreground-secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </h2>
            <p className="text-xl md:text-3xl italic font-light text-foreground-secondary leading-tight max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <p className="text-sm leading-relaxed text-foreground-secondary/80">
              {project.concept}
            </p>
            
            <div className="flex flex-col gap-6 justify-between">
              <div className="flex gap-4">
                <Link href={"#"} className="group relative px-6 py-3 overflow-hidden rounded-full border border-brand/50 flex items-center gap-3">
                  <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-xs uppercase tracking-widest group-hover:text-background font-bold transition-colors">View Demo</span>
                  <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-brand group-hover:bg-background" />
                </Link>

                <Link href={"#"} className="px-6 py-3 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground-muted hover:text-white transition-colors">
                  <span>Source Code</span>
                  <span className="text-brand">/</span>
                </Link>
              </div>

              <div className="text-[10px] tracking-widest uppercase text-foreground-muted">
                Stack: <span className="text-foreground-secondary">{project.stack}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative bg-background">
      <div className="sticky top-0 z-50 mix-blend-difference pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-8 md:px-12 lg:px-24">
          <h2 className="text-[10px] tracking-[0.5em] font-medium text-foreground">WORKS</h2>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-foreground-muted font-mono tracking-tighter">ARCHIVE — 26</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {projectsCopy.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
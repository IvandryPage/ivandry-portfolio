'use client'
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const t = useTranslations('projects.interface'); // Ambil namespace interface
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45, damping: 25, restDelta: 0.001
  });

  const contentOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [40, 0, 0, -40]);
  const imgScale = useTransform(smoothProgress, [1, 0.5, 1], [1.1, 1, 1.1]);
  const saturation = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const imgOpacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.2, 0.6, 0.6, 0.2]);

  return (
    <section ref={ref} className="relative h-[120vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div 
          style={{ 
            scale: imgScale,
            filter: useTransform(saturation, (s) => `grayscale(${1 - s}) saturate(${s})`),
            opacity: imgOpacity
          }}
          className="relative w-full h-full"
        >
          <Image 
            src={project.imageUrl || ""} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.5em] font-bold text-brand uppercase">
              {t('projectIndexPrefix')} {String(index + 1).padStart(2, "0")}
            </span>
            <motion.div 
               initial={{ width: 0 }}
               animate={isInView ? { width: 48 } : { width: 0 }}
               className="h-px bg-brand/50" 
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.05em] font-medium text-foreground">
              {project.title}
            </h2>
            <p className="text-xl md:text-2xl italic font-light text-foreground-secondary/90 leading-tight max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-10 border-t border-white/10">
            <div className="space-y-4">
               <h4 className="text-[9px] tracking-[0.2em] uppercase text-foreground-muted font-bold">{t('conceptLabel')}</h4>
               <p className="text-sm leading-relaxed text-foreground-secondary">
                 {project.concept}
               </p>
            </div>
            
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-wrap gap-4">
                <Link href={project.githubUrl} className="group relative px-6 py-2.5 rounded-full border border-brand/40 overflow-hidden flex items-center gap-3">
                   <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold group-hover:text-background transition-colors">
                    {t('actions.source')}
                   </span>
                </Link>
                
                <Link href={project.liveUrl} className="px-4 py-2.5 text-[10px] uppercase tracking-widest text-foreground-muted hover:text-white transition-colors">
                  {t('actions.demo')}
                </Link>
              </div>

              <div className="text-[10px] tracking-[0.2em] uppercase text-foreground-muted font-serif">
                {Array.isArray(project.stack) ? project.stack.join(" • ") : project.stack}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function ProjectsSection() {
  const t = useTranslations('projects');
  const projectsData = t.raw('projects');
  return (
    <section className="relative bg-background">
      {/* SECTION LABEL */}
      <div className="sticky top-0 z-50 mix-blend-difference pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-8 md:px-12 lg:px-24">
          <h2 className="text-[10px] tracking-[0.5em] font-medium text-foreground uppercase">{t('header.title')}</h2>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-foreground-muted font-serif tracking-tighter uppercase">{t('header.meta')}</span>
          </div>
        </div>
      </div>

      {/* SECTION CONTENT */}
      <div className="relative">
        {projectsData.map((project: Project, index: number) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsCopy } from "@/contents/projects.copy";
import type { Project } from "@/types/project.types";
import Image from "next/image";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 0.95]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 0.6, 0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const Icon = project.icon;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={
        {
          '--project-color': project.color,
        } as React.CSSProperties
      }
    >
      {/* Atmospheric Background */}
      {project.imageUrl && (
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={project.imageUrl}
            alt=""
            fill
            className="object-cover opacity-40"
            priority={index === 0}
            quality={75}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  60% 60% at 30% 40%,
                  color-mix(in srgb, var(--project-color) 33%, transparent),
                  transparent 70%
                ),
                linear-gradient(
                  180deg,
                  var(--background) 10%,
                  transparent 40%,
                  var(--background) 90%
                )
              `,
            }}
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12">
          
          {/* Index Marker */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: 'var(--project-color)' }}
            >
              PROJECT
            </span>
            <span
              className="text-6xl font-light leading-none"
              style={{ color: 'var(--project-color)' }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {Icon && (
              <Icon 
                className="w-5 h-5" 
                style={{ color: 'var(--project-color)' }} 
              />
            )}
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-7 space-y-10">
            <span
              className="inline-block px-4 py-1 text-xs tracking-wide"
              style={{ 
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--project-color)', 
                color: 'var(--project-color)' 
              }}
            >
              {project.year}
            </span>

            <h2
              className="text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] font-medium"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--project-color), color-mix(in srgb, var(--project-color) 53%, transparent))`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {project.title}
            </h2>

            <p className="text-xl italic text-foreground-secondary max-w-xl">
              {project.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h3 
                  className="text-xs tracking-[0.25em] uppercase mb-2" 
                  style={{ color: 'var(--project-color)' }}
                >
                  Vision
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {project.concept}
                </p>
              </div>

              <div>
                <h3 
                  className="text-xs tracking-[0.25em] uppercase mb-2" 
                  style={{ color: 'var(--project-color)' }}
                >
                  Experience
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {project.interaction}
                </p>
              </div>
            </div>

            <p className="text-xs tracking-wide text-foreground-muted pt-4">
              {project.stack}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


export function ProjectsSection() {
  return (
    <section className="relative">
      <div className="sticky top-0 z-10 py-12 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-sm tracking-[0.3em] uppercase font-medium">
            SELECTED WORKS
          </h2>
          <span className="text-xs text-white/40">2024—2026</span>
        </div>
      </div>

      {projectsCopy.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
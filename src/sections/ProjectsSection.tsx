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

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50]);

  const isEven = index % 2 === 0;
  const Icon = project.icon;

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className="min-h-screen flex items-center py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Marker */}
        <div className="mb-12 flex items-center gap-4">
          <motion.div
            className="w-12 h-px"
            style={{ backgroundColor: project.color }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: project.color }}>
            LEVEL {String(index + 1).padStart(2, "0")}
          </span>
          <Icon className="w-4 h-4" style={{ color: project.color }} />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
          {/* Copy */}
          <div className={`space-y-8 ${isEven ? "" : "lg:col-start-2"}`}>
            <motion.div
              className="inline-block px-4 py-1 border text-xs tracking-wide font-medium"
              style={{ borderColor: project.color, color: project.color }}
            >
              {project.year}
            </motion.div>

            <div className="space-y-3">
              <motion.h2
                className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] font-bold"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {project.title}
              </motion.h2>
              <p className="text-xl text-white/60 italic font-light">
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h3 className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: project.color }}>
                THE VISION
              </h3>
              <p className="text-base leading-relaxed text-white/80 max-w-xl">
                {project.concept}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: project.color }}>
                THE EXPERIENCE
              </h3>
              <p className="text-base leading-relaxed text-white/80 max-w-xl">
                {project.interaction}
              </p>
            </div>

            <p className="text-xs text-white/40 tracking-wide pt-6">
              {project.stack}
            </p>
          </div>

          {/* Visual */}
          <motion.div className={`relative ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}>
            <div className="aspect-4/5 relative overflow-hidden rounded-lg">
              <Image src={project.imageUrl ?? null} alt={project.title} className="w-full h-full object-cover" fill />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-40"
                style={{ background: `linear-gradient(135deg, ${project.color}88, transparent)` }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="relative">
      <div className="sticky top-0 z-10 py-12 px-6 md:px-12 lg:px-24 bg-background/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h2 className="text-sm tracking-[0.3em] uppercase font-medium">
            SELECTED WORKS
          </motion.h2>
          <span className="text-xs text-white/40">2024—2026</span>
        </div>
      </div>

      {projectsCopy.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}

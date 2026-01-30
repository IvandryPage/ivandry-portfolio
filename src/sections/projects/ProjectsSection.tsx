"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/composite/project-card/ProjectCard";
import { content } from "@/content/projects.copy";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = content.data;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalProjects = projects.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalProjects * 100}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * totalProjects),
              totalProjects - 1
            );
            setActiveIndex(index);
          },
        },
      });

      // Animasi pergantian konten (Subtle slide up & fade)
      tl.fromTo(".project-content-wrapper", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 1 }
      );

    }, triggerRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div ref={triggerRef} className="bg-background-primary">
      <section
        ref={sectionRef}
        id="projects"
        className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24 flex flex-col"
      >
        {/* Header */}
        <header className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-foreground-primary tracking-tighter">
            {content.headline}
          </h2>
          <p className="text-foreground-secondary italic">
            {content.subheadline}
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_300px] gap-12 items-start flex-1">
          
          {/* Main Content Area */}
          <div className="project-content-wrapper col-start-2">
            <ProjectCard 
              key={activeIndex} 
              project={projects[activeIndex]} 
              index={activeIndex} 
            />
          </div>

          {/* Preview column (Ngilang pas discroll) */}
          <aside className="hidden lg:flex flex-col gap-8 border-l border-background-elevated pl-10 h-full">
            <h4 className="text-accent text-xs mb-4">Up Next</h4>
            {projects.map((project, index) => {
              // Logic: Hanya tampilkan project SETELAH activeIndex
              // Semakin jauh index-nya, semakin pudar
              const isPast = index <= activeIndex;
              if (isPast) return null;

              return (
                <div 
                  key={project.title} 
                  className="transition-all duration-500 ease-emphasis opacity-60 hover:opacity-100"
                >
                  <span className="font-mono text-[10px] text-accent-main block mb-2">
                    {index.toString().padStart(2, '0')}
                  </span>
                  <p className="text-sm font-bold text-foreground-secondary group-hover:text-foreground-primary">
                    {project.title}
                  </p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </div>
  );
}
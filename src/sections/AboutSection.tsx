'use client'

import { Experience } from '@/types/experience.types'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

export function AboutSection() {
  const t = useTranslations('about')
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 25,
    restDelta: 0.001 
  })

  return (
    <section 
      ref={containerRef} 
      className="relative bg-background border-t border-border/40 py-24 md:py-40 overflow-x-clip"
    >
      {/* SECTION HEADER (Sticky) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 z-40 mix-blend-difference">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-8 md:px-12 lg:px-24">
            <h2 className="text-[10px] tracking-[0.5em] font-medium text-foreground uppercase">
              {t("header.title")}
            </h2>
            <div className="hidden md:block text-[10px] text-foreground-muted font-mono tracking-tighter uppercase opacity-50">
              {t("header.meta")}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: MANIFESTO & SKILLS */}
          <div className="lg:col-span-6 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-bold">
                  {t('hero.overline')}
                </span>
                <h3 className="text-4xl md:text-5xl xl:text-[4.5rem] leading-[0.9] tracking-[-0.05em] font-medium text-foreground">
                  {t.rich('hero.title', {
                    br: () => <br />,
                    serif: (chunks) => (
                      <span className="italic font-serif font-light text-foreground-secondary/40 text-[0.9em]">
                        {chunks}
                      </span>
                    ),
                    brand: (chunks) => <span className="text-brand">{chunks}</span>
                  })}
                </h3>
              </div>

              {/* Identity Data */}
              <div className="py-6 border-y border-border/20 flex flex-wrap gap-x-12 gap-y-6">
                {t.raw("identityBrief").map((item: { label: string; value: string }, index: number) => (
                  <div 
                    key={index} 
                    className={`space-y-1 ${index !== 0 ? 'md:border-l md:border-border/20 md:pl-12' : ''}`}
                  >
                    <span className="text-[8px] font-light text-brand/60 uppercase tracking-widest block">
                      {item.label}
                    </span>
                    <p className="text-xs font-light text-foreground uppercase tracking-widest">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Competencies & Principles Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> {t("philosophy.competencies.label")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.raw("philosophy.competencies.items").map((skill: string, i: number) => (
                    <div key={i} className="px-3 py-1.5 border border-border/40 rounded-[2px] text-[10px] font-mono uppercase tracking-tighter text-foreground-secondary hover:border-brand/50 hover:text-brand transition-colors duration-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> {t("philosophy.principles.label")}
                </h4>
                <div className="space-y-4">
                  {t.raw("philosophy.principles.items").map((value: string, i: number) => (
                    <div key={i} className="group flex items-baseline gap-2">
                      <span className="text-[10px] font-mono text-brand/40 italic">{"//"}</span>
                      <p className="text-sm text-foreground-secondary font-light tracking-tight leading-snug">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EXPERIENCE TIMELINE */}
          <div className="lg:col-span-5 relative">
            {/* The Vertical Line */}
            <div className="absolute left-0 lg:left-0 top-0 w-px h-full bg-border/20" />
            <motion.div 
              style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
              className="absolute left-0 lg:left-0 top-0 w-px h-full bg-brand origin-top z-10"
            />

            <div className="space-y-20 pl-10 md:pl-12">
              {t.raw('experiences').map((exp: Experience, index: number) => (
                <TimelineItem key={index} exp={exp} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp }: { exp: Experience }) {
  const ref = useRef(null);
  // once: false agar warnanya bisa balik lagi kalau di-scroll ke atas
  const isInView = useInView(ref, { margin: "5% 0px -5% 0px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* THE DOT */}
      <div className={`
        absolute -left-[44.5px] md:-left-[52.5px] top-1.5 w-2.5 h-2.5 rounded-full 
        bg-background border transition-all duration-700 z-20 flex items-center justify-center
        ${isInView ? 'border-brand' : 'border-border'}
      `}>
        {/* Inner Dot: Otomatis muncul kalau garis sudah sampai (isInView) atau di-hover */}
        <div className={`
          w-1.5 h-1.5 bg-brand rounded-full transition-transform duration-500
          ${isInView ? 'scale-100' : 'scale-0 group-hover:scale-100'}
        `} />
      </div>

      <div className="space-y-4">
        {/* Periode juga bisa berubah warna biar makin dapet feel "active state"-nya */}
        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-700 ${isInView ? 'text-brand' : 'text-brand/60'}`}>
          {exp.period}
        </span>
        
        <div className="space-y-1">
          <h4 className="flex flex-wrap items-baseline gap-x-2">
            <span className={`text-xl font-serif italic font-light tracking-tight transition-colors duration-700 ${isInView ? 'text-foreground' : 'text-foreground/90'}`}>
              {exp.position}
            </span>
            <span className="text-foreground-muted/30 font-extralight">/</span>
            <span className="text-foreground-secondary/90 uppercase text-[10px] font-medium tracking-[0.15em]">
              {exp.institution}
            </span>
          </h4>
        </div>

        <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light max-w-md">
          {exp.description}
        </p>
      </div>
    </motion.div>
  )
}
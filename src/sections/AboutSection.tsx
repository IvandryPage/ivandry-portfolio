'use client'

import { Experience } from '@/types/experience.types'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

export function AboutSection() {
  const t = useTranslations('about')
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25 })

  return (
    <section ref={containerRef} className="relative bg-background border-t border-border/40 py-40 overflow-visible">
      
      {/* HEADER */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 z-40 mix-blend-difference">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-8 md:px-12 lg:px-24">
            <h2 className="text-[10px] tracking-[0.5em] font-medium text-foreground uppercase">{t("header.title")}</h2>
            <div className="hidden md:block text-[10px] text-foreground-muted font-mono tracking-tighter uppercase opacity-50">
              {t("header.meta")}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl xl:max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: THE MANIFESTO */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-brand font-bold">{t('hero.overline')}</span>
                <h3 className="text-4xl lg:text-5xl xl:text-[4.5rem] leading-[0.85] tracking-[-0.05em] font-medium text-foreground">
                  {t.rich('hero.title', {
                    br: () => <br />,
                    serif: (chunks) => (
                      <span className="italic font-serif font-light text-foreground-secondary/40 text-[0.9em]">
                        {chunks}
                      </span>
                    ),
                    brand: (chunks) => (
                      <span className="text-brand">
                        {chunks}
                      </span>
                    )
                  })}
                </h3>
              </div>

              {/* Personal Data Strip */}
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

            {/* Principles & Stack */}
            <div className="grid grid-cols-2 lg:gap-12 xl:gap-24">
              <div className="space-y-4">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> {t("philosophy.competencies.label")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.raw("philosophy.competencies.items").map((skill: string, index: number) => (
                    <div 
                      key={index} 
                      className="group relative px-3 py-1.5 border border-border/40 hover:border-brand/50 transition-colors duration-500 overflow-hidden rounded-[2px]"
                    >
                      <div className="absolute inset-0 bg-brand/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative text-[10px] font-mono uppercase tracking-tighter text-foreground-secondary group-hover:text-brand transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> {t("philosophy.principles.label")}
                </h4>
                <div className="space-y-3">
                  {t.raw("philosophy.principles.items").map((value: string, index: number) => (
                    <div key={index} className="group flex items-baseline gap-2">
                      <span className="text-[10px] font-mono text-brand/40 group-hover:text-brand transition-colors italic">{"//"}</span>
                      <p className="text-sm text-foreground-secondary font-light tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE EXPERIENCE TIMELINE */}
          <div className="lg:col-span-6 relative pt-4 md:pt-32">
            <div className="absolute left-0 top-0 w-px h-full bg-border/20" />
            <motion.div 
              style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
              className="absolute left-0 top-0 w-px h-full bg-brand origin-top z-10"
            />

            <div className="space-y-20 pl-10">
              {t.raw('experiences').map((experience: Experience, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="relative group"
                >
                  <div className="absolute -left-[44.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border border-border group-hover:border-brand transition-all duration-500 z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="w-full h-full bg-brand rounded-full scale-[0.6]" 
                    />
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-brand/60 uppercase tracking-[0.2em]">{experience.period}</span>
                      <h4 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xl font-serif italic font-light text-foreground/90 tracking-tight">
                        {experience.position}
                      </span>
                      <span className="text-foreground-muted/30 font-extralight select-none">
                        /
                      </span>
                      <span className="text-foreground-secondary/90 uppercase text-[10px] md:text-xs font-medium tracking-[0.15em]">
                        {experience.institution}
                      </span>
                    </h4>
                    <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
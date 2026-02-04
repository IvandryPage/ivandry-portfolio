'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { aboutCopy } from '@/contents/about.copy'

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25 })

  return (
    <section ref={containerRef} className="relative bg-background border-t border-border/40 py-40 overflow-visible">
      
      {/* 1. STICKY LABEL */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 z-40 mix-blend-difference">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-8 md:px-12 lg:px-24">
            <h2 className="text-[10px] tracking-[0.5em] font-medium text-foreground uppercase">Identity</h2>
            <div className="hidden md:block text-[10px] text-foreground-muted font-mono tracking-tighter uppercase opacity-50">
              Dossier — 02
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT: THE MANIFESTO */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] uppercase text-brand font-bold">Behind the Logic</span>
                <h3 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.85] tracking-[-0.05em] font-medium text-foreground">
                  Obsessed with the <br />
                  <span className="italic font-serif font-light text-foreground-secondary/40 text-[0.9em]">why</span> behind the <span className="text-brand">how.</span>
                </h3>
              </div>

              {/* Personal Data Strip */}
              <div className="py-6 border-y border-border/20 flex flex-wrap gap-x-12 gap-y-6">
                <div className="space-y-1">
                  <span className="text-[8px] font-light text-brand/60 uppercase tracking-widest">Subject</span>
                  <p className="text-xs font-light text-foreground uppercase tracking-widest">
                    {aboutCopy.name}
                  </p>
                </div>
                <div className="space-y-1 border-l border-border/20 pl-12">
                  <span className="text-[8px] font-light text-brand/60 uppercase tracking-widest">Background</span>
                  <p className="text-xs font-light text-foreground uppercase tracking-widest">
                    Information Systems <span className="text-[10px] text-foreground-muted font-normal italic">@UPNVYK</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Principles & Stack - Jarak pt-10 dihilangkan, diganti margin top tipis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
              {/* 1. CURIOSITY STACK */}
              <div className="space-y-4">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> Curiosity Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutCopy.skills.map(s => (
                    <div 
                      key={s} 
                      className="group relative px-3 py-1.5 border border-border/40 hover:border-brand/50 transition-colors duration-500 overflow-hidden rounded-[2px]"
                    >
                      <div className="absolute inset-0 bg-brand/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative text-[10px] font-mono uppercase tracking-tighter text-foreground-secondary group-hover:text-brand transition-colors">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. DRIVE / PRINCIPLES */}
              <div className="space-y-4">
                <h4 className="text-[9px] tracking-[0.3em] uppercase text-brand font-bold italic font-serif flex items-center gap-2">
                  <span className="w-4 h-px bg-brand/30" /> Drive
                </h4>
                <div className="space-y-3">
                  {aboutCopy.values.map(v => (
                    <div key={v} className="group flex items-baseline gap-2">
                      <span className="text-[10px] font-mono text-brand/40 group-hover:text-brand transition-colors italic">/ /</span>
                      <p className="text-sm text-foreground-secondary font-light tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE EXPERIENCE TIMELINE */}
          <div className="lg:col-span-5 relative pt-4 md:pt-32">
            <div className="absolute left-0 top-0 w-px h-full bg-border/20" />
            <motion.div 
              style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
              className="absolute left-0 top-0 w-px h-full bg-brand origin-top z-10"
            />

            <div className="space-y-20 pl-10">
              {aboutCopy.timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="relative group"
                >
                  <div className="absolute -left-11.25 top-1.5 w-2.5 h-2.5 rounded-full bg-background border border-border group-hover:border-brand transition-all duration-500 z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="w-full h-full bg-brand rounded-full scale-[0.6]" 
                    />
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-brand/60 uppercase tracking-[0.2em]">{item.period}</span>
                    <h4 className="text-xl font-medium text-foreground leading-none">
                      {item.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "italic font-serif font-light opacity-80" : ""}>
                          {word}{' '}
                        </span>
                      ))}
                    </h4>
                    <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                      {item.description}
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
'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { aboutCopy } from '@/contents/about.copy'

function TimelineItem({ 
  item, 
  isLeft 
}: { 
  item: typeof aboutCopy.timeline[0]
  isLeft: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  // Smooth parallax untuk item timeline
  const yParallax = useTransform(scrollYProgress, [0, 1], [isLeft ? 40 : 80, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax, opacity }}
      className="relative grid grid-cols-1 md:grid-cols-2 group"
    >
      {/* Content */}
      <div
        className={`px-6 pb-4 ${
          isLeft
            ? 'md:pr-20 md:text-right'
            : 'md:pl-20 md:col-start-2'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-muted font-mono">
          {item.period}
        </span>

        <h3 className="mt-2 text-xl font-medium text-foreground transition-colors group-hover:text-brand">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary/80 max-w-md ml-auto mr-0 md:mr-0 md:ml-auto">
          {item.description}
        </p>
      </div>

      {/* Dot - Menggunakan warna brand */}
      <div
        className="absolute left-1/2 top-2 w-2.5 h-2.5 rounded-full -translate-x-1/2 border-2 border-background z-10"
        style={{ 
          backgroundColor: "var(--brand)",
          boxShadow: `0 0 15px var(--brand)`
        }}
      />
    </motion.div>
  )
}

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 })

  const headerOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const headerY = useTransform(smoothProgress, [0, 0.15], [50, 0])

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* ===== Expanded Identity Header ===== */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-48 max-w-4xl space-y-16"
        >
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-brand font-bold">
              Identity
            </span>

            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em] font-medium">
              <span className="text-foreground">I am </span>
              <span 
                style={{ 
                  background: "linear-gradient(135deg, var(--brand), var(--color-warm-amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {aboutCopy.name}
              </span>
            </h2>

            <p className="text-xl md:text-2xl italic font-light text-foreground-secondary leading-relaxed max-w-3xl">
              {aboutCopy.summary}
            </p>
          </div>

          {/* Identity Grid - Re-styled for coherence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border">
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted font-bold">
                Core Stack
              </h3>
              <ul className="space-y-3 text-sm text-foreground-secondary">
                {aboutCopy.skills?.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Principles */}
            <div className="space-y-4">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted font-bold">
                Principles
              </h3>
              <ul className="space-y-3 text-sm text-foreground-secondary">
                {aboutCopy.values?.map((value) => (
                  <li key={value} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted font-bold">
                Status
              </h3>
              <div className="space-y-4 text-sm text-foreground-secondary">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_var(--success)]" />
                  <span>{aboutCopy.availability}</span>
                </div>
                <p className="opacity-60">{aboutCopy.location} — {aboutCopy.timezone}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative">
          {/* Animated Center Line */}
          <motion.div 
            style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
            className="absolute left-1/2 top-0 h-full w-px bg-linear-to-b from-brand via-border to-transparent -translate-x-1/2" 
          />

          <div className="space-y-40">
            {aboutCopy.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
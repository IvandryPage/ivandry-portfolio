'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { aboutCopy } from '@/contents/about.copy'

function TimelineItem({ 
  item, 
  index, 
  isLeft 
}: { 
  item: typeof aboutCopy.timeline[0]
  index: number
  isLeft: boolean 
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [isLeft ? 40 : 80, 0]
  )

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 md:grid-cols-2"
    >
      {/* Content */}
      <div
        className={`px-6 ${
          isLeft
            ? 'md:pr-20 md:text-right'
            : 'md:pl-20 md:col-start-2'
        }`}
      >
        <span className="text-xs uppercase tracking-widest text-white/40">
          {item.period}
        </span>

        <h3 className="mt-2 text-lg font-medium text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/65">
          {item.description}
        </p>
      </div>

      {/* Dot */}
      <div
        className="absolute left-1/2 top-2 w-3 h-3 rounded-full -translate-x-1/2"
        style={{ 
          backgroundColor: item.color,
          boxShadow: `0 0 12px ${item.color}40`
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

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const headerY = useTransform(scrollYProgress, [0, 0.15], [40, 0])

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* ===== Expanded Identity Header ===== */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="mb-40 max-w-4xl space-y-12"
        >
          {/* Section label */}
          <span className="text-xs tracking-[0.3em] uppercase text-white/40">
            About
          </span>

          {/* Name & Title */}
          <div className="space-y-4">
            <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.1] tracking-[-0.02em] font-semibold">
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-br from-[#00d4ff] to-[#a000ff] bg-clip-text text-transparent">
                {aboutCopy.name}
              </span>
            </h2>

            {/* Role/Title */}
            <p className="text-xl font-medium text-white/60">
              {aboutCopy.role || 'Product Designer & Developer'}
            </p>
          </div>

          {/* Summary */}
          <p className="text-lg leading-relaxed text-white/75 max-w-2xl">
            {aboutCopy.summary}
          </p>

          {/* Identity Grid - Skills/Values/Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#00d4ff]">
                Core Skills
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                {(aboutCopy.skills || [
                  'UI/UX Design',
                  'Frontend Development',
                  'Design Systems',
                  'Product Strategy'
                ]).map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#ff0080]">
                Principles
              </h3>
              <ul className="space-y-2 text-sm text-white/60">
                {(aboutCopy.values || [
                  'User-centered',
                  'Detail-oriented',
                  'Iterative process',
                  'Accessible design'
                ]).map((value) => (
                  <li key={value} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#ff0080]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Location/Contact */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#39ff14]">
                Currently
              </h3>
              <div className="space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#39ff14]" />
                  {aboutCopy.location || 'Based in Jakarta'}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#39ff14]" />
                  {aboutCopy.availability || 'Open to opportunities'}
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#39ff14]" />
                  {aboutCopy.timezone || 'GMT+7'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2" />

          <div className="space-y-32">
            {aboutCopy.timeline.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
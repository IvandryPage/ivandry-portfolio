'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { aboutCopy } from '@/contents/about.copy'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0])

  return (
    <section
      ref={ref}
      className='min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24'
    >
      <motion.div style={{ opacity, y }} className='max-w-7xl mx-auto w-full'>
        <div className='mb-16 flex items-center gap-4'>
          <motion.div
            className='w-12 h-px bg-linear-to-r from-transparent via-white/40 to-transparent'
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.span
            className='text-xs tracking-[0.3em] uppercase font-medium'
            style={{
              background:
                'linear-gradient(90deg, var(--color-cyber-purple), var(--color-neon-pink))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {aboutCopy.chapter}
          </motion.span>
        </div>

        <div className='grid lg:grid-cols-12 gap-16 lg:gap-24'>
          <div className='lg:col-span-7 space-y-12'>
            <h2 className='text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] font-bold'>
              <motion.span
                className='inline-block'
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-electric-blue), var(--color-cyber-purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {aboutCopy.headline.line1}
              </motion.span>
              <br />
              <motion.span
                className='italic font-light'
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-neon-pink), var(--color-acid-green))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {aboutCopy.headline.line2}
              </motion.span>
              <br />
              <span className='text-white/90'>
                {aboutCopy.headline.line3}
              </span>
            </h2>

            <div className='space-y-8 max-w-2xl'>
              <p className='text-lg leading-relaxed text-white/80'>
                {aboutCopy.paragraphs.intro}
                <motion.span
                  className='font-semibold'
                  style={{ color: 'var(--color-electric-blue)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {aboutCopy.paragraphs.introHighlight}
                </motion.span>
                {aboutCopy.paragraphs.introRest}
              </p>

              <p className='text-lg leading-relaxed text-white/80'>
                {aboutCopy.paragraphs.gameDev}
                {aboutCopy.paragraphs.gameDevOptions.map((item, i) => (
                  <motion.span
                    key={item}
                    className='font-semibold'
                    style={{
                      color: [
                        'var(--color-neon-pink)',
                        'var(--color-cyber-purple)',
                        'var(--color-acid-green)',
                      ][i],
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    {i < 2 ? ', ' : ''}
                  </motion.span>
                ))}
                {aboutCopy.paragraphs.gameDevEnd}
              </p>

              <p className='text-lg leading-relaxed text-white/80'>
                {aboutCopy.paragraphs.closing}
                <span className='italic font-light'>
                  {aboutCopy.paragraphs.closingEmphasis}
                </span>
                {aboutCopy.paragraphs.closingEnd}
              </p>
            </div>
          </div>

          <div className='lg:col-span-5 space-y-12 pt-8'>
            <div className='space-y-6'>
              <h3
                className='text-xs tracking-[0.2em] uppercase font-medium'
                style={{ color: 'var(--color-electric-blue)' }}
              >
                {aboutCopy.skillTree.title}
              </h3>

              <div className='space-y-4'>
                {aboutCopy.skillTree.items.map(item => (
                  <motion.div
                    key={item.label}
                    className='pb-3 border-b border-white/10'
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <p className='text-white/90 flex items-center gap-2'>
                      <span
                        className='w-2 h-2 rounded-full'
                        style={{ backgroundColor: `var(${item.color})` }}
                      />
                      {item.label}
                    </p>
                    <p className='text-sm text-white/50 mt-1 ml-4'>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className='space-y-4 pt-6'>
              <h3
                className='text-xs tracking-[0.2em] uppercase font-medium'
                style={{ color: 'var(--color-neon-pink)' }}
              >
                {aboutCopy.belief.title}
              </h3>
              <motion.blockquote
                className='text-base italic text-white/70 border-l-2 pl-6 leading-relaxed'
                style={{ borderColor: 'var(--color-neon-pink)' }}
                whileHover={{ x: 4 }}
                dangerouslySetInnerHTML={{ __html: aboutCopy.belief.quote }}
              />
            </div>

            <div className='space-y-4 pt-6'>
              <h3
                className='text-xs tracking-[0.2em] uppercase font-medium'
                style={{ color: 'var(--color-acid-green)' }}
              >
                {aboutCopy.obsession.title}
              </h3>
              <p className='text-sm text-white/70 leading-relaxed'>
                {aboutCopy.obsession.text}
                <span className='italic'>
                  {aboutCopy.obsession.emphasis}
                </span>
                {aboutCopy.obsession.end}
              </p>
            </div>

            <motion.div
              className='flex items-center gap-3 pt-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                className='w-3 h-3 rounded-full'
                style={{ backgroundColor: 'var(--color-acid-green)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className='text-sm text-white/60'>
                {aboutCopy.status}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

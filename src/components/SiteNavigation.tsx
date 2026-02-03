'use client'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Works', href: '#works', color: 'var(--color-electric-blue)' },
  { label: 'About', href: '#about', color: 'var(--color-neon-pink)' },
  { label: 'Contact', href: '#contact', color: 'var(--color-acid-green)' },
]

export function SiteNavigation() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    return scrollY.on('change', v => setIsScrolled(v > 100))
  }, [scrollY])

  return (
    <>
      {/* ================= Desktop / Base Navigation ================= */}
      <motion.nav
        suppressHydrationWarning 
        style={{ opacity }}
        className="
          fixed top-0 inset-x-0 z-50
          px-6 md:px-12 lg:px-24 py-6
          backdrop-blur-md bg-background/60
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <motion.a
            href="#"
            className="text-sm tracking-wide font-medium"
            style={{
              background:
                'linear-gradient(90deg, var(--color-electric-blue), var(--color-neon-pink))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            whileHover={{ opacity: 0.85 }}
          >
            GALANG IVANDRY
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm">
            {NAV_ITEMS.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-white/70 font-medium relative"
                whileHover={{ y: -2, color: link.color }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-xs tracking-[0.3em] uppercase text-white/70"
            onClick={() => setIsOpen(true)}
          >
            Menu
          </button>
        </div>
      </motion.nav>

      {/* ================= Initial Floating Identity ================= */}
      <motion.div
        className="fixed top-6 left-6 md:left-12 lg:left-24 z-40 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-xs tracking-[0.25em] uppercase font-medium"
          style={{
            background:
              'linear-gradient(90deg, var(--color-cyber-purple), var(--color-acid-green))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          IVANDRY
        </motion.div>
      </motion.div>

      {/* ================= Fullscreen Mobile Navigation ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="
              fixed inset-0 z-[100]
              bg-background
              flex flex-col
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Accent */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  'radial-gradient(circle at top right, var(--color-electric-blue), transparent 60%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
            />

            {/* Header */}
            <div className="relative flex justify-between items-center px-6 py-6">
              <span className="text-xs tracking-[0.3em] uppercase text-white/50">
                Navigation
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-[0.3em] uppercase text-white/70"
              >
                Close
              </button>
            </div>

            {/* Nav Items */}
            <div className="relative flex-1 flex flex-col justify-center px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-none"
                  style={{
                    color: item.color,
                  }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="relative px-6 py-8 text-xs text-white/40">
              Designing systems, interactions, and experiences.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

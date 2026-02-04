'use client'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { NAV_LINKS } from '@/contents/navigation'

export function SiteNavigation() {
  const t = useTranslations('common.nav')
  const author = useTranslations('common.author')
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navScale = useTransform(scrollY, [0, 100], [1, 0.9])
  const navY = useTransform(scrollY, [0, 100], [0, 10])

  useEffect(() => {
    const unsub = scrollY.on('change', v => setIsScrolled(v > 50))
    return () => unsub()
  }, [scrollY])

  return (
    <>
      <div className="fixed top-10 md:top-6 inset-x-0 z-60 flex justify-center px-6 pointer-events-none">
        <motion.nav
          style={{ scale: navScale, y: navY }}
          className={`
            pointer-events-auto relative flex items-center justify-between
            px-6 py-3 rounded-full border border-border/50
            transition-all duration-500 ease-[0.22, 1, 0.36, 1]
            ${isScrolled 
              ? 'bg-background-surface/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-md' 
              : 'bg-transparent border-transparent w-full max-w-7xl'}
          `}
        >
          {/* Noise Overlay */}
          {isScrolled && (
            <div className="absolute inset-0 rounded-full opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
          )}

          <motion.a href="#" className="text-[10px] tracking-[0.4em] font-bold text-foreground uppercase">
            {author('name')}<span className="text-brand">.</span>
          </motion.a>

          {/* Desktop Links - i18n Applied */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <motion.a
                key={link.id}
                href={link.href}
                className="px-4 py-1.5 text-[10px] tracking-widest uppercase text-foreground-secondary hover:text-brand transition-colors rounded-full relative group"
              >
                <span className="relative z-10">{t(link.id)}</span>
                <motion.div className="absolute inset-0 bg-brand/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden flex flex-col gap-1 px-2">
            <div className="w-4 h-px bg-brand" />
            <div className="w-4 h-px bg-foreground-muted" />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-100 bg-background flex items-center justify-center"
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-[10px] tracking-[0.5em] text-foreground-muted hover:text-brand uppercase"
            >
              {t('close')} [×]
            </button>

            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative overflow-hidden"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="block text-5xl md:text-8xl font-medium tracking-tighter text-foreground group-hover:text-brand transition-all duration-500">
                    {t(item.id)}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-brand translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 flex gap-12 text-[9px] tracking-[0.3em] uppercase text-foreground-muted font-mono">
              <span>Yogyakarta / 2026</span>
              <span className="text-brand">{t('status')}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import { motion, Variants } from 'framer-motion'
import { FOOTER_DATA } from '@/contents/footer'
import { ArrowUpIcon } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'
import { Social } from '@/types/social.types'

export function SiteFooter() {
  const t = useTranslations('common.footer')
  const currentYear = new Date().getFullYear()
  const MailIcon = FOOTER_DATA.email.icon

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <footer className="relative bg-background pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-end">
          
          {/* LEFT: BIG CTA */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand font-bold">
                {t('cta.overline')}
              </span>
              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-[-0.05em] font-medium text-foreground">
                {t.rich('cta.title', {
                  br: () => <br />,
                  serif: (chunks) => <span className="italic font-serif font-light text-foreground-secondary/40">{chunks}</span>,
                  brand: (chunks) => <span className="text-brand">{chunks}</span>
                })}
              </h2>
            </motion.div>

            <motion.a href={FOOTER_DATA.email.href} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group flex flex-col w-fit">
              <span className="text-[9px] uppercase tracking-widest text-foreground-muted mb-3 italic font-serif">
                {t('cta.inquiry')}
              </span>
              <div className="flex items-center gap-5">
                <span className="text-2xl md:text-4xl tracking-tighter font-medium text-foreground-secondary group-hover:text-brand transition-colors duration-500">
                  {FOOTER_DATA.email.address}
                </span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-brand group-hover:bg-brand/5 transition-all">
                  <MailIcon size={18} className="group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="w-full h-px bg-border group-hover:bg-brand mt-3 origin-left transition-all duration-700" />
            </motion.a>
          </div>

          {/* RIGHT: SOCIALS */}
          <div className="lg:col-span-5 space-y-12 lg:text-right">
            <motion.button onClick={scrollToTop} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-foreground-muted hover:text-brand transition-colors">
              {t('backToTop')}
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:-translate-y-1 group-hover:border-brand transition-all">
                <ArrowUpIcon size={14} />
              </div>
            </motion.button>

            <div className="space-y-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand font-bold italic font-serif">
                {t('socialsTitle')}
              </h3>
              <div className="flex flex-col lg:items-end gap-4">
                {FOOTER_DATA.socials.map((social: Social, index: number) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 text-lg md:text-xl font-medium text-foreground-secondary hover:text-brand transition-all"
                  >
                    <span className="text-[10px] font-serif italic opacity-0 group-hover:opacity-40 transition-opacity">0{index + 1}</span>
                    <span className="border-b border-transparent group-hover:border-brand tracking-tight capitalize">
                      {social.id}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WATERMARK */}
        <div className="mt-24 pt-10 border-t border-border/10 overflow-hidden select-none pointer-events-none">
          <motion.h1 initial={{ y: "60%", opacity: 0 }} whileInView={{ y: "0%", opacity: 0.05 }} transition={{ duration: 1.5 }} className="text-[18vw] font-bold leading-[0.7] tracking-[-0.08em] text-foreground text-center whitespace-nowrap uppercase">
            IVANDRY
          </motion.h1>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] tracking-widest uppercase text-foreground-muted">
            {t('copy', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
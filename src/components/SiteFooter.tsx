'use client'

import { motion } from 'framer-motion'
import { footerCopy } from '@/contents/footer.copy'
import Link from 'next/link'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const MailIcon = footerCopy.email.icon

  return (
    <footer className="relative bg-background pt-40 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-border/50">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: BIG CTA */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-brand font-bold">
                Get in Touch
              </span>
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.05em] font-medium text-foreground">
                Let’s create <br /> 
                <span className="italic font-light text-foreground-secondary/60">something</span> <br />
                <span style={{ 
                  background: "linear-gradient(135deg, var(--brand), var(--color-warm-amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>meaningful.</span>
              </h2>
            </motion.div>

            <motion.a
              href={footerCopy.email.href}
              className="group inline-flex items-center gap-6 text-xl md:text-2xl font-light text-foreground-secondary hover:text-brand transition-colors duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-brand group-hover:bg-brand/5 transition-all">
                <MailIcon size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="border-b border-border group-hover:border-brand transition-colors">
                {footerCopy.email.address}
              </span>
            </motion.a>

            {/* Social Links - Minimalist Circle */}
            <div className="flex gap-4 pt-4">
              {footerCopy.socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-brand hover:border-brand transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Right Side: Links & Status */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted font-bold">Navigation</h3>
              <ul className="space-y-4">
                {footerCopy.quickLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-foreground-secondary hover:text-brand transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted font-bold">Status</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shadow-[0_0_8px_var(--brand)]" />
                  <span className="text-sm text-foreground-secondary">{footerCopy.status.availability}</span>
                </div>
                <p className="text-xs leading-relaxed text-foreground-muted uppercase tracking-wider">
                  {footerCopy.status.notes[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Background Text - THE SIGNATURE */}
        <div className="mt-32 relative overflow-hidden select-none pointer-events-none">
          <motion.h1 
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.03 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[19vw] font-bold leading-none tracking-[-0.08em] text-foreground text-center"
          >
            IVANDRY
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.2em] uppercase text-foreground-muted">
            © {currentYear} Crafted with passion by Galang Ivandry.
          </p>
          
          <div className="flex gap-8">
            {footerCopy.legalLinks.map(link => (
              <Link key={link.label} href={link.href} className="text-[9px] tracking-[0.2em] uppercase text-foreground-muted hover:text-brand transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { motion } from 'framer-motion'
import { footerCopy } from '@/contents/footer.copy'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const MailIcon = footerCopy.email.icon

  return (
    <footer className="border-t border-white/10 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Subtle background — non-distracting */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        // style={{
        //   background:
        //     'radial-gradient(circle at top left, var(--color-electric-blue), transparent 55%), radial-gradient(circle at bottom right, var(--color-neon-pink), transparent 55%)',
        // }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="space-y-10">
            {/* Headline */}
            <motion.h2
              className="text-[clamp(1.75rem,4vw,3rem)] leading-tight tracking-[-0.02em] font-semibold"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white/90">
                Interested in working together?
              </span>
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-electric-blue), var(--color-cyber-purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Let’s talk.
              </span>
            </motion.h2>

            {/* Contact */}
            <motion.a
              href={footerCopy.email.href}
              className="inline-flex items-center gap-3 text-base text-white/80"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <MailIcon
                size={18}
                weight="duotone"
                style={{ color: footerCopy.email.color }}
              />
              <span>{footerCopy.email.address}</span>
            </motion.a>

            {/* Social */}
            <div className="flex gap-5 pt-2">
              {footerCopy.socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 border border-white/15 rounded-md flex items-center justify-center"
                    whileHover={{
                      scale: 1.08,
                      borderColor: social.color,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon
                      size={18}
                      weight="duotone"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12 pt-4">
            {/* Links */}
            <div className="space-y-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/40">
                Navigation
              </h3>
              {footerCopy.quickLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/65 hover:text-white"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Status */}
            <div className="space-y-6">
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/40">
                Current Status
              </h3>

              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-acid-green)' }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="text-sm text-white/65">
                  {footerCopy.status.availability}
                </span>
              </div>

              {footerCopy.status.notes.map((line, i) => (
                <p key={i} className="text-sm text-white/55">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} {footerCopy.owner}. All rights reserved.
          </p>

          <div className="flex gap-8 text-xs text-white/40">
            {footerCopy.legalLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ color: 'var(--color-electric-blue)' }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

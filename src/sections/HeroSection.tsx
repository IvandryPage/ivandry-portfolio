'use client'

import { motion } from "framer-motion";
import { heroCopy } from "@/contents/hero.copy";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-foreground-secondary"
          >
            {heroCopy.overline}
          </motion.p>

          {/* Title */}
          <motion.h1
            suppressHydrationWarning
            className="
              font-medium tracking-[-0.035em]
              leading-[0.9]
              text-[clamp(2.75rem,8.5vw,9.5rem)]
            "
          >
            {/* Primary highlight */}
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-electric-blue), var(--color-cyber-purple))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.92,
              }}
            >
              {heroCopy.title.line1}
            </span>

            {/* Structural anchor */}
            <span className="block text-white/90 text-[0.85em]">
              {heroCopy.title.line2}
            </span>

            {/* Editorial accent */}
            <span
              suppressHydrationWarning
              className="
                block italic font-light
                text-[0.75em] leading-[1.1]
              "
              style={{
                background:
                  "linear-gradient(90deg, var(--color-neon-pink), var(--color-acid-green))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.6,
              }}
            >
              {heroCopy.title.line3}
            </span>
          </motion.h1>

          {/* Description + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl space-y-8 pt-4"
          >
            <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">
              {heroCopy.description}
            </p>

            <div className="flex flex-wrap gap-12">
              {heroCopy.stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="space-y-1"
                >
                  <span className="block text-xs uppercase tracking-wider text-foreground-muted">
                    {item.label}
                  </span>
                  <span
                    className="block text-sm font-medium"
                    style={{ color: `var(${item.colorVar})` }}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-transparent via-border to-transparent"
        />
      </motion.div>
    </section>
  );
}

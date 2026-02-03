'use client'

import { motion, Variants } from "framer-motion";
import { heroCopy } from "@/contents/hero.copy";

export function HeroSection() {
  // Animasi untuk container (mengatur urutan muncul anak-anaknya)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animasi untuk tiap baris teks (efek reveal dari bawah)
  const revealVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  // Animasi halus untuk elemen pendukung (deskripsi & stats)
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-background">
      {/* Cinematic Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Overline */}
          <div className="overflow-hidden">
            <motion.p
              variants={revealVariants}
              className="text-foreground-secondary text-[10px] tracking-[0.4em] uppercase font-bold"
            >
              {heroCopy.overline}
            </motion.p>
          </div>

          {/* Title - Reveal Masking Effect */}
          <h1
            suppressHydrationWarning
            className="font-medium tracking-[-0.04em] leading-[0.92] text-[clamp(2.75rem,8.5vw,9.5rem)]"
          >
            <div className="overflow-hidden py-2">
              <motion.span
                variants={revealVariants}
                className="block bg-clip-text"
                style={{
                  background: "linear-gradient(135deg, var(--brand), var(--color-warm-amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heroCopy.title.line1}
              </motion.span>
            </div>

            <div className="overflow-hidden py-1">
              <motion.span 
                variants={revealVariants} 
                className="block text-white text-[0.85em]"
              >
                {heroCopy.title.line2}
              </motion.span>
            </div>

            <div className="overflow-hidden py-2">
              <motion.span
                variants={revealVariants}
                suppressHydrationWarning
                className="block italic font-light text-[0.75em] leading-[1.15]"
                style={{ color: "var(--brand)", opacity: 0.7 }}
              >
                {heroCopy.title.line3}
              </motion.span>
            </div>
          </h1>

          {/* Description + Stats */}
          <motion.div
            variants={fadeInVariants}
            className="max-w-xl space-y-10 pt-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground-secondary/90 font-light">
              {heroCopy.description}
            </p>

            <div className="flex flex-wrap gap-12">
              {heroCopy.stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4, color: "var(--brand)" }}
                  className="space-y-2 transition-colors duration-300"
                >
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground-muted font-bold">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-foreground">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - More minimal & modern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-foreground-muted [writing-mode:vertical-lr] mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-brand to-transparent"
        />
      </motion.div>
    </section>
  );
}
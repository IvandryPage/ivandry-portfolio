'use client'

import { easeInOut, motion, Variants } from "framer-motion";
import { heroCopy } from "@/contents/hero.copy";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const revealVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center md:justify-end overflow-hidden bg-background px-6 md:px-12 lg:px-24 md:pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[35%] h-[35%] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto pt-32 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6 md:space-y-10"
        >
          {/* Overline */}
          <div className="overflow-hidden">
            <motion.div variants={revealVariants} className="flex items-center gap-3">
              <div className="h-px w-6 bg-brand/40 hidden md:block" />
              <p className="text-brand text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold">
                {t('overline')}
              </p>
            </motion.div>
          </div>

          {/* Title */}
          <h1
            suppressHydrationWarning
            className="font-medium tracking-[-0.05em] leading-[0.9] text-[clamp(2.8rem,9vw,7.5rem)]"
          >
            <div className="overflow-hidden py-1">
              <motion.span
                variants={revealVariants}
                className="block bg-linear-to-r from-brand to-warm-amber bg-clip-text text-transparent"
              >
                {t("title.line1")}
              </motion.span>
            </div>

            <div className="overflow-hidden py-1">
              <motion.span variants={revealVariants} className="block text-foreground">
                {heroCopy.title.line2}
              </motion.span>
            </div>

            <div className="overflow-hidden py-1">
              <motion.span
                variants={revealVariants}
                className="block italic font-serif font-light opacity-50 text-[0.7em] md:text-[0.6em]"
              >
                {t("title.line3")}
              </motion.span>
            </div>
          </h1>

          {/* Description */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-2xl space-y-8 md:space-y-12"
          >
            <p className="text-sm md:text-lg leading-relaxed text-foreground-secondary/70 font-light max-w-lg">
              {t("description")}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Call-to-Action */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 2, duration: 2, repeat: 5, ease: easeInOut, repeatType:'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-px h-16 bg-linear-to-b from-brand/50 to-transparent" />
      </motion.div>
    </section>
  );
}
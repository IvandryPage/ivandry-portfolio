'use client'
import { motion } from "framer-motion";
import { heroCopy } from "@/contents/hero.copy";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs tracking-[0.3em] uppercase"
            style={{
              background:
                "linear-gradient(90deg, var(--color-electric-blue), var(--color-neon-pink))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heroCopy.overline}
          </motion.p>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-[clamp(3rem,10vw,12rem)] leading-[0.9] tracking-[-0.03em] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-electric-blue), var(--color-cyber-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {heroCopy.title.line1}
              </motion.span>
              <br />
              <span className="text-white/90">{heroCopy.title.line2}</span>
              <br />
              <motion.span
                className="inline-block italic font-light"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-neon-pink), var(--color-acid-green))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {heroCopy.title.line3}
              </motion.span>
            </motion.h1>
          </div>

          {/* Description + Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-2xl space-y-6 pt-8"
          >
            <p className="text-lg leading-relaxed text-white/80">
              {heroCopy.description}
            </p>

            <div className="flex gap-8 text-sm">
              {heroCopy.stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="block tracking-wide text-white/50">
                    {item.label}
                  </span>
                  <span
                    className="block mt-1 font-medium"
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
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px h-16 bg-linear-to-b from-transparent via-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

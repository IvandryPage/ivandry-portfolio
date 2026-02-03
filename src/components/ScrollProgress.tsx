'use client'
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-50"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, var(--color-electric-blue), var(--color-neon-pink), var(--color-cyber-purple), var(--color-acid-green))",
        boxShadow: "0 0 10px var(--color-electric-blue)",
      }}
    />
  );
}

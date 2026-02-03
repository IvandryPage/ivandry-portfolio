'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function SiteNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      {/* Fixed Navigation with Glass Effect */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 backdrop-blur-md bg-background/60 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="#"
            className="text-sm tracking-wide font-medium"
            style={{
              background: "linear-gradient(90deg, var(--color-electric-blue), var(--color-neon-pink))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            PIXEL ALCHEMIST
          </motion.a>

          <div className="flex gap-8 text-sm">
            {[
              { label: "Works", href: "#works", color: "var(--color-electric-blue)" },
              { label: "About", href: "#about", color: "var(--color-neon-pink)" },
              { label: "Contact", href: "#contact", color: "var(--color-acid-green)" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors font-medium"
                whileHover={{
                  y: -2,
                  color: link.color,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Initial Logo (fades on scroll) */}
      <motion.div
        className="fixed top-6 left-6 md:left-12 lg:left-24 z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{
            background: "linear-gradient(90deg, var(--color-cyber-purple), var(--color-acid-green))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          PA
        </motion.div>
      </motion.div>
    </>
  );
}

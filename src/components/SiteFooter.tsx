'use client'
import { motion } from "framer-motion";
import { footerCopy } from "@/contents/footer.copy";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const MailIcon = footerCopy.email.icon;

  return (
    <footer className="border-t border-white/10 py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, var(--color-neon-pink), transparent 50%), radial-gradient(circle at bottom right, var(--color-electric-blue), transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="space-y-8">
            <motion.h2
              className="text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-electric-blue), var(--color-cyber-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let&apos;s build
              </motion.span>
              <br />
              <span className="text-white/90">something</span>
              <br />
              <motion.span
                className="italic font-light"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-neon-pink), var(--color-acid-green))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                impossible
              </motion.span>
            </motion.h2>

            <motion.a
              href={footerCopy.email.href}
              className="inline-flex items-center gap-3 text-lg group"
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <MailIcon size={20} weight="duotone" style={{ color: footerCopy.email.color }} />
              <span style={{ color: footerCopy.email.color }}>
                {footerCopy.email.address}
              </span>
            </motion.a>

            <div className="flex gap-6 pt-4">
              {footerCopy.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      borderColor: social.color,
                      boxShadow: `0 0 20px ${social.color}40`,
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon size={20} weight="duotone" style={{ color: social.color }} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
              <h3
                className="text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: "var(--color-neon-pink)" }}
              >
                QUICK LINKS
              </h3>
              {footerCopy.quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-white/70 hover:text-white"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="space-y-6">
              <h3
                className="text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: "var(--color-acid-green)" }}
              >
                STATUS
              </h3>

              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--color-acid-green)" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-white/60">
                  {footerCopy.status.availability}
                </span>
              </div>

              {footerCopy.status.notes.map((line, i) => (
                <p key={i} className="text-sm text-white/60">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Pixel Alchemist. Handcrafted with{" "}
            <motion.span
              style={{ color: "var(--color-neon-pink)" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ♥
            </motion.span>{" "}
            and excessive caffeine.
          </p>

          <div className="flex gap-8 text-xs text-white/40">
            {footerCopy.legalLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ color: "var(--color-electric-blue)" }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

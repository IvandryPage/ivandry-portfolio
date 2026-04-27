'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import "@/app/globals.css"
import { ArrowLeftIcon } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background m-0 overflow-hidden selection:bg-brand/30 text-foreground">
        <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
          
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.02]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E")` }} 
            />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[100px_100px]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-8">
            <div className="relative">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[18vw] md:text-[14vw] font-bold tracking-tighter leading-none"
              >
                404<span className="text-brand">.</span>
              </motion.h1>
              
              <motion.div 
                animate={{ 
                  x: [0, 20, -20, 0],
                  y: [0, -10, 10, 0] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-2 h-2 bg-brand rounded-full blur-[2px]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2 mt-4"
            >
              <h2 className="text-lg md:text-xl font-medium tracking-tight">
                You&apos;ve reached an empty space.
              </h2>
              <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground opacity-70">
                The page you are looking for does not exist
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <Link 
                href="/"
                className="group relative flex items-center gap-8 px-12 py-4 border border-foreground/10 rounded-full hover:border-brand/40 transition-all duration-500"
              >
                <ArrowLeftIcon />
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold group-hover:text-brand transition-colors">
                  Go Back Home
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 text-[9px] tracking-[0.3em] uppercase text-muted-foreground font-mono select-none"
          >
            © 2026 / Path_Ref_Null
          </motion.div>
        </main>
      </body>
    </html>
  )
}
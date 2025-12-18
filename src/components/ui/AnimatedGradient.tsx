'use client'

import { motion } from 'framer-motion'

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary copper orb */}
      <motion.div
        className="gradient-orb w-[600px] h-[600px] bg-primary/30 -top-48 -right-48"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary gold orb */}
      <motion.div
        className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-1/3 -left-32"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Tertiary warm orb */}
      <motion.div
        className="gradient-orb w-[400px] h-[400px] bg-primary-light/20 bottom-0 right-1/4"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Small accent orb */}
      <motion.div
        className="gradient-orb w-[200px] h-[200px] bg-accent-light/25 top-1/4 right-1/3"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}

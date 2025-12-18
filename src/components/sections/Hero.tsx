'use client'

import { motion } from 'framer-motion'
import { GlassButton, AnimatedGradient, ScrollIndicator } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient />

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-text-secondary text-sm">
              Now Accepting Custom Orders
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Custom{' '}
            <span className="gradient-text animate-gradient-shift bg-[length:200%_auto]">
              Rolling Ball
            </span>
            <br />
            Sculptures
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            One of a kind kinetic art for your home or business. Handcrafted
            with precision, designed to mesmerize.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassButton href="/gallery" variant="primary" size="lg">
              Explore Gallery
            </GlassButton>
            <GlassButton href="/contact" variant="outline" size="lg">
              Commission a Piece
            </GlassButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 sm:gap-16 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '30+', label: 'Sculptures Sold' },
              { value: '100%', label: 'Handcrafted' },
              { value: 'Global', label: 'Shipping' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}

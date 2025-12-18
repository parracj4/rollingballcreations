'use client'

import { motion } from 'framer-motion'
import { GlassButton, AnimatedGradient } from '@/components/ui'

export function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <AnimatedGradient />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="glass rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Own a
            <br />
            <span className="gradient-text">One-of-a-Kind Masterpiece?</span>
          </motion.h2>

          <motion.p
            className="text-text-secondary text-lg mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Commission your own custom rolling ball sculpture. Jon works
            directly with you to bring your vision to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlassButton href="/contact" variant="primary" size="lg">
              Start Your Commission
            </GlassButton>
            <GlassButton href="/gallery" variant="outline" size="lg">
              Browse Available Pieces
            </GlassButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              'Worldwide Shipping',
              'Lifetime Quality',
              '30+ Happy Customers',
            ].map((item, index) => (
              <span key={index} className="text-text-muted text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

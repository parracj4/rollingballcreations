'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlassCard, GlassButton } from '@/components/ui'
import { siteContent } from '@/lib/data'

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero/DSC00397-hero.jpg"
                alt="Rolling Ball Sculpture"
                fill
                className="object-cover"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-6 lg:right-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard className="px-6 py-4" hover={false}>
                <div className="text-3xl font-bold text-primary mb-1">
                  {siteContent.business.stats.sculpturesSold}
                </div>
                <div className="text-text-secondary text-sm">
                  Sculptures Sold Worldwide
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Crafted with
              <br />
              <span className="gradient-text">Precision & Passion</span>
            </h2>

            <p className="text-text-secondary text-lg mb-6">
              {siteContent.about.intro}
            </p>

            <p className="text-text-secondary mb-8">
              {siteContent.about.quality}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '✦', text: 'Premium Materials' },
                { icon: '◇', text: 'Lifetime Quality' },
                { icon: '○', text: 'Custom Designs' },
                { icon: '△', text: 'Global Shipping' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-text-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <GlassButton href="/about" variant="outline">
              Learn More About Jon
            </GlassButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

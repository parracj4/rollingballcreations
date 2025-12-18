'use client'

import { GlassButton, AnimatedGradient } from '@/components/ui'

export function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <AnimatedGradient />
      </div>

      <div className="container-custom relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Own a
            <br />
            <span className="gradient-text">One-of-a-Kind Masterpiece?</span>
          </h2>

          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Commission your own custom rolling ball sculpture. Jon works
            directly with you to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/contact" variant="primary" size="lg">
              Start Your Commission
            </GlassButton>
            <GlassButton href="/gallery" variant="outline" size="lg">
              Browse Available Pieces
            </GlassButton>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8">
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
          </div>
        </div>
      </div>
    </section>
  )
}

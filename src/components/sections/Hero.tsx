'use client'

import { GlassButton, AnimatedGradient, ScrollIndicator } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient />

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-text-secondary text-sm">
              Now Accepting Custom Orders
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Custom{' '}
            <span className="gradient-text">
              Rolling Ball
            </span>
            <br />
            Sculptures
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            One of a kind kinetic art for your home or business. Handcrafted
            with precision, designed to mesmerize.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/gallery" variant="primary" size="lg">
              Explore Gallery
            </GlassButton>
            <GlassButton href="/contact" variant="outline" size="lg">
              Commission a Piece
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-16 mt-16">
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
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}

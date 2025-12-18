'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'

const processIcons = ['📋', '🎨', '✨', '📦', '🎉']

export function ProcessContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              The Creation<br /><span className="gradient-text">Process</span>
            </h1>
            <p className="text-text-secondary text-lg">
              From your initial vision to the final masterpiece, every step is a collaborative journey.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom">
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden sm:block" />

          {siteContent.process.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="sm:hidden absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl z-10">
                {step.number}
              </div>
              <div className={`flex-1 pl-24 sm:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <GlassCard hover={false}>
                  <div className="text-4xl mb-4">{processIcons[index]}</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{step.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </GlassCard>
              </div>
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary items-center justify-center text-white font-bold text-2xl z-10 shadow-glow">
                {step.number}
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom mt-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Finishing Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Raw Stainless Steel', description: 'Natural metallic finish with subtle brushed texture.', color: 'from-gray-400 to-gray-600' },
            { title: 'Polished Stainless', description: 'Mirror-like reflective surface that catches light.', color: 'from-white to-gray-300' },
            { title: 'Powder Coating', description: 'Custom colors available to match any space.', color: 'from-primary to-accent' },
          ].map((option, index) => (
            <GlassCard key={index} className="h-full text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${option.color} mx-auto mb-4`} />
              <h3 className="text-white font-semibold text-lg mb-2">{option.title}</h3>
              <p className="text-text-muted text-sm">{option.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container-custom mt-24">
        <div className="glass rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Begin?</h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Start your journey to owning a one-of-a-kind rolling ball sculpture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/contact" variant="primary" size="lg">Start Your Commission</GlassButton>
            <GlassButton href="/gallery" variant="outline" size="lg">View Available Pieces</GlassButton>
          </div>
        </div>
      </section>
    </div>
  )
}

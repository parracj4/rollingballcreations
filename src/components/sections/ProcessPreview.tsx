'use client'

import { GlassCard, GlassButton } from '@/components/ui'
import { siteContent } from '@/lib/data'

const processIcons = ['📋', '🎨', '✨', '📦', '🎉']

export function ProcessPreview() {
  const steps = siteContent.process.slice(0, 5)

  return (
    <section className="section bg-surface/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Creation Process
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From initial consultation to final delivery, every sculpture is a
            collaborative journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GlassCard className="text-center h-full relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2">{processIcons[index]}</div>

                  {/* Title */}
                  <h3 className="text-white font-semibold mb-2 text-sm">
                    {step.title.split('&')[0].trim()}
                  </h3>

                  {/* Short Description */}
                  <p className="text-text-muted text-xs line-clamp-3">
                    {step.description.slice(0, 80)}...
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <GlassButton href="/process" variant="outline">
            View Full Process
          </GlassButton>
        </div>
      </div>
    </section>
  )
}

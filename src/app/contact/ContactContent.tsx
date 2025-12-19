'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'

export function ContactContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Create<br /><span className="gradient-text">Something Amazing</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Ready to commission your own rolling ball sculpture? Have a question? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                aria-label="Send us a message"
                frameBorder="0"
                style={{ minHeight: '835px', width: '100%', border: 'none' }}
                src="https://forms.piawv.com/parrackinsurance/form/SendusamessageRollingBallCreations/formperma/SR6dX1qry_r32wXv5XTHHJRJscgbefokqtfER2RWs7I"
                title="Contact Form"
              />
            </div>
          </div>

          <div className="space-y-6">
            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {['Response within 24-48 hours', 'Free consultation for custom commissions', 'Detailed quotes based on your specifications', 'Photos and updates throughout the process'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-success flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">Location</h3>
              <div className="text-text-secondary">
                <p>{siteContent.business.address.street}</p>
                <p>{siteContent.business.address.city}, {siteContent.business.address.state} {siteContent.business.address.zip}</p>
                <p className="mt-2 text-primary">Shipping {siteContent.business.shipping.toLowerCase()}</p>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">Commission Info</h3>
              <p className="text-text-secondary mb-4">Pricing is based on framework dimensions, materials, and complexity.</p>
              <p className="text-text-muted text-sm">Starting from $375 for small desk pieces to $10,000+ for large motorized floor sculptures.</p>
            </GlassCard>

            <div className="flex flex-col sm:flex-row gap-4">
              <GlassButton href="/gallery" variant="outline" className="flex-1">View Gallery</GlassButton>
              <GlassButton href="/process" variant="outline" className="flex-1">See Process</GlassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

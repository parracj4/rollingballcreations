'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'

const stats = [
  { value: '30+', label: 'Sculptures Created' },
  { value: '100%', label: 'Handcrafted' },
  { value: 'Global', label: 'Shipping' },
  { value: 'Lifetime', label: 'Quality Guarantee' },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              The Artist Behind
              <br />
              <span className="gradient-text">the Movement</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Every sculpture tells a story of patience, precision, and passion.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center" hover={false}>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div>
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
              <Image
                src="/images/jon-parrack.webp"
                alt="Jon Parrack - Rolling Ball Sculpture Artist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hand-Made Kinetic Artwork
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              {siteContent.about.intro}
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              {siteContent.about.customization}
            </p>
            <GlassButton href="/process" variant="outline">
              See the Creation Process
            </GlassButton>
          </div>
        </div>

        {/* Quality Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Quality That Lasts a Lifetime
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {siteContent.about.quality}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚙️', title: 'Premium Metals', desc: 'Stainless steel & copper' },
                { icon: '🔮', title: 'Quality Marbles', desc: 'Hand-selected glass' },
                { icon: '⚡', title: 'Precision Motors', desc: 'Smooth operation' },
                { icon: '🛡️', title: 'Built to Last', desc: 'Minimal maintenance' },
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <GlassCard hover={false}>
              <div className="flex items-center gap-4">
                <div className="text-4xl">📍</div>
                <div className="text-left">
                  <p className="text-white font-semibold">
                    {siteContent.business.address.street}
                  </p>
                  <p className="text-text-muted">
                    {siteContent.business.address.city},{' '}
                    {siteContent.business.address.state}{' '}
                    {siteContent.business.address.zip}
                  </p>
                  <p className="text-primary text-sm mt-1">
                    Shipping {siteContent.business.shipping.toLowerCase()}
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard hover={false}>
              <div className="flex items-center gap-4">
                <div className="text-4xl">📞</div>
                <div className="text-left">
                  <p className="text-white font-semibold">Call Jon</p>
                  <a
                    href={`tel:${siteContent.business.phone}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {siteContent.business.phone}
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.8!2d-82.136957!3d38.847049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848e3d7a8c54f6d%3A0x0!2s809+Viand+St%2C+Point+Pleasant%2C+WV+25550!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jon's Creations Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mt-24">
        <div className="glass rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Whether you&apos;re looking for a ready-made piece or want to
            commission something unique, Jon is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/gallery" variant="primary" size="lg">
              Browse Gallery
            </GlassButton>
            <GlassButton href="/contact" variant="outline" size="lg">
              Get in Touch
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  )
}

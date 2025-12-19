'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient, YouTubeFacade } from '@/components/ui'

const capabilities = [
  {
    title: 'Monumental Scale',
    description: 'Sculptures from 6 feet to 20+ feet tall, engineered for visual impact in large spaces.',
    icon: '🏛️',
  },
  {
    title: 'Indoor & Outdoor',
    description: 'Weather-resistant options for outdoor installations with durable, corrosion-resistant materials.',
    icon: '🌤️',
  },
  {
    title: 'Continuous Operation',
    description: 'Engineered for 24/7 operation with minimal maintenance and quiet, reliable motor systems.',
    icon: '⚡',
  },
  {
    title: 'Custom Theming',
    description: 'Incorporate logos, brand colors, or thematic elements into the sculpture design.',
    icon: '🎨',
  },
  {
    title: 'Full Installation',
    description: 'Complete project management from design through installation and commissioning.',
    icon: '🔧',
  },
  {
    title: 'Architectural Integration',
    description: 'Designed to complement and enhance your space, working with architects and designers.',
    icon: '📐',
  },
]

export function InstallationsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <AnimatedGradient />
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-6 tracking-wide uppercase">
              Large Scale Commissions
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Monumental<br />
              <span className="gradient-text">Kinetic Sculpture</span>
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Custom rolling ball sculptures at any scale — from intimate tabletop pieces
              to multi-story installations engineered for continuous operation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-surface/50">
              <div className="aspect-[9/16] md:aspect-video max-h-[600px] mx-auto">
                <YouTubeFacade
                  videoId="zPCd1yVWd6I"
                  title="Large Motorized Rolling Ball Sculpture"
                  isShort
                />
              </div>
            </div>
            <p className="text-center text-text-muted mt-6">
              Jon&apos;s largest motorized sculpture to date — a testament to what&apos;s possible at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Collaborative Artistry for<br />Exceptional Spaces
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Jon works directly with architects, curators, interior designers, and facilities
              teams to create kinetic sculptures that become defining features of their environments.
              Each installation is custom designed and built to integrate seamlessly with your
              specific space — whether that&apos;s a museum lobby, corporate headquarters, hospital
              atrium, or public plaza.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              From initial concept through final installation, Jon provides hands-on collaboration
              to ensure every detail aligns with your vision and technical requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/products/DSC00389-large-motorized.webp"
                alt="Large motorized rolling ball sculpture"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-medium">40&quot; × 37&quot; × 13&quot; — Polished Stainless Steel</p>
                <p className="text-text-secondary">Motorized with multiple track paths and helical lift system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engineering Excellence
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Purpose-built for institutional and commercial environments with demanding requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <GlassCard key={index} hover={false} className="text-center">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {capability.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {capability.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                The Commissioning Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Discovery</h3>
                      <p className="text-text-muted text-sm">Discuss your vision, space constraints, and technical requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Design</h3>
                      <p className="text-text-muted text-sm">Collaborative design development with renderings and specifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Fabrication</h3>
                      <p className="text-text-muted text-sm">Precision handcrafting with regular progress updates and photos.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Testing</h3>
                      <p className="text-text-muted text-sm">Thorough testing and refinement before delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Installation</h3>
                      <p className="text-text-muted text-sm">On-site installation, calibration, and staff training.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">6</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Support</h3>
                      <p className="text-text-muted text-sm">Ongoing support and maintenance guidance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let&apos;s Create Something Extraordinary
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Whether you&apos;re planning a new building, renovating a space, or seeking
              a signature art piece, Jon is ready to discuss how a custom kinetic
              sculpture can transform your environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Discuss Your Project
              </GlassButton>
              <GlassButton href="/videos" variant="outline" size="lg">
                Watch More Videos
              </GlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

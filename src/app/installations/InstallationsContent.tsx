'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GlassCard, GlassButton, AnimatedGradient, YouTubeFacade } from '@/components/ui'

const installationTypes = [
  {
    title: 'Healthcare & Hospitals',
    description:
      'Calm anxious patients and create welcoming environments in lobbies, waiting rooms, and pediatric areas. Built for 24/7 operation with easy-to-clean surfaces.',
    href: '/healthcare',
    image: '/images/products/DSC00389-large-motorized.webp',
    features: ['Reduces patient anxiety', 'Engages all ages', 'Low maintenance'],
  },
  {
    title: 'Corporate & Commercial',
    description:
      'Make a lasting impression on clients and visitors. Custom sculptures for office lobbies, headquarters, hotels, and retail spaces that reflect your brand.',
    href: '/corporate',
    image: '/images/products/AB-Machine-polished-stainless.webp',
    features: ['Brand integration', 'Conversation starter', 'Premium materials'],
  },
  {
    title: 'Museums & Science Centers',
    description:
      'Interactive exhibits that teach physics through wonder. Durable construction for public spaces with high visitor traffic and educational programming.',
    href: '/museums',
    image: '/images/products/DSC00403-wall-mount-round.webp',
    features: ['Educational value', 'Built for public use', 'Custom sizing'],
  },
]

const capabilities = [
  {
    title: 'Any Scale',
    description: 'From tabletop pieces to multi-story installations.',
    icon: '📐',
  },
  {
    title: 'Continuous Operation',
    description: 'Engineered for reliable 24/7 performance.',
    icon: '⚡',
  },
  {
    title: 'Custom Design',
    description: 'Every piece built to your specifications.',
    icon: '🎨',
  },
  {
    title: 'Full Support',
    description: 'Installation, training, and ongoing maintenance.',
    icon: '🔧',
  },
]

export function InstallationsContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <AnimatedGradient />
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-6 tracking-wide uppercase">
              Commercial & Institutional
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Sculptures for
              <br />
              <span className="gradient-text">Every Space</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
              Custom rolling ball sculptures designed for the unique demands of
              public spaces, commercial environments, and institutional settings.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Types - Main Cards */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find Your Fit
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Different environments have different needs. Explore the option
              that matches your space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {installationTypes.map((type, index) => (
              <Link key={index} href={type.href} className="group">
                <div className="glass rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-primary/50">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                      {type.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                See It in Action
              </h2>
              <p className="text-text-secondary">
                Watch one of Jon&apos;s larger motorized sculptures in motion.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-surface/50">
              <div className="aspect-[9/16] md:aspect-video max-h-[500px] mx-auto">
                <YouTubeFacade
                  videoId="zPCd1yVWd6I"
                  title="Large Motorized Rolling Ball Sculpture"
                  isShort
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Sets Jon Apart
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <GlassCard key={index} hover={false} className="text-center p-6">
                  <div className="text-3xl mb-3">{cap.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-text-muted text-xs">
                    {cap.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Private Collectors Note */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-10 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Looking for Something for Your Home?
              </h3>
              <p className="text-text-secondary mb-6">
                Jon also creates sculptures for private collectors and residential
                spaces. Browse the gallery to see available pieces or get in touch
                to discuss a custom commission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton href="/gallery" variant="primary">
                  Browse Gallery
                </GlassButton>
                <GlassButton href="/contact" variant="outline">
                  Custom Commission
                </GlassButton>
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
              Not Sure Where to Start?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Every project is different. Reach out to discuss your space, your
              vision, and what might be possible. No obligation—just a
              conversation about kinetic art.
            </p>
            <GlassButton href="/contact" variant="primary" size="lg">
              Start a Conversation
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  )
}

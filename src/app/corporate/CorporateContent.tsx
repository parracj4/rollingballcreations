'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const benefits = [
  {
    title: 'Unforgettable First Impressions',
    description:
      'Visitors remember the company with the mesmerizing sculpture in the lobby. It signals creativity, attention to detail, and investment in quality.',
    icon: '🏢',
  },
  {
    title: 'Conversation Starter',
    description:
      'Break the ice before meetings even begin. Clients and partners often comment on the sculpture, creating natural rapport.',
    icon: '💬',
  },
  {
    title: 'Brand Integration',
    description:
      'Incorporate your company colors, logo elements, or brand themes into the sculpture design. Make it uniquely yours.',
    icon: '🎯',
  },
  {
    title: 'Employee Wellbeing',
    description:
      'Studies show that engaging art in the workplace reduces stress and improves satisfaction. Give your team something inspiring to enjoy.',
    icon: '😊',
  },
  {
    title: 'Built to Last',
    description:
      'Premium materials and precision engineering mean your sculpture will operate reliably for years with minimal maintenance.',
    icon: '⚙️',
  },
  {
    title: 'Appreciating Asset',
    description:
      'Original art from established artists tends to hold or increase in value. This is an investment, not just an expense.',
    icon: '📈',
  },
]

const idealSpaces = [
  'Corporate Headquarters Lobbies',
  'Law Firm Reception Areas',
  'Financial Services Offices',
  'Tech Company Common Areas',
  'Executive Conference Rooms',
  'Coworking Space Lounges',
  'Hotel Lobbies',
  'Restaurant Entrances',
  'Retail Flagship Stores',
]

export function CorporateContent() {
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
              Corporate & Commercial Installations
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Make Your Lobby
              <br />
              <span className="gradient-text">Unforgettable</span>
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
              A rolling ball sculpture tells visitors exactly what kind of company
              you are: one that values craftsmanship, creativity, and making an impression
              that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Request a Consultation
              </GlassButton>
              <GlassButton href="/gallery" variant="outline" size="lg">
                Explore the Gallery
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              More Than Decoration
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Your lobby is where first impressions are formed. It sets the tone
                for every meeting, every partnership discussion, every interview.
                Most companies fill this space with generic art that visitors forget
                the moment they leave.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                A rolling ball sculpture is different. It draws people in. They
                watch the marbles climb, spiral, and cascade through the track.
                They point things out to each other. They smile. And they remember
                that experience long after the meeting ends.
              </p>
              <p className="text-white text-lg leading-relaxed font-medium">
                That kind of impression is worth the investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Businesses Choose Kinetic Sculpture
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A rolling ball sculpture delivers value that goes beyond aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} hover={false} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/products/AB-Machine-polished-stainless.webp"
                alt="Polished stainless steel rolling ball sculpture for corporate environments"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-medium">
                  Polished Stainless Steel Wall Mount
                </p>
                <p className="text-text-secondary">
                  Mirror finish reflects light and adds sophistication to any professional space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Integration */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Your Brand, Brought to Life
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Every sculpture Jon creates is custom. That means your piece can
                  incorporate elements that make it unmistakably yours:
                </p>
                <ul className="space-y-4">
                  {[
                    'Company colors through powder coating',
                    'Logo elements worked into the track design',
                    'Size and proportions matched to your space',
                    'Materials that complement your interior design',
                    'Mounting options for floor, wall, or pedestal display',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/products/DSC00408-sold-powder-coated.webp"
                  alt="Custom powder coated rolling ball sculpture with custom colors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Spaces */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealSpaces.map((space, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-surface/30"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-text-secondary">{space}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Investment Ranges
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Custom sculptures are priced based on size, complexity, and materials.
                Here is a general guide to help with planning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl border border-white/10">
                  <p className="text-primary text-2xl font-bold mb-2">$375 – $1,500</p>
                  <p className="text-text-muted text-sm">Desktop & Small Table Pieces</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10">
                  <p className="text-primary text-2xl font-bold mb-2">$1,500 – $5,000</p>
                  <p className="text-text-muted text-sm">Medium Floor & Wall Sculptures</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10">
                  <p className="text-primary text-2xl font-bold mb-2">$5,000+</p>
                  <p className="text-text-muted text-sm">Large Motorized Installations</p>
                </div>
              </div>
              <p className="text-text-muted text-sm">
                Every project receives a detailed quote after initial consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your vision. Whether you have specific ideas or
              want to explore possibilities, Jon is happy to talk through options
              that fit your space and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </GlassButton>
              <GlassButton href="/process" variant="outline" size="lg">
                See the Process
              </GlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

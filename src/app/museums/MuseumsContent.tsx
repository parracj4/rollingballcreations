'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const educationalConcepts = [
  {
    title: 'Gravity & Acceleration',
    description:
      'Marbles speed up as they descend, slow on climbs, and reach maximum velocity at the lowest points. Visitors see these physics principles in action.',
    icon: '🌍',
  },
  {
    title: 'Momentum & Energy Transfer',
    description:
      'Watch kinetic energy convert to potential energy and back again. Collisions and transfers demonstrate conservation laws without equations.',
    icon: '⚡',
  },
  {
    title: 'Simple Machines',
    description:
      'Ramps, levers, spirals, and lifting mechanisms showcase the building blocks of mechanical engineering.',
    icon: '⚙️',
  },
  {
    title: 'Cause and Effect',
    description:
      'Every action triggers a reaction. Visitors learn to trace the chain of events from marble launch to final destination.',
    icon: '🔗',
  },
  {
    title: 'Pattern Recognition',
    description:
      'Multiple track paths create predictable yet varied sequences. Young minds naturally begin to identify and anticipate patterns.',
    icon: '🧩',
  },
  {
    title: 'Engineering Problem-Solving',
    description:
      'How do you get a marble from here to there? The sculpture demonstrates that there are many creative solutions to any challenge.',
    icon: '💡',
  },
]

const venueTypes = [
  'Science Museums',
  'Children\'s Museums',
  'Natural History Museums',
  'Discovery Centers',
  'Planetariums',
  'STEM Learning Centers',
  'University Lobbies',
  'Public Libraries',
  'Exploratoriums',
]

export function MuseumsContent() {
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
              Museums & Science Centers
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Physics You Can
              <br />
              <span className="gradient-text">Watch and Wonder</span>
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
              Rolling ball sculptures turn abstract physics into visible, memorable
              experiences. They draw crowds, spark questions, and leave visitors
              with a deeper appreciation for how the world works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Plan Your Exhibit
              </GlassButton>
              <GlassButton href="/videos" variant="outline" size="lg">
                See Them in Motion
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Museum Opportunity */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why Visitors Love These Exhibits
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                There is something universal about watching a marble travel through
                a sculpture. Children press their faces to the glass. Adults pause
                mid-conversation. Groups gather and point out details to each other.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                This kind of engagement is exactly what museums strive for. A rolling
                ball sculpture does not require instructions or interpretation. It
                captures attention immediately and holds it through natural curiosity.
                The physics lesson happens almost by accident—visitors are too busy
                being fascinated to realize they are learning.
              </p>
              <p className="text-white text-lg leading-relaxed font-medium">
                That is the power of kinetic art in educational spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Concepts */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Learning Through Observation
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every sculpture demonstrates fundamental scientific principles in ways
              that stick with visitors long after they leave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {educationalConcepts.map((concept, index) => (
              <GlassCard key={index} hover={false} className="text-center">
                <div className="text-4xl mb-4">{concept.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {concept.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {concept.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              A Legacy of Public Wonder
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              George Rhoads pioneered the art of large-scale rolling ball sculptures
              in public spaces. His work appears in airports, museums, and science
              centers worldwide—including the famous 42nd Street Ballroom at New York&apos;s
              Port Authority Bus Terminal. Jon continues this tradition, creating
              custom pieces that bring the same sense of wonder to new audiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://georgerhoads.com/ballmachines/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Explore Rhoads&apos; Archive
                <span className="ml-2">↗</span>
              </a>
              <GlassButton href="/about" variant="outline">
                Jon&apos;s Story
              </GlassButton>
            </div>
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
                alt="Large motorized rolling ball sculpture for museum exhibit installation"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-medium">
                  Large Motorized Exhibition Piece
                </p>
                <p className="text-text-secondary">
                  Continuous operation with multiple track paths for sustained visitor engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Public Spaces */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Engineered for Museum Environments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-3">Durability First</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    Museums need exhibits that can run continuously during operating
                    hours, day after day. Jon builds with this reality in mind, using
                    quality motors, precision bearings, and materials that hold up
                    under constant use.
                  </p>
                  <h3 className="text-white font-semibold mb-3">Easy Maintenance</h3>
                  <p className="text-text-muted leading-relaxed">
                    Clear documentation and training for your facilities team means
                    routine care stays in-house. For anything beyond the basics,
                    Jon provides ongoing support.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Safety Considered</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    Designs account for curious hands. Enclosures, mounting heights,
                    and component placement all consider the reality of public
                    exhibition spaces.
                  </p>
                  <h3 className="text-white font-semibold mb-3">Flexible Sizing</h3>
                  <p className="text-text-muted leading-relaxed">
                    From tabletop demonstration units to multi-story installations,
                    each sculpture is designed to fit its specific location and
                    intended impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Ideal Venues
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {venueTypes.map((venue, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-surface/30"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-text-secondary">{venue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bring Physics to Life at Your Institution
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Whether you are planning a new exhibit, refreshing a gallery, or
              looking for a signature piece for your lobby, Jon would be glad to
              discuss how a rolling ball sculpture can serve your educational mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Start the Conversation
              </GlassButton>
              <GlassButton href="/installations" variant="outline" size="lg">
                Large-Scale Capabilities
              </GlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

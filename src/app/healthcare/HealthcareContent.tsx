'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const benefits = [
  {
    title: 'Calms Anxious Patients',
    description:
      'The gentle, rhythmic motion of rolling marbles provides a natural focal point that helps patients relax before procedures and appointments.',
    icon: '🧘',
  },
  {
    title: 'Engages All Ages',
    description:
      'Children watch in wonder while adults find themselves equally captivated. These sculptures create shared moments of joy in otherwise stressful environments.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Built for Continuous Use',
    description:
      'Designed and tested for round-the-clock operation. Quality motors and precision engineering mean reliable performance day after day.',
    icon: '⚡',
  },
  {
    title: 'Easy to Maintain',
    description:
      'Simple maintenance requirements keep your sculpture running smoothly. Jon provides detailed care instructions and ongoing support.',
    icon: '🔧',
  },
  {
    title: 'Infection Control Friendly',
    description:
      'Smooth stainless steel and powder-coated surfaces are easy to clean and sanitize, meeting the demands of healthcare environments.',
    icon: '✨',
  },
  {
    title: 'Custom Theming Available',
    description:
      'Incorporate your facility\'s colors, mascot, or healing themes into the sculpture design. Each piece is built specifically for your space.',
    icon: '🎨',
  },
]

const testimonialPlaceholder = {
  quote:
    'Watching the marbles travel through the sculpture gives our young patients something positive to focus on. Parents tell us it makes the waiting room feel less clinical and more welcoming.',
  attribution: 'Pediatric Clinic Administrator',
}

export function HealthcareContent() {
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
              Healthcare & Hospital Installations
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Art That Heals
              <br />
              <span className="gradient-text">Through Wonder</span>
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
              Rolling ball sculptures bring calm and curiosity to hospital lobbies,
              waiting rooms, and patient care areas. Give your visitors something
              beautiful to focus on during difficult moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Discuss Your Project
              </GlassButton>
              <GlassButton href="/gallery" variant="outline" size="lg">
                View Gallery
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Healthcare Spaces Present Unique Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-white font-semibold text-xl mb-4">The Problem</h3>
                <p className="text-text-secondary leading-relaxed">
                  Waiting rooms and hospital lobbies can feel sterile and anxiety-inducing.
                  Patients arrive already stressed about their health, and the clinical
                  environment does little to put them at ease. Traditional artwork hangs
                  static on walls, easily overlooked.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-white font-semibold text-xl mb-4">The Solution</h3>
                <p className="text-text-secondary leading-relaxed">
                  Kinetic sculpture captures attention in a way static art simply cannot.
                  The continuous, gentle movement of marbles traveling through loops and
                  spirals draws the eye and quiets the mind. It transforms waiting time
                  into moments of peaceful observation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Healthcare Facilities Choose Kinetic Art
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Rolling ball sculptures offer benefits that go beyond aesthetics.
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
                src="/images/products/DSC00389-large-motorized.webp"
                alt="Large motorized rolling ball sculpture suitable for hospital lobbies"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-medium">
                  Motorized Floor Sculpture
                </p>
                <p className="text-text-secondary">
                  Designed for continuous operation in high-traffic public spaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="text-5xl mb-6">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                {testimonialPlaceholder.quote}
              </blockquote>
              <cite className="text-text-muted not-italic">
                — {testimonialPlaceholder.attribution}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Locations */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Where These Sculptures Thrive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Hospital Main Lobbies',
                'Pediatric Waiting Rooms',
                'Cancer Treatment Centers',
                'Emergency Department Lobbies',
                'Outpatient Clinics',
                'Rehabilitation Centers',
                'Mental Health Facilities',
                'Senior Living Communities',
                'Medical Office Buildings',
              ].map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-surface/30"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-text-secondary">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                From Concept to Installation
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Site Assessment</h3>
                    <p className="text-text-muted">
                      We start by understanding your space, traffic patterns, and vision.
                      Photos and measurements help us design something that fits perfectly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Custom Design</h3>
                    <p className="text-text-muted">
                      Jon develops a design tailored to your specifications, including
                      size, materials, and any custom elements like colors or themes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Handcrafted Fabrication</h3>
                    <p className="text-text-muted">
                      Each sculpture is built by hand with regular progress updates.
                      You will see photos and videos as your piece takes shape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Installation & Training</h3>
                    <p className="text-text-muted">
                      For larger pieces, Jon provides on-site installation and trains
                      your facilities team on basic operation and care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bring Wonder to Your Healthcare Space
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Whether you are designing a new facility or enhancing an existing
              space, a rolling ball sculpture can transform the patient experience.
              Let&apos;s discuss what&apos;s possible for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/contact" variant="primary" size="lg">
                Start a Conversation
              </GlassButton>
              <GlassButton href="/installations" variant="outline" size="lg">
                View Large-Scale Work
              </GlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

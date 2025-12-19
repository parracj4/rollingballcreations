'use client'

import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'

const stats = [
  { value: '30+', label: 'Sculptures Created' },
  { value: '100%', label: 'Handcrafted' },
  { value: 'Global', label: 'Shipping' },
  { value: 'Yes', label: 'Maintenance Services' },
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

        {/* Inspiration Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Inspired by the Masters of <span className="gradient-text">Kinetic Art</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              {siteContent.about.inspiration}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { term: 'Rolling Ball Sculpture', desc: 'Also known as marble machines, ball runs, or kugelbahn' },
                { term: 'Kinetic Art', desc: 'Art that contains moving parts or depends on motion' },
                { term: 'Audiokinetic', desc: 'Sculptures that create sound as balls strike bells and chimes' },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 border border-white/10 rounded-xl">
                  <h3 className="text-primary font-semibold mb-2">{item.term}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Rolling Ball Sculptures Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience <span className="gradient-text">Rolling Ball Sculptures</span> in Person
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              George Rhoads and his successor company Creative Machines have installed nearly 250 ball machine sculptures in airports, science museums, children&apos;s hospitals, and public spaces across the globe—from the famous 42nd Street Ballroom at New York&apos;s Port Authority to installations in Japan, Taiwan, Mexico, and beyond.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              To find a rolling ball sculpture near you, visit the official archives:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://georgerhoads.com/ballmachines/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all"
              >
                George Rhoads Archive
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://www.creativemachines.com/ball-machine-sculptures"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Creative Machines
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quality & Maintenance Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Craftsmanship &amp; Care
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {siteContent.about.quality}
              </p>
              <p className="text-text-secondary leading-relaxed">
                As with any fine kinetic art, rolling ball sculptures benefit from periodic maintenance to keep them running smoothly. Jon offers maintenance and repair services for his own creations as well as other marble machines and rolling ball sculptures—whether you need a tune-up, track adjustment, or restoration work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚙️', title: 'Premium Metals', desc: 'Stainless steel & copper' },
                { icon: '🔮', title: 'Quality Marbles', desc: 'Hand-selected glass' },
                { icon: '⚡', title: 'Precision Motors', desc: 'Smooth operation' },
                { icon: '🔧', title: 'Maintenance', desc: 'Repairs & tune-ups available' },
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlassCard hover={false}>
            <div className="flex items-center gap-4">
              <div className="text-4xl">📍</div>
              <div className="text-left">
                <p className="text-white font-semibold">
                  {siteContent.business.address.city},{' '}
                  {siteContent.business.address.state}
                </p>
                <p className="text-primary text-sm">
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

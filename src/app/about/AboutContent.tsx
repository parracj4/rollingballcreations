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

        {/* Famous Installations Section */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Where to See <span className="gradient-text">Rolling Ball Sculptures</span>
            </h2>
            <p className="text-text-secondary text-center mb-8 max-w-3xl mx-auto">
              George Rhoads and Creative Machines have installed nearly 250 ball machine sculptures worldwide. Here are some famous locations where you can experience these mesmerizing kinetic artworks in person.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Airports */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>✈️</span> Airports
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">Exercise in Fugality</span> — Logan Airport, Boston, MA</li>
                  <li><span className="text-white">Celestial Balldergarten</span> — Philadelphia International Airport</li>
                  <li><span className="text-white">Good Time Clock</span> — San Jose International Airport, CA</li>
                  <li><span className="text-white">Angel Music</span> — Los Angeles International Airport</li>
                  <li>Cleveland Hopkins International Airport</li>
                </ul>
              </div>

              {/* Science Museums */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>🔬</span> Science Museums
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">Archimedean Excogitation</span> — Museum of Science, Boston</li>
                  <li><span className="text-white">Science on a Roll</span> — The Tech Museum, San Jose</li>
                  <li><span className="text-white">Newton&apos;s Convergence</span> — Franklin Institute, Philadelphia</li>
                  <li><span className="text-white">Newton&apos;s Daydream</span> — Clark Planetarium, Salt Lake City</li>
                  <li><span className="text-white">Cavortech</span> — Avampato Discovery Museum, Charleston, WV</li>
                  <li><span className="text-white">Uridice</span> — Discovery Science Center, Costa Mesa, CA</li>
                  <li><span className="text-white">Funkinetic</span> — Science Centre Singapore</li>
                  <li><span className="text-white">Calliope Borealic</span> — Anchorage Museum, Alaska</li>
                </ul>
              </div>

              {/* Children's Hospitals */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>🏥</span> Children&apos;s Hospitals
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">Journey through Stanford</span> — Lucile Packard Children&apos;s Hospital, Palo Alto</li>
                  <li><span className="text-white">Incrediball Circus II</span> — Akron Children&apos;s Hospital, OH</li>
                  <li><span className="text-white">Circus of the Spheres</span> — Rainbow Babies Hospital, Cleveland</li>
                  <li><span className="text-white">Peaceaball Kingdom</span> — UNC Children&apos;s Hospital, Chapel Hill</li>
                  <li><span className="text-white">Zippy Zoo</span> — Columbia Presbyterian, NYC</li>
                  <li><span className="text-white">Ball Game II</span> — Joe DiMaggio Children&apos;s Hospital, FL</li>
                  <li>St. Louis Children&apos;s Hospital</li>
                  <li>Comer Children&apos;s Hospital, Chicago</li>
                  <li>Shriners Children&apos;s Hospital, Springfield, MA</li>
                </ul>
              </div>

              {/* Transit & Public Spaces */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>🏛️</span> Transit & Public Spaces
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">42nd Street Ballroom</span> — Port Authority Bus Terminal, NYC</li>
                  <li><span className="text-white">Tower of Sisyphus</span> — Chesapeake Energy, Oklahoma City</li>
                  <li><span className="text-white">Based on Balls</span> — Chase Field, Phoenix, AZ</li>
                  <li><span className="text-white">Chockablock Clock</span> — Strawberry Square, Harrisburg, PA</li>
                  <li><span className="text-white">The Gizmo</span> — Champlain Centre Mall, Plattsburgh, NY</li>
                  <li><span className="text-white">Life is a Ball</span> — Scientific Games, Las Vegas</li>
                </ul>
              </div>

              {/* International */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>🌍</span> International
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">Life Renews Itself</span> — Ōsaka Namba Station, Japan</li>
                  <li><span className="text-white">Maquina del Vacilon</span> — Papalote Museo del Nino, Mexico City</li>
                  <li><span className="text-white">Magic Menagerie</span> — National Taiwan University Hospital</li>
                  <li><span className="text-white">Kinetikon</span> — National Taiwan Science Education Center</li>
                  <li><span className="text-white">Global Enerjoy</span> — Seville Expo &apos;92, Spain</li>
                  <li><span className="text-white">Electric Ball Circus</span> — Edmonton Science Centre, Canada</li>
                  <li>Plus installations in Guam, Australia, Israel, and Chile</li>
                </ul>
              </div>

              {/* Universities & Education */}
              <div className="border border-white/10 rounded-xl p-5">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <span>🎓</span> Universities & Education
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li><span className="text-white">Pythagorean Fantasy</span> — University of Colorado, Boulder</li>
                  <li><span className="text-white">Color Coaster</span> — Stepping Stones Museum, Norwalk, CT</li>
                  <li>Lincoln Children&apos;s Museum</li>
                  <li>Permanent collections at MoMA (NYC) and Art Institute of Chicago</li>
                </ul>
              </div>
            </div>

            <p className="text-text-muted text-sm text-center mt-8">
              Today, Creative Machines (Tucson, AZ) continues George Rhoads&apos; legacy, designing and fabricating new ball machine sculptures using his original techniques.
            </p>
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

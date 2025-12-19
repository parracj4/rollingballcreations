'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const videos = [
  {
    id: 'zPCd1yVWd6I',
    title: 'Large Motorized Sculpture',
    description: "Jon's biggest creation to date - a massive motorized rolling ball sculpture with multiple track paths.",
    isShort: true,
  },
  {
    id: 'aqPEs9TWomQ',
    title: 'Rolling Ball Sculpture',
    description: 'Watch the mesmerizing flow of marbles through this handcrafted kinetic sculpture.',
    isShort: true,
  },
  {
    id: '-lV2AC7z6GA',
    title: 'Kinetic Art in Motion',
    description: 'Another stunning example of handcrafted rolling ball artistry.',
    isShort: true,
  },
  {
    id: 'QXDErLLqp6U',
    title: 'Marble Run Sculpture',
    description: 'Experience the satisfying journey of marbles through intricate pathways.',
    isShort: true,
  },
  {
    id: 's76T57SmqoU',
    title: 'Custom Rolling Ball Machine',
    description: 'A closer look at the craftsmanship behind these unique kinetic sculptures.',
    isShort: false,
  },
  {
    id: 'fKghXGGNvYE',
    title: 'Sculpture Workshop',
    description: 'See the artistry and precision that goes into each creation.',
    isShort: false,
  },
  {
    id: 'wp9lKTqYlfA',
    title: 'Rolling Ball Art',
    description: 'The beauty of kinetic art - marbles dancing through handcrafted tracks.',
    isShort: false,
  },
]

export function VideosContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Watch Them<br />
              <span className="gradient-text">Come to Life</span>
            </h1>
            <p className="text-text-secondary text-lg">
              See the mesmerizing movement of our rolling ball sculptures in action.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <GlassCard key={video.id} hover={false} className="overflow-hidden">
              <div className={video.isShort ? 'aspect-[9/16]' : 'aspect-video'}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                <p className="text-text-muted text-sm">{video.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {videos.length <= 3 && (
          <div className="text-center mt-16">
            <GlassCard hover={false} className="inline-block max-w-lg">
              <p className="text-text-secondary mb-4">
                More videos coming soon! Follow Jon&apos;s work as he creates new sculptures and documents the process.
              </p>
              <GlassButton href="/contact" variant="outline">
                Request a Custom Video
              </GlassButton>
            </GlassCard>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton href="/gallery" variant="primary">
              Browse Gallery
            </GlassButton>
            <GlassButton href="/contact" variant="outline">
              Commission a Piece
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}

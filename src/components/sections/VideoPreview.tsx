import { GlassButton, YouTubeFacade } from '@/components/ui'

export function VideoPreview() {
  return (
    <section className="section bg-surface/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See Them in Action
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Watch the mesmerizing movement of our rolling ball sculptures.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface/50">
            <div className="aspect-[9/16]">
              <YouTubeFacade
                videoId="zPCd1yVWd6I"
                title="Large Motorized Rolling Ball Sculpture"
                isShort
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">Large Motorized Sculpture</h3>
              <p className="text-text-muted text-sm">Jon&apos;s biggest creation to date</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <GlassButton href="/videos" variant="outline">
            View All Videos
          </GlassButton>
        </div>
      </div>
    </section>
  )
}

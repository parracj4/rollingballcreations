'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GlassCard, GlassButton, Badge } from '@/components/ui'
import { getFeaturedSculptures, formatPrice, formatDimensions } from '@/lib/data'

export function FeaturedSculptures() {
  const featured = getFeaturedSculptures(4)

  return (
    <section className="section bg-surface/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Sculptures
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Each piece is a unique work of art, meticulously handcrafted to
            bring kinetic wonder into your space.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((sculpture, index) => (
            <div
              key={sculpture.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/gallery/${sculpture.slug}`}>
                <GlassCard className="group overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {sculpture.images[0] ? (
                      <Image
                        src={sculpture.images[0]}
                        alt={sculpture.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={index < 2}
                      />
                    ) : (
                      <div className="w-full h-full bg-surface flex items-center justify-center">
                        <span className="text-text-muted">No image</span>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="available">Available</Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1 line-clamp-1">
                      {sculpture.material}
                    </h3>
                    <p className="text-text-muted text-sm mb-2">
                      {formatDimensions(sculpture.dimensions)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">
                        {formatPrice(sculpture.price)}
                      </span>
                      <span className="text-text-secondary text-sm group-hover:text-primary transition-colors">
                        View Details →
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <GlassButton href="/gallery" variant="outline" size="lg">
            View All Sculptures
          </GlassButton>
        </div>
      </div>
    </section>
  )
}

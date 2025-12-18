'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GlassCard, Badge } from '@/components/ui'
import { Sculpture, formatPrice, formatDimensions } from '@/lib/data'

interface SculptureCardProps {
  sculpture: Sculpture
  index?: number
}

export function SculptureCard({ sculpture, index = 0 }: SculptureCardProps) {
  const isAvailable = sculpture.status === 'available'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link href={`/gallery/${sculpture.slug}`}>
        <GlassCard className="group overflow-hidden p-0 h-full">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-surface">
            {sculpture.images[0] ? (
              <Image
                src={sculpture.images[0]}
                alt={sculpture.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <div className="text-4xl mb-2">🎨</div>
                  <span className="text-sm">Image Coming Soon</span>
                </div>
              </div>
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            <div className="absolute top-4 right-4">
              <Badge variant={isAvailable ? 'available' : 'sold'}>
                {isAvailable ? 'Available' : 'Sold'}
              </Badge>
            </div>

            {/* Quick view on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="glass px-4 py-2 rounded-full text-white text-sm">
                View Details
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            {/* Material */}
            <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
              {sculpture.material}
            </h3>

            {/* Dimensions */}
            <p className="text-text-muted text-sm mb-3">
              {formatDimensions(sculpture.dimensions)}
            </p>

            {/* Features tags */}
            {sculpture.features && sculpture.features.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {sculpture.features.slice(0, 2).map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-muted"
                  >
                    {feature}
                  </span>
                ))}
                {sculpture.features.length > 2 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
                    +{sculpture.features.length - 2} more
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span
                className={`font-bold text-lg ${
                  isAvailable ? 'text-primary' : 'text-text-muted'
                }`}
              >
                {formatPrice(sculpture.price)}
              </span>
              <span className="text-text-secondary text-sm group-hover:text-primary transition-colors">
                →
              </span>
            </div>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  )
}

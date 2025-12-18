'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GlassCard, GlassButton, Badge } from '@/components/ui'
import { SculptureCard } from '@/components/gallery'
import { Sculpture, formatPrice, formatDimensions } from '@/lib/data'

interface SculptureDetailProps {
  sculpture: Sculpture
  related: Sculpture[]
}

export function SculptureDetail({ sculpture, related }: SculptureDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const isAvailable = sculpture.status === 'available'

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>/</li>
            <li className="text-text-secondary">{sculpture.material}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden glass mb-4">
              {sculpture.images[selectedImage] ? (
                <Image
                  src={sculpture.images[selectedImage]}
                  alt={sculpture.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface">
                  <div className="text-center text-text-muted">
                    <div className="text-6xl mb-4">🎨</div>
                    <span>Image Coming Soon</span>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <Badge
                  variant={isAvailable ? 'available' : 'sold'}
                  className="text-base px-4 py-2"
                >
                  {isAvailable ? 'Available' : 'Sold'}
                </Badge>
              </div>
            </div>

            {/* Thumbnails */}
            {sculpture.images.length > 1 && (
              <div className="flex gap-2">
                {sculpture.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${sculpture.name} - Image ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div>
            {/* Category */}
            <p className="text-primary uppercase tracking-wider text-sm mb-2">
              {sculpture.category.replace('-', ' ')} •{' '}
              {sculpture.subcategory.replace('-', ' ')}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {sculpture.material}
            </h1>

            {/* Dimensions */}
            <p className="text-text-secondary text-lg mb-6">
              {formatDimensions(sculpture.dimensions)}
            </p>

            {/* Price */}
            <div className="mb-8">
              <span
                className={`text-4xl font-bold ${
                  isAvailable ? 'text-primary' : 'text-text-muted'
                }`}
              >
                {formatPrice(sculpture.price)}
              </span>
              {isAvailable && (
                <span className="text-text-muted ml-2">USD</span>
              )}
            </div>

            {/* Description */}
            <GlassCard className="mb-8" hover={false}>
              <h2 className="text-white font-semibold mb-3">Description</h2>
              <p className="text-text-secondary leading-relaxed">
                {sculpture.description}
              </p>
            </GlassCard>

            {/* Features */}
            {sculpture.features && sculpture.features.length > 0 && (
              <GlassCard className="mb-8" hover={false}>
                <h2 className="text-white font-semibold mb-3">Features</h2>
                <ul className="space-y-2">
                  {sculpture.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {/* Specs */}
            <GlassCard className="mb-8" hover={false}>
              <h2 className="text-white font-semibold mb-3">Specifications</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-text-muted text-sm">Material</dt>
                  <dd className="text-white">{sculpture.material}</dd>
                </div>
                <div>
                  <dt className="text-text-muted text-sm">Category</dt>
                  <dd className="text-white capitalize">
                    {sculpture.subcategory.replace('-', ' ')}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted text-sm">Dimensions</dt>
                  <dd className="text-white">
                    {formatDimensions(sculpture.dimensions)}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted text-sm">Status</dt>
                  <dd className="text-white capitalize">{sculpture.status}</dd>
                </div>
              </dl>
            </GlassCard>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {isAvailable ? (
                <>
                  <GlassButton variant="primary" size="lg" className="flex-1">
                    Add to Cart - {formatPrice(sculpture.price)}
                  </GlassButton>
                  <GlassButton
                    href="/contact"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    Ask a Question
                  </GlassButton>
                </>
              ) : (
                <GlassButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  Commission a Similar Piece
                </GlassButton>
              )}
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4 text-text-muted text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Worldwide Shipping
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Secure Checkout
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Lifetime Quality
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Sculptures */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Related Sculptures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((sculpture, index) => (
                <SculptureCard
                  key={sculpture.id}
                  sculpture={sculpture}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

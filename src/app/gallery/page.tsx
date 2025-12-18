'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SculptureCard, GalleryFilters } from '@/components/gallery'
import { sculptures } from '@/lib/data'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredSculptures = useMemo(() => {
    if (activeFilter === 'all') return sculptures
    if (activeFilter === 'available')
      return sculptures.filter((s) => s.status === 'available')
    if (activeFilter === 'sold')
      return sculptures.filter((s) => s.status === 'sold')
    return sculptures.filter((s) => s.category === activeFilter)
  }, [activeFilter])

  // Sort: available first, then by price descending
  const sortedSculptures = useMemo(() => {
    return [...filteredSculptures].sort((a, b) => {
      if (a.status === 'available' && b.status !== 'available') return -1
      if (a.status !== 'available' && b.status === 'available') return 1
      return (b.price || 0) - (a.price || 0)
    })
  }, [filteredSculptures])

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Explore our collection of handcrafted rolling ball sculptures. Each
            piece is unique, built with precision and designed to captivate.
          </p>
        </motion.div>

        {/* Filters */}
        <GalleryFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Results count */}
        <motion.p
          className="text-text-muted text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeFilter}
        >
          Showing {sortedSculptures.length} sculpture
          {sortedSculptures.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {sortedSculptures.map((sculpture, index) => (
            <SculptureCard
              key={sculpture.id}
              sculpture={sculpture}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {sortedSculptures.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-white mb-2">No sculptures found</h3>
            <p className="text-text-muted">
              Try adjusting your filters to see more results.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

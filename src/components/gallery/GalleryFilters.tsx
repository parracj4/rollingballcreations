'use client'

import { cn } from '@/lib/utils'

interface FilterOption {
  value: string
  label: string
}

interface GalleryFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'sold', label: 'Sold' },
  { value: 'stainless', label: 'Stainless' },
  { value: 'copper', label: 'Copper' },
  { value: 'powder-coated', label: 'Powder Coated' },
]

export function GalleryFilters({
  activeFilter,
  onFilterChange,
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeFilter === filter.value
              ? 'bg-primary text-white'
              : 'glass text-text-secondary hover:text-white hover:bg-white/10'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export interface Sculpture {
  id: string
  name: string
  slug: string
  category: 'copper' | 'stainless' | 'powder-coated'
  subcategory: 'desk-top' | 'table-top' | 'wall-mount' | 'floor-standing'
  price: number | null
  status: 'available' | 'sold'
  description: string
  dimensions: {
    width?: number
    height?: number
    depth?: number
    diameter?: number
    unit: string
  }
  material: string
  features?: string[]
  images: string[]
  type?: string
}

export interface SiteContent {
  business: {
    name: string
    tagline: string
    slogan: string
    artist: string
    address: {
      street: string
      city: string
      state: string
      zip: string
      country: string
    }
    shipping: string
  }
}

export const sculptures: Sculpture[] = [
  // FOR SALE
  {
    id: 'wine-bottle-holder',
    name: '13" x 11" x 10" | Raw Copper',
    slug: 'wine-bottle-holder-copper',
    category: 'copper',
    subcategory: 'desk-top',
    price: 375,
    status: 'available',
    description: 'This wine bottle holder is hand-built by Jon using a rustic butcher block base. Perfect for a kitchen centerpiece or dining room conversation-starter.',
    dimensions: { width: 13, height: 11, depth: 10, unit: 'inches' },
    material: 'Raw Copper',
    images: ['/images/products/DSC00396-wine-holder.jpg'],
  },
  {
    id: 'powder-coated-18x16x12',
    name: '18" x 16" x 12" | Powder Coated',
    slug: 'powder-coated-18x16x12',
    category: 'powder-coated',
    subcategory: 'table-top',
    price: 950,
    status: 'available',
    description: 'One of a kind custom rolling ball sculpture art for your home or business. Powder coated finish for durability and style.',
    dimensions: { width: 18, height: 16, depth: 12, unit: 'inches' },
    material: 'Powder Coated',
    images: ['/images/products/DSC00401-powder-coated.jpg'],
  },
  {
    id: 'wall-mount-round-24',
    name: '24" diameter x 6" deep | Raw Stainless',
    slug: 'wall-mount-round-24',
    category: 'stainless',
    subcategory: 'wall-mount',
    price: 1100,
    status: 'available',
    description: 'This stainless wall mounted sculpture is flat on the mounting side and protrudes out around 6 inches. Marble launching is defined by Jon as automatic because it has a push rod that is manually pushed but once a marble is on the track it will automatically start the next marble.',
    dimensions: { diameter: 24, depth: 6, unit: 'inches' },
    material: 'Raw Stainless',
    type: 'wall-mount',
    features: ['automatic marble launching', 'push rod mechanism'],
    images: ['/images/products/DSC00403-wall-mount-round.jpg'],
  },
  {
    id: 'motorcycle-sprocket-16x14x8',
    name: '16" x 14" x 8" | Raw Stainless',
    slug: 'motorcycle-sprocket-16x14x8',
    category: 'stainless',
    subcategory: 'table-top',
    price: 900,
    status: 'available',
    description: 'This sculpture incorporates a motorcycle sprocket into the design and is the base used to hold the sculpture up. The sculpture track and mounting rod is made of stainless steel.',
    dimensions: { width: 16, height: 14, depth: 8, unit: 'inches' },
    material: 'Raw Stainless',
    features: ['motorcycle sprocket base', 'stainless steel track'],
    images: ['/images/products/DSC00398-motorcycle-sprocket.jpg'],
  },
  {
    id: 'large-motorized-40x37x13',
    name: '40" x 37" x 13" | Raw Stainless',
    slug: 'large-motorized-40x37x13',
    category: 'stainless',
    subcategory: 'floor-standing',
    price: 10000,
    status: 'available',
    description: 'This motorized marble sculpture features several loops, spirals, cantilevers, and a tipping arm with four alternating track paths. The mechanism operates at approximately six marbles per minute and is constructed from polished stainless steel with an aluminum core in the helical lift.',
    dimensions: { width: 40, height: 37, depth: 13, unit: 'inches' },
    material: 'Polished Stainless Steel',
    features: [
      'motorized',
      'loops',
      'spirals',
      'cantilevers',
      'tipping arm',
      'four alternating track paths',
      'aluminum core helical lift',
      '~6 marbles per minute',
    ],
    images: ['/images/products/DSC00389-large-motorized.jpg'],
  },

  // SOLD
  {
    id: 'sold-polished-stainless-20x21x14',
    name: '20" x 21" x 14" | Polished Stainless',
    slug: 'sold-polished-stainless-20x21x14',
    category: 'stainless',
    subcategory: 'table-top',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture - one of a kind art piece.',
    dimensions: { width: 20, height: 21, depth: 14, unit: 'inches' },
    material: 'Polished Stainless',
    images: [],
  },
  {
    id: 'sold-raw-stainless-13x20x12',
    name: '13" x 20" x 12" | Raw Stainless',
    slug: 'sold-raw-stainless-13x20x12',
    category: 'stainless',
    subcategory: 'table-top',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture - one of a kind art piece.',
    dimensions: { width: 13, height: 20, depth: 12, unit: 'inches' },
    material: 'Raw Stainless',
    images: ['/images/products/DSC00400-sold-raw-stainless.jpg'],
  },
  {
    id: 'sold-powder-coated-41x14x6',
    name: '41" x 14" x 6" | Powder Coated',
    slug: 'sold-powder-coated-41x14x6',
    category: 'powder-coated',
    subcategory: 'wall-mount',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture - one of a kind art piece.',
    dimensions: { width: 41, height: 14, depth: 6, unit: 'inches' },
    material: 'Powder Coated',
    images: ['/images/products/DSC00408-sold-powder-coated.jpg'],
  },
  {
    id: 'sold-wall-mount-22x20x5',
    name: '22" x 20" x 5" | Raw Stainless Wall Mount',
    slug: 'sold-wall-mount-22x20x5',
    category: 'stainless',
    subcategory: 'wall-mount',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture wall mount - one of a kind art piece.',
    dimensions: { width: 22, height: 20, depth: 5, unit: 'inches' },
    material: 'Raw Stainless',
    type: 'wall-mount',
    images: ['/images/products/DSC00405-sold-wall-mount.jpg'],
  },
  {
    id: 'sold-copper-20x20x36',
    name: '20" x 20" x 36" | Raw Copper',
    slug: 'sold-copper-20x20x36',
    category: 'copper',
    subcategory: 'floor-standing',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture - one of a kind art piece.',
    dimensions: { width: 20, height: 20, depth: 36, unit: 'inches' },
    material: 'Raw Copper',
    images: ['/images/products/IMG_4370-copper-sculpture.jpg'],
  },
  {
    id: 'sold-polished-stainless-30x22x6',
    name: '30" x 22" x 6" | Polished Stainless',
    slug: 'sold-polished-stainless-30x22x6',
    category: 'stainless',
    subcategory: 'wall-mount',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture - one of a kind art piece.',
    dimensions: { width: 30, height: 22, depth: 6, unit: 'inches' },
    material: 'Polished Stainless',
    images: ['/images/products/AB-Machine-polished-stainless.jpg'],
  },
  {
    id: 'sold-wall-mount-27x14x5',
    name: '27" x 14" x 5" | Raw Stainless Wall Mount',
    slug: 'sold-wall-mount-27x14x5',
    category: 'stainless',
    subcategory: 'wall-mount',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture wall mount - one of a kind art piece.',
    dimensions: { width: 27, height: 14, depth: 5, unit: 'inches' },
    material: 'Raw Stainless',
    type: 'wall-mount',
    images: ['/images/products/Med-Wall-Mount.jpg'],
  },
  {
    id: 'sold-wall-mount-20x13x5',
    name: '20" x 13" x 5" | Raw Stainless Wall Mount',
    slug: 'sold-wall-mount-20x13x5',
    category: 'stainless',
    subcategory: 'wall-mount',
    price: null,
    status: 'sold',
    description: 'Custom rolling ball sculpture wall mount - one of a kind art piece.',
    dimensions: { width: 20, height: 13, depth: 5, unit: 'inches' },
    material: 'Raw Stainless',
    type: 'wall-mount',
    images: ['/images/products/Small-Stainless-Wall-Mount.jpg'],
  },
]

export const siteContent = {
  business: {
    name: "Jon's Creations",
    tagline: 'Custom Rolling Ball Sculptures',
    slogan: 'One of a kind art for your home or business',
    artist: 'Jon Parrack',
    address: {
      street: '809 Viand St',
      city: 'Point Pleasant',
      state: 'WV',
      zip: '25550',
      country: 'USA',
    },
    coordinates: {
      lat: 38.847049,
      lng: -82.136957,
    },
    shipping: 'Worldwide',
    stats: {
      sculpturesSold: '30+',
    },
  },
  about: {
    intro: "Jon's Creations specializes in handcrafted kinetic sculptures that utilize gravity as a fundamental design element. The business offers both custom commissions and pre-designed rolling ball machines suitable for any space.",
    customization: 'Jon works individually with clients to develop personalized pieces. Pricing depends on the framework\'s dimensions rather than a fixed rate structure, allowing flexibility for various budgets and space requirements.',
    quality: 'With over 30 handcrafted sculptures sold, the business emphasizes durability and craftsmanship. Materials include premium metals, marbles, and motors designed for lifetime use with minimal maintenance requirements.',
  },
  process: [
    {
      number: 1,
      title: 'Initial Consultation & Design Review',
      description: "At the time of purchase, Jon will schedule a design review with you to get an idea of what your vision is. The process begins by exploring your specific needs, whether centered around business logos, keepsakes, or room aesthetics. Jon offers creative suggestions and has demonstrated capability in detailed work, such as incorporating handwriting into stainless rod designs.",
    },
    {
      number: 2,
      title: 'Design Development',
      description: 'Once the project begins, Jon maintains regular communication throughout production. Clients receive periodic photos and videos documenting progress, allowing for iterative refinement of the original concept before completion.',
    },
    {
      number: 3,
      title: 'Finishing',
      description: "After your sculpture is complete, Jon will finish the metal especially for you. Options include raw stainless steel, polished finishes, or powder coating to match your space's color scheme and aesthetic requirements.",
    },
    {
      number: 4,
      title: 'Shipping & Installation',
      description: 'Jon coordinates shipping solutions prioritizing cost-effectiveness, delivery time, and safety. Custom installation services are available for larger pieces at an additional fee.',
    },
    {
      number: 5,
      title: 'Final Enjoyment',
      description: 'Completed sculptures are positioned as unique, one-of-a-kind art pieces designed to spark conversation and enjoyment among visitors.',
    },
  ],
  finishingOptions: [
    'Raw Stainless Steel',
    'Polished Stainless',
    'Powder Coating (custom colors available)',
  ],
}

// Helper functions
export function getAvailableSculptures(): Sculpture[] {
  return sculptures.filter((s) => s.status === 'available')
}

export function getSoldSculptures(): Sculpture[] {
  return sculptures.filter((s) => s.status === 'sold')
}

export function getSculptureBySlug(slug: string): Sculpture | undefined {
  return sculptures.find((s) => s.slug === slug)
}

export function getFeaturedSculptures(count: number = 4): Sculpture[] {
  return getAvailableSculptures().slice(0, count)
}

export function formatPrice(price: number | null): string {
  if (price === null) return 'Sold'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)
}

export function formatDimensions(dimensions: Sculpture['dimensions']): string {
  if (dimensions.diameter) {
    return `${dimensions.diameter}" diameter × ${dimensions.depth}" deep`
  }
  return `${dimensions.width}" × ${dimensions.height}" × ${dimensions.depth}"`
}

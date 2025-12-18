import { siteContent, sculptures, Sculpture } from '@/lib/data'

export function LocalBusinessJsonLd() {
  const { business } = siteContent

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rollingballcreations.com',
    name: business.name,
    description: `${business.tagline}. ${business.slogan}`,
    url: 'https://rollingballcreations.com',
    telephone: '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    image: 'https://rollingballcreations.com/images/hero/DSC00397-hero.jpg',
    priceRange: '$375 - $10,000+',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArtGalleryJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    name: "Jon's Creations",
    description: 'Handcrafted rolling ball sculptures and kinetic art gallery',
    url: 'https://rollingballcreations.com/gallery',
    image: 'https://rollingballcreations.com/images/hero/DSC00397-hero.jpg',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ProductJsonLd({ sculpture }: { sculpture: Sculpture }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Rolling Ball Sculpture - ${sculpture.material}`,
    description: sculpture.description,
    image: sculpture.images[0]
      ? `https://rollingballcreations.com${sculpture.images[0]}`
      : undefined,
    brand: {
      '@type': 'Brand',
      name: "Jon's Creations",
    },
    manufacturer: {
      '@type': 'Organization',
      name: "Jon's Creations",
    },
    offers: sculpture.status === 'available' && sculpture.price
      ? {
          '@type': 'Offer',
          price: sculpture.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `https://rollingballcreations.com/gallery/${sculpture.slug}`,
          seller: {
            '@type': 'Organization',
            name: "Jon's Creations",
          },
        }
      : {
          '@type': 'Offer',
          availability: 'https://schema.org/SoldOut',
        },
    category: 'Kinetic Sculpture',
    material: sculpture.material,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Jon's Creations",
    url: 'https://rollingballcreations.com',
    description:
      'Handcrafted rolling ball sculptures and kinetic art. Custom marble machines for your home or business.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rollingballcreations.com/gallery?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

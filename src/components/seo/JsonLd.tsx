import { siteContent, sculptures, Sculpture } from '@/lib/data'

export function LocalBusinessJsonLd() {
  const { business } = siteContent

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rollingballcreations.com',
    name: business.name,
    alternateName: 'Rolling Ball Creations',
    description: `${business.tagline}. ${business.slogan}. Handcrafted kinetic sculptures, marble machines, and rolling ball art by Jon Parrack.`,
    url: 'https://rollingballcreations.com',
    telephone: business.phone,
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
    founder: {
      '@type': 'Person',
      name: 'Jon Parrack',
      jobTitle: 'Kinetic Sculptor',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Rolling Ball Sculpture',
      'Kinetic Art',
      'Marble Machine',
      'Custom Metal Sculpture',
    ],
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jon Parrack',
    jobTitle: 'Kinetic Sculptor',
    description:
      'Handcrafts rolling ball sculptures, marble machines, and kinetic art. Inspired by George Rhoads, Jon creates custom pieces for homes, businesses, hospitals, and museums.',
    url: 'https://rollingballcreations.com/about',
    image: 'https://rollingballcreations.com/images/jon-parrack.webp',
    worksFor: {
      '@type': 'Organization',
      name: "Jon's Creations",
    },
    knowsAbout: [
      'Rolling Ball Sculpture',
      'Kinetic Art',
      'Marble Machine',
      'Metal Fabrication',
      'TIG Welding',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Point Pleasant',
      addressRegion: 'WV',
      addressCountry: 'USA',
    },
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
    description:
      'Handcrafted rolling ball sculptures and kinetic art gallery featuring custom marble machines, ball runs, and audiokinetic sculptures for sale.',
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
    offers:
      sculpture.status === 'available' && sculpture.price
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
    alternateName: 'Rolling Ball Creations',
    url: 'https://rollingballcreations.com',
    description:
      'Handcrafted rolling ball sculptures and kinetic art. Custom marble machines for your home or business.',
    potentialAction: {
      '@type': 'SearchAction',
      target:
        'https://rollingballcreations.com/gallery?search={search_term_string}',
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

export function FAQPageJsonLd() {
  const faqs = [
    {
      question: 'How much does a rolling ball sculpture cost?',
      answer:
        'Prices range from $375 for small desktop pieces to $10,000 or more for large motorized floor sculptures. The final cost depends on size, complexity, materials, and any custom features. Every project receives a detailed quote after initial consultation.',
    },
    {
      question: 'How do I commission a custom rolling ball sculpture?',
      answer:
        'Start by reaching out through the contact form or by phone. Jon will schedule a conversation to understand your vision, space requirements, and budget. From there, he develops a design concept and provides a detailed quote. Once you approve the design and provide a deposit, fabrication begins with regular progress updates along the way.',
    },
    {
      question: 'How long does it take to create a custom sculpture?',
      answer:
        'Timeline varies based on size and complexity. Smaller desktop pieces might take 2-4 weeks, while larger motorized sculptures can take 2-3 months or more. Jon provides a timeline estimate with every quote.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes. Jon ships worldwide. Sculptures are carefully packaged to ensure safe arrival. Shipping costs vary by destination and sculpture size, and are quoted separately from the sculpture price.',
    },
    {
      question: 'What maintenance is required?',
      answer:
        'Maintenance is minimal. Occasional dusting, checking that marbles roll smoothly, and ensuring motor connections remain secure covers most needs. Jon provides detailed care instructions with every sculpture.',
    },
    {
      question:
        'What is the difference between a rolling ball sculpture and a marble machine?',
      answer:
        'These terms are often used interchangeably. "Rolling ball sculpture" emphasizes the artistic aspect, while "marble machine" highlights the mechanical nature. Other names include ball run, ball coaster, and the German term "kugelbahn."',
    },
    {
      question: 'Can I incorporate my company logo or specific colors?',
      answer:
        'Absolutely. Jon regularly works with clients to incorporate brand elements into sculptures. Powder coating allows for nearly any color match, and design elements like logos or symbols can be worked into the track layout or base design.',
    },
    {
      question: 'Do you repair sculptures made by other artists?',
      answer:
        'Yes. Jon offers maintenance and repair services for rolling ball sculptures regardless of who made them. If you have a marble machine that needs attention, get in touch to discuss the situation.',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ServiceJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Rolling Ball Sculpture Commission',
    provider: {
      '@type': 'LocalBusiness',
      name: "Jon's Creations",
    },
    description:
      'Commission a custom rolling ball sculpture designed and handcrafted specifically for your space. Available for homes, offices, hospitals, museums, and commercial installations.',
    areaServed: 'Worldwide',
    serviceType: 'Custom Art Commission',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

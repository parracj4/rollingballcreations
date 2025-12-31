import type { Metadata } from 'next'
import { ArtGalleryJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Rolling Ball Sculptures For Sale | Gallery',
  description:
    'Browse handcrafted rolling ball sculptures for sale. Prices from $375 to $10,000. Custom marble machines, kinetic art in copper, stainless steel, and powder coat finishes. Each piece is one of a kind.',
  keywords: [
    'rolling ball sculpture for sale',
    'buy rolling ball sculpture',
    'marble machine for sale',
    'kinetic sculpture for sale',
    'custom rolling ball sculpture',
    'stainless steel sculpture',
    'copper sculpture',
    'powder coated sculpture',
    'wall mount kinetic art',
    'motorized marble machine',
  ],
  openGraph: {
    title: 'Rolling Ball Sculptures For Sale',
    description:
      'Handcrafted kinetic art starting at $375. Stainless steel, copper, and powder coated finishes. Ships worldwide.',
    url: 'https://rollingballcreations.com/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArtGalleryJsonLd />
      {children}
    </>
  )
}

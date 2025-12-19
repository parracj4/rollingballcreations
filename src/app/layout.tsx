import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation, Footer } from '@/components/layout'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rollingballcreations.com'),
  title: {
    default: "Jon's Creations | Custom Rolling Ball Sculptures",
    template: "%s | Jon's Creations",
  },
  description:
    'Handcrafted rolling ball sculptures and kinetic art by Jon Parrack. Custom marble machines, ball runs, and audiokinetic sculptures inspired by George Rhoads. One of a kind pieces for homes, offices, and businesses. Worldwide shipping.',
  keywords: [
    // Primary terms
    'rolling ball sculpture',
    'rolling ball sculptures',
    'marble machine',
    'kinetic art',
    'kinetic sculpture',
    // Alternative names (German/international)
    'ball run',
    'ball coaster',
    'marble run',
    'kugelbahn',
    'gravitram',
    // Purchase intent
    'rolling ball sculpture for sale',
    'buy rolling ball sculpture',
    'custom rolling ball sculpture',
    'marble machine for sale',
    'kinetic art for sale',
    'kinetic sculpture for sale',
    // Materials
    'stainless steel sculpture',
    'copper sculpture',
    'metal kinetic art',
    'handmade metal sculpture',
    // Use cases
    'office sculpture',
    'lobby art',
    'corporate art',
    'waiting room art',
    'desk sculpture',
    'wall mounted sculpture',
    'floor sculpture',
    // Features
    'motorized marble machine',
    'audiokinetic sculpture',
    'gravity sculpture',
    'mechanical art',
    // Artist/style references
    'George Rhoads style',
    'George Rhoads inspired',
    'custom kinetic art',
    'handcrafted kinetic sculpture',
    'one of a kind sculpture',
    // Movie/pop culture references
    'Fracture movie sculpture',
    'Fracture 2007 marble machine',
    'Anthony Hopkins marble sculpture',
    'rolling ball sculpture from Fracture',
    // Location
    'rolling ball sculpture USA',
    'marble machine artist',
    'kinetic artist',
    'Jon Parrack',
  ],
  authors: [{ name: 'Jon Parrack' }],
  creator: 'Jon Parrack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rollingballcreations.com',
    siteName: "Jon's Creations",
    title: "Jon's Creations | Custom Rolling Ball Sculptures & Marble Machines",
    description:
      'Handcrafted rolling ball sculptures, marble machines, and kinetic art by Jon Parrack. Custom ball runs inspired by George Rhoads for homes and businesses.',
    images: [
      {
        url: '/images/hero/DSC00397-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Rolling Ball Sculpture - Handcrafted Kinetic Art by Jon Parrack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jon's Creations | Custom Rolling Ball Sculptures & Marble Machines",
    description:
      'Handcrafted rolling ball sculptures, marble machines, and kinetic art. Custom ball runs inspired by George Rhoads. Worldwide shipping.',
    images: ['/images/hero/DSC00397-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navigation, Footer } from '@/components/layout'
import { CartDrawer } from '@/components/cart'
import { CartProvider } from '@/lib/cart-context'
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
    'Handcrafted rolling ball sculptures and kinetic art. One of a kind custom marble machines for your home or business. Worldwide shipping available.',
  keywords: [
    'rolling ball sculpture',
    'rolling ball sculptures',
    'kinetic sculpture',
    'marble machine',
    'kinetic art',
    'custom sculpture',
    'handmade sculpture',
    'rolling ball machine',
    'marble sculpture',
    'kinetic sculpture for sale',
  ],
  authors: [{ name: 'Jon Parrack' }],
  creator: 'Jon Parrack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rollingballcreations.com',
    siteName: "Jon's Creations",
    title: "Jon's Creations | Custom Rolling Ball Sculptures",
    description:
      'Handcrafted rolling ball sculptures and kinetic art. One of a kind custom marble machines.',
    images: [
      {
        url: '/images/hero/DSC00397-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Rolling Ball Sculpture by Jon Parrack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jon's Creations | Custom Rolling Ball Sculptures",
    description:
      'Handcrafted rolling ball sculptures and kinetic art. One of a kind custom marble machines.',
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
        <CartProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}

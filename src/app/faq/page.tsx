import type { Metadata } from 'next'
import { FAQContent } from './FAQContent'
import { FAQPageJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Rolling Ball Sculptures',
  description:
    'Common questions about commissioning, pricing, shipping, and maintaining rolling ball sculptures. Learn about custom kinetic art from Jon\'s Creations.',
  keywords: [
    'rolling ball sculpture FAQ',
    'marble machine questions',
    'kinetic sculpture pricing',
    'custom sculpture commission',
    'rolling ball sculpture cost',
    'kinetic art maintenance',
    'marble machine shipping',
    'how rolling ball sculptures work',
  ],
  openGraph: {
    title: 'Rolling Ball Sculpture FAQ',
    description:
      'Answers to common questions about commissioning, pricing, and owning a custom rolling ball sculpture.',
    url: 'https://rollingballcreations.com/faq',
  },
}

export default function FAQPage() {
  return (
    <>
      <FAQPageJsonLd />
      <FAQContent />
    </>
  )
}

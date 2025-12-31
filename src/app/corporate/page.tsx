import type { Metadata } from 'next'
import { CorporateContent } from './CorporateContent'

export const metadata: Metadata = {
  title: 'Corporate Lobby Sculptures & Office Art Installations',
  description:
    'Custom rolling ball sculptures for corporate headquarters, office lobbies, and commercial spaces. Make a lasting impression on clients and employees with kinetic art that reflects your brand.',
  keywords: [
    'corporate lobby sculpture',
    'office art installation',
    'corporate headquarters art',
    'lobby kinetic sculpture',
    'commercial art installation',
    'executive office art',
    'brand sculpture',
    'corporate art commission',
    'office lobby design',
    'business art investment',
  ],
  openGraph: {
    title: 'Corporate Lobby Sculptures & Office Art',
    description:
      'Make a statement with custom kinetic sculptures for your corporate space. Handcrafted rolling ball art that impresses clients and inspires employees.',
    url: 'https://rollingballcreations.com/corporate',
  },
}

export default function CorporatePage() {
  return <CorporateContent />
}

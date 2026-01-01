import { Metadata } from 'next'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Jon Parrack',
  description:
    "Learn about Jon Parrack, the artist behind Jon's Creations, LLC. Discover the story behind handcrafted rolling ball sculptures and kinetic art.",
}

export default function AboutPage() {
  return <AboutContent />
}

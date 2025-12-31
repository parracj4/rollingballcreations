import type { Metadata } from 'next'
import { MuseumsContent } from './MuseumsContent'

export const metadata: Metadata = {
  title: 'Rolling Ball Sculptures for Museums & Science Centers',
  description:
    'Custom kinetic sculptures for museums, science centers, and educational institutions. Interactive exhibits that teach physics through play. Built for public spaces with high visitor traffic.',
  keywords: [
    'museum kinetic sculpture',
    'science center exhibit',
    'children\'s museum sculpture',
    'interactive museum art',
    'educational kinetic art',
    'science museum ball machine',
    'hands-on museum exhibit',
    'physics demonstration sculpture',
    'STEM exhibit sculpture',
    'museum installation art',
  ],
  openGraph: {
    title: 'Rolling Ball Sculptures for Museums & Science Centers',
    description:
      'Interactive kinetic art that teaches physics through wonder. Custom installations for museums, science centers, and educational institutions.',
    url: 'https://rollingballcreations.com/museums',
  },
}

export default function MuseumsPage() {
  return <MuseumsContent />
}

import { Metadata } from 'next'
import { VideosContent } from './VideosContent'

export const metadata: Metadata = {
  title: 'Videos',
  description:
    'Watch rolling ball sculptures in action. See the mesmerizing movement of handcrafted kinetic art by Jon Parrack.',
}

export default function VideosPage() {
  return <VideosContent />
}

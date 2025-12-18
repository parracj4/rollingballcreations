import { Metadata } from 'next'
import { ProcessContent } from './ProcessContent'

export const metadata: Metadata = {
  title: 'Creation Process',
  description:
    'Discover how Jon creates custom rolling ball sculptures. From initial consultation to final delivery, learn about the craftsmanship behind each piece.',
}

export default function ProcessPage() {
  return <ProcessContent />
}

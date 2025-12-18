import { Metadata } from 'next'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Jon's Creations. Commission a custom rolling ball sculpture or ask questions about our kinetic art pieces.",
}

export default function ContactPage() {
  return <ContactContent />
}

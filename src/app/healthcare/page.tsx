import type { Metadata } from 'next'
import { HealthcareContent } from './HealthcareContent'

export const metadata: Metadata = {
  title: 'Rolling Ball Sculptures for Hospitals & Healthcare Facilities',
  description:
    'Custom kinetic sculptures designed for hospitals, clinics, and healthcare environments. Reduce patient anxiety with mesmerizing rolling ball art. Durable, low-maintenance installations built for 24/7 operation.',
  keywords: [
    'hospital lobby art',
    'healthcare art installation',
    'children\'s hospital sculpture',
    'therapeutic art',
    'healing arts program',
    'patient anxiety reduction',
    'waiting room art',
    'pediatric hospital art',
    'medical facility sculpture',
    'kinetic art healthcare',
  ],
  openGraph: {
    title: 'Rolling Ball Sculptures for Hospitals & Healthcare',
    description:
      'Therapeutic kinetic art designed to calm and captivate patients of all ages. Custom installations for hospitals, clinics, and medical facilities.',
    url: 'https://rollingballcreations.com/healthcare',
  },
}

export default function HealthcarePage() {
  return <HealthcareContent />
}

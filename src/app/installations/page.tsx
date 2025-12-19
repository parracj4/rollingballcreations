import { Metadata } from 'next'
import { InstallationsContent } from './InstallationsContent'

export const metadata: Metadata = {
  title: 'Large Scale Installations',
  description:
    'Monumental kinetic sculptures for museums, corporate headquarters, and public spaces. Custom designed and engineered for continuous operation at any scale.',
}

export default function InstallationsPage() {
  return <InstallationsContent />
}

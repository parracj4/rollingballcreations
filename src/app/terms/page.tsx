import { Metadata } from 'next'
import { TermsContent } from './TermsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for Rolling Ball Creations. Learn about our policies for commissions, communication, and privacy.',
}

export default function TermsPage() {
  return <TermsContent />
}

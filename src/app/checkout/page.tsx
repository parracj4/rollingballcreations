import { Metadata } from 'next'
import { CheckoutContent } from './CheckoutContent'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your purchase of handcrafted rolling ball sculptures.',
}

export default function CheckoutPage() {
  return <CheckoutContent />
}

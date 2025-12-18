'use client'

import { useEffect } from 'react'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { useCart } from '@/lib/cart-context'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <GlassCard className="p-12" hover={false}>
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-success/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Thank You for Your Order!
              </h1>

              <p className="text-text-secondary text-lg mb-8">
                Your purchase of a handcrafted rolling ball sculpture is confirmed. Jon will begin working on your piece and you&apos;ll receive updates throughout the process.
              </p>

              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-white font-semibold mb-4">What Happens Next?</h2>
                <ul className="space-y-3 text-left text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">1.</span>
                    You&apos;ll receive an email confirmation shortly
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">2.</span>
                    Jon will reach out within 24-48 hours to discuss your piece
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">3.</span>
                    You&apos;ll receive photos and updates during creation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">4.</span>
                    Your sculpture will be carefully packaged and shipped
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton href="/" variant="primary" size="lg">Return Home</GlassButton>
                <GlassButton href="/gallery" variant="outline" size="lg">Browse More</GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}

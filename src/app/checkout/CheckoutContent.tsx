'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'
import {
  GlassCard,
  GlassButton,
  GlassInput,
  AnimatedGradient,
} from '@/components/ui'
import { formatPrice, formatDimensions } from '@/lib/data'

export function CheckoutContent() {
  const { state, removeFromCart, cartTotal } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCheckout = async () => {
    setIsProcessing(true)

    // In production, this would call your Stripe checkout API
    // For now, we'll simulate a redirect
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: state.items.map((item) => ({
            id: item.sculpture.id,
            name: item.sculpture.material,
            price: item.sculpture.price,
            quantity: item.quantity,
          })),
        }),
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setIsProcessing(false)
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-text-secondary mb-8">
              Looks like you haven&apos;t added any sculptures yet.
            </p>
            <GlassButton href="/gallery" variant="primary" size="lg">
              Browse Gallery
            </GlassButton>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <AnimatedGradient />
        </div>

        <div className="container-custom relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Checkout
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <motion.h2
                className="text-xl font-semibold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Your Sculptures ({state.items.length})
              </motion.h2>

              {state.items.map((item, index) => (
                <motion.div
                  key={item.sculpture.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="flex gap-6 p-4" hover={false}>
                    {/* Image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                      {item.sculpture.images[0] ? (
                        <Image
                          src={item.sculpture.images[0]}
                          alt={item.sculpture.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface flex items-center justify-center">
                          <span className="text-3xl">🎨</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold mb-1">
                        {item.sculpture.material}
                      </h3>
                      <p className="text-text-muted text-sm mb-2">
                        {formatDimensions(item.sculpture.dimensions)}
                      </p>
                      <p className="text-primary font-bold text-lg">
                        {formatPrice(item.sculpture.price)}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.sculpture.id)}
                      className="text-text-muted hover:text-error transition-colors self-start"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </GlassCard>
                </motion.div>
              ))}

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mt-4"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="sticky top-32" hover={false}>
                <h2 className="text-xl font-semibold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span className="text-success">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                </div>

                <GlassButton
                  onClick={handleCheckout}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                </GlassButton>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Secure checkout powered by Stripe
                  </div>
                  <div className="flex gap-2">
                    {['Visa', 'MC', 'Amex'].map((card) => (
                      <span
                        key={card}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-text-muted"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

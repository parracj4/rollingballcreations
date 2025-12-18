'use client'

import { useCart } from '@/lib/cart-context'

export function CartButton() {
  const { toggleCart, cartCount } = useCart()

  return (
    <button
      onClick={toggleCart}
      className="relative glass px-4 py-2 rounded-xl hover:bg-white/10 transition-all"
      aria-label={`Shopping cart with ${cartCount} items`}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>

      {/* Badge */}
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold">
          {cartCount}
        </span>
      )}
    </button>
  )
}

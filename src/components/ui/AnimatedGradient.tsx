'use client'

import { useEffect, useState } from 'react'

export function AnimatedGradient() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile and prefer reduced motion
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Simplified static gradient for mobile - no animations, no blur
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 -top-48 -right-48" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/15 top-1/3 -left-32" />
      </div>
    )
  }

  // Full animated version for desktop
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary copper orb - CSS animation instead of JS */}
      <div
        className="gradient-orb w-[600px] h-[600px] bg-primary/30 -top-48 -right-48 animate-float"
        style={{ animationDuration: '8s' }}
      />

      {/* Secondary gold orb */}
      <div
        className="gradient-orb w-[500px] h-[500px] bg-accent/20 top-1/3 -left-32 animate-float"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />

      {/* Tertiary warm orb */}
      <div
        className="gradient-orb w-[400px] h-[400px] bg-primary-light/20 bottom-0 right-1/4 animate-float"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />

      {/* Small accent orb */}
      <div
        className="gradient-orb w-[200px] h-[200px] bg-accent-light/25 top-1/4 right-1/3 animate-float"
        style={{ animationDuration: '6s', animationDelay: '0.5s' }}
      />
    </div>
  )
}

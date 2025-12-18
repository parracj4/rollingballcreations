'use client'

import { useState } from 'react'
import { GlassCard, GlassButton, GlassInput, GlassTextarea, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'

export function ContactContent() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Create<br /><span className="gradient-text">Something Amazing</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Ready to commission your own rolling ball sculpture? Have a question? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <GlassCard className="p-8" hover={false}>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✨</div>
                  <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                  <p className="text-text-secondary mb-6">Thank you for reaching out. Jon will get back to you as soon as possible.</p>
                  <GlassButton onClick={() => { setIsSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }) }} variant="outline">
                    Send Another Message
                  </GlassButton>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <GlassInput id="name" label="Your Name" placeholder="John Doe" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required />
                      <GlassInput id="email" type="email" label="Email Address" placeholder="john@example.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required />
                    </div>
                    <GlassInput id="subject" label="Subject" placeholder="Custom Commission Inquiry" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} required />
                    <GlassTextarea id="message" label="Message" placeholder="Tell us about your vision..." value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required rows={6} />
                    <GlassButton type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </GlassButton>
                  </form>
                </>
              )}
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {['Response within 24-48 hours', 'Free consultation for custom commissions', 'Detailed quotes based on your specifications', 'Photos and updates throughout the process'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-success flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">Location</h3>
              <div className="text-text-secondary">
                <p>{siteContent.business.address.street}</p>
                <p>{siteContent.business.address.city}, {siteContent.business.address.state} {siteContent.business.address.zip}</p>
                <p className="mt-2 text-primary">Shipping {siteContent.business.shipping.toLowerCase()}</p>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <h3 className="text-white font-semibold mb-4">Commission Info</h3>
              <p className="text-text-secondary mb-4">Pricing is based on framework dimensions, materials, and complexity.</p>
              <p className="text-text-muted text-sm">Starting from $375 for small desk pieces to $10,000+ for large motorized floor sculptures.</p>
            </GlassCard>

            <div className="flex flex-col sm:flex-row gap-4">
              <GlassButton href="/gallery" variant="outline" className="flex-1">View Gallery</GlassButton>
              <GlassButton href="/process" variant="outline" className="flex-1">See Process</GlassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

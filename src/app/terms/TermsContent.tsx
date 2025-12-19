'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const termsData = [
  {
    title: 'Information Use',
    content:
      'The information you provide (name, email, message) will be used solely to respond to your inquiry and communicate about potential commissions or purchases. We will not sell, share, or distribute your personal information to third parties.',
  },
  {
    title: 'Commission Inquiries',
    content:
      'All commission quotes are estimates and may vary based on final design specifications, materials, and complexity. A formal quote will be provided after initial consultation. Commissions require a deposit before work begins, with final payment due upon completion. We reserve the right to decline any commission inquiry or project for any reason.',
  },
  {
    title: 'Response Time',
    content:
      'We aim to respond to all inquiries within 24-48 business hours. Response times may vary during busy periods or holidays.',
  },
  {
    title: 'Communication Consent',
    content:
      'By providing your email address, you consent to receiving email communications related to your inquiry. You may opt out of future communications at any time.',
  },
  {
    title: 'Accessibility & Communication',
    content:
      'We strive to communicate across language and disability barriers to the best of our ability. However, we make no warranty or promise regarding our communication capabilities or the availability of translation, interpretation, or accessibility accommodations.',
  },
  {
    title: 'Accuracy of Information',
    content:
      'Please ensure all information provided is accurate. We are not responsible for delays or issues arising from incorrect contact information.',
  },
  {
    title: 'Age Requirement',
    content:
      'You must be at least 18 years old to submit a commission inquiry or make a purchase.',
  },
]

export function TermsContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Terms &<br />
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-text-secondary text-lg">
              By submitting a contact form or making a purchase, you agree to
              the following terms.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-6">
          {termsData.map((term, index) => (
            <GlassCard key={index} hover={false}>
              <h2 className="text-xl font-semibold text-white mb-3">
                {index + 1}. {term.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {term.content}
              </p>
            </GlassCard>
          ))}

          <div className="text-center pt-8">
            <p className="text-text-muted text-sm mb-6">
              If you have any questions about these terms, please contact us.
            </p>
            <GlassButton href="/contact" variant="outline">
              Contact Us
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}

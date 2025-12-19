'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const termsData = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use this website. Your continued use of this site constitutes your acceptance of any unmet accessibility standards, design choices, and all other terms herein.',
  },
  {
    title: 'Website Accessibility',
    content:
      'This website is designed with aesthetics and user experience in mind. While we have made efforts to improve accessibility, some elements may not meet all accessibility standards. By using this website, you acknowledge and accept any accessibility limitations. If you have difficulty accessing any content, please contact us directly and we will do our best to assist you.',
  },
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
    title: 'Limitation of Liability',
    content:
      'This website and its content are provided "as is" without warranties of any kind. We shall not be liable for any damages arising from your use of this website, including but not limited to direct, indirect, incidental, or consequential damages.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on this website, including images, text, designs, and artwork, is the property of Jon\'s Creations and is protected by copyright law. You may not reproduce, distribute, or use any content without prior written permission.',
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
  {
    title: 'Changes to Terms',
    content:
      'We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the new terms.',
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

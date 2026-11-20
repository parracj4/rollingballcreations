'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

export const TERMS_LAST_UPDATED = 'November 20, 2026'

const termsData = [
  {
    title: 'About These Terms',
    content:
      'This website is operated by Jon\'s Creations, LLC, a West Virginia limited liability company located at 1239 Bethel Rd, Point Pleasant, WV 25550 ("we," "us," or "our"). By using this website, submitting an inquiry, or purchasing or commissioning a sculpture, you agree to these Terms & Conditions. If you do not agree, please do not use the site.',
  },
  {
    title: 'Inquiries and Communication',
    content:
      'When you contact us, we use the information you provide to respond and to communicate about your inquiry, commission, or purchase. We aim to reply within 1-2 business days, though response times may vary during busy periods or holidays. You may ask us to stop contacting you at any time. See our Privacy Policy for details on how your information is handled.',
  },
  {
    title: 'Custom Work',
    content:
      'Every sculpture is a one-of-a-kind, handmade piece. Pricing, payment, timelines, shipping, delivery, installation, and any returns or changes are arranged individually with each client, case by case, and confirmed directly with you before work begins. Prices shown on this website are in U.S. dollars and are for reference; listed pieces are subject to prior sale. Handmade work varies, and colors and finishes may look different on your screen.',
  },
  {
    title: 'Safety and Care',
    content:
      'Rolling ball sculptures are works of art, not toys. They contain small balls and parts that can be a choking hazard; keep them out of reach of young children and pets, and supervise children around them. Motorized pieces should be used only with the power supply provided and kept away from water. Follow any care and operating instructions we provide. Modifying a sculpture or using it in a way it was not intended may cause damage or injury.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on this website, including photographs, videos, text, sculpture designs, and logos, is owned by Jon\'s Creations, LLC or used with permission, and is protected by copyright and other laws. You may share links to our pages, but you may not copy, reproduce, or use our content for commercial purposes without our written permission. Buying a sculpture gives you ownership of that physical piece; Jon\'s Creations, LLC keeps the copyright in its designs and may photograph and show completed work in its portfolio unless we agree otherwise in writing.',
  },
  {
    title: 'Third-Party Services and Links',
    content:
      'This website uses third-party services, including an online contact form, embedded YouTube videos, and Google Maps, and links to our social media pages. Those services are governed by their own terms and privacy policies, and we are not responsible for their content or practices.',
  },
  {
    title: 'Accessibility',
    content:
      'We want everyone to be able to use this website. If any part of the site is difficult for you to use, please call us at 304-593-6412 or reach out through our contact page, and we will help you get the information you need and work to improve the site.',
  },
  {
    title: 'Disclaimer and Limitation of Liability',
    content:
      'This website and its content are provided "as is." To the fullest extent permitted by law, Jon\'s Creations, LLC is not liable for indirect, incidental, or consequential damages arising from your use of this website, and our total liability for any claim relating to a purchase is limited to the amount you paid for that purchase. Nothing in these terms limits any rights you have under applicable consumer protection law.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms are governed by the laws of the State of West Virginia, without regard to its conflict-of-law rules. Any dispute will be handled in the state or federal courts serving Mason County, West Virginia, unless applicable law requires otherwise. We encourage you to contact us first so we can try to resolve any concern informally.',
  },
  {
    title: 'Changes to These Terms',
    content:
      'We may update these terms from time to time. The "Last updated" date at the top of this page shows when they last changed. Terms in effect at the time of your purchase or commission apply to that order.',
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
              By using this website, submitting an inquiry, or making a
              purchase, you agree to the following terms.
            </p>
            <p className="text-text-muted text-sm mt-4">
              Last updated: {TERMS_LAST_UPDATED}
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

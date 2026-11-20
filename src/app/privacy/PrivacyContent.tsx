'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const PRIVACY_LAST_UPDATED = 'November 20, 2026'

const privacyData = [
  {
    title: 'Who We Are',
    content:
      'This website is operated by Jon\'s Creations, LLC, 1239 Bethel Rd, Point Pleasant, WV 25550. This policy explains what information we collect through the website, how we use it, and the choices you have.',
  },
  {
    title: 'Information You Give Us',
    content:
      'When you use our contact form, call, or email us, we collect the information you choose to provide, such as your name, email address, phone number, mailing address or country, and the details of your inquiry. If you buy or commission a sculpture, we also collect the shipping and billing details needed to complete your order.',
  },
  {
    title: 'Information Collected Automatically',
    content:
      'Like most websites, our hosting provider automatically records basic technical information when you visit, such as your IP address, browser type, and the pages you view, to keep the site running securely. We do not use advertising trackers.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to respond to your inquiries, prepare quotes, create and deliver your sculpture, provide customer service, and keep records required for our business and taxes. We do not sell your personal information, and we do not use it for targeted advertising.',
  },
  {
    title: 'Service Providers We Use',
    content:
      'We share information only with service providers that help us run the business: our contact form provider (Zoho Forms), which receives the information you submit through the form; our website host (Vercel); shipping carriers, which receive the details needed to deliver your order; and payment processors, which handle payment details when you pay. These providers may use your information only to provide their services to us. We may also disclose information if required by law.',
  },
  {
    title: 'Cookies and Embedded Content',
    content:
      'Our site itself does not use advertising or analytics cookies. Some pages include content from other services, such as YouTube videos and a Google Maps map. We use YouTube\'s privacy-enhanced mode, which limits tracking until you play a video. When you view or use embedded content, that service may set cookies and collect information under its own privacy policy, as if you had visited its website directly.',
  },
  {
    title: 'How Long We Keep Information',
    content:
      'We keep inquiry information for as long as needed to respond and follow up, and order records for as long as needed for warranty, tax, and legal purposes. After that, we delete it or keep it only in a form that no longer identifies you.',
  },
  {
    title: 'Data Security',
    content:
      'We take reasonable steps to protect your information. However, no method of transmission or storage over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Your Choices and Rights',
    content:
      'You may ask us to tell you what personal information we hold about you, to correct it, or to delete it, and you may ask us to stop contacting you at any time. Depending on where you live, you may have additional rights under local privacy laws. To make a request, contact us using the details below; we will respond within a reasonable time.',
  },
  {
    title: 'Children\'s Privacy',
    content:
      'This website is intended for adults. We do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, please contact us and we will delete it.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it last changed.',
  },
  {
    title: 'Contact Us',
    content:
      'If you have questions about this policy or your information, call us at 304-593-6412, write to us at 1239 Bethel Rd, Point Pleasant, WV 25550, or use our contact form.',
  },
]

export function PrivacyContent() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy<br />
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Your privacy matters to us. This policy explains how we handle your information.
            </p>
            <p className="text-text-muted text-sm mt-4">
              Last updated: {PRIVACY_LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-6">
          {privacyData.map((item, index) => (
            <GlassCard key={index} hover={false}>
              <h2 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {item.content}
              </p>
            </GlassCard>
          ))}

          <div className="text-center pt-8">
            <p className="text-text-muted text-sm mb-6">
              If you have any questions about this policy, please reach out.
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

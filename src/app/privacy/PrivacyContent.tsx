'use client'

import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'

const privacyData = [
  {
    title: 'Information We Collect',
    content:
      'When you contact us through our website, we collect the information you provide, including your name, email address, phone number (if provided), and the content of your message. We may also collect your country/location if you choose to provide it.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use the information you provide solely to respond to your inquiry, communicate about potential commissions or purchases, and provide customer service. Your information helps us understand your needs and deliver a personalized experience.',
  },
  {
    title: 'Information Sharing',
    content:
      'We do not sell, trade, or otherwise transfer your personal information to third parties. Your information remains confidential and is only used for the purposes stated in this policy.',
  },
  {
    title: 'Data Security',
    content:
      'We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Cookies and Tracking',
    content:
      'Our website may use cookies and similar technologies to enhance your browsing experience. Third-party services embedded on our site (such as contact forms) may have their own privacy policies regarding data collection.',
  },
  {
    title: 'Your Rights',
    content:
      'You may request access to, correction of, or deletion of your personal information at any time by contacting us. We will respond to your request within a reasonable timeframe.',
  },
  {
    title: 'Changes to This Policy',
    content:
      'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
  {
    title: 'Contact Us',
    content:
      'If you have any questions about this privacy policy or our data practices, please contact us through our contact form.',
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

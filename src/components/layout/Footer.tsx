import Link from 'next/link'
import { siteContent } from '@/lib/data'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
}

export function Footer() {
  const { business } = siteContent

  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-semibold text-white">
                {business.name}
              </span>
            </Link>
            <p className="text-text-secondary max-w-md mb-4">
              {business.slogan}. Handcrafted kinetic sculptures that bring
              movement and wonder to any space.
            </p>
            <p className="text-text-muted text-sm">
              {business.address.city}, {business.address.state} •{' '}
              {business.shipping} Shipping
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="text-text-muted">
                  {business.address.street}
                </span>
              </li>
              <li>
                <span className="text-text-muted">
                  {business.address.city}, {business.address.state}{' '}
                  {business.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.8!2d-82.136957!3d38.847049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848e3d7a8c54f6d%3A0x0!2s809+Viand+St%2C+Point+Pleasant%2C+WV+25550!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jon's Creations Location"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

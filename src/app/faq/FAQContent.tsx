'use client'

import { useState } from 'react'
import { GlassButton, AnimatedGradient } from '@/components/ui'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  // Commissioning & Process
  {
    category: 'Commissioning & Process',
    question: 'How do I commission a custom rolling ball sculpture?',
    answer:
      'Start by reaching out through the contact form or by phone. Jon will schedule a conversation to understand your vision, space requirements, and budget. From there, he develops a design concept and provides a detailed quote. Once you approve the design and provide a deposit, fabrication begins with regular progress updates along the way.',
  },
  {
    category: 'Commissioning & Process',
    question: 'How long does it take to create a custom sculpture?',
    answer:
      'Timeline varies based on size and complexity. Smaller desktop pieces might take 2-4 weeks, while larger motorized sculptures can take 2-3 months or more. Jon provides a timeline estimate with every quote and keeps you informed throughout the process.',
  },
  {
    category: 'Commissioning & Process',
    question: 'Can I incorporate my company logo or specific colors?',
    answer:
      'Absolutely. Jon regularly works with clients to incorporate brand elements into sculptures. Powder coating allows for nearly any color match, and design elements like logos or symbols can be worked into the track layout or base design.',
  },
  {
    category: 'Commissioning & Process',
    question: 'Will I see the sculpture before it is finished?',
    answer:
      'Yes. Jon sends photos and videos at multiple stages during fabrication. This lets you see progress and provides opportunities to discuss any adjustments before the piece is complete.',
  },

  // Pricing & Payment
  {
    category: 'Pricing & Payment',
    question: 'How much does a rolling ball sculpture cost?',
    answer:
      'Prices range from $375 for small desktop pieces to $10,000 or more for large motorized floor sculptures. The final cost depends on size, complexity, materials, and any custom features. Every project receives a detailed quote after initial consultation.',
  },
  {
    category: 'Pricing & Payment',
    question: 'What payment methods do you accept?',
    answer:
      'Jon accepts major credit cards, bank transfers, and checks. Custom commissions typically require a 50% deposit to begin work, with the balance due before shipping.',
  },
  {
    category: 'Pricing & Payment',
    question: 'Do you offer payment plans?',
    answer:
      'For larger projects, Jon can sometimes arrange milestone-based payments. Discuss your needs during the initial consultation.',
  },

  // Shipping & Installation
  {
    category: 'Shipping & Installation',
    question: 'Do you ship internationally?',
    answer:
      'Yes. Jon ships worldwide. Sculptures are carefully packaged to ensure safe arrival. Shipping costs vary by destination and sculpture size, and are quoted separately from the sculpture price.',
  },
  {
    category: 'Shipping & Installation',
    question: 'How are sculptures packaged for shipping?',
    answer:
      'Each sculpture is secured with custom padding and packed in sturdy crating appropriate for its size. Fragile components are protected individually to ensure safe arrival.',
  },
  {
    category: 'Shipping & Installation',
    question: 'Do you offer installation services?',
    answer:
      'For larger pieces or complex installations, Jon can travel to your location for on-site installation. This service is available at an additional fee and includes setup, calibration, and training for your team.',
  },

  // Materials & Construction
  {
    category: 'Materials & Construction',
    question: 'What materials are the sculptures made from?',
    answer:
      'Most sculptures are built from stainless steel rod and tubing, chosen for its durability and beautiful appearance. Copper is also available for a warmer aesthetic. Bases and mounting hardware use quality metals selected for each application.',
  },
  {
    category: 'Materials & Construction',
    question: 'What finish options are available?',
    answer:
      'Three main finishes are offered: raw stainless steel (matte silver appearance), polished stainless (mirror-like shine), and powder coating (available in custom colors). The right choice depends on your space and aesthetic preferences.',
  },
  {
    category: 'Materials & Construction',
    question: 'Are the sculptures suitable for outdoor use?',
    answer:
      'Most sculptures are designed for indoor use. Outdoor installations are possible with appropriate materials and protective measures, but require special consideration during the design phase. Discuss outdoor placement during your consultation.',
  },

  // Operation & Maintenance
  {
    category: 'Operation & Maintenance',
    question: 'How do rolling ball sculptures work?',
    answer:
      'Marbles are lifted to the top of the sculpture either manually (by hand or push mechanism) or automatically (via motor). Gravity then carries them down through the track, creating the mesmerizing motion. The track design determines the path, speed, and visual effects.',
  },
  {
    category: 'Operation & Maintenance',
    question: 'Do motorized sculptures run continuously?',
    answer:
      'Motorized sculptures can run continuously during operating hours. They are designed for reliable extended operation, though giving them rest periods can extend component life. Most owners run them during business hours and turn them off overnight.',
  },
  {
    category: 'Operation & Maintenance',
    question: 'What maintenance is required?',
    answer:
      'Maintenance is minimal. Occasional dusting, checking that marbles roll smoothly, and ensuring motor connections remain secure covers most needs. Jon provides detailed care instructions with every sculpture and is available for questions.',
  },
  {
    category: 'Operation & Maintenance',
    question: 'What if something breaks or needs repair?',
    answer:
      'Jon stands behind his work. If something needs attention, reach out and he will help diagnose the issue. Many problems can be resolved with guidance over the phone. For more significant repairs, sculptures can be shipped back to the workshop or Jon can arrange an on-site visit.',
  },
  {
    category: 'Operation & Maintenance',
    question: 'Do you repair sculptures made by other artists?',
    answer:
      'Yes. Jon offers maintenance and repair services for rolling ball sculptures regardless of who made them. If you have a marble machine that needs attention, get in touch to discuss the situation.',
  },

  // General
  {
    category: 'General',
    question: 'What is the difference between a rolling ball sculpture and a marble machine?',
    answer:
      'These terms are often used interchangeably. "Rolling ball sculpture" emphasizes the artistic aspect, while "marble machine" highlights the mechanical nature. Other names include ball run, ball coaster, and the German term "kugelbahn." They all describe sculptures where balls or marbles travel through tracks using gravity.',
  },
  {
    category: 'General',
    question: 'Who was George Rhoads?',
    answer:
      'George Rhoads (1926-2021) was an American artist who pioneered large-scale rolling ball sculptures for public spaces. His work appears in airports, museums, and shopping centers worldwide. Jon\'s work is inspired by Rhoads\' legacy of bringing kinetic art to public audiences.',
  },
  {
    category: 'General',
    question: 'Where can I see a rolling ball sculpture in person?',
    answer:
      'George Rhoads and Creative Machines have installed nearly 250 sculptures worldwide. The George Rhoads Archive maintains a list of public installations. For Jon\'s work, visit the gallery page to see available pieces, or contact him to arrange a visit to his workshop.',
  },
]

const categories = [...new Set(faqs.map((faq) => faq.category))]

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredFaqs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Everything you need to know about commissioning, owning, and caring
              for a rolling ball sculpture.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === null
                ? 'bg-primary text-white'
                : 'glass text-text-secondary hover:text-white'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'glass text-text-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <span
                    className={`text-primary text-2xl transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary mb-8">
              Jon is happy to answer any questions not covered here. Reach out
              anytime—no obligation, just honest conversation about what is
              possible for your space.
            </p>
            <GlassButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  )
}

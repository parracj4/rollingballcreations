import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GlassCard, GlassButton, AnimatedGradient } from '@/components/ui'
import { siteContent } from '@/lib/data'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Jon Parrack',
  description:
    "Learn about Jon Parrack, the artist behind Jon's Creations. Discover the story behind handcrafted rolling ball sculptures and kinetic art.",
}

export default function AboutPage() {
  return <AboutContent />
}

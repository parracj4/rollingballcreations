import dynamic from 'next/dynamic'
import { Hero, FeaturedSculptures } from '@/components/sections'

// Lazy load below-the-fold components to reduce initial bundle
const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview').then(mod => ({ default: mod.AboutPreview })))
const VideoPreview = dynamic(() => import('@/components/sections/VideoPreview').then(mod => ({ default: mod.VideoPreview })))
const ProcessPreview = dynamic(() => import('@/components/sections/ProcessPreview').then(mod => ({ default: mod.ProcessPreview })))
const CTASection = dynamic(() => import('@/components/sections/CTASection').then(mod => ({ default: mod.CTASection })))

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSculptures />
      <AboutPreview />
      <VideoPreview />
      <ProcessPreview />
      <CTASection />
    </>
  )
}

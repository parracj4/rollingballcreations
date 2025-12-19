import {
  Hero,
  FeaturedSculptures,
  AboutPreview,
  ProcessPreview,
  VideoPreview,
  CTASection,
} from '@/components/sections'

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

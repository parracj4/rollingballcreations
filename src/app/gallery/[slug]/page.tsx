import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sculptures, getSculptureBySlug } from '@/lib/data'
import { SculptureDetail } from './SculptureDetail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return sculptures.map((sculpture) => ({
    slug: sculpture.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sculpture = getSculptureBySlug(slug)

  if (!sculpture) {
    return {
      title: 'Sculpture Not Found',
    }
  }

  return {
    title: `${sculpture.material} Rolling Ball Sculpture`,
    description: sculpture.description,
    openGraph: {
      title: `${sculpture.material} Rolling Ball Sculpture | Jon's Creations, LLC`,
      description: sculpture.description,
      images: sculpture.images[0]
        ? [
            {
              url: sculpture.images[0],
              width: 1200,
              height: 630,
              alt: sculpture.name,
            },
          ]
        : [],
    },
  }
}

export default async function SculptureDetailPage({ params }: Props) {
  const { slug } = await params
  const sculpture = getSculptureBySlug(slug)

  if (!sculpture) {
    notFound()
  }

  // Get related sculptures (same category, excluding current)
  const related = sculptures
    .filter((s) => s.category === sculpture.category && s.id !== sculpture.id)
    .slice(0, 3)

  return <SculptureDetail sculpture={sculpture} related={related} />
}

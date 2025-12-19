'use client'

import { useState } from 'react'
import Image from 'next/image'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  isShort?: boolean
  className?: string
}

// YouTube thumbnail quality fallback order
const THUMBNAIL_QUALITIES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default']

export function YouTubeFacade({ videoId, title, isShort = false, className = '' }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [qualityIndex, setQualityIndex] = useState(0)

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${THUMBNAIL_QUALITIES[qualityIndex]}.jpg`

  const handleClick = () => {
    setIsLoaded(true)
  }

  const handleImageError = () => {
    // Try next quality level if available
    if (qualityIndex < THUMBNAIL_QUALITIES.length - 1) {
      setQualityIndex(qualityIndex + 1)
    }
  }

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-full h-full bg-surface cursor-pointer group ${className}`}
      aria-label={`Play ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes={isShort ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, 800px"}
        className="object-cover"
        loading="lazy"
        onError={handleImageError}
        unoptimized
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}

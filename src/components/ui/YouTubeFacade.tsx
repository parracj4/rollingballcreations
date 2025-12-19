'use client'

import { useState } from 'react'

interface YouTubeFacadeProps {
  videoId: string
  title: string
  isShort?: boolean
  className?: string
}

export function YouTubeFacade({ videoId, title, isShort = false, className = '' }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // For Shorts, we'll embed directly since thumbnails often don't work well
  // For regular videos, use hqdefault which is most reliable
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  const handleClick = () => {
    setIsLoaded(true)
  }

  // For Shorts, just embed directly - thumbnails are unreliable
  if (isShort) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    )
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
      {/* Thumbnail - using native img for reliable loading */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
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

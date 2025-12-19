/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
    ],
  },
  // Target modern browsers only to reduce polyfills
  experimental: {
    optimizePackageImports: ['clsx', 'tailwind-merge'],
  },
}

module.exports = nextConfig

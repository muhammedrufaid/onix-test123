/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Fallback for SWC issues on Windows
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Keep local images unoptimized for PNG compatibility
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
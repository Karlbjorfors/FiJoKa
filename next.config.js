/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  // Ensure proper handling of CSS and images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Better compatibility for Vercel deployment
  output: 'standalone',
}
 
module.exports = nextConfig
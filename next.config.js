/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: '/Users/stevenjudge/Desktop/AI/website-next'
  },
  images: {
    domains: ['gamelayer.io'],
  },
}

module.exports = nextConfig

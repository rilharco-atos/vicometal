/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vicometal',
  assetPrefix: '/vicometal/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

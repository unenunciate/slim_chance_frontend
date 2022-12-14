/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pbs.twimg.com', 'cdn.devdojo.com'],
  },
}

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/demo/restaurant',
        destination: '/html/restaurant/restaurant.html',
      }
    ]
  }
}

module.exports = nextConfig

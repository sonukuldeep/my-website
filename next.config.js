/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/demo/restaurant',
        destination: '/html/restaurant/restaurant.html',
      },
      {
        source: '/demo/music',
        destination: '/html/music/music.html',
      }
    ]
  }
}

module.exports = nextConfig

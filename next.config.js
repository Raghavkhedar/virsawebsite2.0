/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagizer.imageshack.com',  // Updated to match the ImageShack domain
      },
    ],
  },
}

module.exports = nextConfig 
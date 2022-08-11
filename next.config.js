/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.discordapp.com"]
    loader: 'akamai',

  },
}

module.exports = nextConfig

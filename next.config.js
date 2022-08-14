/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.discordapp.com"],
    loader: 'akamai',
    path: '',

  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.pngitem.com","cdn.discordapp.com"],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

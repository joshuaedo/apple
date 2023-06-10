/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["apple.com", "www.apple.com"],
  },
};

module.exports = nextConfig;

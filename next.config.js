/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'tulumfromskyrealtors.com' },
    ],
  },
};

module.exports = nextConfig;
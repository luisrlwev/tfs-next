const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'tulumfromskyrealtors.com' },
    ],
  },
  i18n, // Añadir la configuración i18n aquí
};

module.exports = nextConfig;

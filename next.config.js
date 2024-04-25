const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n, // Añadir la configuración i18n aquí
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'blog.tulumfromskyrealtors.com' },
    ],
  },
  i18n: {
    locales: ['en', 'es'], // Lista de locales que estás soportando
    defaultLocale: 'es', // El idioma por defecto
    // Puedes añadir configuración de dominio aquí si es necesario
  },
};

module.exports = nextConfig;

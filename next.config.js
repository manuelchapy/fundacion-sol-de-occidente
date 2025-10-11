/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.google.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimizaciones para producción
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Configuración para Vercel
  output: 'standalone',
  // Optimización de bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname),
      }
    }
    return config
  },
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

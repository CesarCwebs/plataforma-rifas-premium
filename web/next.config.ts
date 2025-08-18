import type { NextConfig } from 'next'

const config: NextConfig = {
  // Permisos para las imágenes que ya teníamos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.globalbajaj.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  // ESTA ES LA NUEVA SECCIÓN MÁGICA
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://8001-cesarcwebs-plataformari-kn81hd4ihgo.ws-us121.gitpod.io/api/:path*',
      },
    ]
  },
}

export default config
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      // AÑADE ESTE NUEVO BLOQUE
      {
        protocol: 'https',
        hostname: 'cdn.globalbajaj.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default config;
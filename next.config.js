/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        serverActions:true,
    },
 images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig

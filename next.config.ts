import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    // Configuration to resolve quality [75, 85] warning and standardizing sizes
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Serve modern formats: AVIF first (30-50% smaller), then WebP fallback
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images on Vercel CDN for 24 hours
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;

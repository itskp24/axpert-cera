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
    // Serve modern formats: AVIF first (30-50% smaller), then WebP fallback
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images on Vercel CDN for 24 hours
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;

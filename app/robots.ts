import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Give Googlebot full unrestricted access to all indexable pages
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/products',
          '/about',
          '/become-a-dealer',
          '/catalog',
          '/categories/',
          '/designer/',
          '/cookie-policy',
          '/privacy-policy',
          '/terms-of-service',
        ],
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        // Allow all other crawlers full access too
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://www.axpertcera.com/sitemap.xml',
  };
}

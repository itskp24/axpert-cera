import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.axpertcera.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      // Fixed date - do NOT use new Date() here, it changes every build
      // and confuses Google. Update this manually only when content changes.
      lastModified: new Date('2026-04-04'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/catalog.pdf`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

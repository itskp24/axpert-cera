import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.axpertcera.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Category sections (anchor-based) - listed as important content signals
    {
      url: `${BASE_URL}/#collections`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Catalog download
    {
      url: `${BASE_URL}/catalog.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

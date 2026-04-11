import { MetadataRoute } from 'next';
import { CATEGORIES, DESIGNER_COLLECTIONS } from './utils/constants';

const BASE_URL = 'https://www.axpertcera.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date('2026-04-11');

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const designerUrls: MetadataRoute.Sitemap = DESIGNER_COLLECTIONS.map((cat) => ({
    url: `${BASE_URL}/designer/${cat.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/catalog`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...categoryUrls,
    ...designerUrls,
    {
      url: `${BASE_URL}/catalog.pdf`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

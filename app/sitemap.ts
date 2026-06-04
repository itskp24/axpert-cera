import { MetadataRoute } from 'next';
import { CATEGORIES, DESIGNER_COLLECTIONS } from './utils/constants';

const BASE_URL = 'https://www.axpertcera.com';

// Use a stable date — update this manually when content changes significantly
// This prevents Google from seeing the sitemap as "always changed today"
const SITE_LAST_UPDATED = new Date('2026-06-04T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const designerUrls: MetadataRoute.Sitemap = DESIGNER_COLLECTIONS.map((cat) => ({
    url: `${BASE_URL}/designer/${cat.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/catalog`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.70,
    },
    {
      url: `${BASE_URL}/become-a-dealer`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    ...categoryUrls,
    ...designerUrls,
  ];
}

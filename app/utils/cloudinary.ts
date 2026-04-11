import { v2 as cloudinary } from 'cloudinary';

// Cache configuration locally to avoid frequent re-init during dev
let configured = false;

export async function fetchCloudinaryImages(): Promise<Record<string, string[]>> {
  try {
    if (!configured && process.env.CLOUDINARY_URL) {
      cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL });
      configured = true;
    }

    const response = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'images/',
      max_results: 500,
    });

    const result: Record<string, string[]> = {};
    response.resources.forEach((resource: { public_id: string; secure_url: string }) => {
      const parts = resource.public_id.split('/');
      if (parts.length >= 3) {
        const categoryName = parts[parts.length - 2];
        if (!result[categoryName]) {
          result[categoryName] = [];
        }
        result[categoryName].push(resource.secure_url);
      }
    });
    
    return result;
  } catch (err) {
    console.error('[Cloudinary Utils] Fetch failed:', err);
    return {};
  }
}

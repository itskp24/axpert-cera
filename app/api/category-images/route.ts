import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Cache this API route response on Vercel for 24 hours (ISR)
export const revalidate = 86400;

// Cloudinary URL should be in .env
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL
});

export async function GET() {
  try {
    const result: Record<string, string[]> = {};

    // Fetch up to 500 resources from the 'images/' prefix
    // Using Admin API to list resources
    const response = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'images/',
      max_results: 500,
    });

    response.resources.forEach((resource: any) => {
      // The public_id looks like: "images/blackandwhite/onepiecetoilet/filename"
      // or "images/designercollection/poloset/filename"
      const parts = resource.public_id.split('/');
      
      // We expect at least: ["images", "category_group", "category_name", "filename"]
      // Actually, based on the script, the structure is:
      // images/blackandwhite/onepiecetoilet/filename -> parts = ["images", "blackandwhite", "onepiecetoilet", "filename"]
      // images/designercollection/poloset/filename -> parts = ["images", "designercollection", "poloset", "filename"]

      if (parts.length >= 3) {
        // We want to group by the LAST folder name (the category name)
        // e.g., "onepiecetoilet" or "poloset"
        const categoryName = parts[parts.length - 2];
        
        if (!result[categoryName]) {
          result[categoryName] = [];
        }
        result[categoryName].push(resource.secure_url);
      }
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Cloudinary Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}

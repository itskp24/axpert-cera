import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

const configUrl = process.env.CLOUDINARY_URL;
if (configUrl) {
  const [auth, cloudName] = configUrl.replace('cloudinary://', '').split('@');
  const [apiKey, apiSecret] = auth.split(':');
  
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true
  });
}

const images = [
  { name: 'serenity_bathtub_1', path: 'C:/Users/PARTH/.gemini/antigravity/brain/02a19c92-ae86-40c6-97b1-ef5d59a8acaf/serenity_bathtub_1774809702172.png' },
  { name: 'serenity_bathtub_2', path: 'C:/Users/PARTH/.gemini/antigravity/brain/02a19c92-ae86-40c6-97b1-ef5d59a8acaf/serenity_bathtub_2_1774809816685.png' },
  { name: 'serenity_bathtub_3', path: 'C:/Users/PARTH/.gemini/antigravity/brain/02a19c92-ae86-40c6-97b1-ef5d59a8acaf/serenity_bathtub_3_1774809837616.png' }
];

async function uploadImages() {
  for (const img of images) {
    try {
      const result = await cloudinary.uploader.upload(img.path, {
        folder: 'images/spotlight',
        public_id: img.name,
        overwrite: true
      });
      console.log(`Uploaded ${img.name}: ${result.secure_url}`);
    } catch (err) {
      console.error(`Error uploading ${img.name}:`, err.message);
    }
  }
}

uploadImages();

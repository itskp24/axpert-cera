import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Axpert Cera | Premium Sanitaryware Manufacturer',
    short_name: 'Axpert Cera',
    description:
      'Premium ISO-certified ceramic sanitaryware manufacturer in Gujarat, India. One Piece Toilets, Wash Basins, Wall Hung Toilets & Designer Collections.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1A2744',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import SignaturePieces from './components/SignaturePieces';
import Spotlight from './components/Spotlight';
import Heritage from './components/Heritage';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { HOME_KEYWORDS } from './utils/seoKeywords';

// ── ISR: regenerate this page at most once every 24 hours ──────────────────
export const revalidate = 86400;

const BASE_URL = 'https://www.axpertcera.com';

export const metadata: Metadata = {
  title: 'Axpert Cera | Premium Ceramic Sanitaryware Manufacturer in India',
  description:
    'Experience premium quality with Axpert Cera, a world-class ISO-certified sanitaryware manufacturer. Discover our exquisite range of One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, Table Top Basins, and exclusive Designer Collections. Proudly supplying dealers and buyers in Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar, and across all of India.',
  keywords: HOME_KEYWORDS,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Axpert Cera | Premium Sanitaryware Manufacturer',
    description:
      'Explore 125+ exquisite, premium ceramic luxury sanitaryware products - One Piece Toilets, Wash Basins, Wall Hung Toilets, Water Closets, and exclusive Designer Collections. World-class ISO-certified manufacturer supplying Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, and all of India.',
    url: BASE_URL,
    images: [
      {
        url: '/hero_bathroom.png',
        width: 1200,
        height: 630,
        alt: 'Axpert Cera Premium Sanitaryware - One Piece Toilet, Wash Basin, Designer Collection Manufacturer',
      },
    ],
  },
  twitter: {
    title: 'Axpert Cera | Premium Sanitaryware Manufacturer',
    description:
      'Discover masterfully crafted One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets & luxurious Designer Collections by Axpert Cera. A world-class ISO-certified manufacturer serving Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, and all of India.',
    images: ['/hero_bathroom.png'],
  },
};

import { fetchCloudinaryImages } from './utils/cloudinary';
import SeoContentBlock from './components/SeoContentBlock';

export default async function Home() {
  // Fetched once at build time, then cached and revalidated every 24h
  const imageData = await fetchCloudinaryImages();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${BASE_URL}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About Us',
        item: `${BASE_URL}/about`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Download Catalog',
        item: `${BASE_URL}/catalog`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Axpert Cera located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Axpert Cera is based in Gujarat, India — at Gugliyana, Near Gugliyana Bus Stop, Than Chotila Road, Than, SurendraNagar, Gujarat 363530. We serve customers across Morbi, Rajkot, Chotila, Ahmedabad, Surat, Vadodara, and across all of India.',
        },
      },
      {
        '@type': 'Question',
        name: 'What ceramic sanitaryware products does Axpert Cera manufacture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Axpert Cera manufactures a wide range of sanitaryware including One Piece Toilets, Pedestal Wash Basins, One Piece Basins, Wall Hung Toilets, Water Closets (EWC), Table Top Basins, Wall Mount Wash Basins, Pan & Urinals, and exclusive Designer Collections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Axpert Cera ISO certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Axpert Cera is an ISO 9001:2015 certified sanitaryware manufacturer, ensuring every product meets international quality management standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I get the Axpert Cera product catalog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can download the Axpert Cera product catalog directly from our website at axpertcera.com/catalog.pdf, or contact us on WhatsApp at +91 94293 39212 to receive it instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you supply sanitaryware to dealers across all Indian states?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Axpert Cera supplies sanitaryware to dealers, distributors, and builders across all 28 Indian states and Union Territories, including Gujarat, Maharashtra, Rajasthan, Uttar Pradesh, Delhi, Karnataka, Tamil Nadu, Telangana, Kerala, West Bengal, Bihar, Odisha, Madhya Pradesh, Chhattisgarh, Punjab, Haryana, Himachal Pradesh, Uttarakhand, Jharkhand, Andhra Pradesh, Goa, and all Northeast states including Assam, Meghalaya, Manipur, Mizoram, Nagaland, Tripura, Sikkim, and Arunachal Pradesh.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity (MOQ) for bulk sanitaryware orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Axpert Cera offers flexible MOQ for bulk sanitaryware orders. Whether you are a dealer placing a starter stock order or a builder requiring project quantities, please contact our sales team on WhatsApp at +91 94293 39212 or email info@axpertcera.com for a custom quotation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I become an Axpert Cera authorized dealer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To become an authorized Axpert Cera dealer, contact our sales team via WhatsApp at +91 94293 39212 or email info@axpertcera.com. We offer attractive dealer margins, marketing support, and a comprehensive product range for showrooms across India.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Axpert Cera offer export sanitaryware supply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Axpert Cera offers export-quality sanitaryware packaging and international shipping support. As an ISO-certified Gujarat manufacturer, we supply premium ceramic sanitaryware to buyers outside India as well. Contact us for export pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which cities in Gujarat does Axpert Cera supply sanitaryware?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Axpert Cera supplies sanitaryware across all major Gujarat cities including Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Gandhinagar, Junagadh, Anand, Navsari, Morbi, Mehsana, Bharuch, Bhuj, Gandhidham, Porbandar, Valsad, Vapi, Deesa, Patan, Godhra, Gondal, Surendranagar, and many more towns and districts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the certifications and quality standards of Axpert Cera products?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Axpert Cera holds ISO 9001:2015 certification. Our sanitaryware products are manufactured using high-grade vitreous china with low water absorption, brilliant glaze finish, and rigorous quality testing at every stage of production to meet both Indian and international standards.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Categories imageData={imageData} />
        <SignaturePieces imageData={imageData} />
        <Spotlight />
        <Heritage />
        <Features />
        <Newsletter />
        <SeoContentBlock pageType="home" />
        <Footer />
      </main>
    </>
  );
}

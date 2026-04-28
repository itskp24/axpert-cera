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

// ── ISR: regenerate this page at most once every 24 hours ──────────────────
export const revalidate = 86400;

const BASE_URL = 'https://www.axpertcera.com';

export const metadata: Metadata = {
  title: 'Axpert Cera | Premium Ceramic Sanitaryware Manufacturer in India',
  description:
    'Experience premium quality with Axpert Cera, a world-class ISO-certified sanitaryware manufacturer. Discover our exquisite range of One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, Table Top Basins, and exclusive Designer Collections. Proudly supplying dealers and buyers in Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar, and across all of India.',
  keywords: [
    // --- Original Keywords ---
    'Axpert Cera',
    'Axpert Ceramic',
    'Axpert Cera Morbi',
    'one piece toilet',
    'pedestal wash basin',
    'wall hung toilet',
    'water closet',
    'table top basin',
    'wall mount wash basin',
    'pan and urinal',
    'designer ceramic collection',
    'wash basin',
    'EWC toilet Gujarat',
    'sanitaryware manufacturer Morbi',
    'ceramic products Morbi Gujarat',
    'one piece toilet Morbi',
    'pedestal wash basin Morbi',
    'water closet Morbi',
    'wall hung toilet Gujarat',
    'wash basin Morbi',
    'sanitaryware Rajkot',
    'wash basin Rajkot',
    'bathroom fittings Rajkot',
    'sanitaryware Ahmedabad',
    'ceramic products Ahmedabad',
    'wash basin Ahmedabad',
    'toilet manufacturer Ahmedabad',
    'sanitaryware Gandhinagar',
    'ceramic products Gandhinagar',
    'sanitaryware Surat',
    'bathroom fittings Surat',
    'sanitaryware Vadodara',
    'ceramic products Vadodara',
    'bathroom fittings Chotila',
    'sanitaryware SurendraNagar',
    'sanitaryware manufacturer Gujarat',
    'ISO certified sanitaryware India',
    'ceramic sanitaryware supplier India',
    'bathroom products all India',

    // --- Gujarat Targeted Expansion ---
    'sanitaryware manufacturer in Ahmedabad',
    'wholesale wash basin supplier Surat',
    'premium ceramic products Vadodara',
    'one piece toilet dealer Rajkot',
    'designer sanitaryware Jamnagar',
    'wall hung toilet price Bhavnagar',
    'ceramic sanitaryware distributor Gandhinagar',
    'wash basin manufacturer Morbi',
    'EWC toilet supplier Junagadh',
    'sanitaryware wholesale market Gujarat',

    // --- Maharashtra Targeted Expansion ---
    'sanitaryware manufacturer in Mumbai',
    'wholesale wash basin supplier Pune',
    'premium ceramic products Nagpur',
    'one piece toilet dealer Thane',
    'designer sanitaryware Nashik',
    'wall hung toilet price Aurangabad',
    'ceramic sanitaryware distributor Navi Mumbai',
    'sanitaryware wholesale market Mumbai',
    'bathroom fittings supplier Kolhapur',
    'designer wash basin Solapur',

    // --- Rajasthan Targeted Expansion ---
    'sanitaryware manufacturer in Jaipur',
    'wholesale wash basin supplier Jodhpur',
    'premium ceramic products Kota',
    'one piece toilet dealer Udaipur',
    'designer sanitaryware Bikaner',
    'wall hung toilet price Ajmer',
    'ceramic sanitaryware distributor Bhilwara',
    'bathroom fittings supplier Alwar',
    'sanitaryware wholesale market Rajasthan',

    // --- North India (Delhi NCR, UP, Punjab) Expansion ---
    'sanitaryware manufacturer in Delhi',
    'wholesale wash basin supplier New Delhi',
    'premium ceramic products Noida',
    'one piece toilet dealer Gurgaon',
    'designer sanitaryware Faridabad',
    'wall hung toilet price Ghaziabad',
    'ceramic sanitaryware distributor Lucknow',
    'bathroom fittings supplier Kanpur',
    'designer wash basin Agra',
    'wholesale sanitaryware Varanasi',
    'one piece toilet supplier Chandigarh',
    'premium bathroom fittings Ludhiana',

    // --- South India Targeted Expansion ---
    'sanitaryware manufacturer in Bangalore',
    'wholesale wash basin supplier Hyderabad',
    'premium ceramic products Chennai',
    'one piece toilet dealer Coimbatore',
    'designer sanitaryware Kochi',
    'wall hung toilet price Thiruvananthapuram',
    'ceramic sanitaryware distributor Madurai',
    'bathroom fittings supplier Mysore',
    'wholesale sanitaryware Mangalore',

    // --- Madhya Pradesh Targeted Expansion ---
    'sanitaryware manufacturer in Indore',
    'wholesale wash basin supplier Bhopal',
    'premium ceramic products Jabalpur',
    'one piece toilet dealer Gwalior',
    'designer sanitaryware Ujjain',
    
    // --- East India Targeted Expansion ---
    'sanitaryware manufacturer in Kolkata',
    'wholesale wash basin supplier Patna',
    'premium ceramic products Bhubaneswar',
    'one piece toilet dealer Guwahati',
    'designer sanitaryware Ranchi',

    // --- General High-Intent Buyer Keywords ---
    'best sanitaryware brands in India',
    'top ceramic basin manufacturers',
    'affordable luxury bathroom fittings India',
    'B2B sanitaryware suppliers India',
    'bulk order one piece toilets',
    'hotel project sanitaryware suppliers',
    'architectural ceramic sanitaryware',
    'ISO certified wash basin export quality'
  ],
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
          text: 'Axpert Cera is based in Gujarat, India - at Gugliyana, Near Gugliyana Bus Stop, Than Chotila Road, Than, SurendraNagar, Gujarat 363530. We serve customers in Morbi, Rajkot, Chotila, and across India.',
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
          text: 'Yes. Axpert Cera is an ISO-certified sanitaryware manufacturer, ensuring every product meets international quality standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I get the Axpert Cera product catalog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can download the Axpert Cera product catalog directly from our website at axpertcera.com/catalog.pdf, or contact us on WhatsApp at +91 94293 39212.',
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

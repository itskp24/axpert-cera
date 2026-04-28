import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getDesignerCollectionBySlug, DESIGNER_COLLECTIONS, TARGET_CITIES } from '../../utils/constants';
import { fetchCloudinaryImages } from '../../utils/cloudinary';
import ProductGrid from '../../components/ProductGrid';
import SeoContentBlock from '../../components/SeoContentBlock';

export const revalidate = 86400;

export async function generateStaticParams() {
  return DESIGNER_COLLECTIONS.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const category = getDesignerCollectionBySlug(p.slug);

  if (!category) return { title: 'Not Found' };

  // Distribute city targets across different collections for broader SEO
  const cityIndex = p.slug.length % TARGET_CITIES.length;
  const targetCity = TARGET_CITIES[cityIndex];

  const optimizedTitle = `Luxury ${category.name} in ${targetCity}`;
  const optimizedDesc = `${category.description} Part of Axpert Cera's signature Vitrosa series, providing exclusive ceramic art for high-end projects in ${targetCity} and across India.`;

  return {
    title: optimizedTitle,
    description: optimizedDesc,
    keywords: [
      category.name,
      `luxury ${category.name}`,
      `designer ${category.name}`,
      `${category.name} price in ${targetCity}`,
      `${category.name} showroom in ${targetCity}`,
      `exclusive ${category.name} India`,
      `${category.name} in Ahmedabad`,
      `${category.name} in Surat`,
      `${category.name} in Mumbai`,
      `${category.name} in Pune`,
      `${category.name} in Delhi`,
      `${category.name} in Bangalore`,
      `hotel project sanitaryware`,
      `Vitrosa collection ceramic`
    ],
    openGraph: {
      title: optimizedTitle,
      description: optimizedDesc,
      images: ['/hero_bathroom.png'],
    },
    alternates: {
      canonical: `https://www.axpertcera.com/designer/${category.slug}`,
    }
  };
}

const BASE_URL = 'https://www.axpertcera.com';

export default async function DesignerPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const category = getDesignerCollectionBySlug(p.slug);

  if (!category) {
    notFound();
  }

  // Same logic for targetCity inside the component to pass to SeoContentBlock
  const cityIndex = p.slug.length % TARGET_CITIES.length;
  const targetCity = TARGET_CITIES[cityIndex];

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
        name: category.name,
        item: `${BASE_URL}/designer/${category.slug}`,
      },
    ],
  };

  const allImages = await fetchCloudinaryImages();
  const images = allImages[category.cloudinaryFolder] || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-[#C4A484] hover:text-black transition-colors mb-12">
            <ChevronLeft size={16} />
            Back to Products Hub
          </Link>

          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">Exquisite Craftsmanship</div>
            <h1 className="font-serif text-[clamp(40px,5vw,56px)] font-normal text-[#1A1A1A] leading-[1.1] mb-6">
              {category.name}
            </h1>
            <p className="max-w-2xl text-[16px] text-[#555] leading-[1.6]">
              {category.description} This signature collection features {images.length > 0 ? images.length : 'various'} meticulously crafted, luxury sanitaryware options designed to elevate modern interiors.
            </p>
          </div>

          {images.length === 0 ? (
            <div className="py-20 text-center text-[#888] font-medium">
              Designer collection preparing...
            </div>
          ) : (
            <ProductGrid 
              images={images} 
              categoryName={category.name} 
              seoAlt={category.seoAlt} 
              columns="4"
              variant="designer"
            />
          )}

          <div className="mt-24 text-center">
            <Link href="/catalog.pdf" download className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C4A484] transition-colors rounded-sm">
              Download Full Catalog
            </Link>
          </div>
        </div>
      </main>
      <SeoContentBlock pageType="designer" dynamicName={category.name} dynamicCity={targetCity} />
      <Footer />
    </>
  );
}

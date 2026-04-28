import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getCategoryBySlug, CATEGORIES, TARGET_CITIES } from '../../utils/constants';
import { fetchCloudinaryImages } from '../../utils/cloudinary';
import ProductGrid from '../../components/ProductGrid';
import SeoContentBlock from '../../components/SeoContentBlock';

export const revalidate = 86400;

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const category = getCategoryBySlug(p.slug);
  
  if (!category) return { title: 'Not Found' };
  
  // Distribute city targets across different categories for broader SEO
  // Use the slug length or first character to pick a consistent but varied city
  const cityIndex = p.slug.length % TARGET_CITIES.length;
  const targetCity = TARGET_CITIES[cityIndex];
  
  const optimizedTitle = `Premium ${category.name} in ${targetCity}`;
  const optimizedDesc = `${category.description} Axpert Cera is a top-tier ceramic supplier serving ${targetCity}, Gujarat, and all major Indian metropolitan areas.`;
  
  return {
    title: optimizedTitle,
    description: optimizedDesc,
    keywords: [
      category.name,
      `premium ${category.name}`,
      `${category.name} manufacturer India`,
      `wholesale ${category.name} supplier`,
      `${category.name} in ${targetCity}`,
      `${category.name} dealer in ${targetCity}`,
      `${category.name} price in ${targetCity}`,
      `${category.name} in Ahmedabad`,
      `${category.name} in Surat`,
      `${category.name} in Mumbai`,
      `${category.name} in Pune`,
      `${category.name} in Delhi`,
      `${category.name} in Bangalore`,
      `bulk ${category.name} orders`,
      `ceramic ${category.name}`
    ],
    openGraph: {
      title: optimizedTitle,
      description: optimizedDesc,
      images: ['/hero_bathroom.png'],
    },
    alternates: {
      canonical: `https://www.axpertcera.com/categories/${category.slug}`,
    }
  };
}

const BASE_URL = 'https://www.axpertcera.com';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const category = getCategoryBySlug(p.slug);
  
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
        item: `${BASE_URL}/categories/${category.slug}`,
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
      <main className="min-h-screen bg-[#F8F8F6] pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-[#C4A484] hover:text-black transition-colors mb-12">
            <ChevronLeft size={16} />
            Back to Products
          </Link>

          <div className="mb-16">
            <h1 className="font-serif text-[clamp(40px,5vw,56px)] font-normal text-[#1A1A1A] leading-[1.1] mb-6">
              {category.name}
            </h1>
            <p className="max-w-2xl text-[16px] text-[#555] leading-[1.6]">
              {category.description} Explore our complete catalog below, featuring {images.length > 0 ? images.length : 'multiple'} stunning designer products.
            </p>
          </div>

          {images.length === 0 ? (
            <div className="py-20 text-center text-[#888] font-medium">
              Images arriving shortly...
            </div>
          ) : (
            <ProductGrid 
              images={images} 
              categoryName={category.name} 
              seoAlt={category.seoAlt} 
            />
          )}

          <div className="mt-24 text-center">
             <Link href="/catalog.pdf" download className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C4A484] transition-colors rounded-sm">
               Download Full Catalog
             </Link>
          </div>
        </div>
      </main>
      <SeoContentBlock pageType="category" dynamicName={category.name} dynamicCity={targetCity} />
      <Footer />
    </>
  );
}

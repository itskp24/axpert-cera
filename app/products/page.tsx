import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import SignaturePieces from '../components/SignaturePieces';
import { fetchCloudinaryImages } from '../utils/cloudinary';
import SeoContentBlock from '../components/SeoContentBlock';
import { PRODUCTS_PAGE_KEYWORDS } from '../utils/seoKeywords';

export const metadata: Metadata = {
  title: 'Luxury Sanitaryware | Toilets & Basins',
  description: 'Explore Axpert Cera\'s complete collection of premium ceramic products. We supply high-performance One Piece Toilets and Wash Basins to dealers in Surat, Rajkot, Vadodara, and Ahmedabad. Discover quality bathroom solutions for your home.',
  keywords: PRODUCTS_PAGE_KEYWORDS,
  alternates: {
    canonical: 'https://www.axpertcera.com/products',
  },
};

export const revalidate = 86400;

const BASE_URL = 'https://www.axpertcera.com';

export default async function ProductsHubPage() {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="min-h-screen pt-20 bg-[#F9F9FC]">
        {/* Modern Split-Screen Hero */}
        <section className="relative bg-[#FAFAF9] overflow-hidden border-b border-[#EBEBEB]">
          <div className="flex flex-col lg:flex-row min-h-[75vh] items-stretch">
             {/* Text Content */}
             <div className="w-full lg:w-1/2 flex items-center justify-center px-5 py-24 md:px-16 lg:px-24 xl:px-32 relative z-10">
               <div className="max-w-xl w-full">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="h-[1px] w-12 bg-[#C4A484]"></div>
                   <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] font-sans">Curated Showcase</span>
                 </div>
                 
                 <h1 className="font-serif text-[clamp(48px,6vw,96px)] font-normal text-[#1A1A1A] leading-[1.0] mb-8">
                   The Master <br/> <span className="text-[#C4A484]">Collection.</span>
                 </h1>
                 
                 <p className="text-[#555] text-[16px] xl:text-[18px] leading-relaxed font-sans max-w-md mb-12">
                   A sanctuary of form and function. Explore our entire range of 125+ ceramic masterpieces crafted with uncompromising precision and timeless vision.
                 </p>

                 <div className="flex flex-wrap items-center gap-6">
                    <a href="#collections" className="bg-[#1A1A1A] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C4A484] transition-colors font-sans focus:outline-none">
                      Explore Series
                    </a>
                    <Link href="/catalog" className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:border-[#C4A484] hover:text-[#C4A484] transition-all font-sans">
                      Request Catalog
                    </Link>
                 </div>
               </div>
             </div>

             {/* Image Content */}
             <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
               <div className="absolute inset-0 bg-[#1A1A1A]/5 z-10"></div>
               <Image 
                 src="/hero_bathroom.png" 
                 alt="Luxury Bathroom Setup" 
                 fill
                 quality={90}
                 priority
                 className="object-cover object-center"
               />
             </div>
          </div>
        </section>

        {/* Categories Section (Classic) */}
        <div className="bg-[#F9F9FC]">
           <div className="max-w-[1440px] mx-auto pt-24 px-5 md:px-10">
              <div className="flex justify-between items-end mb-12">
                 <h2 className="font-serif text-[clamp(32px,5vw,56px)] text-[#1A1A1A] leading-none">
                   Classic <span className="text-[#C4A484]">Series</span>
                 </h2>
                 <Link href="/catalog" className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-all font-sans">
                    Full Catalog
                 </Link>
              </div>
           </div>
           <Categories imageData={imageData} variant="premium" hideHeader={true} />
        </div>

        {/* Designer Section */}
        <div className="pt-20 pb-20 bg-white">
           <div className="max-w-[1440px] mx-auto px-5 md:px-10">
              <div className="flex justify-between items-end">
                 <h2 className="font-serif text-[clamp(32px,5vw,56px)] text-[#1A1A1A] leading-none">
                   Designer <span className="text-[#C4A484]">Pieces</span>
                 </h2>
              </div>
           </div>
           <SignaturePieces imageData={imageData} variant="premium" hideHeader={true} />
        </div>

        {/* Contact/Catalog Footer Call to Action */}
        <section className="relative py-32 text-white overflow-hidden">
           <div className="absolute inset-0 bg-[#0A0A0A]"></div>
           <Image 
             src="/hero_bathroom.png" 
             alt="Axpert Cera Architecture" 
             fill 
             className="object-cover opacity-20 grayscale brightness-50"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"></div>
           
           <div className="max-w-[1440px] mx-auto px-5 md:px-10 relative z-10 flex flex-col items-center justify-center text-center">
              <div className="w-[1px] h-16 bg-[#C4A484] mb-8"></div>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] mb-10 leading-[1.15] max-w-3xl">
                 Elevate your architecture <br/> 
                 with <span className="text-[#C4A484] italic">exclusive ceramic</span> craftsmanship.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a href="https://wa.me/919429339212" className="bg-[#C4A484] text-[#1A1A1A] px-10 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 font-sans shadow-lg">
                    Request Pricing
                 </a>
                 <Link href="/catalog" className="bg-transparent border border-white/30 text-white px-10 py-4 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-500 font-sans backdrop-blur-sm">
                    Download Catalog
                 </Link>
              </div>
           </div>
        </section>
        <SeoContentBlock pageType="products" />
      </main>

      <Footer />
    </>
  );
}

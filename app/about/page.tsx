import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heritage from '../components/Heritage';
import Features from '../components/Features';
import SeoContentBlock from '../components/SeoContentBlock';
import { ABOUT_PAGE_KEYWORDS } from '../utils/seoKeywords';

export const metadata: Metadata = {
  title: 'About Us | Premium Sanitaryware Manufacturer',
  description: 'Experience the quality of Axpert Cera, a premier sanitaryware manufacturer serving Ahmedabad, Mumbai, Delhi, and Bangalore. Established in 2019, we specialize in ISO-certified vitreous china production for residential and commercial projects across India.',
  keywords: ABOUT_PAGE_KEYWORDS,
  alternates: {
    canonical: 'https://www.axpertcera.com/about',
  },
};

const BASE_URL = 'https://www.axpertcera.com';

export default function AboutPage() {
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
        name: 'About Us',
        item: `${BASE_URL}/about`,
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
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="bg-[#F8F8F6] py-20 border-b border-[#EBEBEB]">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C4A484] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">Established 2019</div>
            <h1 className="font-serif text-[clamp(45px,6vw,80px)] font-normal text-[#1A1A1A] leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Engineering <span className="italic text-[#C4A484]">Artistry.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-[#555] text-[16px] leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Discover the legacy of Axpert Cera, where every ceramic piece is a testament to precision,
              international quality standards, and timeless designer aesthetics.
            </p>
          </div>
        </section>

        {/* Reusing the Heritage component for the core story */}
        <Heritage />

        {/* Expanded Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-[32px] text-[#1A1A1A] mb-8 leading-tight">
                  Our Commitment to <br />
                  <span className="text-[#C4A484] italic">Uncompromising Quality.</span>
                </h2>
                <div className="space-y-6 text-[#555] text-[15px] leading-loose">
                  <p>
                    Quality is the cornerstone of Axpert Cera. As an ISO-certified manufacturer, our production process
                    involves rigorous testing at every stage—from raw material selection to final glazing.
                    Our high-grade ceramic ensures low water absorption, exceptional strength, and a brilliant,
                    easy-to-clean finish that lasts for generations.
                  </p>
                  <p>
                    We believe that a bathroom is more than a functional space; it's a sanctuary.
                    That's why our R&D team continuously explores global design trends to bring
                    sophisticated, ergonomic, and water-efficient sanitaryware to your doorstep.
                  </p>
                </div>
              </div>
              <div className="bg-[#F8F8F6] p-12 rounded-sm border border-[#EBEBEB]">
                <h3 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-8">Quick Facts</h3>
                <ul className="space-y-8">
                  <li className="flex gap-6 items-start">
                    <span className="text-[24px] font-serif text-[#C4A484]">01</span>
                    <div>
                      <h4 className="font-sans font-bold text-[14px] text-[#1A1A1A] mb-2">ISO 9001:2015 Certified</h4>
                      <p className="text-[13px] text-[#888]">Adherence to strict international quality management systems.</p>
                    </div>
                  </li>
                  <li className="flex gap-6 items-start">
                    <span className="text-[24px] font-serif text-[#C4A484]">02</span>
                    <div>
                      <h4 className="font-sans font-bold text-[14px] text-[#1A1A1A] mb-2">125+ Products</h4>
                      <p className="text-[13px] text-[#888]">A comprehensive range including One Piece, Basins, Wall Hung & Designer items.</p>
                    </div>
                  </li>
                  <li className="flex gap-6 items-start">
                    <span className="text-[24px] font-serif text-[#C4A484]">03</span>
                    <div>
                      <h4 className="font-sans font-bold text-[14px] text-[#1A1A1A] mb-2">Pan-India Network</h4>
                      <p className="text-[13px] text-[#888]">Authorized dealers and distributors serving customers across all states.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <SeoContentBlock pageType="about" />
      </main>
      <Footer />
    </>
  );
}

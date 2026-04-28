import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { BookOpen, FileDown, MessageSquare, ShieldCheck } from 'lucide-react';
import { LATEST_COLLECTION_YEAR } from '../utils/constants';
import SeoContentBlock from '../components/SeoContentBlock';

export const metadata: Metadata = {
   title: 'Download Product Catalog | India',
   description: 'Download the official Axpert Cera product catalog. Access high-resolution images and technical specifications for our range of toilets and basins. Trusted by dealers in Mumbai, Delhi, Bangalore, and across India.',
   keywords: [
      'sanitaryware product catalog pdf',
      'ceramic wash basin catalogue download',
      'one piece toilet dimension guide',
      'wholesale sanitaryware price list India',
      'Axpert Cera dealer catalog',
      'bathroom fittings brochure PDF',
      'designer sanitaryware catalog Surat',
      'wall hung toilet technical specs',
      'hotel project sanitaryware selection',
      'commercial bathroom products catalog',
      // --- Gujarat (Original Focus) ---
      'sanitaryware catalog Morbi',
      'ceramic sanitaryware catalog Ahmedabad',
      'bathroom fittings catalog Surat',
      'one piece toilet catalog Rajkot',
      'wash basin catalog Vadodara',
      'designer sanitaryware catalog Jamnagar',
      'ceramic products catalog Bhavnagar',
      'wholesale sanitaryware catalog Gujarat',

      // --- Maharashtra Targeted ---
      'sanitaryware catalog Mumbai',
      'bathroom fittings catalog Pune',
      'one piece toilet catalog Thane',
      'designer sanitaryware catalog Nagpur',
      'ceramic wash basin catalog Nashik',
      'hotel sanitaryware catalog Aurangabad',
      'commercial bathroom catalog Navi Mumbai',

      // --- Rajasthan Targeted ---
      'sanitaryware catalog Jaipur',
      'bathroom fittings catalog Jodhpur',
      'one piece toilet catalog Udaipur',
      'designer sanitaryware catalog Kota',
      'ceramic catalog Bikaner',

      // --- North India (Delhi NCR, UP, Punjab) ---
      'sanitaryware catalog Delhi',
      'bathroom fittings catalog New Delhi',
      'one piece toilet catalog Gurgaon',
      'designer sanitaryware catalog Noida',
      'ceramic catalog Ghaziabad',
      'wholesale sanitaryware catalog Uttar Pradesh',
      'bathroom products catalog Punjab',
      'industrial sanitaryware catalog Chandigarh',

      // --- South India ---
      'sanitaryware catalog Bangalore',
      'bathroom fittings catalog Hyderabad',
      'one piece toilet catalog Chennai',
      'designer sanitaryware catalog Kochi',
      'ceramic catalog Coimbatore',
      'hotel bathroom catalog Kerala',

      // --- Madhya Pradesh ---
      'sanitaryware catalog Indore',
      'bathroom fittings catalog Bhopal',
      'one piece toilet catalog Gwalior',

      // --- East India ---
      'sanitaryware catalog Kolkata',
      'bathroom fittings catalog Patna',
      'one piece toilet catalog Bhubaneswar',

      // --- General High-Intent Keywords ---
      'best sanitaryware catalog India',
      'premium bathroom catalog 2024',
      'ceramic sanitaryware catalog PDF',
      'wholesale bathroom fittings catalog',
      'architectural sanitaryware catalog',
      'modern bathroom design catalog',
      'luxury ceramic catalog'
   ],
   alternates: {
      canonical: 'https://www.axpertcera.com/catalog',
   },
};

const BASE_URL = 'https://www.axpertcera.com';

export default function CatalogPage() {
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
            name: 'Download Catalog',
            item: `${BASE_URL}/catalog`,
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
            {/* Cinematic Header */}
            <section className="bg-navy-dark py-24 relative overflow-hidden text-white">
               <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dbuexdwty/image/upload/v1712215263/images/hero_bathroom.png')] bg-cover bg-center"></div>
               </div>
               <div className="max-w-[1440px] mx-auto px-5 md:px-10 relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8 border border-white/20">
                     <BookOpen size={14} className="text-[#C4A484]" />
                     Digital Collection {LATEST_COLLECTION_YEAR}
                  </div>
                  <h1 className="font-serif text-[clamp(35px,5vw,64px)] font-normal text-white leading-tight mb-6">
                     Discover Our <br /> <span className="italic text-[#C4A484]">Masterpieces.</span>
                  </h1>
                  <p className="max-w-xl mx-auto text-white/60 text-[15px] leading-relaxed">
                     Explore 125+ exquisitely designed ceramic pieces from One Piece Toilets to Designer Basins,
                     all captured in our high-definition product catalog.
                  </p>
               </div>
            </section>

            {/* Catalog Benefits Grid */}
            <section className="py-20 bg-white">
               <div className="max-w-[1280px] mx-auto px-5 md:px-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-[#F8F8F6] flex items-center justify-center text-[#C4A484] mb-6">
                           <FileDown size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-[20px] mb-4">Instant Download</h3>
                        <p className="text-[14px] text-[#888] leading-relaxed">Get the full H-res PDF catalog immediately with one click for offline viewing.</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-[#F8F8F6] flex items-center justify-center text-[#C4A484] mb-6">
                           <MessageSquare size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-[20px] mb-4">WhatsApp Inquiry</h3>
                        <p className="text-[14px] text-[#888] leading-relaxed">Direct support via WhatsApp for bulk orders, dealer price lists, and technical specs.</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-[#F8F8F6] flex items-center justify-center text-[#C4A484] mb-6">
                           <ShieldCheck size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-[20px] mb-4">ISO Standards</h3>
                        <p className="text-[14px] text-[#888] leading-relaxed">Detailed technical dimensions and certification data included for every ceramic piece.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* The Main Download Section (Reusing logic but with page styling) */}
            <div className="border-t border-[#F0F0EE]">
               <Newsletter />
            </div>

            {/* Additional Info / Sample Preview Section */}
            <section className="py-24 bg-[#F8F8F6]">
               <div className="max-w-[1280px] mx-auto px-5 md:px-10">
                  <div className="bg-white p-2 md:p-4 shadow-2xl rounded-sm">
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="relative aspect-[3/4] bg-[#F5F5F3] overflow-hidden group">
                              <img
                                 src={`https://res.cloudinary.com/dbuexdwty/image/upload/images/process/process${i}.png`}
                                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                 alt="Catalog Page Preview"
                              />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-dark/40 border border-white/20">
                                 <span className="text-white text-[9px] font-bold tracking-[0.2em] uppercase">Page Preview {i}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="mt-12 text-center">
                     <p className="text-[12px] font-medium text-[#888] max-w-xl mx-auto italic">
                        Note: The catalog contains comprehensive images, dimensional drawings, and installation
                        guides for all One Piece, Wall Hung, and Designer collections.
                     </p>
                  </div>
               </div>
            </section>
            <SeoContentBlock pageType="catalog" />
         </main>
         <Footer />
      </>
   );
}

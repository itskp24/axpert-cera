import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, TrendingUp, Truck, Users, MessageCircle } from 'lucide-react';
import DealerForm from '../components/DealerForm';

export const metadata: Metadata = {
  title: 'Become a Dealer | Partner with Axpert Cera',
  description: 'Join the Axpert Cera dealer network. We are looking for distributors and partners across all Indian states to supply premium, ISO-certified sanitaryware.',
  keywords: ['sanitaryware dealer inquiry', 'bathroom fittings distributor India', 'become a sanitaryware dealer', 'ceramic products partnership'],
};

export default function BecomeADealer() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        {/* Hero Section */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 mb-20">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">Partnership Opportunities</div>
            <h1 className="font-serif text-[clamp(40px,5vw,64px)] font-normal text-[#1A1A1A] leading-[1.1] mb-8">
              Grow Your Business with <span className="italic">Axpert Cera</span>
            </h1>
            <p className="text-[18px] text-[#555] leading-[1.6] mb-10">
              We are expanding our presence across India and looking for dedicated partners to join our network. 
              Partner with a brand that values quality, innovation, and long-term relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#dealer-form" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C4A484] transition-colors rounded-sm"
              >
                Apply for Dealership
              </a>
              <a 
                href="https://wa.me/919429339212?text=I%20am%20interested%20in%20becoming%20a%20dealer%20for%20Axpert%20Cera." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-black text-black text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all rounded-sm"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="bg-[#F8F8F6] py-24">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10">
            <h2 className="font-serif text-[32px] mb-16 text-center">Why Partner with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <ShieldCheck className="text-[#C4A484]" />
                </div>
                <h3 className="font-bold text-[14px] uppercase tracking-wider">Premium Quality</h3>
                <p className="text-[14px] text-[#666] leading-[1.6]">ISO 9001:2015 certified manufacturing with rigorous quality checks at every stage.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <TrendingUp className="text-[#C4A484]" />
                </div>
                <h3 className="font-bold text-[14px] uppercase tracking-wider">High Profit Margins</h3>
                <p className="text-[14px] text-[#666] leading-[1.6]">Competitive B2B pricing models designed to ensure strong returns for our dealers.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <Truck className="text-[#C4A484]" />
                </div>
                <h3 className="font-bold text-[14px] uppercase tracking-wider">Pan-India Logistics</h3>
                <p className="text-[14px] text-[#666] leading-[1.6]">Robust supply chain and reliable transport network serving every state in India.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  <Users className="text-[#C4A484]" />
                </div>
                <h3 className="font-bold text-[14px] uppercase tracking-wider">Marketing Support</h3>
                <p className="text-[14px] text-[#666] leading-[1.6]">We provide catalogs, displays, and branding material to help you sell more effectively.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div id="dealer-form" className="max-w-[1440px] mx-auto px-5 md:px-10 py-24">
          <DealerForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

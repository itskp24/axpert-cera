import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Axpert Cera',
  description: 'Privacy Policy for Axpert Cera. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h1 className="font-serif text-[48px] mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-black/70 space-y-6">
            <p>Last updated: May 2026</p>
            <p>At Axpert Cera, we value your privacy. This policy explains how we collect, use, and protect your information when you visit our website.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out an inquiry form or contact us via WhatsApp. This may include your name, email, phone number, and business details.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">2. How We Use Your Information</h2>
            <p>We use the information to respond to your inquiries, provide quotes, and improve our services. We do not sell your data to third parties.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">3. Cookies</h2>
            <p>We use cookies to enhance your browsing experience and analyze site traffic via Google Analytics.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@axpertcera.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

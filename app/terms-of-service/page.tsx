import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Axpert Cera',
  description: 'Terms of Service for using the Axpert Cera website and services.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h1 className="font-serif text-[48px] mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-black/70 space-y-6">
            <p>Last updated: May 2026</p>
            <p>By accessing the Axpert Cera website, you agree to comply with these terms of service.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">1. Use of Content</h2>
            <p>All content on this site, including images and text, is the property of Axpert Cera and protected by copyright laws.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">2. Disclaimer</h2>
            <p>Product specifications and availability are subject to change without notice. We strive for accuracy but do not warrant that all content is error-free.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">3. Governing Law</h2>
            <p>These terms are governed by the laws of India and the jurisdiction of Gujarat courts.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

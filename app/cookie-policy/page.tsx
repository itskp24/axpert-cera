import React from 'react';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Cookie Policy | Axpert Cera',
  description: 'Learn how Axpert Cera uses cookies to improve your browsing experience.',
};

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <h1 className="font-serif text-[48px] mb-8">Cookie Policy</h1>
          <div className="prose prose-slate max-w-none text-black/70 space-y-6">
            <p>Last updated: May 2026</p>
            <p>This website uses cookies to improve your experience while you navigate through the website.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">What are Cookies?</h2>
            <p>Cookies are small text files used to store small pieces of information. They are stored on your device when the website is loaded on your browser.</p>
            
            <h2 className="text-xl font-bold text-black mt-8">How We Use Cookies</h2>
            <p>We use first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function correctly. Third-party cookies (like Google Analytics) help us understand how the website performs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

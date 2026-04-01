"use client";
import React from 'react';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="catalog" className="py-24 bg-white text-center" aria-labelledby="catalog-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">
          Free Download
        </p>

        <h2 id="catalog-heading" className="font-serif text-[clamp(28px,3vw,40px)] font-normal text-navy-dark mb-3">
          Request the Axpert Cera Catalog
        </h2>

        <p className="text-[14px] text-text-gray max-w-[520px] mx-auto mb-5 leading-[1.7]">
          Get our complete {new Date().getFullYear()} product catalog - featuring One Piece Toilets, Pedestal Wash Basins,
          Wall Hung Toilets, Water Closets, Table Top Basins, Designer Collections and more.
          Trusted by dealers across Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, and all of India.
        </p>

        {/* Direct PDF download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="/catalog.pdf"
            download="Axpert_Cera_Catalog.pdf"
            aria-label="Download Axpert Cera Product Catalog PDF"
            className="bg-navy text-white px-10 py-4 text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-navy-light transition-colors"
          >
            Download Catalog PDF
          </a>
          <a
            href="https://wa.me/919429339212?text=Hello,%20I%20would%20like%20to%20request%20the%20Axpert%20Cera%20product%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Request Axpert Cera catalog on WhatsApp"
            className="border-[1.5px] border-navy text-navy px-10 py-4 text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-navy hover:text-white transition-all"
          >
            Request via WhatsApp
          </a>
        </div>

        {/* Email subscription */}
        <p className="text-[12px] text-text-gray mb-4">Or subscribe by email for catalog updates:</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[480px] mx-auto border-[1.5px] border-border rounded-sm overflow-hidden focus-within:border-navy transition-colors">
          <label htmlFor="catalog-email" className="sr-only">Email address to receive Axpert Cera catalog</label>
          <input
            type="email"
            id="catalog-email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 text-[13px] font-sans border-none outline-none bg-white text-text-dark placeholder:text-text-gray"
            required
          />
          <button type="submit" className="bg-navy text-white px-7 py-4 text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-navy-light transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}

"use client";
import React from 'react';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="catalog" className="py-24 bg-white text-center" aria-labelledby="newsletter-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <h2 id="newsletter-heading" className="font-serif text-[clamp(28px,3vw,40px)] font-normal text-navy-dark mb-3">
          Request a Catalog
        </h2>
        <p className="text-[14px] text-text-gray max-w-[480px] mx-auto mb-10 leading-[1.7]">
          Join our mailing list to receive our latest {new Date().getFullYear()} digital catalog and stay updated on new collections and exclusive architectural resources.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[480px] mx-auto border-[1.5px] border-border rounded-sm overflow-hidden focus-within:border-navy transition-colors">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input 
            type="email" 
            id="email"
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

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden flex items-center" aria-label="Hero Introduction">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8e9ed] via-[#d4d7df] to-[#c9c8c4]">
        <Image 
          src="/hero_bathroom.png" 
          alt="Luxury minimalist bathroom with freestanding white bathtub" 
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent"></div>
      </div>
      
      <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 relative z-10 flex items-center h-full">
        <div className="max-w-[520px] animate-[fadeIn_0.8s_ease_forwards]">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-navy mb-5 opacity-80">
            New Collection 2024
          </div>
          <h1 className="font-serif text-[clamp(48px,6vw,80px)] font-normal text-navy-dark leading-[1.1] mb-5">
            Elevate Your<br />Sanctuary.
          </h1>
          <p className="text-[15px] leading-[1.7] text-gray-700 max-w-[360px] mb-9">
            Experience the perfect synthesis of minimalist design and unparalleled functionality with our latest ceramic collections.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#collections" className="bg-navy text-white px-8 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-navy-light hover:-translate-y-[1px] shadow-[0_8px_24px_rgba(26,39,68,0.25)] transition-all flex items-center justify-center">
              Explore Collection
            </a>
            <a href="/catalog.pdf" download="Axpert_Cera_Catalog.pdf" className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-navy text-navy px-8 py-3.5 text-[12px] font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-navy hover:text-white hover:-translate-y-[1px] transition-all">
              View Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

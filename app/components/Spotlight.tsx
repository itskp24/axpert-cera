"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

const SPOTLIGHT_IMAGES = [
  "https://res.cloudinary.com/dbuexdwty/image/upload/images/spotlight/serenity_bathtub_1.jpg",
  "https://res.cloudinary.com/dbuexdwty/image/upload/images/spotlight/serenity_bathtub_2.jpg",
  "https://res.cloudinary.com/dbuexdwty/image/upload/images/spotlight/serenity_bathtub_3.jpg",
];

export default function Spotlight() {
  const [activeImg, setActiveImg] = useState(SPOTLIGHT_IMAGES[0]);

  return (
    <section className="py-24 bg-white" aria-labelledby="spotlight-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div>
            <div className="bg-[#FAF9F6] rounded-[2px] overflow-hidden aspect-[4/3] flex items-center justify-center p-6 relative shadow-sm">
              <Image 
                src={activeImg} 
                alt="Serenity Freestanding Bathtub — Premium Ceramic Bath by Axpert Cera" 
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {SPOTLIGHT_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square bg-[#FAF9F6] rounded-[2px] p-2 border-2 cursor-pointer relative overflow-hidden group transition-all duration-300 ${
                    activeImg === img ? 'border-navy-dark' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt={`Serenity Freestanding Bathtub view ${idx + 1} — Axpert Cera Premium Bath`} fill className={`object-cover transition-all duration-500 group-hover:scale-110 ${activeImg === img ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`} />
                </div>
              ))}
              <div className="aspect-square bg-[#FAF9F6] rounded-[2px] flex flex-col items-center justify-center gap-1 text-[10px] text-text-gray tracking-[0.05em] cursor-pointer hover:bg-gray-200 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Play Video</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-gray mb-3 text-gold">Axpert Signature</div>
            <h2 id="spotlight-heading" className="font-serif text-[clamp(28px,3vw,36px)] font-normal text-navy-dark mb-6 leading-tight">
              Serenity <br/> <span className="italic text-text-gray/60">Freestanding Bath.</span>
            </h2>
            
            <p className="text-[14px] leading-[1.8] text-text-gray mb-8">
              Crafted from our proprietary solid surface material, the Serenity bath offers exceptional heat retention and a velvety, warm-to-touch matte finish. Its organic, minimalist silhouette creates a stunning focal point for any modern bathroom sanctuary.
            </p>

            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-navy mb-4">Specifications</div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-12">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Material</span>
                <span className="text-[13px] font-semibold text-navy-dark">Solid Surface</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Dimensions</span>
                <span className="text-[13px] font-semibold text-navy-dark">1700 × 800 × 600 mm</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Finish</span>
                <span className="text-[13px] font-semibold text-navy-dark">Matte White</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Weight</span>
                <span className="text-[13px] font-semibold text-navy-dark">125 kg</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Capacity</span>
                <span className="text-[13px] font-semibold text-navy-dark">280 Liters</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-text-gray">Warranty</span>
                <span className="text-[13px] font-semibold text-navy-dark">10 Years</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="https://wa.me/919429339212?text=Hello,%20I%20am%20interested%20in%20getting%20a%20quote%20for%20the%20Serenity%20Freestanding%20Bath." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy text-white px-8 py-3.5 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-[2px] hover:bg-navy-light transition-colors flex-1 text-center min-w-[200px]"
              >
                Add to Quote
              </a>
              <a 
                href="https://wa.me/919429339212?text=Hello,%20I%20have%20some%20questions%20regarding%20the%20Serenity%20Freestanding%20Bath." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-[1.5px] border-border text-navy px-6 py-3.5 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-[2px] flex items-center justify-center gap-2 hover:border-navy transition-colors flex-1 min-w-[200px]"
              >
                <Mail size={16} /> Inquire Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

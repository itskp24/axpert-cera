import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Spotlight() {
  return (
    <section className="py-24 bg-white" aria-labelledby="spotlight-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div>
            <div className="bg-light-gray rounded-[2px] overflow-hidden aspect-[4/3] flex items-center justify-center p-6 relative">
              <Image 
                src="/bathtub.png" 
                alt="Serenity Freestanding Bath" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="aspect-square bg-light-gray rounded-[2px] p-3 border-2 border-navy cursor-pointer relative">
                <Image src="/bathtub.png" alt="Thumbnail" fill className="object-contain" />
              </div>
              <div className="aspect-square bg-light-gray rounded-[2px] p-3 border-2 border-transparent cursor-pointer relative">
                <Image src="/bathtub.png" alt="Thumbnail" fill className="object-contain opacity-70" />
              </div>
              <div className="aspect-square bg-light-gray rounded-[2px] p-3 border-2 border-transparent cursor-pointer relative">
                <Image src="/bathtub.png" alt="Thumbnail" fill className="object-contain opacity-70" />
              </div>
              <div className="aspect-square bg-light-gray rounded-[2px] flex flex-col items-center justify-center gap-1 text-[10px] text-text-gray tracking-[0.05em] cursor-pointer hover:bg-gray-200 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                <span>Play Video</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-gray mb-3">Bathtubs / Freestanding</div>
            <h2 id="spotlight-heading" className="font-serif text-[clamp(28px,3vw,36px)] font-normal text-navy-dark mb-4">
              Serenity Freestanding Bath
            </h2>
            <div className="text-[22px] font-semibold text-navy-dark mb-5">$2,450.00</div>
            
            <p className="text-[14px] leading-[1.8] text-text-gray mb-8">
              Crafted from our proprietary solid surface material, the Serenity bath offers exceptional heat retention and a velvety, warm-to-touch matte finish. Its organic, minimalist silhouette creates a stunning focal point for any modern bathroom sanctuary.
            </p>

            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-navy mb-4">Specifications</div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8">
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
              <button className="bg-navy text-white px-8 py-3.5 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-[2px] hover:bg-navy-light transition-colors flex-1 text-center min-w-[200px]">
                Add to Quote
              </button>
              <button className="bg-transparent border-[1.5px] border-border text-navy px-6 py-3.5 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-[2px] flex items-center justify-center gap-2 hover:border-navy transition-colors flex-1 min-w-[200px]">
                <Mail size={16} /> Inquire Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

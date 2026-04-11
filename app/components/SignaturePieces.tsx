"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DESIGNER_COLLECTIONS } from '../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryModal from './GalleryModal';

interface Category {
  name: string;
  count: string;
  images: string[];
  slug: string;
}

interface SignaturePiecesProps {
  imageData: Record<string, string[]>;
  variant?: 'default' | 'premium';
  hideHeader?: boolean;
}

export default function SignaturePieces({ imageData, variant = 'default', hideHeader = false }: SignaturePiecesProps) {
  // Build categories from server-provided imageData
  const initialCategories: Category[] = DESIGNER_COLLECTIONS.map(catInfo => {
    const key = catInfo.cloudinaryFolder;
    const imgs = (key && imageData[key]?.length > 0) ? imageData[key] : ['/placeholder.png'];
    const count = imgs.includes('/placeholder.png') ? 'Coming Soon' : `${imgs.length} Collection${imgs.length !== 1 ? 's' : ''}`;
    return { name: catInfo.name, count, images: imgs, slug: catInfo.slug };
  });

  const [categories] = useState<Category[]>(initialCategories);
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    initialCategories.map(() => 0)
  );

  // Gallery Modal State
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');

  // Auto-cycle card images every 4s
  useEffect(() => {
    if (!categories.length) return;
    const timer = setInterval(() => {
      setCurrentImageIndices(prev =>
        prev.map((idx, i) => {
          const imgs = categories[i]?.images ?? [];
          return imgs.length > 1 ? (idx + 1) % imgs.length : idx;
        })
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [categories]);

  const handleCardClick = (e: React.MouseEvent, cat: Category) => {
    // Strictly for mobile - check width
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setGalleryImages(cat.images);
      setGalleryTitle(cat.name);
      setGalleryOpen(true);
    }
  };

  return (
    <section id="products" className={`py-24 ${variant === 'premium' ? 'bg-white' : 'bg-[#F8F8F6]'}`} aria-labelledby="signature-heading">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">

        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4 font-sans">Exquisite Craftsmanship</div>
              <h2 id="signature-heading" className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-[#1A1A1A] leading-[1.1]">
                Designer Collection
              </h2>
              <p className="sr-only">Explore Axpert Cera&apos;s exclusive designer sanitaryware collection.</p>
            </div>
            <Link href="/catalog.pdf" download aria-label="Download Axpert Cera designer collection catalog PDF" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-black border-b border-black pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-all font-sans">
              View Full Catalog
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className={`grid gap-4 ${variant === 'premium' ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-4'}`}>
          {categories.map((cat, idx) => (
            <Link
              href={`/designer/${cat.slug}`}
              key={idx}
              onClick={(e) => handleCardClick(e, cat)}
              className={`group cursor-pointer flex flex-col transition-all duration-500 block relative ${
                variant === 'premium' 
                  ? 'bg-white p-3 md:p-4 h-[340px] md:h-[440px] border border-[#EBEBEB] hover:border-[#C4A484] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]' 
                  : 'bg-white p-3 md:p-4 h-[340px] md:h-[420px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#1A1A1A]'}`}
            >
              <div className={`relative flex-1 overflow-hidden flex items-center justify-center transition-all duration-700 ${
                variant === 'premium' 
                  ? 'bg-[#FAFAF9] h-[180px] md:h-[280px] mb-4 md:mb-6' 
                  : 'bg-white p-4 md:p-8 group-hover:bg-[#F5F5F3] mb-2'}`}>
                {idx < 4 && variant !== 'premium' && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10 bg-[#1A1A1A] text-white text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase px-2 md:px-3 py-1 md:py-1.5 rounded-sm shadow-sm font-sans">
                    NEW ARRIVAL
                  </div>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndices[idx]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-4 md:p-6"
                  >
                    <Image
                      src={cat.images[currentImageIndices[idx]]}
                      alt={`${cat.name} rendering view`}
                      width={600}
                      height={600}
                      quality={90}
                      className={`object-contain w-full h-full transition-transform duration-700 ${variant === 'premium' ? 'scale-95 group-hover:scale-105' : 'group-hover:scale-105'}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className={`flex items-end justify-between mt-auto relative z-10 ${variant === 'premium' ? 'px-1 md:px-2' : ''}`}>
                <div className="flex-1 pr-2">
                  <p className="text-[8px] md:text-[9px] font-bold tracking-[0.25em] text-[#C4A484] uppercase mb-1 md:mb-2 font-sans">Designer Series</p>
                  
                  <h3 className={`font-sans font-medium text-[#1A1A1A] leading-tight mb-1 transition-colors duration-300 ${
                    variant === 'premium' 
                      ? 'text-[16px] md:text-[22px] group-hover:text-[#C4A484]' 
                      : 'text-[15px] md:text-[18px] font-serif'}`}>
                    {cat.name}
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-[#666] font-normal tracking-wide font-sans">{cat.count}</p>
                </div>
                
                {variant === 'premium' ? (
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#1A1A1A] overflow-hidden">
                    <svg className="w-4 h-4 md:w-5 md:h-5 -translate-x-1 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#C4A484]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#C4A484] flex-shrink-0">
                    <svg width="12" height="12" className="md:w-[14px] md:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <GalleryModal 
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
        title={galleryTitle}
      />
    </section>
  );
}

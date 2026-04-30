"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '../utils/constants';
import GalleryModal from './GalleryModal';

interface Category {
  name: string;
  count: string;
  images: string[];
  slug: string;
}

interface CategoriesProps {
  imageData: Record<string, string[]>;
  variant?: 'default' | 'premium';
  hideHeader?: boolean;
}

export default function Categories({ imageData, variant = 'default', hideHeader = false }: CategoriesProps) {
  const initialCategories: Category[] = CATEGORIES.map(catInfo => {
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

  // Preload all images silently using native browser Image object
  useEffect(() => {
    categories.forEach(cat => {
      cat.images.forEach(src => {
        const img = new window.Image();
        img.src = src;
      });
    });
  }, [categories]);

  // Cycle images every 3.5s — instant swap, zero animation
  useEffect(() => {
    if (!categories.length) return;
    const timer = setInterval(() => {
      setCurrentImageIndices(prev =>
        prev.map((idx, i) => {
          const imgs = categories[i]?.images ?? [];
          return imgs.length > 1 ? (idx + 1) % imgs.length : idx;
        })
      );
    }, 3500);
    return () => clearInterval(timer);
  }, [categories]);

  const handleCardClick = (e: React.MouseEvent, cat: Category) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setGalleryImages(cat.images);
      setGalleryTitle(cat.name);
      setGalleryOpen(true);
    }
  };

  return (
    <section id="collections" className={`pb-4 ${variant === 'premium' ? 'bg-white pt-12' : 'bg-[#F8F8F6] pt-20'}`} aria-labelledby="categories-heading">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">

        {/* Header */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4 font-sans">TIMELESS ELEGANCE</div>
              <h2 id="categories-heading" className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-[#1A1A1A] leading-[1.1]">
                Classic Collection
              </h2>
              <p className="sr-only">Browse our complete range of sanitaryware products.</p>
            </div>
            <Link href="/catalog.pdf" download aria-label="Download Axpert Cera full product catalog PDF" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-black border-b border-black pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-all font-sans">
              View Full Catalog
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className={`grid gap-4 ${variant === 'premium' ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-4'}`}>
          {categories.map((cat, idx) => (
            <Link
              href={`/categories/${cat.slug}`}
              key={idx}
              onClick={(e) => handleCardClick(e, cat)}
              className={`group cursor-pointer flex flex-col transition-all duration-300 block relative ${
                variant === 'premium'
                  ? 'bg-white p-3 md:p-4 h-[340px] md:h-[440px] border border-[#EBEBEB] hover:border-[#C4A484] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                  : 'bg-white p-4 md:p-6 h-[340px] md:h-[460px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#EBEBEB] hover:border-[#1A1A1A]'}`}
            >
              <div className={`relative flex-1 overflow-hidden flex items-center justify-center ${
                variant === 'premium'
                  ? 'bg-[#FAFAF9] h-[180px] md:h-[280px] mb-4 md:mb-6'
                  : 'bg-[#FAFAF9] mb-6 md:mb-8 p-4 md:p-8 h-full'}`}>

                {/* Direct image — instant swap, no animation whatsoever */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                  <Image
                    key={`${idx}-${currentImageIndices[idx]}`}
                    src={cat.images[currentImageIndices[idx]]}
                    alt={`${cat.name} rendering view`}
                    width={600}
                    height={600}
                    quality={90}
                    priority={idx < 4 && currentImageIndices[idx] === 0}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <div className={`flex items-end justify-between mt-auto relative z-10 ${variant === 'premium' ? 'px-1 md:px-2' : ''}`}>
                <div className="flex-1 pr-2">
                  <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-[#C4A484] uppercase mb-1 md:mb-1.5 font-sans">
                    {variant === 'premium' ? 'DESIGNER SERIES' : 'Series Collection'}
                  </p>
                  <h3 className={`font-sans font-medium text-[#1A1A1A] leading-tight mb-1 transition-colors duration-300 ${
                    variant === 'premium'
                      ? 'text-[16px] md:text-[22px] group-hover:text-[#C4A484]'
                      : 'text-[15px] md:text-[20px] font-serif'}`}>
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

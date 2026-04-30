"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import GalleryModal from './GalleryModal';

interface ProductGridProps {
  images: string[];
  categoryName: string;
  seoAlt: string;
  columns?: '3' | '4';
  variant?: 'default' | 'designer';
}

export default function ProductGrid({ images, categoryName, seoAlt, columns = '3', variant = 'default' }: ProductGridProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  // Track which images have finished loading
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});

  const handleProductClick = (idx: number) => {
    if (window.innerWidth < 1024) {
      setSelectedImages(images);
      setSelectedTitle(categoryName);
      setGalleryOpen(true);
    }
  };

  const handleImageLoad = (idx: number) => {
    setLoadedMap(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === '4' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleProductClick(idx)}
            className={`group flex flex-col items-center transition-all duration-500 rounded-lg cursor-pointer md:cursor-default ${
              variant === 'designer'
                ? 'bg-[#FAFAF9] p-6 border border-transparent hover:border-[#EBEBEB] hover:shadow-2xl rounded-sm'
                : 'bg-white p-8 shadow-sm hover:shadow-xl'
            }`}
          >
            <div className={`relative w-full mb-6 overflow-hidden flex items-center justify-center ${
              variant === 'designer' ? 'aspect-[4/5] p-4' : 'aspect-square'
            }`}>
              {/* Skeleton shimmer — shown while image loads */}
              {!loadedMap[idx] && (
                <div className="absolute inset-0 rounded-md overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-[#F0F0EE] via-[#E8E8E6] to-[#F0F0EE] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                </div>
              )}

              {/* Actual image — fades in smoothly once loaded */}
              <Image
                src={img}
                alt={`${seoAlt} - Product ${idx + 1}`}
                fill
                onLoad={() => handleImageLoad(idx)}
                className={`object-contain transition-all duration-700 ${
                  variant === 'designer' ? 'scale-[1.15] group-hover:scale-[1.25]' : 'scale-95 group-hover:scale-105'
                } ${loadedMap[idx] ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {variant === 'designer' ? (
              <div className="w-full text-center">
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#C4A484] uppercase mb-2">Signature Piece</p>
                <h3 className="text-[16px] text-[#1A1A1A] font-serif leading-tight">
                  Collection {String(idx + 1).padStart(2, '0')}
                </h3>
              </div>
            ) : (
              <div className="w-full pt-6 border-t border-[#F0F0EE] flex justify-between items-center">
                <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#C4A484]">
                  Axpert Design
                </span>
                <span className="text-[14px] text-[#1A1A1A] font-serif">
                  Collection {idx + 1}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={selectedImages}
        title={selectedTitle}
      />
    </>
  );
}

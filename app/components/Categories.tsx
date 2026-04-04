"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FOLDER_MAP: Record<string, string> = {
  'One Piece Toilet': 'onepiecetoilet',
  'Pedestal Wash Basin': 'pedestalwashbasin',
  'One Piece Basin': 'onepiecebasin',
  'Wall Hung Toilet': 'wallhungtoilet',
  'Water Closet': 'watercloset',
  'Table Top Basin': 'tabletopbasin',
  'Wall Mount Wash Basin': 'wallmountwashbasin',
  'Pan & Urinal': 'panurinal',
  'Designer Collection': 'designercollection',
};

// SEO-optimised alt text per product category
const CATEGORY_ALT: Record<string, string> = {
  'One Piece Toilet': 'One Piece Toilet - Premium Ceramic Toilet by Axpert Cera, Manufacturer in Morbi Gujarat',
  'Pedestal Wash Basin': 'Pedestal Wash Basin - Ceramic Wash Basin by Axpert Cera Morbi',
  'One Piece Basin': 'One Piece Basin - Designer Ceramic Basin by Axpert Cera Gujarat',
  'Wall Hung Toilet': 'Wall Hung Toilet - Modern Ceramic Toilet by Axpert Cera',
  'Water Closet': 'Water Closet EWC - Ceramic Sanitaryware by Axpert Cera Morbi',
  'Table Top Basin': 'Table Top Basin - Ceramic Wash Basin by Axpert Cera Gujarat',
  'Wall Mount Wash Basin': 'Wall Mount Wash Basin - Space Saving Ceramic Basin by Axpert Cera',
  'Pan & Urinal': 'Pan and Urinal - Orissa Pan Sanitation Products by Axpert Cera',
  'Designer Collection': 'Designer Collection - Luxury Ceramic Sanitaryware by Axpert Cera Morbi',
};

const CATEGORY_NAMES = [
  'One Piece Toilet',
  'Pedestal Wash Basin',
  'One Piece Basin',
  'Wall Hung Toilet',
  'Water Closet',
  'Table Top Basin',
  'Wall Mount Wash Basin',
  'Pan & Urinal',
];

interface Category {
  name: string;
  count: string;
  images: string[];
}

interface ModalState {
  category: Category;
  imageIndex: number;
}

interface CategoriesProps {
  // Passed from page.tsx (ISR-fetched server data) so no client-side fetch needed
  imageData: Record<string, string[]>;
}

export default function Categories({ imageData }: CategoriesProps) {
  // Build categories from server-provided imageData (no runtime fetch required)
  const initialCategories: Category[] = CATEGORY_NAMES.map(name => {
    const key = FOLDER_MAP[name];
    const imgs = (key && imageData[key]?.length > 0) ? imageData[key] : ['/placeholder.png'];
    const count = imgs.includes('/placeholder.png') ? 'Coming Soon' : `${imgs.length} Collection${imgs.length !== 1 ? 's' : ''}`;
    return { name, count, images: imgs };
  });

  const [categories] = useState<Category[]>(initialCategories);
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
    initialCategories.map(() => 0)
  );
  const [modal, setModal] = useState<ModalState | null>(null);

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

  // Modal navigation
  const modalNext = useCallback(() => {
    setModal(prev => {
      if (!prev) return null;
      const nextIdx = (prev.imageIndex + 1) % prev.category.images.length;
      return { ...prev, imageIndex: nextIdx };
    });
  }, []);

  const modalPrev = useCallback(() => {
    setModal(prev => {
      if (!prev) return null;
      const prevIdx = (prev.imageIndex - 1 + prev.category.images.length) % prev.category.images.length;
      return { ...prev, imageIndex: prevIdx };
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!modal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') modalNext();
      if (e.key === 'ArrowLeft') modalPrev();
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modal, modalNext, modalPrev]);

  const openModal = (cat: Category, startIndex: number) => {
    setModal({ category: cat, imageIndex: startIndex });
  };

  return (
    <section id="collections" className="pt-20 pb-4 bg-[#F8F8F6]" aria-labelledby="categories-heading">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">Our Catalog</div>
            <h2 id="categories-heading" className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-[#1A1A1A] leading-[1.1]">
              Explore by Category
            </h2>
            <p className="sr-only">Browse our complete range of sanitaryware products including One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, Table Top Basins and more - manufactured in Morbi, Gujarat.</p>
          </div>
          <Link href="/catalog.pdf" download aria-label="Download Axpert Cera full product catalog PDF" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-black border-b border-black pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-all">
            View Full Catalog
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 h-[420px] group cursor-pointer flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#EBEBEB]"
              onClick={() => openModal(cat, currentImageIndices[idx] ?? 0)}
            >
              <div className="relative flex-1 overflow-hidden mb-2">
                {cat.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className={`absolute inset-0 p-3 flex items-center justify-center bg-white transition-opacity duration-1000 ${imgIdx === (currentImageIndices[idx] ?? 0) ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <Image src={img} alt={`${CATEGORY_ALT[cat.name] ?? cat.name} - image ${imgIdx + 1}`} width={400} height={400} loading={imgIdx === 0 ? 'eager' : 'lazy'}
                      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}

              </div>

              <div className="h-4 flex items-center justify-center gap-1.5 mb-3">
                {cat.images.length > 1 && cat.images.map((_, dotIdx) => (
                  <span key={dotIdx} className={`block rounded-full transition-all duration-500 ${dotIdx === (currentImageIndices[idx] ?? 0) ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-black/20'
                    }`} />
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#C4A484] uppercase">Category</p>
                <h3 className="font-serif text-[18px] text-[#1A1A1A] leading-tight">{cat.name}</h3>
                <p className="text-[11px] text-[#888] font-medium">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Full-screen Image Modal ── */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          {/* Modal panel - stop propagation so clicks inside don't close */}
          <div
            className="relative w-full max-w-5xl mx-4 md:mx-10 bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F0EE]">
              <div>
                <p className="text-[9px] font-bold tracking-[0.25em] text-[#C4A484] uppercase mb-0.5">Category</p>
                <h3 className="font-serif text-[20px] text-[#1A1A1A] leading-tight">{modal.category.name}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[#999] font-medium tabular-nums">
                  {modal.imageIndex + 1} / {modal.category.images.length}
                </span>
                <button
                  onClick={() => setModal(null)}
                  className="w-9 h-9 rounded-full bg-[#F5F5F3] flex items-center justify-center text-[#555] hover:bg-black hover:text-white transition-all"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Image area */}
            <div className="relative flex-1 bg-[#FAFAF9] flex items-center justify-center" style={{ minHeight: '60vh' }}>

              {/* Prev button */}
              {modal.category.images.length > 1 && (
                <button
                  onClick={modalPrev}
                  className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <div className="relative w-full h-full p-8 md:p-16" style={{ minHeight: '60vh' }}>
                <Image
                  key={modal.imageIndex}
                  src={modal.category.images[modal.imageIndex]}
                  alt={`${modal.category.name} - Image ${modal.imageIndex + 1} of ${modal.category.images.length} | Axpert Cera Morbi`}
                  fill
                  className="object-contain transition-opacity duration-300"
                  priority
                />
              </div>

              {/* Next button */}
              {modal.category.images.length > 1 && (
                <button
                  onClick={modalNext}
                  className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {/* Dot indicator + thumbnail strip */}
            {modal.category.images.length > 1 && (
              <div className="px-6 py-4 border-t border-[#F0F0EE] flex gap-3 overflow-x-auto scrollbar-none">
                {modal.category.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setModal(prev => prev ? { ...prev, imageIndex: i } : null)}
                    className={`flex-none w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === modal.imageIndex ? 'border-black scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                  >
                    <Image src={img} alt={`${modal.category.name} thumbnail ${i + 1}`} width={64} height={64} className="object-contain w-full h-full bg-white p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

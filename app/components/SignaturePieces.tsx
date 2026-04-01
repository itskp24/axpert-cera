"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const DESIGNER_FOLDER_MAP: Record<string, string> = {
  'Designer One Piece Basin': 'designeronepiecebasin',
  'Vitrosa Stargold Set': 'vitrosastargoldset',
  'Polo Set': 'poloset',
  'Mini Polo Set': 'minipoloset',
  'Bigsterling Set': 'bigsterlingset',
  'Designer Table Top': 'designertabletop',
  'Wash Basin': 'washbasin',
  'Rustic Series': 'rusticseries',
};

// SEO-optimised alt text for designer collection products
const DESIGNER_ALT: Record<string, string> = {
  'Designer One Piece Basin': 'Designer One Piece Wash Basin - Luxury Sanitaryware by Axpert Cera Morbi',
  'Vitrosa Stargold Set': 'Vitrosa Stargold Pedestal Set - Premium Designer Wash Basin by Axpert Cera',
  'Polo Set': 'Vitrosa Polo Pedestal Set - Designer Ceramic Basin by Axpert Cera Gujarat',
  'Mini Polo Set': 'Vitrosa Mini Polo Set - Compact Pedestal Wash Basin Axpert Cera',
  'Bigsterling Set': 'Bigsterling Designer Pedestal Set - Premium Sanitaryware Axpert Cera',
  'Designer Table Top': 'Designer Table Top Wash Basin - Luxury Ceramic Basin by Axpert Cera',
  'Wash Basin': 'Designer Wash Basin - Premium Ceramic Basin by Axpert Cera Morbi',
  'Rustic Series': 'Rustic Series Sanitaryware - Unique Designer Collection by Axpert Cera',
};

const DESIGNER_CATEGORIES = [
  'Designer One Piece Basin',
  'Vitrosa Stargold Set',
  'Polo Set',
  'Mini Polo Set',
  'Bigsterling Set',
  'Designer Table Top',
  'Wash Basin',
  'Rustic Series',
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

export default function SignaturePieces() {
  const [categories, setSignaturePieces] = useState<Category[]>([]);
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([]);
  const [modal, setModal] = useState<ModalState | null>(null);

  useEffect(() => {
    fetch('/api/category-images')
      .then(res => res.json())
      .then((data: Record<string, string[]>) => {
        const built: Category[] = DESIGNER_CATEGORIES.map(name => {
          const key = DESIGNER_FOLDER_MAP[name];
          const imgs = (key && data[key]?.length > 0) ? data[key] : ['/placeholder.png'];
          const count = imgs.includes('/placeholder.png') ? 'Coming Soon' : `${imgs.length} Collection${imgs.length !== 1 ? 's' : ''}`;
          return { name, count, images: imgs };
        });
        setSignaturePieces(built);
        setCurrentImageIndices(built.map(() => 0));
      })
      .catch(() => {
        const built: Category[] = DESIGNER_CATEGORIES.map(name => ({
          name,
          count: 'Coming Soon',
          images: ['/placeholder.png'],
        }));
        setSignaturePieces(built);
        setCurrentImageIndices(built.map(() => 0));
      });
  }, []);

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
    <section id="products" className="py-24 bg-[#F8F8F6]" aria-labelledby="signature-heading">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">Exquisite Craftsmanship</div>
            <h2 id="signature-heading" className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-[#1A1A1A] leading-[1.1]">
              Designer Collection
            </h2>
            <p className="sr-only">Explore Axpert Cera&apos;s exclusive designer sanitaryware collection — Vitrosa Stargold, Polo Sets, Designer One Piece Basins, and premium Table Top Basins. Luxury ceramic products manufactured in Morbi, Gujarat.</p>
          </div>
          <Link href="/catalog.pdf" download aria-label="Download Axpert Cera designer collection catalog PDF" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase text-black border-b border-black pb-1 hover:text-[#C4A484] hover:border-[#C4A484] transition-all">
            View Full Catalog
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.length === 0 ? (
            Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="bg-white p-4 h-[420px] flex flex-col border border-transparent">
                <div className="relative flex-1 mb-2 bg-[#F8F8F6] animate-pulse rounded-sm"></div>

                <div className="h-4 flex items-center justify-center gap-1.5 mb-3">
                  <div className="w-4 h-1.5 bg-[#EBEBEB] animate-pulse rounded-full"></div>
                  {Array.from({ length: 4 }).map((_, dIdx) => (
                    <div key={`dot-${dIdx}`} className="w-1.5 h-1.5 bg-[#F8F8F6] animate-pulse rounded-full"></div>
                  ))}
                </div>

                <div className="space-y-3 mt-1">
                  <div className="w-16 h-2 bg-[#F8F8F6] animate-pulse rounded-sm"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-3/5 h-5 bg-[#EBEBEB] animate-pulse rounded-sm"></div>
                    <div className="w-1/4 h-3 bg-[#F8F8F6] animate-pulse rounded-sm"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 h-[420px] group cursor-pointer flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#EBEBEB]"
                onClick={() => openModal(cat, currentImageIndices[idx] ?? 0)}
              >
                <div className="relative flex-1 overflow-hidden mb-2">
                  {idx < 4 && (
                    <div className="absolute top-3 left-3 z-10 bg-[#1A1A1A] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm shadow-sm">
                      NEW ARRIVAL
                    </div>
                  )}
                  {idx >= 4 && (
                    <div className="absolute top-3 left-3 z-10 bg-[#C4A484] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm shadow-sm">
                      BESTSELLER
                    </div>
                  )}

                  {cat.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`absolute inset-0 pt-10 pb-0 px-2 flex items-center justify-center bg-white transition-opacity duration-1000 ${imgIdx === (currentImageIndices[idx] ?? 0) ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <Image src={img} alt={`${DESIGNER_ALT[cat.name] ?? cat.name} — view ${imgIdx + 1}`} width={400} height={400} loading={imgIdx === 0 ? 'eager' : 'lazy'}
                        className="object-contain w-full h-full scale-[1.35] transition-transform duration-700 group-hover:scale-[1.45]"
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

                <div className="space-y-2">
                  <p className="text-[9px] font-bold tracking-[0.25em] text-[#C4A484] uppercase">Category</p>
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-[18px] text-[#1A1A1A] leading-tight">{cat.name}</h3>
                    <p className="text-[11px] text-[#888] font-medium">{cat.count}</p>
                  </div>
                </div>
              </div>
            )))}
        </div>
      </div>

      {/* ── Full-screen Image Modal ── */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          {/* Modal panel — stop propagation so clicks inside don't close */}
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
                  alt={`${modal.category.name} - Image ${modal.imageIndex + 1} of ${modal.category.images.length} | Axpert Cera Designer Collection Morbi`}
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

          {/* Keyboard hint */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-[11px] font-medium tracking-widest uppercase select-none">
            ← → arrow keys to navigate · esc to close
          </div>
        </div>
      )}
    </section>
  );
}

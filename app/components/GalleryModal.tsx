"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

export default function GalleryModal({ isOpen, onClose, images, title }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex flex-col bg-white overflow-hidden lg:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0EE]">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#C4A484] uppercase mb-0.5">Mobile Gallery</span>
            <h2 className="text-[14px] font-serif text-[#1A1A1A] tracking-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center text-[#1A1A1A]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 relative flex items-center justify-center bg-[#FAFAF9] p-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex items-center justify-center p-6"
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]}
                  alt={`${title} - View ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Mobile Optimized */}
          <div className="absolute inset-x-0 bottom-10 flex items-center justify-between px-8 z-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1A1A1A] border border-[#EBEBEB]"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#EBEBEB] shadow-sm">
                <span className="text-[11px] font-bold tracking-widest text-[#1A1A1A]">
                    {currentIndex + 1} / {images.length}
                </span>
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1A1A1A] border border-[#EBEBEB]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Swipe Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-[#888] font-medium tracking-tight opacity-50 uppercase tracking-[0.1em]">
            Swipe to navigate
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-8 border-t border-[#F0F0EE] bg-white text-center">
            <p className="text-[12px] text-[#666] leading-relaxed mb-6 font-sans">
                You are viewing our exclusive <span className="text-black font-semibold">{title}</span>. 
                Experience the fine details and artisan finish.
            </p>
            <a 
              href="https://wa.me/919429339212" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#1A1A1A] text-white flex items-center justify-center gap-3 py-4 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase transition-all active:scale-[0.98]"
            >
               Enquire on WhatsApp
            </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out py-4 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 font-sans font-bold text-lg tracking-[0.08em] text-navy">
          AXPERT <span className="text-[11px] font-normal tracking-[0.2em] text-text-gray uppercase">CERA</span>
        </Link>
        <ul className="hidden md:flex items-center gap-9 list-none">
          <li>
            <Link href="/" className="text-[13px] font-medium tracking-[0.05em] text-navy relative pb-[2px] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] auto after:bg-navy">
              Home
            </Link>
          </li>
          {['Products', 'Collections', 'About', 'Catalog'].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="text-[13px] font-medium tracking-[0.05em] text-navy relative pb-[2px] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-navy after:transition-all after:duration-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:gap-5">
          <button aria-label="Search" className="text-navy w-9 h-9 rounded-full flex items-center justify-center hover:bg-light-gray transition-colors"><Search size={18} strokeWidth={1.5} /></button>
          <button aria-label="Wishlist" className="hidden sm:flex text-navy w-9 h-9 rounded-full items-center justify-center hover:bg-light-gray transition-colors"><Heart size={18} strokeWidth={1.5} /></button>
          <button aria-label="Account" className="hidden sm:flex text-navy w-9 h-9 rounded-full items-center justify-center hover:bg-light-gray transition-colors"><User size={18} strokeWidth={1.5} /></button>
          <button aria-label="Cart" className="relative text-navy w-9 h-9 rounded-full flex items-center justify-center hover:bg-light-gray transition-colors">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-navy text-white text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <a href="https://wa.me/919429339212?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Axpert%20Cera%20products." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-navy w-9 h-9 rounded-full flex items-center justify-center hover:bg-light-gray hover:text-[#25D366] transition-colors ml-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer bubble outline matching lucide-react 1.5 stroke */}
              <path d="M12 2a10 10 0 0 1 10 10c0 1.63-.39 3.17-1.08 4.53l1.08 4.47-4.47-1.08c-1.36.69-2.9 1.08-4.53 1.08a10 10 0 0 1-10-10A10 10 0 0 1 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Inner phone solid fill */}
              <path d="M16.01 14.48c-.28-.14-1.63-.8-1.89-.89s-.45-.14-.64.14-.73.89-.89 1.07-.33.2-.61.06a7.7 7.7 0 0 1-2.28-1.4 8.5 8.5 0 0 1-1.57-1.95c-.17-.28-.02-.43.12-.57s.28-.33.42-.5.19-.28.28-.47-.05-.36-.14-.5-.73-1.74-1-2.39c-.26-.64-.53-.55-.73-.56h-.62s-.42.06-.71.37-1.08 1.06-1.08 2.58 1.11 2.99 1.26 3.19 2.18 3.33 5.29 4.67c.74.32 1.31.51 1.76.65.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.19s.21-1.1.15-1.19-.21-.14-.49-.28z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

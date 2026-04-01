"use client";
import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [catalogItems, setCatalogItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    fetch('/api/category-images')
      .then(res => res.json())
      .then(data => {
        setCatalogItems(Object.keys(data));
      })
      .catch(() => { });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" onClick={() => { setActiveItem('Home'); setSearchOpen(false); }} className="flex items-baseline gap-1 font-sans font-bold text-xl tracking-[0.1em] text-navy">
            AXPERT <span className="text-[12px] font-normal tracking-[0.25em] text-text-gray uppercase">CERA</span>
          </Link>
          <ul className="hidden lg:flex items-center gap-10 list-none">
            {[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '#products' },
              { label: 'Collections', href: '#collections' },
              { label: 'About', href: '#about' },
              { label: 'Catalog', href: '#catalog' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`text-[13px] font-semibold tracking-[0.08em] text-navy relative pb-[4px] decoration-none transition-colors hover:text-navy-light ${activeItem === item.label ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-navy' : ''
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 md:gap-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-navy p-2 hover:bg-light-gray rounded-full transition-all duration-300"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <div className="hidden sm:flex items-center gap-4">
              <button className="text-navy p-2 hover:bg-light-gray rounded-full transition-all" aria-label="Favorites"><Heart size={20} strokeWidth={1.5} /></button>
              <button className="text-navy p-2 hover:bg-light-gray rounded-full transition-all" aria-label="Profile"><User size={20} strokeWidth={1.5} /></button>
            </div>

            <button className="relative text-navy p-2 hover:bg-light-gray rounded-full transition-all" aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 bg-navy text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>

            <a href="https://wa.me/919429339212?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Axpert%20Cera%20products." target="_blank" rel="noopener noreferrer" className="text-navy p-2 hover:bg-light-gray hover:text-[#25D366] rounded-full transition-all group" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.511-2.96-2.626-.087-.115-.708-.941-.708-1.797 0-.856.448-1.274.607-1.446.16-.171.347-.214.464-.214.118 0 .234.002.336.006.107.005.252-.04.395.302.144.347.491 1.196.533 1.284.045.087.073.189.014.305-.057.115-.088.19-.174.289-.087.101-.183.226-.26.303-.093.093-.191.194-.081.385.111.191.491.808 1.056 1.312.729.648 1.343.85 1.534.942.191.092.303.077.417-.053.114-.13.491-.569.622-.764.131-.194.262-.163.443-.097.182.067 1.155.545 1.352.643.197.099.328.146.375.228.046.082.046.475-.101.88z" />
                <path d="M12.036 0C5.405 0 .015 5.391.012 12.02c0 2.119.541 4.186 1.571 6.014L0 24l6.135-1.61c1.765.962 3.754 1.47 5.795 1.47h.01c6.626 0 12.023-5.392 12.026-12.022a12.01 12.01 0 00-3.522-8.502A11.95 11.95 0 0012.036 0zm0 21.06h-.008a9.03 9.03 0 01-4.603-1.263l-.33-.196-3.424.898.913-3.34-.215-.342a9.02 9.02 0 01-1.383-4.814c.001-4.99 4.06-9.049 9.053-9.049 2.417 0 4.69 1.01 6.398 2.651a9.03 9.03 0 012.647 6.4c-.003 4.992-4.062 9.053-9.048 9.053z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Dedicated Search Component */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        catalogItems={catalogItems}
      />
    </>
  );
}

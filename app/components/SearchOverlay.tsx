"use client";
import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  catalogItems: { id: string, image: string }[];
}

const NAME_FORMAT_MAP: Record<string, string> = {
  'onepiecebasin': 'One Piece Basin',
  'onepiecetoilet': 'One Piece Toilet',
  'panurinal': 'Pan & Urinal',
  'pedestalwashbasin': 'Pedestal Wash Basin',
  'tabletopbasin': 'Table Top Basin',
  'wallhungtoilet': 'Wall Hung Toilet',
  'designeronepiecebasin': 'Designer One Piece Basin',
  'vitrosastargoldset': 'Vitrosa Stargold Set',
  'poloset': 'Polo Set',
  'minipoloset': 'Mini Polo Set',
  'bigsterlingset': 'Bigsterling Set',
  'designertabletop': 'Designer Table Top',
  'washbasin': 'Wash Basin',
  'rusticseries': 'Rustic Series',
};

export default function SearchOverlay({ isOpen, onClose, catalogItems }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ id: string, image: string }[]>([]);

  // Lock body scroll when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = catalogItems.filter(item =>
        item.id.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, catalogItems]);

  if (!isOpen) return null;

  const formatName = (name: string) => {
    const lower = name.toLowerCase();
    return NAME_FORMAT_MAP[lower] || name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };

  const handleLinkClick = (e: React.MouseEvent, item: string) => {
    onClose();
    const formatted = formatName(item);
    const targetId = formatted.toLowerCase().includes('designer') ? "products" : "collections";
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-white animate-in slide-in-from-top duration-500 overflow-hidden">
      {/* Search Header - Pulled Up */}
      <div className="w-full border-b border-[#F0F0EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-navy font-bold text-lg tracking-tight">
            <Search size={18} className="text-[#C4A484]" />
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Catalog search</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F5F5F3] flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#FAFAF9] custom-scrollbar">
        <div className="max-w-[1100px] mx-auto px-5 py-8 md:py-12">

          {/* Main Input - More compact */}
          <div className="relative mb-10 md:mb-14">
            <input
              type="text"
              autoFocus
              placeholder="Search by category or collection..."
              className="w-full text-[clamp(18px,3.5vw,36px)] font-serif font-normal text-navy bg-transparent outline-none placeholder:text-gray-200 py-3"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C4A484] transition-all duration-700 ${query ? 'w-full' : 'w-12 opacity-30'}`}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Results Grid */}
            <div className="lg:col-span-3">
              <div className="text-[9px] font-bold tracking-[0.25em] text-text-gray/60 uppercase mb-6 flex items-center gap-2">
                <TrendingUp size={12} className="text-[#C4A484]" />
                {query ? 'Results found' : 'Explore popular'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(query ? suggestions : catalogItems.slice(0, 10)).map((item, idx) => (
                  <Link
                    key={idx}
                    href={formatName(item.id).toLowerCase().includes('designer') ? "#products" : "#collections"}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="group bg-white p-4.5 rounded-lg border border-[#EEE] hover:border-[#C4A484] hover:shadow-xl hover:shadow-[#C4A484]/5 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-11 h-11 bg-[#FAFAF9] rounded-md flex items-center justify-center overflow-hidden border border-[#F5F5F3] relative p-1 group-hover:bg-white transition-colors duration-300">
                      {item.image ? (
                        <div className="w-full h-full relative rounded overflow-hidden">
                          <img src={item.image} alt={formatName(item.id)} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      ) : (
                        <Search size={14} className="text-[#CCC]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[13px] font-semibold text-navy capitalize group-hover:text-navy-light transition-colors leading-tight">
                        {formatName(item.id)}
                      </h4>
                      <p className="text-[8px] font-bold text-[#C4A484] uppercase tracking-widest mt-1">View collection</p>
                    </div>
                  </Link>
                ))}
              </div>

              {query && suggestions.length === 0 && (
                <div className="py-16 text-center">
                  <p className="font-serif text-lg text-navy/40">No matching ceramics found</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 border-l border-gray-100 pl-4 hidden lg:block">
              <div>
                <h5 className="text-[9px] font-bold tracking-[0.2em] text-navy/60 uppercase border-b border-[#EEE] pb-3.5 mb-5">Shortcuts</h5>
                <ul className="space-y-3">
                  {['Designer Collection', 'One Piece Toilets', 'Water Closets'].map((link) => (
                    <li key={link}>
                      <Link
                        href={link.toLowerCase().includes('designer') ? "#products" : "#collections"}
                        onClick={(e) => handleLinkClick(e, link)}
                        className="text-[12px] font-medium text-text-gray hover:text-[#C4A484] transition-colors flex items-center justify-between group"
                      >
                        {link}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-xl text-white relative overflow-hidden">
                <p className="text-[8px] font-bold tracking-[0.2em] text-[#C4A484] mb-1.5 uppercase">Catalog</p>
                <h4 className="font-serif text-[15px] mb-4 leading-snug">Download {new Date().getFullYear()} PDF</h4>
                <Link href="/catalog.pdf" download className="inline-flex items-center gap-2 border border-white/20 px-3.5 py-2 rounded text-[9px] font-bold uppercase tracking-widest hover:bg-[#C4A484] hover:border-[#C4A484] transition-all">
                  Download
                </Link>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 -translate-y-10 translate-x-10 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

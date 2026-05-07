'use client';

import React from 'react';
import { MessageCircle, Download } from 'lucide-react';

const QuickActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-black/5 px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <a
        href="https://wa.me/919429339212?text=Hello%20Axpert%20Cera%20Sales%20Team,%20I%20am%20interested%20in%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-transform active:scale-95"
      >
        <MessageCircle size={18} fill="currentColor" />
        WhatsApp Inquiry
      </a>
      <a
        href="/catalog.pdf"
        download
        className="flex-1 bg-black text-white flex items-center justify-center gap-2 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase transition-transform active:scale-95"
      >
        <Download size={18} />
        Download Catalog
      </a>
    </div>
  );
};

export default QuickActionBar;

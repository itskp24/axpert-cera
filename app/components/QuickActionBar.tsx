'use client';

import React from 'react';
import { MessageCircle, Download } from 'lucide-react';

const QuickActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-lg border-t border-black/5 px-3 py-3 flex gap-2 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href="https://wa.me/919429339212?text=Hello%20Axpert%20Cera%20Sales%20Team,%20I%20am%20interested%20in%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-1.5 py-3 rounded-full text-[10px] font-bold tracking-[0.05em] uppercase transition-transform active:scale-95 whitespace-nowrap px-2"
      >
        <MessageCircle size={16} fill="currentColor" />
        WhatsApp Inquiry
      </a>
      <a
        href="/catalog.pdf"
        download
        className="flex-1 bg-black text-white flex items-center justify-center gap-1.5 py-3 rounded-full text-[10px] font-bold tracking-[0.05em] uppercase transition-transform active:scale-95 whitespace-nowrap px-2"
      >
        <Download size={16} />
        Download Catalog
      </a>
    </div>
  );
};

export default QuickActionBar;

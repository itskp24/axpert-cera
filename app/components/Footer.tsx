import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const CATEGORY_LINKS = [
  { label: 'One Piece Toilet', href: '/#collections' },
  { label: 'Pedestal Wash Basin', href: '/#collections' },
  { label: 'One Piece Basin', href: '/#collections' },
  { label: 'Wall Hung Toilet', href: '/#collections' },
  { label: 'Water Closet', href: '/#collections' },
  { label: 'Table Top Basin', href: '/#collections' },
  { label: 'Wall Mount Wash Basin', href: '/#collections' },
  { label: 'Pan & Urinal', href: '/#collections' },
  { label: 'Designer Collection', href: '/#products' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-8 text-white" aria-label="Site Footer">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" aria-label="Axpert Cera Home" className="flex items-baseline gap-1 font-sans font-bold text-lg tracking-[0.08em] text-white mb-4">
              AXPERT <span className="text-[11px] font-normal tracking-[0.2em] text-white/40 uppercase">CERA</span>
            </Link>
            <p className="text-[13px] leading-[1.75] text-white/50 mb-4 max-w-[240px]">
              Premium sanitaryware manufacturer in Gujarat, India - crafting ISO-certified ceramic products since 2019.
            </p>
            <p className="text-[11px] text-white/30 mb-7 max-w-[240px]">
              Serving Morbi · Rajkot · Ahmedabad · Gandhinagar · Surat · Vadodara · Chotila · SurendraNagar & across India
            </p>
            <div className="flex gap-3.5">
              <a href="#" aria-label="Follow Axpert Cera on Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Follow Axpert Cera on Twitter/X" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://www.indiamart.com/axpert-cera/" target="_blank" rel="noopener noreferrer" aria-label="Visit Axpert Cera on IndiaMART" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2zm-4 4h2v6H7zm8 0h2v6h-2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products - first 5 */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Product Categories</h4>
            <ul className="flex flex-col gap-3">
              {CATEGORY_LINKS.slice(0, 5).map((cat) => (
                <li key={cat.label}>
                  <Link href={cat.href} className="text-[13px] text-white/65 hover:text-white transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - remaining */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">More Products</h4>
            <ul className="flex flex-col gap-3">
              {CATEGORY_LINKS.slice(5).map((cat) => (
                <li key={cat.label}>
                  <Link href={cat.href} className="text-[13px] text-white/65 hover:text-white transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 mt-8">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#about" className="text-[13px] text-white/65 hover:text-white transition-colors">About Us</Link></li>
              <li>
                <Link href="/catalog.pdf" download aria-label="Download Axpert Cera Product Catalog PDF" className="text-[13px] text-white/65 hover:text-white transition-colors">
                  Download Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/65 text-[13px] leading-[1.5]">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Axpert+Cera+Gugliyana+Than+Gujarat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Gugliyana, Near Gugliyana Bus Stop,<br />
                    Than Chotila Road, Than,<br />
                    SurendraNagar - Gujarat 363530
                  </a>
                </address>
              </div>
              <div className="flex gap-3 text-white/65 text-[13px] flex-col">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" aria-hidden="true" />
                  <a href="tel:+919429339212" className="hover:text-white transition-colors">
                    +91 94293 39212 (Ravi Kanzariya)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/65 text-[13px]">
                <Mail size={16} className="text-gold shrink-0" aria-hidden="true" />
                <a href="mailto:Kanjariya.ravi@yahoo.com" className="hover:text-white transition-colors">
                  Kanjariya.ravi@yahoo.com
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919429339212?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Axpert%20Cera%20products."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Axpert Cera on WhatsApp"
                className="inline-flex items-center gap-2 mt-2 text-[12px] font-semibold text-[#25D366] hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.511-2.96-2.626-.087-.115-.708-.941-.708-1.797 0-.856.448-1.274.607-1.446.16-.171.347-.214.464-.214.118 0 .234.002.336.006.107.005.252-.04.395.302.144.347.491 1.196.533 1.284.045.087.073.189.014.305-.057.115-.088.19-.174.289-.087.101-.183.226-.26.303-.093.093-.191.194-.081.385.111.191.491.808 1.056 1.312.729.648 1.343.85 1.534.942.191.092.303.077.417-.053.114-.13.491-.569.622-.764.131-.194.262-.163.443-.097.182.067 1.155.545 1.352.643.197.099.328.146.375.228.046.082.046.475-.101.88z" />
                  <path d="M12.036 0C5.405 0 .015 5.391.012 12.02c0 2.119.541 4.186 1.571 6.014L0 24l6.135-1.61c1.765.962 3.754 1.47 5.795 1.47h.01c6.626 0 12.023-5.392 12.026-12.022a12.01 12.01 0 00-3.522-8.502A11.95 11.95 0 0012.036 0zm0 21.06h-.008a9.03 9.03 0 01-4.603-1.263l-.33-.196-3.424.898.913-3.34-.215-.342a9.02 9.02 0 01-1.383-4.814c.001-4.99 4.06-9.049 9.053-9.049 2.417 0 4.69 1.01 6.398 2.651a9.03 9.03 0 012.647 6.4c-.003 4.992-4.062 9.053-9.048 9.053z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/35">
            &copy; {new Date().getFullYear()} Axpert Cera - Premium Sanitaryware Manufacturer, Gujarat, India. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-7">
            <Link href="#" className="text-[12px] text-white/35 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[12px] text-white/35 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[12px] text-white/35 hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

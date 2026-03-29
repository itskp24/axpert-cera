import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-8 text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-baseline gap-1 font-sans font-bold text-lg tracking-[0.08em] text-white mb-4">
              AXPERT <span className="text-[11px] font-normal tracking-[0.2em] text-white/40 uppercase">CERA</span>
            </Link>
            <p className="text-[13px] leading-[1.75] text-white/50 mb-7 max-w-[220px]">
              Defining modern luxury through minimalist design and superior ceramic engineering.
            </p>
            <div className="flex gap-3.5">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Washbasins</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Water Closets</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Bathtubs</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Faucets & Showers</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link href="#" className="text-[13px] text-white/65 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/65 text-[13px] leading-[1.5]">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>Morbi, Gujarat<br />India 363641</span>
              </div>
              <div className="flex gap-3 text-white/65 text-[13px] flex-col">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+91 94293 39212 (Ravi Kanzariya)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/65 text-[13px]">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@axpertcera.com" className="hover:text-white transition-colors">info@axpertcera.com</a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/35">
            &copy; {new Date().getFullYear()} Axpert Cera. All rights reserved.
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

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { LATEST_COLLECTION_YEAR } from '../utils/constants';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/send-catalog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Your catalog has been sent to your email! (Check your spam if not found)');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setMessage('Network error. Please check your connection.');
    }
  };

  return (
    <section id="catalog" className="py-24 bg-white text-center" aria-labelledby="catalog-heading">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484] mb-4">
          Free Download
        </p>

        <h2 id="catalog-heading" className="font-serif text-[clamp(28px,3vw,40px)] font-normal text-navy-dark mb-3">
          Request the Axpert Cera Catalog
        </h2>

        <p className="text-[14px] text-text-gray max-w-[520px] mx-auto mb-5 leading-[1.7]">
          Get our complete {LATEST_COLLECTION_YEAR} product catalog - featuring One Piece Toilets, Pedestal Wash Basins,
          Wall Hung Toilets, Water Closets, Table Top Basins, Designer Collections and more.
          Trusted by dealers and buyers across India.
        </p>

        {/* Direct PDF download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="bg-navy text-white px-10 py-4 text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-navy-light transition-colors"
          >
            Go to Home Page
          </Link>
          <a
            href="https://wa.me/919429339212?text=Hello,%20I%20would%20like%20to%20request%20the%20Axpert%20Cera%20product%20catalog."
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Request Axpert Cera catalog on WhatsApp"
            className="border-[1.5px] border-navy text-navy px-10 py-4 text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-navy hover:text-white transition-all"
          >
            Request via WhatsApp
          </a>
        </div>

        {/* Email subscription */}
        <p className="text-[12px] text-text-gray mb-4">Or receive the catalog link directly in your inbox:</p>
        
        <div className="max-w-[480px] mx-auto">
          <form 
            onSubmit={handleSubmit} 
            className={`flex flex-col sm:flex-row border-[1.5px] rounded-sm overflow-hidden transition-all duration-300 ${
              status === 'error' ? 'border-red-500' : 'border-border'
            } focus-within:border-navy`}
          >
            <label htmlFor="catalog-email" className="sr-only">Email address to receive Axpert Cera catalog</label>
            <input
              type="email"
              id="catalog-email"
              name="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 text-[13px] font-sans border-none outline-none bg-white text-text-dark placeholder:text-text-gray"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              className="bg-navy text-white px-7 py-4 text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-navy-light transition-colors whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={14} />
                  Sending...
                </>
              ) : 'Send Catalog'}
            </button>
          </form>

          {/* Feedback Messages */}
          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-600 text-[13px] animate-in fade-in slide-in-from-top-2">
              <CheckCircle size={16} />
              <span>{message}</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-500 text-[13px] animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} />
              <span>{message}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}


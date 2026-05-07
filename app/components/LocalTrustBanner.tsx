'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocalTrustBanner = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  const majorCities = [
    // Gujarat (Priority)
    'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Morbi', 'Gandhinagar', 'Bhavnagar', 'Jamnagar',
    // Neighboring States (Maharashtra, Rajasthan, MP)
    'Mumbai', 'Pune', 'Nashik', 'Jaipur', 'Udaipur', 'Indore', 'Bhopal',
    // Pan-India Metros
    'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata'
  ];

  const phrases = [
    'Preferred Choice for Luxury Bathrooms',
    'Leading the Legacy of Ceramic Excellence',
    'Redefining Luxury Living Spaces',
    'The Pinnacle of Sanitary Innovation',
    'Trusted Partner for Premium Projects'
  ];

  // Timer for Cities - Continuous Shuffle (3 seconds)
  useEffect(() => {
    const cityTimer = setInterval(() => {
      setCityIndex((prev) => (prev + 1) % majorCities.length);
    }, 3000);
    return () => clearInterval(cityTimer);
  }, [majorCities.length]);

  // Timer for Phrases - Shuffle every 2 minutes (120000ms)
  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 120000);
    return () => clearInterval(phraseTimer);
  }, [phrases.length]);

  return (
    <div className="bg-[#1A1A1A] py-3 overflow-hidden border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 text-center">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#C4A484]" />
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.8 }}
                className="whitespace-nowrap"
              >
                {phrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="hidden md:inline mx-1">in</span>
          </div>
          
          <div className="w-[120px] md:w-[150px] relative h-[20px] overflow-hidden text-[#C4A484]">
            <AnimatePresence mode="wait">
              <motion.span
                key={cityIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex items-center justify-center md:justify-start whitespace-nowrap"
              >
                {majorCities[cityIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTrustBanner;

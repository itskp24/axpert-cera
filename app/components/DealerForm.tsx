'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function DealerForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Axpert Cera Sales Team,%0A%0AI am interested in becoming a dealer. Here are my details:%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Business Details:* ${encodeURIComponent(formData.details)}`;
    
    const whatsappUrl = `https://wa.me/919429339212?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-[#E8E8E6] p-10 md:p-16 rounded-sm shadow-sm">
      <h2 className="font-serif text-[28px] mb-8 text-center">Dealer Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#888]">Full Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EEEEEE] focus:border-[#C4A484] outline-none transition-colors" 
            placeholder="John Doe" 
            required 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#888]">City</label>
            <input 
              type="text" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EEEEEE] focus:border-[#C4A484] outline-none transition-colors" 
              placeholder="e.g. Mumbai" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#888]">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EEEEEE] focus:border-[#C4A484] outline-none transition-colors" 
              placeholder="+91" 
              required 
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#888]">Your Business Details</label>
          <textarea 
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4} 
            className="w-full px-4 py-3 bg-[#F9F9F9] border border-[#EEEEEE] focus:border-[#C4A484] outline-none transition-colors" 
            placeholder="Tell us about your current business and location preference..." 
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C4A484] transition-colors">
          Submit & Open WhatsApp
        </button>
      </form>
      <p className="mt-8 text-center text-[12px] text-[#888]">
        Or call our dealership hotline: <a href="tel:+919429339212" className="text-black font-bold">+91 94293 39212</a>
      </p>
    </div>
  );
}

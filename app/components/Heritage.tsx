import React from 'react';
import Image from 'next/image';

export default function Heritage() {
  return (
    <section id="about" className="py-24 bg-navy-dark text-white relative overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left: Cinematic Broad Gallery */}
          <div className="lg:col-span-6 xl:col-span-7 relative w-full">
             <div className="flex flex-col gap-4 md:gap-6 w-full">
                 
                 {/* Main Broad Image */}
                 <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden shadow-2xl rounded-[4px] group">
                    <Image 
                      src="https://res.cloudinary.com/dbuexdwty/image/upload/images/process/process3.png" 
                      alt="Axpert Manufacturing Plant" 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]" 
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                 </div>
                 
                 {/* Secondary Images Row */}
                 <div className="grid grid-cols-2 gap-4 md:gap-6">
                     <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-[4px] group">
                        <Image 
                          src="https://res.cloudinary.com/dbuexdwty/image/upload/images/process/process1.png" 
                          alt="Precision Crafting" 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]" 
                          sizes="(max-width: 1024px) 50vw, 30vw"
                        />
                     </div>
                     <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-[4px] group">
                        <Image 
                          src="https://res.cloudinary.com/dbuexdwty/image/upload/images/process/process2.png" 
                          alt="Quality Formatting" 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]" 
                          sizes="(max-width: 1024px) 50vw, 30vw"
                        />
                     </div>
                 </div>

             </div>
          </div>

          {/* Right: Elegant Typography */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#C4A484]"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C4A484]">The Process</span>
            </div>
            
            <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-normal mb-8 leading-[1.05] text-white">
              About Axpert <br className="hidden md:block"/>
              <span className="text-white/40 italic">Ceramic.</span>
            </h2>
            
            <div className="flex flex-col gap-6 text-[15px] leading-[1.8] text-white/70 font-light mb-12">
              <p>
                 Axpert Ceramic is a Gujarat-based leading sanitaryware manufacturer established in 2019. We offer a wide range of premium sanitaryware products including one piece toilets, wash basins, wall hung closets, designer basins, and urinals.
              </p>
              <p>
                 With ISO-certified quality and modern designs, we deliver products that combine durability, elegance, and international standards. Our mission is to provide high-quality sanitaryware products with modern design, superior durability, and affordable pricing while maintaining customer satisfaction.
              </p>
              
              <div className="mt-4 pl-6 border-l w-full border-[#C4A484]">
                  <p className="font-serif italic text-[20px] text-white/90 leading-snug">
                    "Handcrafted Luxury, International Standards."
                  </p>
              </div>
            </div>

            <div>
              <button className="group inline-flex items-center gap-4 bg-white text-navy-dark px-8 py-4 text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-[#C4A484] hover:text-white transition-all duration-500">
                Discover Our Vision
                <span className="w-8 h-[1px] bg-navy-dark group-hover:bg-white group-hover:w-12 transition-all duration-500"></span>
              </button>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

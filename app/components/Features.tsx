import React from 'react';
import { Award, Package, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />,
      title: "ISO Certified Quality",
      description: "Manufactured with certified precision, ensuring every product meets rigorous quality benchmarks since 2019."
    },
    {
      icon: <Package className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />,
      title: "125+ Product Range",
      description: "A comprehensive catalog of modern, luxury sanitary solutions designed for elegant and affordable bathrooms."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />,
      title: "International Standards",
      description: "Handcrafted luxury combined with global leading standards across our strong national dealer network."
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start group px-4">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg text-navy-dark mb-3 font-medium">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-gray-600 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

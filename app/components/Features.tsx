import React from 'react';
import { Award, Package, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} aria-hidden="true" />,
      title: "ISO Certified Quality",
      description: "Every Axpert Cera sanitaryware product is manufactured with ISO-certified precision — from one piece toilets and wash basins to wall hung closets, meeting rigorous international benchmarks since 2019."
    },
    {
      icon: <Package className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} aria-hidden="true" />,
      title: "125+ Product Range",
      description: "A comprehensive catalog of ceramic sanitaryware including One Piece Toilets, Pedestal Basins, Table Top Basins, Water Closets, Wall Hung Toilets, and Designer Collections — crafted for modern bathrooms."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} aria-hidden="true" />,
      title: "Serving Gujarat & All India",
      description: "Based in Gujarat and serving dealers across Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar, and pan-India. Axpert Cera combines handcrafted luxury with a strong national dealer network."
    }
  ];

  return (
    <section className="py-20 bg-light-gray" aria-labelledby="features-heading">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        <h2 id="features-heading" className="sr-only">
          Why Choose Axpert Cera — ISO Certified Sanitaryware Manufacturer in Morbi, Gujarat
        </h2>
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

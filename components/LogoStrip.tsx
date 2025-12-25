
import React from 'react';

const LogoStrip: React.FC = () => {
  const logos = [
    'LogoIpsum', 'Flash', 'Oasis', 'Quant', 'Vibe', 'Nexa'
  ];

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 rounded bg-gray-900 group-hover:bg-black" />
              <span className="font-bold text-lg tracking-tight group-hover:text-black">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;

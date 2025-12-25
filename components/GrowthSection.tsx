
import React from 'react';
import { Button } from './ui/Button';

const GrowthSection: React.FC = () => {
  return (
    <section className="py-24 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">How Digital Marketing Services</div>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight font-heading">Driving business growth</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
            <p>
              Digital marketing services provide businesses of all sizes with an opportunity 
              to market their brand 24/7 at a low cost. From startups to medium-sized enterprises 
              to multiple-location companies.
            </p>
            <p>
              Hiring an internet marketing agency is one of the best ways to reach your 
              prospects while maintaining a robust relationship with your existing clients. 
              As long as your business has a strong digital presence.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8">
            Learn More
          </Button>
        </div>
        
        <div className="flex-1 w-full">
          <div className="rounded overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              alt="Growth Chart" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;


import React from 'react';
import { Button } from './ui/Button';

const LargeCTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-[40px] py-24 px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-medium max-w-4xl mx-auto mb-12 leading-tight font-heading">
          Grow Your Client Base With Data-Driven and Targeted Strategies
        </h2>
        <Button size="lg" className="rounded-full px-12 h-14 text-base font-semibold">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default LargeCTA;

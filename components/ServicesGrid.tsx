
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Through careful keyword research and white hat SEO practices...',
      bg: 'bg-gray-50'
    },
    {
      title: 'Custom Website Design',
      desc: 'Capture your target audiences’ attention with a professional custom web design...',
      bg: 'bg-[#fcf8f7]'
    },
    {
      title: 'Web Design & Development',
      desc: 'Thrive builds custom, mobile-ready and search engine optimized websites...',
      bg: 'bg-gray-50'
    },
    {
      title: 'Social Media Marketing',
      desc: 'Ready to expand and market to your audiences on social media?',
      bg: 'bg-gray-50'
    },
    {
      title: 'Pay Per Click (PPC) Management',
      desc: 'Reach your customers quickly and with precision with a data-driven PPC campaign.',
      bg: 'bg-[#fef7ec]'
    },
    {
      title: 'Online Reputation Management',
      desc: 'Your reviews and online reputation can make or break your success online.',
      bg: 'bg-[#fffeef]'
    }
  ];

  return (
    <section className="py-24 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Digital Marketing Services</div>
            <h2 className="text-4xl md:text-5xl font-medium font-heading">Building brand recognition</h2>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className={cn("p-10 rounded flex flex-col justify-between min-h-[300px]", service.bg)}>
              <div>
                <h3 className="text-2xl font-medium mb-4 leading-tight font-heading">{service.title}</h3>
                <p className="text-gray-500 mb-8">{service.desc}</p>
              </div>
              <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-black w-fit hover:text-gray-600 hover:border-gray-600 transition-colors">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

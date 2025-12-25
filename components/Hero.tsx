
import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 bg-grid overflow-hidden">
      {/* Background Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge variant="outline" className="mb-8 py-1.5 px-4 cursor-pointer hover:bg-gray-50 group">
          <span className="flex items-center">
            100% Lead Guaranteed | For all your business needs
            <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.1] font-heading">
          Digital Marketing <br /> Services
        </h1>
        
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Through careful keyword research and white hat SEO practices, we can help you 
          achieve higher organic rankings and increased visibility in search results.
        </p>
        
        <Button size="lg" className="rounded-full px-10 shadow-none">
          Free Proposal
        </Button>
      </div>
    </section>
  );
};

export default Hero;

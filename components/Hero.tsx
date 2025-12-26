
import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { MoveRight } from 'lucide-react';
import BlurText from './ui/BlurText';
import CircularText from './ui/CircularText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 bg-grid overflow-hidden">
      {/* Radial Gradient Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_white_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="animate-fade-in-up flex flex-col items-center">
          <CircularText 
            text="KISSLEAD • STRATEGY • GROWTH • PERFORMANCE • " 
            radius={70} 
            fontSize={9} 
            spinDuration={25}
            className="mb-[-40px]" // Negative margin to overlap slightly or sit close to badge
          />
          <Badge variant="outline" className="mb-8 py-2 pl-4 pr-5 cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group bg-white/50 backdrop-blur-sm border-gray-200">
            <span className="flex items-center text-xs font-semibold tracking-wide text-gray-600 group-hover:text-gray-900">
              100% Lead Guaranteed | For all your business needs
              <MoveRight className="ml-2 w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 group-hover:text-black transition-all duration-300" />
            </span>
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.05] font-heading text-balance">
          <BlurText 
            text="Digital Marketing" 
            className="inline-block" 
            direction="bottom" 
            animationDelay={120}
          />
          <br className="hidden md:block" />
          <BlurText 
            text="Services" 
            className="inline-block" 
            direction="bottom" 
            startDelay={200}
            animationDelay={120}
          />
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light text-balance animate-fade-in-up [animation-delay:800ms] opacity-0 fill-mode-forwards">
          Through careful keyword research and white hat SEO practices, we can help you 
          achieve higher organic rankings and increased visibility in search results.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up [animation-delay:1000ms] opacity-0 fill-mode-forwards">
          <Button size="lg" className="rounded-full px-10 h-14 text-base font-medium hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto">
            Free Proposal
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-base font-medium border-gray-200 hover:bg-gray-50 w-full sm:w-auto">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

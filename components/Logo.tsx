
import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const [imgSrc, setImgSrc] = useState('/public/kisslead-logo.svg');

  return (
    <img 
      src={imgSrc}
      alt="Kisslead Logo" 
      className={cn("h-full w-auto object-contain select-none", className)}
      draggable={false}
      onError={() => {
        // Only attempt fallback if we haven't already switched
        if (imgSrc === '/public/kisslead-logo.svg') {
          setImgSrc('/public/kisslead-logo.png');
        }
      }}
    />
  );
};

export default Logo;

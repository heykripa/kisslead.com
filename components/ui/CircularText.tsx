
import React from 'react';
import { cn } from '../../lib/utils';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  radius?: number;
  fontSize?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  radius = 60,
  fontSize = 10,
  className,
}) => {
  const letters = text.split("");
  const angleStep = 360 / letters.length;

  return (
    <div 
      className={cn("relative flex items-center justify-center pointer-events-none select-none", className)} 
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div
        className="relative w-full h-full"
        style={{
          animation: `spin-slow ${spinDuration}s linear infinite`,
        }}
      >
        {letters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 origin-bottom font-bold tracking-[0.2em] uppercase text-gray-500"
            style={{
              fontSize: `${fontSize}px`,
              height: `${radius}px`,
              transform: `translateX(-50%) rotate(${i * angleStep}deg)`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircularText;


import React, { useRef, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

interface BlurTextProps {
  text: string;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationDelay?: number;
  startDelay?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationDelay = 100,
  startDelay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {elements.map((el, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            filter: inView ? 'blur(0px)' : 'blur(12px)',
            opacity: inView ? 1 : 0,
            transform: inView 
              ? 'translate3d(0,0,0)' 
              : direction === 'top' 
                ? 'translate3d(0,-40px,0)' 
                : 'translate3d(0,40px,0)',
            transitionDelay: `${startDelay + i * animationDelay}ms`,
            marginRight: animateBy === 'words' && i < elements.length - 1 ? '0.25em' : '0',
            willChange: 'transform, filter, opacity',
          }}
        >
          {el === ' ' ? '\u00A0' : el}
        </span>
      ))}
    </span>
  );
};

export default BlurText;

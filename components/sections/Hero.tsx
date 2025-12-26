"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SquircleWrapper } from "@/components/ui/SquircleWrapper"

gsap.registerPlugin(ScrollTrigger)

const PILLS = ["Yallo!", "Bliss+", "Flea", "Plus"]
const IMAGES = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-orange-400",
]

const SHAPES: ("tl" | "tr")[] = [
  "tl",
  "tr",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Visual Strips */}
      <div className="w-full overflow-hidden mb-12 h-[40vh] md:h-[50vh]">
        <motion.div
          className="flex gap-2 h-full"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {[...IMAGES, ...IMAGES].map((color, idx) => (
            <SquircleWrapper
              key={idx}
              corner={SHAPES[idx % SHAPES.length]}
              radius={80}
              className="h-full w-[45vw] md:w-[30vw] lg:w-[18vw] flex-shrink-0 relative"
            >
              <div
                className={cn(
                  "h-full w-full",
                  color
                )}
              >
                <div className="absolute inset-0 bg-black/10" />
                {/* Placeholder for actual image */}
                 <div className="absolute inset-0 flex items-center justify-center text-white font-normal opacity-50">
                    IMG {(idx % IMAGES.length) + 1}
                 </div>
              </div>
            </SquircleWrapper>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div ref={textRef} className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-8 leading-tight">
          We're Kisslead® — a creative studio cultivating bold brands, beautiful
          websites, and ideas that refuse to be ordinary.
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3">
            {PILLS.map((pill) => (
                <span key={pill} className="px-4 py-2 rounded-full border border-border text-sm font-medium bg-background/50 backdrop-blur-sm">
                    {pill}
                </span>
            ))}
        </div>
      </div>
    </section>
  )
}

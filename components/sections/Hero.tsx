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
      className="relative min-h-screen flex flex-col pt-32 pb-0 overflow-hidden"
    >
      {/* Content */}
      <div ref={textRef} className="container mx-auto px-6 text-center max-w-5xl flex-grow flex flex-col items-center justify-center pt-20">
        <h1 className="text-[18vw] md:text-[15vw] lg:text-[12vw] font-bold tracking-tighter leading-[0.75] flex items-start justify-center">
          Kisslead<span className="text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold ml-1 mt-[2vw]">®</span>
        </h1>
        <p className="text-base md:text-lg font-medium text-black/80 max-w-xl mx-auto mt-8">
          Creative studio based in the digital realm.
        </p>
      </div>

      {/* Visual Strips */}
      <div className="w-full overflow-hidden h-[35vh] md:h-[45vh] mt-auto">
        <motion.div
          className="flex gap-4 h-full"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {[...IMAGES, ...IMAGES].map((color, idx) => (
            <SquircleWrapper
              key={idx}
              corner={SHAPES[idx % SHAPES.length]}
              radius={120}
              className="h-full w-[40vw] md:w-[25vw] lg:w-[15vw] flex-shrink-0 relative"
            >
              <div
                className={cn(
                  "h-full w-full",
                  color
                )}
              >
                <div className="absolute inset-0 bg-black/5" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/40 font-normal">
                    IMG {(idx % IMAGES.length) + 1}
                 </div>
              </div>
            </SquircleWrapper>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

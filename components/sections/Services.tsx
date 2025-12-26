"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { index: "001", label: "BRANDING", desc: "We craft logos and brand systems that leave a lasting impression.", color: "#E5E1FF" },
  { index: "002", label: "DEVELOPMENT", desc: "Beautiful and functional websites built with purpose and precision.", color: "#D4FFC1" },
  { index: "003", label: "SaaS SOLUTIONS", desc: "Scalable and secure cloud-based applications designed for growth.", color: "#D1F3FF" },
  { index: "004", label: "ENTERPRISE APPS", desc: "Robust, high-performance software tailored for complex business needs.", color: "#FFF4D1" },
  { index: "005", label: "SEO OPTIMIZATION", desc: "Get found faster with tailored SEO strategies backed by real data.", color: "#FFD1D1" },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card")
      
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + (triggerRef.current?.offsetWidth || 0),
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="overflow-hidden">
        <div className="py-12 container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-normal mb-8">Our Services.</h2>
        </div>
      <div ref={triggerRef} className="flex flex-nowrap h-[60vh] items-center">
        <div className="flex gap-8 px-6 pl-[max(2rem,calc((100vw-1400px)/2))]">
            {SERVICES.map((service) => (
            <div
                key={service.index}
                className="service-card flex-none w-[80vw] md:w-[600px] h-[50vh] rounded-3xl p-12 flex flex-col justify-between transition-transform"
                style={{ backgroundColor: service.color }}
            >
                <div>
                    <span className="text-sm font-normal tracking-widest opacity-60 mb-4 block">
                        {service.index}
                    </span>
                    <div className="p-4 bg-black/10 w-fit rounded-full mb-8">
                        {/* Icon placeholder */}
                        <div className="w-8 h-8" />
                    </div>
                </div>
                
                <div>
                    <h3 className="text-3xl font-normal mb-4">{service.label}</h3>
                    <p className="text-lg opacity-80 max-w-sm">
                        {service.desc}
                    </p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Palette, Code2, Cloud, Building2, BarChart3 } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { 
    index: "001", 
    label: "BRANDING", 
    desc: "We craft logos and brand systems that leave a lasting impression.", 
    color: "#E5E1FF",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "002", 
    label: "DEVELOPMENT", 
    desc: "Beautiful and functional websites built with purpose and precision.", 
    color: "#D4FFC1",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "003", 
    label: "SaaS SOLUTIONS", 
    desc: "Scalable and secure cloud-based applications designed for growth.", 
    color: "#D1F3FF",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "004", 
    label: "ENTERPRISE APPS", 
    desc: "Robust, high-performance software tailored for complex business needs.", 
    color: "#FFF4D1",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "005", 
    label: "SEO OPTIMIZATION", 
    desc: "Get found faster with tailored SEO strategies backed by real data.", 
    color: "#FFD1D1",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
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
                className="service-card group relative flex-none w-[80vw] md:w-[600px] h-[50vh] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] bg-zinc-950"
            >
                {/* Background Image with Black Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={service.image} 
                        alt={service.label}
                        fill
                        className="object-cover opacity-70 grayscale group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                </div>

                <div className="relative z-10 p-12 flex flex-col h-full justify-between text-white">
                    <div>
                        <span className="text-sm font-normal tracking-widest opacity-40 mb-4 block">
                            {service.index}
                        </span>
                        <div className="p-4 bg-white/5 w-fit rounded-full mb-8 backdrop-blur-md group-hover:bg-white/10 transition-colors border border-white/10">
                            <service.icon className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-3xl font-normal mb-4 tracking-tight">{service.label}</h3>
                        <p className="text-lg opacity-50 max-w-sm leading-relaxed group-hover:opacity-80 transition-opacity">
                            {service.desc}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

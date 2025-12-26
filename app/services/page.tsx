"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { motion } from "framer-motion"
import DarkVeil from "@/components/backgrounds/DarkVeil"
import { ArrowRight, BarChart3, Search, Share2, MousePointer2, Layout, ShieldCheck, Users, Briefcase } from "lucide-react"
import Image from "next/image"

const SERVICES = [
  { 
    index: "001", 
    label: "Performance Marketing", 
    desc: "Where everything becomes hard to believe and only hope propels the world forward, Performance marketing is something that is driven by results.",
    features: ["Data-Driven Strategies", "ROI Focused", "Conversion Optimization", "Detailed Reporting"],
    color: "#E5E1FF",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "002", 
    label: "Search Engine Optimization", 
    desc: "The goal is to have your site appear on the first page of Google for the keywords most often used by your target demographic.",
    features: ["Keyword Strategy", "On-Page Optimization", "Technical SEO", "Link Building"],
    color: "#D4FFC1",
    icon: Search,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "003", 
    label: "Social Media Marketing", 
    desc: "With social platforms, we can help you connect with your customers, increase awareness about your brand, and boost your leads and sales.",
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Brand Awareness"],
    color: "#D1F3FF",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "004", 
    label: "Google Ads Marketing", 
    desc: "People may spend their whole careers running sponsored advertisements; there are countless of items and services to promote. Promote their services.",
    features: ["PPC Campaigns", "Display Advertising", "Shopping Ads", "Remarketing"],
    color: "#FFF4D1",
    icon: MousePointer2,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "005", 
    label: "Website Design", 
    desc: "The mission of Kisslead is to provide innovative solutions for our clients using technology, brand strategy, and creative communication.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Consistency", "Modern Aesthetics"],
    color: "#FFD1D1",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "006", 
    label: "Online Reputation Management", 
    desc: "There are many factors to consider. But with the help of the creative team at kisslead is a orm agency, you can be sure that your online presence is in good hands.",
    features: ["Brand Monitoring", "Review Management", "Crisis Management", "Positive Branding"],
    color: "#E0E0E0",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "007", 
    label: "Influencer Marketing", 
    desc: "Influencer marketing services can help your organisation acquire a greater number of consumers and give your business the ability to grow by increasing exposure.",
    features: ["Influencer Outreach", "Campaign Management", "Brand Partnerships", "Impact Analysis"],
    color: "#F3D1FF",
    icon: Users,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    index: "008", 
    label: "Business Solutions", 
    desc: "Kisslead branding agency in Comibatore constantly invests in its people, the communication systems, and its research and development initiatives.",
    features: ["Strategic Consulting", "Process Optimization", "Digital Transformation", "Custom Solutions"],
    color: "#C1FFE5",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165833767-027508013b31?q=80&w=1000&auto=format&fit=crop"
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-24 pb-0">
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="relative w-full aspect-[2/1] md:aspect-[2.4/1] rounded-2xl overflow-hidden bg-black mb-16">
             <DarkVeil hueShift={66} className="absolute inset-0 z-0 opacity-80" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 pointer-events-none text-center">
               <motion.h1 
                 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 Our Services
               </motion.h1>
               <motion.p
                 className="text-lg md:text-xl text-white/80 max-w-3xl"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               >
                 Amazing Solutions For Growth Digital Solutions. <br className="hidden md:block" />
                 At KissLead, we offer amazing solutions that pave the way for your business growth.
               </motion.p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.index}
                className="group relative rounded-3xl p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 bg-zinc-950"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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

                <div className="relative z-10 flex flex-col h-full justify-between text-white">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-normal tracking-widest opacity-40">
                                    {service.index}
                                </span>
                                <div className="p-3 bg-white/5 w-fit rounded-xl backdrop-blur-md group-hover:bg-white/10 transition-colors border border-white/10">
                                    <service.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-white" />
                            </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-normal mb-6 tracking-tight">{service.label}</h3>
                        <p className="text-lg opacity-50 mb-8 max-w-md leading-relaxed group-hover:opacity-80 transition-opacity">
                            {service.desc}
                        </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                        <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                                <li key={feature} className="text-sm font-medium opacity-40 flex items-center gap-2 group-hover:opacity-70 transition-opacity">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </motion.div>
            ))}
            
            {/* Call to Action Card */}
            <motion.div
                className="rounded-3xl p-8 md:p-12 bg-black text-white flex flex-col justify-center items-center text-center min-h-[400px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: SERVICES.length * 0.1 }}
            >
                <h3 className="text-3xl md:text-4xl font-normal mb-6">Have a project in mind?</h3>
                <p className="text-white/70 mb-8 max-w-sm">
                    Let's collaborate to build something amazing together.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                    Start a Project
                </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

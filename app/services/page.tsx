"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { motion } from "framer-motion"
import DarkVeil from "@/components/backgrounds/DarkVeil"
import { ArrowRight } from "lucide-react"

const SERVICES = [
  { 
    index: "001", 
    label: "Performance Marketing", 
    desc: "Where everything becomes hard to believe and only hope propels the world forward, Performance marketing is something that is driven by results.",
    features: ["Data-Driven Strategies", "ROI Focused", "Conversion Optimization", "Detailed Reporting"],
    color: "#E5E1FF" 
  },
  { 
    index: "002", 
    label: "Search Engine Optimization", 
    desc: "The goal is to have your site appear on the first page of Google for the keywords most often used by your target demographic.",
    features: ["Keyword Strategy", "On-Page Optimization", "Technical SEO", "Link Building"],
    color: "#D4FFC1" 
  },
  { 
    index: "003", 
    label: "Social Media Marketing", 
    desc: "With social platforms, we can help you connect with your customers, increase awareness about your brand, and boost your leads and sales.",
    features: ["Content Strategy", "Community Management", "Paid Social Ads", "Brand Awareness"],
    color: "#D1F3FF" 
  },
  { 
    index: "004", 
    label: "Google Ads Marketing", 
    desc: "People may spend their whole careers running sponsored advertisements; there are countless of items and services to promote. Promote their services.",
    features: ["PPC Campaigns", "Display Advertising", "Shopping Ads", "Remarketing"],
    color: "#FFF4D1" 
  },
  { 
    index: "005", 
    label: "Website Design", 
    desc: "The mission of Kisslead is to provide innovative solutions for our clients using technology, brand strategy, and creative communication.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Consistency", "Modern Aesthetics"],
    color: "#FFD1D1" 
  },
  { 
    index: "006", 
    label: "Online Reputation Management", 
    desc: "There are many factors to consider. But with the help of the creative team at kisslead is a orm agency, you can be sure that your online presence is in good hands.",
    features: ["Brand Monitoring", "Review Management", "Crisis Management", "Positive Branding"],
    color: "#E0E0E0" 
  },
  { 
    index: "007", 
    label: "Influencer Marketing", 
    desc: "Influencer marketing services can help your organisation acquire a greater number of consumers and give your business the ability to grow by increasing exposure.",
    features: ["Influencer Outreach", "Campaign Management", "Brand Partnerships", "Impact Analysis"],
    color: "#F3D1FF" 
  },
  { 
    index: "008", 
    label: "Business Solutions", 
    desc: "Kisslead branding agency in Comibatore constantly invests in its people, the communication systems, and its research and development initiatives.",
    features: ["Strategic Consulting", "Process Optimization", "Digital Transformation", "Custom Solutions"],
    color: "#C1FFE5" 
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
                className="group relative rounded-3xl p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col justify-between transition-transform hover:-translate-y-1"
                style={{ backgroundColor: service.color }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-sm font-normal tracking-widest opacity-60">
                            {service.index}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-normal mb-6">{service.label}</h3>
                    <p className="text-lg opacity-80 mb-8 max-w-md">
                        {service.desc}
                    </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                    <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                            <li key={feature} className="text-sm font-medium opacity-70 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                                {feature}
                            </li>
                        ))}
                    </ul>
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

"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { LogoCloud } from "@/components/sections/LogoCloud"
import { motion } from "framer-motion"
import { Globe, Award, Users, Zap } from "lucide-react"
import Image from "next/image"
import DarkVeil from "@/components/backgrounds/DarkVeil"

const STATS = [
  { value: "3m+", label: "Capital raised by brands we helped out" },
  { value: "289", label: "Brands launched through our creative process" },
  { value: "50", label: "Team members creating branding excellence" },
  { value: "97%", label: "Client satisfaction rate across all delivered work" },
]

const TEAM = [
  {
    name: "Durkesh",
    role: "CEO",
    image: "/team/durkesh.png",
  },
  {
    name: "Kripa",
    role: "Sr. Full-stack Developer",
    image: "/team/kripa.png",
  },
  {
    name: "Dhakshayani",
    role: "Customer Relationship Manager",
    image: "/team/dhakshayani.png",
  },
  {
    name: "Jagadeesh",
    role: "Full-stack Developer",
    image: "/team/jagadeesh.png",
  },
  {
    name: "Vimalpriya",
    role: "Junior Full-stack Developer",
    image: "/team/vimalpriya.png",
  },
  {
    name: "Hariharan",
    role: "Graphic Designer",
    image: "/team/hariharan.png",
  },
]

const AWARDS = [
  { name: "DesignRush", project: "Best Website", date: "Jan 2024" },
  { name: "WebFlow", project: "Site of the month", date: "Dec 2023" },
  { name: "Clutch", project: "Best B2B Agency", date: "Oct 2023" },
  { name: "Awwwards", project: "Site of the Day", date: "Jun 2023" },
  { name: "Lapa.ninja", project: "Landing Page", date: "May 2023" },
  { name: "DesignWeek", project: "Product Design", date: "Apr 2023" },
  { name: "Mindsparkle", project: "Site of the Day", date: "Feb 2023" },
  { name: "Behance", project: "Featured Interaction", date: "Jan 2023" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="pt-24 pb-0">
        <section className="container mx-auto px-4 md:px-6">
          <div className="relative w-full aspect-video md:aspect-[2.4/1] rounded-2xl overflow-hidden bg-black">
             <DarkVeil hueShift={66} className="absolute inset-0 z-0 opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center p-6 z-10 pointer-events-none">
               <motion.h1 
                 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white text-center max-w-4xl leading-tight"
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 We&apos;re Kisslead® — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
               </motion.h1>
             </div>
          </div>
          
        </section>
        <LogoCloud />

        {/* Stats Section */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <motion.div 
            className="bg-secondary/30 rounded-3xl p-8 md:p-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center text-center mb-16">
              <div className="w-12 h-12 mb-6">
                <Image src="/kisslead-logo.svg" width={48} height={48} alt="Logo" className="w-full h-full" />
              </div>
              <h2 className="text-2xl md:text-3xl font-medium max-w-2xl">
                We&apos;re Kisslead® — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-border/50 pt-12">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <span className="text-3xl md:text-4xl font-semibold flex items-start">
                    {stat.value}
                    {i === 0 && <span className="text-sm mt-1 ml-1">↓</span>} 
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 md:px-6 mb-24">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
             <div className="md:w-1/3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Team</span>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight">
                  We celebrate a study to let your goals bridge beyond expectations.
                </h2>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
             {TEAM.map((member, i) => (
               <motion.div 
                 key={i} 
                 className={`flex flex-col gap-4 ${i % 2 === 1 ? 'md:mt-24' : ''}`}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
               >
                 <div className="relative aspect-square w-full bg-secondary rounded-xl overflow-hidden">
                   <Image 
                     src={member.image} 
                     alt={member.name}
                     fill
                     className="object-cover hover:scale-105 transition-transform duration-700"
                   />
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold">{member.name}</h3>
                   <p className="text-sm text-muted-foreground">{member.role}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="container mx-auto px-4 md:px-6 mb-32">
          <div className="flex flex-col items-center text-center mb-16">
             <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Awards</span>
             <h2 className="text-2xl md:text-3xl font-medium max-w-md">
               We&apos;re proud to have won several prestigious awards over the years.
             </h2>
          </div>

          <div className="max-w-4xl mx-auto">
             {AWARDS.map((award, i) => (
               <motion.div 
                 key={i}
                 className="flex items-center justify-between py-6 border-b border-border hover:bg-secondary/20 px-4 transition-colors group cursor-default"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
               >
                 <span className="font-medium w-1/3">{award.name}</span>
                 <span className="text-muted-foreground w-1/3 text-center group-hover:text-foreground transition-colors">{award.project}</span>
                 <span className="text-muted-foreground w-1/3 text-right text-sm">{award.date}</span>
               </motion.div>
             ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

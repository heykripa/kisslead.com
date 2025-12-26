"use client"

import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const FAQ_ITEMS = [
  {
    question: "What's included in the monthly package?",
    answer: "We offer comprehensive design and development services including UI/UX design, frontend development, and ongoing maintenance."
  },
  {
    question: "How long does a project usually take?",
    answer: "Timeline varies by project scope. A typical landing page takes 1-2 weeks, while full websites may take 4-8 weeks."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes, we provide maintenance packages to ensure your site stays secure and up-to-date."
  },
  {
    question: "Can I hire you for just a logo or one-off design?",
    answer: "Absolutely! We handle both retainer-based work and specific one-off projects."
  },
  {
    question: "What platforms do you build websites on?",
    answer: "We specialize in Next.js, React, and modern headless CMS solutions, but can adapt to other stacks if needed."
  },
  {
    question: "How do payments work?",
    answer: "We typically require a 50% deposit to start, with the remaining balance due upon project completion."
  },
  {
    question: "What if I'm not happy with the first concept?",
    answer: "We include 2 rounds of revisions in our standard process to ensure the design meets your expectations."
  },
  {
    question: "Do you work with clients from any country?",
    answer: "Yes, we are a remote-first studio and work with clients globally."
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-black selection:text-white">
      <Header />
      
      <div className="pt-32 pb-12 md:pt-40 md:pb-20 px-6 container mx-auto">
        {/* Hero / Form Section */}
        <div className="mb-24">
          <div className="flex justify-between items-start mb-16">
            <div className="max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium mb-4 block"
              >
                Get in touch
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight"
              >
                Got a project in
                <br />
                mind? Let&apos;s chat
                <br />
                and bring it to life.
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex gap-4 text-xs font-medium uppercase tracking-wider"
            >
              <Link href="https://www.instagram.com/kisslead/" target="_blank" className="hover:opacity-60 transition-opacity">IG</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="https://www.facebook.com/kisslead/" target="_blank" className="hover:opacity-60 transition-opacity">FB</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="https://www.linkedin.com/company/kisslead/" target="_blank" className="hover:opacity-60 transition-opacity">LI</Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            {/* Left Column - Contact Info */}
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  href="mailto:hello@kisslead.com" 
                  className="text-xl md:text-2xl font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
                >
                  hello@kisslead.com
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl mb-8">Send a message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" className="bg-transparent border-border/40 focus:border-foreground transition-colors h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Email" className="bg-transparent border-border/40 focus:border-foreground transition-colors h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Project details" 
                      className="bg-transparent border-border/40 focus:border-foreground transition-colors min-h-[150px] resize-none" 
                    />
                  </div>

                  <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none h-14 text-sm tracking-widest uppercase mt-4">
                    Send
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-border/20 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl md:text-5xl font-normal sticky top-32">FAQ.</h2>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-border/20">
                    <AccordionTrigger className="text-lg md:text-xl py-6 font-normal hover:no-underline hover:opacity-70 transition-opacity text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base md:text-lg pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

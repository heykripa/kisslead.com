"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { NoiseBackground } from "@/components/ui/noise-background"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md">
      <Link href="/" className="flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image 
            src="/kisslead-logo.svg" 
            alt="Kisslead Logo" 
            width={120} 
            height={32} 
            className="h-8 w-auto"
            priority
          />
        </motion.div>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/about" className="text-sm font-medium hover:text-primary/70 transition-colors">
          About
        </Link>
        <Link href="/#projects" className="text-sm font-medium hover:text-primary/70 transition-colors">
          Projects
        </Link>
        <Link href="/services" className="text-sm font-medium hover:text-primary/70 transition-colors">
          Services
        </Link>
        <Link href="/#faq" className="text-sm font-medium hover:text-primary/70 transition-colors">
          FAQ
        </Link>
      </nav>
      <Link href="/contact">
        <div className="flex justify-center"> 
          <NoiseBackground 
            containerClassName="w-fit p-2 rounded-full mx-auto" 
            gradientColors={[ 
              "rgb(255, 100, 150)", 
              "rgb(100, 150, 255)", 
              "rgb(255, 200, 100)", 
            ]} 
          > 
            <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"> 
              Let&apos;s Talk &rarr; 
            </button> 
          </NoiseBackground> 
        </div>
      </Link>
    </header>
  )
}

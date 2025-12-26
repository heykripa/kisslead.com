import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md">
      <Link href="/" className="flex items-center">
        <Image 
          src="/kisslead-logo.svg" 
          alt="Kisslead Logo" 
          width={120} 
          height={32} 
          className="h-8 w-auto"
          priority
        />
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
      <Link href="#contact">
        <Button variant="default" size="sm" className="rounded-full">
          Let&apos;s Talk
        </Button>
      </Link>
    </header>
  )
}

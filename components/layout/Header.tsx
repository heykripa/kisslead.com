import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md">
      <Link href="/" className="text-2xl font-normal tracking-tight">
        Kisslead®
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#projects" className="text-sm font-medium hover:text-primary/70 transition-colors">
          Projects
        </Link>
        <Link href="#services" className="text-sm font-medium hover:text-primary/70 transition-colors">
          Services
        </Link>
        <Link href="#faq" className="text-sm font-medium hover:text-primary/70 transition-colors">
          FAQ
        </Link>
      </nav>
      <Button variant="default" size="sm" className="rounded-full">
        Let's Talk
      </Button>
    </header>
  )
}

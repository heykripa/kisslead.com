import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight max-w-lg">
              We&apos;d love to hear from you — whether you have a project in mind,
              or just want to say hi.
            </h2>
            <Link
              href="mailto:hi@kisslead.com"
              className="text-xl font-medium underline underline-offset-4 hover:text-primary/70 transition-colors"
            >
              hi@kisslead.com
            </Link>
          </div>

          <div className="lg:pl-24 space-y-8">
            <h3 className="text-xl font-normal">Join our newsletter</h3>
            <div className="flex gap-4 max-w-md">
              <Input
                placeholder="Name"
                className="bg-background border-transparent focus:border-input"
              />
              <Button>SEND</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Get the latest insights and news from our team.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8 text-sm text-muted-foreground">
          <p>© 2025 Kisslead Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

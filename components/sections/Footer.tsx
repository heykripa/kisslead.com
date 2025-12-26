import { Input } from "@/components/ui/input"
import Link from "next/link"
import { NoiseBackground } from "@/components/ui/noise-background"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/30 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight max-w-lg">
              We&apos;d love to hear from you — whether you have a project in mind,
              or just want to say hi.
            </h2>
            <Link
              href="mailto:hello@kisslead.com"
              className="text-xl font-medium underline underline-offset-4 hover:text-primary/70 transition-colors"
            >
              hello@kisslead.com
            </Link>
          </div>

          <div className="lg:pl-24 space-y-8">
            <h3 className="text-xl font-normal">Join our newsletter</h3>
            <div className="flex items-center gap-0 bg-secondary rounded-full p-1 pl-4 max-w-md border border-border/50">
              <Input
                placeholder="Name"
                className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-auto shadow-none placeholder:text-muted-foreground outline-none"
              />
              <NoiseBackground 
                containerClassName="w-fit p-1.5 rounded-full shrink-0" 
                gradientColors={[ 
                  "rgb(255, 100, 150)", 
                  "rgb(100, 150, 255)", 
                  "rgb(255, 200, 100)", 
                ]} 
              > 
                <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-6 py-2 text-sm font-medium text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"> 
                  SEND
                </button> 
              </NoiseBackground>
            </div>
            <p className="text-sm text-muted-foreground">
              Get the latest insights and news from our team.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8 text-sm text-muted-foreground">
          <p>© 2025 Kisslead Technologies. All rights reserved.</p>
          
          <div className="flex gap-6 my-4 md:my-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/payments" className="hover:text-primary transition-colors">
              Payments
            </Link>
            <Link href="/refund" className="hover:text-primary transition-colors">
              Refund
            </Link>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/kisslead/" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/kisslead/" className="hover:text-primary transition-colors">
              Facebook
            </Link>
            <Link href="https://www.linkedin.com/company/kisslead/" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

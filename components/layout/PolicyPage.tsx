import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"

interface PolicyPageProps {
  title: string
  children: React.ReactNode
}

export function PolicyPage({ title, children }: PolicyPageProps) {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-black selection:text-white flex flex-col">
      <Header />
      <div className="flex-grow pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-medium mb-12 tracking-tight">{title}</h1>
        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  )
}

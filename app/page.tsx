import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Services } from "@/components/sections/Services"
import { Stats } from "@/components/sections/Stats"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  )
}

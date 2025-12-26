import Image from "next/image"
import { cn } from "@/lib/utils"

const PROJECTS = [
  { id: 1, title: "THINGSY", category: "Branding", image: "/latest-projects/latest-projects-1.png", year: "2025", color: "bg-stone-200" },
  { id: 2, title: "LUNAR", category: "Web Design", image: "/latest-projects/latest-projects-2.png", year: "2025", color: "bg-sky-200" },
  { id: 3, title: "KROMA", category: "Creative Direction", image: "/latest-projects/latest-projects-3.png", year: "2025", color: "bg-rose-200" },
  { id: 4, title: "ASTERISK", category: "UI/UX", image: "/latest-projects/latest-projects-4.png", year: "2025", color: "bg-indigo-200" },
  { id: 5, title: "ZENITH", category: "Mobile App", image: "/latest-projects/latest-projects-5.png", year: "2025", color: "bg-emerald-200" },
  { id: 6, title: "ORBIT", category: "Brand Identity", image: "/latest-projects/latest-projects-6.png", year: "2025", color: "bg-amber-200" },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-normal">Latest Projects.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className={cn("aspect-square rounded-2xl mb-4 overflow-hidden relative", project.color)}>
               <Image
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-normal mb-1">{project.title}</h3>
                <p className="text-muted-foreground">{project.category}</p>
              </div>
              <span className="text-sm font-medium px-3 py-1 border rounded-full">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"

const PROJECTS = [
  { id: 1, title: "THINGSY", category: "Branding", image: "/projects/thingsy.jpg", year: "2025", color: "bg-stone-200" },
  { id: 2, title: "LUNAR", category: "Web Design", image: "/projects/lunar.jpg", year: "2025", color: "bg-sky-200" },
  { id: 3, title: "KROMA", category: "Creative Direction", image: "/projects/kroma.jpg", year: "2025", color: "bg-rose-200" },
  { id: 4, title: "ASTERISK", category: "UI/UX", image: "/projects/asterisk.jpg", year: "2025", color: "bg-indigo-200" },
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
               {/* Placeholder for image */}
               <div className="absolute inset-0 flex items-center justify-center text-4xl font-normal opacity-20 group-hover:scale-105 transition-transform duration-500">
                  {project.title}
               </div>
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

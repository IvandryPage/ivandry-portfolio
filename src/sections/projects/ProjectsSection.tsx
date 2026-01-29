import { ProjectCard } from "@/components/composite/project-card/ProjectCard"
import { content } from "@/content/projects.copy"
import type { Project } from "@/lib/types"

export function ProjectsSection() {
  const projects: Project[] = content.data // sementara 1 project
  const activeIndex = 0

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24"
    >
      {/* Section header */}
      <header className="mb-20 max-w-2xl">
        <h2 className="mb-4">{content.headline}</h2>
        <p className="text-muted">{content.subheadline}</p>
      </header>

      {/* Projects layout */}
      <div
        className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_2fr_1fr] gap-12 items-start"
      >
        <ProjectCard 
          project={projects[activeIndex]} 
          index={activeIndex} />

        {/* Preview column (placeholder) */}
        <aside className="hidden lg:block space-y-6 text-muted">
          {projects.map((project, index) => {
            if (index <= activeIndex) return null
            const cardOpacity = 0.6 / (index + 1)
            const translateX = 10 * (index + 1)

            return (
              <div key={index} style={{opacity: cardOpacity, paddingLeft: translateX}}>
                <span className="block text-sm mb-1">{index.toString().padStart(2, '0')}</span>
                <p className="text-sm">{project.title}</p>
              </div>
          )})}
        </aside>
      </div>
    </section>
  )
}

import { Project } from "@/lib/types";
import { Fragment } from "react/jsx-runtime";

interface ProjectCardProps {
  index: number,
  project: Project | undefined
}

export function ProjectCard({project, index}: ProjectCardProps) {
  if (project == null) return
  return (
    <Fragment>
      {/* Index rail */}
      <div className="hidden md:flex flex-col gap-6 text-muted">
        <span className="text-sm tracking-widest">{index.toString().padStart(2, '0')}</span>
      </div>

      {/* Active project */}
      <article className="space-y-6">
        <header>
          <h3 className="mb-2">{project.title}</h3>
          <p className="text-muted max-w-xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Context */}
        <p className="max-w-xl">{project.context}</p>

        {/* Focus */}
        <div>
          <h4 className="mb-2 text-sm uppercase tracking-wide text-muted">
            Focus
          </h4>
          <ul className="flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <li
                key={item}
                className="
                  rounded-md
                  bg-background-elevated
                  px-3
                  py-1.5
                  text-sm
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div>
          <h4 className="mb-2 text-sm uppercase tracking-wide text-muted">
            What I Learned
          </h4>
          <ul className="space-y-2 text-sm text-muted">
            {project.learnings.map((item) => (
              <li key={item}>→ {item}</li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <footer className="flex items-center gap-4 text-sm text-muted">
          <span>Status: {project.status}</span>
          <span>•</span>
          <span>{project.tech.join(', ')}</span>
        </footer>
      </article>
    </Fragment>
  )
}
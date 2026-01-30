import { Project } from "@/lib/types";

interface ProjectCardProps {
  index: number;
  project: Project | undefined;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  if (!project) return null;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-16">
      {/* Index rail */}
      <div className="hidden md:flex flex-col text-foreground-muted font-mono pt-2">
        <span className="text-sm tracking-widest border-b border-background-elevated pb-4">
          {index.toString().padStart(2, '0')}
        </span>
      </div>

      {/* Active project */}
      <article className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="space-y-4">
          <h3 className="text-foreground-primary font-accent uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-8">
          <p className="max-w-xl text-foreground-primary/80">{project.context}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Focus */}
            <div className="space-y-4">
              <h4 className="text-accent text-accent-main">Focus Area</h4>
              <ul className="flex flex-wrap gap-2">
                {project.focus.map((item) => (
                  <li key={item} className="rounded-sm bg-background-elevated px-3 py-1 text-xs font-mono text-foreground-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="space-y-4">
              <h4 className="text-accent text-accent-main">Key Learnings</h4>
              <ul className="space-y-2">
                {project.learnings.map((item) => (
                  <li key={item} className="text-sm text-foreground-secondary flex gap-2">
                    <span className="text-accent-main">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Meta Footer */}
        <footer className="pt-8 border-t border-background-elevated flex flex-wrap items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-foreground-muted">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-state-success animate-pulse" />
            <span>Status: {project.status}</span>
          </div>
          <span>Tech Stack: {project.tech.join(' / ')}</span>
        </footer>
      </article>
    </div>
  );
}
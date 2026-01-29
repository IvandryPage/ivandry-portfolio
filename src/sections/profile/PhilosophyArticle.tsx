import { content } from "@/content/profile.copy"

export function PhilosophyArticle({className}:{className?: string}) {
  return (
    <article id="philosophy" className={className}>
      <header className="mb-12 max-w-2xl">
        <h2 className="mb-4">{content.philosophy.headline}</h2>
        <p className="text-muted">{content.philosophy.subheadline}</p>
      </header>

      <ul className="space-y-4">
        {content.philosophy.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-accent-main font-bold">▹</span>
            <p className="text-muted">{bullet}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
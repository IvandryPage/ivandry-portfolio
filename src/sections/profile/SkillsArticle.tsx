
import { SkillsSlider } from "@/components/composite/skills-slider/SkillsSlider"
import { content } from "@/content/profile.copy"

export function SkillsArticle({className}:{className?: string}) {
  return (
    <article id="skills" className={className}>
      {/* Header */}
      <header className="mb-16 max-w-2xl">
        <h2 className="mb-4">
          {content.skills.headline}
        </h2>

        <p className="text-muted">
          {content.skills.subheadline}
        </p>
      </header>

      <div className="h-[80%] md:h-[90%] flex flex-wrap align-center">
        <SkillsSlider skills={content.skills.data} />
      </div>
    </article>
  )
}
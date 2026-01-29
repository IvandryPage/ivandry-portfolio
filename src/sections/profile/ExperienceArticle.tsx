import { twMerge } from "tailwind-merge";
import { content } from "@/content/profile.copy";
import { ExperienceSlider } from "@/components/composite/experience-slider/ExperienceSlider";

export function ExperienceArticle({ className }:{ className?:string }) {
  return (
    <article id="experience" className={twMerge('relative', className)}>
      {/* Section header */}
      <header className="mb-12 max-w-2xl">
        <h2 className="mb-4">{content.experiences.headline}</h2>
        <p className="text-muted">
          {content.experiences.subheadline}
        </p>
      </header>

      {/* Vertical Swiper */}
      <div className="h-[70%] md:h-[80%]">
        <ExperienceSlider experiences={content.experiences.data} />
      </div>
    </article>
  )
}
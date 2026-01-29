import { ExperienceArticle } from "./ExperienceArticle";
import { PhilosophyArticle } from "./PhilosophyArticle";
import { SkillsArticle } from "./SkillsArticle";

export function ProfileSection() {
  return (
    <section id="profile" className="grid grid-cols-12 grid-rows-12 h-screen px-6 md:px-12 lg:px-20 py-24">
      <PhilosophyArticle className="col-span-6 row-span-5"/>
      <SkillsArticle className="col-start-9 col-span-4 row-span-10"/>
      <ExperienceArticle className="col-start-1 col-span-8 row-start-6 row-span-full" />
    </section>
  )
}
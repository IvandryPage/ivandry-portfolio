import { Hero } from "@/sections/Hero";
import { content } from "@/lib/content/portfolio-content";
import { Thesis } from "@/sections/Thesis";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Social } from "@/sections/Social";

export default function Home() {
  return (
    <>
      <Hero {...content.hero} />
      <Thesis {...content.thesis} />
      <Projects {...content.selectedWork} />
      <Skills {...content.skills} />
      <Social {...content.social} />
    </>
  );
}

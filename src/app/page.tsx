import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNavigation } from "@/components/SiteNavigation";
import { AboutSection } from "@/sections/AboutSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNavigation />
      
      <main>
        <HeroSection />
        
        <div id="works">
          <ProjectsSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="contact">
          <SiteFooter />
        </div>
      </main>
    </>
  );
}

import { HeroSection, ProjectsSection, ProfileSection } from "@/sections";
import { Fragment } from "react/jsx-runtime";

export default function LandingPage() {
  return (
    <Fragment>
      <HeroSection />
      <ProjectsSection />
      <ProfileSection />
    </Fragment>
  );
}

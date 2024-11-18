import { Navbar } from "@/components/custom/navbar";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import WorkExperienceSection from "@/components/sections/work-experience-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed z-10 w-full mt-8">
        <div className="container mx-auto flex justify-around">
          <Navbar />
          <Button className="h-auto">Download CV</Button>
        </div>
      </div>

      <div className="w-full h-screen">
        <HeroSection/>
      </div>
      <div className="w-full min-h-screen h-screen ">
        <WorkExperienceSection />
      </div>
      <div className="w-full min-h-screen">
        <ProjectSection />
      </div>
    </div>
  );
}

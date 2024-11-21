import Footer from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import AboutMeSection from "@/components/sections/about-me-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/project-section";
import WorkExperienceSection from "@/components/sections/work-experience-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed z-50 w-full mt-8">
        <div className="container mx-auto flex justify-around">
          <Navbar />
          <Button className="h-auto" asChild>
            <a href="/cv/Marindo-resume.pdf" download={true}>
              Download CV
            </a>
          </Button>
        </div>
      </div>

      <div className="w-full h-screen" id="home">
        <HeroSection/>
      </div>
      <div className="w-full min-h-screen" id="about">
        <AboutMeSection />
      </div>
      <div className="w-full min-h-screen h-screen " id="work-experience">
        <WorkExperienceSection />
      </div>
      <div className="w-full min-h-screen" id="projects">
        <ProjectSection />
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}

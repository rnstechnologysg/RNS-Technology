import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProjectExperienceSection } from "@/components/sections/ProjectExperienceSection";
import { TrainTrackTimelineSection } from "@/components/sections/TrainTrackTimelineSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkforceProcessSection } from "@/components/sections/WorkforceProcessSection";
import { WorkforceCategoriesSection } from "@/components/sections/WorkforceCategoriesSection";
import { EngineeringDisciplinesSection } from "@/components/sections/EngineeringDisciplinesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <Hero />
        <ProjectExperienceSection />
        <TrainTrackTimelineSection />
        <IndustriesSection />
        <WorkforceProcessSection />
        <ServicesSection />
        <WorkforceCategoriesSection />
        <EngineeringDisciplinesSection />
      </main>
      <Footer />
    </>
  );
}

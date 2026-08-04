import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { WhoWeAreSection } from "@/components/sections/about/WhoWeAreSection";
import { OurPurposeSection } from "@/components/sections/about/OurPurposeSection";
import { WhatWeDeliverSection } from "@/components/sections/about/WhatWeDeliverSection";
import { IsoCertificationSection } from "@/components/sections/about/IsoCertificationSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FAFAF9]">
        <AboutHeroSection />
        <WhoWeAreSection />
        <OurPurposeSection />
        <WhatWeDeliverSection />
        <IsoCertificationSection />
      </main>
      <Footer />
    </>
  );
}

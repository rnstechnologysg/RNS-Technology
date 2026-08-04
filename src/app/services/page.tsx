import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { ServiceCategoriesSection } from "@/components/sections/services/ServiceCategoriesSection";
import { CoreServicesSection } from "@/components/sections/services/CoreServicesSection";
import { ServicesFaqSection } from "@/components/sections/services/ServicesFaqSection";
import { ServicesCtaSection } from "@/components/sections/services/ServicesCtaSection";

export const metadata = {
  title: "Services | RNS Technology",
  description: "Comprehensive engineering, technical support, and workforce deployment solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FAFAF9]">
        <ServicesHeroSection />
        <ServiceCategoriesSection />
        <CoreServicesSection />
        <ServicesFaqSection />
        <ServicesCtaSection />
      </main>
      <Footer />
    </>
  );
}

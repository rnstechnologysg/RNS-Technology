import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogComingSoonSection } from "@/components/sections/blog/BlogComingSoonSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | RNS Technology Pte. Ltd.",
  description: "Stay tuned for technical articles, case studies, and engineering whitepapers on railway systems, TCMS, high-voltage testing, and platform screen doors from RNS Technology.",
  alternates: {
    canonical: "https://rnstechnologysg.com/blog",
  },
  openGraph: {
    title: "Blog & Technical Insights | RNS Technology",
    description: "Engineering whitepapers, case studies, and technical publications from RNS Technology.",
    url: "https://rnstechnologysg.com/blog",
    siteName: "RNS Technology",
    locale: "en_SG",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar theme="light" />
      <main className="min-h-screen bg-[#FAFAF9]">
        <BlogComingSoonSection />
      </main>
      <Footer />
    </>
  );
}

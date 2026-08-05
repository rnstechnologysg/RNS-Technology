import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogComingSoonSection } from "@/components/sections/blog/BlogComingSoonSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article Coming Soon | RNS Technology Pte. Ltd.",
  description: "This article is coming soon. Stay tuned for engineering whitepapers and case studies from RNS Technology.",
};

export default function BlogArticlePage() {
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

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | RNS Technology Pte. Ltd.",
  description: "Navigate through RNS Technology's website to find information about our services, projects, careers, and more.",
};

export default function SitemapPage() {
  const sitemapLinks = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Use", href: "/terms" },
        { name: "Cookie Policy", href: "/cookie-policy" },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-950">
        {/* Dark Hero Section matching About Us/Gallery */}
        <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
             <div className="mb-12">
               <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 font-display">
                 Sitemap
               </h1>
               <p className="text-lg text-slate-400">
                 A complete overview of the RNS Technology website.
               </p>
             </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white min-h-[50vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {sitemapLinks.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-medium text-slate-900 mb-6 pb-2 border-b border-slate-200 font-display">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          className="text-lg text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

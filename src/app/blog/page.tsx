import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RNS Insights & Blog | Coming Soon — RNS Technology Pte. Ltd.",
  description:
    "Our blog is coming soon. Stay tuned for industry insights, engineering expertise, and updates from the RNS Technology team.",
  alternates: {
    canonical: "https://rnstechnologysg.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-[#FAFAF9] flex flex-col">
        {/* Hero coming-soon section */}
        <section className="flex-1 flex items-center justify-center px-4 py-32">
          <div className="max-w-2xl w-full mx-auto text-center">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-sans font-medium text-xs uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              RNS Insights & Blog
            </span>

            {/* Headline */}
            <h1 className="font-rounded font-semibold text-5xl lg:text-[64px] tracking-tighter leading-none text-[#161616] mb-6">
              Something great
              <br />
              <span className="text-blue-600">is on its way.</span>
            </h1>

            {/* Sub-copy */}
            <p className="font-sans text-lg leading-relaxed text-slate-500 max-w-lg mx-auto mb-12">
              We&apos;re crafting in-depth articles on engineering, workforce
              solutions, and industry insights. Check back soon.
            </p>

            {/* Divider dots */}
            <div className="flex items-center justify-center gap-2 mb-12">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-slate-200"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#161616] text-white font-sans font-bold text-sm hover:bg-slate-800 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

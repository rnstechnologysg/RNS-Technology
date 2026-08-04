"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    category: "Technical Insights",
    title: "Advancements in TCMS Diagnostic Capabilities & Data Logging",
    date: "Aug 12, 2026",
    href: "/blog/tcms-diagnostics",
  },
  {
    category: "Safety & Quality",
    title: "Best Practices for High-Voltage Electrical Testing in Depots",
    date: "Aug 05, 2026",
    href: "/blog/electrical-testing",
  },
  {
    category: "Railway Systems",
    title: "Modernizing Platform Screen Door Systems for High-Traffic Stations",
    date: "Jul 28, 2026",
    href: "/blog/psd-modernization",
  },
];

export function InsightsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
              Knowledge Base
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Railway Engineering <span className="text-primary">Insights & Updates</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={article.href} className="group block">
                <div className="rounded-[2rem] overflow-hidden mb-5 relative h-[240px] shadow-md border border-slate-100">
                  <Placeholder 
                    icon={ImageIcon}
                    title={article.title}
                    description=""
                    ratio="wide"
                    className="w-full h-full border-none rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-2">
                  <span className="text-primary uppercase tracking-wider font-bold">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

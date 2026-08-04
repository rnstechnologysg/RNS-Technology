"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const tabContent = {
    mission:
      "To empower Singapore's infrastructure growth by providing reliable, compliance-focused, and skilled manpower solutions that exceed industry standards.",
    vision:
      "To be the most trusted and efficient workforce solutions partner in the Built Environment sector across the region.",
    values:
      "Grounded in Integrity, Reliability, Safety, and Excellence—ensuring every engineer and specialist deployed operates to the highest standards.",
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Overlapping Image Composition */}
          <div className="relative h-[520px] md:h-[580px] w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-4 w-[85%] h-[440px] rounded-[3rem] overflow-hidden shadow-xl"
            >
              <Placeholder 
                icon={ImageIcon}
                title="Infrastructure & Engineering Project"
                description="Engineering team, resident engineers, site coordination"
                ratio="square"
                className="w-full h-full border-none rounded-none"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[60%] h-[340px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl"
            >
              <Placeholder 
                icon={ImageIcon}
                title="Testing & Compliance Supervision"
                description="WSH officers, QA/QC engineers conducting audit"
                ratio="square"
                className="w-full h-full border-none rounded-none"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Engineering Resource & <span className="text-primary">Project Support Partner.</span>
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              RNS Technology Pte. Ltd. is a Singapore-based engineering resource and technical support company delivering qualified engineers, technical specialists, project management professionals, testing & commissioning engineers, and compliance personnel for rail, construction, infrastructure, and industrial projects.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5 border-b border-slate-100 pb-4">
              {(["mission", "vision", "values"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab 
                      ? "bg-primary text-white shadow-md shadow-orange-600/20" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  Our {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 text-sm leading-relaxed font-medium">
              {tabContent[activeTab]}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Video Thumbnail */}
              <div className="relative w-36 h-36 shrink-0 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
                <Placeholder 
                  icon={ImageIcon}
                  title="Corporate Overview"
                  description=""
                  ratio="square"
                  className="w-full h-full border-none rounded-none"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary pl-0.5 shadow-lg">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3.5 pt-1">
                {[
                  "Full MOM Regulatory & Permit Compliance",
                  "Qualified & Vetted Engineering Personnel",
                  "BizSAFE & WSH Safety Certified Deployments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link href="/about">
                <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-orange-600/20">
                  Explore Solutions
                </Button>
              </Link>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Inquiries</p>
                  <p className="text-sm font-bold text-slate-900">+65 6717 8888</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const categories = [
  {
    title: "Workforce Solutions",
    icon: "hugeicons:user-group",
    desc: "Helping businesses source, deploy, and manage qualified professionals for projects of every scale.",
    includes: [
      "Workforce Deployment",
      "Technical Personnel",
      "Project Teams",
      "Compliance Support"
    ]
  },
  {
    title: "Technical Support",
    icon: "hugeicons:settings-01",
    desc: "Providing skilled specialists to support engineering, maintenance, testing, commissioning, and project execution.",
    includes: [
      "Technical Specialists",
      "Testing & Commissioning",
      "QA/QC",
      "Site Support"
    ]
  },
  {
    title: "Railway Engineering",
    icon: "hugeicons:train-02",
    desc: "Supporting railway operators and manufacturers throughout maintenance, modification, testing, commissioning, and system integration.",
    includes: [
      "Rolling Stock Maintenance",
      "System Modifications",
      "TCMS Integration",
      "PSD Engineering"
    ]
  }
];

export function ServiceCategoriesSection() {
  return (
    <section className="py-32 bg-[#FAFAF9] border-t border-[#ECECEC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-semibold text-xs uppercase tracking-widest text-blue-600 mb-3 block"
            >
              Service Categories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-rounded font-semibold text-4xl lg:text-[52px] tracking-tight text-[#161616] leading-[1.1]"
            >
              Comprehensive Engineering Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base lg:text-lg text-[#616161] max-w-md"
          >
            End-to-end capabilities across workforce deployment, technical support, and railway systems integration.
          </motion.p>
        </div>

        {/* Horizontal Row Cards */}
        <div className="space-y-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-[#ECECEC] shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Number, Icon, Title */}
                <div className="lg:col-span-4 flex items-center gap-6">
                  <span className="font-rounded font-semibold text-3xl text-slate-300 group-hover:text-blue-600 transition-colors">
                    0{i + 1}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    <Icon icon={cat.icon} className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="font-rounded font-semibold text-2xl lg:text-3xl text-[#161616] tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-4">
                  <p className="font-sans text-[#616161] text-base leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Right: Includes Badges */}
                <div className="lg:col-span-4">
                  <p className="font-sans font-bold text-xs uppercase tracking-widest text-[#8B8B8B] mb-3">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.includes.map((item, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-800 group-hover:bg-blue-50/60 group-hover:border-blue-200 group-hover:text-blue-900 transition-colors flex items-center gap-1.5"
                      >
                        <Icon icon="hugeicons:checkmark-circle-02" className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

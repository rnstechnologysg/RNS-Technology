"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const outcomes = [
  {
    title: "Qualified Workforce",
    icon: "hugeicons:user-group",
    desc: "Pre-screened, specialized engineering talent ready to deploy. No delays in sourcing or vetting.",
  },
  {
    title: "Technical Expertise",
    icon: "hugeicons:brain-02",
    desc: "Access to niche skill sets, from TCMS verification to PSD engineering and defect liability management.",
  },
  {
    title: "Project Support",
    icon: "hugeicons:customer-support",
    desc: "Comprehensive oversight and administrative backing to keep your project operations running smoothly.",
  },
  {
    title: "Compliance Assurance",
    icon: "hugeicons:shield-01",
    desc: "Strict adherence to MOM regulations and WSH standards, minimizing your operational risk.",
  },
  {
    title: "Long-term Partnership",
    icon: "hugeicons:link-square-02",
    desc: "A dedicated resource partner that scales with you from initial planning to final handover.",
  },
  {
    title: "Flexible Deployment",
    icon: "hugeicons:clock-01",
    desc: "Agile workforce mobilization tailored to your project's shifting timeline and demand peaks.",
  },
];

export function WhatWeDeliverSection() {
  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-3 block text-blue-600"
          >
            What We Deliver
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-rounded font-semibold text-3xl lg:text-[44px] tracking-tight text-slate-900"
          >
            Outcomes, not just services.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <Icon icon={outcome.icon} className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h3 className="font-sans font-bold text-xl tracking-tight text-slate-900 mb-3">
                {outcome.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-slate-500">
                {outcome.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

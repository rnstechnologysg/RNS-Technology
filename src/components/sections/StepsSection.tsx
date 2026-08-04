"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation & Requirements",
    desc: "In-depth review of project scope, engineering specifications, and workforce compliance needs.",
  },
  {
    num: "02",
    title: "Sourcing & Screening",
    desc: "Rigorously vetting engineers, technical specialists, and compliance personnel to exact standards.",
  },
  {
    num: "03",
    title: "Deployment & Compliance",
    desc: "Seamless site deployment with full MOM permit, WSH safety, and Singapore regulatory clearance.",
  },
  {
    num: "04",
    title: "Ongoing Management & Support",
    desc: "Continuous technical supervision, welfare management, and ongoing project support.",
  },
];

export function StepsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
            Operational Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Standardized 4-Step <span className="text-primary">Delivery Process</span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-8 right-8 h-[2px] bg-slate-200 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-orange-500/20 mb-4 bg-white pb-2 pr-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

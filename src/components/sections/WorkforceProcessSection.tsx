"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const stages = [
  {
    num: "01",
    title: "Planning",
    desc: "We begin by mapping out your exact project requirements, technical specifications, and workforce demands to establish a comprehensive resource plan.",
    icon: "hugeicons:pencil-edit-01",
  },
  {
    num: "02",
    title: "Recruitment",
    desc: "Leveraging our vast network, we source, technically vet, and interview the most qualified professionals to ensure a perfect match for your specific systems.",
    icon: "hugeicons:search-visual",
  },
  {
    num: "03",
    title: "Deployment",
    desc: "We handle complete mobilization, including site-specific safety briefings, seamless onboarding, and logistics to get the team ready-to-work on day one.",
    icon: "hugeicons:rocket-01",
  },
  {
    num: "04",
    title: "Project Support",
    desc: "Our continuous administrative backing covers payroll, HR, compliance, and ongoing technical support, ensuring the workforce remains highly productive.",
    icon: "hugeicons:customer-support",
  },
  {
    num: "05",
    title: "Completion",
    desc: "As the project concludes, we oversee the smooth handover processes, final documentation, and organized demobilization of the engineering teams.",
    icon: "hugeicons:flag-01",
  },
  {
    num: "06",
    title: "Ongoing Partnership",
    desc: "We maintain strong relationships with our top-tier personnel, retaining key talent for your future projects to enable rapid, scalable growth.",
    icon: "hugeicons:handshake",
  }
];

export function WorkforceProcessSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="text-center mb-24 relative">
          <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#8B8B8B] mb-3 block">
            The Journey
          </span>
          <h2 className="font-rounded font-semibold text-4xl lg:text-[56px] tracking-tight text-[#161616] leading-[1.1]">
            Workforce at Every Stage
          </h2>
        </div>

        {/* The Timeline Container */}
        <div className="relative">
          {/* The connecting vertical line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#ECECEC] hidden md:block -translate-x-1/2" />

          <div className="flex flex-col gap-8 md:gap-0">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                  
                  {/* Timeline Dot (Center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-[4px] border-[#FAFAF9] items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.05)] z-10 group-hover:border-blue-50 transition-colors duration-300">
                    <div className="w-4 h-4 rounded-full bg-[#8B8B8B] group-hover:bg-blue-600 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] py-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`relative bg-white border border-[#ECECEC] p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group-hover:-translate-y-1`}
                    >
                      {/* Oversized Number Background */}
                      <div className={`absolute pointer-events-none font-rounded font-bold text-[180px] leading-none opacity-[0.03] text-[#161616] group-hover:opacity-[0.06] group-hover:text-blue-600 transition-colors duration-500 z-0 ${isEven ? '-left-10 -bottom-10' : '-right-10 -bottom-10'}`}>
                        {stage.num}
                      </div>

                      <div className={`relative z-10 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-[#FAFAF9] flex items-center justify-center mb-6 border border-[#ECECEC] group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300`}>
                           <Icon icon={stage.icon} className="w-8 h-8 text-[#161616] group-hover:text-blue-600 transition-colors duration-300" />
                        </div>
                        <h3 className="font-rounded font-semibold text-2xl md:text-3xl text-[#161616] mb-4">
                          {stage.title}
                        </h3>
                        <p className="font-sans text-[#616161] leading-relaxed text-lg">
                          {stage.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

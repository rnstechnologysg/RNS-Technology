"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const categories = [
  {
    title: "Engineering Professionals",
    description: "Highly qualified engineers with extensive experience in rail and infrastructure projects.",
    iconId: "hugeicons:brain",
    roles: [
      "Resident Engineers (RE)",
      "Site Engineers",
      "QA/QC Engineers",
      "Testing & Commissioning Engineers",
      "Systems Integration Engineers"
    ]
  },
  {
    title: "Technical & Skilled Workforce",
    description: "Specialized technicians and installers for mechanical, electrical, and systems works.",
    iconId: "hugeicons:cpu",
    roles: [
      "Rolling Stock Technicians",
      "TCMS Integration Specialists",
      "Electrical & Mechanical Installers",
      "PSD (Platform Screen Door) Installers",
      "Maintenance Specialists"
    ]
  },
  {
    title: "Safety & Compliance Officers",
    description: "MOM-certified safety personnel ensuring full compliance with BizSAFE and WSH regulations.",
    iconId: "hugeicons:shield-01",
    roles: [
      "WSH Officers (WSHO)",
      "Safety Supervisors",
      "Site Safety Coordinators",
      "Environmental Control Officers (ECO)",
      "Risk Assessment Specialists"
    ]
  },
  {
    title: "Project Management & Support",
    description: "Essential project coordination, planning, and administrative support staff.",
    iconId: "hugeicons:briefcase-01",
    roles: [
      "BIM Coordinators (3D Modeling)",
      "Project Planners & Schedulers",
      "Technical Document Controllers",
      "Site Administrators",
      "Logistics & Material Coordinators"
    ]
  }
];

export function WorkforceCategoriesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-[#ECECEC] pb-8">
          <div className="max-w-2xl">
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#8B8B8B] mb-3 block">
              Workforce Categories
            </span>
            <h2 className="font-rounded font-semibold text-3xl lg:text-[44px] tracking-tight text-[#161616] leading-tight">
              Comprehensive Talent for Specialized Projects
            </h2>
          </div>
          <p className="font-sans text-base leading-relaxed text-[#616161] max-w-md mt-6 md:mt-0">
            From technical engineering to site safety and administrative support, we supply fully vetted professionals tailored to your precise requirements.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-[#ECECEC] pb-12 lg:pb-16 last:border-0 last:pb-0"
            >
              <div className="md:w-5/12 flex gap-6">
                 <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-xl border border-[#ECECEC] bg-[#FAFAF9] items-center justify-center shadow-sm">
                   <Icon icon={category.iconId} className="w-8 h-8 text-[#1e40af]" />
                 </div>
                 <div>
                   <h3 className="font-sans font-bold text-2xl tracking-tight text-[#161616] mb-4">
                     {category.title}
                   </h3>
                   <p className="font-sans text-base leading-relaxed text-[#616161]">
                     {category.description}
                   </p>
                 </div>
              </div>
              <div className="md:w-7/12 grid sm:grid-cols-2 gap-y-5 gap-x-6">
                {category.roles.map((role, rIdx) => (
                   <div key={rIdx} className="flex items-start gap-3">
                     <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1e40af] shrink-0" />
                     <span className="font-sans text-base font-medium text-[#161616]">{role}</span>
                   </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

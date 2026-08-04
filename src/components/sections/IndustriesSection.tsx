"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const industriesData = [
  {
    id: "operators",
    title: "Railway Operators",
    icon: "hugeicons:train-02",
    description: "RNS Technology supports railway operators with engineering resources and technical services throughout the lifecycle of railway operations.",
    areas: [
      "Rolling Stock Maintenance",
      "Testing & Commissioning",
      "Technical Support",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Defect Liability Period (DLP) Support",
      "Platform Screen Door (PSD) Engineering"
    ]
  },
  {
    id: "manufacturers",
    title: "Rolling Stock Manufacturers",
    icon: "hugeicons:factory-02",
    description: "Supporting rolling stock manufacturers during production, delivery, commissioning, modification, refurbishment, and warranty support.",
    areas: [
      "Mechanical Assembly",
      "Electrical Installation",
      "Interior Refurbishment",
      "Rolling Stock Modification",
      "Quality Inspection",
      "Factory & Site Testing",
      "Testing & Commissioning",
      "TCMS Verification"
    ]
  },
  {
    id: "maintenance",
    title: "Railway Maintenance Contractors",
    icon: "hugeicons:wrench-01",
    description: "Providing skilled engineering personnel and technical expertise for maintenance programs and fleet reliability.",
    areas: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Component Replacement",
      "Fault Diagnosis",
      "Inspection",
      "Technical Documentation",
      "Fleet Reliability Support"
    ]
  },
  {
    id: "integrators",
    title: "System Integrators",
    icon: "hugeicons:cpu",
    description: "Supporting railway system integration projects by providing engineering services across multiple railway systems.",
    areas: [
      "TCMS Integration",
      "Passenger Information System (PIS)",
      "CCTV Systems",
      "Public Address Systems",
      "Train Communication Systems",
      "Functional Testing",
      "System Verification",
      "Integration Testing"
    ]
  },
  {
    id: "consultants",
    title: "Engineering Consultants",
    icon: "hugeicons:briefcase-01",
    description: "Supporting consultants with technical engineering expertise during planning, execution, testing, and project delivery.",
    areas: [
      "Engineering Consultation",
      "Technical Support",
      "Site Coordination",
      "Inspection",
      "Engineering Documentation",
      "Testing Support",
      "Quality Assurance"
    ]
  }
];

export function IndustriesSection() {
  return (
    <section className="py-32 bg-[#FAFAF9] relative"> 
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-20">
          <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#8B8B8B] mb-3 block">
            Target Industries
          </span>
          <h2 className="font-rounded font-semibold text-4xl lg:text-[56px] tracking-tight text-[#161616] leading-[1.1]">
            Comprehensive Railway Expertise
          </h2>
          <p className="font-sans text-lg text-[#616161] mt-6 max-w-2xl mx-auto">
            Scroll to explore how RNS Technology supports specialized sectors throughout the entire lifecycle of operations.
          </p>
        </div>
        
        {/* Stacking Cards */}
        <div className="relative pb-32">
          {industriesData.map((ind, idx) => (
            <motion.div 
              key={ind.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="sticky bg-white border border-[#ECECEC] rounded-[2rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8"
              style={{
                top: `calc(120px + ${idx * 30}px)` // Creates the beautiful stacking cascade effect
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon icon={ind.icon} className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-rounded font-semibold text-3xl md:text-4xl text-[#161616] tracking-tight mb-3">
                    {ind.title}
                  </h3>
                  <p className="font-sans text-[#616161] leading-relaxed text-lg max-w-3xl">
                    {ind.description}
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-[#FAFAF9]">
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-[#8B8B8B] mb-6">
                  Areas of Support
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8">
                  {ind.areas.map((area, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon icon="hugeicons:checkmark-circle-02" className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-sans text-[#161616] font-medium leading-tight">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

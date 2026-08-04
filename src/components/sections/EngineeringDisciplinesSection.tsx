"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const disciplinesData = [
  {
    title: "Mechanical Engineering",
    icon: "hugeicons:settings-01",
    items: ["Mechanical Assembly", "Brake Systems", "Door Systems", "Gangway Systems", "HVAC", "Bogie Inspection", "Coupler Systems", "Interior Refurbishment"]
  },
  {
    title: "Electrical Engineering",
    icon: "hugeicons:flash",
    items: ["Electrical Wiring", "Cable Installation", "Power Distribution", "Battery Systems", "Auxiliary Power Supply", "Electrical Testing", "Relay Protection", "Cable Harness Installation"]
  },
  {
    title: "Railway Systems",
    icon: "hugeicons:train-track",
    items: ["Train Control & Monitoring System (TCMS)", "Passenger Information System (PIS)", "CCTV", "Public Address System", "Train Radio", "Communication Systems"]
  },
  {
    title: "Testing & Commissioning",
    icon: "hugeicons:checkmark-badge-01",
    items: ["Static Testing", "Dynamic Testing", "Functional Testing", "Installation Verification", "Performance Testing", "Final Inspection", "System Integration Testing"]
  },
  {
    title: "Quality & Safety",
    icon: "hugeicons:shield-01",
    items: ["Incoming Inspection", "Installation Verification", "Functional Testing", "Quality Documentation", "Risk Assessment", "Safe Work Procedures", "Workplace Safety Compliance"]
  }
];

const coreServices = [
  "Rolling Stock Maintenance",
  "Rolling Stock Modification",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Testing & Commissioning",
  "TCMS Services",
  "Platform Screen Door (PSD) Engineering",
  "Defect Liability Period (DLP) Support",
  "Quality Assurance",
  "Workplace Safety"
];

function AccordionItem({ title, icon, items, isOpen, onClick }: { title: string, icon: string, items: string[], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-[#ECECEC] last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 group hover:bg-[#FAFAF9] transition-colors px-4 -mx-4 rounded-lg"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <Icon icon={icon} className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-sans font-bold text-lg text-[#161616] group-hover:text-blue-600 transition-colors text-left">{title}</span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'border-blue-600 bg-blue-600 rotate-180' : 'border-[#ECECEC] bg-white group-hover:border-blue-600'}`}>
          <Icon icon="hugeicons:arrow-down-01" className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#8B8B8B] group-hover:text-blue-600'}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 md:pl-[4.5rem]">
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {items.map((item, i) => (
                  <li key={i} className="font-sans text-[#616161] flex items-start gap-3 text-base">
                    <span className="text-blue-600 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EngineeringDisciplinesSection() {
  const [openDiscipline, setOpenDiscipline] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8">
        
        {/* Engineering Disciplines (Accordion) */}
        <div className="max-w-4xl mx-auto mb-32">
           <div className="text-center mb-12">
             <h3 className="font-rounded font-semibold text-3xl md:text-4xl text-[#161616] tracking-tight">
               Engineering Disciplines Across Sectors
             </h3>
             <p className="font-sans text-lg text-[#616161] mt-4">
               Our expertise spans multiple critical engineering domains.
             </p>
           </div>
           
           <div className="bg-white border border-[#ECECEC] rounded-2xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
             {disciplinesData.map((disc, idx) => (
               <AccordionItem 
                 key={idx} 
                 {...disc} 
                 isOpen={openDiscipline === idx}
                 onClick={() => setOpenDiscipline(openDiscipline === idx ? null : idx)}
               />
             ))}
           </div>
        </div>

        {/* Core Service Coverage (Pill Tags) */}
        <div className="max-w-5xl mx-auto text-center border-t border-[#ECECEC] pt-24">
           <div className="mb-8">
             <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-[#8B8B8B]">
               Core Service Coverage
             </h4>
           </div>
           <div className="flex flex-wrap justify-center gap-3 md:gap-4">
             {coreServices.map((service, idx) => (
               <span 
                 key={idx} 
                 className="px-6 py-3 rounded-full bg-[#FAFAF9] border border-[#ECECEC] text-[#161616] font-sans text-sm md:text-base font-semibold hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600 transition-colors cursor-default"
               >
                 {service}
               </span>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}

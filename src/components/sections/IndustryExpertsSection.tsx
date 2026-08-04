"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { Image as ImageIcon, Check } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    role: "Resident Engineers & Site Engineers",
    desc: "Qualified engineering personnel overseeing daily site operations and technical supervision.",
  },
  {
    role: "QA/QC Engineers & BIM Coordinators",
    desc: "Quality control auditors and 3D BIM modeling coordinators for complex infrastructure.",
  },
  {
    role: "Rolling Stock & TCMS Specialists",
    desc: "Train fleet engineers, TCMS integration specialists, and mechanical/electrical overhaul technicians.",
  },
  {
    role: "WSH Officers & Safety Supervisors",
    desc: "MOM registered WSH personnel enforcing BizSAFE protocols, Risk Assessments, and site safety.",
  },
  {
    role: "Testing & Commissioning Engineers",
    desc: "Engineers executing static, dynamic, and revenue service readiness testing for rail & infrastructure.",
  },
];

export function IndustryExpertsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 w-full text-center pointer-events-none opacity-5">
        <h2 className="text-[6rem] md:text-[9rem] font-bold whitespace-nowrap uppercase leading-none text-slate-900">
          ENGINEERING TALENT
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with overlapping box */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[88%] h-[480px] md:h-[540px] rounded-[3rem] overflow-hidden shadow-xl"
            >
              <Placeholder 
                icon={ImageIcon}
                title="Deployable Engineering Professionals"
                description="Engineers, QA/QC auditors, WSH officers"
                ratio="tall"
                className="w-full h-full border-none rounded-none"
              />
            </motion.div>
            
            {/* Overlapping Dark Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-8 right-0 w-[65%] bg-slate-950 text-white p-7 rounded-[2rem] shadow-2xl border border-slate-800"
            >
              <h3 className="text-lg font-bold mb-3 text-white leading-snug">
                Qualified & Vetted Workforce Solutions
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" /> Full MOM Work Permit & S-Pass Processing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" /> WSH Safety & BizSAFE Compliant
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right: Expert List */}
          <div className="pt-6 lg:pt-0 pl-0 lg:pl-6">
            <div className="mb-8 space-y-2">
              <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                Deployable Talent
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Qualified Engineering Roles
              </h2>
            </div>
            
            <div className="flex flex-col">
              {capabilities.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="group flex flex-col border-b border-slate-100 py-5 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`w-3 h-3 rounded-full transition-colors ${hoveredIdx === idx ? 'bg-primary' : 'bg-slate-200'}`} />
                      <h3 className={`text-base md:text-lg font-bold transition-colors ${hoveredIdx === idx ? 'text-primary' : 'text-slate-900'}`}>
                        {item.role}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { ShieldCheck, HardHat, CheckCircle, ClipboardList } from "lucide-react";

const qualityPoints = [
  "Incoming Inspection",
  "Installation Verification",
  "Functional Testing",
  "Documentation & Handover"
];

const safetyPoints = [
  "Risk Assessment (RA)",
  "Daily Toolbox Meetings",
  "Safe Work Procedures",
  "WSH Compliance"
];

export function QualitySafetySection() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-[32px] blur-3xl" />
          <Placeholder 
            icon={HardHat}
            title="Safety & Inspection"
            description="Recommended Asset: High-resolution safety inspection or engineering team photography."
            ratio="square"
            className="relative z-10 shadow-2xl border-white/10 bg-slate-800/50 text-white"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              Uncompromising Standards
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Quality Assured. <br />
              <span className="text-slate-400">Safety First.</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-foreground">
            
            {/* Quality Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[24px] bg-card border border-border/50 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4">Quality Assurance</h4>
              <ul className="space-y-3">
                {qualityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground text-sm font-medium">
                    <ClipboardList className="w-4 h-4 mr-2 text-primary/70 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Safety Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[24px] bg-card border border-border/50 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4">Workplace Safety</h4>
              <ul className="space-y-3">
                {safetyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground text-sm font-medium">
                    <ClipboardList className="w-4 h-4 mr-2 text-primary/70 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

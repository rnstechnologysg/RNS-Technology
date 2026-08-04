"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { Image as ImageIcon } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Featured Railway Project Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-5">
          
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-lg"
          >
            <Placeholder 
              icon={ImageIcon}
              title="Downtown Line (DTL)"
              description="Testing & Commissioning of Rolling Stock"
              ratio="square"
              className="w-full h-full border-none rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-8 flex flex-col justify-end">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Testing & Commissioning</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">Downtown Line (DTL) Fleet Verification</h3>
            </div>
          </motion.div>

          {/* Small Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] overflow-hidden relative group shadow-md"
          >
            <Placeholder 
              icon={ImageIcon}
              title="Thomson-East Coast Line"
              description="PSD Installation"
              ratio="wide"
              className="w-full h-full border-none rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Platform Screen Doors</span>
              <h3 className="text-base font-bold text-white">Thomson-East Coast Line</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden relative group shadow-md"
          >
            <Placeholder 
              icon={ImageIcon}
              title="R151 Fleet Overhaul"
              description="TCMS Integration"
              ratio="wide"
              className="w-full h-full border-none rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">TCMS Verification</span>
              <h3 className="text-base font-bold text-white">R151 Fleet Modification</h3>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[2rem] overflow-hidden relative group shadow-md"
          >
            <Placeholder 
              icon={ImageIcon}
              title="Bukit Panjang LRT"
              description="Mechanical Assembly"
              ratio="wide"
              className="w-full h-full border-none rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">LRT Overhaul</span>
              <h3 className="text-base font-bold text-white">Bukit Panjang LRT</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-md"
          >
            <Placeholder 
              icon={ImageIcon}
              title="Sengkang Punggol LRT"
              description="C801B Fleet Upgrade"
              ratio="wide"
              className="w-full h-full border-none rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Fleet Upgrade</span>
              <h3 className="text-lg font-bold text-white">Sengkang Punggol LRT C801B Modification</h3>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

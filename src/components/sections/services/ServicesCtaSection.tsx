"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useContactModal } from "@/context/ContactModalContext";

export function ServicesCtaSection() {
  const { openModal } = useContactModal();
  return (
    <section className="py-24 bg-[#FAFAF9] border-t border-[#ECECEC] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="relative rounded-[2.5rem] bg-slate-950 p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none" 
            style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans font-semibold text-xs uppercase tracking-widest text-blue-400 mb-4 block"
            >
              Get Started Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-rounded font-semibold text-3xl sm:text-5xl lg:text-[52px] tracking-tight text-white leading-[1.15] mb-6"
            >
              Looking for Skilled Resources for Your Next Project?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Tell us about your project requirements, and our team will help you find the right workforce and technical support solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold text-base transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-[1.02] cursor-pointer"
              >
                <span>Request Consultation</span>
                <Icon icon="hugeicons:arrow-right-02" className="w-5 h-5" />
              </button>

              <button
                onClick={openModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const purposes = [
  {
    title: "Mission",
    icon: "hugeicons:flag-01",
    desc: "Deliver dependable workforce and technical support solutions that empower businesses to scale efficiently and meet project deadlines.",
  },
  {
    title: "Vision",
    icon: "hugeicons:search-visual",
    desc: "Become the most trusted workforce solutions partner in the region, recognized for our unwavering standard of safety, quality, and reliability.",
  },
  {
    title: "Commitment",
    icon: "hugeicons:shield-01",
    desc: "Helping clients deliver complex projects efficiently and safely by supplying exactly the right technical talent exactly when it's needed.",
  },
];

export function OurPurposeSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-overline mb-3 block"
          >
            Our Purpose
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-rounded font-semibold text-3xl lg:text-[44px] tracking-tight text-slate-900"
          >
            Why we do what we do.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {purposes.map((purpose, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-10 rounded-3xl bg-slate-950 overflow-hidden"
            >
              {/* Animated hover gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  <Icon icon={purpose.icon} className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-sans font-bold text-[28px] tracking-tight text-white mb-4">
                  {purpose.title}
                </h3>
                
                <p className="font-sans text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {purpose.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

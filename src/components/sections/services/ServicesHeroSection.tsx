"use client";

import { motion } from "framer-motion";

export function ServicesHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background Image (Desktop & Mobile responsive) */}
      <img 
        src="/images/services.webp" 
        alt="Services Background" 
        className="w-full h-auto hidden md:block"
      />
      <img 
        src="/images/services-mob.webp" 
        alt="Services Mobile Background" 
        className="w-full h-auto block md:hidden"
      />
      
      {/* Dark overlays */}
      <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
      
      {/* Text Content (Positioned absolutely over the image) */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-overline mb-2 md:mb-4 block text-blue-400"
          >
            Our Capabilities
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-rounded font-semibold text-3xl sm:text-5xl lg:text-[72px] tracking-tighter leading-[1.05] text-white max-w-[900px] mx-auto mb-4 md:mb-8 drop-shadow-sm"
          >
            Solutions That Keep Projects Moving
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-body-lg text-slate-300 max-w-3xl mx-auto hidden sm:block"
          >
            From workforce deployment and technical support to railway engineering services, RNS Technology helps organizations deliver projects with skilled professionals, reliable execution, and ongoing support.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

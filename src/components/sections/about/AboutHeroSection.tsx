"use client";

import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-slate-950 min-h-[80vh] flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/about-us.webp" 
          alt="RNS Technology Team" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-overline mb-4 block text-blue-400"
        >
          About RNS Technology
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-rounded font-semibold text-5xl lg:text-[64px] tracking-tighter leading-[1.05] text-white max-w-[900px] mx-auto mb-8 drop-shadow-sm"
        >
          Building Strong Partnerships Through Skilled Workforce & Technical Expertise
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-slate-300 max-w-2xl mx-auto"
        >
          RNS Technology is a premier engineering resource provider based in Singapore. We specialize in helping businesses deliver mission-critical projects safely and efficiently through tailored workforce solutions and specialized technical support.
        </motion.p>
      </div>
    </section>
  );
}

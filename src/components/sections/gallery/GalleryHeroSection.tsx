"use client";

import { motion } from "framer-motion";

interface GalleryHeroSectionProps {
  collageImages: { src: string; category: string; name: string }[];
}

export function GalleryHeroSection({ collageImages }: GalleryHeroSectionProps) {
  return (
    <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-slate-950 min-h-[80vh] flex flex-col justify-center">
      {/* Background Image / Collage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -80, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 p-2 h-[180%] w-[180%] -translate-x-[15%] -translate-y-[15%] -rotate-6 opacity-35"
        >
          {collageImages.map((img, i) => (
            <img key={i} src={img.src} alt="" className="w-full h-44 object-cover rounded-xl shadow-lg" />
          ))}
        </motion.div>
        {/* Dark overlays matching AboutHeroSection */}
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
          Project Gallery
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-rounded font-semibold text-5xl lg:text-[64px] tracking-tighter leading-[1.05] text-white max-w-[900px] mx-auto mb-8 drop-shadow-sm"
        >
          Our Work in Action Across Major Transit Networks
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-slate-300 max-w-2xl mx-auto"
        >
          Explore our extensive portfolio showcasing railway engineering excellence, technical support, and precision manufacturing across major transit networks.
        </motion.p>
      </div>
    </section>
  );
}

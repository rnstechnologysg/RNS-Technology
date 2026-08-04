"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projectLogos = [
  {
    name: "Alstom",
    src: "/icons/Alstom_logo (1).svg",
  },
  {
    name: "Bombardier",
    src: "/icons/Bombardier-logo-black.svg",
  },
  {
    name: "CRRC",
    src: "/icons/CRRC-Logo.wine.svg",
  },
  {
    name: "Kawasaki",
    src: "/icons/kawasaki-logo.svg",
  },
  {
    name: "ST Engineering",
    src: "/icons/ST Engineering Logo SVG.svg",
  },
];

// Duplicate for infinite seamless marquee loop
const marqueeLogos = [...projectLogos, ...projectLogos, ...projectLogos];

export function ProjectExperienceSection() {
  return (
    <section className="w-full bg-slate-50/80 border-y border-slate-100 py-12 md:py-16 overflow-hidden">
      <div className="w-full flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <span className="tracking-widest text-[#1e40af] font-bold text-[14px] uppercase mb-2 block font-sans">
            Proven Track Record
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 font-rounded tracking-tight">
            Project Experiences
          </h2>
        </motion.div>

        {/* Moving Marquee Row */}
        <div className="relative w-full overflow-hidden mask-fade">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-12 md:gap-20 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="relative h-12 md:h-16 w-36 md:w-44 lg:w-48 shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  fill
                  className="object-contain object-center"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}


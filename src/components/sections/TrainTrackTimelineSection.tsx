"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Train, CheckCircle2 } from "lucide-react";

interface ProjectTimelineItem {
  id: string;
  title: string;
  code: string;
  color: string;
  bgColor: string;
  borderColor: string;
  scopes: string[];
}

const timelineProjects: ProjectTimelineItem[] = [
  {
    id: "dtl",
    title: "Downtown Line (DTL)",
    code: "DTL",
    color: "#005EC4", // Singapore DTL Blue
    bgColor: "bg-blue-50/70",
    borderColor: "border-blue-500/30",
    scopes: [
      "Rolling Stock Engineering",
      "Testing & Commissioning",
      "Maintenance Support",
      "Technical Services",
    ],
  },
  {
    id: "tel",
    title: "Thomson–East Coast Line (TEL)",
    code: "TEL",
    color: "#9D5B25", // Singapore TEL Brown
    bgColor: "bg-amber-950/5",
    borderColor: "border-amber-700/30",
    scopes: [
      "Railway Engineering",
      "Technical Support",
      "Maintenance Activities",
    ],
  },
  {
    id: "ewl",
    title: "East–West Line (R151)",
    code: "EWL / R151",
    color: "#009645", // Singapore EWL Green
    bgColor: "bg-emerald-50/70",
    borderColor: "border-emerald-500/30",
    scopes: [
      "Rolling Stock Support",
      "Testing",
      "Commissioning",
      "Engineering Services",
    ],
  },
  {
    id: "bplrt",
    title: "Bukit Panjang LRT (BPLRT)",
    code: "BPLRT",
    color: "#536759", // Singapore LRT Grey-Green
    bgColor: "bg-slate-100/80",
    borderColor: "border-slate-500/30",
    scopes: [
      "Maintenance",
      "Inspection",
      "Engineering Support",
    ],
  },
  {
    id: "crrc",
    title: "CRRC Interior Refurbishment",
    code: "CRRC",
    color: "#702082", // Purple
    bgColor: "bg-purple-50/70",
    borderColor: "border-purple-500/30",
    scopes: [
      "Interior Refurbishment",
      "Mechanical Modification",
      "Installation Works",
      "Quality Inspection",
    ],
  },
  {
    id: "sengkang",
    title: "Sengkang C801B",
    code: "SKLRT / C801B",
    color: "#0284C7", // Sky Blue
    bgColor: "bg-sky-50/70",
    borderColor: "border-sky-500/30",
    scopes: [
      "Rolling Stock Engineering",
      "Mechanical Support",
      "Electrical Support",
    ],
  },
  {
    id: "psd",
    title: "Platform Screen Door (PSD) Projects",
    code: "PSD",
    color: "#0D9488", // Teal
    bgColor: "bg-teal-50/70",
    borderColor: "border-teal-500/30",
    scopes: [
      "Installation",
      "Testing",
      "Commissioning",
      "Preventive Maintenance",
      "Corrective Maintenance",
    ],
  },
];

export function TrainTrackTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress tracking for track and moving train object
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  // Map scroll progress to train position (0% -> 100%)
  const trainTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Track fill scale
  const trackScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full bg-slate-50/70 text-slate-900 py-12 md:py-16 relative overflow-hidden border-y border-slate-200/60">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#1e40af] mb-2 block">
            Singapore Network Projects
          </span>
          <h2 className="font-rounded font-semibold text-3xl lg:text-[44px] tracking-tight text-[#161616]">
            Major Project Timeline
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* ── CENTER TRAIN TRACK ──────────────────────────────── */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 flex justify-between px-1.5 pointer-events-none z-10">
            {/* Background Steel Track Rails */}
            <div className="w-0.5 bg-slate-300 h-full rounded-full" />
            <div 
              className="absolute inset-x-0 inset-y-0 w-full opacity-60"
              style={{
                backgroundImage: `repeating-linear-gradient(to bottom, #94a3b8 0px, #94a3b8 3px, transparent 3px, transparent 14px)`,
              }}
            />
            <div className="w-0.5 bg-slate-300 h-full rounded-full" />

            {/* Glowing Track Fill line growing with scroll */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-700 origin-top shadow-sm"
              style={{ scaleY: trackScaleY }}
            />
          </div>

          {/* ── MOVING TRAIN OBJECT ─────────────────────────────── */}
          <motion.div
            style={{ top: trainTop }}
            className="absolute left-5 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          >
            <div className="relative w-9 h-9 rounded-full bg-[#0a192f] text-white flex items-center justify-center border-2 border-white shadow-md animate-pulse">
              <Train className="w-5 h-5 text-white stroke-[2.5]" />
              {/* Headlight effect */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 blur-[1px]" />
            </div>
          </motion.div>

          {/* ── TIMELINE ITEMS (Revealed one by one) ─────────────── */}
          <div className="space-y-8 md:space-y-12 relative z-20">
            {timelineProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Card Side */}
                  <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? "md:pl-16 md:pr-0" : "md:pr-16 md:pl-0"}`}>
                    <div 
                      className="p-5 md:p-6 rounded-lg bg-white border border-[#ECECEC] transition-all duration-150"
                    >
                      {/* Header Badge */}
                      <div className="flex items-center mb-4">
                        <span 
                          className="px-2.5 py-1 rounded-md text-white font-sans font-bold text-xs uppercase tracking-widest shadow-sm"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.code}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-xl lg:text-[28px] tracking-tight text-[#161616] mb-4 leading-snug">
                        {project.title}
                      </h3>

                      {/* Engineering Scope List */}
                      <div className="space-y-3 pt-4 border-t border-[#ECECEC]">
                        <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#8B8B8B] block">
                          Engineering Scope
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                          {project.scopes.map((scope, sIdx) => (
                            <div 
                              key={sIdx}
                              className="flex items-center gap-2 text-[#616161]"
                            >
                              <CheckCircle2 
                                className="w-[14px] h-[14px] shrink-0" 
                                style={{ color: project.color }} 
                                strokeWidth={2.5}
                              />
                              <span className="font-sans text-sm font-medium">{scope}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Station Dot on Center Track */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className="w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center shadow-xs"
                      style={{ borderColor: project.color }}
                    >
                      <div 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: project.color }} 
                      />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Side on Desktop */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

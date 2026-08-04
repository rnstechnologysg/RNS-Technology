"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function IsoCertificationSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Left info */}
          <div className="flex items-start gap-6 relative z-10 max-w-2xl">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mt-1">
              <Icon icon="hugeicons:checkmark-badge-01" className="w-10 h-10" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-400/20 mb-3">
                Quality & Safety Standard
              </span>
              <h3 className="font-rounded font-semibold text-3xl md:text-4xl text-white tracking-tight mb-2">
                ISO 45001:2018 Certified
              </h3>
              <p className="font-sans text-lg font-medium text-blue-100/90 mb-4">
                Occupational Health & Safety Management System
              </p>
              <p className="font-sans text-sm text-slate-400 border-t border-white/10 pt-4">
                <span className="font-semibold text-slate-300">Scope of Certification:</span> Provision of Electrical and Mechanical Works
              </p>
            </div>
          </div>

          {/* Right badge seal representation */}
          <div className="relative z-10 shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center min-w-[200px]">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-3">
              <Icon icon="hugeicons:shield-01" className="w-8 h-8 text-white" />
            </div>
            <span className="font-rounded font-bold text-lg text-white tracking-wide">ISO 45001</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-widest mt-0.5">Verified System</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

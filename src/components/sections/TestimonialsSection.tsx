"use client";

import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rolling Stock OEM Project Director",
    role: "Global Train Fleet Manufacturer",
    quote: "RNS Technology delivered exceptional precision during our fleet modification program in Singapore. Their engineering team met all LTA compliance standards with zero schedule slip.",
  },
  {
    name: "Mass Transit Maintenance Lead",
    role: "Singapore Rail Operator",
    quote: "Highly reliable technical manpower and TCMS diagnostic support. RNS technicians integrated seamlessly into our depot overhaul workflows during critical testing windows.",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by Railway Industry Leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-slate-700 text-sm leading-relaxed font-medium mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0 flex items-center justify-center text-slate-400">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{test.name}</h3>
                    <p className="text-xs text-primary font-semibold">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

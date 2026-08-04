"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { 
  FileText, 
  Settings2, 
  Zap, 
  Activity, 
  ShieldAlert, 
  CheckSquare, 
  Power, 
  BookOpen,
  UserCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  { icon: Settings2, name: "Mechanical", desc: "Assembly and overhaul" },
  { icon: Zap, name: "Electrical", desc: "Power and wiring systems" },
  { icon: Activity, name: "Railway Systems", desc: "TCMS, PSD, & CCTV integration" },
  { icon: ShieldAlert, name: "Safety Compliance", desc: "Strict WSH adherence" },
  { icon: CheckSquare, name: "Quality Assurance", desc: "Rigorous inspection standards" },
  { icon: FileText, name: "Testing", desc: "Static and dynamic verification" },
  { icon: Power, name: "Commissioning", desc: "Final handover readiness" },
  { icon: BookOpen, name: "Documentation", desc: "Engineering reports & manuals" },
  { icon: UserCheck, name: "Technical Support", desc: "Skilled manpower deployment" },
];

export function CapabilitiesSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Illustration */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Placeholder 
              icon={FileText}
              title="Technical Blueprint"
              description="Recommended Asset: High-resolution engineering blueprint or technical drawing."
              ratio="tall"
              className="min-h-[700px] border-border/50 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Right: Content & Cards */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              Engineering Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Precision Engineering <br />
              <span className="text-muted-foreground">in Every Detail</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link href="/capabilities" className="group block h-full">
                    <div className="h-full p-6 rounded-2xl bg-card border border-border/40 transition-all duration-300 hover:bg-sidebar hover:border-primary/30 hover:shadow-lg flex flex-col justify-between">
                      <div>
                        <Icon className="w-8 h-8 text-foreground mb-4 stroke-[1.5] group-hover:text-primary transition-colors" />
                        <h4 className="text-lg font-semibold tracking-tight mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Hover CTA */}
                      <div className="mt-6 flex items-center text-xs font-semibold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Learn More <ArrowRight className="ml-1 w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

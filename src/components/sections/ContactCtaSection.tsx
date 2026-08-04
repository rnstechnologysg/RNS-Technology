"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hexagon, Mail } from "lucide-react";

export function ContactCtaSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-primary to-blue-900 border border-blue-800 px-8 py-20 md:py-32 text-center shadow-2xl shadow-primary/20">
          
          {/* Abstract Background Element */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
             <Placeholder 
                icon={Hexagon}
                title=""
                description=""
                ratio="wide"
                className="w-[120%] h-[120%] opacity-50 border-none bg-transparent"
             />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sidebar/50 to-sidebar z-0" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Looking for Railway <br className="hidden md:block" />
              <span className="text-blue-200">
                Engineering Support?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/80">
              Partner with Singapore&apos;s premier railway engineering specialists to ensure safety, reliability, and excellence for your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="rounded-full px-8 h-14 w-full sm:w-auto text-base font-semibold group bg-white text-primary hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 w-full sm:w-auto text-base font-medium bg-transparent text-white border-white/20 hover:bg-white/10 group">
                Request Quotation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

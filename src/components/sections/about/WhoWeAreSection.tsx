"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const contentBlocks = [
  {
    title: "Company Introduction",
    icon: "hugeicons:building-03",
    text: "RNS Technology Pte. Ltd. is a trusted engineering resource provider headquartered in Singapore. We specialize in supplying highly skilled technical personnel to support large-scale infrastructure, railway, and commercial projects across the region.",
  },
  {
    title: "Business Focus",
    icon: "hugeicons:target-02",
    text: "Our core focus is bridging the gap between complex engineering demands and the specialized talent required to execute them. Whether it’s testing and commissioning rolling stock or providing WSH compliance officers, we ensure you have the exact expertise needed on site.",
  },
  {
    title: "Industries Served",
    icon: "hugeicons:factory-01",
    text: "While we have deep roots in the railway and mass transit sector—supporting major rolling stock manufacturers and operators—our capabilities extend into commercial construction, heavy industrial manufacturing, energy, and facility management.",
  },
  {
    title: "Commitment to Clients",
    icon: "hugeicons:shield-01",
    text: "We are obsessed with quality, safety, and compliance. Every engineer, technician, and supervisor we deploy undergoes rigorous vetting and safety inductions, ensuring they meet MOM standards and are ready to integrate seamlessly into your operations.",
  },
  {
    title: "Long-term Partnerships",
    icon: "hugeicons:link-square-02",
    text: "We don't just fill vacancies; we build lasting alliances. Our goal is to become an extension of your project management team, adapting to your shifting resource requirements throughout the entire lifecycle of your project—from planning to defect liability periods.",
  },
];

export function WhoWeAreSection() {
  return (
    <section className="py-32 bg-[#FAFAF9] relative">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-20">
          <span className="font-sans font-medium text-xs uppercase tracking-widest text-[#8B8B8B] mb-3 block">
            Who We Are
          </span>
          <h2 className="font-rounded font-semibold text-4xl lg:text-[56px] tracking-tight text-[#161616] leading-[1.1]">
            Driven by engineering excellence.
          </h2>
          <p className="font-sans text-lg text-[#616161] mt-6 max-w-2xl mx-auto">
            Scroll to discover how we bridge the gap between complex engineering demands and specialized talent across the region.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentBlocks.map((block, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white border border-[#ECECEC] rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon icon={block.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-rounded font-semibold text-2xl md:text-3xl text-[#161616] tracking-tight">
                  {block.title}
                </h3>
              </div>
              <p className="font-sans text-[#616161] leading-relaxed text-base md:text-lg">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

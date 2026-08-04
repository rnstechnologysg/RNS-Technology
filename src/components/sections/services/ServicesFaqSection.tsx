"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "What industries do you support?",
    answer: "We primarily support the Railway & Rail Transit, Heavy Engineering, Transportation, Infrastructure, and Industrial Equipment sectors. Our teams bring deep technical knowledge tailored to complex OEM specifications and operator compliance standards."
  },
  {
    question: "What workforce solutions do you provide?",
    answer: "We offer comprehensive workforce deployment, technical personnel recruitment, embedded project teams, and regulatory compliance support. Whether you need short-term specialist deployment or long-term technical staffing, we match qualified engineers and technicians to your operational needs."
  },
  {
    question: "Do you support testing and commissioning projects?",
    answer: "Yes. Our engineering teams deliver full static and dynamic testing, functional verification, TCMS system integration, and final verification reporting for rolling stock and platform screen door (PSD) projects prior to commercial handover."
  },
  {
    question: "What railway engineering services are available?",
    answer: "Our railway capabilities span preventive and corrective rolling stock maintenance, electrical and mechanical fleet modifications, interior refurbishments, TCMS software diagnostics, platform screen door (PSD) lifecycle support, and Defect Liability Period (DLP) technical assistance."
  },
  {
    question: "How can I request technical support?",
    answer: "You can submit an inquiry directly through our Contact page, or reach out to our project operations team at contact@rnstechnology.com. We analyze your technical scope and deploy specialized engineering support suited to your timeline."
  }
];

export function ServicesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white border-t border-[#ECECEC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[900px]">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans font-semibold text-xs uppercase tracking-widest text-blue-600 mb-3 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-rounded font-semibold text-4xl lg:text-[52px] tracking-tight text-[#161616] leading-[1.1]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-[#616161] mt-4"
          >
            Clear answers to common questions about our technical capabilities and engagement models.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#FAFAF9] border-blue-300 shadow-md" 
                    : "bg-white border-[#ECECEC] hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 px-8 text-left flex items-center justify-between gap-6 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-rounded font-semibold text-xl text-[#161616]">
                    {faq.question}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon icon="hugeicons:arrow-down-01" className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-6 pt-0 font-sans text-base text-[#616161] leading-relaxed border-t border-slate-200/60 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

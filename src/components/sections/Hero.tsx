"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  type Transition,
  type Variants,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon, Building04Icon } from "@hugeicons/core-free-icons";

const switchItems = [
  { text: "People",  icon: UserGroupIcon,  color: "#1e40af", bg: "#dbeafe" },
  { text: "Company", icon: Building04Icon, color: "#1e3a8a", bg: "#bfdbfe" },
];

// The WHOLE PILL (bg + content) scrolls as one unit
const pillVariants: Variants = {
  enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { y: "0%", opacity: 1 },
  exit:   (dir: number) => ({ y: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const pillTransition: Transition = { duration: 0.5, ease: "circOut" };

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((p) => (p + 1) % switchItems.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const item = switchItems[index];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section.webp"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />
        <Image
          src="/images/her-sec-mob.webp"
          alt="Hero Mobile Background"
          fill
          priority
          className="object-cover object-center block md:hidden"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 flex flex-col items-center text-center -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* ── Headline ───────────────────────────────────── */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-tight">
            The Right

            {/*
             * SLOT MACHINE PILL
             *
             * Strategy:
             *   - Outer span = clipping "window" (overflow:hidden)
             *   - AnimatePresence swaps the ENTIRE pill (bg + content) vertically
             *   - Each motion.span IS the pill — background, padding, border-radius included
             *   - Width is driven by content via LayoutGroup + layout animation
             *   - Content always centered because flex centering lives on the pill itself
             */}
            <LayoutGroup>
              <motion.span
                layout
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="relative inline-flex overflow-hidden"
                style={{
                  height: "clamp(56px, 8vw, 76px)",
                  borderRadius: 9999,
                  verticalAlign: "middle",
                }}
              >
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                  <motion.span
                    key={item.text}
                    layout
                    custom={direction}
                    variants={pillVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pillTransition}
                    className="flex items-center justify-center gap-2 whitespace-nowrap font-bold"
                    style={{
                      backgroundColor: item.bg,
                      color: item.color,
                      borderRadius: 9999,
                      paddingInline: "clamp(16px, 2.5vw, 32px)",
                      height: "clamp(56px, 8vw, 76px)",
                      fontSize: "inherit",
                    }}
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={36}
                      color={item.color}
                      strokeWidth={1.75}
                    />
                    <span
                      className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-none"
                    >
                      {item.text}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </LayoutGroup>

            {" "}&nbsp;. Ready for Every Project.
          </h1>

          <p className="max-w-3xl text-lg md:text-[22px] text-slate-700 font-semibold leading-snug mb-10">
            Whether you&apos;re expanding your team or delivering a major project, we provide
            dependable workforce solutions that help businesses move faster, stay compliant,
            and deliver with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/RNS-Technology-Brouchure.pdf"
              download="RNS-Technology-Brouchure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#1e40af] border border-white/40 font-bold rounded-full px-8 py-4 transition-all hover:scale-105 shadow-md"
            >
              <span className="text-base mr-3">Download Brochure</span>
              <Download className="w-5 h-5 text-[#1e40af] stroke-[2.5]" />
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white text-[#1e40af] font-bold rounded-full px-8 py-4 transition-all hover:scale-105 shadow-md"
            >
              <span className="text-base mr-3">Explore Our Services</span>
              <ArrowRight className="w-5 h-5 text-[#1e40af] stroke-[2.5]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const TRANSITION = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
      transition={TRANSITION}
      className="flex flex-col min-h-screen will-change-[opacity,transform,filter]"
    >
      {children}
    </motion.div>
  );
}

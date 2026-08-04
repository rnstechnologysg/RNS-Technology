"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";

import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
];

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isLight = theme === "light";
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showND, setShowND] = React.useState(false);

  React.useEffect(() => {
    // Cutoff time: August 10, 2026 11:59:59 PM Singapore Time (UTC+8)
    const cutoffDate = new Date("2026-08-10T23:59:59+08:00").getTime();
    if (Date.now() <= cutoffDate) {
      setShowND(true);
    }
  }, []);

  return (
    <header className="absolute top-0 w-full z-50 pt-4">
      <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo & National Day */}
        <div className="flex items-center gap-3 sm:gap-5 overflow-hidden py-1">
          <Link href="/" className="flex items-center z-10 bg-transparent">
            <Image 
              src="/rns_logo.svg" 
              alt="RNS Technology Logo" 
              width={150} 
              height={50} 
              className={`h-8 sm:h-10 w-auto object-contain transition-all ${isLight ? "invert opacity-90" : ""}`}
              priority
            />
          </Link>

          {showND && (
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-5 origin-left"
            >
              <div className={`w-[1px] h-8 sm:h-10 ${isLight ? "bg-slate-900/20" : "bg-white/30"}`} />

              <Image 
                src="/icons/ND.svg" 
                alt="Singapore National Day" 
                width={80} 
                height={50} 
                className="h-9 sm:h-12 w-auto object-contain"
                priority
              />
            </motion.div>
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className={`hidden lg:flex items-center p-1.5 rounded-full backdrop-blur-md border ${isLight ? "bg-slate-900/5 border-slate-900/10" : "bg-white/20 border-white/20"}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            const activeTextClass = isLight ? "text-white" : "text-slate-900";
            const inactiveTextClass = isLight
              ? "text-slate-700 hover:text-slate-900"
              : "text-white/90 hover:text-white";
              
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative px-8 py-2 rounded-full font-medium text-[18px] transition-colors ${isActive ? activeTextClass : inactiveTextClass}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full shadow-sm ${isLight ? "bg-slate-900" : "bg-white"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action (Desktop) */}
        <button
          onClick={openModal}
          className={`hidden lg:flex items-center rounded-full pl-6 pr-2 py-1.5 transition-all shadow-md group cursor-pointer ${isLight ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-[#0a192f] hover:bg-slate-800 text-white"}`}
        >
          <span className="text-[18px] font-medium mr-3">Contact us</span>
          <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </button>

        {/* Mobile & Tablet Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2.5 rounded-full border backdrop-blur-md transition-all ${
              isLight 
                ? "bg-slate-900/10 border-slate-900/20 text-slate-900" 
                : "bg-white/10 border-white/20 text-white"
            }`}
          >
            <Icon 
              icon={mobileMenuOpen ? "hugeicons:cancel-01" : "hugeicons:menu-01"} 
              className="w-6 h-6 stroke-[2]" 
            />
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Dropdown Navigation Drawer (Glossy Glassmorphic Style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mx-4 mt-3 p-5 rounded-[2rem] backdrop-blur-3xl bg-gradient-to-b from-slate-900/85 via-slate-950/80 to-slate-900/90 border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] overflow-hidden relative"
          >
            {/* Top Gloss Sheen Reflection */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col gap-2.5 relative z-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-3 px-5 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? "bg-gradient-to-r from-blue-600/30 to-blue-500/20 text-white font-semibold border border-blue-400/40 shadow-[0_4px_20px_rgba(37,99,235,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-md" 
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-white/15 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-600 text-white py-3.5 px-6 rounded-2xl font-semibold transition-all shadow-[0_10px_25px_rgba(37,99,235,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-blue-400/30 active:scale-[0.98] cursor-pointer"
                >
                  <span className="text-base tracking-wide">Contact us</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shadow-inner">
                    <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useContactModal } from "@/context/ContactModalContext";

const upcomingTopics = [
  {
    id: "tcms-diagnostics",
    category: "Railway Automation",
    title: "Next-Gen TCMS Diagnostics & Cyber-Physical Security",
    description: "An architectural deep-dive into Train Control & Management Systems, real-time telemetry, and fail-safe network protocols.",
    icon: "hugeicons:cpu",
    tag: "Upcoming Paper",
  },
  {
    id: "electrical-testing",
    category: "Power Systems",
    title: "High-Voltage Testing & Substation Commissioning",
    description: "Standard operating procedures and isolation testing methods for 750V DC and 25kV AC traction power systems.",
    icon: "hugeicons:zap",
    tag: "Case Study",
  },
  {
    id: "psd-modernization",
    category: "Infrastructure",
    title: "Platform Screen Doors (PSD) Safety Integration",
    description: "Modernizing signaling interlocking, obstacle detection, and emergency egress mechanisms on high-frequency transit lines.",
    icon: "hugeicons:shield-check",
    tag: "Technical Brief",
  },
];

export function BlogComingSoonSection() {
  const { openModal } = useContactModal();
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Simulate subscription process
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! You'll be the first to know when our insights launch.");
      setEmail("");
    }, 800);
  };

  return (
    <div className="relative overflow-hidden bg-[#FAFAF9] pt-36 pb-24 font-sans text-slate-800">
      {/* Background Decorative Ambient Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-teal-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        
        {/* Header Hero Container */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="font-sans font-semibold text-xs uppercase tracking-widest text-blue-700">
              RNS Insights & Technical Journal
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-rounded font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#161616] tracking-tight leading-[1.15]"
          >
            Engineering Knowledge &amp; Insights{" "}
            <span className="block mt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-slate-600 leading-relaxed"
          >
            We are curating deep-dive technical publications, railway system case studies, and engineering whitepapers from our project leads across Singapore and Asia-Pacific.
          </motion.p>

          {/* Newsletter Notification Input Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 max-w-lg mx-auto"
          >
            {status === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-3 text-emerald-800 text-sm font-medium shadow-sm">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Icon icon="hugeicons:checkmark-circle-02" className="w-5 h-5 text-emerald-600" />
                </div>
                <p>{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-white rounded-2xl sm:rounded-full border border-slate-200 shadow-md focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
                  <div className="flex items-center gap-2 pl-4 w-full sm:w-auto flex-1">
                    <Icon icon="hugeicons:mail-01" className="w-5 h-5 text-slate-400 shrink-0" />
                    <input
                      id="blog-notify-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your professional email"
                      className="w-full bg-transparent py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-sm tracking-wide transition-all shadow-sm active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Icon icon="hugeicons:loading-03" className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Notified</span>
                        <Icon icon="hugeicons:arrow-right-02" className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {message && status === "idle" && (
                  <p className="text-xs text-rose-500 font-medium">{message}</p>
                )}

                <p className="text-xs text-slate-500 font-sans">
                  No spam ever. Unsubscribe at any time. Read our{" "}
                  <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Sneak Peek Upcoming Topics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 space-y-8"
        >
          <div className="text-center">
            <span className="text-overline">Upcoming Publications</span>
            <h2 className="font-rounded font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-1">
              What to Expect in Our First Edition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTopics.map((topic) => (
              <div
                key={topic.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon icon={topic.icon} className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-sans font-medium text-xs">
                      {topic.tag}
                    </span>
                  </div>

                  <span className="font-sans font-semibold text-xs uppercase tracking-wider text-blue-600">
                    {topic.category}
                  </span>

                  <h3 className="font-sans font-bold text-xl text-slate-900 tracking-tight mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Icon icon="hugeicons:clock-01" className="w-3.5 h-3.5" />
                    Publishing Soon
                  </span>
                  <span className="text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Preview Teaser
                    <Icon icon="hugeicons:arrow-right-02" className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <h3 className="font-rounded font-semibold text-2xl sm:text-3xl tracking-tight text-white">
              Need Engineering Support Today?
            </h3>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our turnkey services across Railway Systems, Electrical Integration, Testing &amp; Commissioning, and Manpower Deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-sans font-bold text-sm text-center transition-all shadow-md active:scale-95"
            >
              Explore Services
            </Link>
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-sm text-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Contact Engineering
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

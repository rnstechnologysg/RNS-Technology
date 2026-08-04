"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

// Node positions in SVG viewBox (1100 x 640)
const CENTER = { x: 550, y: 320 };

const NODES = [
  { id: "workforce",    label: "Workforce",     icon: "hugeicons:user-group",       x: 550, y: 320, isCenter: true  },
  { id: "compliance",   label: "Compliance",    icon: "hugeicons:shield-01",         x: 900, y: 140 },
  { id: "recruitment",  label: "Recruitment",   icon: "hugeicons:search-visual",     x: 900, y: 480 },
  { id: "technical",    label: "Technical",     icon: "hugeicons:settings-01",       x: 550, y: 570 },
  { id: "deployment",   label: "Deployment",    icon: "hugeicons:rocket-01",         x: 200, y: 480 },
  { id: "payroll",      label: "Payroll",        icon: "hugeicons:wallet-01",         x: 200, y: 140 },
  { id: "project",      label: "Project Support",icon: "hugeicons:customer-support", x: 550, y: 70  },
];

// Spokes: center to each outer node
const SPOKE_EDGES = [
  ["workforce", "compliance"],
  ["workforce", "recruitment"],
  ["workforce", "technical"],
  ["workforce", "deployment"],
  ["workforce", "payroll"],
  ["workforce", "project"],
];

// Outer ring connections
const RING_EDGES = [
  ["project",    "compliance"],
  ["compliance", "recruitment"],
  ["recruitment","technical"],
  ["technical",  "deployment"],
  ["deployment", "payroll"],
  ["payroll",    "project"],
];

function nodeById(id: string) {
  return NODES.find(n => n.id === id)!;
}

function pathLength(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function ServicesSection() {
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isEdgeActive = (a: string, b: string) => {
    if (!hovered) return false;
    if (hovered === "workforce") return true;
    return hovered === a || hovered === b;
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans font-medium text-xs uppercase tracking-widest text-blue-400 mb-3 block">
            Our Service Ecosystem
          </span>
          <h2 className="font-rounded font-semibold text-4xl lg:text-[56px] tracking-tight text-white leading-[1.1]">
            Everything Connected
          </h2>
        </div>

        {/* THE ILLUSTRATION */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-0 lg:pb-[58.2%] flex items-center justify-center">
          
          {/* SVG Layer — Connection Lines */}
          <svg
            viewBox="0 0 1100 640"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <filter id="glow-line">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Particle gradient */}
              <linearGradient id="particle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(37,99,235,0)" />
                <stop offset="50%" stopColor="rgba(99,160,255,1)" />
                <stop offset="100%" stopColor="rgba(37,99,235,0)" />
              </linearGradient>
            </defs>

            {/* Spoke edges */}
            {SPOKE_EDGES.map(([aId, bId]) => {
              const a = nodeById(aId);
              const b = nodeById(bId);
              const len = pathLength(a.x, a.y, b.x, b.y);
              const active = isEdgeActive(aId, bId);
              return (
                <line
                  key={`spoke-${aId}-${bId}`}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={active ? "rgba(99,160,255,0.9)" : "rgba(255,255,255,0.18)"}
                  strokeWidth={active ? "2.5" : "1.5"}
                  filter={active ? "url(#glow-line)" : undefined}
                  strokeDasharray={len}
                  strokeDashoffset={inView ? "0" : len}
                  style={{
                    transition: `stroke-dashoffset 1s cubic-bezier(0.65,0,0.35,1) ${SPOKE_EDGES.findIndex(([a]) => a === aId) * 0.12 + 0.3}s, stroke 0.3s, stroke-width 0.3s`
                  }}
                />
              );
            })}

            {/* Outer ring edges */}
            {RING_EDGES.map(([aId, bId]) => {
              const a = nodeById(aId);
              const b = nodeById(bId);
              const active = isEdgeActive(aId, bId);
              return (
                <line
                  key={`ring-${aId}-${bId}`}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={active ? "rgba(99,160,255,0.7)" : "rgba(255,255,255,0.12)"}
                  strokeWidth={active ? "2" : "1.5"}
                  strokeDasharray={`6 8`}
                  filter={active ? "url(#glow-line)" : undefined}
                  style={{ transition: `stroke 0.3s, stroke-width 0.3s` }}
                />
              );
            })}
          </svg>

          {/* Node Layer — HTML elements over SVG */}
          {NODES.map((node) => {
            const isCenter = node.isCenter;
            const isHov = hovered === node.id;
            const isFaded = hovered && hovered !== node.id && !isEdgeActive(node.id, hovered ?? "") && !isCenter;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                className="absolute flex flex-col items-center gap-1 sm:gap-2 cursor-default select-none"
                style={{
                  // Convert SVG coords to % positions
                  left: `${(node.x / 1100) * 100}%`,
                  top: `${(node.y / 640) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: inView ? (isFaded ? 0.35 : 1) : 0,
                  transition: `opacity 0.6s ease ${NODES.indexOf(node) * 0.08 + 0.4}s, transform 0.3s ease`,
                  zIndex: isCenter ? 30 : 20,
                }}
              >
                {/* Node circle */}
                <div
                  className={`
                    relative flex items-center justify-center rounded-full transition-all duration-300
                    ${isCenter
                      ? `w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28 shadow-[0_0_50px_rgba(37,99,235,0.65)]`
                      : `w-11 h-11 sm:w-14 sm:h-14 md:w-[4.5rem] md:h-[4.5rem] shadow-[0_0_20px_rgba(0,0,0,0.6)]`
                    }
                  `}
                  style={{
                    background: isCenter
                      ? "radial-gradient(circle at 40% 40%, #2563eb, #1d4ed8)"
                      : isHov
                      ? "linear-gradient(135deg, #1e293b, #0f172a)"
                      : "linear-gradient(135deg, #1e293b, #090d16)",
                    border: isCenter
                      ? "2px sm:border-3 solid rgba(99,160,255,0.7)"
                      : isHov
                      ? "2px solid rgba(99,160,255,0.7)"
                      : "1.5px solid rgba(255,255,255,0.2)",
                    transform: isHov && !isCenter ? "scale(1.12)" : "scale(1)",
                    boxShadow: isHov && !isCenter
                      ? "0 0 30px rgba(37,99,235,0.4)"
                      : undefined,
                  }}
                >
                  {/* Pulse ring on center node */}
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: "2.5s" }} />
                      <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-blue-500/30 animate-pulse" />
                    </>
                  )}
                  <Icon
                    icon={node.icon}
                    className={`transition-colors duration-300 ${
                      isCenter 
                        ? "w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" 
                        : isHov 
                        ? "w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" 
                        : "w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    }`}
                  />
                </div>

                {/* Label */}
                <div
                  className={`
                    font-sans font-semibold whitespace-nowrap transition-all duration-300 drop-shadow-md text-center
                    ${isCenter ? "text-white text-xs sm:text-base md:text-xl mt-0.5 font-bold" : "text-[11px] sm:text-xs md:text-sm"}
                    ${!isCenter && isHov ? "text-blue-400" : !isCenter ? "text-slate-200 font-medium" : ""}
                  `}
                >
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

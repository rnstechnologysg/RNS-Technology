"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Section {
  id: string;
  title: string;
}

interface PolicyContentProps {
  sections: Section[];
  children: React.ReactNode;
}

export function PolicyContent({ sections, children }: PolicyContentProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      {/* Sticky Table of Contents Sidebar */}
      <aside className="lg:col-span-4 sticky top-28 self-start max-h-[calc(100vh-8.5rem)] flex flex-col bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hidden lg:flex">
        <h2 className="font-rounded font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-slate-100 flex items-center gap-2 shrink-0">
          <Icon icon="hugeicons:menu-01" className="w-4 h-4 text-blue-600" />
          Table of Contents
        </h2>
        
        <nav className="space-y-1 overflow-y-auto pr-2 scrollbar-thin flex-1">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`block px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 truncate ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 pl-4"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Column */}
      <div className="lg:col-span-8 space-y-12 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm leading-relaxed text-slate-700">
        {children}
      </div>

    </div>
  );
}

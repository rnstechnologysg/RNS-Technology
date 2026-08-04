"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useContactModal } from "@/context/ContactModalContext";

export function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="bg-white pt-16">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto">
        <div className="bg-[#030914] text-white rounded-t-[3rem] md:rounded-t-[4rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          
          {/* Top Row: Brand Logo, Description & Social Icons */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
            <div className="max-w-xl space-y-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/rns_logo.svg"
                  alt="RNS Technology"
                  width={140}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-rounded font-bold text-lg sm:text-xl text-white tracking-tight">
                  RNS Technology PTE. LTD
                </span>
              </Link>
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                Building dependable workforce solutions and technical support that help businesses deliver projects with confidence.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
              >
                <Icon icon="hugeicons:linkedin-02" className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
              >
                <Icon icon="hugeicons:facebook-02" className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://wa.me/6593412340"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all cursor-pointer"
              >
                <Icon icon="hugeicons:whatsapp" className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Main Navigation 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-slate-800/80 font-sans text-xs">
            {/* Pages */}
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Pages</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/services#workforce" className="hover:text-blue-400 transition-colors">Workforce Solutions</Link></li>
                <li><Link href="/services#technical" className="hover:text-blue-400 transition-colors">Technical Support</Link></li>
                <li><Link href="/services#railway" className="hover:text-blue-400 transition-colors">Railway Engineering</Link></li>
                <li><Link href="/services#support" className="hover:text-blue-400 transition-colors">Project Support</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="/RNS-Technology-Brouchure.pdf"
                    download="RNS-Technology-Brouchure.pdf"
                    target="_blank"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Download Brochure
                  </a>
                </li>
                <li><Link href="/gallery" className="hover:text-blue-400 transition-colors">Project Gallery</Link></li>
                <li><Link href="/services#faq" className="hover:text-blue-400 transition-colors">Services & FAQs</Link></li>
                <li>
                  <button
                    onClick={openModal}
                    className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                  >
                    Request Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3.5 text-slate-400">
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <Icon icon="hugeicons:location-01" className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre, Singapore 415978</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium text-white hover:text-blue-400 transition-colors">
                  <Icon icon="hugeicons:call" className="w-4 h-4 text-blue-500 shrink-0" />
                  <a href="tel:+6593412340">+65 9341 2340</a>
                </li>
                <li className="flex items-center gap-2.5 hover:text-blue-400 transition-colors">
                  <Icon icon="hugeicons:mail-01" className="w-4 h-4 text-blue-500 shrink-0" />
                  <a href="mailto:enquiry@rnstechnologysg.com" className="truncate">enquiry@rnstechnologysg.com</a>
                </li>
                <li className="pt-1">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline underline-offset-4"
                  >
                    <span>Contact Us</span>
                    <Icon icon="hugeicons:arrow-up-right-01" className="w-3.5 h-3.5" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Industries & ISO Certificate Bar (Merged as requested) */}
          <div className="py-8 border-b border-slate-800/80 font-sans text-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Industries</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Railway",
                  "Infrastructure",
                  "Construction",
                  "Industrial",
                  "Engineering Consultancy",
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* ISO Certification Badge - Placed on the right of Industries section */}
            <div className="flex items-center gap-3.5 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 hover:border-blue-500/40 transition-colors p-4 rounded-2xl shrink-0 max-w-md shadow-lg group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-500/10 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <Icon icon="hugeicons:certificate-01" className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-white text-xs tracking-wide">ISO 45001:2018 Certified</p>
                  <Icon icon="hugeicons:award-01" className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <p className="text-[11px] text-slate-300 font-medium">Occupational Health & Safety Management System</p>
                <p className="text-[10px] text-slate-400">Provision of Electrical & Mechanical Works</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Footer Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs text-slate-400">
            <p className="text-slate-300 font-medium">© {new Date().getFullYear()} RNS Technology Pte. Ltd. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>

            <div className="text-slate-400 text-xs">
              Designed with ❤️ in Singapore
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

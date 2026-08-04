"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useContactModal } from "@/context/ContactModalContext";

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [qrType, setQrType] = useState<"call" | "vcard">("call");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // QR Code Data with updated details
  const phoneNumber = "+65 9341 2340";
  const emailAddress = "enquiry@rnstechnologysg.com";
  const fullAddress = "18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre, Singapore 415978";

  const callQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent("tel:+6593412340")}&color=0f172a&ecc=H`;
  
  const vcardString = `BEGIN:VCARD
VERSION:3.0
N:Technology;RNS;;;
FN:RNS Technology
ORG:RNS Technology Pte. Ltd.
TEL;TYPE=CELL,VOICE:+6593412340
EMAIL:enquiry@rnstechnologysg.com
ADR;TYPE=WORK:;;18 Kaki Bukit Road 3, #03-09 Entrepreneur Business Centre;Singapore;;415978;Singapore
URL:https://rnstechnologysg.com
END:VCARD`;

  const vcardQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(vcardString)}&color=0f172a&ecc=H`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10 border border-slate-200 flex flex-col md:flex-row my-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer hover:rotate-90"
              aria-label="Close Modal"
            >
              <Icon icon="hugeicons:cancel-01" className="w-5 h-5" />
            </button>

            {/* Left Column: Direct Contact Details */}
            <div className="w-full md:w-7/12 p-8 sm:p-12 flex flex-col justify-between bg-white">
              <div>
                <h2 className="font-rounded font-semibold text-3xl sm:text-[40px] text-[#161616] tracking-tight leading-[1.1] mb-3">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#616161] leading-relaxed mb-8">
                  Reach out directly to our project management team to discuss workforce deployment and engineering support.
                </p>

                {/* Contact Cards List */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon icon="hugeicons:mail-01" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                        Email Inquiry
                      </p>
                      <a 
                        href={`mailto:${emailAddress}`}
                        className="font-sans font-semibold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors block truncate"
                      >
                        {emailAddress}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(emailAddress, "email")}
                      className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all shrink-0 cursor-pointer"
                      title="Copy Email"
                    >
                      <Icon 
                        icon={copiedField === "email" ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"} 
                        className={`w-5 h-5 ${copiedField === "email" ? "text-green-600" : ""}`} 
                      />
                    </button>
                  </div>

                  {/* Phone Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon icon="hugeicons:call" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                        Direct Phone
                      </p>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                        className="font-sans font-semibold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors block"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(phoneNumber, "phone")}
                      className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all shrink-0 cursor-pointer"
                      title="Copy Phone Number"
                    >
                      <Icon 
                        icon={copiedField === "phone" ? "hugeicons:checkmark-circle-02" : "hugeicons:copy-01"} 
                        className={`w-5 h-5 ${copiedField === "phone" ? "text-green-600" : ""}`} 
                      />
                    </button>
                  </div>

                  {/* Address Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon icon="hugeicons:location-01" className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                        Office Location
                      </p>
                      <p className="font-sans font-medium text-sm sm:text-base text-slate-800 leading-snug">
                        {fullAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-400 font-sans text-xs">
                <Icon icon="hugeicons:security-check" className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Strictly confidential under RNS Privacy Policy.</span>
              </div>
            </div>

            {/* Right Column: QR Code — Clean Premium Style */}
            <div className="w-full md:w-5/12 bg-white border-l border-slate-100 p-8 sm:p-12 flex flex-col justify-center items-center text-center relative">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-50 rounded-tr-[3rem] pointer-events-none" />

              {/* Top Logo */}
              <div className="relative z-10 w-full flex flex-col items-center mb-6">
                <Image
                  src="/rns_logo.svg"
                  alt="RNS Technology"
                  width={130}
                  height={44}
                  className="h-9 w-auto object-contain mb-1.5"
                />
                <span className="font-sans text-xs text-slate-400 font-medium tracking-wide">
                  Scan with your mobile camera
                </span>
              </div>

              {/* QR Card — Floating */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white rounded-[15px] p-2 relative flex items-center justify-center border border-slate-100 mb-6 overflow-hidden">
                  {/* QR Matrix */}
                  <Image
                    src={qrType === "call" ? callQrUrl : vcardQrUrl}
                    alt="Scan QR Code"
                    width={180}
                    height={180}
                    className="w-44 h-44 object-contain rounded-[15px]"
                    unoptimized
                  />
                  {/* Centered Logo Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-white rounded-[15px] border border-slate-100 flex items-center justify-center">
                      <Image
                        src="/rns_logo.svg"
                        alt="RNS"
                        width={32}
                        height={32}
                        className="w-8 h-8 object-contain brightness-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Label below QR */}
                <p className="font-rounded font-semibold text-sm text-[#161616] mb-4">
                  {qrType === "call" ? "Point camera to call us" : "Point camera to save contact"}
                </p>

                {/* Toggle Chips — Horizontal pill style */}
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full">
                  <button
                    type="button"
                    onClick={() => setQrType("call")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      qrType === "call"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Icon icon="hugeicons:call" className="w-3.5 h-3.5" />
                    <span>Scan to Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setQrType("vcard")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      qrType === "vcard"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Icon icon="hugeicons:contact" className="w-3.5 h-3.5" />
                    <span>Save Contact</span>
                  </button>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 mt-6 text-slate-400 text-xs font-sans">
                <p className="font-semibold text-slate-700 text-sm mb-0.5">{phoneNumber}</p>
                <p className="text-slate-400 truncate max-w-[220px]">{emailAddress}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

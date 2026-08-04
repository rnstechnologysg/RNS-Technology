"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  category: string;
  name: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories: string[];
}

export function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          onClick={() => setActiveCategory("All")} 
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === "All" 
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
              : "bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 shadow-sm border border-slate-200"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)} 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 uppercase ${
              activeCategory === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" 
                : "bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 shadow-sm border border-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid (Pinterest style) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={img.src}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-slate-200 shadow-md cursor-pointer mb-6"
            >
              {/* Image */}
              <Image 
                src={img.src}
                alt={img.name}
                width={800}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D1B]/90 via-[#060D1B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block py-1 px-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase rounded-lg w-max mb-2">
                  Project
                </span>
                <h3 className="text-white font-rounded font-semibold text-lg leading-tight">
                  {img.category === "BPLRT" && "Bukit Panjang LRT (BPLRT)"}
                  {img.category === "CRRC" && "CRRC Rolling Stock Project"}
                  {img.category === "downtown" && "Downtown Line (DTL) Project"}
                  {img.category === "kawasaki" && "Kawasaki Heavy Industries Fleet"}
                  {img.category === "R151" && "Alstom R151 Project"}
                  {!["BPLRT", "CRRC", "downtown", "kawasaki", "R151"].includes(img.category) && `${img.category} Project`}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredImages.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-400">
            No images found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

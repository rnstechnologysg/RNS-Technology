import fs from 'fs';
import path from 'path';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GalleryHeroSection } from '@/components/sections/gallery/GalleryHeroSection';
import { GalleryGrid } from '@/components/sections/gallery/GalleryGrid';

export const metadata = {
  title: "Gallery | RNS Technology",
  description: "Explore our extensive portfolio of railway engineering, technical support, and workforce solutions.",
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let categories: string[] = [];
  let images: { src: string; category: string; name: string }[] = [];

  try {
    if (fs.existsSync(galleryDir)) {
      categories = fs.readdirSync(galleryDir).filter(f => fs.statSync(path.join(galleryDir, f)).isDirectory());
      
      images = categories.flatMap(category => {
        const categoryDir = path.join(galleryDir, category);
        return fs.readdirSync(categoryDir)
          .filter(f => f.match(/\.(png|jpe?g|webp)$/i))
          .map(file => ({
            src: `/gallery/${category}/${file}`,
            category,
            name: file
          }));
      });
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  const collageImages = [...images, ...images, ...images].slice(0, 48);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#FAFAF9]">
        <GalleryHeroSection collageImages={collageImages} />
        
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            <GalleryGrid images={images} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

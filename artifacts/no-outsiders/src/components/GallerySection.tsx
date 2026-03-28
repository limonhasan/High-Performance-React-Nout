import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

// REPLACE WITH IG MEDIA HERE — swap these Unsplash URLs with your actual Instagram poster images
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80",
    alt: "Event Poster 1",
    height: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80",
    alt: "Event Poster 2",
    height: "short",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    alt: "Event Poster 3",
    height: "short",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    alt: "Event Poster 4",
    height: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    alt: "Event Poster 5",
    height: "short",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=600&q=80",
    alt: "Event Poster 6",
    height: "short",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80",
    alt: "Event Poster 7",
    height: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1481162854517-d9e353af153d?w=600&q=80",
    alt: "Event Poster 8",
    height: "short",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1571267854934-1a58ddf22c7e?w=600&q=80",
    alt: "Event Poster 9",
    height: "short",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-black" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31212]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-1 bg-[#E31212]" />
              <span className="sub-headline text-[#E31212] text-xs tracking-widest font-bold">
                GALLERY
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="headline text-white text-[clamp(2rem,6vw,4rem)]"
            >
              THE VIBE
              <br />
              <span className="text-[#E31212]">SPEAKS.</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://instagram.com" // REPLACE WITH IG HANDLE
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white/20 hover:border-[#E31212] px-5 py-3 sub-headline text-white/70 hover:text-white text-xs tracking-widest font-bold transition-all group"
          >
            <Instagram size={16} className="group-hover:text-[#E31212] transition-colors" />
            FOLLOW ON IG
          </motion.a>
        </div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="masonry-grid"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="masonry-item group relative overflow-hidden border-2 border-transparent hover:border-[#E31212] transition-all duration-300 cursor-pointer"
            >
              {/* REPLACE WITH IG MEDIA HERE */}
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover brightness-70 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500 ${
                  item.height === "tall" ? "h-64 sm:h-80" : "h-40 sm:h-52"
                }`}
              />
              <div className="absolute inset-0 bg-[#E31212]/0 group-hover:bg-[#E31212]/10 transition-all duration-300" />

              {/* Replace label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="sub-headline text-white/80 text-xs tracking-widest bg-black/60 px-3 py-1">
                  IG MEDIA
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-white/30 text-xs mt-8 sub-headline tracking-widest"
        >
          // REPLACE PLACEHOLDER IMAGES WITH YOUR INSTAGRAM POSTERS
        </motion.p>
      </div>
    </section>
  );
}

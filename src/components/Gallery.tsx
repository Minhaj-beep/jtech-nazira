import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { gallery, showcaseVideos } from "../lib/assets";
import SectionHeading from "./SectionHeading";
import GalleryLightbox, { type LightboxImage } from "./GalleryLightbox";

const GALLERY_IMAGES: (LightboxImage & { span?: string })[] = [
  {
    src: gallery.studentGroupPortrait,
    alt: "J.TECH students and instructors group photo inside the training lab",
    span: "sm:row-span-2",
  },
  {
    src: gallery.labClassroomWide01,
    alt: "Students working at repair workstations with microscopes",
  },
  {
    src: showcaseVideos[1].poster,
    alt: "Close-up of precision motherboard repair work at J.TECH",
  },
  {
    src: gallery.studentGroupLandscape,
    alt: "Wide group photo of J.TECH students and staff with training banners",
    span: "sm:col-span-2",
  },
  {
    src: gallery.labClassroomWide02,
    alt: "J.TECH training lab with students at individual benches",
  },
  {
    src: gallery.technicalPosterMacro,
    alt: "Technical circuit reference poster displayed at J.TECH",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-white py-24 sm:py-28" aria-label="Gallery">
      <div className="container-tight">
        <SectionHeading eyebrow="Gallery" title="Life at J.TECH" align="center" />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              type="button"
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-square overflow-hidden rounded-xl shadow-card sm:aspect-auto ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-3.5 w-3.5" aria-hidden />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

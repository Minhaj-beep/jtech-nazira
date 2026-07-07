import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { gallery } from "../lib/assets";
import SectionHeading from "./SectionHeading";
import GalleryLightbox, { type LightboxImage } from "./GalleryLightbox";

const FACILITY_IMAGES: LightboxImage[] = [
  { src: gallery.labClassroomWide01, alt: "Row of individual repair workstations with microscopes inside the J.TECH lab" },
  { src: gallery.labClassroomWide02, alt: "Wide view of the J.TECH training lab with students working at benches" },
  { src: gallery.technicalPosterMacro, alt: "Wall-mounted technical circuit diagram used for reference during training" },
];

export default function LabGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 sm:py-28" aria-label="Inside the J.TECH training lab">
      <div className="container-tight">
        <SectionHeading eyebrow="Facility" title="Inside the J.TECH Training Lab" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <motion.button
            type="button"
            onClick={() => setLightboxIndex(0)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card sm:col-span-2 sm:row-span-2 sm:aspect-auto"
          >
            <img
              src={FACILITY_IMAGES[0].src}
              alt={FACILITY_IMAGES[0].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <FrameOverlay />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setLightboxIndex(1)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
          >
            <img
              src={FACILITY_IMAGES[1].src}
              alt={FACILITY_IMAGES[1].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: "50% 30%" }}
            />
            <FrameOverlay />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setLightboxIndex(2)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card"
          >
            <img
              src={FACILITY_IMAGES[2].src}
              alt={FACILITY_IMAGES[2].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <FrameOverlay />
          </motion.button>
        </div>
      </div>

      <GalleryLightbox
        images={FACILITY_IMAGES}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}

function FrameOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Expand className="h-4 w-4" aria-hidden />
      </span>
    </>
  );
}

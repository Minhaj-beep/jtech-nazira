import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { gallery } from "../lib/assets";

export default function AboutSection() {
  return (
    <section id="about" className="bg-mist py-24 sm:py-28" aria-label="About J.TECH">
      <div className="container-tight grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={gallery.labClassroomWide02}
              loading="lazy"
              alt="Students working at individual repair benches inside the J.TECH training lab"
              className="aspect-[4/5] w-full object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden items-center gap-2 rounded-lg border border-navy-900/8 bg-white px-4 py-3 shadow-card sm:flex">
            <MapPin className="h-4 w-4 text-techblue-500" aria-hidden />
            <span className="text-sm font-semibold text-navy-900">Nazira, Assam</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-techblue-500" />
            About J.TECH
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">
            Training Built Around Real Technical Work
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            J.TECH Institute of Advanced Technology focuses on practical learning and technical
            confidence. Students work directly with real devices, repair equipment, and motherboards
            &mdash; building familiarity with inspection, diagnostics, and guided hands-on repair
            workflows rather than theory alone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            The training environment is built around the tools of the trade: microscopes, hot-air
            rework stations, precision drivers, and multimeters, used under guidance in a dedicated
            lab space in Nazira.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-navy-900/70">
            <MapPin className="h-4 w-4 text-techblue-500" aria-hidden />
            Nazira, Assam
          </div>

          <a
            href="#training"
            className="btn-ghost-navy mt-8 !inline-flex w-fit items-center gap-2"
          >
            Discover J.TECH
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

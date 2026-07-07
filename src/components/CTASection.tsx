import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24" aria-label="Enquire about training">
      <div className="pointer-events-none absolute inset-0 bg-circuit-lines bg-circuit opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-techblue-500/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />

      <div className="container-tight relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Ready to Build Advanced Mobile Repair Skills?
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            Speak with J.TECH about current training options, batches, and practical learning
            opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Enquire Now
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=J.TECH+Institute+of+Advanced+Technology+Nazira+Assam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Visit the Institute
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Wrench, Eye, CircuitBoard, Users, Building2, MapPinned } from "lucide-react";
import { gallery } from "../lib/assets";
import SectionHeading from "./SectionHeading";

const REASONS = [
  { icon: Wrench, text: "Hands-On Learning Environment" },
  { icon: Eye, text: "Exposure to Real Repair Work" },
  { icon: CircuitBoard, text: "Advanced Technical Focus" },
  { icon: Users, text: "Guided Practical Sessions" },
  { icon: Building2, text: "Dedicated Lab Setup" },
  { icon: MapPinned, text: "Local Training in Nazira" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-mist py-24 sm:py-28" aria-label="Why choose J.TECH">
      <div className="container-tight">
        <SectionHeading eyebrow="Why Choose J.TECH" title="A Practical, Technical Training Environment" />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl shadow-card lg:col-span-7"
          >
            <img
              src={gallery.studentGroupPortrait}
              loading="lazy"
              alt="Group of J.TECH students and instructors inside the training lab"
              className="h-full max-h-[560px] w-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {REASONS.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-xl border border-navy-900/8 bg-white px-5 py-4 shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-techblue-50">
                  <Icon className="h-4 w-4 text-techblue-500" aria-hidden />
                </span>
                <span className="text-[14.5px] font-semibold text-navy-900">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

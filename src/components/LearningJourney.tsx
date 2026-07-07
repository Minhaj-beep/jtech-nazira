import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    description: "Learn device architecture, components, and repair principles.",
  },
  {
    n: "02",
    title: "Observe",
    description: "Watch technical procedures and guided demonstrations.",
  },
  {
    n: "03",
    title: "Practise",
    description: "Work with tools, devices, boards, and practical exercises.",
  },
  {
    n: "04",
    title: "Build Confidence",
    description: "Develop a more systematic approach to diagnosis and repair.",
  },
];

export default function LearningJourney() {
  return (
    <section className="bg-mist py-24 sm:py-28" aria-label="Learning journey">
      <div className="container-tight">
        <SectionHeading eyebrow="The Learning Journey" title="A Straightforward Path From Theory to Practice" align="center" />

        <div className="relative mt-16">
          {/* connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-900/15 to-transparent lg:block" aria-hidden />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-start lg:items-center lg:text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-cyan-400 ring-4 ring-mist">
                  {step.n}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-900">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-[14.5px] leading-relaxed text-ink/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

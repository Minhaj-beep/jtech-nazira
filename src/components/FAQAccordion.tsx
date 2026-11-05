import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Who is the training suitable for?",
    a: "The training is aimed at anyone interested in building practical mobile repair skills, from beginners to those looking to strengthen existing technical knowledge. Contact J.TECH directly to discuss your background and suitability.",
  },
  {
    q: "Does the training cover Android and iPhone devices?",
    a: "Yes. Training focus areas include both Android and iPhone hardware, along with board-level and component-level work.",
  },
  {
    q: "Is the learning practical?",
    a: "Yes. J.TECH's approach centres on hands-on exposure to real devices, tools, and repair workflows in a dedicated lab environment.",
  },
  {
    q: "Where is J.TECH located?",
    a: "J.TECH Institute of Advanced Technology is located at Nazira Town, Puja Mandir Complex, 1st Floor, Sivasagar, Nazira, Assam \u2013 785685, India.",
  },
  {
    q: "How can I enquire about admission or training?",
    a: "Use the enquiry form in the Contact section below, or call the institute directly. Contact J.TECH directly for current batch, eligibility, duration, and admission details.",
  },
  {
    q: "Are course fees refundable?",
    a: "No. All fees paid to J.TECH Institute of Advanced Technology, including admission and course fees, are non-refundable once paid. We encourage you to visit the institute and clear any questions before enrolling.",
  },
  {
    q: "Can I visit the institute before enrolling?",
    a: "Contact J.TECH directly to arrange a visit and see the training lab in person before enrolling.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-mist py-24 sm:py-28" aria-label="Frequently asked questions">
      <div className="container-tight grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8 bg-white shadow-card">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-[15px] font-semibold text-navy-900">{faq.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-techblue-50 transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-3.5 w-3.5 text-techblue-500" aria-hidden />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-ink/70">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

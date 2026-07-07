import { Smartphone, Apple, Activity, CircuitBoard, Wrench, SearchCode } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TrainingCard from "./TrainingCard";

const TRAINING_AREAS = [
  {
    icon: Smartphone,
    title: "Android Device Repair",
    description: "Practical exposure to common Android hardware faults, disassembly, and component-level checks.",
  },
  {
    icon: Apple,
    title: "iPhone Repair Fundamentals",
    description: "Guided handling of iPhone hardware, connectors, and board layouts under lab supervision.",
  },
  {
    icon: Activity,
    title: "Motherboard Diagnostics",
    description: "Structured approaches to inspecting and testing motherboards for common fault patterns.",
  },
  {
    icon: CircuitBoard,
    title: "IC & Component-Level Work",
    description: "Focused practice with ICs, passive components, and board-level identification.",
  },
  {
    icon: Wrench,
    title: "Precision Tool Handling",
    description: "Hands-on familiarity with microscopes, hot-air stations, and precision drivers.",
  },
  {
    icon: SearchCode,
    title: "Practical Fault Finding",
    description: "Guided exercises in narrowing down device issues through observation and testing.",
  },
];

export default function TrainingGrid() {
  return (
    <section id="training" className="bg-white py-24 sm:py-28" aria-label="Training focus areas">
      <div className="container-tight">
        <SectionHeading
          eyebrow="What You'll Learn"
          title="Build Skills That Go Beyond Basic Repair"
          description="Training focus areas at J.TECH — practical skill-building, not guaranteed formal course modules. Contact the institute directly for current curriculum details."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_AREAS.map((area, i) => (
            <TrainingCard key={area.title} index={i} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}

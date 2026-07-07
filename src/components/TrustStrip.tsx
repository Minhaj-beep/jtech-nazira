import { GraduationCap, Wrench, Smartphone, CircuitBoard } from "lucide-react";

const ITEMS = [
  { icon: GraduationCap, label: "Practical Learning" },
  { icon: Wrench, label: "Real Repair Equipment" },
  { icon: Smartphone, label: "Android & iPhone Training" },
  { icon: CircuitBoard, label: "Advanced Technical Skills" },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 border-b border-navy-900/8 bg-white" aria-label="Highlights">
      <div className="container-tight grid grid-cols-2 divide-x divide-y divide-navy-900/8 sm:grid-cols-4 sm:divide-y-0">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 px-5 py-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-techblue-50">
              <Icon className="h-5 w-5 text-techblue-500" aria-hidden />
            </span>
            <span className="text-[13.5px] font-semibold leading-tight text-navy-900">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

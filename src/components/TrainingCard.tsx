import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TrainingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function TrainingCard({ icon: Icon, title, description, index }: TrainingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group card-surface p-6 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 transition-colors group-hover:bg-techblue-500">
        <Icon className="h-5 w-5 text-cyan-400 transition-colors group-hover:text-white" aria-hidden />
      </span>
      <h3 className="mt-5 text-[17px] font-bold tracking-tight text-navy-900">{title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">{description}</p>
    </motion.div>
  );
}

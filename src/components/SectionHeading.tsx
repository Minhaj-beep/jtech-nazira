import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-3", light && "text-cyan-400")}>
          <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-cyan-400" : "bg-techblue-500")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-ink/70")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

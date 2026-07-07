import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Wrench, Cpu } from "lucide-react";
import { heroVideo } from "../lib/assets";

const TRUST_POINTS = [
  { icon: Smartphone, label: "Android & iPhone" },
  { icon: Wrench, label: "Hands-On Lab Training" },
  { icon: Cpu, label: "Advanced Board-Level Skills" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isDesktop && !prefersReducedMotion) {
      v.play().catch(() => {
        /* autoplay can be blocked; poster remains visible */
      });
    } else {
      v.pause();
    }
  }, [isDesktop, prefersReducedMotion]);

  const showVideo = isDesktop && !prefersReducedMotion;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900 pt-[72px]"
      aria-label="Introduction"
    >
      {/* Background media */}
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{ objectPosition: "62% 30%" }}
            src={heroVideo.src}
            poster={heroVideo.poster}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        ) : (
          <img
            src={heroVideo.poster}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: "62% 30%" }}
            aria-hidden
          />
        )}
        {/* Cinematic overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/50" />
      </div>

      {/* Corner fiducial marks — signature circuit-board motif */}
      <div className="pointer-events-none absolute inset-6 hidden sm:block" aria-hidden>
        {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
          <span
            key={pos}
            className={`absolute h-4 w-4 border-cyan-400/50 ${pos} ${
              pos.includes("top") ? "border-t" : "border-b"
            } ${pos.includes("left") ? "border-l" : "border-r"}`}
          />
        ))}
      </div>

      <div className="container-tight relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow mb-5 text-cyan-400">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cyan-400" />
            Advanced Mobile Repair Training &bull; Nazira, Assam
          </span>

          <h1 className="text-balance font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Master Advanced <span className="text-cyan-400">Mobile Repair</span> Skills.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            Hands-on Android and iPhone repair training built around real devices, real tools, and
            practical board-level experience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Enquire About Training
            </a>
            <a href="#practical-lab" className="btn-secondary">
              Explore Practical Training
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/5">
                  <Icon className="h-4 w-4 text-cyan-400" aria-hidden />
                </span>
                <span className="text-sm font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

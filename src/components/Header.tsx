import { useEffect, useState } from "react";
import { Phone, Menu } from "lucide-react";
import { logo, CONFIG } from "../lib/assets";
import { cn } from "../lib/utils";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Practical Lab", href: "#practical-lab" },
  { label: "Gallery", href: "#gallery" },
  { label: "Certification", href: "#certification" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-900/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          : "bg-navy-900/40 backdrop-blur-sm"
      )}
    >
      <div className="container-tight flex h-[72px] items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="J.TECH Institute of Advanced Technology home">
          <img src={logo} alt="J.TECH Institute of Advanced Technology logo" className="h-11 w-11 rounded-md object-cover" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[15px] font-bold tracking-tight text-white">J.TECH</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
              Institute of Advanced Technology
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-white/75 transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONFIG.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3.5 py-2 text-[13px] font-medium text-white/85 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            Call Now
          </a>
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-[13.5px]">
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  );
}

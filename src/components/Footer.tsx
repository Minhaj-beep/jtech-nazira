import { logo, CONFIG } from "../lib/assets";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Training", href: "/#training" },
  { label: "Practical Lab", href: "/#practical-lab" },
];

const MORE_LINKS = [
  { label: "Gallery", href: "/#gallery" },
  { label: "Certification", href: "/#certification" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 py-16 text-white/70">
      <div className="container-tight grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/#home" className="flex items-center gap-2.5">
            <img src={logo} alt="J.TECH Institute of Advanced Technology logo" className="h-10 w-10 rounded-md object-cover" />
            <span className="font-display text-sm font-bold tracking-tight text-white">J.TECH</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Practical Android and iPhone mobile repair training, built around real board-level,
            hands-on experience in Nazira, Assam.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">Navigate</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/65 hover:text-cyan-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">More</h3>
          <ul className="mt-4 space-y-2.5">
            {MORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/65 hover:text-cyan-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/40">Contact</h3>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-white/65">
            <p>{CONFIG.address.line1}</p>
            <p>{CONFIG.address.line2}</p>
          </address>
        </div>
      </div>

      <div className="container-tight mt-12 border-t border-white/8 pt-6">
        <p className="text-xs text-white/35">
          &copy; {year} J.TECH Institute of Advanced Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

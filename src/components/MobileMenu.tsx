import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, MessageCircle } from "lucide-react";
import { CONFIG } from "../lib/assets";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  // Portal to <body>: the header's backdrop-filter would otherwise become the
  // containing block for this fixed overlay and clip it to the header's height.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-navy-900 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-tight flex h-[72px] items-center justify-between">
            <span className="font-display text-sm font-bold tracking-tight text-white">J.TECH</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
            }}
            className="container-tight mt-6 flex flex-col gap-1"
            aria-label="Primary"
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                variants={{
                  closed: { opacity: 0, x: -12 },
                  open: { opacity: 1, x: 0 },
                }}
                className="border-b border-white/8 py-4 text-lg font-semibold text-white/90"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>

          <div className="container-tight mt-8 flex flex-col gap-3">
            <a href="#contact" onClick={onClose} className="btn-primary w-full">
              Enquire Now
            </a>
            <a href={CONFIG.phoneHref} className="btn-secondary w-full">
              <Phone className="h-4 w-4" aria-hidden />
              Call Now
            </a>
            <a href={CONFIG.whatsappHref} className="inline-flex w-full items-center justify-center gap-2 rounded-md py-3 text-sm font-medium text-white/60">
              <MessageCircle className="h-4 w-4" aria-hidden />
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

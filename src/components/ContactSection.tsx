import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { CONFIG } from "../lib/assets";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapsQuery)}&output=embed`;

  return (
    <section id="contact" className="bg-white py-24 sm:py-28" aria-label="Contact J.TECH">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="J.TECH Institute of Advanced Technology"
          description="Reach out about training options, batches, or a visit to the institute."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="space-y-4">
              <InfoRow icon={MapPin} label="Address">
                {CONFIG.address.line1}
                <br />
                {CONFIG.address.line2}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                <a href={CONFIG.phoneHref} className="hover:text-techblue-500">
                  {CONFIG.phoneDisplay}
                </a>
                <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                  Configure
                </span>
              </InfoRow>
              <InfoRow icon={MessageCircle} label="WhatsApp">
                <a href={CONFIG.whatsappHref} className="hover:text-techblue-500">
                  Message J.TECH
                </a>
                <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                  Configure
                </span>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${CONFIG.email}`} className="hover:text-techblue-500">
                  {CONFIG.email}
                </a>
                <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                  Configure
                </span>
              </InfoRow>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-navy-900/8 shadow-card">
              <iframe
                title="J.TECH Institute of Advanced Technology location map"
                src={mapSrc}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface InfoRowProps {
  icon: typeof MapPin;
  label: string;
  children: ReactNode;
}

function InfoRow({ icon: Icon, label, children }: InfoRowProps) {
  return (
    <div className="flex gap-3.5 rounded-xl border border-navy-900/8 bg-mist p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white shadow-card">
        <Icon className="h-4 w-4 text-techblue-500" aria-hidden />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">{label}</p>
        <p className="mt-0.5 text-[14.5px] font-medium leading-relaxed text-navy-900">{children}</p>
      </div>
    </div>
  );
}

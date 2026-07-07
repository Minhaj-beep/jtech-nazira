import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CalendarCheck, FileText, X } from "lucide-react";
import { certificate } from "../lib/assets";
import SectionHeading from "./SectionHeading";

export default function CertificationSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="certification" className="bg-white py-24 sm:py-28" aria-label="Certification">
      <div className="container-tight grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="Credentials"
          title="Documented Institutional Credentials"
          description="J.TECH Institute of Advanced Technology holds a documented certificate of registration. Details below are shown exactly as they appear on the certificate."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-navy-900/10 shadow-card"
            aria-label="View certificate in full"
          >
            <img
              src={certificate.previewThumb}
              alt="J.TECH Institute of Advanced Technology certificate of registration preview"
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3.5 py-2 text-xs font-semibold text-navy-900">
              <FileText className="h-3.5 w-3.5 text-techblue-500" aria-hidden />
              View Certificate
            </span>
          </button>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-navy-900/8 bg-mist p-4">
              <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                <ShieldCheck className="h-3.5 w-3.5 text-techblue-500" aria-hidden />
                Certificate No.
              </dt>
              <dd className="mt-1.5 text-sm font-bold text-navy-900">{certificate.certificateNo}</dd>
            </div>
            <div className="rounded-lg border border-navy-900/8 bg-mist p-4">
              <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                <CalendarCheck className="h-3.5 w-3.5 text-techblue-500" aria-hidden />
                Certification Date
              </dt>
              <dd className="mt-1.5 text-sm font-bold text-navy-900">{certificate.dateOfCertification}</dd>
            </div>
            <div className="rounded-lg border border-navy-900/8 bg-mist p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">Expiry</dt>
              <dd className="mt-1.5 text-sm font-bold text-navy-900">{certificate.certificateExpiry}</dd>
            </div>
            <div className="rounded-lg border border-navy-900/8 bg-mist p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">Surveillance Audits</dt>
              <dd className="mt-1.5 text-sm font-bold text-navy-900">
                {certificate.surveillanceAudit1} &middot; {certificate.surveillanceAudit2}
              </dd>
            </div>
          </dl>

          <a
            href={certificate.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-fit"
          >
            <FileText className="h-4 w-4" aria-hidden />
            View Certificate
          </a>
        </motion.div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          onClick={() => setModalOpen(false)}
        >
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close certificate viewer"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={certificate.previewImage}
            alt="J.TECH Institute of Advanced Technology certificate of registration"
            className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

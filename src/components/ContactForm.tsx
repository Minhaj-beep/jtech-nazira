import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { CONFIG } from "../lib/assets";

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  /** Honeypot field — real users never fill this in. */
  company: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
  company: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * ADAPTER FUNCTION
 * ---------------------------------------------------------------------------
 * Delivers the enquiry to J.TECH on WhatsApp: opens a chat with
 * CONFIG.leadsWhatsapp pre-filled with the enquiry, and the visitor taps Send.
 * Must be called synchronously from the submit handler (before any await) so
 * browsers treat window.open as user-initiated and don't block it.
 */
async function submitEnquiry(data: Omit<FormState, "company">): Promise<{ ok: boolean }> {
  const lines = [
    "*New enquiry from jtechinstitute.in*",
    "",
    `*Name:* ${data.name.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    data.email.trim() ? `*Email:* ${data.email.trim()}` : null,
    data.interest ? `*Interest:* ${data.interest}` : null,
    "",
    `*Message:* ${data.message.trim()}`,
  ].filter((line) => line !== null);

  const url = `https://wa.me/${CONFIG.leadsWhatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;

  // Fall back to same-tab navigation if a popup blocker stops the new tab.
  // ("noopener" isn't passed because it makes window.open always return null.)
  const win = window.open(url, "_blank");
  if (win) win.opener = null;
  else window.location.href = url;
  return { ok: true };
}

const INTERESTS = [
  "Android Device Repair",
  "iPhone Repair Fundamentals",
  "Motherboard Diagnostics",
  "IC & Component-Level Work",
  "General Enquiry",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[+\d][\d\s-]{6,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, silently drop (treat as success to not tip off bots).
    if (form.company) {
      setStatus("success");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");
    try {
      const { ok } = await submitEnquiry({
        name: form.name,
        phone: form.phone,
        email: form.email,
        interest: form.interest,
        message: form.message,
      });
      setStatus(ok ? "success" : "error");
      if (ok) setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-navy-900/8 bg-white p-10 text-center shadow-card"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-techblue-50">
          <CheckCircle2 className="h-7 w-7 text-techblue-500" aria-hidden />
        </span>
        <h3 className="mt-5 text-lg font-bold text-navy-900">Almost Done!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/70">
          WhatsApp has opened with your enquiry. Tap <strong>Send</strong> in WhatsApp to deliver
          it to J.TECH, and we'll get back to you as soon as possible.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-ghost-navy mt-6">
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8">
      {/* Honeypot field — visually and accessibly hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses(!!errors.name)}
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone} required>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses(!!errors.phone)}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses(!!errors.email)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>

        <Field label="Training Interest" htmlFor="interest">
          <select
            id="interest"
            value={form.interest}
            onChange={(e) => update("interest", e.target.value)}
            className={inputClasses(false)}
          >
            <option value="">Select an area (optional)</option>
            {INTERESTS.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor="message" error={errors.message} required className="sm:col-span-2">
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClasses(!!errors.message)}
            placeholder="Tell J.TECH what you'd like to know..."
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          Something went wrong sending your enquiry. Please try again, or call the institute directly.
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-ink/50">
        Your details are used only to respond to your enquiry and are not shared with third parties. See our{" "}
        <a href="/privacy-policy/" className="font-medium text-techblue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-5 w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Enquiry on WhatsApp
          </>
        )}
      </button>
    </form>
  );
}

function inputClasses(hasError: boolean): string {
  return [
    "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-ink/35",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/40",
    hasError ? "border-red-400" : "border-navy-900/15 focus:border-techblue-400",
  ].join(" ");
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

function Field({ label, htmlFor, error, required, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-navy-900">
        {label}
        {required && <span className="text-techblue-500"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

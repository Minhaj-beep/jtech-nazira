import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { logo, CONFIG } from "../lib/assets";
import Footer from "../components/Footer";

const LAST_UPDATED = "1 November 2026";
const ORG_NAME = "J.TECH Institute of Advanced Technology";

const SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "meta-lead-ads", title: "Facebook & Instagram Lead Forms" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "sharing", title: "How We Share Information" },
  { id: "retention", title: "Data Retention" },
  { id: "security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights & Choices" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <header className="border-b border-navy-900/8 bg-white">
        <div className="container-tight flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label={`${ORG_NAME} home`}>
            <img src={logo} alt={`${ORG_NAME} logo`} className="h-9 w-9 rounded-md object-cover" />
            <span className="font-display text-sm font-bold tracking-tight text-navy-900">J.TECH</span>
          </a>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-techblue-500">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to website
          </a>
        </div>
      </header>

      <main className="bg-mist py-16 sm:py-20">
        <div className="container-tight max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink/55">Last updated: {LAST_UPDATED}</p>

          <p className="mt-8 leading-relaxed text-ink/80">
            {ORG_NAME} ("J.TECH", "we", "us" or "our") respects your privacy. This Privacy Policy explains what
            personal information we collect when you visit our website, fill in an enquiry form, or submit your
            details through our advertisements on Facebook and Instagram, and how we use and protect that
            information. By sharing your details with us, you agree to the practices described in this policy.
          </p>

          <nav aria-label="Policy contents" className="mt-10 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink/50">Contents</h2>
            <ol className="mt-3 grid list-decimal gap-1.5 pl-5 text-sm sm:grid-cols-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-techblue-600 hover:text-techblue-500 hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <Section id="information-we-collect" n={1}>
              <p>We collect only the information needed to respond to you and to help you with our training courses:</p>
              <ul>
                <li>
                  <strong>Contact details</strong> you provide, such as your full name, phone number, WhatsApp
                  number, email address, and city or location.
                </li>
                <li>
                  <strong>Enquiry details</strong>, such as the course or training area you are interested in, your
                  preferred batch timing, and any message you send us.
                </li>
                <li>
                  <strong>Technical information</strong> collected automatically when you visit our website, such
                  as your browser type, device type, pages viewed, and approximate location derived from your IP
                  address.
                </li>
              </ul>
              <p>We do not ask for, and you should not submit, sensitive information such as financial account details, passwords, or government ID numbers through our forms.</p>
            </Section>

            <Section id="how-we-use" n={2}>
              <p>We use your information to:</p>
              <ul>
                <li>Contact you by phone call, SMS, WhatsApp, or email to answer your enquiry;</li>
                <li>Share details about our courses, fees, batch schedules, admissions, and offers you asked about;</li>
                <li>Arrange institute visits, demo classes, and enrolment;</li>
                <li>Improve our website, courses, and advertising; and</li>
                <li>Comply with applicable laws and protect our legal rights.</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information to anyone.</p>
            </Section>

            <Section id="meta-lead-ads" n={3}>
              <p>
                We may run advertisements on Facebook and Instagram (Meta Platforms, Inc.) that include an instant
                lead form. When you submit a lead form:
              </p>
              <ul>
                <li>
                  The information you choose to submit (for example, your name, phone number, email address, city,
                  and course interest) is shared with J.TECH so that we can contact you about your enquiry.
                </li>
                <li>
                  Some fields may be pre-filled by Meta from your Facebook or Instagram profile. You can review and
                  edit these before submitting.
                </li>
                <li>
                  We use this information only for the purposes described in this policy, and we handle it in
                  accordance with Meta's terms for lead ads.
                </li>
              </ul>
              <p>
                Meta's own collection and use of your data is governed by the{" "}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                  Meta Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section id="cookies" n={4}>
              <p>
                Our website may use cookies and similar technologies, including analytics tools and the Meta Pixel,
                to understand how visitors use the site and to measure and improve the performance of our ads.
                These tools may collect information such as the pages you visit and actions you take on our site.
              </p>
              <p>
                You can block or delete cookies through your browser settings, and you can manage how Meta uses data
                for ads through your{" "}
                <a href="https://www.facebook.com/adpreferences/" target="_blank" rel="noopener noreferrer">
                  Facebook ad preferences
                </a>
                .
              </p>
            </Section>

            <Section id="sharing" n={5}>
              <p>We only share your personal information in the following limited cases:</p>
              <ul>
                <li>
                  <strong>Service providers</strong> who help us operate, such as website hosting, form handling,
                  email, messaging, or customer management tools. They may use your data only to provide services
                  to us.
                </li>
                <li>
                  <strong>Legal requirements</strong>, when we are required to disclose information by law, court
                  order, or a government authority.
                </li>
                <li>
                  <strong>With your consent</strong>, for any other purpose you have agreed to.
                </li>
              </ul>
            </Section>

            <Section id="retention" n={6}>
              <p>
                We keep your enquiry information for as long as needed to respond to you and to follow up about our
                courses, generally no longer than 24 months from your last contact with us, unless you enrol with
                us or a longer period is required by law. You can ask us to delete your information at any time.
              </p>
            </Section>

            <Section id="security" n={7}>
              <p>
                We take reasonable technical and organisational measures to protect your personal information from
                unauthorised access, loss, misuse, or alteration. Access is limited to staff who need it to respond
                to enquiries. However, no method of transmission over the internet or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" n={8}>
              <p>
                Subject to applicable law, including India's Digital Personal Data Protection Act, 2023, you have
                the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you;</li>
                <li>Ask us to correct or update inaccurate information;</li>
                <li>Ask us to delete your information;</li>
                <li>Withdraw your consent to being contacted at any time; and</li>
                <li>Raise a grievance about how your information is handled.</li>
              </ul>
              <p>
                To stop receiving messages from us, just reply "STOP" on WhatsApp or SMS, tell us on a call, or
                email us using the details below. We will act on your request within a reasonable time.
              </p>
            </Section>

            <Section id="children" n={9}>
              <p>
                Our courses are intended for adults and students old enough to enrol. If you are under 18, please
                submit an enquiry with the involvement of a parent or guardian. If we learn that we have collected
                information from a child without appropriate consent, we will delete it.
              </p>
            </Section>

            <Section id="changes" n={10}>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be posted on this
                page with a new "Last updated" date. We encourage you to review this page periodically.
              </p>
            </Section>

            <Section id="contact" n={11}>
              <p>
                If you have any questions, requests, or complaints about this Privacy Policy or how we handle your
                information, please contact us:
              </p>
              <address className="not-italic rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card">
                <p className="font-semibold text-navy-900">{ORG_NAME}</p>
                <p>{CONFIG.address.line1}</p>
                <p>{CONFIG.address.line2}</p>
                <p className="mt-3">
                  Email: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
                </p>
                <p>
                  Phone: <a href={CONFIG.phoneHref}>{CONFIG.phoneDisplay}</a>
                </p>
              </address>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({ id, n, children }: { id: string; n: number; children: ReactNode }) {
  const title = SECTIONS.find((s) => s.id === id)?.title;
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
        {n}. {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink/80 [&_a]:font-medium [&_a]:text-techblue-600 hover:[&_a]:underline [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

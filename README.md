# J.TECH Institute of Advanced Technology — Website

A production-quality marketing website for **J.TECH Institute of Advanced Technology**
(Nazira, Assam), built around the institute's real logo, lab photography, and repair
footage — no stock photography.

Stack: **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide React**.

---

## 1. Setup

```bash
# from the project root
npm install
```

## 2. Run (development)

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## 3. Build (production)

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output is written to `dist/`, ready to deploy to any static host
(Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

---

## 4. Asset inventory & mapping

Every image, video, and document on this site is a **real, supplied J.TECH asset**.
Nothing is stock photography. Full traceability from the original WhatsApp export
filenames to the semantic names used in code lives in `src/lib/assets.ts` — the
summary is below.

| Role | File used on site | Source |
|---|---|---|
| Logo | `public/assets/jtech-logo.jpeg` | Supplied logo |
| Hero background | `public/assets/video/hero-repair-loop.mp4` | Student performing precision work under a lab microscope |
| Video showcase (4 cards) | `chip-rework-01.mp4`, `motherboard-repair-01.mp4`, `chip-rework-02.mp4`, `motherboard-repair-02.mp4` | Real repair/rework footage |
| Supplementary footage (not on homepage, available for future sections) | `practical-training-01.mp4`, `practical-training-02.mp4` | Additional soldering/rework footage |
| About photo | `lab-classroom-wide-02.jpeg` | Candid lab shot |
| Why Choose Us photo | `student-group-portrait.jpeg` | Students & instructors group photo |
| Facility showcase | `lab-classroom-wide-01.jpeg`, `lab-classroom-wide-02.jpeg`, `technical-poster-macro.jpeg` | Lab + reference wall chart |
| Gallery ("Life at J.TECH") | Curated mix of the above plus `student-group-landscape.jpeg` | Curated, de-duplicated set |
| Certification | `public/assets/docs/jtech-certificate.pdf` + rendered preview images | Supplied certificate PDF |

### A note on one excluded video

One supplied clip (`WhatsApp Video ...16.33.32.mp4`) shows two people talking to
camera on a street in front of unrelated third-party banners (a local music school
ad and an unrelated social campaign banner) — it contains no repair, lab, or
training content, so it could not be truthfully captioned as institute footage.
Rather than force it into a section it doesn't belong in, it has been **excluded
from the live site** and preserved at
`public/assets/video/_unused-street-clip.mp4` in case the client can supply
context for it later. (Copy it in from the original export if you want to keep it
on hand — see `src/lib/assets.ts` for the full note.)

### Duplicate group photos

The original export contained five near-identical frames of the same posed group
photo (same people, same setup, slightly different crop/angle). Per the brief's
"no near-identical duplicates" instruction, only the two strongest crops
(`student-group-portrait.jpeg` and `student-group-landscape.jpeg`) are used across
the site; the rest are kept in `public/assets/gallery/` (suffixed `-alt`, `-alt2`)
for reference but are not rendered.

---

## 5. Site configuration

Contact details are centralised in one place and used by the Contact section,
footer, and privacy policy page:

**`src/lib/assets.ts` → `CONFIG` object:**

```ts
export const CONFIG = {
  phoneDisplay: "+91 93952 31669",
  phoneHref: "tel:+919395231669",
  whatsappHref: "https://wa.me/919395231669",
  email: "ravishah456789@gmail.com",
  address: { ... },     // from supplied brief
  mapsQuery: "...",     // used to build a Google Maps embed by place search,
                         // since no verified lat/lng was supplied
};
```

### Contact form delivery

The enquiry form (`src/components/ContactForm.tsx`) sends leads to WhatsApp.
On submit it opens a WhatsApp chat with `CONFIG.leadsWhatsapp` pre-filled
with the visitor's enquiry; the visitor taps Send to deliver it. Change the
number in `src/lib/assets.ts`. To deliver leads silently to a server instead
(e.g. Formspree, a serverless function, or the WhatsApp Business API), edit
the function marked `ADAPTER FUNCTION` in that file.

---

## 6. Confirmation: real media in use

- ✅ Real J.TECH logo used in header + footer
- ✅ Real lab/classroom photography used in About, Why Choose Us, Facility
  Showcase, and Gallery sections
- ✅ Real student/instructor group photography used (curated, de-duplicated)
- ✅ Real motherboard-repair and chip/IC-rework video footage used as the hero
  background and in the Practical Lab video showcase (4 cards)
- ✅ Real supplied certification PDF rendered as a preview image and linked for
  full viewing
- ❌ No stock photography, invented statistics, invented testimonials, invented
  certifications/accreditations, or invented contact details anywhere on the site

---

## 7. Structure

```
jtech/
├── index.html                 # SEO, Open Graph, JSON-LD (EducationalOrganization)
├── tailwind.config.js
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx                 # assembles all sections in order
│   ├── index.css               # Tailwind layers + design tokens
│   ├── lib/
│   │   ├── assets.ts            # full asset manifest + CONFIG placeholders
│   │   └── utils.ts
│   └── components/
│       ├── Header.tsx / MobileMenu.tsx
│       ├── Hero.tsx
│       ├── TrustStrip.tsx
│       ├── AboutSection.tsx
│       ├── TrainingGrid.tsx / TrainingCard.tsx
│       ├── VideoShowcase.tsx / VideoCard.tsx
│       ├── WhyChooseUs.tsx
│       ├── LabGallery.tsx
│       ├── LearningJourney.tsx
│       ├── CertificationSection.tsx
│       ├── Gallery.tsx / GalleryLightbox.tsx
│       ├── FAQAccordion.tsx
│       ├── CTASection.tsx
│       ├── ContactSection.tsx / ContactForm.tsx
│       ├── Footer.tsx
│       └── SectionHeading.tsx
└── public/assets/               # all real media, semantically renamed
    ├── jtech-logo.jpeg
    ├── favicon-256.png
    ├── gallery/                 # photos + web-sized thumbs
    ├── video/                   # web-encoded, muted, faststart mp4s
    ├── posters/                 # poster frames extracted from each video
    ├── certificate/             # certificate preview images
    └── docs/jtech-certificate.pdf
```

---

## 8. Performance & accessibility notes

- Hero video is muted, `playsInline`, and only rendered on desktop viewports;
  mobile and `prefers-reduced-motion` users see a static poster frame instead.
- All below-the-fold videos use `preload="none"` and only mount their `<video>`
  element once the user presses play.
- Gallery images ship with separate ~700px-wide thumbnails for the grid; full-size
  originals are only loaded when opened in the lightbox.
- All interactive elements are keyboard-operable; the lightbox supports
  `Escape`/`←`/`→`.
- Colour palette and type sizes were chosen to meet WCAG AA contrast on both
  dark (`navy-900`) and light (`mist`) backgrounds.

## 9. Quality checklist

- [x] Responsive at 320px–1440px+
- [x] Mobile menu (hamburger + slide-in) works independently of desktop nav
- [x] All CTAs point to a real in-page anchor, `tel:`/`mailto:`/WhatsApp link, or
      the certificate PDF
- [x] No invented statistics, testimonials, affiliations, or accreditation claims
- [x] Certificate opens both as an inline modal and in a new tab (PDF)
- [x] Gallery lightbox supports keyboard navigation
- [x] Form validates client-side with visible error and success states, plus a
      honeypot anti-spam field
- [x] `prefers-reduced-motion` respected in the hero and page transitions
# jtech-nazira

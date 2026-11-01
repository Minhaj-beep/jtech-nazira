/**
 * ASSET MANIFEST
 * ---------------------------------------------------------------------------
 * Maps every real J.TECH media asset (originally exported from WhatsApp with
 * non-descriptive filenames) to a semantic role used across the site.
 *
 * All files below are authentic J.TECH Institute assets supplied by the
 * client — the institute's own logo, lab photography, repair footage, and
 * certification document. Nothing here is stock photography.
 *
 * Original WhatsApp filename -> semantic file, for traceability:
 *   logo.jpeg                                      -> jtech-logo.jpeg
 *   WhatsApp Image ...16.33.37.jpeg                -> student-group-portrait.jpeg
 *   WhatsApp Image ...16.33.38 (1).jpeg             -> lab-classroom-wide-01.jpeg
 *   WhatsApp Image ...16.33.39 (1).jpeg             -> student-group-portrait-alt.jpeg
 *   WhatsApp Image ...16.33.39 (2).jpeg             -> student-group-landscape.jpeg
 *   WhatsApp Image ...16.33.39.jpeg                 -> student-group-portrait-alt2.jpeg
 *   WhatsApp Image ...16.33.40.jpeg                 -> student-group-landscape-alt.jpeg
 *   WhatsApp Image ...16.33.41.jpeg                 -> lab-classroom-wide-02.jpeg
 *   WhatsApp Image ...16.33.42.jpeg                 -> technical-poster-macro.jpeg
 *   WhatsApp Video ...16.33.36.mp4 (vertical)       -> hero-repair-loop.mp4
 *   WhatsApp Video ...16.32.20.mp4                  -> motherboard-repair-01.mp4
 *   WhatsApp Video ...16.33.09.mp4                  -> motherboard-repair-02.mp4
 *   WhatsApp Video ...16.32.55.mp4                  -> chip-rework-01.mp4
 *   WhatsApp Video ...16.33.26.mp4                  -> chip-rework-02.mp4
 *   WhatsApp Video ...16.32.08.mp4                  -> practical-training-01.mp4 (supplementary)
 *   WhatsApp Video ...16.32.46.mp4                  -> practical-training-02.mp4 (supplementary)
 *   0207202636738qra.pdf                            -> jtech-certificate.pdf
 *
 * NOTE ON EXCLUDED FOOTAGE:
 *   One supplied video (WhatsApp Video ...16.33.32.mp4) shows two people
 *   speaking to camera on a street in front of unrelated third-party
 *   banners — it contains no repair, lab, or training content and cannot be
 *   captioned truthfully as institute footage, so it has been intentionally
 *   left out of the live site rather than mislabeled. The file is preserved
 *   at /assets/video/_unused-street-clip.mp4 in case the client can supply
 *   context for it later.
 */

export const logo = "/assets/jtech-logo.jpeg";

export const gallery = {
  studentGroupPortrait: "/assets/gallery/student-group-portrait.jpeg",
  studentGroupPortraitThumb: "/assets/gallery/thumbs/student-group-portrait.jpeg",

  studentGroupLandscape: "/assets/gallery/student-group-landscape.jpeg",
  studentGroupLandscapeThumb: "/assets/gallery/thumbs/student-group-landscape.jpeg",

  studentGroupPortraitAlt: "/assets/gallery/student-group-portrait-alt.jpeg",
  studentGroupPortraitAltThumb: "/assets/gallery/thumbs/student-group-portrait-alt.jpeg",

  labClassroomWide01: "/assets/gallery/lab-classroom-wide-01.jpeg",
  labClassroomWide01Thumb: "/assets/gallery/thumbs/lab-classroom-wide-01.jpeg",

  labClassroomWide02: "/assets/gallery/lab-classroom-wide-02.jpeg",
  labClassroomWide02Thumb: "/assets/gallery/thumbs/lab-classroom-wide-02.jpeg",

  technicalPosterMacro: "/assets/gallery/technical-poster-macro.jpeg",
  technicalPosterMacroThumb: "/assets/gallery/thumbs/technical-poster-macro.jpeg",
} as const;

export interface VideoAsset {
  id: string;
  src: string;
  poster: string;
  /** Intrinsic aspect ratio, all supplied clips are vertical (9:16-ish) */
  orientation: "portrait" | "landscape";
  title: string;
  description: string;
}

export const heroVideo: VideoAsset = {
  id: "hero-repair-loop",
  src: "/assets/video/hero-repair-loop.mp4",
  poster: "/assets/posters/hero-repair-loop.jpg",
  orientation: "portrait",
  title: "Precision technical work under magnification",
  description: "Student performing guided precision work on a smartphone board under a lab microscope.",
};

export const showcaseVideos: VideoAsset[] = [
  {
    id: "chip-rework-01",
    src: "/assets/video/chip-rework-01.mp4",
    poster: "/assets/posters/chip-rework-01.jpg",
    orientation: "portrait",
    title: "IC & Chip Handling",
    description: "Close-up handling of a BGA chip during board-level rework.",
  },
  {
    id: "motherboard-repair-01",
    src: "/assets/video/motherboard-repair-01.mp4",
    poster: "/assets/posters/motherboard-repair-01.jpg",
    orientation: "portrait",
    title: "Motherboard Diagnostics",
    description: "Precision tool work directly on a smartphone motherboard.",
  },
  {
    id: "chip-rework-02",
    src: "/assets/video/chip-rework-02.mp4",
    poster: "/assets/posters/chip-rework-02.jpg",
    orientation: "portrait",
    title: "Board-Level Component Work",
    description: "Hot-air rework and component-level soldering on a device board.",
  },
  {
    id: "motherboard-repair-02",
    src: "/assets/video/motherboard-repair-02.mp4",
    poster: "/assets/posters/motherboard-repair-02.jpg",
    orientation: "portrait",
    title: "IC Reballing & Precision Handling",
    description: "Fine-pitch reballing work on a chip using a stencil template.",
  },
];

export const supplementaryVideos: VideoAsset[] = [
  {
    id: "practical-training-01",
    src: "/assets/video/practical-training-01.mp4",
    poster: "/assets/posters/practical-training-01.jpg",
    orientation: "portrait",
    title: "Board-Level Soldering",
    description: "Extended close-up soldering session on a device motherboard.",
  },
  {
    id: "practical-training-02",
    src: "/assets/video/practical-training-02.mp4",
    poster: "/assets/posters/practical-training-02.jpg",
    orientation: "portrait",
    title: "Guided Rework Session",
    description: "Hot-air rework station in use on a mounted board.",
  },
];

export const certificate = {
  previewImage: "/assets/certificate/jtech-certificate-preview.jpg",
  previewThumb: "/assets/certificate/jtech-certificate-preview-thumb.jpg",
  pdf: "/assets/docs/jtech-certificate.pdf",
  certificateNo: "0207202636738QRA",
  dateOfCertification: "02.07.2026",
  certificateExpiry: "01.07.2029",
  surveillanceAudit1: "01.07.2027",
  surveillanceAudit2: "01.07.2028",
};

/**
 * SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Contact details used across the site (contact section, footer, privacy
 * policy). Edit here to update them everywhere.
 */
export const CONFIG = {
  phoneDisplay: "+91 93952 31669",
  phoneHref: "tel:+919395231669",
  whatsappHref: "https://wa.me/919395231669",
  email: "ravishah456789@gmail.com",
  // WhatsApp number (country code, digits only) that contact form enquiries are sent to.
  leadsWhatsapp: "919113918441",
  address: {
    line1: "Nazira Town, Puja Mandir Complex, 1st Floor",
    line2: "Sivasagar, Nazira, Assam \u2013 785685, India",
  },
  // Placeholder coordinates note: no verified lat/lng was supplied.
  // Replace with the institute's exact pinned coordinates from Google Maps.
  mapsQuery: "J.TECH Institute of Advanced Technology, Puja Mandir Complex, Nazira, Sivasagar, Assam 785685",
};

/**
 * JKBF 2026 — CENTRALIZED AUTHENTIC PHOTO REGISTRY
 *
 * Single source of truth for all curated archival documentary photography
 * across the Jogja Kickboxing Festival 2026 web application.
 *
 * Mandatory rules:
 * 1. These are historical archival documentary photographs from prior Redy Jogja kickboxing events.
 * 2. They must NEVER be represented as photos of the future JKBF 2026 event.
 * 3. They must NEVER be represented as photos of the future venue (GOR Pancasila / Nusantara UGM).
 * 4. Pictured athletes must NOT be identified as confirmed 2026 participants.
 * 5. Respect photographer/event provenance and maintain authentic, non-generative visual integrity.
 */

export type PhotoTreatment = "HIGH_CONTRAST_BW" | "SOFT_BW" | "NATURAL";

export interface PhotoEntry {
  id: string;
  sourceFilename: string;
  collection: "primary" | "secondary";
  desktopPath: string;
  mobilePath: string;
  alt: string;
  intendedSection: string;
  visualTreatment: PhotoTreatment;
  aspectRatio: {
    desktop: string;
    mobile: string;
  };
  focalPoint?: {
    desktop?: string;
    mobile?: string;
  };
  historicalNote: string;
}

export const PHOTO_REGISTRY: Record<string, PhotoEntry> = {
  // ─────────────────────────────────────────────────────────────────────────
  // PACK A: PRIMARY EDITORIAL COLLECTION (10 Photos)
  // ─────────────────────────────────────────────────────────────────────────
  "hero-fight-impact": {
    id: "hero-fight-impact",
    sourceFilename: "IMG_8406.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/hero-fight-impact-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/hero-fight-impact-mobile-1080x1350.webp",
    alt: "Dua fighter kickboxing bertukar serangan tendangan di dalam ring",
    intendedSection: "Home Hero Desktop",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center 35%", mobile: "center 25%" },
    historicalNote: "Dokumentasi arsip kejuaraan kickboxing terdahulu oleh Redy Jogja; bukan foto venue GOR Pancasila UGM maupun peserta terkonfirmasi 2026.",
  },

  "hero-fight-mobile": {
    id: "hero-fight-mobile",
    sourceFilename: "IMG_8457.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/hero-fight-mobile-desktop-1600x1200.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/hero-fight-mobile-mobile-1080x1350.webp",
    alt: "Duel tendangan simultan dua atlet kickboxing dengan pelindung kepala",
    intendedSection: "Home Hero Mobile",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "4/3", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center 30%" },
    historicalNote: "Dokumentasi arsip laga kickboxing terdahulu Redy Jogja; aksi duel tendangan dinamis.",
  },

  "the-fights-intensity": {
    id: "the-fights-intensity",
    sourceFilename: "IMG_9188.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/the-fights-intensity-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/the-fights-intensity-mobile-1080x1350.webp",
    alt: "Pertarungan intensitas tinggi dua atlet kickboxing saling bertukar pukulan jarak dekat",
    intendedSection: "The Fights Gateway",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center 40%", mobile: "center 35%" },
    historicalNote: "Dokumentasi pertarungan jarak dekat dalam kejuaraan kickboxing terdahulu.",
  },

  "championship-ring": {
    id: "championship-ring",
    sourceFilename: "IMG_8483.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/championship-ring-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/championship-ring-mobile-1080x1350.webp",
    alt: "Dua fighter bersiap di hadapan wasit ring dalam format kejuaraan resmi",
    intendedSection: "Championships Intro",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center 45%", mobile: "center 40%" },
    historicalNote: "Dokumentasi ring kejuaraan kickboxing terdahulu.",
  },

  "movement-team-spirit": {
    id: "movement-team-spirit",
    sourceFilename: "IMG_9334-2.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/movement-team-spirit-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/movement-team-spirit-mobile-1080x1350.webp",
    alt: "Momen kebersamaan tim dan atlet kickboxing merayakan sportivitas di arena",
    intendedSection: "The Movement Gateway",
    visualTreatment: "SOFT_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi kebersamaan tim dan sportivitas komunitas kickboxing.",
  },

  "fighter-backstage": {
    id: "fighter-backstage",
    sourceFilename: "IMG_8760.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/fighter-backstage-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/fighter-backstage-mobile-1080x1350.webp",
    alt: "Persiapan fighter di area pemanasan belakang panggung sebelum bertanding",
    intendedSection: "Your Fight Starts Here / Registration",
    visualTreatment: "SOFT_BW",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center 35%", mobile: "center 30%" },
    historicalNote: "Dokumentasi proses persiapan atlet kickboxing sebelum naik ke ring pertandingan.",
  },

  "sportmanship-ring": {
    id: "sportmanship-ring",
    sourceFilename: "IMG_9197-2.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/sportmanship-ring-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/sportmanship-ring-mobile-1080x1350.webp",
    alt: "Dua atlet kickboxing saling menghormati dan menunjukkan sportivitas setelah duel",
    intendedSection: "About / Sportmanship Block",
    visualTreatment: "SOFT_BW",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi sportivitas dan rasa hormat antar-petarung kickboxing.",
  },

  "audience-atmosphere": {
    id: "audience-atmosphere",
    sourceFilename: "IMG_9207.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/audience-atmosphere-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/audience-atmosphere-mobile-1080x1350.webp",
    alt: "Antusiasme penonton dan pendukung di tribun kejuaraan kickboxing terdahulu",
    intendedSection: "Community / Audience Atmosphere",
    visualTreatment: "NATURAL",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi arsip suasana penonton kejuaraan terdahulu; disajikan dalam warna asli alami.",
  },

  "coach-human-story": {
    id: "coach-human-story",
    sourceFilename: "IMG_8858.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/coach-human-story-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/coach-human-story-mobile-1080x1350.webp",
    alt: "Potret pelatih memberikan instruksi teknis kepada fighter di sudut ring",
    intendedSection: "About / Human Story",
    visualTreatment: "NATURAL",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center 30%", mobile: "center 30%" },
    historicalNote: "Dokumentasi dedikasi pelatih dalam membimbing atlet; disajikan dalam warna asli.",
  },

  "ringside-wide": {
    id: "ringside-wide",
    sourceFilename: "IMG_8326.jpg",
    collection: "primary",
    desktopPath: "/images/jkbf-editorial/primary/desktop/ringside-wide-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/primary/mobile/ringside-wide-mobile-1080x1350.webp",
    alt: "Sudut pandang ring pertandingan kickboxing resmi dengan juri dan wasit",
    intendedSection: "Alternative Fight Banner",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi sudut ring laga kejuaraan kickboxing.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PACK B: SECONDARY COLLECTION (Curated Alternatives & Program Categories)
  // ─────────────────────────────────────────────────────────────────────────
  "jkbf-women-fight": {
    id: "jkbf-women-fight",
    sourceFilename: "IMG_8577.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-women-fight-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-women-fight-mobile-1080x1350.webp",
    alt: "Pertandingan kategori kickboxing wanita resmi dalam arena ring",
    intendedSection: "Championship Program — SMA / Youth Open (Ilustratif)",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi arsip laga kickboxing wanita; materi ilustratif bukan atlet spesifik 2026.",
  },

  "jkbf-match-decision": {
    id: "jkbf-match-decision",
    sourceFilename: "IMG_9243.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-match-decision-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-match-decision-mobile-1080x1350.webp",
    alt: "Wasit ring mengumumkan keputusan pertandingan di hadapan penonton",
    intendedSection: "Championship Program — Camp Open / Super Fights",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center 30%", mobile: "center 30%" },
    historicalNote: "Dokumentasi momen keputusan wasit kejuaraan resmi terdahulu.",
  },

  "jkbf-fighter-prep-secondary": {
    id: "jkbf-fighter-prep-secondary",
    sourceFilename: "IMG_8703.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-fighter-preparation-desktop-1600x1200.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-fighter-preparation-mobile-1080x1350.webp",
    alt: "Pelatih memasangkan handwrap dan pelindung kepala pada atlet kickboxing",
    intendedSection: "Championship Program — Camp Open",
    visualTreatment: "SOFT_BW",
    aspectRatio: { desktop: "4/3", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi persiapan teknis handwrap dan coaching sudut atlet.",
  },

  "jkbf-female-fighter-prep": {
    id: "jkbf-female-fighter-prep",
    sourceFilename: "IMG_8920.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-female-fighter-prep-desktop-1200x1500.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-female-fighter-prep-mobile-1080x1350.webp",
    alt: "Fighter wanita berkonsentrasi mempersiapkan diri sebelum masuk ke arena laga",
    intendedSection: "Championship Program — University Open",
    visualTreatment: "SOFT_BW",
    aspectRatio: { desktop: "4/5", mobile: "4/5" },
    focalPoint: { desktop: "center 30%", mobile: "center 30%" },
    historicalNote: "Dokumentasi persiapan atlet mahasiswa/muda dalam kejuaraan terdahulu.",
  },

  "jkbf-ring-action": {
    id: "jkbf-ring-action",
    sourceFilename: "IMG_8312.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-ring-action-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-ring-action-mobile-1080x1350.webp",
    alt: "Laga kickboxing di ring resmi berstandar WAKO",
    intendedSection: "Championship Program — Kejurda DIY 2026",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi pertarungan resmi ring sport.",
  },

  "jkbf-fight-intensity-secondary": {
    id: "jkbf-fight-intensity-secondary",
    sourceFilename: "IMG_8410.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-fight-intensity-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-fight-intensity-mobile-1080x1350.webp",
    alt: "Pertarungan intensitas tinggi dengan sarung tinju merah dan biru",
    intendedSection: "Championship Program — Redy Open Championship II",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi laga intensif sudut merah vs sudut biru.",
  },

  "jkbf-hero-fight-secondary": {
    id: "jkbf-hero-fight-secondary",
    sourceFilename: "IMG_9037.jpg",
    collection: "secondary",
    desktopPath: "/images/jkbf-editorial/secondary/desktop/jkbf-hero-fight-desktop-1920x1080.webp",
    mobilePath: "/images/jkbf-editorial/secondary/mobile/jkbf-hero-fight-mobile-1080x1350.webp",
    alt: "Dua petarung bertukar kombinasi pukulan di hadapan wasit",
    intendedSection: "Championship Program — Super Fights / Ekshibisi",
    visualTreatment: "HIGH_CONTRAST_BW",
    aspectRatio: { desktop: "16/9", mobile: "4/5" },
    focalPoint: { desktop: "center center", mobile: "center center" },
    historicalNote: "Dokumentasi pertukaran serangan laga kickboxing.",
  },
};

/**
 * Helper to fetch a registered photo entry safely with fallback
 */
export function getPhoto(id: keyof typeof PHOTO_REGISTRY): PhotoEntry {
  const entry = PHOTO_REGISTRY[id];
  if (!entry) {
    throw new Error(`Photo with id "${id}" not found in PHOTO_REGISTRY.`);
  }
  return entry;
}

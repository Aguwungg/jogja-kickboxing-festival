import prisma from "@/lib/prisma";

/**
 * JKBF 2026 — CURATED "WHAT'S NEW." INSTAGRAM CONTENT REGISTRY
 *
 * Content Source & Governance Rules:
 * - Instagram (@jogjakickboxingfestival) is the SOLE source for What's New.
 * - TikTok must NOT power this feed.
 * - Only records where `approved === true`, `status === "published"`, and
 *   `isVerifiedInstagramPostUrl(instagramUrl) === true` may appear publicly.
 * - Do NOT invent Instagram post URLs, publication dates, or unauthorized media.
 * - For Reels without a local authorized 3–5s MP4/WebM (`previewVideo`),
 *   cards fall back cleanly to the static approved `coverImage`.
 */

export type WhatsNewContentType = "reel" | "image" | "carousel";

export type WhatsNewStatus = "draft" | "pending" | "published" | "archived";

export type WhatsNewCategory =
  | "IMPORTANT UPDATE"
  | "MEGA BINTANG"
  | "FIGHTER REGISTRATION"
  | "SMA OPEN"
  | "UNIVERSITY OPEN"
  | "CAMP OPEN"
  | "EVENT UPDATE"
  | "CONTENT CHALLENGE"
  | "PARTNERSHIP"
  | "OFFICIAL ANNOUNCEMENT";

export const WHATS_NEW_CATEGORIES: readonly WhatsNewCategory[] = [
  "IMPORTANT UPDATE",
  "MEGA BINTANG",
  "FIGHTER REGISTRATION",
  "SMA OPEN",
  "UNIVERSITY OPEN",
  "CAMP OPEN",
  "EVENT UPDATE",
  "CONTENT CHALLENGE",
  "PARTNERSHIP",
  "OFFICIAL ANNOUNCEMENT",
] as const;

export interface WhatsNewItem {
  id: string;
  title: string;
  summary: string;
  category: WhatsNewCategory;
  contentType: WhatsNewContentType;
  /** Exact verified original Instagram post or reel URL */
  instagramUrl: string;
  /** Approved static cover image path under /public */
  coverImage: string;
  /** Optional 3–5s muted H.264/WebM preview clip derived from authorized Reel source */
  previewVideo: string;
  /** Exact publication date of the Instagram post (YYYY-MM-DD), empty if pending */
  publishedAt: string;
  /** Lower number = higher display priority among featured/regular items */
  priority: number;
  featured: boolean;
  approved: boolean;
  status: WhatsNewStatus;
  createdAt: string;
  updatedAt: string;
}

/**
 * Validates that an Instagram URL targets a specific post or reel permalink
 * (not merely a profile homepage or unrelated domain).
 */
export function isVerifiedInstagramPostUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  return /^https:\/\/(www\.)?instagram\.com\/(?:[A-Za-z0-9_.]+\/)?(p|reel)\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i.test(
    url.trim()
  );
}

export function normalizeCategory(cat: string): WhatsNewCategory {
  return (WHATS_NEW_CATEGORIES as readonly string[]).includes(cat)
    ? (cat as WhatsNewCategory)
    : "OFFICIAL ANNOUNCEMENT";
}

export function normalizeContentType(type: string): WhatsNewContentType {
  if (type === "reel" || type === "carousel" || type === "image") return type;
  return "image";
}

export function normalizeStatus(status: string): WhatsNewStatus {
  if (
    status === "draft" ||
    status === "pending" ||
    status === "published" ||
    status === "archived"
  ) {
    return status;
  }
  return "pending";
}

export function formatPublishedDateId(isoDate: string): string {
  if (!isoDate) return "";
  const parsed = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(parsed)
    .toUpperCase();
}

/**
 * Curated Instagram registry (Source of Truth for seeded/public fallback content).
 * Add newly approved Instagram permalinks here OR manage via /admin/whats-new.
 */
export const CURATED_WHATS_NEW_ITEMS: WhatsNewItem[] = [
  {
    id: "wn-sma-open-carousel",
    title: "CALLING OUT ALL HIGH SCHOOLS IN JOGJA!",
    summary:
      "Panggilan resmi seluruh pelajar SMA/SMK di Yogyakarta untuk membuktikan nyali di atas ring SMA Open JKBF 2026 — lengkap dengan peluang Juara Umum SMA & Best Supporter.",
    category: "SMA OPEN",
    contentType: "carousel",
    instagramUrl: "https://www.instagram.com/p/DfjxgAVGh8j/",
    coverImage: "/images/jkbf-photo/desktop/jkbf-women-fight-desktop-1920x1080.webp",
    previewVideo: "",
    publishedAt: "2026-11-10",
    priority: 1,
    featured: true,
    approved: true,
    status: "published",
    createdAt: "2026-11-10T10:00:00.000Z",
    updatedAt: "2026-11-11T15:00:00.000Z",
  },
  {
    id: "wn-sma-open-reel",
    title: "ANAK SMA JOGJA, BERANI NAIK RING?",
    summary:
      "Saatnya tunjukkan keberanian, kemampuan, dan semangat sportivitas sekolahmu di atas ring SMA Open Jogja Kickboxing Festival 2026.",
    category: "SMA OPEN",
    contentType: "reel",
    instagramUrl: "https://www.instagram.com/reel/DfjI1h9T-hh/",
    coverImage: "/images/jkbf-photo/crimson_strong_desktop/jkbf-fight-intensity-desktop-1920x1080.webp",
    // Authorized source video MP4 is not yet in repository — renders approved poster fallback safely
    previewVideo: "",
    publishedAt: "2026-11-09",
    priority: 2,
    featured: false,
    approved: true,
    status: "published",
    createdAt: "2026-11-09T10:00:00.000Z",
    updatedAt: "2026-11-11T15:00:00.000Z",
  },
  // Pending candidate slots awaiting verified Instagram permalink + approved bespoke media
  {
    id: "wn-mega-bintang-faisal-giru",
    title: "FAISAL GIRU HADIR SEBAGAI MEGA BINTANG JKBF 2026",
    summary:
      "Faisal Giru dikonfirmasi hadir sebagai salah satu Mega Bintang dalam rangkaian Jogja Kickboxing Festival 2026 di GOR Pancasila UGM.",
    category: "MEGA BINTANG",
    contentType: "image",
    instagramUrl: "",
    coverImage: "/images/jkbf-photo/crimson_strong_desktop/jkbf-hero-fight-desktop-1920x1080.webp",
    previewVideo: "",
    publishedAt: "",
    priority: 3,
    featured: true,
    approved: false,
    status: "pending",
    createdAt: "2026-11-11T10:00:00.000Z",
    updatedAt: "2026-11-11T10:00:00.000Z",
  },
  {
    id: "wn-fighter-reg-extended",
    title: "PENDAFTARAN FIGHTER DIPERPANJANG HINGGA 30 NOVEMBER 2026",
    summary:
      "Kesempatan pendaftaran atlet untuk nomor resmi JKBF 2026 masih dibuka melalui Google Form hingga 30 November 2026.",
    category: "FIGHTER REGISTRATION",
    contentType: "image",
    instagramUrl: "",
    coverImage: "/images/jkbf-photo/desktop/jkbf-female-fighter-prep-desktop-1200x1500.webp",
    previewVideo: "",
    publishedAt: "",
    priority: 4,
    featured: false,
    approved: false,
    status: "pending",
    createdAt: "2026-11-11T10:00:00.000Z",
    updatedAt: "2026-11-11T10:00:00.000Z",
  },
  {
    id: "wn-university-open",
    title: "KAMPUSMU PUNYA NAMA. PUNYA NYALI JUGA? (UNIVERSITY OPEN)",
    summary:
      "Informasi resmi University Open untuk mahasiswa lintas perguruan tinggi agar tetap dapat mendaftar meski kampus belum tercantum pada materi poster.",
    category: "UNIVERSITY OPEN",
    contentType: "carousel",
    instagramUrl: "",
    coverImage: "/images/jkbf-photo/desktop/jkbf-fighter-closeup-desktop-1920x1080.webp",
    previewVideo: "",
    publishedAt: "",
    priority: 5,
    featured: false,
    approved: false,
    status: "pending",
    createdAt: "2026-11-11T10:00:00.000Z",
    updatedAt: "2026-11-11T10:00:00.000Z",
  },
];

export function filterAndSortPublishedWhatsNew(
  items: WhatsNewItem[]
): WhatsNewItem[] {
  const seenUrls = new Set<string>();
  const valid = items.filter((item) => {
    if (!item.approved || item.status !== "published") return false;
    if (!isVerifiedInstagramPostUrl(item.instagramUrl)) return false;
    const canonical = item.instagramUrl.trim().replace(/\/+$/, "").toLowerCase();
    if (seenUrls.has(canonical)) return false;
    seenUrls.add(canonical);
    return true;
  });

  return valid.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.priority !== b.priority) return a.priority - b.priority;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

/**
 * Fetches approved & published Instagram items from Prisma (with deterministic
 * fallback to CURATED_WHATS_NEW_ITEMS if database isn't populated or unreachable).
 */
export async function getPublishedWhatsNewItems(): Promise<WhatsNewItem[]> {
  try {
    const dbRows = await prisma.whatsNewPost.findMany({
      where: { approved: true, status: "published" },
      orderBy: [{ featured: "desc" }, { priority: "asc" }, { publishedAt: "desc" }],
    });

    if (dbRows.length > 0) {
      const mapped: WhatsNewItem[] = dbRows.map((row) => ({
        id: row.id,
        title: row.title,
        summary: row.summary,
        category: normalizeCategory(row.category),
        contentType: normalizeContentType(row.contentType),
        instagramUrl: row.instagramUrl,
        coverImage: row.coverImage,
        previewVideo: row.previewVideo,
        publishedAt: row.publishedAt,
        priority: row.priority,
        featured: row.featured,
        approved: row.approved,
        status: normalizeStatus(row.status),
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      }));
      const filtered = filterAndSortPublishedWhatsNew(mapped);
      if (filtered.length > 0) return filtered;
    }
  } catch {
    // Graceful fallback when running without live DB connectivity
  }

  return filterAndSortPublishedWhatsNew(CURATED_WHATS_NEW_ITEMS);
}


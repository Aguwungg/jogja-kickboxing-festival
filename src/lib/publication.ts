/**
 * JKBF 2026 — PUBLICATION CONTROL CONFIGURATION
 *
 * Centralized policy for public vs restricted event information.
 * Updated per Master Website Update:
 *   - Event Date (19–20 Desember 2026): APPROVED
 *   - Venue (GOR Pancasila UGM, Yogyakarta): APPROVED
 *   - Faisal Giru Mega Bintang: APPROVED
 *   - Legacy 3D Venue Model (previous venue / LED setup): UNPUBLISHED (false)
 *   - Music Artist Lineup: NOT APPROVED FOR PUBLICATION (false)
 *   - Ticketing / PPV / Merch / Fighter Directory / Bracket / Schedule / Creator Hub: FALSE
 */

export const publication = {
  /** Official event dates (19–20 Desember 2026) — APPROVED */
  showEventDate: true,

  /** Official venue details (GOR Pancasila UGM, Yogyakarta) — APPROVED */
  showVenue: true,

  /** Countdown timer to 19 Desember 2026 — APPROVED */
  showCountdown: true,

  /** Faisal Giru Mega Bintang promotional feature — APPROVED */
  showMegaBintangFaisalGiru: true,

  /** Music artist lineup (names, portraits, schedule) — UNPUBLISHED */
  showMusicLineup: false,

  /** Legacy 3D arena layout (based on previous venue & LED setup) — UNPUBLISHED */
  showLegacy3dArena: false,

  /** Technical Handbook PDF download — UNPUBLISHED */
  showTechnicalHandbookDownload: false,

  /** Ticket purchasing and pricing — UNPUBLISHED */
  showTicketing: false,

  /** Fighter/athlete directory and profiles — REMOVED */
  showFighterDirectory: false,

  /** Content competition / Creator Hub backend — REMOVED */
  showContentCompetition: false,

  /** Pay-per-view streaming — REMOVED */
  showPpv: false,

  /** Merchandise storefront — REMOVED */
  showMerchandise: false,

  /** Live tournament bracket — REMOVED */
  showBracket: false,

  /** Day-by-day rundown schedule — UNPUBLISHED until verified rundown is confirmed */
  showSchedule: false,

  /** City pride / voting feature — REMOVED */
  showCityPrideVoting: false,

  /** Fighter registration promotion & Google Form CTA — APPROVED */
  showFighterRegistrationPromotion: true,

  /** Content Challenge promotion & Google Form CTA — APPROVED */
  showContentChallengePromotion: true,

  /** Partnership & Sponsorship WhatsApp CTA — APPROVED */
  showPartnershipPromotion: true,

  /** Curated Official Announcements / Latest Updates — APPROVED */
  showAnnouncements: true,

  /** Championship programs & WAKO disciplines — APPROVED */
  showChampionshipPrograms: true,

  /** Disciplines showcase — APPROVED */
  showDisciplines: true,

  /** Organizers section — APPROVED */
  showOrganizers: true,

  /** FAQ section — APPROVED */
  showFaq: true,

  /** Contact & Official Social Media (Instagram + TikTok) — APPROVED */
  showContact: true,
} as const;

export type PublicationKey = keyof typeof publication;

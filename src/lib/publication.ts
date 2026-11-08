/**
 * JKBF 2026 — PUBLICATION CONTROL CONFIGURATION
 *
 * Centralized "publish-by-default-DENIED" policy for all embargoed information.
 *
 * HOW TO USE:
 *   Import this in any component/page and check the flag before rendering sensitive content.
 *   False = embargoed / not approved for public release.
 *   True = approved for public release.
 *
 * IMPORTANT:
 *   These flags control SERVER-SIDE rendering decisions. Do NOT use CSS display:none
 *   as the sole mechanism to hide embargoed content — omit it entirely from the HTML.
 *
 * CHANGE PROCESS:
 *   Only update a flag to `true` after explicit organizer approval.
 *   Update this file, commit, and deploy in a deliberate release.
 */

export const publication = {
  /**
   * Event date announcement.
   * Embargo active: specific event dates are confidential.
   * The year "2026" in brand identity may remain visible.
   */
  showEventDate: false,

  /**
   * Event venue details (name, address, map, directions).
   * Embargo active: specific venue is confidential.
   * "Yogyakarta" as a city identity may remain visible.
   */
  showVenue: false,

  /**
   * Music artist lineup (names, photos, schedule).
   * Embargo active: lineup not approved for public release.
   */
  showMusicLineup: false,

  /**
   * Technical Handbook PDF download.
   * Embargo active: original handbook contains embargoed dates & venue.
   * Only enable when a redacted/approved public version is supplied.
   */
  showTechnicalHandbookDownload: false,

  /**
   * Ticket purchasing and pricing.
   * Removed from public site scope.
   */
  showTicketing: false,

  /**
   * Fighter/athlete directory and profiles.
   * Removed from public site scope.
   */
  showFighterDirectory: false,

  /**
   * Content competition / Creator Hub.
   * Removed from public site scope.
   */
  showContentCompetition: false,

  /**
   * Pay-per-view streaming.
   * Removed from public site scope.
   */
  showPpv: false,

  /**
   * Merchandise storefront.
   * Removed from public site scope.
   */
  showMerchandise: false,

  /**
   * Live tournament bracket.
   * Removed from public site scope.
   */
  showBracket: false,

  /**
   * Day-by-day schedule (reveals dates).
   * Removed from public site scope.
   */
  showSchedule: false,

  /**
   * City pride / voting feature.
   * Removed from public site scope.
   */
  showCityPrideVoting: false,

  /**
   * Countdown timer (reveals event date indirectly).
   * Embargo active.
   */
  showCountdown: false,

  /**
   * Fighter registration promotional section & external CTA.
   * Approved: registration deadline 30 November 2026.
   */
  showFighterRegistrationPromotion: true,

  /**
   * Content Challenge promotional section & external Google Form CTA.
   * Approved: external link only (no internal creator system).
   */
  showContentChallengePromotion: true,

  /**
   * Partnership & Sponsorship WhatsApp CTA section.
   * Approved: direct contact to Ardi.
   */
  showPartnershipPromotion: true,

  /**
   * Official announcements section.
   * Enabled — but content must be individually reviewed before publishing.
   */
  showAnnouncements: true,

  /**
   * Championship programs information.
   * Approved — general program descriptions are public.
   */
  showChampionshipPrograms: true,

  /**
   * Competition disciplines (Point Fighting, Kick Light, etc.)
   * Approved — discipline descriptions are public.
   */
  showDisciplines: true,

  /**
   * Organizer and official partner logos.
   * Approved — confirmed organizer identities may be shown.
   */
  showOrganizers: true,

  /**
   * FAQ section.
   * Approved — with vetted, embargo-compliant answers only.
   */
  showFaq: true,

  /**
   * Contact and social media channels.
   * Approved — verified official channels only.
   */
  showContact: true,
} as const;

export type PublicationKey = keyof typeof publication;


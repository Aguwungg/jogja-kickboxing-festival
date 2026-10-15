/**
 * OFFICIAL EVENT CONFIGURATION — JKB 2026
 * 
 * Centralized Single Source of Truth (SSOT) for all official event facts,
 * approved identities, dates, venue information, and operational constants.
 * 
 * Canonical Reference:
 * - Event: JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
 * - Dates: 12–14 Desember 2026
 * - Venue: GOR UNY, Yogyakarta
 * - Campaign: #JOGJAPUNYANYALI
 * - Creative Direction: GLORY Kickboxing × We The Fest
 * - Timezone: Asia/Jakarta (WIB, UTC+7)
 */

export const EVENT_CONFIG = {
  name: "JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2",
  shortName: "JKBF 2026",
  championshipName: "Redy Championship 2",
  edition: "2nd Edition",
  campaign: "#JOGJAPUNYANYALI",
  tagline: "Festival Kickboxing Terbesar di Indonesia & Panggung Musik Spektakuler",
  creativeDirection: "GLORY Kickboxing × We The Fest",

  // 4 Official K-1 Championship Divisions (Single Source of Truth)
  divisions: [
    {
      no: "01",
      name: "BANTAMWEIGHT",
      limit: "57.0 KG",
      style: "SPEED & HIGH VOLUME STRIKING",
      belt: "SABUK EMAS BANTAMWEIGHT",
      quota: "8 PETARUNG",
      img: "/images/jkb/fighter-1.jpg",
    },
    {
      no: "02",
      name: "FEATHERWEIGHT",
      limit: "60.0 KG",
      style: "TECHNICAL COUNTER PRECISION",
      belt: "SABUK EMAS FEATHERWEIGHT",
      quota: "8 PETARUNG",
      img: "/images/jkb/fighter-2.jpg",
    },
    {
      no: "03",
      name: "LIGHTWEIGHT",
      limit: "63.5 KG",
      style: "PRESSURE & CLINCH KNEE",
      belt: "SABUK EMAS LIGHTWEIGHT",
      quota: "8 PETARUNG",
      img: "/images/jkb/fighter-3.jpg",
    },
    {
      no: "04",
      name: "WELTERWEIGHT",
      limit: "70.0 KG",
      style: "HEAVY KO POWER & POWER STRIKING",
      belt: "SABUK EMAS WELTERWEIGHT",
      quota: "8 PETARUNG",
      img: "/images/jkb/fighter-5.jpg",
    },
  ],

  // Dates & Schedule (12–14 December 2026)
  dates: {
    display: "12–14 Desember 2026",
    shortDisplay: "12–14 Des 2026",
    startDate: "2026-12-12",
    endDate: "2026-12-14",
    startIso: "2026-12-12T09:00:00+07:00",
    endIso: "2026-12-14T23:30:00+07:00",
    timezone: "Asia/Jakarta",
    days: [
      {
        day: 1,
        label: "HARI 1",
        date: "Sabtu, 12 Desember 2026",
        theme: "Official Weigh-In & Babak Penyisihan",
      },
      {
        day: 2,
        label: "HARI 2",
        date: "Minggu, 13 Desember 2026",
        theme: "Perempat Final, Semifinal & Community Showcase",
      },
      {
        day: 3,
        label: "HARI 3",
        date: "Senin, 14 Desember 2026",
        theme: "Grand Final 4 Sabuk Juara & Pesta Musik Akbar",
      },
    ],
  },

  // Venue Details (GOR UNY, Yogyakarta)
  venue: {
    name: "GOR UNY, Yogyakarta",
    fullName: "Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY)",
    address: "Jl. Colombo No. 1, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    shortAddress: "Jl. Colombo No. 1, Karang Malang, Sleman, D.I. Yogyakarta",
    city: "Yogyakarta / Sleman",
    province: "Daerah Istimewa Yogyakarta",
    postalCode: "55281",
    capacity: "5.000+ Penonton",
    googleMapsUrl: "https://maps.google.com/?q=GOR+UNY+Yogyakarta",
    publicTransit: {
      transJogja: "Trans Jogja Koridor 1B, 2A, 11 (Turun di Halte UNY Colombo)",
      krlCommuter: "Stasiun Lempuyangan (±10 menit via Ojol/Taksi) atau Stasiun Yogyakarta / Tugu (±15 menit)",
      dropOff: "Drop-Off Zona Barat (Pintu Masuk VIP & Media) dan Zona Selatan (Tribun Umum)",
    },
    pickupBoothName: "Official Merchandise Booth — GOR UNY, Yogyakarta",
    pickupBoothLocation: "GOR UNY, Hall Barat Lantai 1 (Dekat Pintu Masuk Utama VIP & Media)",
    pickupBoothHours: "09:00 - 22:00 WIB (12–14 Desember 2026)",
  },

  // Commercial PPV Status
  ppv: {
    approvedTier: {
      id: "ppv-single-day",
      slug: "single-day-pass",
      name: "Day Pass: BigMo Exhibition & Stage Stream",
      price: 10000,
      status: "APPROVED_PROVISIONAL",
    },
    unapprovedTiers: [
      {
        slug: "all-access-championship-pass",
        status: "DRAFT_PENDING_APPROVAL",
        reason: "Belum disetujui promotor resmi untuk penjualan komersial.",
      },
      {
        slug: "vip-ringside-stream",
        status: "DRAFT_PENDING_APPROVAL",
        reason: "Fitur multi-cam dan ruang ganti memerlukan persetujuan teknis tim broadcast dan promotor.",
      },
    ],
  },

  // Contact & Socials
  contact: {
    email: "halo@jkb2026.id",
    phone: "+62 812-3456-7890",
    instagram: "@jogjakickboxingfestival",
    tiktok: "@jogjakickboxing",
    youtube: "Jogja Kickboxing Festival Official",
  },
} as const;

/**
 * JKBF 2026 — OFFICIAL VENUE & VISITOR GUIDE DATA REGISTRY
 *
 * Verified Single Source of Truth for:
 * - GOR Pancasila UGM / GOR Nusantara UGM Facility Details
 * - Out-of-town Visitor Transport Guide (Train, Airplane, Bus, Trans Jogja, Private Vehicle)
 * - Interactive Travel Starting Point Selector Data
 * - Verified Surrounding Essential Facilities (Medical, Pharmacies, Minimarkets, ATMs, Dining)
 * - Pending EO Logistics Flags (Parking, Official Entrances, Daily Bout Schedule)
 *
 * Rules:
 * - NO invented addresses, parking lots, taxi rates, or shuttle services.
 * - Reference official sources (UGM, KAI Commuter, Dishub DIY).
 */

export interface TransportMode {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  officialLink?: string;
  officialLinkText?: string;
  notice?: string;
}

export const TRANSPORT_MODES: TransportMode[] = [
  {
    id: "train",
    badge: "KERETA API",
    title: "Stasiun Kereta Api Antarkota",
    subtitle: "Stasiun Yogyakarta (Tugu) & Stasiun Lempuyangan",
    points: [
      "Stasiun Yogyakarta (Stasiun Tugu): Melayani mayoritas kereta api antarkota kelas Eksekutif dan Bisnis dari Jakarta (Gambir/Pasar Senen), Bandung, dan Surabaya.",
      "Stasiun Lempuyangan: Melayani mayoritas kereta api kelas Ekonomi antarkota serta Commuter Line Solo–Yogyakarta.",
      "Pilihan stasiun kedatangan bergantung pada jenis dan kelas tiket kereta api yang Anda gunakan.",
      "Setelah tiba di stasiun, lanjutkan perjalanan menuju GOR Nusantara UGM menggunakan transportasi lokal atau layanan navigasi.",
    ],
    notice:
      "Panitia tidak menyediakan layanan antar-jemput khusus dari stasiun. Gunakan armada transportasi umum atau transportasi daring resmi Yogyakarta.",
  },
  {
    id: "airplane",
    badge: "PESAWAT UDARA",
    title: "Bandara Internasional Yogyakarta (YIA)",
    subtitle: "Yogyakarta International Airport, Kulon Progo",
    points: [
      "Seluruh penerbangan komersial domestik dan internasional mendarat di Yogyakarta International Airport (YIA), Kulon Progo.",
      "Tersedia layanan Kereta Bandara (KA Bandara YIA / KAI Commuter) yang menghubungkan Bandara YIA langsung ke pusat kota Yogyakarta (Stasiun Tugu) dengan jadwal reguler.",
      "Dari Stasiun Tugu, Anda dapat melanjutkan perjalanan menuju kawasan kampus UGM / GOR Nusantara menggunakan transportasi lokal.",
    ],
    officialLink:
      "https://www.kci.id/informasi-publik/berita/kai-commuter-kelola-layanan-commuter-line-bandara-yia-peningkatan-layanan-dan-integrasi-terus-dilakukan",
    officialLinkText: "Informasi Resmi Layanan KAI Commuter Bandara YIA",
    notice:
      "JKBF tidak menyediakan layanan airport shuttle. Jadwal keberangkatan KA Bandara mengikuti operasional resmi PT Kereta Api Indonesia / KAI Commuter.",
  },
  {
    id: "bus",
    badge: "BUS ANTARKOTA",
    title: "Terminal Bus Antarkota (AKAP)",
    subtitle: "Terminal Giwangan & Terminal Jombor",
    points: [
      "Terminal Giwangan: Terminal bus induk di sisi selatan Yogyakarta, melayani bus AKAP lintas Jawa, Bali, dan Sumatera.",
      "Terminal Jombor: Terminal bus di sisi utara Yogyakarta (Sleman), melayani rute bus AKAP dari arah barat dan utara (Jakarta via Pantura, Semarang, Magelang).",
      "Setelah tiba di terminal, Anda dapat melanjutkan perjalanan ke GOR Nusantara UGM via transportasi lokal atau layanan navigasi.",
    ],
    notice:
      "Perhatikan jam operasional angkutan lanjutan dari terminal, terutama bagi rombongan kontingen yang tiba pada malam hari.",
  },
  {
    id: "trans-jogja",
    badge: "ANGKUTAN KOTA",
    title: "Trans Jogja (BRT Perkotaan)",
    subtitle: "Sistem Bus Rapid Transit Dinas Perhubungan DIY",
    points: [
      "Trans Jogja melayani koridor aglomerasi perkotaan Yogyakarta, Sleman, dan Bantul.",
      "CATATAN PENTING RUTE 2026: Rute Trans Jogja telah mengalami penyesuaian resmi oleh Dinas Perhubungan DIY pada tahun 2026. Jalur 4A dan 4B tidak lagi berhenti langsung di halte Lembah UGM.",
      "Pengunjung dianjurkan memeriksa rute dan titik halte aktif terkini melalui portal resmi Dinas Perhubungan DIY sebelum memulai perjalanan.",
    ],
    officialLink: "https://dishub.jogjaprov.go.id/layanan/trans-jogja",
    officialLinkText: "Peta & Rute Resmi Trans Jogja (Dishub DIY)",
  },
  {
    id: "private-vehicle",
    badge: "KENDARAAN PRIBADI",
    title: "Mobil & Motor Pribadi",
    subtitle: "Akses Jalur Utama Kota Yogyakarta & Sleman",
    points: [
      "Gunakan titik navigasi resmi Google Maps dengan tujuan GOR Pancasila UGM / GOR Nusantara UGM.",
      "Akses utama menuju kawasan venue dapat ditempuh melalui Jalan Colombo, Jalan Kaliurang km 4.5, atau kawasan Lembah UGM.",
      "Patuhi tata tertib berkendara dan batas kecepatan di lingkungan kampus Universitas Gadjah Mada.",
    ],
    notice:
      "Pengaturan kantong parkir resmi festival dan rekayasa sirkulasi lalu lintas akan dirilis panitia mendekati hari H. Dilarang parkir di bahu jalan non-parkir kampus.",
  },
];

export interface TravelStartingPoint {
  id: string;
  name: string;
  type: "station" | "airport" | "terminal" | "current_location";
  query: string;
  badge: string;
}

export const TRAVEL_STARTING_POINTS: TravelStartingPoint[] = [
  {
    id: "stasiun-tugu",
    name: "Stasiun Yogyakarta (Stasiun Tugu)",
    type: "station",
    query: "Stasiun Yogyakarta",
    badge: "KERETA API",
  },
  {
    id: "stasiun-lempuyangan",
    name: "Stasiun Lempuyangan",
    type: "station",
    query: "Stasiun Lempuyangan Yogyakarta",
    badge: "KERETA API",
  },
  {
    id: "bandara-yia",
    name: "Bandara Internasional Yogyakarta (YIA)",
    type: "airport",
    query: "Yogyakarta International Airport (YIA)",
    badge: "PESAWAT",
  },
  {
    id: "terminal-giwangan",
    name: "Terminal Giwangan",
    type: "terminal",
    query: "Terminal Giwangan Yogyakarta",
    badge: "BUS",
  },
  {
    id: "terminal-jombor",
    name: "Terminal Jombor",
    type: "terminal",
    query: "Terminal Jombor Sleman",
    badge: "BUS",
  },
  {
    id: "lokasi-saya",
    name: "Lokasi Saya Saat Ini (GPS)",
    type: "current_location",
    query: "",
    badge: "GPS LIVE",
  },
];

export interface SurroundingFacility {
  name: string;
  category: "MEDIS & IGD" | "FARMASI" | "ATM & PERBANKAN" | "MINIMARKET" | "KULINER";
  description: string;
  location: string;
}

export const SURROUNDING_FACILITIES: SurroundingFacility[] = [
  {
    name: "RS Panti Rapih",
    category: "MEDIS & IGD",
    description: "Rumah sakit rujukan utama dengan Instalasi Gawat Darurat (IGD) 24 jam.",
    location: "Jl. C. Simanjuntak / Jl. Teuku Cik Ditiro (±1.5 km dari venue)",
  },
  {
    name: "Klinik Pratama GMC UGM (Gadjah Mada Medical Center)",
    category: "MEDIS & IGD",
    description: "Pusat layanan kesehatan di dalam kawasan kampus UGM.",
    location: "Kawasan Bulaksumur UGM",
  },
  {
    name: "Apotek K-24 Kaliurang / Terban",
    category: "FARMASI",
    description: "Apotek buka 24 jam melayani kebutuhan obat umum dan pertolongan pertama.",
    location: "Jl. Kaliurang km 5 / Jl. C. Simanjuntak",
  },
  {
    name: "ATM Center & Perbankan UGM",
    category: "ATM & PERBANKAN",
    description: "Jaringan ATM Bersama, Mandiri, BNI, BRI, dan BCA di area kampus.",
    location: "Kawasan Perpustakaan Pusat UGM & Bank Mandiri UGM Bulaksumur",
  },
  {
    name: "Minimarket 24 Jam (Indomaret / Alfamart)",
    category: "MINIMARKET",
    description: "Penyedia air mineral, kudapan ringan, dan perlengkapan harian.",
    location: "Jl. Kaliurang Bawah & Jl. Colombo Yogyakarta",
  },
  {
    name: "Sentra Kuliner Kampus & Jl. Kaliurang",
    category: "KULINER",
    description: "Pusat makanan, warung makan lokal, dan kafe di sekitar kawasan kampus UGM.",
    location: "Jl. Kaliurang km 3–5 & Pujasera Lembah UGM",
  },
];

export interface PendingOrganizerLogistics {
  id: string;
  title: string;
  status: "pending_eo_verification" | "verified_published";
  notice: string;
}

export const PENDING_ORGANIZER_LOGISTICS: PendingOrganizerLogistics[] = [
  {
    id: "parking",
    title: "Lokasi Parkir Resmi & Drop-off Penonton",
    status: "pending_eo_verification",
    notice:
      "Denah kantong parkir resmi dan titik drop-off penonton/atlet sedang dikoordinasikan bersama pengelola GOR UGM. Informasi resmi akan dirilis menjelang hari acara.",
  },
  {
    id: "entrances",
    title: "Alur Pintu Masuk Fighter, Official, & Penonton",
    status: "pending_eo_verification",
    notice:
      "Zonasi pintu masuk khusus atlet, official tim, dan tribun penonton akan dipublikasikan secara terpisah dalam technical handbook resmi.",
  },
  {
    id: "daily_bout_order",
    title: "Jadwal Urutan Partai Tanding Harian (Fight Schedule)",
    status: "pending_eo_verification",
    notice:
      "Susunan partai pertandingan (Fight Schedule & Bout Order) diterbitkan resmi oleh dewan juri Pengprov KBI DIY setelah verifikasi timbang badan dan technical meeting drawing atlet.",
  },
  {
    id: "ticketing",
    title: "Mekanisme Akses & Tiket Masuk Penonton",
    status: "pending_eo_verification",
    notice:
      "Ketentuan akses penonton dan mekanisme gelang/tiket akan diumumkan resmi oleh panitia pelaksana melalui kanal Instagram @jogjakickboxingfestival.",
  },
];


/**
 * OFFICIAL JKBF 2026 — PUBLIC CONTENT CONFIGURATION
 *
 * Single Source of Truth for all APPROVED, PUBLIC-SAFE event facts.
 * Updated per Master Website Update (Final Information & Production Update).
 *
 * CONFIRMED PUBLIC DATA:
 *   - Event: JOGJA KICKBOXING FESTIVAL 2026 (JKBF 2026)
 *   - Dates: 19–20 DESEMBER 2026 (19–20 DECEMBER 2026)
 *   - Venue: GOR PANCASILA UGM, YOGYAKARTA
 *   - Campaign: #JOGJAPUNYANYALI | RISE • FIGHT • CONQUER
 *   - Production Policy: NO LED screens, video walls, LED stage backdrops, or decorative RGB LED strips.
 *   - Music Lineup: STILL NOT APPROVED FOR PUBLICATION — keep unpublished.
 *   - Legacy 3D Venue Model: Based on previous venue & outdated production specs — keep unpublished until GOR Pancasila layout is verified.
 */

export const EVENT_CONFIG = {
  // ─── Approved Public Identity ───────────────────────────────────────────────
  name: "JOGJA KICKBOXING FESTIVAL 2026",
  shortName: "JKBF 2026",
  campaign: "#JOGJAPUNYANYALI",
  tagline: "RISE • FIGHT • CONQUER",
  brandStatement: "Di balik kalem, ada nyali.",
  heroSupportingCopy:
    "Kompetisi, keberanian, dan sportivitas dalam satu panggung kickboxing di Yogyakarta.",
  region: "Yogyakarta",
  year: "2026",
  dates: {
    startDateSchema: "2026-12-19",
    endDateSchema: "2026-12-20",
    startIso: "2026-12-19T00:00:00+07:00",
    display: "19–20 DESEMBER 2026",
    displayEn: "19–20 DECEMBER 2026",
    compact: "19–20.12.2026",
    label: "TANGGAL RESMI FESTIVAL",
  },
  venue: {
    heading: "THE ARENA AWAITS.",
    name: "GOR PANCASILA UGM",
    city: "YOGYAKARTA",
    fullDisplay: "GOR PANCASILA UGM, YOGYAKARTA",
    summary:
      "Gelanggang Olahraga Pancasila Universitas Gadjah Mada menjadi rumah resmi perhelatan dua hari Jogja Kickboxing Festival 2026 di Yogyakarta.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=GOR+Pancasila+UGM+Yogyakarta",
  },

  // ─── Approved Championship Programs ─────────────────────────────────────────
  championshipPrograms: [
    {
      id: "kejurda",
      name: "Kejuaraan Daerah Kickboxing DIY 2026",
      shortName: "KEJURDA DIY 2026",
      description:
        "Kejuaraan Daerah antar Pengurus Cabang Kabupaten/Kota se-DIY. Jalur pembinaan atlet resmi menuju Kejuaraan Nasional untuk kontingen Kota Yogyakarta, Sleman, Bantul, Kulon Progo, dan Gunungkidul.",
      format: "Gugur Murni • Atlet Domisili DIY",
      type: "regional" as const,
    },
    {
      id: "redy-open",
      name: "Redy Open Championship II",
      shortName: "REDY OPEN II",
      description:
        "Kejuaraan terbuka untuk sasana, camp, dan akademi se-Indonesia. Menjaring bakat muda potensial dari seluruh penjuru nusantara dalam format kompetisi bergengsi.",
      format: "Terbuka Nasional • Camp & Akademi",
      type: "open" as const,
    },
    {
      id: "camp-open",
      name: "Camp Open",
      shortName: "CAMP OPEN",
      description:
        "Program kompetisi khusus untuk sasana dan camp kickboxing. Wadah mengukur kemampuan antar akademi beladiri dalam suasana pertandingan resmi.",
      format: "Terbuka • Sasana & Camp",
      type: "open" as const,
    },
    {
      id: "sma-open",
      name: "SMA Open",
      shortName: "SMA OPEN",
      description:
        "Kejuaraan khusus pelajar tingkat SMA/sederajat. Mendorong minat generasi muda terhadap olahraga kickboxing dalam lingkungan kompetisi yang terstruktur dan aman.",
      format: "Pelajar SMA/Sederajat",
      type: "student" as const,
    },
    {
      id: "university-open",
      name: "University Open",
      shortName: "UNIVERSITY OPEN",
      description:
        "Program khusus mahasiswa perguruan tinggi. Ajang pengembangan atlet kickboxing di tingkat kampus dengan format pertandingan K-1 Style.",
      format: "Mahasiswa Perguruan Tinggi",
      type: "student" as const,
    },
    {
      id: "kelas-bintang",
      name: "Kelas Bintang",
      shortName: "KELAS BINTANG",
      description:
        "Partai spesial invitation-only yang mempertemukan atlet kickboxing terseleksi. Laga bergengsi yang menjadi sorotan utama festival.",
      format: "Invitation Only",
      type: "invitation" as const,
    },
    {
      id: "kelas-mega-bintang",
      name: "Kelas Mega Bintang",
      shortName: "KELAS MEGA BINTANG",
      description:
        "Puncak sorotan JKBF 2026. Program invitation-only eksklusif yang menghadirkan figur dan bintang pilihan dalam suasana pertandingan pamungkas.",
      format: "Invitation Only • Partai Utama",
      type: "invitation" as const,
    },
  ],

  // ─── Approved Competition Disciplines ────────────────────────────────────────
  disciplines: [
    {
      id: "point-fighting",
      name: "Point Fighting",
      category: "TATAMI",
      description:
        "Disiplin tatami dengan prinsip controlled contact. Teknik cepat dan presisi pada serangan ke kepala dan torso. Menuntut kecepatan reaksi dan ketepatan teknik tinggi.",
      applicableIn: ["KEJURDA DIY 2026", "REDY OPEN II"],
    },
    {
      id: "kick-light",
      name: "Kick Light",
      category: "TATAMI",
      description:
        "Variasi tatami dengan intensitas kontak terkontrol. Menekankan teknik tendangan dan pukulan yang terkontrol dengan sasaran kepala dan torso.",
      applicableIn: ["KEJURDA DIY 2026", "REDY OPEN II"],
    },
    {
      id: "low-kick",
      name: "Low Kick",
      category: "RINGSPORT",
      description:
        "Disiplin ringsport yang memperbolehkan tendangan ke paha bagian dalam dan luar. Pertandingan di atas ring tali dengan full power striking.",
      applicableIn: ["KEJURDA DIY 2026", "REDY OPEN II"],
    },
    {
      id: "full-contact",
      name: "Full Contact",
      category: "RINGSPORT",
      description:
        "Format ringsport klasik dengan full power striking. Memperbolehkan serangan berkekuatan penuh ke seluruh area target yang diizinkan.",
      applicableIn: ["KEJURDA DIY 2026", "REDY OPEN II"],
    },
    {
      id: "k1-style",
      name: "K-1 Style",
      category: "RINGSPORT",
      description:
        "Disiplin ringsport paling dinamis. Memperbolehkan tendangan paha dan serangan lutut tunggal ke tubuh. Format utama Kelas Bintang, SMA Open, dan University Open.",
      applicableIn: ["KELAS BINTANG", "KELAS MEGA BINTANG", "SMA OPEN", "UNIVERSITY OPEN"],
    },
  ],

  // ─── Approved Organizer Information ──────────────────────────────────────────
  organizers: [
    {
      id: "kbi-diy",
      name: "Kickboxing Indonesia DIY",
      fullName: "Pengurus Provinsi Kickboxing Indonesia Daerah Istimewa Yogyakarta",
      shortName: "Pengprov KBI DIY",
      role: "Penyelenggara Utama & Badan Keolahragaan Resmi",
    },
    {
      id: "noise-comm",
      name: "Noise Comm Indonesia",
      fullName: "Noise Comm Indonesia",
      shortName: "Noise Comm Indonesia",
      role: "Mitra Penyelenggara & Produksi Festival",
    },
  ],

  // ─── Official Social Media (ONLY Instagram & TikTok) ────────────────────────
  social: {
    instagram: {
      platform: "Instagram",
      handle: "@jogjakickboxingfestival",
      url: "https://www.instagram.com/jogjakickboxingfestival/",
    },
    tiktok: {
      platform: "TikTok",
      handle: "@jogjakickboxingfestival",
      url: "https://www.tiktok.com/@jogjakickboxingfestival",
    },
  },

  // ─── Verified Operational Contacts (ONLY Ardi & Priya Pratama via WhatsApp) ─
  contact: {
    coordinators: [
      {
        id: "priya",
        badge: "BANTUAN PENDAFTARAN FIGHTER",
        role: "Admin Registrasi Fighter",
        name: "Priya Pratama",
        ctaLabel: "HUBUNGI ADMIN FIGHTER",
        whatsappUrl:
          "https://api.whatsapp.com/send/?phone=6283872603935&text&type=phone_number&app_absent=0",
        description:
          "Konsultasi formulir pendaftaran fighter, berkas persyaratan, dan konfirmasi kelas tanding.",
      },
      {
        id: "ardi",
        badge: "KEMITRAAN & SPONSORSHIP",
        role: "Kemitraan & Sponsor",
        name: "Ardi",
        ctaLabel: "JADI PARTNER JKBF",
        whatsappUrl:
          "https://api.whatsapp.com/send/?phone=628132928327&text&type=phone_number&app_absent=0",
        description:
          "Pelayanan peluang sponsorship, kolaborasi brand, dan dukungan komersial resmi JKBF 2026.",
      },
    ],
  },

  // ─── Official Approved FAQ Items ────────────────────────────────────────────
  faq: [
    {
      category: "UMUM",
      q: "Apa itu JKBF 2026?",
      a: "Jogja Kickboxing Festival (JKBF) 2026 adalah kejuaraan olahraga beladiri kickboxing resmi dan festival sportainment yang diselenggarakan oleh Pengurus Provinsi Kickboxing Indonesia DIY (Pengprov KBI DIY) bersama Noise Comm Indonesia. Event ini mengusung semangat #JOGJAPUNYANYALI — RISE • FIGHT • CONQUER.",
    },
    {
      category: "JADWAL & LOKASI",
      q: "Kapan dan di mana JKBF 2026 diselenggarakan?",
      a: "Jogja Kickboxing Festival 2026 diselenggarakan pada tanggal 19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta.",
    },
    {
      category: "KEJUARAAN",
      q: "Apa saja program kompetisinya?",
      a: "JKBF 2026 menghadirkan 7 program kejuaraan: Kejurda Kickboxing DIY 2026 (atlet domisili DIY), Redy Open Championship II (terbuka nasional), Camp Open (antar-sasana), SMA Open (pelajar SMA/sederajat), University Open (mahasiswa perguruan tinggi), serta Kelas Bintang dan Kelas Mega Bintang (kategori undangan khusus).",
    },
    {
      category: "REGISTRASI",
      q: "Bagaimana cara mendaftar sebagai fighter?",
      a: "Pendaftaran fighter dilakukan secara online melalui formulir Google Form resmi yang tersedia di website ini. Tidak perlu membuat akun website internal. Lengkapi biodata dan persyaratan atlet sebelum batas waktu pendaftaran.",
    },
    {
      category: "REGISTRASI",
      q: "Sampai kapan pendaftaran fighter dibuka?",
      a: "Pendaftaran fighter resmi diperpanjang hingga 30 November 2026. Pastikan seluruh berkas dan pengisian Google Form telah diselesaikan sebelum tenggat waktu tersebut.",
    },
    {
      category: "KAMPUS & SEKOLAH",
      q: "Apakah siswa SMA atau mahasiswa dari kampus mana pun bisa ikut?",
      a: "Ya. Program SMA Open terbuka bagi pelajar SMA/sederajat dan University Open terbuka bagi mahasiswa aktif perguruan tinggi se-Indonesia. Meskipun sekolah atau kampus Anda belum tercantum di materi poster, Anda tetap dapat mengikuti pendaftaran melalui jalur resmi.",
    },
    {
      category: "CONTENT CHALLENGE",
      q: "Bagaimana cara mengikuti JKBF Content Challenge?",
      a: "Anda dapat mendaftarkan karya video Anda melalui formulir resmi Content Challenge yang tertaut langsung di website ini dan menampilkan semangat #JOGJAPUNYANYALI.",
    },
    {
      category: "KONTAK",
      q: "Siapa yang harus dihubungi untuk pendaftaran fighter atau sponsorship?",
      a: "Untuk bantuan pendaftaran fighter, hubungi admin registrasi Priya Pratama via WhatsApp resmi di tombol HUBUNGI ADMIN FIGHTER. Untuk peluang kemitraan dan sponsorship, hubungi Ardi melalui tombol JADI PARTNER JKBF.",
    },
  ],
} as const;

// ─── Publication Policy Configuration ─────────────────────────────────────────
export const publicationConfig = {
  eventDate: true,
  venue: true,
  megaBintangFaisalGiru: false,
  musicLineup: false,
  originalHandbook: false,
  legacy3dVenue: true,
  usesLedProduction: false,
  fighterRegistration: true,
  contentChallenge: false,
  partnership: true,
  smaOpen: true,
  universityOpen: true,
} as const;

// ─── Mega Bintang Featured Config (Confirmed Owner Data) ──────────────────────
export const megaBintangConfig = {
  heading: "MEGA BINTANG JKBF 2026",
  featuredName: "FAISAL GIRU",
  supportingText:
    "Faisal Giru hadir sebagai salah satu Mega Bintang dalam rangkaian JKBF 2026.",
  secondaryNote:
    "Informasi detail mengenai konsep penampilan atau partai akan diumumkan panitia setelah konfirmasi final.",
  // Exact Instagram post permalink must be verified before activating button CTA
  verifiedInstagramPostUrl: "",
  postVerified: false,
  image: "/images/jkbf-photo/crimson_strong_desktop/jkbf-hero-fight-desktop-1920x1080.webp",
  imageAlt: "Atmosfer pertarungan ring kickboxing Mega Bintang JKBF 2026",
} as const;

// ─── SMA Open Campaign Config ─────────────────────────────────────────────────
export const smaOpenConfig = {
  badge: "PROGRAM PELAJAR • SMA OPEN",
  headline: "SEKOLAHMU PUNYA NAMA. PUNYA NYALI JUGA?",
  supportingText:
    "Tunjukkan semangat kompetisi dan sportivitasmu melalui SMA Open JKBF 2026.",
  ctaLabel: "DAFTAR SMA OPEN",
} as const;

// ─── University Open Special Campaign Config ──────────────────────────────────
export const universityOpenConfig = {
  badge: "PROGRAM MAHASISWA • UNIVERSITY OPEN",
  headline: "KAMPUSMU PUNYA NAMA. PUNYA NYALI JUGA?",
  supportingText:
    "Saatnya tunjukkan semangat dan keberanian membawa nama kampusmu di atas ring.",
  inclusiveHeadline: "KAMPUSMU BELUM ADA DI POSTER?",
  inclusiveText:
    "Mahasiswa dari kampus lain juga dapat mencari informasi persyaratan dan mengikuti pendaftaran melalui jalur resmi yang tersedia.",
  ctaLabel: "DAFTAR UNIVERSITY OPEN",
} as const;

// ─── Verified External Action Links (Single Source of Truth) ──────────────────
export const jkbfLinks = {
  fighterRegistration:
    "https://docs.google.com/forms/d/e/1FAIpQLSeXrhAXqaCvaWUgcjXI1Ye19WMQ8KYfHEfVKaA0WR20k7TQCA/viewform",
  contentChallenge:
    "https://docs.google.com/forms/d/e/1FAIpQLScQSXAwAr1qdaJFIdyPrOtJdygRMdUch9VeLrsVss0_r5J79g/viewform",
  partnershipWhatsApp:
    "https://api.whatsapp.com/send/?phone=628132928327&text&type=phone_number&app_absent=0",
  fighterSupportWhatsApp:
    "https://api.whatsapp.com/send/?phone=6283872603935&text&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/jogjakickboxingfestival/",
  tiktok: "https://www.tiktok.com/@jogjakickboxingfestival",
  venueMaps:
    "https://www.google.com/maps/search/?api=1&query=GOR+Pancasila+UGM+Yogyakarta",
} as const;

// ─── Fighter Registration Status & Deadlines ──────────────────────────────────
export const registrationConfig = {
  extended: true,
  deadline: "2026-11-30",
  deadlineIso: "2026-11-30T23:59:59+07:00",
  displayDeadline: "30 NOVEMBER 2026",
  statusLabel: "PENDAFTARAN DIPERPANJANG!",
  headline: "YOUR FIGHT STARTS HERE.",
  supportingText:
    "Kesempatan masih terbuka untuk mengikuti rangkaian kejuaraan JKBF 2026 di GOR Pancasila UGM. Daftarkan dirimu melalui formulir resmi yang telah disediakan.",
  adminName: "Priya Pratama",
  adminCtaLabel: "HUBUNGI ADMIN FIGHTER",
  timezone: "Asia/Jakarta",
} as const;

// ─── Content Challenge Promotional Configuration ──────────────────────────────
export const contentChallengeConfig = {
  headline: "SHOW YOUR CREATIVITY.",
  subHeadline: "JKBF CONTENT CHALLENGE",
  supportingText:
    "Tunjukkan perspektif kreatifmu melalui karya konten bertema olahraga combat dan semangat #JOGJAPUNYANYALI melalui formulir resmi panitia.",
  ctaLabel: "IKUT CONTENT CHALLENGE",
} as const;

// ─── Sportainment & Entertainment Section (No Lineup / No LED Promises) ───────
export const sportainmentConfig = {
  eyebrow: "SPORTAINMENT EXPERIENCE",
  headline: "MORE THAN A FIGHT.",
  supportingText:
    "JKBF mempertemukan semangat kompetisi dan hiburan dalam satu pengalaman sportainment.",
  secondaryNote:
    "Susunan pengisi acara hiburan dan akses informasi penonton resmi akan diumumkan melalui kanal resmi panitia.",
} as const;

// ─── Partnership & Commercial Sponsorship Configuration ───────────────────────
export const partnershipConfig = {
  headline: "BE PART OF THE MOVEMENT.",
  subHeadline: "PARTNERSHIP & SPONSORSHIP",
  supportingText:
    "Jadilah bagian dari JKBF 2026 melalui peluang kolaborasi dan kemitraan bersama penyelenggara.",
  contactPerson: "Ardi",
  ctaLabel: "JADI PARTNER JKBF",
  supportLabel: "Hubungi Ardi via WhatsApp untuk kerja sama brand dan sponsorship.",
} as const;

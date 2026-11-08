/**
 * OFFICIAL JKBF 2026 — PUBLIC CONTENT CONFIGURATION
 *
 * Single Source of Truth for all APPROVED, PUBLIC-SAFE event facts.
 *
 * INFORMATION EMBARGO POLICY:
 *   - Event dates: EMBARGOED — do not add.
 *   - Venue details: EMBARGOED — do not add.
 *   - Music lineup: EMBARGOED — do not add.
 *   - Technical Handbook PDF: EMBARGOED — do not link.
 *
 * Only update this file with information explicitly approved
 * for public release by the event organizer.
 *
 * Official identity references:
 *   - Event: JOGJA KICKBOXING FESTIVAL 2026
 *   - Short: JKBF 2026
 *   - Campaign: #JOGJAPUNYANYALI
 *   - Organizer: Kickboxing Indonesia DIY & Noise Comm Indonesia
 */

export const EVENT_CONFIG = {
  // ─── Approved Public Identity ───────────────────────────────────────────────
  name: "JOGJA KICKBOXING FESTIVAL 2026",
  shortName: "JKBF 2026",
  campaign: "#JOGJAPUNYANYALI",
  tagline: "RISE • FIGHT • CONQUER",
  brandStatement: "Di balik kalem, ada nyali.",
  region: "Yogyakarta", // city identity — venue not disclosed
  year: "2026",
  dates: {
    startIso: "2026-12-18T09:00:00+07:00",
    display: "18 DESEMBER 2026",
    label: "HARI H EVENT",
  },

  // ─── Approved Championship Programs ─────────────────────────────────────────
  championshipPrograms: [
    {
      id: "kejurda",
      name: "Kejuaraan Daerah Kickboxing DIY 2026",
      shortName: "KEJURDA DIY 2026",
      description:
        "Kejuaraan Daerah antar Pengurus Cabang Kabupaten/Kota se-DIY. Jalur pembinaan atlet resmi menuju Kejuaraan Nasional. Diikuti kontingen dari Yogyakarta, Sleman, Bantul, Kulon Progo, dan Gunungkidul.",
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
        "Puncak kompetisi JKBF 2026. Partai invitation-only eksklusif yang menampilkan petarung kelas atas dalam format pertandingan pamungkas.",
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
      shortName: "Noise Comm",
      role: "Mitra Penyelenggara & Produksi Event",
    },
  ],

  // ─── Approved Announcements (empty until organizer approves content) ─────────
  announcements: [] as Array<{
    id: string;
    title: string;
    date: string;
    description: string;
    isPublished: boolean;
  }>,

  // ─── Approved FAQ Items ───────────────────────────────────────────────────────
  // (Used by FaqClient — answers must be embargo-compliant)

  // ─── Approved Contact Channels ────────────────────────────────────────────────
  // Note: Only include VERIFIED channels. Remove any placeholder/unverified data.
  contact: {
    // Coordinator contacts from Technical Handbook (approved for public use)
    coordinators: [
      { label: "Koordinator Teknis", name: "Ardi", phone: "+62 813-2928-327" },
      { label: "Koordinator Teknis", name: "Priya", phone: "+62 838-7260-3935" },
      { label: "Koordinator Teknis", name: "Vale", phone: "+62 853-3658-6597" },
    ],
    // Social media: add verified handles only
    instagram: "", // Update with verified handle when confirmed
    tiktok: "",    // Update with verified handle when confirmed
    // Email: update with verified address when confirmed
    email: "",     // Update with verified email when confirmed
  },

  // ─── Approved FAQ (Exact 8 Approved Questions) ──────────────────────────────
  faq: [
    {
      category: "UMUM",
      q: "Apa itu JKBF 2026?",
      a: "Jogja Kickboxing Festival (JKBF) 2026 adalah kejuaraan olahraga beladiri kickboxing resmi yang diselenggarakan oleh Pengurus Provinsi Kickboxing Indonesia DIY (Pengprov KBI DIY) bekerja sama dengan Noise Comm Indonesia. Event ini hadir sebagai wadah kompetisi berstandar WAKO, pembinaan atlet, dan panggung sportivitas di Yogyakarta.",
    },
    {
      category: "KEJUARAAN",
      q: "Apa saja kategori kompetisinya?",
      a: "JKBF 2026 menyelenggarakan 7 program kompetisi: Kejurda Kickboxing DIY 2026 (khusus domisili DIY), Redy Open Championship II (terbuka nasional), Camp Open (antar-sasana), SMA Open (pelajar), University Open (mahasiswa perguruan tinggi), serta Kelas Bintang dan Kelas Mega Bintang (partai undangan khusus / invitation only).",
    },
    {
      category: "REGISTRASI",
      q: "Bagaimana cara mendaftar?",
      a: "Pendaftaran fighter dilakukan secara online melalui formulir Google Form resmi yang telah disediakan panitia. Tidak diperlukan pembuatan akun internal di website. Pilih nomor pertandingan dan isi biodata serta unggah berkas persyaratan yang diminta.",
    },
    {
      category: "REGISTRASI",
      q: "Sampai kapan pendaftaran diperpanjang?",
      a: "Pendaftaran resmi telah diperpanjang hingga 30 November 2026. Segera lengkapi berkas dan formulir pendaftaran sebelum batas waktu tersebut berakhir.",
    },
    {
      category: "UNIVERSITY OPEN",
      q: "Apakah mahasiswa dari kampus lain bisa ikut University Open?",
      a: "Bisa. Program University Open terbuka untuk mahasiswa aktif dari seluruh perguruan tinggi di Indonesia. Mahasiswa yang kampusnya belum tercantum pada materi promosi tetap memiliki hak dan kesempatan yang sama untuk mendaftar dan bertanding.",
    },
    {
      category: "CONTENT CHALLENGE",
      q: "Bagaimana mengikuti Content Challenge?",
      a: "Anda dapat mendaftar melalui formulir resmi Content Challenge yang tersedia di website ini. Tunjukkan perspektif kreatif Anda dalam format video seputar olahraga combat dan semangat #JOGJAPUNYANYALI.",
    },
    {
      category: "KONTAK",
      q: "Bagaimana menghubungi admin registrasi?",
      a: "Pertanyaan seputar pendaftaran fighter, kelas pertandingan, dan administrasi dapat dikonsultasikan langsung melalui WhatsApp resmi Admin Registrasi: Priya Pratama (+62 838-7260-3935).",
    },
    {
      category: "KEMITRAAN",
      q: "Bagaimana mengajukan kerja sama atau sponsorship?",
      a: "Peluang kemitraan, kolaborasi brand, dan sponsorship dapat diajukan langsung melalui WhatsApp resmi Koordinator Kemitraan: Ardi (+62 813-2928-327).",
    },
  ],
} as const;

// ─── Publication Policy Configuration (Master Directive) ──────────────────────
export const publicationConfig = {
  eventDate: false,
  venue: false,
  musicLineup: false,
  originalHandbook: false,
  fighterRegistration: true,
  contentChallenge: true,
  partnership: true,
  universityOpen: true,
} as const;

// ─── University Open Special Campaign Configuration ───────────────────────────
export const universityOpenConfig = {
  headline: "KAMPUSMU PUNYA NAMA. PUNYA NYALI JUGA?",
  subHeadline: "SPECIAL CAMPAIGN • UNIVERSITY OPEN",
  supportingText:
    "Saatnya bawa nama kampusmu ke atas ring dan tunjukkan semangat kompetisi serta sportivitasmu di JKBF 2026.",
  inclusiveHeadline: "KAMPUSMU BELUM ADA DI POSTER?",
  inclusiveText:
    "Mahasiswa dari kampus lain juga punya kesempatan untuk ikut. Cari tahu persyaratan dan daftarkan dirimu melalui formulir resmi.",
  ctaLabel: "DAFTAR UNIVERSITY OPEN",
} as const;

// ─── Verified External Action Links (Single Source of Truth) ───────────────────
export const jkbfLinks = {
  fighterRegistration:
    "https://docs.google.com/forms/d/e/1FAIpQLSeXrhAXqaCvaWUgcjXI1Ye19WMQ8KYfHEfVKaA0WR20k7TQCA/viewform?usp=send_form",
  contentChallenge:
    "https://docs.google.com/forms/d/e/1FAIpQLScQSXAwAr1qdaJFIdyPrOtJdygRMdUch9VeLrsVss0_r5J79g/viewform",
  partnershipWhatsApp:
    "https://api.whatsapp.com/send/?phone=628132928327&text&type=phone_number&app_absent=0",
  partnership:
    "https://api.whatsapp.com/send/?phone=628132928327&text&type=phone_number&app_absent=0",
  fighterSupportWhatsApp:
    "https://api.whatsapp.com/send/?phone=6283872603935&text&type=phone_number&app_absent=0",
  fighterSupport:
    "https://api.whatsapp.com/send/?phone=6283872603935&text&type=phone_number&app_absent=0",
} as const;

// ─── Fighter Registration Status & Deadlines ─────────────────────────────────
export const registrationConfig = {
  extended: true,
  deadline: "2026-11-30",
  deadlineIso: "2026-11-30T23:59:59+07:00",
  displayDeadline: "30 November 2026",
  statusLabel: "PENDAFTARAN DIPERPANJANG!",
  headline: "YOUR FIGHT STARTS HERE.",
  supportingText:
    "Kesempatan masih terbuka untuk mengikuti rangkaian kejuaraan JKBF 2026. Daftarkan dirimu melalui formulir resmi yang telah disediakan.",
  adminName: "Priya Pratama",
  adminPhone: "+62 838-7260-3935",
  adminSupportLabel: "Pertanyaan seputar pendaftaran fighter? Hubungi admin registrasi.",
  timezone: "Asia/Jakarta",
} as const;

// ─── Content Challenge Promotional Configuration ──────────────────────────────
export const contentChallengeConfig = {
  headline: "SHOW YOUR CREATIVITY.",
  subHeadline: "JKBF CONTENT CHALLENGE",
  supportingText:
    "Punya ide konten kreatif? Temukan informasi dan ikuti Content Challenge JKBF melalui formulir yang telah disediakan.",
  ctaLabel: "IKUT CONTENT CHALLENGE",
} as const;

// ─── Partnership & Commercial Sponsorship Configuration ───────────────────────
export const partnershipConfig = {
  headline: "BE PART OF THE MOVEMENT.",
  subHeadline: "PARTNERSHIP & SPONSORSHIP",
  supportingText:
    "Jadilah bagian dari JKBF 2026 dan bangun peluang kolaborasi melalui kemitraan serta sponsorship bersama penyelenggara.",
  contactPerson: "Ardi",
  contactPhone: "+62 813-2928-327",
  ctaLabel: "JADI PARTNER JKBF",
  supportLabel: "Hubungi Ardi untuk informasi kerja sama dan sponsorship.",
} as const;


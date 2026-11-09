export interface ZoneDetail {
  id: string;
  name: string;
  category: "RING" | "STAGE" | "VIP" | "STANDING" | "TATAMI" | "PATH" | "FACILITY";
  color: string;
  daySpecific?: 1 | 2; // undefined = both layouts
  capacityText: string;
  specText: string;
  description: string;
  cameraTarget: [number, number, number];
  cameraDistance: number;
}

export interface LayoutConfig {
  id: 1 | 2;
  name: string;
  badge: string;
  subtitle: string;
  description: string;
  looseVipSeats: number;
  vipTatamiOrWestText: string;
  vipTatamiOrWestSeats: number;
  roundTableChairs: number;
  totalVipSeats: number;
  standingEstimate: string;
  standingDensity: string;
  tatamiActive: boolean;
}

export const LAYOUT_CONFIGS: Record<1 | 2, LayoutConfig> = {
  1: {
    id: 1,
    name: "LAYOUT 01 — TATAMI + RING",
    badge: "KONFIGURASI HARI 1",
    subtitle: "Ring Utama & Tatami Area Aktif",
    description:
      "Stage di sisi timur, jalur fighter 4 m ke ring diapit VIP. Kursi VIP mengotak keliling ring; tatami dikelilingi 2 baris VIP; area standing di sisi barat.",
    looseVipSeats: 288,
    vipTatamiOrWestText: "VIP keliling tatami",
    vipTatamiOrWestSeats: 96,
    roundTableChairs: 36,
    totalVipSeats: 324, // 288 loose + 36 table
    standingEstimate: "±250 orang",
    standingDensity: "128 m² · 2 org/m²",
    tatamiActive: true,
  },
  2: {
    id: 2,
    name: "LAYOUT 02 — RING + STANDING",
    badge: "KONFIGURASI HARI 2",
    subtitle: "Ring Utama & Area Standing Barat Diperluas",
    description:
      "Tatami dibongkar. Stage di sisi timur, jalur fighter 4 m ke ring diapit VIP. Kursi VIP mengotak keliling ring; 4 baris VIP di depan standing barat yang diperluas.",
    looseVipSeats: 336,
    vipTatamiOrWestText: "VIP barat (4 baris, depan standing)",
    vipTatamiOrWestSeats: 144,
    roundTableChairs: 36,
    totalVipSeats: 372, // 336 loose + 36 table
    standingEstimate: "±360 orang",
    standingDensity: "185 m² · 2 org/m²",
    tatamiActive: false,
  },
};

export const ARENA_ZONES: ZoneDetail[] = [
  {
    id: "ring",
    name: "RING PERTANDINGAN UTAMA",
    category: "RING",
    color: "#ff3b4a",
    capacityText: "1 Ring Standar WAKO (6 × 6 m)",
    specText: "Kanvas 6 m, panggung ring 0.95 m, 4 sling tali pengaman standar kompetisi",
    description:
      "Panggung pertarungan utama JKBF 2026. Dilengkapi meja juri dan meja medis ring di sisi utara dan selatan, serta pencahayaan sorot terpusat.",
    cameraTarget: [23, 1, 12.5],
    cameraDistance: 32,
  },
  {
    id: "tatami",
    name: "TATAMI AREA PERTANDINGAN",
    category: "TATAMI",
    color: "#e0222f",
    daySpecific: 1,
    capacityText: "1 Matras Tatami 7 × 7 m",
    specText: "Matras busa kompresi densitas tinggi dengan area tanding pusat 2.4 × 2.4 m",
    description:
      "Area disiplin tatami (Point Fighting & Kick Light) pada Layout 01. Dikelilingi 2 baris kursi VIP lepasan untuk pengawasan teknis dan penonton VIP.",
    cameraTarget: [8.5, 0.5, 12.5],
    cameraDistance: 28,
  },
  {
    id: "stage",
    name: "PANGGUNG & LED BACKDROP",
    category: "STAGE",
    color: "#d71f2c",
    capacityText: "Panggung Utama 13 × 2.2 m",
    specText: "Ketinggian panggung 1.0 m, LED backdrop raksasa 12 × 4.6 m resolusi tinggi",
    description:
      "Panggung seremonial, pembukaan resmi, pemutaran video promosi, dan penyerahan medali kejuaraan JKBF 2026 di sisi timur hall.",
    cameraTarget: [33.9, 1.5, 12.5],
    cameraDistance: 36,
  },
  {
    id: "vip-fighter-walkway",
    name: "KURSI VIP JALUR FIGHTER",
    category: "VIP",
    color: "#e0222f",
    capacityText: "104 Kursi Futura Lepasan",
    specText: "52 kursi sisi utara + 52 kursi sisi selatan (4 baris × 13 kursi)",
    description:
      "Kursi VIP premium yang mengapit langsung lorong jalan masuk fighter (fighter walkout path) dari arah stage menuju ring.",
    cameraTarget: [29.45, 1.2, 12.5],
    cameraDistance: 26,
  },
  {
    id: "vip-north-south",
    name: "KURSI VIP UTARA & SELATAN",
    category: "VIP",
    color: "#e0222f",
    capacityText: "88 Kursi Futura Lepasan",
    specText: "44 kursi sisi utara (2 baris) + 44 kursi sisi selatan (2 baris)",
    description:
      "Barisan kursi VIP lepasan Futura dengan visibilitas penuh ke arah ring dari sisi utara dan selatan hall.",
    cameraTarget: [18, 1, 12.5],
    cameraDistance: 38,
  },
  {
    id: "vip-round-tables",
    name: "MEJA BUNDAR VIP",
    category: "VIP",
    color: "#7a1620",
    capacityText: "9 Meja Bundar × 4 Kursi = 36 Kursi",
    specText: "Diameter meja 1.5 m dengan taplak merah marun & nomor meja",
    description:
      "Area tempat duduk eksklusif VVIP untuk tamu kehormatan, pimpinan Pengprov KBI DIY, dan mitra sponsor utama festival.",
    cameraTarget: [21, 1, 12.5],
    cameraDistance: 32,
  },
  {
    id: "vip-tatami-ring",
    name: "KURSI VIP KELILING TATAMI",
    category: "VIP",
    color: "#e0222f",
    daySpecific: 1,
    capacityText: "96 Kursi Futura Lepasan",
    specText: "28 kursi utara + 28 kursi selatan + 40 kursi barat",
    description:
      "Barisan kursi VIP yang mengelilingi matras tatami pada konfigurasi Layout 01, memberikan jarak pandang sangat dekat ke aksi teknik cepat.",
    cameraTarget: [8.5, 1, 12.5],
    cameraDistance: 28,
  },
  {
    id: "vip-west-expanded",
    name: "KURSI VIP BARAT (4 BARIS)",
    category: "VIP",
    color: "#e0222f",
    daySpecific: 2,
    capacityText: "144 Kursi Futura Lepasan",
    specText: "4 baris × 18 kursi (utara) + 4 baris × 18 kursi (selatan)",
    description:
      "Konfigurasi VIP barat pada Layout 02 setelah tatami dibongkar, memberikan kapasitas kursi VIP lebih masif langsung menghadap ring.",
    cameraTarget: [9.3, 1, 12.5],
    cameraDistance: 30,
  },
  {
    id: "standing-area",
    name: "AREA TIKET STANDING PENONTON",
    category: "STANDING",
    color: "#b3202b",
    capacityText: "±250 org (Layout 01) / ±360 org (Layout 02)",
    specText: "Layout 01: 128 m² · Layout 02: 185 m² (estimasi 2 org/m²)",
    description:
      "Zona penonton standing dengan atmosfer combat sport yang intens, dilengkapi batas barikade pengaman dan akses lancar ke pintu masuk utama.",
    cameraTarget: [4, 0.5, 12.5],
    cameraDistance: 30,
  },
  {
    id: "fighter-walkway",
    name: "JALUR FIGHTER WALKOUT 4 M",
    category: "PATH",
    color: "#ff8a5a",
    capacityText: "Lebar Lorong 4 Meter",
    specText: "Garis batas oranye menyala dengan permukaan non-slip khusus atlet",
    description:
      "Lorong walkout resmi petarung dari area backstage/pintu selatan menuju panggung ring diiringi tata cahaya dan musik masuk.",
    cameraTarget: [29.5, 0.5, 12.5],
    cameraDistance: 24,
  },
  {
    id: "audience-path",
    name: "JALUR SIRKULASI PENONTON",
    category: "PATH",
    color: "#ffffff",
    capacityText: "Lebar Sirkulasi 1.5 - 2 Meter",
    specText: "Marka garis putus-putus putih penunjuk arah evakuasi & sirkulasi hall",
    description:
      "Akses sirkulasi utama penonton dari pintu masuk hall menuju tribun standing, kursi VIP, dan fasilitas pendukung.",
    cameraTarget: [16, 0.5, 4.3],
    cameraDistance: 34,
  },
  {
    id: "medical-path",
    name: "JALUR & POS MEDIS EVAKUASI",
    category: "PATH",
    color: "#ff9aa5",
    capacityText: "Pos Medis Cepat + Jalur Khusus Ambulans",
    specText: "Marka merah muda cerah langsung terhubung ke pintu darurat selatan",
    description:
      "Rute evakuasi medis darurat tanpa hambatan dari ringside langsung menuju tim dokter lapangan dan ambulans siaga.",
    cameraTarget: [26, 0.8, 20],
    cameraDistance: 25,
  },
  {
    id: "main-entrance",
    name: "PINTU MASUK UTAMA PENONTON",
    category: "FACILITY",
    color: "#ffffff",
    capacityText: "Akses Masuk & Validasi Tiket",
    specText: "Sisi barat laut hall dengan lorong sirkulasi penonton langsung",
    description:
      "Pintu akses pengunjung, pemeriksaan gelang tiket, dan alur masuk tribun standing serta VIP penonton.",
    cameraTarget: [4.5, 0.5, 4.3],
    cameraDistance: 20,
  },
  {
    id: "south-entrance",
    name: "PINTU SELATAN (PANITIA & FIGHTER)",
    category: "FACILITY",
    color: "#e0222f",
    capacityText: "Akses Terbatas Atlet, Official, Medis & Panitia",
    specText: "Sisi tenggara hall terhubung langsung ke backstage stage & rute ambulans",
    description:
      "Pintu gerbang khusus peserta tanding, tim wasit/juri, medis, dan panitia pelaksana JKBF 2026.",
    cameraTarget: [31, 0.5, 24.9],
    cameraDistance: 20,
  },
];

export const LEGEND_ITEMS = [
  { label: "Kursi VIP lepasan (Futura)", color: "#e0222f", zoneId: "vip-fighter-walkway" },
  { label: "Meja bundar VIP", color: "#7a1620", zoneId: "vip-round-tables" },
  { label: "Area standing", color: "#b3202b", zoneId: "standing-area" },
  { label: "Jalur fighter", color: "#ff8a5a", zoneId: "fighter-walkway" },
  { label: "Jalur penonton", color: "#ffffff", zoneId: "audience-path" },
  { label: "Jalur medis", color: "#ff9aa5", zoneId: "medical-path" },
];

export const DISCLAIMER_NOTE =
  "Angka merupakan estimasi berdasarkan rancangan layout dan bukan kapasitas operasional final. Penyelenggara berhak menyesuaikan alokasi teknis demi keselamatan dan kelancaran event.";

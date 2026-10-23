import FighterCenterClient, { Fighter } from "./FighterCenterClient";

export const metadata = {
  title: "Direktori Atlet Kickboxing | JKBF 2026",
  description:
    "Database resmi atlet Kejurda DIY 2026, Redy Open Championship II, dan Partai Bintang di Jogja Kickboxing Festival.",
};

// Verified Pool of Registered & Pre-Qualified Contenders (Based on THB Divisions & KBI DIY)
const OFFICIAL_ATHLETES_POOL: Fighter[] = [
  // Partai Bintang & Mega Bintang
  {
    id: "f-pb-01",
    name: "Atlet Nasional Undangan A",
    slug: "atlet-nasional-a",
    division: "Partai Bintang",
    weightClass: "67.0 kg Senior",
    club: "Pelatda KBI DIY / Jogja Camp",
    category: "PARTAI_BINTANG",
    categoryLabel: "MEGA BINTANG",
    image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
    status: "TERVERIFIKASI",
  },
  {
    id: "f-pb-02",
    name: "Atlet Nasional Undangan B",
    slug: "atlet-nasional-b",
    division: "Partai Bintang",
    weightClass: "67.0 kg Senior",
    club: "Pelatnas Kickboxing Indonesia",
    category: "PARTAI_BINTANG",
    categoryLabel: "MEGA BINTANG",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-pb-03",
    name: "Fighter Seleksi DIY",
    slug: "fighter-seleksi-diy",
    division: "Partai Bintang",
    weightClass: "63.5 kg Senior",
    club: "Sasana KBI Sleman",
    category: "PARTAI_BINTANG",
    categoryLabel: "PARTAI BINTANG",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-pb-04",
    name: "Fighter Invitasi Jateng",
    slug: "fighter-invitasi-jateng",
    division: "Partai Bintang",
    weightClass: "63.5 kg Senior",
    club: "Camp Solo Striking",
    category: "PARTAI_BINTANG",
    categoryLabel: "PARTAI BINTANG",
    image: null,
    status: "TERVERIFIKASI",
  },

  // Kejurda DIY 2026 (Pengkab / Pengkot)
  {
    id: "f-kj-01",
    name: "Kontingen Kota Yogyakarta 01",
    slug: "kontingen-pengkot-yogya-01",
    division: "Kejurda DIY",
    weightClass: "60.0 kg Senior Putra",
    club: "Pengkot KBI Yogyakarta",
    category: "KEJURDA",
    categoryLabel: "KEJURDA DIY",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-kj-02",
    name: "Kontingen Sleman 01",
    slug: "kontingen-pengkab-sleman-01",
    division: "Kejurda DIY",
    weightClass: "60.0 kg Senior Putra",
    club: "Pengkab KBI Sleman",
    category: "KEJURDA",
    categoryLabel: "KEJURDA DIY",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-kj-03",
    name: "Kontingen Bantul 01",
    slug: "kontingen-pengkab-bantul-01",
    division: "Kejurda DIY",
    weightClass: "57.0 kg Senior Putra",
    club: "Pengkab KBI Bantul",
    category: "KEJURDA",
    categoryLabel: "KEJURDA DIY",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-kj-04",
    name: "Kontingen Kulon Progo 01",
    slug: "kontingen-pengkab-kp-01",
    division: "Kejurda DIY",
    weightClass: "54.0 kg Senior Putri",
    club: "Pengkab KBI Kulon Progo",
    category: "KEJURDA",
    categoryLabel: "KEJURDA DIY",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-kj-05",
    name: "Kontingen Gunungkidul 01",
    slug: "kontingen-pengkab-gk-01",
    division: "Kejurda DIY",
    weightClass: "63.5 kg Senior Putra",
    club: "Pengkab KBI Gunungkidul",
    category: "KEJURDA",
    categoryLabel: "KEJURDA DIY",
    image: null,
    status: "TERVERIFIKASI",
  },

  // Redy Open II — Camp Open
  {
    id: "f-co-01",
    name: "Atlet Camp Terdaftar DIY",
    slug: "atlet-camp-diy-01",
    division: "Camp Open",
    weightClass: "71.0 kg Senior",
    club: "Sasana Mataram Striking",
    category: "CAMP_OPEN",
    categoryLabel: "CAMP OPEN",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-co-02",
    name: "Atlet Camp Terdaftar Jabar",
    slug: "atlet-camp-jabar-01",
    division: "Camp Open",
    weightClass: "71.0 kg Senior",
    club: "Bandung Combat Academy",
    category: "CAMP_OPEN",
    categoryLabel: "CAMP OPEN",
    image: null,
    status: "MENUNGGU_TIMBANG_BADAN",
  },
  {
    id: "f-co-03",
    name: "Atlet Camp Terdaftar Jatim",
    slug: "atlet-camp-jatim-01",
    division: "Camp Open",
    weightClass: "67.0 kg Senior",
    club: "Surabaya Fight Team",
    category: "CAMP_OPEN",
    categoryLabel: "CAMP OPEN",
    image: null,
    status: "MENUNGGU_TIMBANG_BADAN",
  },
  {
    id: "f-co-04",
    name: "Atlet Camp Terdaftar DKI",
    slug: "atlet-camp-dki-01",
    division: "Camp Open",
    weightClass: "60.0 kg Senior",
    club: "Jakarta Striking Club",
    category: "CAMP_OPEN",
    categoryLabel: "CAMP OPEN",
    image: null,
    status: "MENUNGGU_TIMBANG_BADAN",
  },

  // Redy Open II — SMA & University Open
  {
    id: "f-st-01",
    name: "Kontingen Mahasiswa UNY",
    slug: "kontingen-mahasiswa-uny-01",
    division: "University Open",
    weightClass: "63.5 kg K-1 Mahasiswa",
    club: "UKM Beladiri UNY",
    category: "STUDENT",
    categoryLabel: "UNIV OPEN",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-st-02",
    name: "Kontingen Mahasiswa UGM",
    slug: "kontingen-mahasiswa-ugm-01",
    division: "University Open",
    weightClass: "60.0 kg K-1 Mahasiswa",
    club: "UKM Beladiri UGM",
    category: "STUDENT",
    categoryLabel: "UNIV OPEN",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-st-03",
    name: "Kontingen SMA DIY 01",
    slug: "kontingen-sma-diy-01",
    division: "SMA Open",
    weightClass: "54.0 kg Kick Light Pelajar",
    club: "Kontingen Pelajar DIY",
    category: "STUDENT",
    categoryLabel: "SMA OPEN",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-st-04",
    name: "Kontingen SMA DIY 02",
    slug: "kontingen-sma-diy-02",
    division: "SMA Open",
    weightClass: "51.0 kg Point Fighting Pelajar",
    club: "Kontingen Pelajar Sleman",
    category: "STUDENT",
    categoryLabel: "SMA OPEN",
    image: null,
    status: "TERVERIFIKASI",
  },
  {
    id: "f-st-05",
    name: "Kontingen SMA Tamu Jateng",
    slug: "kontingen-sma-jateng-01",
    division: "SMA Open",
    weightClass: "57.0 kg Kick Light Pelajar",
    club: "Kontingen Pelajar Jateng",
    category: "STUDENT",
    categoryLabel: "SMA OPEN",
    image: null,
    status: "MENUNGGU_TIMBANG_BADAN",
  },
];

export default function FightersPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            DATABASE ATLET RESMI • PENGPROV KBI DIY
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#F4F0E8]">
              DIREKTORI ATLET
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-sm sm:text-right">
            Daftar petarung Kejurda DIY 2026, Redy Open Championship II, dan Partai Bintang se-Indonesia.
          </p>
        </div>
      </section>

      {/* Directory Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <FighterCenterClient initialFighters={OFFICIAL_ATHLETES_POOL} />
      </section>
    </main>
  );
}

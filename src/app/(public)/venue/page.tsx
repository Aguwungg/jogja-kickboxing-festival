import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, Bus, Train, Car, Compass, ShieldCheck, HeartPulse, Accessibility, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Panduan Lokasi & Venue — JKB 2026",
  description: "Informasi lengkap denah arena, transportasi, dan fasilitas GOR Among Rogo Yogyakarta untuk Jogja Kickboxing Festival 2026.",
};

const ZONES = [
  {
    name: "ZONA 1 — RING UTAMA (CHAMPIONSHIP RING)",
    desc: "Gelanggang sentral tempat berlangsungnya 80 partai pertandingan kickboxing resmi. Dilengkapi tribun penonton 360 derajat, pencahayaan panggung arena K-1, dan layar siaran langsung LED raksasa.",
    type: "Combat Arena",
    highlight: true,
  },
  {
    name: "ZONA 2 — THE STAGE (FESTIVAL & CONCERT)",
    desc: "Panggung musik live indoor-outdoor dengan sistem tata suara kelas festival. Tempat dilangsungkannya opening ceremony, konser musik malam, dan afterparty selebrasi juara.",
    type: "Music Stage",
    highlight: false,
  },
  {
    name: "ZONA 3 — FOOD & BEVERAGE STREET PLAZA",
    desc: "Sentra kuliner dan minuman segar menampilkan 30+ tenant UMKM khas Yogyakarta. Area terbuka nyaman untuk bersantai dan mengisi tenaga di antara sesi laga.",
    type: "Food & Lifestyle",
    highlight: false,
  },
  {
    name: "ZONA 4 — OFFICIAL MERCH STORE & ACTIVATIONS",
    desc: "Booth resmi penjualan merchandise kapsul JKB 2026, arcade tantangan refleks pukulan, photobooth atlet, dan booth aktivasi sponsor.",
    type: "Merch & Sponsor",
    highlight: false,
  },
];

const TRANSPORTS = [
  {
    icon: Train,
    title: "KRL & Kereta Api Jarak Jauh",
    desc: "Turun di Stasiun Lempuyangan (berjarak ±2,5 km, 8–10 menit dengan ojek online) atau Stasiun Tugu Yogyakarta (berjarak ±4,5 km, 15 menit).",
  },
  {
    icon: Bus,
    title: "Trans Jogja",
    desc: "Gunakan Trans Jogja Jalur 1A, 2A, atau 4A dan turun di Halte Among Rogo (berada tepat di seberang gerbang utama venue).",
  },
  {
    icon: Car,
    title: "Kendaraan Pribadi & Parkir",
    desc: "Tersedia kantong parkir resmi roda dua dan roda empat di area timur dan selatan stadion. Disarankan datang lebih awal saat hari final.",
  },
  {
    icon: Navigation,
    title: "Titik Drop-Off Ojek Online",
    desc: "Pintu Masuk Barat (Jl. Kenari) ditetapkan sebagai zona drop-off resmi untuk taksi dan ojek online demi kelancaran arus lalu lintas.",
  },
];

export default function VenuePage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-16 md:py-24 bg-[#171719]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#EF3340]" />
            LOKASI RESMI KEJUARAAN & FESTIVAL
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            GOR AMONG ROGO, <span className="text-[#EF3340]">YOGYAKARTA</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed mb-6">
            Gedung Olahraga Among Rogo merupakan arena bersejarah kebanggaan warga Yogyakarta yang berdaya tampung lebih dari 5.000 penonton. Terletak strategis di pusat kota dengan akses transportasi publik yang mudah.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-white/80">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
              Jl. Kenari No. 1, Semaki, Umbulharjo, Kota Yogyakarta 55166
            </span>
            <a
              href="https://maps.google.com/?q=GOR+Among+Rogo+Yogyakarta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white px-4 py-2 rounded-sm font-bold transition-all"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pembagian Zona Venue */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PEMBAGIAN ZONA ARENA FESTIVAL
          </h2>
          <p className="text-[#99999F] text-sm font-sans max-w-xl">
            Area GOR Among Rogo dibagi menjadi 4 zona utama untuk kenyamanan mobilitas penonton, atlet, dan pengunjung festival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ZONES.map((zone, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-sm border transition-all ${
                zone.highlight
                  ? "bg-[#171719] border-[#D91F2C]/50 shadow-lg"
                  : "bg-[#171719]/60 border-white/10 hover:border-white/25"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white/10 text-white font-sans">
                  {zone.type}
                </span>
                {zone.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF3340] font-sans">
                    ★ ARENA TARUNG UTAMA
                  </span>
                )}
              </div>

              <h3
                className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {zone.name}
              </h3>

              <p className="text-sm text-[#99999F] font-sans leading-relaxed">
                {zone.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Akses Transportasi & Cara Menuju Lokasi */}
      <section className="bg-[#171719] border-y border-white/10 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PANDUAN TRANSPORTASI & KEDATANGAN
            </h2>
            <p className="text-[#99999F] text-sm font-sans">
              Beragam opsi transportasi umum dan kendaraan pribadi untuk menuju GOR Among Rogo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSPORTS.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div key={idx} className="bg-[#09090b] border border-white/10 p-6 rounded-sm">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#EF3340] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4
                    className="text-lg font-black uppercase text-white mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {t.title}
                  </h4>
                  <p className="text-xs text-[#99999F] font-sans leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fasilitas & Ketertiban Pengunjung */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-[#171719]/40 border border-white/10 p-8 sm:p-12 rounded-sm">
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-white mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            FASILITAS & KESELAMATAN PENONTON
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#99999F] font-sans">
            <div className="flex items-start gap-3">
              <HeartPulse className="w-5 h-5 text-[#EF3340] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs">Posko Medis Siaga</h4>
                <p className="text-xs leading-relaxed">
                  Tim dokter olahraga dan paramedis bersertifikasi serta 2 unit ambulans siaga di pintu darurat barat selama kejuaraan berlangsung.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Accessibility className="w-5 h-5 text-[#E2BA75] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs">Akses Disabilitas & Kursi Roda</h4>
                <p className="text-xs leading-relaxed">
                  Jalur ramp khusus penonton berkebutuhan khusus tersedia di Pintu Masuk Selatan menuju area tribun khusus ramah kursi roda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs">Keamanan & Penitipan Barang</h4>
                <p className="text-xs leading-relaxed">
                  Pemeriksaan tas di seluruh gerbang masuk. Senjata tajam, kembang api, botol kaca, dan minuman keras dilarang keras memasuki arena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

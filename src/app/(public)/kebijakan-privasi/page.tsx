import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi & Perlindungan Data | JKBF 2026",
  description:
    "Kebijakan privasi resmi platform informasi Jogja Kickboxing Festival 2026 sesuai Undang-Undang Perlindungan Data Pribadi (UU No. 27 Tahun 2022).",
};

const PRIVACY_ARTICLES = [
  {
    number: "01",
    title: "LANDASAN HUKUM & PENGELOLA PLATFORM",
    items: [
      "Kebijakan Privasi ini disusun mengacu pada Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).",
      "Panitia Pelaksana Jogja Kickboxing Festival 2026 (Pengprov KBI DIY & Noise Comm Indonesia) mengelola situs informasi resmi ini sebagai pusat pengumuman, informasi kejuaraan, dan tautan pendaftaran peserta.",
    ],
  },
  {
    number: "02",
    title: "PENGUMPULAN DATA & FORMULIR EKSTERNAL",
    items: [
      "Situs web publik JKBF 2026 tidak mewajibkan pembuatan akun pengguna untuk membaca informasi kejuaraan, lokasi, maupun pengumuman resmi.",
      "Pendaftaran fighter dan partisipasi JKBF Content Challenge diarahkan melalui formulir resmi Google Forms yang disediakan panitia sesuai kebutuhan verifikasi peserta.",
      "Koordinasi langsung terkait administrasi pendaftaran atau kemitraan dilakukan melalui saluran WhatsApp resmi narahubung panitia yang tercantum di halaman Kontak.",
    ],
  },
  {
    number: "03",
    title: "KEAMANAN, TRANSPARANSI & HAK SUBJEK DATA",
    items: [
      "Seluruh akses menuju situs resmi dilindungi enkripsi transmisi standar industri (HTTPS/TLS) dan tidak memperjualbelikan data pengunjung kepada pihak ketiga.",
      "Untuk permintaan koreksi, klarifikasi, atau penghapusan informasi peserta yang dikirim melalui formulir resmi panitia, silakan hubungi admin resmi melalui halaman Kontak.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-28 lg:pt-36 pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em]">
            INFORMASI HUKUM • PERLINDUNGAN DATA PENGGUNA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              KEBIJAKAN
              <br />
              <span className="text-[#D91F2C]">PRIVASI.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Tata kelola privasi digital dan keterbukaan pengelolaan informasi platform resmi Jogja Kickboxing Festival 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full flex-1">
        <div className="border-t border-white/10 divide-y divide-white/10">
          {PRIVACY_ARTICLES.map((article) => (
            <div
              key={article.number}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-1">
                <span className="text-[#D91F2C] font-technical text-2xl font-bold">
                  {article.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white leading-snug">
                  {article.title}
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                {article.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#D91F2C] font-bold shrink-0 mt-1.5">•</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Footnote */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 w-full border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-technical text-white/50 uppercase tracking-wider">
          <p>STANDAR KEPATUHAN: UU PDP NO. 27/2022 • 19–20 DESEMBER 2026 • GOR PANCASILA UGM</p>
          <Link
            href="/kontak"
            className="text-[#D91F2C] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>HUBUNGI PANITIA RESMI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

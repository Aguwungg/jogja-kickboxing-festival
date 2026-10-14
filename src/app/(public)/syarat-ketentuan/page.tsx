export const metadata = {
  title: "Syarat & Ketentuan Resmi | JKBF 2026",
  description: "Peraturan resmi kehadiran penonton di venue GOR UNY, ketentuan tiket, dan tata tertib Jogja Kickboxing Festival 2026.",
};

const ARTICLES = [
  {
    number: "01",
    title: "KETENTUAN TIKET & PENUKARAN WRISTBAND",
    items: [
      "Tiket resmi hanya diterbitkan melalui loket digital resmi mitra RAWOOH atau ticket box resmi di lokasi acara GOR UNY. Panitia tidak bertanggung jawab atas kerugian tiket dari pihak ketiga atau calo tidak resmi.",
      "Tiket yang telah dibeli bersifat final dan tidak dapat diuangkan kembali (non-refundable), kecuali terjadi pembatalan total penyelenggaraan oleh komite panitia.",
      "Setiap tiket memiliki kode unik yang hanya dapat dipindai satu kali untuk penukaran gelang tanda masuk fisik di lobi barat GOR UNY. Gelang yang rusak atau lepas tidak berlaku untuk akses kembali ke arena.",
    ],
  },
  {
    number: "02",
    title: "TATA TERTIB ARENA & PEMERIKSAAN KEAMANAN",
    items: [
      "Demi keselamatan seluruh penonton, ofisial, dan atlet di atas ring, petugas keamanan berhak melakukan pemeriksaan fisik (body search) dan tas bawaan di seluruh pintu masuk (Gate).",
      "Dilarang keras membawa senjata tajam, senjata api, flare, kembang api, laser pointer, atau proyektil dalam bentuk apa pun.",
      "Dilarang membawa minuman keras beralkohol, zat psikotropika, dan obat-obatan terlarang ke dalam area venue.",
      "Dilarang membawa botol kaca, kaleng, megafon, atau benda tumpul keras yang berpotensi membahayakan penonton lain.",
    ],
  },
  {
    number: "03",
    title: "HAK CIPTA DOKUMENTASI & MEDIA PELIPUTAN",
    items: [
      "Pengunjung diizinkan mengambil foto dan video ponsel pintar non-komersial untuk dokumentasi pribadi media sosial.",
      "Penggunaan kamera profesional DSLR/Mirrorless dengan lensa tele atau perlengkapan siaran wajib memiliki izin Akreditasi Pers resmi dari Creator Hub JKBF 2026.",
      "Panitia dan mitra penyiaran berhak mendokumentasikan wajah pengunjung di dalam area venue untuk materi siaran televisi, dokumentasi, dan promosi festival resmi.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER (Matches 18_syarat.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          INFORMASI HUKUM • REGULASI RESMI
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          SYARAT &<br />
          KETENTUAN.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-4">
          Dokumen yang jelas dan mudah dibaca. Mengatur tata tertib penonton, tiket, dan keamanan venue GOR UNY Yogyakarta.
        </p>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ARTICLES IN SPACIOUS EDITORIAL ROWS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        <div className="border-t border-black/10 divide-y divide-black/10">
          {ARTICLES.map((article) => (
            <div
              key={article.number}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            >
              <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">
                {article.number}
              </span>
              <h3
                className="text-2xl font-black uppercase text-[#0B0B0B] md:col-span-4"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {article.title}
              </h3>
              <div className="md:col-span-7 space-y-3 text-sm text-[#5A5957] leading-relaxed">
                {article.items.map((item, idx) => (
                  <p key={idx}>• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-28 lg:pt-36 pb-32">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER — V10 BROADSHEET HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em]">
            INFORMASI HUKUM • REGULASI RESMI PENONTON
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              SYARAT &<br />
              <span className="text-[#D91F2C]">KETENTUAN.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Peraturan resmi yang mengikat bagi seluruh pengunjung, pemegang tiket, dan delegasi festival di kawasan arena GOR UNY Yogyakarta.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ARTICLES IN SPACIOUS EDITORIAL ROWS
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full flex-1">
        <div className="border-t border-white/10 divide-y divide-white/10">
          {ARTICLES.map((article) => (
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
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white leading-snug">
                  {article.title}
                </h3>
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

      {/* ═════════════════════════════════════════════════════════════════════
          3. COMPLIANCE FOOTNOTE
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 w-full border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-technical text-white/40 uppercase tracking-wider">
          <p>DIPERBARUI RESMI: OKTOBER 2026 • PANITIA PELAKSANA JKBF</p>
          <p>#JOGJAPUNYANYALI • GOR UNY YOGYAKARTA</p>
        </div>
      </section>

    </main>
  );
}

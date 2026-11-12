export const metadata = {
  title: "Syarat & Ketentuan Resmi | JKBF 2026",
  description:
    "Peraturan resmi kehadiran, tata tertib arena, dan ketentuan umum penyelenggaraan Jogja Kickboxing Festival 2026 di GOR Pancasila UGM, Yogyakarta.",
};

const ARTICLES = [
  {
    number: "01",
    title: "KETENTUAN PENYELENGGARAAN & INFORMASI RESMI",
    items: [
      "Jogja Kickboxing Festival (JKBF) 2026 diselenggarakan pada tanggal 19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta.",
      "Seluruh informasi resmi mengenai pendaftaran fighter, regulasi kompetisi WAKO, program pendukung, dan pengumuman terkini hanya disebarkan melalui situs resmi ini serta akun Instagram dan TikTok resmi @jogjakickboxingfestival.",
      "Panitia berhak melakukan penyesuaian jadwal atau ketentuan teknis demi keselamatan atlet, ofisial, dan ketertiban pelaksanaan kejuaraan.",
    ],
  },
  {
    number: "02",
    title: "TATA TERTIB ARENA & KEAMANAN DI GOR PANCASILA UGM",
    items: [
      "Demi keselamatan seluruh pengunjung, ofisial, dan atlet di atas ring maupun tatami, petugas keamanan berhak melakukan pemeriksaan barang bawaan di area masuk.",
      "Dilarang keras membawa senjata tajam, senjata api, flare, kembang api, laser pointer, atau benda berbahaya dalam bentuk apa pun ke dalam kawasan arena.",
      "Dilarang membawa minuman keras beralkohol, zat psikotropika, obat-obatan terlarang, botol kaca, maupun benda keras yang berpotensi mengganggu jalannya pertandingan.",
    ],
  },
  {
    number: "03",
    title: "ATURAN ATLET, OFISIAL & DOKUMENTASI",
    items: [
      "Seluruh kontingen, pelatih, dan peserta kejuaraan wajib mematuhi ketentuan Technical Handbook serta keputusan Dewan Wasit dan Juri bersertifikasi WAKO / KBI.",
      "Pengunjung diperbolehkan mengambil foto maupun video non-komersial menggunakan ponsel selama tidak mengganggu area kerja ofisial dan sudut ring.",
      "Peliputan media profesional atau komersial di kawasan arena wajib berkoordinasi dan mendapatkan persetujuan panitia pelaksana JKBF 2026.",
    ],
  },
];

export default function SyaratKetentuanPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-28 lg:pt-36 pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em]">
            INFORMASI HUKUM • REGULASI RESMI ARENA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              SYARAT &amp;
              <br />
              <span className="text-[#D91F2C]">KETENTUAN.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Peraturan resmi yang berlaku bagi seluruh peserta, delegasi kontingen, dan pengunjung di kawasan GOR Pancasila UGM, Yogyakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
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

      {/* Footnote */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 w-full border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-technical text-white/40 uppercase tracking-wider">
          <p>JKBF 2026 • 19–20 DESEMBER 2026 • GOR PANCASILA UGM</p>
          <p>#JOGJAPUNYANYALI • YOGYAKARTA</p>
        </div>
      </section>
    </main>
  );
}

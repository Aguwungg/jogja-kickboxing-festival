export const metadata = {
  title: "Kebijakan Privasi & Perlindungan Data | JKBF 2026",
  description: "Kebijakan privasi resmi dan perlindungan data pribadi platform digital Jogja Kickboxing Festival 2026 sesuai UU No. 27 Tahun 2022.",
};

const PRIVACY_ARTICLES = [
  {
    number: "01",
    title: "LANDASAN HUKUM & PENGENDALI DATA",
    items: [
      "Kebijakan Privasi ini disusun berdasarkan ketentuan Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).",
      "Panitia Pelaksana Jogja Kickboxing Festival & Redy Championship 2 bertindak sebagai Pengendali Data Pribadi atas setiap informasi yang Anda berikan melalui situs web resmi ini.",
    ],
  },
  {
    number: "02",
    title: "DATA PRIBADI YANG DIKUMPULKAN",
    items: [
      "Pendaftaran Akun & Autentikasi: Nama lengkap, alamat email, dan kata sandi terenkripsi.",
      "Partisipasi Voting City Pride: Identitas akun guna menjamin integritas asas satu pemilih satu suara (one-account-one-vote).",
      "Transaksi Merchandise: Nama pemesan, nomor WhatsApp, email, dan alamat tujuan pengiriman ekspedisi.",
      "Formulir Kontak & Kemitraan: Nama, nomor telepon, email, serta rincian pesan inquiry sponsorship/media.",
    ],
  },
  {
    number: "03",
    title: "KEAMANAN DAN HAK SUBJEK DATA",
    items: [
      "Kami menerapkan enkripsi standar industri (TLS/HTTPS) dan kontrol akses berbasis peran (RBAC) untuk melindungi seluruh data dari akses tidak sah.",
      "Data pengunjung tidak akan diperjualbelikan kepada pihak ketiga mana pun untuk kepentingan komersial pihak luar.",
      "Anda berhak meminta peninjauan, koreksi, atau penghapusan data pribadi Anda dengan menghubungi panitia melalui info@jogjakickboxing.id.",
    ],
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-28 lg:pt-36 pb-32">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER — V10 BROADSHEET HERO
      ═════════════════════════════════════════════ */}
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
              KEBIJAKAN<br />
              <span className="text-[#D91F2C]">PRIVASI.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Tata kelola privasi digital, kepatuhan Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP), dan jaminan kerahasiaan pengunjung.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ARTICLES IN SPACIOUS EDITORIAL ROWS
      ═════════════════════════════════════════════ */}
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
          <p>STANDAR KEPATUHAN: UU PDP NO. 27/2022 • ENKRIPSI TLS/HTTPS STANDAR INDUSTRI</p>
          <p>info@jogjakickboxing.id</p>
        </div>
      </section>

    </main>
  );
}

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER (Matches 19_privasi.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          INFORMASI HUKUM • PERLINDUNGAN DATA
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          KEBIJAKAN<br />
          PRIVASI.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-4">
          Transparansi pengumpulan data, tata kelola informasi pengguna, dan kepatuhan terhadap UU No. 27 Tahun 2022 PDP.
        </p>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ARTICLES IN SPACIOUS EDITORIAL ROWS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        <div className="border-t border-black/10 divide-y divide-black/10">
          {PRIVACY_ARTICLES.map((article) => (
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

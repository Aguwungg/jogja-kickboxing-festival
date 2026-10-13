import { Shield, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi & Perlindungan Data | JKBF 2026",
  description: "Kebijakan privasi resmi dan perlindungan data pribadi platform digital Jogja Kickboxing Festival 2026 sesuai UU No. 27 Tahun 2022.",
};

export default function KebijakanPrivasiPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            KEPATUHAN HUKUM & PELINDUNGAN DATA
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            KEBIJAKAN PRIVASI
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            KOMITMEN PELINDUNGAN DATA PENGUNJUNG DAN PENGGUNA PLATFORM
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Komitmen resmi Panitia Pelaksana Jogja Kickboxing Festival & Redy Championship 2 dalam mengumpulkan, mengelola, dan melindungi data pribadi sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full font-sans text-xs sm:text-sm text-[#8F8E8B] leading-relaxed space-y-8 flex-1">
        
        {/* Landasan Hukum */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-3">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 01
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            LANDASAN HUKUM & PENGENDALI DATA
          </h2>
          <p>
            Kebijakan Privasi ini disusun berdasarkan ketentuan Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Panitia Pelaksana Jogja Kickboxing Festival & Redy Championship 2 bertindak sebagai Pengendali Data Pribadi atas setiap informasi yang Anda berikan melalui situs web resmi ini.
          </p>
        </div>

        {/* Data yang Dikumpulkan */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 02
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            DATA PRIBADI YANG DIKUMPULKAN
          </h2>
          <p>Kami mengumpulkan data pribadi melalui aktivitas berikut:</p>
          <ul className="space-y-2 list-disc pl-5 marker:text-[#D91F2C]">
            <li><strong>Pendaftaran Akun & Autentikasi:</strong> Nama lengkap, alamat email, kata sandi terenkripsi, dan peran akun resmi.</li>
            <li><strong>Partisipasi Voting City Pride:</strong> Identitas akun guna menjamin integritas asas satu pemilih satu suara (one-account-one-vote).</li>
            <li><strong>Transaksi Merchandise:</strong> Nama pemesan, nomor WhatsApp, email, dan alamat pengiriman ekspedisi.</li>
            <li><strong>Formulir Kontak & Kemitraan:</strong> Nama, nomor telepon, email, serta rincian pesan inquiry sponsor/media.</li>
          </ul>
        </div>

        {/* Keamanan & Hak Pemilik Data */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 03
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            KEAMANAN DAN HAK SUBJEK DATA
          </h2>
          <p>
            Kami menerapkan enkripsi standar industri (TLS/HTTPS) dan kontrol akses berbasis peran (RBAC) untuk melindungi seluruh data dari akses tidak sah. Data tidak akan diperjualbelikan kepada pihak ketiga untuk kepentingan periklanan pihak luar.
          </p>
          <p>
            Anda memiliki hak untuk meminta peninjauan, koreksi, atau penghapusan data pribadi Anda dengan menghubungi sekretariat resmi melalui email: <strong>info@jogjakickboxing.com</strong>.
          </p>
        </div>

      </section>

    </main>
  );
}

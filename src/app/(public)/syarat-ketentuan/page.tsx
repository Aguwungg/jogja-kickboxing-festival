import { Scale, AlertTriangle, Ticket, FileText } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan Resmi | JKBF 2026",
  description: "Peraturan resmi kehadiran penonton di venue GOR UNY, ketentuan tiket, dan tata tertib Jogja Kickboxing Festival 2026.",
};

export default function SyaratKetentuanPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            REGULASI RESMI PENYELENGGARAAN
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            SYARAT & KETENTUAN
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            TATA TERTIB PENONTON, TIKET, DAN KEAMANAN VENUE GOR UNY
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Peraturan resmi yang mengikat setiap pemegang tiket, pengunjung festival di GOR UNY Yogyakarta, pembeli merchandise resmi, dan partisipan digital Jogja Kickboxing Festival & Redy Championship 2.
          </p>
        </div>
      </section>

      {/* Legal Articles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full font-sans text-xs sm:text-sm text-[#8F8E8B] leading-relaxed space-y-8 flex-1">
        
        {/* Pasal 1 */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 01
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            KETENTUAN TIKET & PENUKARAN WRISTBAND
          </h2>
          <ul className="space-y-2 list-disc pl-5 marker:text-[#D91F2C]">
            <li>Tiket resmi hanya diterbitkan melalui loket digital resmi mitra RAWOOH atau ticket box resmi di lokasi acara GOR UNY. Panitia tidak bertanggung jawab atas kerugian tiket dari pihak ketiga atau calo tidak resmi.</li>
            <li>Tiket yang telah dibeli bersifat final dan tidak dapat diuangkan kembali (non-refundable), kecuali terjadi pembatalan total penyelenggaraan oleh komite panitia.</li>
            <li>Setiap tiket memiliki kode unik yang hanya dapat dipindai satu kali untuk penukaran gelang tanda masuk fisik di lobi barat GOR UNY. Gelang yang rusak atau lepas tidak berlaku untuk akses kembali ke arena.</li>
          </ul>
        </div>

        {/* Pasal 2 */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 02
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            TATA TERTIB ARENA & PEMERIKSAAN KEAMANAN
          </h2>
          <p>
            Demi keselamatan seluruh penonton, ofisial, dan atlet di atas ring, petugas keamanan berhak melakukan pemeriksaan fisik (body search) dan tas bawaan di seluruh pintu masuk (Gate).
          </p>
          <ul className="space-y-2 list-disc pl-5 marker:text-[#D91F2C]">
            <li>Dilarang keras membawa senjata tajam, senjata api, flare, kembang api, laser pointer, atau proyektil dalam bentuk apa pun.</li>
            <li>Dilarang membawa minuman keras beralkohol, zat psikotropika, dan obat-obatan terlarang ke dalam area venue.</li>
            <li>Dilarang membawa botol kaca, kaleng, megafon, atau benda tumpul keras yang berpotensi membahayakan.</li>
            <li>Pelanggar akan diamankan oleh aparat kepolisian dan dikeluarkan secara permanen dari arena tanpa pengembalian uang tiket.</li>
          </ul>
        </div>

        {/* Pasal 3 */}
        <div className="bg-[#141416] border border-white/10 p-8 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            PASAL 03
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            HAK CIPTA DOKUMENTASI & MEDIA PELIPUTAN
          </h2>
          <ul className="space-y-2 list-disc pl-5 marker:text-[#D91F2C]">
            <li>Pengunjung diizinkan mengambil foto dan video ponsel pintar non-komersial untuk dokumentasi pribadi media sosial.</li>
            <li>Penggunaan kamera profesional DSLR/Mirrorless dengan lensa tele atau perlengkapan siaran wajib memiliki izin Akreditasi Pers resmi dari Creator Hub JKBF 2026.</li>
            <li>Panitia dan mitra penyiaran berhak mendokumentasikan wajah pengunjung di dalam area venue untuk materi siaran televisi, dokumentasi, dan promosi festival resmi.</li>
          </ul>
        </div>

      </section>

    </main>
  );
}

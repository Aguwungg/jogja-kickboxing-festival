import { Scale, AlertTriangle, ShieldCheck, Ticket, Video, FileText } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan — JKB 2026",
  description: "Peraturan resmi kehadiran penonton di venue GOR Among Rogo, ketentuan pembelian tiket, siaran PPV, dan kode etik festival JKB 2026.",
};

export default function SyaratKetentuanPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Scale className="w-3.5 h-3.5 text-[#EF3340]" />
            KETENTUAN RESMI PENYELENGGARAAN
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            SYARAT & <span className="text-[#EF3340]">KETENTUAN</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Peraturan resmi dan tata tertib yang mengikat setiap pemegang tiket, pengunjung gelanggang GOR Among Rogo, pengguna platform digital, dan pembeli siaran berbayar JKB 2026.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full font-sans text-sm text-[#99999F] leading-relaxed space-y-8">
        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-3">
          <div className="flex items-center gap-3 text-white font-bold">
            <Ticket className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">1. Ketentuan Tiket & Akses Gelanggang</h2>
          </div>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Tiket resmi hanya diterbitkan melalui loket digital resmi Rawooh atau ticket box resmi di lokasi acara. Panitia tidak bertanggung jawab atas tiket yang diperoleh dari calo atau pihak ketiga tidak resmi.</li>
            <li>Tiket yang telah dibeli bersifat final dan tidak dapat dikembalikan (non-refundable) kecuali terjadi pembatalan total penyelenggaraan acara oleh pihak penyelenggara.</li>
            <li>Setiap tiket memiliki barcode unik yang hanya dapat dipindai satu kali pada saat penukaran wristband gelang tanda masuk. Gelang yang rusak atau dilepas tidak berlaku untuk masuk kembali.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-3">
          <div className="flex items-center gap-3 text-white font-bold">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg uppercase">2. Tata Tertib Arena & Barang Terlarang</h2>
          </div>
          <p>
            Demi keselamatan seluruh penonton, petarung, dan pengisi acara, petugas keamanan berhak melakukan pemeriksaan fisik (body search) dan pemeriksaan tas di seluruh gerbang masuk.
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Dilarang keras membawa senjata tajam, senjata api, bahan peledak, kembang api, flare, atau proyektil dalam bentuk apa pun.</li>
            <li>Dilarang membawa minuman beralkohol, zat psikotropika, dan obat-obatan terlarang.</li>
            <li>Dilarang membawa botol kaca, kaleng, laser pointer, megaphone, atau benda keras berpotensi membahayakan.</li>
            <li>Pelanggar akan diamankan oleh pihak kepolisian dan dikeluarkan secara permanen dari arena tanpa pengembalian uang tiket.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-3">
          <div className="flex items-center gap-3 text-white font-bold">
            <Video className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">3. Hak Cipta, Penyiaran & Dokumentasi</h2>
          </div>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Dengan memasuki arena festival, pengunjung memberikan izin tanpa syarat kepada panitia pelaksana untuk merekam, memotret, dan menyiarkan audio-visual pengunjung dalam materi siaran langsung, promosi, dan dokumentasi resmi JKB 2026.</li>
            <li>Dilarang melakukan siaran langsung komersial (live streaming ilegal) dari dalam arena pertandingan tanpa izin tertulis resmi dari panitia pelaksana.</li>
            <li>Peralatan kamera profesional (lensa telephoto panjang, tripod, rig video) memerlukan akreditasi kartu pers resmi media dari panitia.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-3">
          <div className="flex items-center gap-3 text-white font-bold">
            <ShieldCheck className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">4. Ketentuan Siaran Berbayar (Pay-Per-View / PPV)</h2>
          </div>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Akses PPV BigMo bersifat personal dan hanya dapat digunakan pada satu perangkat aktif dalam satu waktu (single-device concurrent streaming).</li>
            <li>Dilarang melakukan re-streaming, redistribusi publik, atau penayangan umum tanpa lisensi komersial dari panitia. Pelanggaran hak siar digital akan ditindaklanjuti secara hukum.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-3">
          <h2 className="text-lg uppercase text-white font-bold">5. Pembatasan Tanggung Jawab & Force Majeure</h2>
          <p>
            Panitia Pelaksana tidak bertanggung jawab atas kerugian atau penundaan yang diakibatkan oleh keadaan memaksa (Force Majeure) di luar kendali wajar panitia, termasuk namun tidak terbatas pada bencana alam, kebakaran, kerusuhan massal, putusan darurat otoritas pemerintah, atau gangguan jaringan listrik/telekomunikasi skala luas.
          </p>
        </div>

        <p className="text-xs text-white/50 text-center pt-4">
          Terakhir diperbarui: 11 Oktober 2026 • Dokumen Resmi Panitia Pelaksana JKB 2026
        </p>
      </section>
    </div>
  );
}

import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi — JKB 2026",
  description: "Kebijakan privasi resmi dan perlindungan data pribadi platform Jogja Kickboxing Festival 2026 sesuai UU No. 27 Tahun 2022.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Lock className="w-3.5 h-3.5 text-[#EF3340]" />
            DOKUMEN HUKUM RESMI
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            KEBIJAKAN <span className="text-[#EF3340]">PRIVASI</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Komitmen resmi Panitia Pelaksana JKB 2026 dalam melindungi dan menghormati data pribadi pengunjung, pemilih, atlet, dan pembeli tiket digital.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full font-sans text-sm text-[#99999F] leading-relaxed space-y-8">
        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm">
          <div className="flex items-center gap-3 text-white font-bold mb-3">
            <Shield className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">1. Landasan Hukum & Kepatuhan</h2>
          </div>
          <p>
            Kebijakan Privasi ini disusun berdasarkan ketentuan Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP). Panitia Pelaksana Jogja Kickboxing Festival & Redy Championship 2 ("JKB 2026", "kami") bertindak sebagai Pengendali Data Pribadi atas setiap informasi yang Anda berikan melalui situs web resmi ini.
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center gap-3 text-white font-bold">
            <FileText className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">2. Data Pribadi yang Kami Kumpulkan</h2>
          </div>
          <p>Kami dapat mengumpulkan data pribadi Anda melalui aktivitas berikut:</p>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li><strong className="text-white">Pendaftaran Akun & Autentikasi:</strong> Nama lengkap, alamat email, kata sandi terenkripsi, dan peran akun (penonton, kreator, admin).</li>
            <li><strong className="text-white">Partisipasi Voting City Pride:</strong> Identitas pemilih terverifikasi guna menjamin integritas asas satu pemilih satu suara (one-vote-per-user).</li>
            <li><strong className="text-white">Transaksi Merchandise & Tiket:</strong> Nama penerima, alamat pengiriman, nomor telepon, dan status pembayaran (data kartu/finansial diproses langsung oleh payment gateway terlisensi).</li>
            <li><strong className="text-white">Formulir Kontak & Permintaan:</strong> Nama, nomor WhatsApp, email, dan rincian pesan inquiry.</li>
            <li><strong className="text-white">Data Teknis Otomatis:</strong> Alamat IP tersanitasi, log peramban, dan cookie teknis untuk keamanan sesi dan pencegahan serangan siber.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center gap-3 text-white font-bold">
            <CheckCircle2 className="w-5 h-5 text-[#EF3340]" />
            <h2 className="text-lg uppercase">3. Tujuan Penggunaan Data Pribadi</h2>
          </div>
          <p>Data pribadi Anda digunakan semata-mata untuk kepentingan operasional resmi festival:</p>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Menjamin keabsahan partisipasi voting publik City Pride dan mencegah manipulasi suara oleh bot.</li>
            <li>Memproses verifikasi hak akses penayangan siaran berbayar Pay-Per-View (PPV BigMo).</li>
            <li>Mengirimkan konfirmasi pesanan merchandise resmi dan pembaruan pengiriman logistik.</li>
            <li>Menanggapi pertanyaan, proposal kemitraan, dan permohonan akreditasi media.</li>
            <li>Mencegah aktivitas penipuan, pelanggaran keamanan, dan penyalahgunaan infrastruktur platform.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
          <h2 className="text-lg uppercase text-white font-bold">4. Pembagian Data kepada Pihak Ketiga</h2>
          <p>
            Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak mana pun. Data hanya dibagikan kepada mitra penyedia layanan resmi yang terikat perjanjian kerahasiaan ketat, antara lain:
          </p>
          <ul className="space-y-2 pl-4 list-disc marker:text-[#EF3340]">
            <li>Gerbang pembayaran resmi (payment gateway) untuk memproses transaksi finansial aman.</li>
            <li>Penyedia platform tiket resmi (Rawooh) untuk penerbitan dan pemindaian barcode tiket di arena.</li>
            <li>Pihak berwajib apabila diwajibkan secara tegas oleh penetapan hukum pengadilan Republik Indonesia.</li>
          </ul>
        </div>

        <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4">
          <h2 className="text-lg uppercase text-white font-bold">5. Hak Pemilik Data Pribadi</h2>
          <p>
            Berdasarkan UU PDP, Anda berhak untuk meminta akses, perbaikan, pembaharuan, atau penghapusan data pribadi Anda yang tersimpan di server kami. Permintaan dapat diajukan secara tertulis melalui surat elektronik ke <span className="text-white font-mono font-bold">halo@jkbchampionship.id</span> dengan subjek "Permohonan Hak Subjek Data".
          </p>
        </div>

        <p className="text-xs text-white/50 text-center pt-4">
          Terakhir diperbarui: 11 Oktober 2026 • Versi 1.0 Dokumen Resmi Panitia JKB 2026
        </p>
      </section>
    </div>
  );
}

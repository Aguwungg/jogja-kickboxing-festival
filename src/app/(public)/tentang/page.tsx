import Link from "next/link";
import Image from "next/image";
import {
  Download,
  ShieldCheck,
  Award,
  Scale,
  Calendar,
  CreditCard,
  AlertCircle,
  Clock,
  Phone,
  FileText,
  MapPin,
  ArrowUpRight,
  UserCheck,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Pusat Informasi & Technical Handbook | JKBF 2026",
  description:
    "Pusat informasi resmi, regulasi WAKO, ketentuan kompetisi, kategori usia & berat badan, biaya pendaftaran, serta unduh Technical Handbook (THB) JKBF 2026.",
};

export default function TentangPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-28 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER & THB DOWNLOAD HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            PUSAT INFORMASI RESMI & DOKUMEN TEKNIS • PENGPROV KBI DIY
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-[#F4F0E8]">
              TENTANG JKBF & PANDUAN TEKNIS
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#8F8E8B] leading-relaxed max-w-2xl">
              Panduan menyeluruh penyelenggaraan Jogja Kickboxing Festival 2026: regulasi WAKO, kategori kelas, jadwal resmi, ketentuan administrasi peserta, dan legalitas Pengprov Kickboxing Indonesia DIY.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/docs/THB_JKBF_2026.pdf"
              download="THB_JKBF_2026.pdf"
              className="px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
            >
              <Download className="w-4 h-4" />
              <span>UNDUH THB LENGKAP (PDF)</span>
            </a>
            <Link
              href="/kontak"
              className="px-6 py-3.5 bg-[#141416] hover:bg-white/10 border border-white/15 text-[#F4F0E8] font-display text-base tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>KONTAK PANITIA</span>
            </Link>
          </div>
        </div>

        {/* Quick Anchor Navigation Strip */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar font-technical text-xs">
          <span className="text-[#77716D] uppercase tracking-wider pr-2">MENUJU SEKSI:</span>
          {[
            { label: "PROFIL & LEGALITAS", href: "#profil" },
            { label: "RANGKAIAN KOMPETISI", href: "#kompetisi" },
            { label: "BIAYA & REKENING", href: "#biaya" },
            { label: "REGULASI WAKO", href: "#regulasi" },
            { label: "TATA TERTIB & UPP", href: "#tata-tertib" },
            { label: "TIMBANG BADAN", href: "#weighin" },
            { label: "SEKRETARIAT", href: "#kontak" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 bg-[#141416] hover:bg-[#D91F2C] text-[#8F8E8B] hover:text-white border border-white/10 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          2. DETAILED INFORMATION SECTIONS
      ═════════════════════════════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 space-y-16">
        
        {/* SEKSI 1: PROFIL & PENYELENGGARA */}
        <section id="profil" className="space-y-6 pt-4 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              01 / LATAR BELAKANG & LEGALITAS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              PROFIL PENYELENGGARA & TUJUAN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-[#8F8E8B] font-sans leading-relaxed">
            <div className="lg:col-span-8 space-y-4">
              <p>
                <strong>Jogja Kickboxing Festival (JKBF) 2026</strong> adalah kejuaraan olahraga beladiri kickboxing resmi yang diselenggarakan oleh <strong>Pengurus Provinsi Kickboxing Indonesia Daerah Istimewa Yogyakarta (Pengprov KBI DIY)</strong> bekerja sama dengan <strong>Noise Comm Indonesia</strong>, serta didukung penuh oleh <strong>KONI DIY</strong> dan <strong>Pemerintah Daerah DIY</strong>.
              </p>
              <p>
                Event ini dirancang sebagai wadah pembinaan prestasi olahraga kickboxing berjenjang, seleksi atlet daerah menuju ajang nasional (Kejurda DIY 2026), kejuaraan antarklub/camp terbuka (Redy Open Championship II), serta laga pamer kemahiran atlet nasional dan influencer (Partai Bintang). Seluruh pertandingan dijalankan di bawah standar aturan resmi <strong>WAKO (World Association of Kickboxing Organizations)</strong>.
              </p>
              <div className="p-4 bg-[#141416] border-l-2 border-[#D91F2C] border-y border-r border-white/10 space-y-1 text-xs">
                <span className="font-technical text-[#F4F0E8] font-bold uppercase block">
                  DEWAN PENGURUS & PANITIA RESMI
                </span>
                <p>• Ketua Umum Pengprov KBI DIY: <strong>Redy Apriyanta</strong></p>
                <p>• Ketua Panitia Pelaksana: <strong>Guguh Felani Ardie</strong></p>
                <p>• Sekretaris Panitia: <strong>RR. Fransisca Kusumoningrum S.Par</strong></p>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 bg-[#141416] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#D91F2C]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-display text-lg uppercase tracking-wider text-white">
                  LEGALITAS TERVERIFIKASI
                </h3>
              </div>
              <ul className="space-y-2 text-xs font-sans text-[#8F8E8B]">
                <li>✓ Surat Keputusan Pengprov KBI DIY No. 04/SK-KBI/X/2026</li>
                <li>✓ Rekomendasi KONI Daerah Istimewa Yogyakarta</li>
                <li>✓ Izin Penyelenggaraan Venue GOR UNY Yogyakarta</li>
                <li>✓ Dewan Wasit & Juri Bersertifikasi WAKO / KBI</li>
              </ul>
            </div>
          </div>
        </section>


        {/* SEKSI 2: RANGKAIAN KOMPETISI */}
        <section id="kompetisi" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              02 / SISTEM KEJUARAAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              TIGA RANGKAIAN KOMPETISI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase">
                KOMPETISI 01
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                KEJURDA DIY 2026
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Kejuaraan Daerah antar Pengurus Cabang Kabupaten/Kota se-DIY (Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul). Merupakan jalur pembinaan atlet resmi menuju Kejuaraan Nasional.
              </p>
              <div className="pt-2 font-technical text-[11px] text-[#77716D]">
                Format: Gugur Murni • Atlet Domisili DIY
              </div>
            </div>

            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase">
                KOMPETISI 02
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                REDY OPEN II
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Kejuaraan terbuka untuk sasana/camp se-Indonesia, nomor khusus pelajar (SMA Open), dan nomor mahasiswa (University Open). Menjaring bakat muda potensial nasional.
              </p>
              <div className="pt-2 font-technical text-[11px] text-[#77716D]">
                Kategori: Camp, Pelajar SMA, Mahasiswa
              </div>
            </div>

            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase">
                KOMPETISI 03
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                PARTAI BINTANG
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Partai Bintang & Mega Bintang (Invitation Only) yang mempertemukan petarung profesional nasional, atlet elit KBI, dan pegiat beladiri publik figur pada Minggu malam.
              </p>
              <div className="pt-2 font-technical text-[11px] text-[#77716D]">
                Akses: Undangan Khusus • Main Ring GOR UNY
              </div>
            </div>
          </div>
        </section>


        {/* SEKSI 3: BIAYA PENDAFTARAN & REKENING RESMI */}
        <section id="biaya" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              03 / KETENTUAN KEUANGAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              BIAYA REGISTRASI & REKENING RESMI
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="border border-white/10 bg-[#141416] divide-y divide-white/5 text-xs font-sans">
                <div className="p-4 grid grid-cols-2 bg-white/5 font-technical uppercase font-bold text-white">
                  <span>Nomor / Kategori Perlombaan</span>
                  <span className="text-right">Biaya Registrasi</span>
                </div>
                <div className="p-4 grid grid-cols-2 text-[#8F8E8B]">
                  <span>1. Kejurda Kickboxing DIY 2026</span>
                  <span className="text-right font-technical font-bold text-white">Rp 250.000 / nomor</span>
                </div>
                <div className="p-4 grid grid-cols-2 text-[#8F8E8B]">
                  <span>2. Redy Open II — Camp Open (Children – Senior)</span>
                  <span className="text-right font-technical font-bold text-white">Rp 350.000 / nomor</span>
                </div>
                <div className="p-4 grid grid-cols-2 text-[#8F8E8B]">
                  <span>3. Redy Open II — SMA Open (K-1 Style)</span>
                  <span className="text-right font-technical font-bold text-white">Rp 150.000 / nomor</span>
                </div>
                <div className="p-4 grid grid-cols-2 text-[#8F8E8B]">
                  <span>4. Redy Open II — University Open (K-1 Style)</span>
                  <span className="text-right font-technical font-bold text-white">Rp 200.000 / nomor</span>
                </div>
                <div className="p-4 grid grid-cols-2 text-[#8F8E8B]">
                  <span>5. Partai Bintang & Mega Bintang (Invitation)</span>
                  <span className="text-right font-technical font-bold text-white">Rp 350.000 / nomor</span>
                </div>
              </div>
              <p className="text-[11px] text-[#77716D] mt-2 font-sans">
                * Biaya pendaftaran di atas sudah mencakup akreditasi kontingen, ID card resmi, dan piagam keikutsertaan atlet.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 bg-[#141416] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-[#D91F2C]">
                <CreditCard className="w-5 h-5" />
                <h3 className="font-display text-lg uppercase tracking-wider text-white">
                  REKENING RESMI PANITIA
                </h3>
              </div>
              <div className="space-y-2 text-xs font-sans text-[#8F8E8B]">
                <p>Seluruh pembayaran pendaftaran kontingen dan atlet wajib ditransfer ke rekening resmi panitia pelaksana:</p>
                <div className="p-4 bg-[#0B0B0B] border border-white/10 space-y-1 font-technical">
                  <span className="text-[#8F8E8B] block text-[10px] uppercase">BANK NEGARA INDONESIA (BNI)</span>
                  <span className="text-xl font-bold text-white block tracking-wider">2122 721 566</span>
                  <span className="text-[#D91F2C] text-xs font-bold block">a.n. PT SWARA CIPTA SARANA</span>
                </div>
                <p className="text-[11px] text-[#77716D]">
                  Bukti transfer wajib diunggah pada formulir pendaftaran atlet dan disimpan untuk verifikasi ulang pada saat weigh-in.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* SEKSI 4: REGULASI PERTANDINGAN WAKO */}
        <section id="regulasi" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              04 / ATURAN RESMI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              DISIPLIN PERTANDINGAN & KELAS USIA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-[#8F8E8B] leading-relaxed">
            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block">
                DISIPLIN TATAMI (KONTROL TEKNIK)
              </span>
              <h3 className="font-display text-xl uppercase tracking-wider text-white">
                POINT FIGHTING & KICK LIGHT
              </h3>
              <p>
                Pertandingan di atas matras tatami dengan prinsip *controlled contact*. Target serangan meliputi kepala (depan & samping) dan torso badan. Dilarang melakukan serangan membabi buta atau kontak berlebihan yang berpotensi mencederai lawan tanpa kontrol.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1 font-technical text-[11px] text-white/80">
                <p>• Children: Usia 7 – 9 tahun</p>
                <p>• Younger Cadets: Usia 10 – 12 tahun</p>
                <p>• Older Cadets: Usia 13 – 15 tahun</p>
                <p>• Junior: Usia 16 – 18 tahun</p>
                <p>• Senior: Usia 19 – 40 tahun</p>
              </div>
            </div>

            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block">
                DISIPLIN RINGSPORT (FULL CONTACT)
              </span>
              <h3 className="font-display text-xl uppercase tracking-wider text-white">
                LOW KICK, FULL CONTACT & K-1 STYLE
              </h3>
              <p>
                Pertandingan di atas ring tali kejuaraan. Memperbolehkan serangan berkekuatan penuh (*full power striking*). Pada nomor Low Kick dan K-1 Style, tendangan ke paha bagian dalam dan luar diperbolehkan. Pada nomor K-1, serangan lutut tunggal langsung ke tubuh diperbolehkan.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1 font-technical text-[11px] text-white/80">
                <p>• Senior Putra & Putri: Usia 19 – 40 tahun</p>
                <p>• Durasi: 3 Ronde × 2 Menit (Penyisihan) / 3 Ronde × 3 Menit (Final)</p>
                <p>• Waktu Jeda: 1 Menit antar ronde</p>
                <p>• Sistem Penilaian: 10-Point Must System oleh 3 Juri Independen</p>
              </div>
            </div>
          </div>
        </section>


        {/* SEKSI 5: TATA TERTIB, PERLENGKAPAN, DAN PROSEDUR */}
        <section id="tata-tertib" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              05 / PROTOKOL PERTANDINGAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              PERLENGKAPAN, PROTES & PENGHARGAAN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#8F8E8B] font-sans">
            <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
              <h3 className="font-display text-lg uppercase tracking-wider text-white">
                PERLENGKAPAN ATLET
              </h3>
              <p className="leading-relaxed">
                Setiap atlet wajib membawa perlengkapan pelindung pribadi sesuai standar WAKO: headguard (merah/biru), gumshield, hand wraps, boxing gloves 10 oz, groin guard, shin guard, dan pelindung kaki (*foot protector*). Sarung tinju sudut merah/biru disediakan panitia pada partai ring utama.
              </p>
            </div>

            <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
              <h3 className="font-display text-lg uppercase tracking-wider text-white">
                PEMANGGILAN & WO
              </h3>
              <p className="leading-relaxed">
                Atlet wajib berada di area pemanasan (*warm-up area*) 30 menit sebelum jadwal partainya. Pemanggilan atlet dilakukan maksimal 3 kali dengan jeda 1 menit. Jika pada panggilan ketiga atlet belum memasuki ring/tatami, maka dinyatakan kalah Walk Out (WO).
              </p>
            </div>

            <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
              <h3 className="font-display text-lg uppercase tracking-wider text-white">
                KETENTUAN PROTES
              </h3>
              <p className="leading-relaxed">
                Protes terhadap keputusan juri hanya dapat diajukan secara resmi oleh Official/Manajer Tim yang sah, maksimal 15 menit setelah pertarungan selesai, disertai surat keberatan tertulis dan biaya jaminan protes sesuai regulasi WAKO / KBI DIY.
              </p>
            </div>
          </div>
        </section>


        {/* SEKSI 6: TIMBANG BADAN RESMI (10 DESEMBER 2026) */}
        <section id="weighin" className="p-8 bg-[#141416] border border-[#D91F2C]/40 border-l-4 border-l-[#D91F2C] space-y-4 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#D91F2C]">
                <Scale className="w-5 h-5" />
                <span className="font-technical text-xs uppercase font-bold tracking-[0.2em]">
                  AGENDA KRUSIAL KONTINGEN & ATLET
                </span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                REGISTRASI ULANG, SCREENING MEDIS & TIMBANG BADAN
              </h3>
            </div>
            <span className="font-technical text-xs bg-white/5 border border-white/10 px-3 py-1.5 text-white">
              RABU, 10 DESEMBER 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-[#8F8E8B] font-sans">
            <div>
              <strong className="text-white block font-display text-sm tracking-wide">WAKTU & TEMPAT:</strong>
              <p className="mt-1">Pukul 09.00 – 12.00 WIB di Main Hall GOR UNY Colombo, Yogyakarta.</p>
            </div>
            <div>
              <strong className="text-white block font-display text-sm tracking-wide">DOKUMEN WAJIB:</strong>
              <p className="mt-1">KTP/KIA/Akte Kelahiran, Surat Keterangan Sehat Dokter, dan Bukti Pembayaran Resmi.</p>
            </div>
            <div>
              <strong className="text-white block font-display text-sm tracking-wide">BATAS TOLERANSI:</strong>
              <p className="mt-1">Tidak ada toleransi kelebihan berat badan pada saat timbang badan resmi.</p>
            </div>
          </div>
        </section>


        {/* SEKSI 7: KONTAK & SEKRETARIAT RESMI */}
        <section id="kontak" className="space-y-6 pt-8 border-t border-white/10 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              06 / NARAHUBUNG PANITIA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              SEKRETARIAT & CONTACT PERSON
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 bg-[#141416] border border-white/10 space-y-1">
              <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold">KOORDINATOR TEKNIS 1</span>
              <p className="font-display text-lg uppercase text-white">Ardi (Panitia)</p>
              <a href="tel:+628132928327" className="font-technical text-sm text-[#8F8E8B] hover:text-white block">
                +62 813-2928-327
              </a>
            </div>

            <div className="p-4 bg-[#141416] border border-white/10 space-y-1">
              <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold">KOORDINATOR TEKNIS 2</span>
              <p className="font-display text-lg uppercase text-white">Priya (Panitia)</p>
              <a href="tel:+6283872603935" className="font-technical text-sm text-[#8F8E8B] hover:text-white block">
                +62 838-7260-3935
              </a>
            </div>

            <div className="p-4 bg-[#141416] border border-white/10 space-y-1">
              <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold">KOORDINATOR TEKNIS 3</span>
              <p className="font-display text-lg uppercase text-white">Vale (Panitia)</p>
              <a href="tel:+6285336586597" className="font-technical text-sm text-[#8F8E8B] hover:text-white block">
                +62 853-3658-6597
              </a>
            </div>
          </div>
        </section>

      </div>

    </main>
  );
}

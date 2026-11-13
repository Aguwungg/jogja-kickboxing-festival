import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  ArrowUpRight,
  Check,
  MessageCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Tentang JKBF 2026 | Jogja Kickboxing Festival",
  description:
    "Pusat informasi resmi Jogja Kickboxing Festival 2026 — 19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta. Profil penyelenggara, program kejuaraan, dan regulasi WAKO.",
};

export default function TentangPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 lg:pt-32 pb-28 font-sans">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. PAGE HEADER
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            PUSAT INFORMASI RESMI • PENGPROV KBI DIY
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-[#F4F0E8]">
              TENTANG JKBF &amp; INFO KEJUARAAN
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#8F8E8B] leading-relaxed max-w-2xl">
              Panduan menyeluruh penyelenggaraan Jogja Kickboxing Festival 2026: profil penyelenggara, program kejuaraan, disiplin pertandingan, regulasi WAKO, ketentuan administrasi peserta, dan informasi resmi panitia.
            </p>
          </div>

          <Link
            href="/kontak"
            className="px-6 py-3 bg-[#141416] hover:bg-white/10 border border-white/15 text-[#F4F0E8] font-display text-base tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 rounded-full shrink-0"
          >
            <span>KONTAK PANITIA</span>
          </Link>
        </div>

        {/* Quick anchor navigation */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto font-technical text-xs pb-1 scrollbar-none">
          <span className="text-[#77716D] uppercase tracking-wider pr-2 shrink-0">MENUJU:</span>
          {[
            { label: "PROFIL", href: "#profil" },
            { label: "PROGRAM KEJUARAAN", href: "#kompetisi" },
            { label: "DISIPLIN", href: "#disiplin" },
            { label: "REGULASI WAKO", href: "#regulasi" },
            { label: "KETENTUAN ATLET", href: "#tata-tertib" },
            { label: "SEKRETARIAT", href: "#sekretariat" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 rounded-xs bg-[#111114] hover:bg-[#D91F2C] text-[#8F8E8B] hover:text-white border border-white/10 transition-colors whitespace-nowrap font-technical text-xs"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 space-y-16">

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: PROFIL & PENYELENGGARA — COMBAT SPORT DOSSIER
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="profil" className="space-y-6 pt-4 scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              01 // LATAR BELAKANG &amp; LEGALITAS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              PROFIL PENYELENGGARA &amp; TUJUAN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm text-[#86868B] font-sans leading-relaxed">
            <div className="lg:col-span-8 p-8 sm:p-10 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-5">
              <p>
                <strong className="text-white">Jogja Kickboxing Festival (JKBF) 2026</strong> adalah kejuaraan olahraga beladiri kickboxing resmi yang diselenggarakan oleh{" "}
                <strong className="text-white">Pengurus Provinsi Kickboxing Indonesia Daerah Istimewa Yogyakarta (Pengprov KBI DIY)</strong> bekerja sama dengan{" "}
                <strong className="text-white">Noise Comm Indonesia</strong>.
              </p>
              <p>
                Event ini dirancang sebagai wadah pembinaan prestasi olahraga kickboxing berjenjang, seleksi atlet daerah menuju ajang nasional (Kejurda DIY 2026), kejuaraan antarklub/camp terbuka (Redy Open Championship II), serta laga pamer kemahiran atlet dan petarung undangan (Kelas Bintang &amp; Mega Bintang). Seluruh pertandingan dijalankan di bawah standar aturan resmi{" "}
                <strong className="text-white">WAKO (World Association of Kickboxing Organizations)</strong>.
              </p>
              <div className="p-5 bg-black/60 border border-white/10 rounded-xs space-y-2 text-xs">
                <span className="font-technical text-[#F5F5F7] font-bold uppercase block tracking-wider">
                  DEWAN PENGURUS &amp; PANITIA RESMI
                </span>
                <p>• Ketua Umum Pengprov KBI DIY: <strong className="text-white">Redy Apriyanta</strong></p>
                <p>• Ketua Panitia Pelaksana: <strong className="text-white">Guguh Felani Ardie</strong></p>
                <p>• Sekretaris Panitia: <strong className="text-white">RR. Fransisca Kusumoningrum S.Par</strong></p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 bg-black/60 border border-white/10 rounded-xs flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#D91F2C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B] block">
                      TANGGAL PENYELENGGARAAN
                    </span>
                    <strong className="font-display text-lg uppercase text-white tracking-wide">
                      {EVENT_CONFIG.dates.display}
                    </strong>
                  </div>
                </div>
                <div className="p-4 bg-black/60 border border-white/10 rounded-xs flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D91F2C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B] block">
                      VENUE ARENA RESMI
                    </span>
                    <strong className="font-display text-lg uppercase text-white tracking-wide">
                      {EVENT_CONFIG.venue.fullDisplay}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Authentic Documentary Photo */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-[#111114] shadow-xl group">
                <picture className="absolute inset-0 w-full h-full">
                  <source
                    media="(max-width: 767px)"
                    srcSet="/images/jkbf-photo/mobile/jkbf-audience-community-mobile-1080x1350.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/jkbf-photo/desktop/jkbf-audience-community-desktop-1920x1080.webp"
                    alt="Atmosfer komunitas dan penonton kejuaraan kickboxing"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10 px-2.5 py-1 bg-black/85 border border-white/15 backdrop-blur-md rounded-xs">
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#F5F5F7] font-semibold block">
                    ATMOSFER KOMUNITAS &amp; SUPORTER
                  </span>
                </div>
              </div>

              <div className="p-8 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-4 flex flex-col justify-between flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#D91F2C]">
                  <div className="p-2.5 bg-[#D91F2C]/10 border border-[#D91F2C]/30 rounded-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wider text-white">
                    LEGALITAS TERVERIFIKASI
                  </h3>
                </div>
                <ul className="space-y-3 text-xs font-sans text-[#86868B]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Surat Keputusan Pengprov KBI DIY No. 04/SK-KBI/X/2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Rekomendasi KONI Daerah Istimewa Yogyakarta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Dewan Wasit &amp; Juri Bersertifikasi WAKO / KBI</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="font-technical text-[10px] uppercase tracking-widest text-[#86868B] block">
                  STANDAR MUTU OLAHRAGA PRESTASI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: PROGRAM KEJUARAAN — COMBAT SPORT GRID
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="kompetisi" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              02 // SISTEM KEJUARAAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              TUJUH PROGRAM KEJUARAAN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EVENT_CONFIG.championshipPrograms.map((prog, i) => (
              <div key={prog.id} className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 rounded-sm shadow-xl transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-technical text-[10px] font-bold text-[#D91F2C] uppercase tracking-widest bg-black/60 px-3 py-1 rounded-xs border border-white/10 inline-block">
                    PROGRAM 0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                    {prog.shortName}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed font-sans">{prog.description}</p>
                </div>
                <div className="pt-3 border-t border-white/[0.08] font-technical text-[11px] text-[#D91F2C] font-semibold uppercase">
                  {prog.format}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: DISIPLIN PERTANDINGAN — APPLE BENTO GRID
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="disiplin" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              03 / DISIPLIN PERTANDINGAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              LIMA DISIPLIN KICKBOXING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {EVENT_CONFIG.disciplines.map((d) => (
              <div key={d.id} className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 rounded-sm shadow-xl transition-all space-y-3">
                <span className="font-technical text-[10px] font-bold text-[#D91F2C] uppercase tracking-widest bg-black/60 px-3 py-1 rounded-xs border border-white/10 inline-block">
                  {d.category}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  {d.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-sans">{d.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: REGULASI WAKO — COMBAT SPORT SPEC
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="regulasi" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              04 // ATURAN RESMI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              REGULASI &amp; KELAS USIA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-[#86868B] leading-relaxed">
            <div className="p-8 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-4">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block tracking-wider">
                DISIPLIN TATAMI (KONTROL TEKNIK)
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                POINT FIGHTING &amp; KICK LIGHT
              </h3>
              <p>
                Pertandingan di atas matras tatami dengan prinsip <em>controlled contact</em>. Target serangan meliputi kepala (depan &amp; samping) dan torso badan.
              </p>
              <div className="pt-3 border-t border-white/[0.08] space-y-1.5 font-technical text-[11px] text-[#C4C4CC]">
                <p>• Children: Usia 7 – 9 tahun</p>
                <p>• Younger Cadets: Usia 10 – 12 tahun</p>
                <p>• Older Cadets: Usia 13 – 15 tahun</p>
                <p>• Junior: Usia 16 – 18 tahun</p>
                <p>• Senior: Usia 19 – 40 tahun</p>
              </div>
            </div>

            <div className="p-8 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-4">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block tracking-wider">
                DISIPLIN RINGSPORT (FULL CONTACT)
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                LOW KICK, FULL CONTACT &amp; K-1 STYLE
              </h3>
              <p>
                Pertandingan di atas ring tali kejuaraan. Memperbolehkan serangan berkekuatan penuh (<em>full power striking</em>). Pada nomor K-1, serangan lutut tunggal langsung ke tubuh diperbolehkan.
              </p>
              <div className="pt-3 border-t border-white/[0.08] space-y-1.5 font-technical text-[11px] text-[#C4C4CC]">
                <p>• Senior Putra &amp; Putri: Usia 19 – 40 tahun</p>
                <p>• Durasi: 3 Ronde × 2 Menit (Penyisihan) / 3 × 3 Menit (Final)</p>
                <p>• Sistem Penilaian: 10-Point Must System, 3 Juri Independen</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: KETENTUAN ATLET — COMBAT PROTOCOL
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="tata-tertib" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              05 // PROTOKOL PERTANDINGAN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              PERLENGKAPAN &amp; PROSEDUR ATLET
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-xs text-[#86868B] font-sans">
            {[
              {
                title: "PERLENGKAPAN ATLET",
                body: "Setiap atlet wajib membawa perlengkapan pelindung pribadi sesuai standar WAKO: headguard (merah/biru), gumshield, hand wraps, boxing gloves 10 oz, groin guard, shin guard, dan pelindung kaki. Sarung tinju sudut merah/biru disediakan panitia pada partai ring utama.",
              },
              {
                title: "PEMANGGILAN & WO",
                body: "Atlet wajib berada di area pemanasan 30 menit sebelum jadwal partainya. Pemanggilan atlet dilakukan maksimal 3 kali dengan jeda 1 menit. Jika pada panggilan ketiga atlet belum memasuki ring/tatami, maka dinyatakan kalah Walk Out (WO).",
              },
              {
                title: "KETENTUAN PROTES",
                body: "Protes terhadap keputusan juri hanya dapat diajukan oleh Official/Manajer Tim yang sah, maksimal 15 menit setelah pertarungan selesai, disertai surat keberatan tertulis dan biaya jaminan protes sesuai regulasi WAKO / KBI DIY.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 rounded-sm shadow-xl transition-all space-y-3">
                <h3 className="font-display text-xl uppercase tracking-wider text-white">{title}</h3>
                <p className="leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: KETENTUAN ADMINISTRASI & PENDAFTARAN
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="administrasi" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              06 // INFORMASI ADMINISTRASI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              KETENTUAN ADMINISTRASI &amp; PENDAFTARAN KONTINGEN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-sans text-[#86868B] leading-relaxed">
            <div className="lg:col-span-7 p-8 sm:p-10 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-5">
              <p className="text-sm">
                Seluruh pendaftaran kontingen, validasi dokumen atlet, dan koordinasi nomor pertandingan dikoordinasikan secara terpusat melalui <strong className="text-white">Sekretariat Panitia Pelaksana Pengprov KBI DIY</strong>.
              </p>
              <div className="p-6 bg-black/60 border border-white/10 rounded-xs space-y-3">
                <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block tracking-wider">
                  PERSYARATAN BERKAS WAJIB ATLET:
                </span>
                <ul className="space-y-2 text-[#C4C4CC]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D91F2C] font-bold">•</span>
                    <span>Kartu Tanda Penduduk (KTP) / Kartu Identitas Anak (KIA) / Akta Kelahiran asli &amp; salinan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D91F2C] font-bold">•</span>
                    <span>Surat Keterangan Sehat dan Layak Bertanding dari dokter atau institusi kesehatan resmi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D91F2C] font-bold">•</span>
                    <span>Surat Rekomendasi Pengcab KBI (khusus peserta Kejurda DIY) atau rekomendasi resmi sasana/sekolah/kampus (peserta Redy Open II)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D91F2C] font-bold">•</span>
                    <span>Surat pernyataan persetujuan orang tua/wali bagi atlet di bawah umur 18 tahun</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 bg-[#111114] border border-white/10 rounded-sm shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#D91F2C]">
                  <div className="p-2.5 bg-[#D91F2C]/10 border border-[#D91F2C]/30 rounded-xs">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wider text-white">
                    SALURAN KOORDINASI RESMI
                  </h3>
                </div>
                <p>
                  Untuk memastikan keabsahan data dan menghindari pihak tidak bertanggung jawab, seluruh informasi biaya, konfirmasi registrasi, dan verifikasi berkas hanya dilayani melalui kontak resmi koordinator panitia.
                </p>
              </div>

              <div className="p-5 bg-black/60 border border-white/10 rounded-xs space-y-2">
                <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold block tracking-wider">
                  SEKRETARIAT PANITIA
                </span>
                <p className="text-white font-sans text-xs">
                  Pengprov Kickboxing Indonesia D.I. Yogyakarta &amp; Noise Comm Indonesia
                </p>
                <p className="text-[11px] text-[#86868B]">
                  Hubungi narahubung koordinator teknis di bagian bawah halaman ini.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7: SEKRETARIAT & KONTAK
           ═══════════════════════════════════════════════════════════════════ */}
        <section id="sekretariat" className="space-y-6 pt-8 border-t border-white/[0.08] scroll-mt-28">
          <div className="space-y-1">
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              07 // NARAHUBUNG PANITIA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              KONTAK OPERASIONAL RESMI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
            {EVENT_CONFIG.contact.coordinators.map((c) => (
              <div
                key={c.id}
                className="p-6 bg-[#111114] border border-white/10 hover:border-[#D91F2C] rounded-sm shadow-xl transition-all flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold tracking-wider">
                    {c.badge}
                  </span>
                  <p className="font-display text-2xl uppercase text-white">{c.name}</p>
                  <p className="text-[#86868B] leading-relaxed">{c.description}</p>
                </div>
                <a
                  href={c.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm uppercase tracking-wider rounded-xs transition-all w-fit"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{c.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-[#D91F2C] hover:text-white transition-colors"
            >
              HALAMAN KONTAK &amp; MEDIA SOSIAL RESMI <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

import Link from "next/link";
import {
  Calendar,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  AlertCircle,
  FileText,
  Users,
  Clock,
  PhoneCall,
} from "lucide-react";
import { jkbfLinks } from "@/lib/event-config";

export const metadata = {
  title: "Official Event Guide: Panduan Hari Pertandingan | JKBF 2026",
  description:
    "Panduan resmi hari pertandingan Jogja Kickboxing Festival 2026: 19–20 Desember 2026 di GOR Pancasila UGM (GOR Nusantara). Informasi atlet, penonton, dan regulasi WAKO.",
};

export default function EventGuidePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">
      {/* ─────────────────────────────────────────────────────────────────
          HERO SECTION — EVENT DAY COMPANION
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-12 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            OFFICIAL EVENT HUB // FIGHT DAY COMPANION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
              YOUR FIGHT <span className="text-[#D91F2C]">DAY GUIDE.</span>
            </h1>
            <p className="font-technical text-sm sm:text-base uppercase tracking-[0.18em] text-[#C4C4CC] font-semibold">
              PANDUAN RESMI HARI PERTANDINGAN • 19–20 DESEMBER 2026
            </p>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
              Pusat informasi praktis untuk atlet, pelatih, kontingen, dan penonton Jogja Kickboxing Festival 2026 di GOR Pancasila UGM (GOR Nusantara).
            </p>
          </div>
        </div>

        {/* ── Quick Anchor Bar ── */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-technical uppercase">
          <a
            href="#ringkasan-event"
            className="px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xs transition-colors text-white"
          >
            Ringkasan Event
          </a>
          <a
            href="#panduan-atlet"
            className="px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xs transition-colors text-white"
          >
            Untuk Atlet &amp; Pelatih
          </a>
          <a
            href="#panduan-penonton"
            className="px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xs transition-colors text-white"
          >
            Untuk Penonton
          </a>
          <a
            href="#jadwal-pertandingan"
            className="px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xs transition-colors text-white"
          >
            Jadwal &amp; Drawing
          </a>
          <a
            href="#kontak-operasional"
            className="px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 rounded-xs transition-colors text-white"
          >
            Kontak Panitia
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1: EVENT SUMMARY CARDS (CONFIRMED FACTS)
         ───────────────────────────────────────────────────────────────── */}
      <section id="ringkasan-event" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-3">
            <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
              <Calendar className="w-4 h-4" /> TANGGAL EVENT
            </span>
            <h3 className="font-display text-2xl uppercase text-white">
              19–20 DESEMBER 2026
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Dua hari kejuaraan resmi di Yogyakarta: babak penyisihan tatami &amp; ringsport pada Hari ke-1, dilanjutkan babak semifinal, final, dan partai utama pada Hari ke-2.
            </p>
          </div>

          <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-3">
            <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
              <MapPin className="w-4 h-4" /> VENUE UTAMA
            </span>
            <h3 className="font-display text-2xl uppercase text-white">
              GOR PANCASILA UGM
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Kini resmi bernama <strong>GOR Nusantara UGM</strong> di kawasan Bulaksumur, Sleman, Yogyakarta.
            </p>
            <Link
              href="/venue"
              className="inline-flex items-center gap-1.5 text-xs text-[#EF3340] hover:text-white font-technical uppercase font-bold tracking-wider transition-colors pt-1"
            >
              <span>Buka Panduan Rute &amp; Transportasi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-3">
            <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> YURISDIKSI RESMI
            </span>
            <h3 className="font-display text-2xl uppercase text-white">
              WAKO RULES INDONESIA
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Diselenggarakan oleh Pengprov Kickboxing Indonesia DIY bersama Noise Comm Indonesia di bawah standar aturan WAKO (World Association of Kickboxing Organizations).
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: GUIDANCE FOR ATHLETES & COACHES
         ───────────────────────────────────────────────────────────────── */}
      <section id="panduan-atlet" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full">
        <div className="border border-white/10 bg-[#0A0A0D] rounded-xs p-6 sm:p-10 space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                DIVISI ATLET &amp; KONTINGEN
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
              PANDUAN FIGHTER &amp; CORNERMAN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#C4C4CC] leading-relaxed">
            <div className="space-y-4">
              <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
                <h4 className="font-display text-base uppercase text-white tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#D91F2C]" />
                  1. Verifikasi Berkas &amp; Timbang Badan (Weigh-in)
                </h4>
                <p>
                  Seluruh atlet terdaftar wajib mengikuti sesi verifikasi dokumen identitas, surat keterangan sehat dokter, serta timbang badan resmi sesuai jadwal yang ditentukan Pengprov KBI DIY sebelum hari pertandingan.
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
                <h4 className="font-display text-base uppercase text-white tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
                  2. Perlengkapan Tanding Resmi (WAKO Approved)
                </h4>
                <p>
                  Atlet wajib mengenakan pelindung standar WAKO: headguard (merah/biru sesuai sudut), mouthguard/gumshield, sarung tinju (10 oz), handwrap resmi, shin guard, foot protector, serta pelindung kemaluan (groin guard).
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
                <h4 className="font-display text-base uppercase text-white tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D91F2C]" />
                  3. Tata Tertib Cornerman &amp; Official
                </h4>
                <p>
                  Maksimal 2 orang cornerman yang berhak mendampingi atlet di sisi ring/tatami. Seluruh official wajib mematuhi kode etik sportivitas dan instruksi dari wasit pertandingan (referee).
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
                <h4 className="font-display text-base uppercase text-white tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D91F2C]" />
                  4. Technical Meeting &amp; Drawing Partai
                </h4>
                <p>
                  Technical Meeting resmi dihadiri oleh perwakilan kontingen, manajer sasana, atau pelatih untuk penetapan bagan kompetisi (drawing bracket) dan konfirmasi akhir aturan teknis.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 border-t border-white/[0.08]">
            <a
              href={jkbfLinks.fighterRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm tracking-wider uppercase rounded-xs transition-colors font-bold"
            >
              <span>FORMULIR PENDAFTARAN ATLET</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={jkbfLinks.fighterSupportWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-technical text-xs uppercase font-bold tracking-wider rounded-xs transition-colors"
            >
              <span>KONSULTASI ADMIN REGISTRASI (PRIYA)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: GUIDANCE FOR SPECTATORS & SUPPORTERS
         ───────────────────────────────────────────────────────────────── */}
      <section id="panduan-penonton" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full">
        <div className="border border-white/10 bg-[#0A0A0D] rounded-xs p-6 sm:p-10 space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                ZONA PENONTON &amp; PENDUKUNG
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
              PANDUAN PENONTON &amp; SUPORTER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#C4C4CC] leading-relaxed">
            <div className="p-5 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
              <span className="font-technical text-[10px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                AKSES TIKET &amp; TRIBUN
              </span>
              <h4 className="font-display text-lg uppercase text-white">
                Informasi Akses Masuk
              </h4>
              <p>
                Mekanisme gelang masuk, reservasi penonton, atau tiket tribun resmi akan dipublikasikan secara terbuka melalui kanal Instagram resmi mendekati tanggal perhelatan.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
              <span className="font-technical text-[10px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                ETIKA SPORTIVITAS
              </span>
              <h4 className="font-display text-lg uppercase text-white">
                Dukungan Positif
              </h4>
              <p>
                JKBF menjunjung tinggi nilai sportivitas bela diri. Suporter dianjurkan memberi semangat terbaik bagi atlet sekolah, kampus, dan sasananya tanpa provokasi anarkis.
              </p>
            </div>

            <div className="p-5 bg-black/60 border border-white/[0.06] rounded-xs space-y-2">
              <span className="font-technical text-[10px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                KAMPUS &amp; LINGKUNGAN
              </span>
              <h4 className="font-display text-lg uppercase text-white">
                Kebersihan &amp; Ketertiban
              </h4>
              <p>
                GOR Pancasila / Nusantara berada di dalam lingkungan akademik UGM. Seluruh pengunjung diharapkan menjaga kebersihan arena dan mematuhi tata tertib kampus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: MATCH SCHEDULE & BOUT ORDER NOTICE
         ───────────────────────────────────────────────────────────────── */}
      <section id="jadwal-pertandingan" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full">
        <div className="p-6 sm:p-8 bg-[#0E0E12] border border-white/10 border-l-4 border-l-amber-500 rounded-xs space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400">
            <Clock className="w-4 h-4 shrink-0" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider">
              JADWAL PARTAI &amp; SUSUNAN TANDING (FIGHT SCHEDULE)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
            Susunan partai tanding per hari (Bout Order) dan bagan kejuaraan (Fight Bracket) resmi disusun oleh Dewan Wasit &amp; Juri Pengprov KBI DIY setelah proses verifikasi berkas, timbang badan, dan Technical Meeting selesai dilakukan.
          </p>

          <p className="text-xs text-[#86868B]">
            Panitia tidak menerbitkan jadwal pertandingan fiktif sebelum drawing resmi disahkan. Simak pembaruan berkala melalui halaman <Link href="/whats-new" className="text-white underline hover:text-[#EF3340]">What&apos;s New</Link> dan Instagram resmi panitia.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: OPERATIONAL CONTACTS SEPARATION
         ───────────────────────────────────────────────────────────────── */}
      <section id="kontak-operasional" className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
        <div className="border-b border-white/[0.08] pb-6 mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
            <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              NARAHUBUNG OPERASIONAL RESMI
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            OFFICIAL LIAISON CONTACTS
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans mt-1 max-w-2xl leading-relaxed">
            Hubungi penanggung jawab divisi resmi berikut via WhatsApp sesuai keperluan koordinasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-4">
            <div className="space-y-1">
              <span className="font-technical text-[10px] font-bold uppercase tracking-wider text-[#D91F2C]">
                DIVISI REGISTRASI FIGHTER
              </span>
              <h3 className="font-display text-2xl uppercase text-white">
                Priya Pratama
              </h3>
              <p className="text-xs text-[#A1A1AA]">
                Khusus konsultasi pendaftaran atlet, verifikasi formulir Google Form, berkas administrasi peserta, dan konfirmasi kelas tanding.
              </p>
            </div>
            <a
              href={jkbfLinks.fighterSupportWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WHATSAPP ADMIN FIGHTER (PRIYA)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-4">
            <div className="space-y-1">
              <span className="font-technical text-[10px] font-bold uppercase tracking-wider text-[#D91F2C]">
                DIVISI KEMITRAAN &amp; SPONSORSHIP
              </span>
              <h3 className="font-display text-2xl uppercase text-white">
                Ardi
              </h3>
              <p className="text-xs text-[#A1A1AA]">
                Khusus peluang kerja sama komersial brand, sponsorship acara, kemitraan media, dan perizinan aktivasi tenant festival.
              </p>
            </div>
            <a
              href={jkbfLinks.partnershipWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WHATSAPP KEMITRAAN &amp; SPONSOR (ARDI)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 p-3.5 bg-black/60 border border-white/10 rounded-xs text-[11px] text-[#71717A] leading-relaxed">
          <strong>Perhatian: </strong>Narahubung di atas adalah koordinator divisi operasional khusus, bukan layanan panggilan darurat umum. Untuk kondisi darurat medis di area venue, silakan menuju pos medis resmi di lokasi atau fasilitas RS Panti Rapih terdekat.
        </div>
      </section>
    </main>
  );
}

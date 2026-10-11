import Link from "next/link";
import Image from "next/image";
import { Shield, Flame, Music, MapPin, Calendar, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tentang JKB 2026 — Sportainment Festival Yogyakarta",
  description: "Mengenal Jogja Kickboxing Festival & Redy Championship 2: Perpaduan kejuaraan tarung profesional regional dan festival musik kontemporer di Yogyakarta.",
};

export default function TentangPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/jkb/boxing-ring.jpg"
            alt="Arena Ring Kickboxing JKB 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D91F2C]/40 bg-[#D91F2C]/10 text-[#EF3340] text-xs font-bold tracking-widest uppercase mb-6">
            <Flame className="w-3.5 h-3.5" />
            MANIFESTO SPORTAINMENT JOGJA
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DI BALIK KALEM, <span className="text-[#EF3340]">ADA PERTARUNGAN.</span>
          </h1>

          <p className="text-[#99999F] text-lg sm:text-xl font-sans max-w-3xl leading-relaxed mb-8">
            Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026) mendobrak sekat konvensional antara gelanggang olahraga tarung dan festival musik anak muda. Sebuah perayaan sportivitas, mental petarung, dan denyut seni urban Yogyakarta di bawah satu atap.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm font-sans text-white/80">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
              <Calendar className="w-4 h-4 text-[#EF3340]" />
              <span>14–16 Agustus 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
              <MapPin className="w-4 h-4 text-[#EF3340]" />
              <span>GOR Among Rogo, Yogyakarta</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
              <Award className="w-4 h-4 text-[#E2BA75]" />
              <span>80+ Atlet • 4 Sabuk Kejuaraan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Utama */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TIGA PILAR PENGALAMAN JKB 2026
          </h2>
          <p className="text-[#99999F] text-base font-sans">
            Menghadirkan ekosistem festival yang komprehensif, kredibel dari aspek olahraga, dan memukau dari sisi hiburan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1: The Ring */}
          <div className="bg-[#171719] border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#D91F2C]/50 transition-all">
            <div className="w-12 h-12 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#EF3340] mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-black uppercase text-white mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              THE RING • REDY CHAMPIONSHIP 2
            </h3>
            <p className="text-[#99999F] text-sm leading-relaxed mb-6 font-sans">
              Turnamen kickboxing regional resmi dengan standar penjurian profesional internasional. Menampilkan 80 petarung tangguh dari berbagai sasana di DIY, Jawa Tengah, dan sekitarnya dalam 4 divisi berat badan resmi.
            </p>
            <ul className="space-y-2 text-xs text-white/80 font-sans border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EF3340]" />
                Aturan Full Contact K-1 Rules
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EF3340]" />
                Tim Medis & Ringside Physician Berlisensi
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EF3340]" />
                Perebutan 4 Sabuk Emas Kejuaraan
              </li>
            </ul>
          </div>

          {/* Pilar 2: The Stage */}
          <div className="bg-[#171719] border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="w-12 h-12 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
              <Music className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-black uppercase text-white mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              THE STAGE • LIVE FESTIVAL
            </h3>
            <p className="text-[#99999F] text-sm leading-relaxed mb-6 font-sans">
              Suasana konser musik berenergi tinggi yang menyuntikkan adrenalin sepanjang akhir pekan. Kurasi musisi indie terdepan, beat hip-hop urban, hingga penampilan bintang tamu nasional penutup malam final.
            </p>
            <ul className="space-y-2 text-xs text-white/80 font-sans border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Audio & Lighting Kelas Konser Internasional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Walkout Anthem & Live Show Atlet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Kolaborasi Musisi Lokal & Nasional
              </li>
            </ul>
          </div>

          {/* Pilar 3: Urban Culture */}
          <div className="bg-[#171719] border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-white/30 transition-all">
            <div className="w-12 h-12 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3
              className="text-2xl font-black uppercase text-white mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              URBAN CULTURE & COMMUNITY
            </h3>
            <p className="text-[#99999F] text-sm leading-relaxed mb-6 font-sans">
              Gerakan kebanggaan daerah melalui voting City Pride, pasar streetwear merchandise eksklusif, sentra kuliner UMKM lokal Yogyakarta, dan panggung kreator konten olahraga tarung.
            </p>
            <ul className="space-y-2 text-xs text-white/80 font-sans border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
                Voting Kehormatan Wilayah (City Pride)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
                Merchandise Kapsul Eksklusif JKB
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
                Food & Beverage Street Plaza
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai & Filosofi Acara */}
      <section className="bg-[#171719] border-y border-white/10 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#EF3340] font-bold mb-3 font-sans">
                FILOSOFI NARATIF
              </div>
              <h2
                className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                MENGAPA JOGJA? MENGAPA SEKARANG?
              </h2>
              <p className="text-[#99999F] text-base leading-relaxed mb-4 font-sans">
                Yogyakarta kerap dikenal dengan keramahannya yang tenang dan budayanya yang santun. Namun di balik kelembutan karakter tersebut, generasi mudanya menyimpan determinasi baja, daya juang tak kenal menyerah, dan nyali pantang tunduk.
              </p>
              <p className="text-[#99999F] text-base leading-relaxed mb-6 font-sans">
                JKB 2026 hadir menjadi kanal resmi untuk menyalurkan energi tersebut ke dalam gelanggang olahraga yang bermartabat, terukur, dan menginspirasi publik luas. Tidak ada tempat untuk kekerasan liar di jalanan; keberanian sejati dibuktikan di atas ring dengan disiplin dan respek.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/fighters"
                  className="inline-flex items-center justify-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] text-white px-6 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-all"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  JELAJAHI FIGHTER CENTER
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/jadwal"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider transition-all"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  LIHAT JADWAL 3 HARI
                </Link>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-square w-full rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/images/jkb/fighter-agung.jpg"
                alt="Aksi Petarung Kickboxing JKB 2026"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#E2BA75] font-bold block mb-1 font-sans">
                  STANDAR KEJUARAAN RESMI
                </span>
                <p className="text-white text-lg font-bold font-sans">
                  "Menghormati lawan di atas ring, menginspirasi ribuan pemuda di luar arena."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Resmi & Legal Panitia */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-[#171719]/60 border border-white/10 p-8 sm:p-12 rounded-sm">
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-white mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            ORGANISASI & BADAN PENYELENGGARA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#99999F] font-sans">
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Panitia Pelaksana</h4>
              <p className="leading-relaxed mb-4">
                Diselenggarakan secara independen oleh Panitia Pelaksana Jogja Kickboxing Festival bekerjasama dengan promotor Redy Championship dan komunitas seni musik Yogyakarta.
              </p>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Sanksi & Penjurian</h4>
              <p className="leading-relaxed">
                Dipimpin oleh dewan juri, wasit, dan tim medis independen berlisensi resmi olahraga tarung demi menjamin keselamatan atlet dan keadilan skor pertandingan.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Sekretariat & Hubungan Media</h4>
              <p className="leading-relaxed mb-4">
                Kompleks GOR Among Rogo, Jl. Kenari No. 1, Semaki, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55166.
              </p>
              <div className="pt-2">
                <Link
                  href="/kontak"
                  className="text-[#EF3340] hover:underline font-bold inline-flex items-center gap-1.5"
                >
                  Hubungi Panitia & Layanan Media &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

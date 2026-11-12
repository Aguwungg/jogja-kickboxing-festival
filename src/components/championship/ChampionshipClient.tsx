import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Info,
  MessageCircle,
} from "lucide-react";
import { EVENT_CONFIG, jkbfLinks, registrationConfig } from "@/lib/event-config";

interface ProgramItem {
  id: string;
  number: string;
  categoryLabel: string;
  name: string;
  headline: string;
  badge: string;
  format: string;
  target: string;
  summary: string;
  description: string;
  highlights: string[];
  disciplines: string[];
  image: string;
  isInvitation?: boolean;
}

const PROGRAMS: ProgramItem[] = [
  {
    id: "kejurda",
    number: "01",
    categoryLabel: "REGIONAL",
    name: "Kejuaraan Daerah Kickboxing DIY 2026",
    headline: "SELEKSI RESMI DAERAH ISTIMEWA YOGYAKARTA",
    badge: "PENGPROV KBI DIY",
    format: "Gugur Murni • Atlet Domisili DIY",
    target: "Pengkab & Pengkot se-DIY (Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul)",
    summary:
      "Panggung seleksi utama dan barometer pembinaan atlet Pengprov KBI DIY menuju tingkat nasional.",
    description:
      "Kejuaraan resmi di bawah yurisdiksi Pengprov Kickboxing Indonesia DIY. Menjadi panggung seleksi utama dan barometer pembinaan atlet daerah menuju Pekan Olahraga Nasional dan kejuaraan tingkat nasional.",
    highlights: [
      "Jalur pembinaan atlet berjenjang Pengprov KBI DIY",
      "Diikuti kontingen resmi 5 Pengurus Cabang Kabupaten/Kota",
      "Standar penjurian WAKO 10-Point Must System bersertifikasi",
      "Pemberian medali dan piagam resmi KONI & KBI DIY",
    ],
    disciplines: ["Point Fighting", "Kick Light", "Low Kick", "Full Contact"],
    image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
  },
  {
    id: "redy-open",
    number: "02",
    categoryLabel: "OPEN",
    name: "Redy Open Championship II",
    headline: "TURNAMEN TERBUKA SKALA NASIONAL",
    badge: "OPEN CHAMPIONSHIP",
    format: "Turnamen Terbuka • Nasional",
    target: "Sasana, Camp, Akademi & Kontingen Umum se-Indonesia",
    summary:
      "Kompetisi terbuka bergengsi mempertemukan petarung antar-sasana dan akademi beladiri se-Indonesia.",
    description:
      "Kelanjutan dari kesuksesan edisi perdana Redy Open. Menghadirkan kompetisi kickboxing terbuka bergengsi yang mempertemukan petarung potensial antarklub dan akademi beladiri dari seluruh penjuru tanah air.",
    highlights: [
      "Skala kompetisi terbuka nasional",
      "Wadah adu kualitas teknik antar sasana terkemuka",
      "Standar keamanan dan medis ketat sesuai standar WAKO",
      "Perebutan gelar juara umum dan trofi bergengsi",
    ],
    disciplines: ["Point Fighting", "Kick Light", "Low Kick", "Full Contact", "K-1 Style"],
    image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
  },
  {
    id: "camp-open",
    number: "03",
    categoryLabel: "OPEN",
    name: "Camp Open",
    headline: "ADU TEKNIK ANTAR AKADEMI & SASANA",
    badge: "ACADEMY DIVISION",
    format: "Terbuka • Sasana & Camp",
    target: "Akademi Kickboxing, MMA Camp, Sasana Muaythai & Beladiri",
    summary:
      "Divisi khusus antarsasana untuk menguji kualitas kurikulum dan ketangguhan petarung binaan camp.",
    description:
      "Divisi khusus antarsasana yang dirancang untuk menguji kedalaman kurikulum pelatihan dan kualitas atlet binaan masing-masing camp dalam atmosfer turnamen resmi yang kompetitif dan sportif.",
    highlights: [
      "Eksklusif bagi sasana dan camp berlisensi",
      "Kategori usia mulai dari Children hingga Senior",
      "Peluang unjuk bakat bagi calon petarung profesional masa depan",
    ],
    disciplines: ["Point Fighting", "Kick Light", "Low Kick", "K-1 Style"],
    image: "/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png",
  },
  {
    id: "sma-open",
    number: "04",
    categoryLabel: "STUDENT",
    name: "SMA Open",
    headline: "WADAH TALENTA MUDA TINGKAT PELAJAR",
    badge: "PELAJAR SMA / SEDERAJAT",
    format: "Pelajar SMA / SMK / MA",
    target: "Siswa SMA/sederajat aktif dengan rekomendasi sekolah/sasana",
    summary:
      "Kompetisi terstruktur bagi pelajar SMA/sederajat dengan standar keselamatan ketat WAKO.",
    description:
      "Kompetisi terstruktur yang ditujukan khusus bagi atlet pelajar tingkat sekolah menengah atas. Membangun sportivitas, karakter keberanian positif, serta menyalurkan energi generasi muda ke dalam olahraga prestasi resmi.",
    highlights: [
      "Regulasi perlindungan keamanan atlet pelajar ketat",
      "Peralatan keselamatan lengkap standar WAKO",
      "Pemberian poin prestasi olahraga untuk jenjang akademik",
    ],
    disciplines: ["Kick Light", "Point Fighting", "K-1 Style"],
    image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
  },
  {
    id: "university-open",
    number: "05",
    categoryLabel: "STUDENT",
    name: "University Open",
    headline: "KICKBOXING MAHASISWA PERGURUAN TINGGI",
    badge: "MAHASISWA NASIONAL",
    format: "Mahasiswa Aktif Perguruan Tinggi",
    target: "Mahasiswa perguruan tinggi negeri maupun swasta se-Indonesia",
    summary:
      "Ajang tarung mahasiswa perguruan tinggi se-Indonesia dalam format dinamis K-1 Style Ringsport.",
    description:
      "Ajang unjuk kebolehan atlet kickboxing di tingkat perguruan tinggi. Menjadi wadah integrasi antara pencapaian akademis dan keunggulan olahraga tarung dalam format pertandingan K-1 Style yang dinamis.",
    highlights: [
      "Nomor utama K-1 Style Ringsport",
      "Menjaring atlet mahasiswa untuk kompetisi multievent kampus",
      "Persaingan antarkampus terkemuka dari berbagai daerah",
    ],
    disciplines: ["K-1 Style Ringsport", "Low Kick"],
    image: "/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png",
  },
  {
    id: "kelas-bintang",
    number: "06",
    categoryLabel: "INVITATION",
    name: "Kelas Bintang",
    headline: "PARTAI PILIHAN ATLET ELIT NASIONAL",
    badge: "INVITATION ONLY",
    format: "Undangan Khusus • Main Ring",
    target: "Petarung pilihan panitia, juara bertahan & figur beladiri",
    summary:
      "Partai invitasi khusus yang mempertemukan petarung terseleksi dengan rekam jejak teruji.",
    description:
      "Pertandingan invitasi bergengsi yang mempertemukan petarung terseleksi dengan rekam jejak impresif. Menghadirkan duel teknik tingkat tinggi di ring utama festival.",
    highlights: [
      "Sistem seleksi ketat berbasis kurasi panitia",
      "Panggung spotlight di ring utama festival",
      "Bukan kategori pendaftaran umum",
    ],
    disciplines: ["K-1 Style Ringsport"],
    image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
    isInvitation: true,
  },
  {
    id: "kelas-mega-bintang",
    number: "07",
    categoryLabel: "INVITATION",
    name: "Kelas Mega Bintang",
    headline: "PUNCAK KEHORMATAN DI ATAS RING JKBF",
    badge: "MAIN EVENT • INVITATION",
    format: "Laga Puncak • Main Event",
    target: "Petarung papan atas nasional & figur kejuaraan",
    summary:
      "Laga puncak invitation-only JKBF 2026 di ring utama GOR Pancasila UGM.",
    description:
      "Partai pamungkas Jogja Kickboxing Festival 2026. Laga paling dinanti yang merepresentasikan semangat tertinggi #JOGJAPUNYANYALI — adu determinasi, teknik, dan ketangguhan mental atlet kelas atas.",
    highlights: [
      "Main Event kehormatan JKBF 2026",
      "Partai penutup yang menjadi sorotan festival",
      "Eksklusif undangan khusus promotor resmi",
    ],
    disciplines: ["K-1 Style Ringsport"],
    image: "/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png",
    isInvitation: true,
  },
];

export default function ChampionshipClient() {
  return (
    <div className="w-full space-y-20 font-sans">
      {/* ─────────────────────────────────────────────────────────────────
          1. VERTICAL FIGHT CARD LIST (NATIVE <details> ACCORDION)
         ───────────────────────────────────────────────────────────────── */}
      <section aria-labelledby="fight-card-heading" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <h2
            id="fight-card-heading"
            className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white"
          >
            FIGHT CARD &amp; KATEGORI RESMI
          </h2>
          <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#86868B]">
            WAKO RULES • TATAMI &amp; RINGSPORT
          </span>
        </div>

        <div className="divide-y divide-white/12 border-y border-white/15">
          {PROGRAMS.map((prog) => (
            <details
              key={prog.id}
              id={prog.id}
              className="fight-card-details group bg-[#060608] open:bg-[#0D0D11] transition-colors"
            >
              <summary className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none focus-visible:outline-2 focus-visible:outline-[#D91F2C]">
                <div className="flex items-start sm:items-center gap-4 sm:gap-7 min-w-0">
                  <span
                    className={`font-display text-4xl sm:text-5xl leading-none shrink-0 ${
                      prog.isInvitation ? "text-[#D91F2C]" : "text-white/40 group-open:text-[#D91F2C]"
                    } transition-colors`}
                  >
                    {prog.number}
                  </span>

                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`font-technical text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-xs ${
                          prog.isInvitation
                            ? "bg-[#D91F2C] text-white"
                            : "bg-white/[0.06] text-[#EF3340] border border-white/15"
                        }`}
                      >
                        {prog.categoryLabel}
                      </span>
                      <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B]">
                        {prog.badge}
                      </span>
                    </div>

                    <span className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white block leading-none">
                      {prog.name}
                    </span>

                    <span className="text-xs sm:text-sm text-[#A1A1AA] block leading-snug max-w-2xl">
                      {prog.summary}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0 font-technical text-[11px] font-bold uppercase tracking-widest text-[#C4C4CC] group-hover:text-white">
                  <span className="group-open:hidden">DETAIL</span>
                  <span className="hidden group-open:inline text-[#EF3340]">TUTUP</span>
                  <ChevronDown className="w-4 h-4 fight-card-chevron text-[#D91F2C]" />
                </div>
              </summary>

              {/* Expanded Fight Card Spec */}
              <div className="px-4 sm:px-6 pb-7 pt-2 border-t border-white/[0.08]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-start">
                  {/* Real JKBF Fight Photo */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-white/15 bg-black">
                      <Image
                        src={prog.image}
                        alt={prog.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-center grayscale contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-black/80 px-2.5 py-1 border border-white/15 rounded-xs">
                        {prog.format}
                      </span>
                    </div>
                  </div>

                  {/* Specs & Highlights */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-sm text-[#D4D4D8] leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-black/70 border border-white/10 rounded-xs text-xs">
                      <div>
                        <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B] block">
                          SASARAN PESERTA
                        </span>
                        <p className="text-white font-medium mt-1">{prog.target}</p>
                      </div>
                      <div>
                        <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B] block">
                          DISIPLIN PERTANDINGAN
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {prog.disciplines.map((d) => (
                            <span
                              key={d}
                              className="font-technical text-[10px] uppercase px-2 py-0.5 bg-white/[0.06] border border-white/10 text-white rounded-xs"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C4C4CC]">
                      {prog.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {!prog.isInvitation && (
                      <div className="pt-1 flex flex-wrap gap-3">
                        <a
                          href={jkbfLinks.fighterRegistration}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm tracking-wider uppercase rounded-xs transition-colors"
                        >
                          DAFTAR PROGRAM INI
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <Link
                          href="/kontak"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#C4C4CC] hover:text-white font-technical text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors"
                        >
                          KOORDINASI KONTINGEN
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Invitation Clarification Box */}
        <div className="p-6 sm:p-7 bg-[#0E0E12] border border-white/10 border-l-4 border-l-[#D91F2C] rounded-xs space-y-2">
          <div className="flex items-center gap-2 text-[#D91F2C]">
            <Info className="w-4 h-4 shrink-0" />
            <span className="font-technical text-xs uppercase font-bold tracking-wider">
              CATATAN RESMI KATEGORI UNDANGAN (INVITATION ONLY)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
            Program <strong className="text-white">Kelas Bintang</strong> dan{" "}
            <strong className="text-white">Kelas Mega Bintang</strong> merupakan partai invitasi eksklusif yang diatur langsung oleh promotor dan Pengprov KBI DIY. Kategori ini{" "}
            <strong className="text-white">tidak dibuka untuk pendaftaran umum</strong>.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          2. 5 COMPETITION DISCIPLINES (WAKO STANDARDS)
         ───────────────────────────────────────────────────────────────── */}
      <section id="disciplines" aria-labelledby="disciplines-heading" className="space-y-8 pt-6 border-t border-white/15">
        <div className="max-w-3xl space-y-2.5">
          <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C] block">
            REGULASI RESMI WAKO
          </span>
          <h2
            id="disciplines-heading"
            className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-none"
          >
            DISIPLIN TATAMI &amp; RINGSPORT
          </h2>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Seluruh pertandingan JKBF 2026 mengacu pada standar <strong className="text-white">World Association of Kickboxing Organizations (WAKO)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EVENT_CONFIG.disciplines.map((d, i) => {
            const isRingsport = d.category === "RINGSPORT";
            return (
              <div
                key={d.id}
                className={`p-6 sm:p-7 border flex flex-col justify-between space-y-5 rounded-xs ${
                  isRingsport
                    ? "bg-[#111114] border-[#D91F2C]/45"
                    : "bg-[#111114] border-white/12"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-technical text-[10px] uppercase font-bold tracking-[0.25em] text-[#D91F2C]">
                      0{i + 1} / {d.category}
                    </span>
                    <span
                      className={`font-technical text-[9px] uppercase px-2.5 py-0.5 rounded-xs border ${
                        isRingsport
                          ? "bg-[#D91F2C]/15 border-[#D91F2C]/40 text-[#EF3340] font-bold"
                          : "bg-white/5 border-white/10 text-[#A1A1AA]"
                      }`}
                    >
                      {isRingsport ? "RING TALI" : "MATRAS TATAMI"}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                    {d.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {d.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  <span className="font-technical text-[10px] uppercase text-[#86868B] block">
                    DITERAPKAN PADA:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {d.applicableIn.map((app) => (
                      <span
                        key={app}
                        className="font-technical text-[10px] uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-[#F5F5F7] rounded-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tatami vs Ringsport Spec */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#A1A1AA] leading-relaxed">
          <div className="p-6 bg-[#0E0E11] border border-white/12 rounded-xs space-y-2.5">
            <span className="font-technical text-xs font-bold text-white uppercase block">
              DIVISI TATAMI (POINT FIGHTING &amp; KICK LIGHT)
            </span>
            <p>
              Bertanding di matras tatami 8×8m dengan prinsip <em>controlled contact</em>: kecepatan, ketepatan teknik, dan kontrol penuh.
            </p>
          </div>
          <div className="p-6 bg-[#0E0E11] border border-[#D91F2C]/35 rounded-xs space-y-2.5">
            <span className="font-technical text-xs font-bold text-[#EF3340] uppercase block">
              DIVISI RINGSPORT (LOW KICK, FULL CONTACT &amp; K-1 STYLE)
            </span>
            <p>
              Bertanding di atas ring tali kejuaraan dengan <em>full power striking</em>. Sistem penilaian 10-Point Must oleh 3 juri bersertifikasi.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. BOTTOM REGISTRATION DOCK
         ───────────────────────────────────────────────────────────────── */}
      <div className="p-7 sm:p-11 bg-[#0E0E12] border-2 border-[#D91F2C]/50 rounded-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D91F2C] text-white rounded-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider">
              {registrationConfig.statusLabel} HINGGA {registrationConfig.displayDeadline}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-none text-white">
            DAFTARKAN DIRIMU SEBELUM {registrationConfig.displayDeadline}.
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
            {registrationConfig.supportingText} Butuh bantuan teknis? Hubungi{" "}
            <strong className="text-white">{registrationConfig.adminName}</strong>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(217,31,44,0.4)] rounded-xs"
          >
            <span>DAFTAR SEKARANG</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={jkbfLinks.fighterSupportWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-[#F5F5F7] font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 rounded-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>ADMIN FIGHTER</span>
          </a>
        </div>
      </div>
    </div>
  );
}

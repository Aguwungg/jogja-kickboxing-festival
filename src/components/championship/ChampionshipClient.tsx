"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Info,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { EVENT_CONFIG, jkbfLinks, registrationConfig } from "@/lib/event-config";

type CategoryFilter = "ALL" | "REGIONAL" | "OPEN" | "STUDENT" | "INVITATION";

export default function ChampionshipClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [activeTab, setActiveTab] = useState<"PROGRAMS" | "DISCIPLINES">("PROGRAMS");

  const programs = [
    {
      id: "kejurda",
      category: "REGIONAL",
      categoryLabel: "KEJURDA DIY",
      name: "Kejuaraan Daerah Kickboxing DIY 2026",
      headline: "SELEKSI RESMI DAERAH ISTIMEWA YOGYAKARTA",
      badge: "PENGPROV KBI DIY",
      format: "Gugur Murni • Atlet Domisili DIY",
      target: "Pengkab & Pengkot se-DIY (Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul)",
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
      category: "OPEN",
      categoryLabel: "REDY OPEN II",
      name: "Redy Open Championship II",
      headline: "TURNAMEN TERBUKA SKALA NASIONAL",
      badge: "OPEN CHAMPIONSHIP",
      format: "Turnamen Terbuka • Nasional",
      target: "Sasana, Camp, Akademi & Kontingen Umum se-Indonesia",
      description:
        "Kelanjutan dari kesuksesan edisi perdana Redy Open. Menghadirkan kompetisi kickboxing terbuka bergengsi yang mempertemukan petarung potensial antarklub dan akademi beladiri dari seluruh penjuru tanah air.",
      highlights: [
        "Skala kompetisi terbuka nasional",
        "Wadah adu kualitas teknik antar sasana terkemuka",
        "Standar keamanan dan medis ketat sesuai standar WAKO",
        "Perebutan gelar juara umum dan trofi bergengsi",
      ],
      disciplines: ["Point Fighting", "Kick Light", "Low Kick", "Full Contact", "K-1 Style"],
      image: "/images/jkb/boxing-ring.jpg",
    },
    {
      id: "camp-open",
      category: "OPEN",
      categoryLabel: "CAMP OPEN",
      name: "Camp Open",
      headline: "ADU TEKNIK ANTAR AKADEMI & SASANA",
      badge: "ACADEMY DIVISION",
      format: "Terbuka • Sasana & Camp",
      target: "Akademi Kickboxing, MMA Camp, Sasana Muaythai & Beladiri",
      description:
        "Divisi khusus antarsasana yang dirancang untuk menguji kedalaman kurikulum pelatihan dan kualitas atlet binaan masing-masing camp dalam atmosfer turnamen resmi yang kompetitif dan sportif.",
      highlights: [
        "Eksklusif bagi sasana dan camp berlisensi",
        "Kategori usia mulai dari Children hingga Senior",
        "Peluang unjuk bakat bagi calon petarung profesional masa depan",
      ],
      disciplines: ["Point Fighting", "Kick Light", "Low Kick", "K-1 Style"],
      image: "/images/event/boxing-gloves.jpg",
    },
    {
      id: "sma-open",
      category: "STUDENT",
      categoryLabel: "SMA OPEN",
      name: "SMA Open",
      headline: "WADAH TALENTA MUDA TINGKAT PELAJAR",
      badge: "PELAJAR SMA / SEDERAJAT",
      format: "Pelajar SMA / SMK / MA",
      target: "Siswa SMA/sederajat aktif dengan rekomendasi sekolah/sasana",
      description:
        "Kompetisi terstruktur yang ditujukan khusus bagi atlet pelajar tingkat sekolah menengah atas. Membangun sportivitas, karakter keberanian positif, serta menyalurkan energi generasi muda ke dalam olahraga prestasi resmi.",
      highlights: [
        "Regulasi perlindungan keamanan atlet pelajar ketat",
        "Peralatan keselamatan lengkap standar WAKO",
        "Pemberian poin prestasi olahraga untuk jenjang akademik",
      ],
      disciplines: ["Kick Light", "Point Fighting", "K-1 Style"],
      image: "/images/jkb/hero-concert.jpg",
    },
    {
      id: "university-open",
      category: "STUDENT",
      categoryLabel: "UNIVERSITY OPEN",
      name: "University Open",
      headline: "KICKBOXING MAHASISWA PERGURUAN TINGGI",
      badge: "MAHASISWA NASIONAL",
      format: "Mahasiswa Aktif Perguruan Tinggi",
      target: "Mahasiswa perguruan tinggi negeri maupun swasta se-Indonesia",
      description:
        "Ajang unjuk kebolehan atlet kickboxing di tingkat perguruan tinggi. Menjadi wadah integrasi antara pencapaian akademis dan keunggulan olahraga tarung dalam format pertandingan K-1 Style yang dinamis.",
      highlights: [
        "Nomor utama K-1 Style Ringsport",
        "Menjaring atlet mahasiswa untuk kompetisi multievent kampus",
        "Persaingan antarkampus terkemuka dari berbagai daerah",
      ],
      disciplines: ["K-1 Style Ringsport", "Low Kick"],
      image: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
    },
    {
      id: "kelas-bintang",
      category: "INVITATION",
      categoryLabel: "KELAS BINTANG",
      name: "Kelas Bintang",
      headline: "PARTAI PILIHAN ATLET ELIT NASIONAL",
      badge: "INVITATION ONLY",
      format: "Undangan Khusus • Main Ring",
      target: "Petarung pilihan panitia, juara bertahan & figur beladiri",
      description:
        "Pertandingan invitasi bergengsi yang mempertemukan petarung terseleksi dengan rekam jejak impresif. Menghadirkan duel teknik tingkat tinggi yang disajikan dengan produksi panggung profesional.",
      highlights: [
        "Sistem seleksi ketat berbasis kurasi panitia",
        "Panggung spotlight di ring utama festival",
        "Bukan kategori pendaftaran umum",
      ],
      disciplines: ["K-1 Style Ringsport"],
      image: "/images/championship/belt-hero.jpg",
    },
    {
      id: "kelas-mega-bintang",
      category: "INVITATION",
      categoryLabel: "MEGA BINTANG",
      name: "Kelas Mega Bintang",
      headline: "PUNCAK KEHORMATAN DI ATAS RING JKBF",
      badge: "MAIN EVENT • INVITATION",
      format: "Laga Puncak • Main Event",
      target: "Petarung papan atas nasional & figur kejuaraan",
      description:
        "Partai pamungkas Jogja Kickboxing Festival 2026. Laga paling dinanti yang merepresentasikan semangat tertinggi #JOGJAPUNYANYALI — adu determinasi, teknik, dan ketangguhan mental atlet kelas atas.",
      highlights: [
        "Main Event kehormatan JKBF 2026",
        "Partai penutup yang menjadi sorotan festival",
        "Eksklusif undangan khusus promotor resmi",
      ],
      disciplines: ["K-1 Style Ringsport"],
      image: "/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png",
    },
  ];

  const filteredPrograms = programs.filter((p) => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="w-full space-y-16 font-sans">
      
      {/* ─────────────────────────────────────────────────────────────────
          NAVIGATION TOGGLE: PROGRAMS VS DISCIPLINES
          Combat Arena Segmented Switcher (Sharp Athletic Framing)
         ───────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-white/[0.08] pb-6">
        <div className="inline-flex p-1 bg-[#0A0A0C] border border-white/10 rounded-sm w-fit">
          <button
            type="button"
            onClick={() => setActiveTab("PROGRAMS")}
            className={`font-display text-sm sm:text-base uppercase tracking-wider px-5 py-2 rounded-sm transition-all ${
              activeTab === "PROGRAMS"
                ? "bg-[#D91F2C] text-white shadow-lg shadow-red-950/40 font-bold"
                : "text-[#8E8E98] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            7 PROGRAM KEJUARAAN
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("DISCIPLINES")}
            className={`font-display text-sm sm:text-base uppercase tracking-wider px-5 py-2 rounded-sm transition-all ${
              activeTab === "DISCIPLINES"
                ? "bg-[#D91F2C] text-white shadow-lg shadow-red-950/40 font-bold"
                : "text-[#8E8E98] hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            DISIPLIN PERTANDINGAN
          </button>
        </div>

        <div className="text-xs font-technical text-[#77716D] flex items-center gap-2">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C] animate-pulse" />
          <span className="uppercase tracking-widest text-[#8F8E8B]">
            WAKO RULES (TATAMI &amp; RINGSPORT)
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          TAB 1: 7 CHAMPIONSHIP PROGRAMS
         ───────────────────────────────────────────────────────────────── */}
      {activeTab === "PROGRAMS" && (
        <div className="space-y-12">
          
          {/* Category Filter — Combat Sport Tactical Segmented Bar (Zero Mobile Scroll) */}
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#0A0A0C] border border-white/10 rounded-sm w-full max-w-4xl">
              {[
                { id: "ALL", label: "SEMUA", count: "07", isFull: true },
                { id: "REGIONAL", label: "KEJURDA DIY", count: "01" },
                { id: "OPEN", label: "TERBUKA & SASANA", count: "02" },
                { id: "STUDENT", label: "PELAJAR & MHS", count: "02" },
                { id: "INVITATION", label: "INVITASI KHUSUS", count: "02" },
              ].map((f) => {
                const active = activeCategory === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveCategory(f.id as CategoryFilter)}
                    className={`font-technical text-[10px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-4 py-2 border transition-all flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap min-h-[38px] rounded-sm ${
                      f.isFull ? "col-span-2 sm:col-auto" : "col-span-1"
                    } ${
                      active
                        ? "bg-[#D91F2C] border-[#D91F2C] text-white font-bold shadow-[0_0_15px_rgba(217,31,44,0.35)]"
                        : "bg-[#111114] border-white/10 text-[#8E8E98] hover:text-white hover:border-white/30"
                    }`}
                  >
                    <span className="font-semibold">{f.label}</span>
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono px-1 py-0.2 rounded-xs ${
                        active ? "bg-black/30 text-white font-bold" : "bg-white/5 text-[#8E8E98]"
                      }`}
                    >
                      {"//"} {f.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editorial Program Cards Grid — Athletic Industrial Combat Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((prog) => {
              const isInvitation = prog.category === "INVITATION";

              return (
                <article
                  key={prog.id}
                  className={`relative flex flex-col justify-between p-8 sm:p-10 border transition-all group overflow-hidden rounded-sm shadow-xl ${
                    isInvitation
                      ? "bg-[#111114] border-[#D91F2C]/40 hover:border-[#D91F2C]"
                      : "bg-[#111114] border-white/10 hover:border-white/25"
                  }`}
                >
                  {/* Background Image Watermark with Subtle Fade */}
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20 transition-opacity duration-500 group-hover:opacity-30">
                    <Image
                      src={prog.image}
                      alt={prog.name}
                      fill
                      className="object-cover object-center filter grayscale contrast-125"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/85 to-[#111114]/95" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Top badges — Tactical Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-technical text-[10px] uppercase font-bold tracking-[0.25em] text-[#D91F2C] bg-black/80 px-3 py-1 rounded-xs border border-white/10">
                        {prog.categoryLabel}
                      </span>
                      <span
                        className={`font-technical text-[10px] uppercase tracking-wider px-3 py-1 rounded-xs border ${
                          isInvitation
                            ? "bg-[#D91F2C] text-white border-[#D91F2C] font-semibold"
                            : "bg-white/5 text-[#86868B] border-white/10"
                        }`}
                      >
                        {prog.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <p className="font-technical text-xs uppercase tracking-wider text-[#86868B]">
                        {prog.headline}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F5F7] leading-tight group-hover:text-white transition-colors">
                        {prog.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-[#86868B] leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Target & Format Spec — Machined Steel Box */}
                    <div className="p-5 bg-black/60 border border-white/10 rounded-xs space-y-3 text-xs">
                      <div>
                        <span className="font-technical text-[10px] text-[#86868B] uppercase block">
                          FORMAT &amp; SASARAN PESERTA:
                        </span>
                        <p className="text-white font-sans font-medium mt-0.5">{prog.target}</p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-technical text-[11px]">
                        <span className="text-[#86868B]">Sistem:</span>
                        <span className="text-[#D91F2C] font-semibold">{prog.format}</span>
                      </div>
                    </div>

                    {/* Highlights Checklist */}
                    <div className="space-y-2 pt-1">
                      <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B] block">
                        POIN UTAMA PROGRAM:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#86868B] font-sans">
                        {prog.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" />
                            <span className="text-[#C4C4CC]">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Disciplines Strip */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-technical text-[10px] text-[#86868B] uppercase mr-1">
                        DISIPLIN:
                      </span>
                      {prog.disciplines.map((d) => (
                        <span
                          key={d}
                          className="font-technical text-[10px] uppercase px-2.5 py-0.5 bg-white/5 border border-white/10 text-[#F5F5F7] rounded-xs"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {isInvitation ? (
                      <span className="font-technical text-[11px] text-[#D91F2C] font-bold uppercase tracking-wider">
                        KHUSUS UNDANGAN
                      </span>
                    ) : (
                      <Link
                        href="/kontak"
                        className="font-technical text-[11px] text-[#86868B] hover:text-[#D91F2C] inline-flex items-center gap-1 uppercase tracking-wider transition-colors"
                      >
                        <span>KOORDINASI KONTINGEN</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Invitation Program Clarification Note — Tactical Box */}
          <div className="p-8 bg-[#111114] border border-white/10 rounded-sm space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#D91F2C]">
              <Info className="w-4 h-4 shrink-0" />
              <span className="font-technical text-xs uppercase font-bold tracking-wider">
                CATATAN RESMI KATEGORI UNDANGAN (INVITATION ONLY)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
              Program <strong>Kelas Bintang</strong> dan <strong>Kelas Mega Bintang</strong> merupakan partai invitasi eksklusif yang diatur langsung oleh promotor dan Pengprov KBI DIY. Kategori ini <strong>tidak dibuka untuk pendaftaran umum</strong>. Seluruh proses pemilihan atlet didasarkan pada kurasi prestasi dan kualifikasi teknis resmi.
            </p>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────
          TAB 2: 5 COMPETITION DISCIPLINES (WAKO STANDARDS)
         ───────────────────────────────────────────────────────────────── */}
      {activeTab === "DISCIPLINES" && (
        <div className="space-y-12">
          {/* Header Explanation */}
          <div className="max-w-3xl space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              DISIPLIN STANDAR WAKO DI JKBF 2026
            </h2>
            <p className="text-sm text-[#86868B] font-sans leading-relaxed">
              Seluruh nomor perlombaan di Jogja Kickboxing Festival dijalankan mengacu pada regulasi resmi <strong>World Association of Kickboxing Organizations (WAKO)</strong> yang terbagi ke dalam dua divisi utama: <strong>Tatami</strong> (Controlled Contact) dan <strong>Ringsport</strong> (Full Contact).
            </p>
          </div>

          {/* 5 Disciplines Cards Grid — Combat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EVENT_CONFIG.disciplines.map((d, i) => {
              const isRingsport = d.category === "RINGSPORT";

              return (
                <div
                  key={d.id}
                  className={`p-8 border flex flex-col justify-between space-y-6 rounded-sm transition-all shadow-xl ${
                    isRingsport
                      ? "bg-[#111114] border-[#D91F2C]/40 hover:border-[#D91F2C]"
                      : "bg-[#111114] border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-technical text-[10px] uppercase font-bold tracking-[0.25em] text-[#D91F2C]">
                        0{i + 1} / {d.category}
                      </span>
                      <span
                        className={`font-technical text-[9px] uppercase px-3 py-1 rounded-xs border ${
                          isRingsport
                            ? "bg-[#D91F2C]/15 border-[#D91F2C]/40 text-[#D91F2C] font-semibold"
                            : "bg-white/5 border-white/10 text-[#86868B]"
                        }`}
                      >
                        {isRingsport ? "RING TALI" : "MATRAS TATAMI"}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                      {d.name}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#86868B] leading-relaxed">
                      {d.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] space-y-2">
                    <span className="font-technical text-[10px] uppercase text-[#86868B] block">
                      DITERAPKAN PADA PROGRAM:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {d.applicableIn.map((app) => (
                        <span
                          key={app}
                          className="font-technical text-[10px] uppercase px-2.5 py-0.5 bg-white/5 border border-white/10 text-[#F5F5F7] rounded-xs"
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

          {/* Tatami vs Ringsport Comparison Matrix — Combat Matrix */}
          <div className="p-8 sm:p-10 bg-[#111114] border border-white/10 rounded-sm space-y-6 shadow-xl">
            <div className="space-y-1">
              <span className="font-technical text-xs uppercase font-bold tracking-[0.2em] text-[#D91F2C]">
                KOMPARASI REGULASI
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                PERBEDAAN DIVISI TATAMI VS RINGSPORT
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs font-sans text-[#86868B] leading-relaxed">
              <div className="p-6 bg-black/60 border border-white/10 rounded-xs space-y-3">
                <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block">
                  DIVISI TATAMI (POINT FIGHTING &amp; KICK LIGHT)
                </span>
                <p>
                  Pertandingan dilakukan di atas matras tatami datar. Mengedepankan prinsip <em>controlled contact</em> — kecepatan serangan, keakuratan penempatan pukulan dan tendangan, serta pertahanan teknik tinggi. Serangan membabi buta dan kekuatan berlebihan yang tidak terkontrol dilarang dan dikenai penalti wasit.
                </p>
                <div className="pt-3 border-t border-white/[0.08] space-y-1 font-technical text-[11px] text-[#C4C4CC]">
                  <p>• Area Tanding: Matras Tatami 8×8 Meter</p>
                  <p>• Kontak: Controlled &amp; Technical Precision</p>
                  <p>• Kategori Usia: Children (7-9), Cadets (10-15), Junior (16-18), Senior (19-40)</p>
                </div>
              </div>

              <div className="p-6 bg-black/60 border border-white/10 rounded-xs space-y-3">
                <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase block">
                  DIVISI RINGSPORT (LOW KICK, FULL CONTACT &amp; K-1 STYLE)
                </span>
                <p>
                  Pertandingan dilangsungkan di atas ring tali kejuaraan dengan ukuran resmi. Memperbolehkan serangan berkekuatan penuh (<em>full power striking</em>). Pada disiplin Low Kick dan K-1 Style, serangan tendangan ke area paha diperbolehkan. Pada nomor K-1 Style, serangan lutut tunggal langsung ke tubuh lawan diperkenankan.
                </p>
                <div className="pt-3 border-t border-white/[0.08] space-y-1 font-technical text-[11px] text-[#C4C4CC]">
                  <p>• Area Tanding: Ring Tinju Standar Tali Kejuaraan</p>
                  <p>• Kontak: Full Power Striking (KO diperbolehkan)</p>
                  <p>• Penilaian: 10-Point Must System oleh 3 Juri Bersertifikasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────
          BOTTOM OFFICIAL REGISTRATION & COORDINATION CARD — ARENA COMBAT DOCK
         ───────────────────────────────────────────────────────────────── */}
      <div className="p-8 sm:p-12 bg-gradient-to-b from-[#18181B] via-[#111114] to-[#0A0A0C] border border-white/15 rounded-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
        <div className="space-y-4 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#D91F2C] text-white rounded-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider">
              {registrationConfig.statusLabel} HINGGA {registrationConfig.displayDeadline}
            </span>
          </div>

          <h4 className="font-display text-2xl sm:text-4xl uppercase tracking-wider text-white">
            DAFTARKAN DIRIMU KE KEJUARAAN JKBF 2026
          </h4>
          <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
            {registrationConfig.supportingText} Pengisian data atlet, pemilihan nomor pertandingan, dan unggah berkas dilakukan langsung melalui formulir pendaftaran resmi Google Form.
          </p>
          <p className="text-xs font-technical text-[#86868B]">
            Butuh bantuan teknis? Hubungi admin fighter (<strong className="text-white">{registrationConfig.adminName}</strong>).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto relative z-10">
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm sm:text-base tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 rounded-sm"
          >
            <span>DAFTAR SEKARANG</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={jkbfLinks.fighterSupportWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F5F7] font-display text-sm sm:text-base tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 rounded-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#D91F2C]" />
            <span>ADMIN FIGHTER</span>
          </a>
        </div>
      </div>

    </div>
  );
}

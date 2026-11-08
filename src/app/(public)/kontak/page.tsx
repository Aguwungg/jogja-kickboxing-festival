import Link from "next/link";
import { Clock, ArrowUpRight, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";
import { jkbfLinks } from "@/lib/event-config";

export const metadata = {
  title: "Kontak & Sekretariat Panitia | JKBF 2026",
  description:
    "Hubungi panitia resmi Jogja Kickboxing Festival 2026 langsung via WhatsApp untuk kemitraan sponsor, pendaftaran fighter, dan informasi event.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">

      {/* ═════════════════════════════════════════════════════════════════════
          1. APPLE KEYNOTE HERO HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-8 sm:pb-10 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            HUBUNGI KAMI • SEKRETARIAT RESMI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
              <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#B0B0B8] bg-clip-text text-transparent">
                MARI
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF3B30] to-[#D91F2C] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(217,31,44,0.5)]">
                TERHUBUNG.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm md:text-base text-[#86868B] font-sans leading-relaxed">
              Hubungi langsung koordinator resmi festival via WhatsApp untuk pendaftaran atlet, sponsorship brand, atau perwasitan WAKO.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ULTRA-COMPACT DIRECT WHATSAPP HOTLINES (APPLE BENTO LIST)
          Super slim rows, zero endless scrolling. All 3 fit on 1 mobile screen!
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 w-full flex-1">
        
        <div className="mb-4 sm:mb-6">
          <p className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold mb-0.5">
            KOMUNIKASI LANGSUNG
          </p>
          <h2 className="font-display text-xl sm:text-3xl uppercase tracking-tight text-white">
            NARAHUBUNG RESMI PANITIA
          </h2>
        </div>

        {/* 3 Ultra-Compact Coordinator Apple Bento Rows */}
        <div className="space-y-2.5 sm:space-y-3.5 max-w-4xl">

          {/* Coordinator 1: Fighter Registration */}
          <div className="p-3.5 sm:p-5 bg-gradient-to-r from-[#1C1C1E] via-[#161617] to-[#121214] border border-white/[0.08] hover:border-[#D91F2C]/40 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#D91F2C] font-display text-sm sm:text-lg font-black shrink-0">
                PP
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base sm:text-2xl uppercase tracking-wide text-white truncate">
                    PRIYA PRATAMA
                  </h3>
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] text-[10px] font-technical uppercase font-bold tracking-wider">
                    ADMIN REGISTRASI
                  </span>
                </div>
                <p className="font-technical text-[10px] sm:text-xs text-[#D91F2C] sm:text-[#86868B] uppercase font-semibold tracking-wider truncate mt-0.5">
                  Registrasi Fighter • Berkas &amp; Kelas Tanding
                </p>
              </div>
            </div>

            <a
              href={jkbfLinks.fighterSupportWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D91F2C] to-[#EF3340] hover:scale-105 active:scale-95 text-white font-display text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-md shadow-red-950/40 inline-flex items-center justify-center gap-1.5 rounded-full shrink-0"
              aria-label="Chat WhatsApp Priya Pratama"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">CHAT </span>
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

          {/* Coordinator 2: Partnership & Sponsorship */}
          <div className="p-3.5 sm:p-5 bg-gradient-to-r from-[#1C1C1E] via-[#161617] to-[#121214] border border-white/[0.08] hover:border-[#D91F2C]/40 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-display text-sm sm:text-lg font-black shrink-0">
                AR
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base sm:text-2xl uppercase tracking-wide text-white truncate">
                    ARDI
                  </h3>
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F5F7] text-[10px] font-technical uppercase font-bold tracking-wider">
                    SPONSORSHIP
                  </span>
                </div>
                <p className="font-technical text-[10px] sm:text-xs text-[#D91F2C] sm:text-[#86868B] uppercase font-semibold tracking-wider truncate mt-0.5">
                  Kemitraan • Sponsorship &amp; Brand Partnership
                </p>
              </div>
            </div>

            <a
              href={jkbfLinks.partnershipWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D91F2C] to-[#EF3340] hover:scale-105 active:scale-95 text-white font-display text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-md shadow-red-950/40 inline-flex items-center justify-center gap-1.5 rounded-full shrink-0"
              aria-label="Chat WhatsApp Ardi"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">CHAT </span>
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

          {/* Coordinator 3: Technical General (VALE - NOW WHATSAPP) */}
          <div className="p-3.5 sm:p-5 bg-gradient-to-r from-[#1C1C1E] via-[#161617] to-[#121214] border border-white/[0.08] hover:border-[#D91F2C]/40 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-display text-sm sm:text-lg font-black shrink-0">
                VL
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base sm:text-2xl uppercase tracking-wide text-white truncate">
                    VALE
                  </h3>
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F5F7] text-[10px] font-technical uppercase font-bold tracking-wider">
                    KOORDINATOR TEKNIS
                  </span>
                </div>
                <p className="font-technical text-[10px] sm:text-xs text-[#86868B] uppercase font-semibold tracking-wider truncate mt-0.5">
                  Operasional Lapangan &amp; Perwasitan WAKO
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/6285336586597?text=Halo%20Vale%20(Koordinator%20Teknis%20JKBF%202026)%2C%20saya%20ingin%20bertanya%20seputar%20teknis%20pertandingan."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#D91F2C] to-[#EF3340] hover:scale-105 active:scale-95 text-white font-display text-[11px] sm:text-xs tracking-wider uppercase transition-all shadow-md shadow-red-950/40 inline-flex items-center justify-center gap-1.5 rounded-full shrink-0"
              aria-label="Chat WhatsApp Vale"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">CHAT </span>
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. SECONDARY UTILITY STRIP (APPLE BENTO TILES)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-4xl">

          {/* Tile 1: Response Time & Office Hours */}
          <div className="p-4 sm:p-5 bg-[#161617] border border-white/[0.08] rounded-2xl sm:rounded-3xl flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-xl shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                JAM LAYANAN SEKRETARIAT
              </span>
              <p className="font-display text-sm sm:text-base uppercase tracking-wide text-white mt-0.5">
                Senin – Sabtu, 09:00 – 18:00 WIB
              </p>
              <p className="text-[10px] sm:text-[11px] text-[#86868B] mt-0.5">
                Target respon WhatsApp maksimal 1 × 24 jam kerja.
              </p>
            </div>
          </div>

          {/* Tile 2: Instant FAQ */}
          <div className="p-4 sm:p-5 bg-[#161617] border border-white/[0.08] rounded-2xl sm:rounded-3xl flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-white/5 border border-white/10 text-white rounded-xl shrink-0">
              <HelpCircle className="w-4 h-4 text-[#D91F2C]" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                JAWABAN CEPAT
              </span>
              <p className="font-display text-sm sm:text-base uppercase tracking-wide text-white mt-0.5">
                Pusat Tanya Jawab (FAQ)
              </p>
              <Link
                href="/faq"
                className="text-[10px] sm:text-[11px] text-[#D91F2C] hover:underline font-technical uppercase font-bold inline-flex items-center gap-1 mt-0.5"
              >
                <span>LIHAT 8 JAWABAN RESMI</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Tile 3: Official Verification */}
          <div className="p-4 sm:p-5 bg-[#161617] border border-white/[0.08] rounded-2xl sm:rounded-3xl flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-xl shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                OTORITAS RESMI
              </span>
              <p className="font-display text-sm sm:text-base uppercase tracking-wide text-white mt-0.5">
                Pengprov KBI DIY
              </p>
              <p className="text-[10px] sm:text-[11px] text-[#86868B] mt-0.5">
                Bersama Noise Comm Indonesia.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

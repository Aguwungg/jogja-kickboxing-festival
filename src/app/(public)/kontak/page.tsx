import Link from "next/link";
import { Clock, ArrowUpRight, MessageCircle, Phone, HelpCircle, ShieldCheck } from "lucide-react";
import { EVENT_CONFIG, jkbfLinks, registrationConfig } from "@/lib/event-config";

export const metadata = {
  title: "Kontak & Sekretariat Panitia | JKBF 2026",
  description:
    "Hubungi panitia resmi Jogja Kickboxing Festival 2026 untuk kemitraan sponsor, pendaftaran fighter, dan informasi event.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-28 lg:pt-36 pb-32 font-sans">

      {/* ═════════════════════════════════════════════════════════════════════
          1. APPLE KEYNOTE HERO HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em] font-bold">
            HUBUNGI KAMI • SEKRETARIAT RESMI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
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
            <p className="text-sm sm:text-base text-[#86868B] font-sans leading-relaxed">
              Hubungi langsung koordinator resmi festival untuk konsultasi pendaftaran atlet, proposal sponsorship brand, atau informasi teknis kejuaraan.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. DIRECT WHATSAPP HOTLINES (APPLE BENTO SPEC CARDS)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 w-full flex-1">
        
        <div className="mb-8">
          <p className="font-technical text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold mb-1">
            KOMUNIKASI LANGSUNG
          </p>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
            NARAHUBUNG RESMI PANITIA
          </h2>
        </div>

        {/* 3 Main Coordinator Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Coordinator 1: Fighter Registration */}
          <div className="group relative p-8 bg-gradient-to-b from-[#1C1C1E] to-[#161617] border border-white/[0.08] hover:border-[#D91F2C]/50 rounded-3xl lg:rounded-[32px] transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] text-[11px] font-technical uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] animate-pulse" />
                <span>ADMIN REGISTRASI</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  PRIYA PRATAMA
                </h3>
                <p className="font-technical text-xs text-[#D91F2C] uppercase font-bold tracking-wider mt-1">
                  Konsultasi Fighter &amp; Berkas Atlet
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Layanan pertanyaan seputar formulir pendaftaran, pembagian nomor kejuaraan, pengunggahan berkas medis, dan verifikasi atlet.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3.5 bg-gradient-to-r from-[#D91F2C] to-[#EF3340] hover:scale-[1.02] active:scale-[0.98] text-white font-display text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-950/50 inline-flex items-center justify-center gap-2 rounded-full"
                aria-label="Chat WhatsApp Priya Pratama"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coordinator 2: Partnership & Sponsorship */}
          <div className="group relative p-8 bg-gradient-to-b from-[#1C1C1E] to-[#161617] border border-white/[0.08] hover:border-[#D91F2C]/50 rounded-3xl lg:rounded-[32px] transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[#F5F5F7] text-[11px] font-technical uppercase font-bold tracking-wider">
                <span>KEMITRAAN &amp; SPONSOR</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  ARDI
                </h3>
                <p className="font-technical text-xs text-[#D91F2C] uppercase font-bold tracking-wider mt-1">
                  Partnership &amp; Brand Collaboration
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Konsultasi paket kemitraan brand, aktivasi booth festival, kerja sama media partner, dan sinergi sponsor resmi festival combat.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href={jkbfLinks.partnershipWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3.5 bg-gradient-to-r from-[#D91F2C] to-[#EF3340] hover:scale-[1.02] active:scale-[0.98] text-white font-display text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-950/50 inline-flex items-center justify-center gap-2 rounded-full"
                aria-label="Chat WhatsApp Ardi"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coordinator 3: Technical General */}
          <div className="group relative p-8 bg-gradient-to-b from-[#1C1C1E] to-[#161617] border border-white/[0.08] hover:border-white/20 rounded-3xl lg:rounded-[32px] transition-all duration-300 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-[#F5F5F7] text-[11px] font-technical uppercase font-bold tracking-wider">
                <span>KOORDINATOR TEKNIS</span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  VALE
                </h3>
                <p className="font-technical text-xs text-[#86868B] uppercase font-semibold tracking-wider mt-1">
                  Operasional Lapangan &amp; Perwasitan WAKO
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                Koordinasi teknis penimbangan badan atlet (*weigh-in*), perlengkapan keselamatan tanding WAKO, dan tata tertib official kontingen.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href="https://wa.me/6285336586597"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-[#F5F5F7] hover:text-white font-display text-sm tracking-wider uppercase transition-all inline-flex items-center justify-center gap-2 rounded-full backdrop-blur-md"
                aria-label="Hubungi Vale"
              >
                <Phone className="w-4 h-4 text-[#D91F2C]" />
                <span>+62 853-3658-6597</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. SECONDARY UTILITY STRIP (APPLE BENTO TILES)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tile 1: Response Time & Office Hours */}
          <div className="p-6 sm:p-7 bg-[#161617] border border-white/[0.08] rounded-3xl flex items-start gap-4">
            <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-2xl shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                JAM LAYANAN SEKRETARIAT
              </span>
              <p className="font-display text-lg uppercase tracking-wide text-white mt-0.5">
                Senin – Sabtu, 09:00 – 18:00 WIB
              </p>
              <p className="text-xs text-[#86868B] mt-1">
                Target respon WhatsApp maksimal 1 × 24 jam kerja.
              </p>
            </div>
          </div>

          {/* Tile 2: Instant FAQ */}
          <div className="p-6 sm:p-7 bg-[#161617] border border-white/[0.08] rounded-3xl flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 text-white rounded-2xl shrink-0">
              <HelpCircle className="w-5 h-5 text-[#D91F2C]" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                JAWABAN CEPAT
              </span>
              <p className="font-display text-lg uppercase tracking-wide text-white mt-0.5">
                Pusat Tanya Jawab (FAQ)
              </p>
              <Link
                href="/faq"
                className="text-xs text-[#D91F2C] hover:underline font-technical uppercase font-bold inline-flex items-center gap-1 mt-1"
              >
                <span>LIHAT 8 JAWABAN RESMI</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Tile 3: Official Verification */}
          <div className="p-6 sm:p-7 bg-[#161617] border border-white/[0.08] rounded-3xl flex items-start gap-4">
            <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-2xl shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                OTORITAS PENYELENGGARA
              </span>
              <p className="font-display text-lg uppercase tracking-wide text-white mt-0.5">
                Pengprov KBI DIY
              </p>
              <p className="text-xs text-[#86868B] mt-1">
                Bersama mitra pelaksana Noise Comm Indonesia.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

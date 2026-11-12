import Link from "next/link";
import { ArrowUpRight, MessageCircle, HelpCircle, ShieldCheck, Calendar, MapPin } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";
import { InstagramIcon, TikTokIcon } from "@/components/layout/SocialIcons";

export const metadata = {
  title: "Kontak & Media Sosial Resmi | JKBF 2026",
  description:
    "Hubungi panitia resmi Jogja Kickboxing Festival 2026 langsung via WhatsApp untuk bantuan pendaftaran fighter dan kemitraan sponsor, serta ikuti kanal media sosial resmi.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">

      {/* ═════════════════════════════════════════════════════════════════════
          1. COMBAT SPORT HERO HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-8 sm:pb-10 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            HUBUNGI KAMI // KONTAK RESMI PANITIA
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
              Hubungi langsung koordinator resmi festival melalui WhatsApp untuk bantuan pendaftaran fighter atau kemitraan brand &amp; sponsorship.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CONFIRMED OPERATIONAL WHATSAPP CONTACTS (PRYIA & ARDI ONLY)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 w-full">
        <div className="mb-5 sm:mb-6">
          <p className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold mb-0.5">
            KOMUNIKASI LANGSUNG
          </p>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            KONTAK OPERASIONAL RESMI WHATSAPP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          {EVENT_CONFIG.contact.coordinators.map((coord, idx) => (
            <div
              key={coord.id}
              className="p-6 sm:p-8 bg-[#111114] border border-white/10 hover:border-[#D91F2C] rounded-sm transition-all duration-300 shadow-xl flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                <span
                  className={`inline-flex px-2.5 py-1 rounded-xs text-[10px] font-technical uppercase font-bold tracking-wider border ${
                    idx === 0
                      ? "bg-[#D91F2C]/15 border-[#D91F2C]/40 text-[#D91F2C]"
                      : "bg-white/[0.06] border-white/15 text-[#F5F5F7]"
                  }`}
                >
                  {coord.badge}
                </span>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                    {coord.name}
                  </h3>
                  <p className="font-technical text-xs uppercase text-[#86868B] tracking-wider mt-0.5">
                    {coord.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans leading-relaxed">
                  {coord.description}
                </p>
              </div>

              <a
                href={coord.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-sm sm:text-base tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(217,31,44,0.35)] inline-flex items-center justify-center gap-2 rounded-xs"
                aria-label={`${coord.ctaLabel} (${coord.name} via WhatsApp)`}
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{coord.ctaLabel}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. STAY CONNECTED — OFFICIAL SOCIAL MEDIA (INSTAGRAM & TIKTOK ONLY)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pb-10 sm:pb-14 w-full">
        <div className="mb-5 sm:mb-6 pt-8 border-t border-white/[0.08]">
          <p className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold mb-0.5">
            STAY CONNECTED
          </p>
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            KANAL MEDIA SOSIAL RESMI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          <a
            href={EVENT_CONFIG.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ikuti Instagram Resmi JKBF (@jogjakickboxingfestival)"
            className="group p-6 bg-[#111114] border border-white/10 hover:border-[#D91F2C] rounded-sm transition-all flex items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-[#D91F2C]/15 border border-[#D91F2C]/40 flex items-center justify-center text-[#D91F2C] group-hover:bg-[#D91F2C] group-hover:text-white transition-colors shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-technical text-[10px] uppercase tracking-widest text-[#86868B] block">
                  INSTAGRAM RESMI
                </span>
                <p className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white mt-0.5">
                  {EVENT_CONFIG.social.instagram.handle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#86868B] group-hover:text-[#D91F2C] transition-colors shrink-0" />
          </a>

          <a
            href={EVENT_CONFIG.social.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ikuti TikTok Resmi JKBF (@jogjakickboxingfestival)"
            className="group p-6 bg-[#111114] border border-white/10 hover:border-[#D91F2C] rounded-sm transition-all flex items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C] transition-colors shrink-0">
                <TikTokIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-technical text-[10px] uppercase tracking-widest text-[#86868B] block">
                  TIKTOK RESMI
                </span>
                <p className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white mt-0.5">
                  {EVENT_CONFIG.social.tiktok.handle}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#86868B] group-hover:text-[#D91F2C] transition-colors shrink-0" />
          </a>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. EVENT SNAPSHOT & QUICK LINKS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl">
          <div className="p-4 sm:p-5 bg-[#111114] border border-white/10 rounded-sm flex items-start gap-3">
            <div className="p-2 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-xs shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                JADWAL &amp; VENUE RESMI
              </span>
              <p className="font-display text-sm sm:text-base uppercase tracking-wide text-white mt-0.5">
                {EVENT_CONFIG.dates.display}
              </p>
              <Link
                href="/venue"
                className="text-[10px] sm:text-[11px] text-[#D91F2C] hover:underline font-technical uppercase font-bold inline-flex items-center gap-1 mt-0.5"
              >
                <MapPin className="w-3 h-3" />
                <span>{EVENT_CONFIG.venue.fullDisplay}</span>
              </Link>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#111114] border border-white/10 rounded-sm flex items-start gap-3">
            <div className="p-2 bg-white/5 border border-white/10 text-white rounded-xs shrink-0">
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
                <span>LIHAT FAQ RESMI</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#111114] border border-white/10 rounded-sm flex items-start gap-3">
            <div className="p-2 bg-[#D91F2C]/10 border border-[#D91F2C]/25 text-[#D91F2C] rounded-xs shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-wider text-[#86868B]">
                PENYELENGGARA RESMI
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

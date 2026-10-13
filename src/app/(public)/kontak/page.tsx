import ContactFormClient from "@/components/contact/ContactFormClient";
import { Mail, MapPin, Clock, Calendar } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Kontak & Sekretariat Resmi | JKBF 2026",
  description: "Hubungi panitia pelaksana Jogja Kickboxing Festival & Redy Championship 2 untuk informasi kemitraan, media, dan tiket.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            PUSAT LAYANAN & SEKRETARIAT RESMI
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            HUBUNGI PANITIA
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            KEMITRAAN, MEDIA, DAN LAYANAN INFORMASI FESTIVAL
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Terbuka untuk kolaborasi sponsor, pendaftaran sasana kickboxing, akreditasi liputan media pers, serta kerja sama tenant festival di GOR UNY Yogyakarta.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          {/* Right Information Details */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            
            {/* Address */}
            <div className="p-8 bg-[#141416] border border-white/10 space-y-4">
              <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                SEKRETARIAT UTAMA
              </span>
              <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                GELANGGANG OLAHRAGA UNY
              </h3>
              <p className="text-xs text-[#8F8E8B] font-mono leading-relaxed">
                Jl. Colombo No. 1, Caturtunggal, Kec. Depok, Kabupaten Sleman, D.I. Yogyakarta 55281
              </p>
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-[#8F8E8B]">
                JAM OPERASIONAL: SENIN—SABTU, 09:00—17:00 WIB
              </div>
            </div>

            {/* Email & Event Dates */}
            <div className="p-8 bg-[#141416] border border-white/10 space-y-4">
              <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                KANAL RESMI
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#8F8E8B]">EMAIL UMUM</span>
                  <span className="text-[#F4F0E8] font-bold">info@jogjakickboxing.com</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#8F8E8B]">MEDIA & PERS</span>
                  <span className="text-[#F4F0E8] font-bold">media@jogjakickboxing.com</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#8F8E8B]">EVENT DATES</span>
                  <span className="text-[#D91F2C] font-bold">12—14 DESEMBER 2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

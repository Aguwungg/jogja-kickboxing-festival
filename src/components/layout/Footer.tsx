import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-jkb-charcoal border-t border-white/5 pt-16 pb-8 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-black text-4xl text-[#F6F3EC] tracking-wider uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                JKB <span className="text-[#D21F2B]">2026</span>
              </span>
            </Link>
            <p className="text-[#90929A] font-sans text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Jogja Kickboxing Festival & Redy Championship 2.
              Pertunjukan sportainment terbesar di Yogyakarta. Di Balik Kalem Ada Pertarungan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-jkb-offwhite mb-4">Navigasi</h4>
            <ul className="space-y-2 font-sans text-sm text-jkb-gray">
              <li><Link href="/jadwal" className="hover:text-jkb-red transition-colors">Jadwal Acara</Link></li>
              <li><Link href="/championship" className="hover:text-jkb-red transition-colors">Fighter Center</Link></li>
              <li><Link href="/city-pride" className="hover:text-jkb-red transition-colors">City Pride Voting</Link></li>
              <li><Link href="/merch" className="hover:text-jkb-red transition-colors">Official Merch</Link></li>
              <li><Link href="/creator" className="hover:text-jkb-red transition-colors">Creator Hub</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-jkb-offwhite mb-4">Informasi</h4>
            <ul className="space-y-2 font-sans text-sm text-jkb-gray">
              <li><Link href="/tentang" className="hover:text-jkb-red transition-colors">Tentang JKB</Link></li>
              <li><Link href="/venue" className="hover:text-jkb-red transition-colors">Venue & Transportasi</Link></li>
              <li><Link href="/faq" className="hover:text-jkb-red transition-colors">FAQ</Link></li>
              <li><Link href="/kontak" className="hover:text-jkb-red transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display uppercase tracking-widest text-jkb-offwhite mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-jkb-black border border-white/5 flex items-center justify-center text-jkb-gray hover:text-white hover:border-jkb-red hover:bg-jkb-red/10 transition-all font-display text-sm">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-jkb-black border border-white/5 flex items-center justify-center text-jkb-gray hover:text-white hover:border-jkb-red hover:bg-jkb-red/10 transition-all font-display text-sm">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-jkb-black border border-white/5 flex items-center justify-center text-jkb-gray hover:text-white hover:border-jkb-red hover:bg-jkb-red/10 transition-all font-display text-sm">
                YT
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-jkb-black border border-white/5 flex items-center justify-center text-jkb-gray hover:text-white hover:border-jkb-red hover:bg-jkb-red/10 transition-all font-display text-sm">
                FB
              </a>
            </div>
            <p className="text-jkb-gray font-sans text-xs mt-6">
              Official hashtag:<br/>
              <span className="text-jkb-red font-medium">#JOGJAPUNYANYALI</span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-jkb-gray text-xs font-sans">
            &copy; {new Date().getFullYear()} JKB 2026. PT Swara Cipta Sarana. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-sans text-jkb-gray">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

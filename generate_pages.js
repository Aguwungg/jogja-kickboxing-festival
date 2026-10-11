const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'tentang', title: 'TENTANG JKB 2026', desc: 'Informasi resmi Jogja Kickboxing Festival & Redy Championship 2.' },
  { path: 'jadwal', title: 'JADWAL FESTIVAL', desc: 'Jadwal lengkap pertandingan dan panggung hiburan.' },
  { path: 'lineup', title: 'MUSIC LINEUP', desc: 'Daftar musisi dan artis yang akan mengguncang panggung JKB 2026.' },
  { path: 'fighters', title: 'DATABASE FIGHTER', desc: 'Profil lengkap dan statistik petarung.' },
  { path: 'championship', title: 'CHAMPIONSHIP', desc: 'Informasi sabuk, divisi, dan regulasi turnamen.' },
  { path: 'bracket', title: 'LIVE BRACKET', desc: 'Pohon turnamen dan hasil pertandingan.' },
  { path: 'city-pride', title: 'CITY PRIDE', desc: 'Kampanye voting regional. Buktikan kotamu yang terbaik.' },
  { path: 'creator', title: 'CREATOR HUB', desc: 'Platform submit konten untuk kreator Jogja.' },
  { path: 'merch', title: 'OFFICIAL MERCH', desc: 'Katalog merchandise eksklusif JKB 2026.' },
  { path: 'ppv', title: 'LIVE STREAMING', desc: 'Akses siaran langsung berbayar BigMo Exhibition.' },
  { path: 'venue', title: 'VENUE EXPERIENCE', desc: 'Informasi lokasi, peta, dan panduan pengunjung di GOR UNY.' },
  { path: 'faq', title: 'FAQ', desc: 'Pertanyaan yang sering diajukan seputar event.' },
  { path: 'kontak', title: 'KONTAK KAMI', desc: 'Hubungi penyelenggara untuk informasi lebih lanjut.' },
  { path: 'kebijakan-privasi', title: 'KEBIJAKAN PRIVASI', desc: 'Informasi pengelolaan data pengguna.' },
  { path: 'syarat-ketentuan', title: 'SYARAT & KETENTUAN', desc: 'Aturan hukum penggunaan platform JKB 2026.' }
];

const template = (title, desc) => `"use client";

import { PageTransition, SectionReveal } from "@/lib/motion";
import Link from "next/link";

export default function Page() {
  return (
    <PageTransition className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#0B0B0F] pt-24 px-4 pb-16">
      <SectionReveal className="max-w-4xl mx-auto w-full text-center mt-12 border border-white/10 bg-[#17181D] p-12 rounded-sm shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D21F2B]/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
        
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 drop-shadow-lg" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          ${title}
        </h1>
        <p className="text-[#90929A] text-lg font-sans mb-8 max-w-2xl mx-auto">
          ${desc}
        </p>
        
        <div className="w-16 h-1 bg-[#D21F2B] mx-auto mb-8" />
        
        <p className="text-white/60 font-sans italic text-sm mb-12">
          Halaman ini dalam status "Verifikasi Data". Konten publik sedang dikerjakan melalui Administrator.
        </p>
        
        <Link href="/" className="inline-block bg-transparent border border-white/20 hover:bg-white/10 text-white uppercase tracking-widest text-sm px-8 py-4 rounded-sm transition-all font-bold" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          &larr; KEMBALI KE BERANDA
        </Link>
      </SectionReveal>
    </PageTransition>
  );
}
`;

routes.forEach(route => {
  const filePath = path.join(__dirname, 'src', 'app', route.path, 'page.tsx');
  fs.writeFileSync(filePath, template(route.title, route.desc));
});

console.log('Pages generated successfully.');

# JKBF V9.2 — COMPLETE SPACIOUS UI/UX REBUILD
## 07. CHANGED FILE INVENTORY & AUDIT LOG

---

### 1. RINGKASAN PERUBAHAN BERKAS

| Kategori Berkas | Jumlah Berkas | Keterangan |
| :--- | :---: | :--- |
| **Komponen Global Layout** | 2 | `Navbar.tsx`, `Footer.tsx` |
| **Halaman Publik Next.js App Router** | 21 | Rute-rute di dalam `src/app/(public)/` |
| **Komponen Klien Interaktif (*Client Components*)** | 12 | Modul interaktif di `src/components/` |
| **Skrip QA Otomatisasi & Tangkapan Layar** | 1 | `scratch/capture-v9-2-spacious.js` |
| **Dokumen Arsitektur & Laporan V9.2** | 8 | Laporan lengkap di `docs/JKBF_V9_2_SPACIOUS_UI/` |
| **Aset Tangkapan Layar Browser Asli** | 92 | 23 rute × 4 profil viewport di `screenshots/` |
| **Total Berkas Terlibat** | **136** | Terisolasi pada branch `redesign/v9-2-spacious-rebuild` |

---

### 2. INVENTARISASI DETAIL BERKAS SUMBER KODE

#### A. Komponen Global Layout
1. [Navbar.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/layout/Navbar.tsx):
   - Redesain wordmark minimalis `JKBF.`.
   - Navigasi teks uppercase berjarak lega.
   - Tombol aksi kontras tinggi `INFO TIKET ↗`.
   - Drawer mobile lapang dengan tautan navigasi berskala besar tanpa tombol kecil bertumpuk.
2. [Footer.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/layout/Footer.tsx):
   - Layout broadsheet editorial dengan padding vertikal `py-20`.
   - Manifesto resmi kampanye: `#JOGJAPUNYANYALI • DI BALIK KALEM`.
   - Pembersihan seluruh widget dashboard repetitif.

#### B. Halaman Publik (App Router Rute Publik)
1. [HomeClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/HomeClient.tsx): Asymmetric 50/50 split hero, Dua Dunia section, baris jadwal 3 hari terbuka, City Pride & GOR UNY callout.
2. [jadwal/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/jadwal/page.tsx): Latar Warm Ivory, judul jadwal acara editorial.
3. [championship/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/championship/page.tsx): Hero laga Warm Ivory, 4 sabuk emas divisi berat terbuka, regulasi K-1 rules.
4. [fighters/FighterCenterClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/fighters/FighterCenterClient.tsx): Hero atlet, input pencarian instan, filter divisi, grid kartu atlet lapang.
5. [fighters/[slug]/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/fighters/[slug]/page.tsx): Potret petarung besar, rekor laga, tabel Tale of the Tape terbuka tanpa kartu.
6. [bracket/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/bracket/page.tsx): Halaman turnamen Warm Ivory.
7. [lineup/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/lineup/page.tsx): Hero konser Deep Black, lineup festival musik 3 panggung terbuka.
8. [city-pride/CityPrideClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/city-pride/CityPrideClient.tsx): Hero Warm Ivory, antarmuka voting wilayah DIY dengan live vote tally bar.
9. [creator/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/creator/page.tsx): Hero Deep Black sinematik, alur 3 langkah partisipasi bernomor (`01, 02, 03`).
10. [creator/dashboard/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/creator/dashboard/page.tsx): Layout utilitas 3 kolom tenang (`STATUS AKUN`, `KONTEN SAYA`, `PROFIL`).
11. [merch/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/merch/page.tsx): Lookbook streetwear Warm Ivory, katalog apparel.
12. [merch/[slug]/ProductDetailClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/merch/ProductDetailClient.tsx): Foto produk dominan, pemilih ukuran (S–XXL), selector jumlah, tombol beli.
13. [tiket/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/tiket/page.tsx): Penanggalan raksasa merah `12–14 DESEMBER 2026`, 3 tier tiket resmi, RAWOOH notice.
14. [venue/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/venue/page.tsx): Panduan GOR UNY Yogyakarta, arena badge, panduan rute transportasi umum.
15. [tentang/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/tentang/page.tsx): Hero Deep Black *DI BALIK KALEM*, 3 pilar festival (*The Ring, The Stage, The City*).
16. [faq/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/faq/page.tsx): Latar Warm Ivory, judul pertanyaan umum.
17. [kontak/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/kontak/page.tsx): Latar Warm Ivory, judul kontak dan informasi sekretariat.
18. [syarat-ketentuan/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/syarat-ketentuan/page.tsx): Dokumen broadsheet legal syarat & ketentuan festival.
19. [kebijakan-privasi/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/kebijakan-privasi/page.tsx): Dokumen broadsheet legal kebijakan privasi UU PDP No. 27/2022.
20. [checkout/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/page.tsx): Formulir checkout Warm Ivory dengan opsi Pick-up GOR UNY vs Ekspedisi JNE/J&T.
21. [checkout/success/[orderId]/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/success/[orderId]/page.tsx): Tanda terima pesanan e-receipt broadsheet, tombol cetak bukti pesanan.
22. [ppv/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/ppv/page.tsx): Portal siaran langsung Deep Black, formulir kode akses tiket stream.
23. [ppv/watch/page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/ppv/watch/page.tsx): Video player siaran langsung multi-kamera standby dengan validasi kode akses.

#### C. Komponen Klien Interaktif (*Client Components*)
1. [JadwalClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/schedule/JadwalClient.tsx): Tab hari jadwal `SAB 12 / MIN 13 / SEN 14`, baris acara terbuka.
2. [BracketClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/bracket/BracketClient.tsx): Selektor kelas bobot, bagan 8-man K-1 rules, pengalih putaran ronde di mobile.
3. [CreatorClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/creator/CreatorClient.tsx): Tab form registrasi Creator & Media Pers, validasi input.
4. [MerchCatalogClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/merch/MerchCatalogClient.tsx): Tab kategori streetwear, lookbook produk, cart integration.
5. [CheckoutClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/merch/CheckoutClient.tsx): Form data pengiriman, ringkasan keranjang, safety gate proteksi transaksi.
6. [PpvLandingClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/ppv/PpvLandingClient.tsx): Form kode akses streaming, daftar paket tayangan terlindungi.
7. [PpvWatchClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/ppv/PpvWatchClient.tsx): Canvas pemutar video siaran multi-kamera standby.
8. [FaqClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/faq/FaqClient.tsx): Accordion baris terbuka dengan tombol plus/minus, pencarian instan pertanyaan.
9. [ContactFormClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/contact/ContactFormClient.tsx): Form korespondensi sekretariat panitia.

---

### 3. INTEGRITAS BERKAS YANG TIDAK BOLEH BERUBAH (PRESERVED)

- **Admin Dashboard (`src/app/admin/*`):** 0 perubahan, terisolasi sempurna.
- **Skema Basis Data (`prisma/schema.prisma` & `prisma/dev.db`):** 0 perubahan struktural destruktif.
- **Middleware Keamanan & Proteksi API (`src/middleware.ts`, `src/app/api/*`):** Tetap aktif mengawal otorisasi dan rate limiting.
- **Branch Produksi (`main`):** Bersih, tidak dilakukan merge otomatis maupun deployment.

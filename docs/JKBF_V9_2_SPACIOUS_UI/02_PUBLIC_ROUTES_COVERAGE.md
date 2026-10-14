# JKBF V9.2 — COMPLETE SPACIOUS UI/UX REBUILD
## 02. ALL 23 PUBLIC ROUTES COVERAGE MATRIX

---

### 1. MATRIKS STATUS 23 RUTE PUBLIK

| No | Rute URL | Komponen Utama | Latar Visual | Karakteristik Desain Spacious V9.2 | Status Verifikasi |
| :---: | :--- | :--- | :---: | :--- | :---: |
| **01** | `/` | `HomeClient.tsx` | Deep Black | 50/50 asymmetric split hero, section Dua Dunia, baris jadwal 3 hari terbuka, callout GOR UNY. | ✅ PASS |
| **02** | `/jadwal` | `JadwalClient.tsx` | Warm Ivory | Rundown 3 hari dengan tab `SAB 12 / MIN 13 / SEN 14`, nomor urut merah, pembatas tipis. | ✅ PASS |
| **03** | `/championship` | `championship/page.tsx` | Warm Ivory | Split hero duel fight, 4 sabuk emas kelas berat terbuka, ringkasan regulasi K-1 rules. | ✅ PASS |
| **04** | `/fighters` | `FighterCenterClient.tsx` | Warm Ivory | Split hero atlet, search input minimalis, filter divisi, grid kartu atlet lapang. | ✅ PASS |
| **05** | `/fighters/[slug]` | `fighters/[slug]/page.tsx` | Warm Ivory | Potret petarung besar, rekor pertarungan, tabel Tale of the Tape terbuka. | ✅ PASS |
| **06** | `/bracket` | `BracketClient.tsx` | Warm Ivory | Bagan turnamen gugur K-1 8-man, selektor divisi, navigasi ronde mobile. | ✅ PASS |
| **07** | `/lineup` | `lineup/page.tsx` | Deep Black | Panggung terbuka festival konser, status kurasi fase 1, jadwal 3 panggung festival. | ✅ PASS |
| **08** | `/city-pride` | `CityPrideClient.tsx` | Warm Ivory | Split hero suporter, baris voting wilayah DIY, live tally progress bar via contract API. | ✅ PASS |
| **09** | `/creator` | `CreatorClient.tsx` | Deep Black | Split hero liputan konser, alur 3 langkah partisipasi, formulir registrasi & media pers. | ✅ PASS |
| **10** | `/creator/dashboard` | `creator/dashboard/page.tsx` | Warm Ivory | Panel utilitas tenang 3 kolom (`STATUS AKUN`, `KONTEN SAYA`, `PROFIL`), zero clutter. | ✅ PASS |
| **11** | `/merch` | `MerchCatalogClient.tsx` | Warm Ivory | Split hero streetwear, tab kategori apparel, lookbook produk dengan harga Rupiah & add to cart. | ✅ PASS |
| **12** | `/merch/[slug]` | `ProductDetailClient.tsx` | Warm Ivory | Foto produk besar, pemilih ukuran (S–XXL), selector kuantitas, opsi pickup / ekspedisi. | ✅ PASS |
| **13** | `/tiket` | `tiket/page.tsx` | Warm Ivory | Split hero dengan angka tanggal merah `12–14 DESEMBER 2026`, 3 tier tiket resmi, RAWOOH notice. | ✅ PASS |
| **14** | `/venue` | `venue/page.tsx` | Warm Ivory | Panduan lokasi GOR UNY Colombo Yogyakarta, badge arena melingkar, panduan KRL/Trans Jogja. | ✅ PASS |
| **15** | `/tentang` | `tentang/page.tsx` | Deep Black | Split hero *DI BALIK KALEM*, narasi #JOGJAPUNYANYALI, 3 pilar (*The Ring, The Stage, The City*). | ✅ PASS |
| **16** | `/faq` | `FaqClient.tsx` | Warm Ivory | Accordion baris terbuka dengan tombol plus/minus bersih, instant search, tab kategori. | ✅ PASS |
| **17** | `/kontak` | `ContactFormClient.tsx` | Warm Ivory | Form input bersih bergaris tipis, sekretariat kantor panitia, integrasi `/api/contact`. | ✅ PASS |
| **18** | `/syarat-ketentuan` | `syarat-ketentuan/page.tsx` | Warm Ivory | Format editorial legal broadsheet, ketentuan tiket & wristband, tata tertib arena GOR UNY. | ✅ PASS |
| **19** | `/kebijakan-privasi` | `kebijakan-privasi/page.tsx` | Warm Ivory | Format editorial legal broadsheet, kepatuhan UU No. 27 Tahun 2022 PDP, hak subjek data. | ✅ PASS |
| **20** | `/checkout` | `CheckoutClient.tsx` | Warm Ivory | Form checkout pemesan, opsi Pick-up GOR UNY vs Ekspedisi JNE/J&T, gate transaksi aman. | ✅ PASS |
| **21** | `/checkout/success/[orderId]` | `checkout/success/...` | Warm Ivory | Bukti pesanan e-receipt bersih, tombol cetak struk, status simulasi staging terproteksi. | ✅ PASS |
| **22** | `/ppv` | `PpvLandingClient.tsx` | Deep Black | Split hero siaran langsung, input kode akses tiket streaming, daftar paket terproteksi. | ✅ PASS |
| **23** | `/ppv/watch` | `PpvWatchClient.tsx` | Deep Black | Canvas video player siaran langsung multi-kamera standby dengan validasi kode akses. | ✅ PASS |

---

### 2. KONSISTENSI ELEMEN GLOBAL
- **Global Header (`Navbar.tsx`):**
  - Wordmark bersih `JKBF.`
  - Navigasi direct 5 modul utama: `JADWAL`, `PERTANDINGAN`, `MUSIK`, `MERCH`, `KOMUNITAS`
  - Dropdown `LAINNYA` untuk modul sekunder
  - Tombol aksi kontras tinggi `INFO TIKET ↗`
  - Drawer mobile berskala besar yang bersih dan lega tanpa tombol-tombol kecil bertumpuk.
- **Global Footer (`Footer.tsx`):**
  - Layout broadsheet editorial dengan padding vertikal lapang `py-20`
  - Manifesto kampanye `#JOGJAPUNYANYALI • DI BALIK KALEM`
  - Navigasi tautan terstruktur tanpa widget dashboard repetitif.

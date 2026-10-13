# JKBF V9 — TOTAL PUBLIC FRONTEND REDESIGN
## 03. ALL PUBLIC ROUTES IMPLEMENTATION MATRIX

---

### 1. DAFTAR LENGKAP STATUS IMPLEMENTASI SELURUH RUTE PUBLIK

Semua rute publik (23 rute ditambah komponen global) telah berhasil direkonstruksi total ke sistem visual **V9 Fight Culture Editorial — Clean Cut**:

| # | Rute / Modul | Kelompok Pengalaman | Status V9 | Screenshot Desktop | Screenshot Mobile | Status Regresi Fungsional |
| :-: | :--- | :--- | :-: | :---: | :---: | :-: |
| 1 | `/` (Homepage) | Group A — Global | ✅ 100% V9 | `01_homepage_desktop_viewport.png` | `01_homepage_mobile_viewport.png` | Lolos (Nav, CTA, Ribbon) |
| 2 | `Navbar.tsx` (Global) | Group A — Global | ✅ 100% V9 | Terintegrasi di seluruh viewport | Drawer menu responsif | Lolos (Flyout & Drawer) |
| 3 | `Footer.tsx` (Global) | Group A — Global | ✅ 100% V9 | Terintegrasi di seluruh fullpage | Kolom responsif | Lolos (Sitemap & Tautan) |
| 4 | `/championship` | Group B — Combat | ✅ 100% V9 | `02_championship_desktop_viewport.png` | `02_championship_mobile_viewport.png` | Lolos (Divisi & K-1 Rules) |
| 5 | `/fighters` | Group B — Combat | ✅ 100% V9 | `03_fighters_desktop_viewport.png` | `03_fighters_mobile_viewport.png` | Lolos (Pencarian & Filter Divisi) |
| 6 | `/fighters/[slug]` | Group B — Combat | ✅ 100% V9 | `04_fighter_detail_desktop_viewport.png` | `04_fighter_detail_mobile_viewport.png` | Lolos (Tale of the Tape) |
| 7 | `/bracket` | Group B — Combat | ✅ 100% V9 | `05_bracket_desktop_viewport.png` | `05_bracket_mobile_viewport.png` | Lolos (Bagan Pohon & Round Switcher) |
| 8 | `/lineup` | Group C — Festival | ✅ 100% V9 | `06_lineup_desktop_viewport.png` | `06_lineup_mobile_viewport.png` | Lolos (Kurasi Penampil Musik) |
| 9 | `/jadwal` | Group C — Festival | ✅ 100% V9 | `07_jadwal_desktop_viewport.png` | `07_jadwal_mobile_viewport.png` | Lolos (Day Selector 12-14 Des) |
| 10 | `/venue` | Group C — Festival | ✅ 100% V9 | `08_venue_desktop_viewport.png` | `08_venue_mobile_viewport.png` | Lolos (Akses GOR UNY & Google Maps) |
| 11 | `/tiket` | Group E — Commerce | ✅ 100% V9 | `09_tiket_desktop_viewport.png` | `09_tiket_mobile_viewport.png` | Lolos (Tiering & Akses RAWOOH) |
| 12 | `/city-pride` | Group D — Community | ✅ 100% V9 | `10_city_pride_desktop_viewport.png` | `10_city_pride_mobile_viewport.png` | Lolos (Integrasi Voting API) |
| 13 | `/creator` | Group D — Community | ✅ 100% V9 | `11_creator_hub_desktop_viewport.png` | `11_creator_hub_mobile_viewport.png` | Lolos (Pendaftaran & Akreditasi) |
| 14 | `/creator/dashboard`| Group D — Community | ✅ 100% V9 | `12_creator_dashboard_desktop_viewport.png`| `12_creator_dashboard_mobile_viewport.png`| Lolos (Leaderboard & Poin) |
| 15 | `/merch` | Group E — Commerce | ✅ 100% V9 | `13_merch_desktop_viewport.png` | `13_merch_mobile_viewport.png` | Lolos (Katalog & Cart Drawer) |
| 16 | `/merch/[slug]` | Group E — Commerce | ✅ 100% V9 | `14_merch_detail_desktop_viewport.png` | `14_merch_detail_mobile_viewport.png` | Lolos (Pilihan Size & Beli Sekarang) |
| 17 | `/checkout` | Group E — Commerce | ✅ 100% V9 | `15_checkout_desktop_viewport.png` | `15_checkout_mobile_viewport.png` | Lolos (Validasi Form & Order Action) |
| 18 | `/checkout/success` | Group E — Commerce | ✅ 100% V9 | Terverifikasi dinamis per order | Terverifikasi dinamis per order | Lolos (E-Receipt & Simulator Gate) |
| 19 | `/ppv` | Group F — Streaming| ✅ 100% V9 | `16_ppv_desktop_viewport.png` | `16_ppv_mobile_viewport.png` | Lolos (Gate Otorisasi Siaran) |
| 20 | `/ppv/watch` | Group F — Streaming| ✅ 100% V9 | `17_ppv_watch_desktop_viewport.png` | `17_ppv_watch_mobile_viewport.png` | Lolos (Verifikasi Akses Digital) |
| 21 | `/tentang` | Group G — Info | ✅ 100% V9 | `18_tentang_desktop_viewport.png` | `18_tentang_mobile_viewport.png` | Lolos (Manifesto Di Balik Kalem) |
| 22 | `/faq` | Group G — Info | ✅ 100% V9 | `19_faq_desktop_viewport.png` | `19_faq_mobile_viewport.png` | Lolos (Pencarian & Akordion) |
| 23 | `/kontak` | Group G — Info | ✅ 100% V9 | `20_kontak_desktop_viewport.png` | `20_kontak_mobile_viewport.png` | Lolos (Pengiriman Formulir API) |
| 24 | `/syarat-ketentuan` | Group G — Info | ✅ 100% V9 | `21_syarat_ketentuan_desktop_viewport.png` | `21_syarat_ketentuan_mobile_viewport.png` | Lolos (Regulasi Hukum Penonton) |
| 25 | `/kebijakan-privasi`| Group G — Info | ✅ 100% V9 | `22_kebijakan_privasi_desktop_viewport.png`| `22_kebijakan_privasi_mobile_viewport.png`| Lolos (Kepatuhan UU PDP) |

---

### 2. DETAIL PERUBAHAN PER GROUP

#### GROUP A — GLOBAL EXPERIENCE
- **Homepage (`/`):** Desain lama (kartu 4 grid repetitif) diganti komposisi Clean Cut asimetris yang memikat. Lipatan pertama desktop menempatkan tipografi agresif di kiri dan aksi laga kickboxing di kanan. Lipatan pertama mobile menampilkan foto laga vertikal di atas headline yang tegas.
- **Navbar (`Navbar.tsx`):** Logo disederhanakan menjadi `JKBF` font-display solid dengan subtitle rapi. Menu navigasi langsung (`JADWAL`, `PERTANDINGAN`, `MUSIK`, `MERCH`, `LAINNYA`) dan tombol tegas `INFO TIKET ↗`. Menu mobile disederhanakan menjadi drawer ringkas dengan tautan prioritas tinggi.
- **Footer (`Footer.tsx`):** Dibuat dengan gaya tipografi editorial, mengelompokkan tautan sitemap dalam 5 kolom rapi, tanpa kartu gelap berulang.

#### GROUP B — COMBAT EXPERIENCE
- **Championship (`/championship`):** Memisahkan informasi pertandingan resmi dari spekulasi; menampilkan status pra-kejuaraan transparan dan merinci 4 divisi sabuk emas.
- **Fighters (`/fighters` & `/fighters/[slug]`):** Direktori atlet kickboxing dengan filter divisi dinamis, kartu berkarakter portrait dokumenter, serta lembar spesifikasi *Tale of the Tape* yang jelas.
- **Bracket (`/bracket`):** Bagan eliminasi turnamen interaktif yang dapat dipilih per divisi, dilengkapi switch ronde untuk kemudahan penelusuran di layar ponsel.

#### GROUP C — FESTIVAL EXPERIENCE
- **Lineup Musik (`/lineup`):** Mengadopsi visual panggung konser dan tata cahaya festival, menampilkan pesan kurasi terverifikasi tanpa musisi fiktif.
- **Jadwal (`/jadwal`):** Timetable kronologis 3 hari (12, 13, 14 Desember 2026) dengan pembedaan jelas antara sesi Ring Pertandingan (`COMBAT`) dan Panggung Musik (`STAGE`).
- **Venue (`/venue`):** Panduan GOR UNY dengan koordinat Google Maps, opsi transportasi (KRL, Trans Jogja, Ojek Online), dan aturan keselamatan.

#### GROUP D — COMMUNITY EXPERIENCE
- **City Pride (`/city-pride`):** Presentasi gerakan pemuda 5 kabupaten/kota dengan bar persentase dukungan dan tombol voting resmi terproteksi autentikasi.
- **Creator Hub (`/creator` & `/creator/dashboard`):** Pendaftaran kreator dan akreditasi pers dengan formulir clean cut, riwayat submisi video, dan perolehan poin.

#### GROUP E — COMMERCE EXPERIENCE
- **Tiket (`/tiket`):** Penjelasan kategori kursi (Ringside, Reguler, 3-Day Pass) dan status pembukaan penjualan melalui portal mitra RAWOOH.
- **Merchandise (`/merch` & `/merch/[slug]`):** Etalase streetwear dan fight gear dengan foto produk dominan, pemilih ukuran, dan tombol keranjang belanja.
- **Checkout (`/checkout` & `/checkout/success`):** Form checkout terstruktur dengan pilihan pick-up GOR UNY atau ekspedisi, serta e-receipt resmi.

#### GROUP F — STREAMING EXPERIENCE
- **PPV (`/ppv` & `/ppv/watch`):** Halaman siaran dengan status penyiaran terkunci aman, form input kode tiket, dan simulasi ruang siaran tanpa aktivasi komersial ilegal.

#### GROUP G — INFORMATION EXPERIENCE
- **Tentang, FAQ, Kontak, Syarat & Ketentuan, Kebijakan Privasi:** Halaman informasi bertipografi bersih, kontras tinggi, mudah dibaca, dan patuh regulasi perlindungan data konsumen.

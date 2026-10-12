# JKB 2026 — V8 ROUTE AUDIT & ARCHITECTURE MAPPING

Dokumen ini memetakan seluruh 35 rute aktif di aplikasi JKB 2026 dan menentukan strategi transformasi antarmuka pengguna (UI) sesuai Master Prompt V8.

---

## 1. RUTE PUBLIK UTAMA (23 Rute)

| Rute | Modul | Rencana Transformasi V8 | Referensi UX |
| :--- | :--- | :--- | :--- |
| `/` | Homepage | Rebuild total ke arsitektur 4 blok konten terfokus (Hero, Dual Path, Plan Visit, Explore More). Hapus countdown fiktif. | Edinburgh International Festival × GLORY |
| `/jadwal` | Jadwal Acara | Rebuild ke 1 selector tanggal minimalis (12, 13, 14 Des) + 1 timeline kronologis dengan detail yang dapat dibuka. | Formula 1 × Primavera Sound |
| `/championship` | Kejuaraan Redy Cup 2 | Rebuild presentasi 4 divisi sabuk resmi & regulasi aturan K-1 tanpa istilah teknis berbelit. | GLORY Kickboxing |
| `/bracket` | Bagan Turnamen | Rebuild mobile layout: Alur bertahap (Pilih Divisi → Pilih Ronde Semifinal/Final → Daftar Pertandingan). | Challonge × Toornament |
| `/fighters` | Fighter Center | Rebuild search-first directory: Kolom pencarian di atas, filter lanjutan collapsible, kartu atlet bersih. | UFC Athletes × GLORY |
| `/fighters/[slug]` | Profil Petarung | Rebuild profil atlet: Identitas dominan, rekor dan statistik disajikan bertahap, hapus disclaimer teknis staging. | ONE Championship |
| `/lineup` | Lineup Musik | Rebuild performer-first: Tipografi artis besar & berani, foto penampil dominan, hapus teks staging teknis. | Lollapalooza × Primavera Sound |
| `/tiket` | Informasi Tiket | Rebuild ke status pengumuman resmi bersih: Tanggal resmi, venue GOR UNY, ketentuan masuk, tanpa teks teknis sandbox. | Fever |
| `/city-pride` | City Pride Voting | Rebuild alur 5 langkah terfokus: Eksplanasi → Pilih Wilayah → Verifikasi → Vote → Hasil. Aturan expandable. | NBA All-Star Voting |
| `/creator` | Creator Hub (Landing) | Rebuild marketing 3 langkah (Daftar, Buat Konten, Akses Liputan) + formulir akreditasi media terpisah. | GoPro Awards × SXSW |
| `/creator/dashboard` | Creator Dashboard | Pertahankan dashboard akun internal khusus pengguna terdaftar (poin, status submisi, klaim barcode). | Authenticated Dashboard |
| `/merch` | Official Merch Store | Rebuild katalog produk bersih: Foto produk dominan, spesifikasi material, status ketersediaan resmi. | Shopify Dawn Theme |
| `/merch/[slug]` | Detail Produk Merch | Rebuild detail produk: Galeri foto, varian ukuran, spesifikasi apparel resmi Di Balik Kalem. | Shopify Dawn Theme |
| `/venue` | Panduan GOR UNY | Rebuild panduan venue: Alamat Jl. Colombo No. 1, link Google Maps, akses transportasi. Hapus zonasi fiktif. | SXSW Venue Guide |
| `/tentang` | Tentang JKB 2026 | Rebuild narasi manifesto: Bahasa Indonesia natural, narasi Di Balik Kalem & #JOGJAPUNYANYALI. | Editorial Manifesto |
| `/faq` | Pertanyaan Umum | Rebuild kelompok pertanyaan esensial: Tiket, venue, aturan arena. Hapus klaim jam buka fiktif. | Simple Accordion |
| `/kontak` | Kontak Panitia | Rebuild form kontak & informasi sekretariat resmi dengan sanitasi input. | Clean Contact Form |
| `/syarat-ketentuan` | Syarat & Ketentuan | Pertahankan teks legal festival dan ketentuan tiket. | Legal Terms |
| `/kebijakan-privasi` | Kebijakan Privasi | Pertahankan teks legal perlindungan data pengunjung. | Privacy Policy |
| `/checkout` | Checkout Legacy | Gated / Staging only: Simulator pembayaran internal dilindungi gate Milestone 9A. | Milestone 9A Safety Gate |
| `/checkout/success/[orderId]` | Order Success | Gated / Staging only: Halaman konfirmasi pesanan terisolasi. | Order Lookup |
| `/ppv` | PPV Info / Pass | Kode & data aman; disembunyikan dari navigasi publik utama sampai keputusan resmi disetujui. | Protected Route |
| `/ppv/watch` | PPV Live Player | Entitlement Gated: Hanya terbuka bagi user dengan tiket/pass terverifikasi server. | Protected Session |

---

## 2. RUTE ADMIN KONSOLE (12 Rute)

Seluruh 12 rute admin di bawah dilindungi oleh NextAuth RBAC (`role: ADMIN`):
1. `/admin` (Dashboard Command Center)
2. `/admin/login` (Admin Login Form)
3. `/admin/fighters` (Manajemen Atlet)
4. `/admin/fighters/new` (Tambah Atlet Baru)
5. `/admin/matches` (Manajemen Partai & Hasil Laga)
6. `/admin/schedule` (Manajemen Rundown Acara)
7. `/admin/lineup` (Manajemen Penampil Musik)
8. `/admin/creators` (Moderasi Submisi Kreator)
9. `/admin/merch` (Manajemen Produk & Varian)
10. `/admin/voting` (Moderasi & Pantauan City Pride)
11. `/admin/ppv` (Konfigurasi Stream PPV)
12. `/admin/messages` (Inbox Pesan Kontak)

**Prinsip Admin V8:** Mempertahankan seluruh logika CRUD, otentikasi, dan aksi server, sembari memastikan sidebar mobile berubah menjadi drawer slide-over dan tabel data responsif.

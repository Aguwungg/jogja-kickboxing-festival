# JKB 2026 — V8 REFERENCE MATRIX & UX BENCHMARKING

Dokumen ini mendokumentasikan hasil benchmarking terhadap referensi desain eksternal resmi yang dimandatkan dalam Master Prompt V8. Setiap modul mengambil prinsip UX spesifik tanpa menyalin branding, aset, atau kode berhak cipta.

---

## 1. PEMETAAN FITUR & REFERENSI EKSTERNAL

| Fitur / Modul | URL Referensi | Prinsip Desain yang Diambil | Larangan / Batasan |
| :--- | :--- | :--- | :--- |
| **Homepage & Identitas** | `eif.co.uk` × `glorykickboxing.com` × `wethefest.com` | Komposisi editorial majalah seni pertunjukan; hierarki pesan tajam; pemisahan dual-path (The Ring vs The Stage); ringkasan fakta esensial. | Jangan buat hibrida yang menumpuk semua 30 rute di homepage; hindari AI generic dark card; jangan buat countdown ke jam fiktif. |
| **Navigasi Publik** | `coachella.com` | Header bersih; tautan langsung ke destinasi utama; menu mobile drawer yang ringan dan mudah dipindai; tombol CTA `INFO TIKET`. | Jangan gunakan kartu menu raksasa beranimasi berat; jangan tampilkan ikon cart internal di header publik; jangan ekspos rute admin. |
| **Jadwal Acara** | `formula1.com` × `primaverasound.com` | 1 selector tanggal minimalis (12, 13, 14 Des); 1 alur kronologis waktu; pengungkapan bertahap untuk detail sesi. | Jangan gunakan 5 filter kategori simultan di layar ponsel; jangan gunakan kartu tanggal berukuran raksasa. |
| **Lineup Musik** | `lollapalooza.com` × `primaverasound.com` | Presentasi artis-sentris (*performer-first*); nama penampil menonjol; tanggal dan panggung hanya jika terkonfirmasi. | Jangan tampilkan foto atlet kickboxing di halaman musik; jangan gunakan disclaimer teknis staging; jangan buat musisi fiktif. |
| **Fighter Center** | `ufc.com/athletes` × `glorykickboxing.com` | Pencarian nama petarung / klub sebagai interaksi utama; kartu profil atlet bersih; filter lanjutan terlipat (*collapsed*). | Jangan penuhi kartu dengan statistik rumit; jangan pasang badge demo di setiap petarung resmi. |
| **Profil Petarung** | `onefc.com/athletes` | Identitas dan potret atlet paling dominan; rekor pertarungan dan biografi disajikan secara bertahap dan rapi. | Jangan masukkan istilah teknis developer (*staging test fixture*); jangan rekayasa rekor bertarung. |
| **Bagan Turnamen** | `challonge.com` × `toornament.com` | Desktop: bagan pohon utuh. Mobile: Alur bertahap (Pilih Divisi → Pilih Ronde Semifinal/Final → Daftar Pertandingan vertikal). | Jangan paksa bagan pohon desktop mengecil horizontal hingga tidak terbaca di layar ponsel. |
| **City Pride Voting** | `nba.com/allstar` | Alur voting 5 langkah: Eksplanasi → Pilih Wilayah → Verifikasi → Kirim Suara → Hasil Sementara. Aturan tersembunyi di accordion. | Jangan tampilkan leaderboard raksasa yang menutupi layar sebelum user sempat memilih wilayah; jangan lemahkan anti-abuse. |
| **Creator Hub** | `gopro.com/awards` | Penjelasan partisipasi 3 langkah; satu tombol aksi pendaftaran yang jelas; pemisahan formulir media massa. | Jangan tampilkan dashboard poin pribadi atau tabel moderasi akun di halaman landing publik. |
| **Official Merchandise** | `themes.shopify.com/themes/dawn` | Presentasi foto produk bersih; spesifikasi material; varian ukuran; status ketersediaan resmi; tanpa hambatan visual. | Jangan buat angka stok palsu (*"Tersisa 3 pcs"*); jangan pasang badge lebay berulang; transaksi live ditahan menunggu Rawooh. |
| **Informasi Tiket** | `feverup.com` | Halaman paling bersih di situs: nama acara, tanggal resmi, venue, dan status resmi pengumuman tiket. | Dilarang menampilkan istilah teknis developer (*"Wadah Integrasi Rawooh"*, *"Sandbox Mode"*); jangan buat harga fiktif. |
| **Admin Console** | `shopify.com` | Tata letak produktivitas: pencarian operasional, tabel data responsif, sidebar mobile berupa drawer slide-over yang rapi. | Jangan gunakan gaya sinematik festival untuk tabel administrasi; pertahankan RBAC dan validasi server. |

---

## 2. POLA ANTI-AI-SLOP YANG DIHINDARI

1. **Bukan Card-in-Card Syndrome:** Menghentikan pembungkusan setiap paragraf dan teks dalam kartu hitam berborder tebal.
2. **Bukan Monoton Gelap:** Memperkenalkan blok editorial warm white (`#F5F3EE`) untuk panduan pengunjung guna menciptakan ritme baca yang nyaman.
3. **Bukan Dashboard untuk Publik:** Pengunjung festival ingin segera tahu siapa yang bertanding, siapa yang manggung, dan di mana membeli tiket tanpa harus mempelajari struktur sistem.

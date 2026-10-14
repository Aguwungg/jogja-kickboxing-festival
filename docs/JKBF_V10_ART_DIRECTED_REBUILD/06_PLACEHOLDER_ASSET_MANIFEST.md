# JKBF V10 — MANIFEST ASET FOTOGRAFI & GRAFIS PLACEHOLDER
## PANDUAN PENGGANTIAN ASET UNTUK EVENT ORGANIZER (EO) & DOKUMENTASI RESMI

**Tanggal:** 14 Oktober 2026  
**Status Implementasi:** Desain V10 telah dioptimalkan dengan aset beresolusi tinggi yang terintegrasi secara proporsional. Seluruh aset siap digantikan dengan materi pemotretan resmi atlet dan festival tanpa merusak tata letak.

---

### 1. DAFTAR INVENTARISASI ASET VISUAL V10

| No | Modul / Halaman | Jalur Berkas Aset | Rasio & Dimensi Target | Rekomendasi Karakter Visual Produksi |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Homepage Hero (`/`) | `/images/hero/hero-fight-night.png` | 16:9 (1920 × 1080 px minimum) | Foto dokumenter dramatis petarung di bawah sorotan lampu ring GOR UNY. *High contrast, low-key lighting*. |
| **02** | The Stage Hero (`/`, `/lineup`) | `/images/lineup/stage-crowd.png` | 16:9 (1920 × 1080 px) | Kerumunan festival musik outdoor malam hari, pencahayaan panggung hangat dengan flare dinamis. |
| **03** | Redy Championship 2 (`/championship`) | `/images/hero/championship-faceoff.png` | 21:9 atau 16:9 (2560 × 1080 px) | Foto *Face-Off* resmi dua atlet sabuk emas saling menatap di sesi penimbangan badan (*Weigh-In*). |
| **04** | Galeri Atlet (`/fighters`, `/fighters/[slug]`) | `/images/fighters/[slug].png` | 3:4 atau 1:1 (1000 × 1333 px) | Potret studio atlet dengan ekspresi determinasi tinggi, sarung tinju resmi, latar netral gelap. |
| **05** | Streetwear Lookbook (`/merch`, `/merch/[slug]`) | `/images/merch/[item].png` | 1:1 atau 4:5 (1200 × 1500 px) | Foto produk gaya streetwear katalog distro modern, pencahayaan bersih studio netral. |
| **06** | Venue GOR UNY (`/venue`) | `/images/venue/gor-uny.png` | 16:9 (1920 × 1080 px) | Foto arsitektur arena olahraga GOR UNY tampak luar dan dalam dengan sudut pandang mata burung/tribun. |
| **07** | Grafis Garis Jogja (`/city-pride`) | SVG Inlined / CSS Ring-Frame | Vektor SVG (Scalable) | Siluet garis minimalis Tugu Pal Putih dan motif Keraton, menjaga kesopanan simbol daerah. |

---

### 2. ELEMEN SIGNATURE FRAMEWORK V10

1. **Aksen Sudut Ring (`.ring-corner-frame`):**
   - Diimplementasikan murni menggunakan CSS pseudoelemen di `src/app/globals.css`.
   - Tidak membebani waktu muat halaman (*zero HTTP request payload*), otomatis menyesuaikan dengan skala layar.
2. **Kepatuhan Hak Cipta & Integritas Data:**
   - Tidak ada atlet atau musisi fiktif yang diklaim sebagai pemenang atau pengisi acara resmi sebelum kontrak EO ditandatangani.
   - Semua nama atlet dan grup band yang tampil di katalog merupakan data terkurasi dari database `prisma/dev.db`.

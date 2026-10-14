# JKBF V10 — DOKUMEN KEPUTUSAN KREATIF & ART DIRECTION
## THE FIGHT NIGHT × JOGJA CULTURE EDITORIAL REBUILD

**Tanggal:** 14 Oktober 2026  
**Versi:** 10.0 — Production Art-Directed Public Architecture  
**Cabang Git:** `design/jkbf-v10-art-directed`  
**Cakupan:** 23 Rute Publik Platform Jogja Kickboxing Festival  

---

### 1. LATAR BELAKANG & TUJUAN TRANSFORMASI KREATIF

Evaluasi mendalam terhadap versi V9.2 menunjukkan bahwa meskipun struktur ruang (whitespace) telah meningkat, antarmuka publik sebelumnya masih terjebak dalam perangkap desain yang monoton:
- Terlalu banyak kartu hitam persegi berulang (*repetitive cards*).
- Tumpukan badge kecil yang membuat tampilan menyerupai dashboard SaaS atau panel analitik alih-alih festival tarung dan musik spektakuler.
- Kurangnya *art direction* sinematik, ketegangan visual (*visual tension*), dan narasi editorial khas Yogyakarta.
- Tipografi yang kurang memiliki karakter poster tinju/kickboxing legendaris.

**JKBF V10 dihadirkan sebagai perombakan visual radikal:** Mentransformasikan seluruh 23 halaman publik menjadi pengalaman editorial poster sinematik bertaraf internasional, memadukan energi murni pertarungan sabuk emas K-1 (*Raw Fight Energy*) dengan kehangatan budaya festival musik kontemporer Jogja (*Di Balik Kalem / #JogjaPunyaNyali*).

---

### 2. SISTEM TIPOGRAFI V10

V10 meninggalkan font condens generik dan menetapkan hierarki tipografi tiga pilar yang terkurasi secara ketat:

| Pilar | Font Family | Variabel CSS / Class | Karakter & Penggunaan |
| :--- | :--- | :--- | :--- |
| **Primary Display** | **Bebas Neue** | `--font-bebas-neue` / `.font-display` | Gagah, monumental, ritme poster film laga. Digunakan untuk headline utama (skala 6xl–10xl), nama divisi, dan tombol call-to-action dominan. |
| **Technical / Accent** | **Space Grotesk** | `--font-space-grotesk` / `.font-technical` | Presisi geometris bergaya paspor atlet, koordinat, statistik *Tale of the Tape*, badge kategori, jam pertandingan, dan penanda nomor editorial (`01`, `02`). |
| **Body & Prose** | **Plus Jakarta Sans** | `--font-plus-jakarta` / `font-sans` | Humanis kontemporer, sangat nyaman dibaca di layar retina ponsel maupun monitor 4K. Digunakan untuk paragraf editorial, ketentuan hukum, dan deskripsi produk. |

---

### 3. ARSITEKTUR WARNA & KONTRASTING ATMOSFERIK

V10 tidak menggunakan palet warna generik atau gradien neon murah. Warna diatur berdasarkan zona pengalaman:

1. **The Fight Night Obsidian (`#0A0A0A` & `#050505`):**
   - Latar dominan untuk Homepage, Championship, Lineup, Fighters, Bracket, Merch, dan PPV.
   - Menghadirkan atmosfer arena pertarungan di bawah sorotan lampu *spotlight*, di mana fotografi laga dan siluet atlet menjadi bintang utama.
2. **Signal Crimson (`#D91F2C`):**
   - Merah khas JKBF yang melambangkan keberanian (*#JogjaPunyaNyali*).
   - Digunakan dengan disiplin tinggi sebagai garis aksen tajam, *corner-ring accent*, tag status aktif, dan tombol transaksi utama.
3. **Warm Daylight Ivory (`#F4F0E8` / `#FAF6EE`):**
   - Diterapkan secara sengaja pada halaman Jadwal (`/jadwal`) dan bab ketiga di Homepage.
   - Memberikan transisi psikologis yang menenangkan bagi penonton saat membaca tabel rundown maraton 3 hari secara detail tanpa kelelahan mata (*screen fatigue*).
4. **Hairline Precision Grid (`border-white/10` & `border-black/10`):**
   - Menghilangkan bayangan mengambang (*blurry dropshadows*) dan efek glassmorphism murahan. Digantikan oleh garis pemisah tipis yang tegas layaknya surat kabar broadsheet internasional.

---

### 4. PRINSIP KOMPOSISI FOTOGRAFI & GRAFIS

- **Satu Subjek Dominan:** Tidak ada lagi pertarungan visual 50/50 di mana foto petarung dan foto panggung musik berebut perhatian di dalam satu kartu kecil. Hero section homepage menampilkan komposisi poster tunggal yang berwibawa.
- **Tale of the Tape Otentik:** Pada profil petarung (`/fighters/[slug]`), statistik fisik (jangkauan, rekor, sasana, kuda-kuda) disajikan dalam format data teknis tanpa dekorasi palsu.
- **Tanda Tangan Visual Ring-Corner Frame (`.ring-corner-frame`):** Sudut kanvas dibingkai dengan aksen garis siku tipis berwarna merah, merepresentasikan empat sudut ring tinju GOR UNY secara elegan.

---

### 5. PENGALAMAN MOBILE FIRST (390 × 844 PX)

Setiap elemen diuji langsung pada viewport mobile iPhone 14/15:
- **Navigasi Drawer Bersih:** Menu mobile memprioritaskan 4 destinasi utama festival (**Jadwal, Pertandingan, Musik, Info Tiket**) di bagian atas dengan ukuran sentuh minimal 48px, diikuti grup informasi pendukung.
- **Tanpa Overlapping Buttons:** Menghapus sticky CTA mengambang yang menutupi konten penting atau wajah atlet di layar kecil.
- **Bagan Turnamen Mobile-Optimized:** Turnamen 8-man K-1 di `/bracket` menyediakan tombol filter babak (Perempat Final → Semifinal → Final) sehingga penonton tidak perlu melakukan zoom-out ekstrem.
- **Formulir Terstruktur:** Input checkout, pendaftaran creator, dan kontak memiliki padding sentuh nyaman dengan validasi seketika.

---

*Dokumen ini merupakan acuan resmi art direction untuk seluruh tim pengembang dan komite Jogja Kickboxing Festival 2026.*

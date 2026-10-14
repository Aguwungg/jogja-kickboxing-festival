# JKBF V9.2 — COMPLETE SPACIOUS UI/UX REBUILD
## 03. LAYOUT & SPACING SPECIFICATION

---

### 1. ATURAN HIERARKI & RITME TATA LETAK

Sistem V9.2 mengimplementasikan prinsip tata letak **FIGHT CULTURE EDITORIAL — SPACIOUS EDITION** yang menekankan keanggunan ruang bernapas (*breathing room*), kejelasan hierarki, dan kontras tegas antar bagian.

#### A. Lebar Konten Maksimal (Max Content Width)
- **Desktop Standard Container:** `max-w-[1400px]` dengan padding horizontal `px-5 sm:px-8 lg:px-12`.
- **Text & Reading Width:** Dibatasi maksimal `max-w-xl` hingga `max-w-2xl` (600px–750px) guna memastikan kenyamanan mata pembaca optimal (panjang baris ideal 55–75 karakter).
- **Split Hero Layout (Desktop):** Rasio asimetris 58% Kolom Teks / 42% Fotografi Aksi Murni, membebaskan gambar dari kartu mengambang atau teks bertumpuk.

#### B. Skala Ruang Vertikal (Vertical Spacing Tokens)
- **Hero Sections:** `py-20 lg:py-28` (Memberikan gravitasi visual yang kuat pada pembuka halaman).
- **Major Content Blocks:** `py-16 lg:py-24` (Pemisahan antar bagian yang jelas tanpa perlu garis tebal atau ornamen berlebih).
- **Open Rows:** `py-8 sm:py-10` dengan pembatas garis tipis `border-b border-black/10` (pada Warm Ivory) atau `border-b border-white/10` (pada Deep Black).

#### C. Layout Khusus Mobile (Mobile-First Priorities)
- **Viewport Target:** 320px, 375px, 390px, 430px.
- **Side Padding:** `px-5 sm:px-6` (20px–24px) yang nyaman dipegang satu tangan.
- **Single Focal Point:** Lipatan awal mobile hanya memuat satu ide visual dominan (misal foto duel tarung di atas, headline besar di bawah, dan tombol CTA tunggal).
- **Pembersihan Chrome Dekoratif:** Menghilangkan border ganda, shadow tebal, dan badge bertumpuk yang membebani layar kecil.

---

### 2. SISTEM TIPOGRAFI & WARNA V9.2

#### A. Tipografi
1. **Headline Display:** `Barlow Condensed`
   - Weight: `font-black` (900) atau `font-extrabold` (800)
   - Case: Uppercase
   - Tracking: `tracking-tight` atau `tracking-wider` (pada overline/kicker)
   - Leading: `leading-[0.88]` hingga `leading-none`
2. **Body & Interface:** `Inter`
   - Weight: Regular (400) dan Bold (700)
   - Tracking: Normal
   - Leading: `leading-relaxed` (1.6)
3. **Data & Technical Overline:** `Font-Mono`
   - Weight: Bold (700)
   - Case: Uppercase
   - Tracking: `tracking-widest` (0.2em)

#### B. Palet Warna Resmi
- **Deep Black:** `#0B0B0B` (Latar belakang sinematik, navbar, footer)
- **Warm Ivory:** `#F4F0E8` (Latar belakang editorial informasi, jadwal, petarung, tiket, merchandise, FAQ)
- **Brand Red:** `#D91F2C` (Aksen dinamis, tombol aksi utama, penanda nomor urut `01, 02, 03`)
- **Film Grey:** `#8F8E8B` (Teks sekunder dan label pembantu)
- **Charcoal Surface:** `#141416` (Latar sekunder pada mode gelap)

---

### 3. PENGGUNAAN KOMPONEN BERSIH (*NO-CARD PHILOSOPHY*)

- **Baris Tipografi Terbuka (*Open Typographic Rows*):**
  Menggantikan format kartu dashboard dengan susunan baris horizontal yang lapang. Setiap baris memiliki:
  - Nomor urut merah monospaced (`01`, `02`, `03`)
  - Judul headline tebal uppercase
  - Deskripsi pendukung singkat
  - Status atau tombol aksi di ujung kanan
  - Pembatas garis tipis `border-b` beropasitas 10%.
- **Tombol Aksi Tunggal (Singular Primary Action):**
  Hanya ada satu tombol primer merah mencolok di area keputusan utama. Tombol sekunder menggunakan format teks bergaris bawah atau tombol bergaris batas halus (*outline*).

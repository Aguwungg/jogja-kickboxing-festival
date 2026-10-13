# JKBF V9 — TOTAL PUBLIC FRONTEND REDESIGN
## 02. NEW DESIGN SYSTEM SPECIFICATION (FIGHT CULTURE EDITORIAL)

---

### 1. FILOSOFI & VISUAL DECISION V9

Arah desain **JKBF V9: FIGHT CULTURE EDITORIAL — CLEAN CUT** dirancang berdasarkan formulasi proporsional:
- **70% Underground Fight Editorial:** Karakter fotografi olahraga tarung autentik monokromatik, tipografi headline condensed masif, dan aksen agresif merah JKBF.
- **20% Premium Minimalist Clarity:** Spacing lapang, hierarki informasi tertata, sudut clean cut tanpa ornamen kartu berulang, dan keterbacaan tinggi.
- **10% Music Festival Expression:** Sentuhan energi atmosfer panggung konser, tata lampu panggung, dan semangat gerakan pemuda urban.

---

### 2. COLOR PALETTE & DESIGN TOKENS

Semua token warna publik diisolasi agar tidak mengganggu antarmuka dashboard admin (`/admin/*`):

| Token Variable | Nilai Hex / RGBA | Peran & Penggunaan UI |
| :--- | :--- | :--- |
| `--color-v9-black` | `#0B0B0B` | Latar belakang kanvas utama, background kartu petarung, deep contrast |
| `--color-v9-charcoal` | `#141416` | Latar belakang section sekunder, kontras terhadap kanvas utama |
| `--color-v9-red` | `#D91F2C` | Warna identitas brand resmi JKBF, tombol aksi utama, overline label |
| `--color-v9-red-hover` | `#B81521` | State hover tombol aksi dan elemen interaktif aktif |
| `--color-v9-ivory` | `#F4F0E8` | Warna teks utama, teks display, dan latar section kontras tinggi |
| `--color-v9-grey` | `#8F8E8B` | Teks keterangan, deskripsi sekunder, subtitle, placeholder |
| `--color-v9-muted` | `#5A5957` | Teks footnote, catatan legalitas mikro, border separator halus |
| `--color-v9-border` | `rgba(255, 255, 255, 0.10)` | Garis batas struktural editorial tipis dan tegas (1px border) |

---

### 3. TIPOGRAFI & SKALA EDITORIAL

Website menggunakan kombinasi 3 keluarga tipografi yang saling melengkapi:

1. **Display Typography — `Barlow Condensed`:**
   - **Weight:** 800 (ExtraBold) & 900 (Black).
   - **Karakter:** Uppercase tegas, tracking rapat (`tracking-tight` s.d. `tracking-tighter`), line-height padat (`0.88` – `0.95`).
   - **Penggunaan:** Hero display headline (`JOGJA PUNYA NYALI.`), judul section, nama petarung, nama band, angka tanggal.

2. **Body Typography — `Inter`:**
   - **Weight:** 400 (Regular) & 600 (SemiBold).
   - **Karakter:** Sans-serif modern berdaya baca tinggi, line-height lega (`leading-relaxed`).
   - **Penggunaan:** Deskripsi kegiatan, paragraf artikel, narasi manifesto, syarat & ketentuan, FAQ.

3. **Data & Technical Typography — `ui-monospace / font-mono`:**
   - **Weight:** 500 (Medium) & 700 (Bold).
   - **Karakter:** Monospace presisi, uppercase dengan letter-spacing lebar (`tracking-widest`).
   - **Penggunaan:** Timestamp waktu pertandingan, berat badan atlet, kode e-voucher, status weigh-in, nomor partai.

#### Skala Hirarki Heading:
- **Hero Display:** `text-6xl` (mobile) s.d. `text-9xl` (desktop 1440px)
- **Section Heading:** `text-3xl` (mobile) s.d. `text-6xl` (desktop)
- **Card Title / Feature:** `text-xl` s.d. `text-2xl`
- **Overline / Category Tag:** `text-xs` font-display uppercase tracking `0.22em`

---

### 4. PRINSIP STRUKTUR KOMPONEN (ANTI-PATTERN REJECTION)

| Elemen | DILARANG (Pola V8 yang Ditolak) | DIWAJIBKAN (Pola V9 Clean Cut) |
| :--- | :--- | :--- |
| **Bentuk Sudut (Corners)** | `rounded-2xl` / `rounded-3xl` / pill capsules | **Sharp / Clean Cut edges** (`rounded-none` atau `rounded-sm`) |
| **Wadah Konten (Containers)** | Kartu hitam repetitif dengan drop shadow tebal | **Garis editorial 1px border**, transisi latar selang-seling |
| **Glow & Efek** | Neon glow, bayangan merah menyala, glassmorphism | **Kontras fotografi murni**, grain documentary, zero neon |
| **Lencana (Badges)** | Badge warna-warni (kuning, hijau, ungu pastel) | **Monokromatik + aksen merah `#D91F2C` tunggal** |
| **Tombol (Buttons)** | Pil rounded lonjong dengan gradasi | **Blok tegas bergaris lurus**, font display bold, aksen panah `↗` |

---

### 5. KOMPOSISI DESKTOP VS MOBILE

1. **Desktop Composition (1440px – 1920px):**
   - Komposisi asimetris elegan.
   - Kolom kiri: Teks editorial terstruktur, overline tanggal/venue, headline masif, tombol CTA ganda (Solid Red + Ghost Border).
   - Kolom kanan: Fotografi laga kickboxing dokumenter beresolusi tinggi dengan gradient fade halus ke latar hitam.
   - Bottom ribbon navigasi lintas dunia: `01 THE RING.`, `02 THE STAGE.`, `03 THE CITY.`.

2. **Mobile Composition (320px – 430px):**
   - Komposisi independen, bukan sekadar versi desktop yang diperkecil.
   - Lipatan awal (Fold 1): Foto aksi petarung di bagian atas (tinggi 52svh) yang dramatis.
   - Tepat di bawah foto: Headline vertikal stacked `JOGJA` `PUNYA` `NYALI.`, tanggal terverifikasi, dan tombol CTA utama yang mudah ditekan jempol pengguna.
   - Menu drawer mobile yang simpel, langsung menampilkan tujuan prioritas tanpa multi-nested accordion yang membingungkan.

# JKBF V9 — TOTAL PUBLIC FRONTEND REDESIGN
## 06. VISUAL BEFORE-AND-AFTER COMPARATIVE ANALYSIS

---

### 1. RINGKASAN PARADIGMA: REJECTED V8 VS APPROVED V9

| Dimensi Desain | Antarmuka Lama (V8 — Rejected) | Antarmuka Baru (V9 — Clean Cut Approved) |
| :--- | :--- | :--- |
| **Arah Seni Utama** | Dashboard SaaS gelap homogen dengan kartu bertumpuk | **Fight Culture Editorial Clean Cut** (70% Tarung, 20% Minimalis, 10% Festival) |
| **Penggunaan Warna** | Hitam pekat generik dengan aksen gold (`#E2BA75`), hijau, ungu | **Palet Terkurasi:** Deep Black (`#0B0B0B`), Warm Ivory (`#F4F0E8`), Brand Red (`#D91F2C`) |
| **Karakter Sudut** | Sudut membulat lonjong (`rounded-2xl`, `rounded-full`) | **Sudut tegas clean cut** (`rounded-none`, garis arsitektur editorial lurus) |
| **Pola Kontainer** | Setiap konten dibungkus dalam kartu hitam gelap terpisah | **Section editorial luas**, transisi kontras selang-seling, pembatas garis 1px halus |
| **Tipografi Judul** | Ukuran seragam, font sans browser standar, minim karakter | **`Barlow Condensed` (Black 900)**, tracking rapat, huruf kapital ekspresif |
| **Fotografi & Gambar** | Foto stok generik dengan badge tumpang-tindih | **Fotografi dokumenter tarung autentik** beresolusi tinggi, gradien menyatu alami |
| **Pengalaman Mobile** | Menu berjenjang panjang, butuh scroll panjang | **Layout mobile independen**, hero vertikal dramatis, navigasi drawer ringkas |

---

### 2. ANALISIS KOMPARATIF PER MODUL UTAMA

#### 1. HOMEPAGE (`/`)
- **Sebelumnya (V8):**
  - Hero section terbagi kaku menjadi kartu ganda yang sempit dengan tombol bergradasi.
  - Begitu banyak badge angka (misal: "80+ Atlet", "4 Sabuk") yang membingungkan pengunjung awam.
  - Bagian konten bawah terasa seperti dashboard analitik dengan deretan kotak kartu gelap yang monoton.
- **Sekarang (V9 Clean Cut):**
  - **Desktop:** Hero asimetris masif. Headline `JOGJA PUNYA NYALI.` berdiri megah di kolom kiri dengan teks `NYALI.` berwarna merah menyala, sementara kolom kanan menampilkan duel kickboxing dramatis hitam-putih.
  - **Mobile:** Lipatan pertama langsung menyajikan foto laga kickboxing tajam (52svh) yang memicu adrenalin, diikuti headline vertikal tebal dan tombol `INFO TIKET ↗` yang langsung terjangkau jari.
  - **Bottom Ribbon:** Akses instan menuju 3 pilar: `01 THE RING.`, `02 THE STAGE.`, `03 THE CITY.`.

#### 2. CHAMPIONSHIP (`/championship`) & BAGAN (`/bracket`)
- **Sebelumnya (V8):**
  - Tiap kelas berat dibungkus kotak berwarna warni (emas, hijau, ungu, merah muda) yang menyerupai paket harga SaaS.
  - Memuat klaim simulasi skor dan nama fiktif yang menurunkan kredibilitas olahraga tarung.
- **Sekarang (V9 Clean Cut):**
  - Mengadopsi standar promosi tarung profesional (seperti GLORY Kickboxing / UFC).
  - Tampilan *Fight Card Teaser* menampilkan foto laga dokumenter dan label transparan: *"STATUS: VERIFIKASI RESMI BERJALAN"*.
  - Klasifikasi 4 divisi disajikan dalam tipografi editorial tegas dengan spesifikasi batas berat dan sabuk emas.
  - Halaman bagan turnamen menyediakan visualisasi pohon babak gugur di desktop dan tombol seleksi ronde cepat di mobile.

#### 3. DIRECTORY PETARUNG (`/fighters` & `/fighters/[slug]`)
- **Sebelumnya (V8):**
  - Menampilkan daftar atlet seperti tabel direktori karyawan perusahaan.
- **Sekarang (V9 Clean Cut):**
  - Format majalah olahraga tarung berkarakter. Foto portrait petarung berukuran besar dengan kontras tinggi hitam-putih.
  - Halaman detail atlet (`/fighters/[slug]`) menyajikan lembar *Tale of the Tape* komprehensif (Rekor Menang-Kalah-Seri, Divisi, Sasana, Catatan timbang badan).

#### 4. LINEUP MUSIK (`/lineup`) & JADWAL ACARA (`/jadwal`)
- **Sebelumnya (V8):**
  - Mengabaikan elemen musik festival, terasa kering dan murni kejuaraan olahraga biasa.
- **Sekarang (V9 Clean Cut):**
  - Halaman Lineup memiliki backdrop panggung festival konser dengan pencahayaan spektakuler.
  - Timetable jadwal acara memisahkan jelas antara sesi ring pertarungan (`COMBAT`) dan konser panggung musik (`STAGE`), dengan pemilih tanggal cepat `12 DES`, `13 DES`, `14 DES`.

#### 5. MERCHANDISE RESMI (`/merch`) & TIKET (`/tiket`)
- **Sebelumnya (V8):**
  - Toko online generik dengan kartu produk kecil dan tombol beli berwarna merah terang di mana-mana.
- **Sekarang (V9 Clean Cut):**
  - Mengadopsi estetika streetwear premium (seperti Gymshark / Fear of God Athletics).
  - Foto produk tampil dominan dengan pilihan ukuran minimalis dan tata cara pengambilan gratis di GOR UNY Yogyakarta.
  - Halaman tiket menyajikan kategori kursi transparan (Ringside Pass, Tribun Reguler, 3-Day Pass) dengan kejelasan status resmi mitra RAWOOH.

#### 6. KOMUNITAS & INFORMASI (`/city-pride`, `/creator`, `/tentang`, `/faq`, `/kontak`)
- **Sebelumnya (V8):**
  - Halaman teks panjang berbaris-baris tanpa jeda visual.
- **Sekarang (V9 Clean Cut):**
  - Narasi kampanye *Di Balik Kalem* dirangkai dengan ritme editorial, foto dokumenter, dan tipografi berdaya baca tinggi.
  - Voting City Pride dan Creator Hub memiliki formulir interaktif clean cut tanpa hiasan yang tidak fungsional.

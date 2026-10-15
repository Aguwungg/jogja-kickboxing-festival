# JKB 2026 — MASTER UI/UX BLUEPRINT V8
## RAW ENERGY × FESTIVAL CULTURE

**Project:** Jogja Kickboxing Festival & Redy Championship 2  
**Event:** 12–14 Desember 2026 — GOR UNY, Yogyakarta  
**Campaign:** #JOGJAPUNYANYALI  
**Creative Narrative:** DI BALIK KALEM  
**Version:** 8.0 — Design Blueprint  
**Status:** Approved Reference Blueprint  
**Scope:** Seluruh antarmuka website publik. Dashboard admin dan arsitektur backend tetap dipertahankan.

---

# 01. PROJECT VISION

## 1.1. Visi Produk

Membangun website resmi JKBF sebagai pusat pengalaman digital festival, bukan sekadar halaman informasi acara atau pengganti Linktree biasa.

Website harus menghubungkan dunia pertandingan kickboxing, musik, komunitas, tiket, merchandise, kreator, dan informasi kunjungan melalui pengalaman yang konsisten, menarik, serta mudah digunakan.

Pengunjung harus memahami dalam beberapa detik:

- Acara ini tentang apa?
- Kapan dan di mana berlangsung?
- Apa yang menarik untuk mereka?
- Di mana melihat jadwal dan informasi tiket?
- Apa yang harus dilakukan selanjutnya?

## 1.2. Creative Direction

**RAW ENERGY × FESTIVAL CULTURE**

Perpaduan dua karakter:

**Combat Energy:** intens, tangguh, kompetitif, penuh emosi dan sportivitas.

**Festival Culture:** ekspresif, muda, komunal, musikal, dan penuh kebanggaan kota.

Desain akhir harus terasa premium, autentik, berani, dan relevan dengan budaya anak muda Jogja.

Bukan website SaaS, dashboard analitik, template turnamen biasa, atau landing page penuh efek visual tanpa tujuan.

## 1.3. Prinsip Utama

1. **Experience over decoration.** Setiap elemen harus membantu pengalaman pengguna.
2. **Clarity before complexity.** Pengunjung memahami informasi sebelum mengeksplorasi detail.
3. **Mobile first.** Pengalaman smartphone mendapat prioritas setara atau lebih tinggi daripada desktop.
4. **Authenticity over artificiality.** Gunakan identitas, fotografi, dan materi resmi ketika tersedia.
5. **Progressive disclosure.** Informasi detail ditampilkan ketika dibutuhkan, bukan ditumpuk di homepage.
6. **One clear action at a time.** Hindari persaingan banyak CTA dalam satu area.
7. **Truthful content.** Jangan menampilkan atlet, artis, harga, pemenang, atau benefit yang belum disahkan sebagai informasi resmi.

---

# 02. TARGET AUDIENCE & USER JOURNEY

## 2.1. Kelompok Pengguna

**Calon penonton umum**
Menginginkan informasi acara, suasana festival, lokasi, jadwal, dan akses tiket dengan cepat.

**Penggemar kickboxing**
Mencari petarung, fight card, divisi, bracket, serta hasil pertandingan ketika sudah tersedia.

**Penggemar musik**
Ingin mengetahui lineup, hari penampilan, dan pengalaman festival tanpa harus memahami detail turnamen.

**Content creator dan media**
Membutuhkan penjelasan program, persyaratan, pendaftaran, akses akun, dan status partisipasi.

**Komunitas pendukung daerah**
Mencari cara mendukung wilayah melalui City Pride apabila program voting sudah resmi dibuka.

## 2.2. User Journey Utama

**Journey A — Discover → Understand → Ticket Information**
Homepage → pahami festival → eksplorasi pertandingan/musik → Info Tiket → RAWOOH ketika integrasi resmi tersedia.

**Journey B — Combat Fan**
Homepage atau menu Pertandingan → Championship → Fight Card → Fighter Profile → Bracket.

**Journey C — Music Fan**
Homepage atau menu Musik → Lineup → pilih tanggal → lihat jadwal yang relevan.

**Journey D — Creator**
Creator Hub → pahami program → daftar → autentikasi → dashboard → kirim tautan konten dan data sesuai alur program yang disahkan.

**Journey E — Festival Visitor**
Homepage → Jadwal → Venue → FAQ → Info Tiket.

Setiap perjalanan harus mempunyai navigasi kembali yang jelas, tidak berputar-putar, dan tidak memaksa pengguna membuka halaman yang tidak relevan.

---

# 03. INFORMATION ARCHITECTURE

## 3.1. Primary Navigation

**Desktop:**
`LOGO JKBF | JADWAL | PERTANDINGAN | MUSIK | MERCH | LAINNYA | [INFO TIKET]`

- Jadwal → `/jadwal`
- Pertandingan → `/championship`
- Musik → `/lineup`
- Merch → `/merch`
- Lainnya → City Pride, Creator Hub, Venue, Tentang, FAQ, Kontak
- Info Tiket → `/tiket`

Fighters dan Bracket tidak perlu menjadi dua menu utama tambahan. Keduanya diakses melalui Championship, tautan kontekstual, dan navigasi terkait.

**Mobile:**
Logo, akses Info Tiket yang ringkas, dan tombol menu.
Menu mobile menampilkan item utama terlebih dahulu, kemudian fitur komunitas dan informasi pendukung.
Tidak perlu menampilkan seluruh 23 rute pada satu daftar panjang tanpa pengelompokan.

## 3.2. Struktur 23 Rute Publik

| Kelompok | Rute | Peran Desain |
|---|---|---|
| Main Experience | `/` | Homepage editorial |
| Event Planning | `/jadwal`, `/tiket`, `/venue` | Informasi praktis |
| Combat | `/championship`, `/fighters`, `/fighters/[slug]`, `/bracket` | Pengalaman pertandingan |
| Music | `/lineup` | Pengalaman festival musik |
| Community | `/city-pride`, `/creator`, `/creator/dashboard` | Partisipasi komunitas |
| Commerce | `/merch`, `/merch/[slug]`, `/checkout`, `/checkout/success/[orderId]` | Katalog dan alur transaksi |
| Streaming | `/ppv`, `/ppv/watch` | Pengalaman siaran, belum diaktifkan |
| Information | `/tentang`, `/faq`, `/kontak` | Informasi pelengkap |
| Legal | `/syarat-ketentuan`, `/kebijakan-privasi` | Dokumen hukum |

Semua rute dipertahankan untuk kompatibilitas aplikasi kecuali terdapat keputusan migrasi yang disetujui secara khusus.
Namun, **tidak semua rute harus dapat diakses melalui navigasi publik selama fase pra-event**.

---

# 04. HOMEPAGE — MASTER EXPERIENCE

Homepage dirancang menggunakan empat section utama. Header dan footer tidak dihitung sebagai section.

## SECTION 01 — IMMERSIVE HERO
- **Kicker:** `JOGJA KICKBOXING FESTIVAL × REDY CHAMPIONSHIP 2`
- **Main headline:** `JOGJA PUNYA NYALI.`
- **Creative supporting line:** `DI BALIK KALEM`
- **Informasi utama:** `12–14 DESEMBER 2026 — GOR UNY, YOGYAKARTA`
- **Primary CTA:** `INFO TIKET`
- **Secondary text link:** `LIHAT JADWAL`

## SECTION 02 — THE RING / THE STAGE
- Dua dunia berdampingan: aksi laga kickboxing dan panggung musik.
- Tidak menggunakan dua kartu dashboard identik.

## SECTION 03 — PLAN YOUR VISIT
- Tiga modul ringkas: Jadwal Festival, Venue GOR UNY, Informasi Tiket.
- Boleh menggunakan latar warm ivory untuk transisi ritme visual editorial.

## SECTION 04 — BEYOND THE FESTIVAL
- Program komunitas pendukung: City Pride, Creator Hub, Official Merchandise.

---

# 05. DESIGN SYSTEM & TECHNICAL BOUNDARIES

- **Warna:** Deep Black (`#09090B`), Surface Black (`#17171B`), Brand Red (`#D91F2C`), Warm Ivory (`#F5F3EE`), Muted Grey (`#A7A7AD`), Border Dark (`#303036`).
- **Tipografi:** Barlow Condensed ExtraBold/Black (Display/Headlines) + Inter (UI/Body).
- **Backend & Database Invariant:** Database SQLite (`prisma/dev.db`), skema Prisma, session NextAuth, middleware edge, dan dashboard admin tetap dipertahankan 100%.
- **Commercial Safety:** Kill-switch pembayaran, integrasi sandbox, dan pencegahan transaksi mock tetap aktif.

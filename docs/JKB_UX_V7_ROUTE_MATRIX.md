# JKB 2026 — UX V7 ROUTE MATRIX & STATUS AUDIT (FINAL)

> **Core Principle:** THE EVENT FIRST. EVERYTHING ELSE, WHEN NEEDED.  
> **Creative Direction:** GLORY Kickboxing × We The Fest (#JOGJAPUNYANYALI • DI BALIK KALEM)

Dokumen ini memetakan seluruh rute di aplikasi JKB 2026 berdasarkan hasil implementasi arsitektur UX V7. Seluruh 35 rute telah diverifikasi secara visual pada browser (desktop 1440px & mobile 390px), dikompilasi tanpa error, dan dilindungi oleh safety gate Milestone 9A.

---

## 1. Rute Publik Utama (Primary Public Experience)

| Rute | Nama Fitur | Status UX V7 | Mobile Ready (390px) | Backend / CMS | Status Verifikasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | **VERIFIED (4 Blok)** | Ya (Responsif) | Prisma CMS | Lolos verifikasi visual browser. 4 Blok terfokus: Hero, 2 Paths, Plan Visit, Explore More. Hapus countdown fiktif. |
| `/jadwal` | Jadwal Acara | **VERIFIED** | Ya (1 Selector) | CMS ScheduleItem | 3 tab tanggal bersih (12, 13, 14 Des), timeline kronologis tunggal, detail expandable. |
| `/championship` | Kejuaraan Redy Cup 2 | **VERIFIED** | Ya (Responsif) | Prisma Athlete | Penjelasan 4 divisi berat badan resmi & regulasi aturan K-1 tanpa jargon teknis. |
| `/bracket` | Bagan Turnamen | **VERIFIED** | Ya (Pola NCAA) | CMS Matches | Desktop: bagan pohon utuh. Mobile: Alur bertahap (Pilih Divisi → Pilih Ronde → Daftar Pertandingan). |
| `/fighters` | Fighter Center | **VERIFIED** | Ya (Responsif) | CMS Athlete | Heading KENALI PARA PETARUNG, pencarian utama, filter lanjutan collapsible, tanpa badge demo. |
| `/fighters/[slug]` | Profil Petarung | **VERIFIED** | Ya (Responsif) | CMS Athlete Detail | Identitas petarung utama, rekor kemenangan, banner staging teknis dibersihkan. |
| `/lineup` | Lineup Musik | **VERIFIED** | Ya (Performer-First) | CMS Performer | Performer-first visual, tipografi artis jelas, banner staging teknis dibersihkan. |
| `/tiket` | Informasi Tiket | **VERIFIED** | Ya (Responsif) | Pengumuman Resmi | Teks developer/sandbox ("Wadah Integrasi Rawooh") dibersihkan. Pengumuman resmi tiket terverifikasi. |

---

## 2. Rute Publik Komunitas & E-Commerce

| Rute | Nama Fitur | Status UX V7 | Mobile Ready (390px) | Backend / Security | Status Verifikasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/city-pride` | City Pride Voting | **VERIFIED** | Ya (5 Langkah) | API Anti-Abuse (`/api/vote`) | Voting interface 3 wilayah di depan; leaderboard tidak menutupi layar; aturan expandable; 1 akun 1 suara aktif. |
| `/creator` | Creator Hub (Landing) | **VERIFIED** | Ya (3 Langkah) | Server Actions | Alur partisipasi 3 langkah; tab registrasi kreator & akreditasi media; pisah dari dashboard internal. |
| `/creator/dashboard` | Creator Dashboard | **VERIFIED** | Ya (Responsif) | Session Protected | Area khusus kreator terdaftar untuk memantau poin, riwayat video, dan barcode tiket. |
| `/merch` | Official Merchandise | **VERIFIED** | Ya (Shopify Dawn) | CMS Product & Variants | Katalog produk bersih; badge palsu & stok buatan dibersihkan; transaksi riil ditahan menunggu Rawooh. |
| `/merch/[slug]` | Detail Produk Merch | **VERIFIED** | Ya (Responsif) | CMS Product Detail | Detail apparel, varian ukuran, dan spesifikasi material Di Balik Kalem. |
| `/checkout` | Checkout (Legacy) | **GATED** | Ya | Milestone 9A Safety | Simulator internal dikunci untuk staging saja; tidak dibuka sebagai checkout publik riil. |
| `/checkout/success/[orderId]` | Order Success | **GATED** | Ya | Order lookup | Lookup pesanan terisolasi. |

---

## 3. Rute Informasi & Legal

| Rute | Nama Fitur | Status UX V7 | Mobile Ready (390px) | Data / Sumber | Status Verifikasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/venue` | Panduan Lokasi GOR UNY | **VERIFIED** | Ya (Responsif) | Fakta Resmi UNY | Fokus GOR UNY, alamat Jl. Colombo No. 1, link Google Maps, akses transportasi. Zonasi fiktif dihapus. |
| `/tentang` | Tentang JKB 2026 | **VERIFIED** | Ya (Responsif) | Narasi Otentik | Bahasa Indonesia natural, manifesto Di Balik Kalem & #JOGJAPUNYANYALI tanpa slogan AI abstrak. |
| `/faq` | Pertanyaan Umum | **VERIFIED** | Ya (Accordion) | FAQ Akurat | Pertanyaan seputar tiket, arena, dan keamanan. Jam buka fiktif dan promosi PPV komersial dibersihkan. |
| `/kontak` | Kontak Panitia | **VERIFIED** | Ya (Responsif) | API `/api/contact` | Informasi sekretariat resmi dan formulir kontak tervalidasi. |
| `/syarat-ketentuan` | Syarat & Ketentuan | **VERIFIED** | Ya | Legal text | Teks legal festival & aturan penonton. |
| `/kebijakan-privasi` | Kebijakan Privasi | **VERIFIED** | Ya | Legal text | Teks privasi data pengunjung dan akun kreator. |

---

## 4. Rute Khusus & Terisolasi (PPV & Admin)

| Rute | Nama Fitur | Status UX V7 | Mobile Ready | Keamanan & RBAC | Status Verifikasi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/ppv` | PPV Info / Pass | **UNPROMOTED** | Ya | Milestone 9A Gated | Kode & data aman; tidak dipromosikan di navigasi publik utama sampai keputusan resmi disetujui. |
| `/ppv/watch` | PPV Live Streaming | **PROTECTED** | Ya | Entitlement Gate | Akses video siaran dikunci ketat; wajib verifikasi status pembayaran aktif. |
| `/admin/*` (12 rute) | Admin Console | **VERIFIED** | Ya (Mobile Drawer) | NextAuth RBAC (ADMIN) | Sidebar mobile otomatis menjadi drawer slide-over; tabel responsif; CRUD fungsional. |

---

## Ringkasan Verifikasi Teknis

- **Total Rute Terdaftar:** 35 rute
- **Status Kompilasi TypeScript (`tsc --noEmit`):** 0 Error
- **Status Next.js Production Build (`npm run build`):** 31/31 Rute Berhasil Dioptimasi
- **Status Commercial Safety (`test-commercial-safety.ts`):** 11/11 Pengujian Lolos

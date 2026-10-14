# JKBF V10 — DAFTAR KEPUTUSAN KUNCI EVENT ORGANIZER (EO) & TAHAP LANJUTAN
## ACTIONABLE CHECKLIST UNTUK KOMITE PELAKSANA FESTIVAL

**Tanggal:** 14 Oktober 2026  
**Status Platform:** Frontend Publik V10 Siap 100% pada Cabang `design/jkbf-v10-art-directed`  

---

### 1. KEPUTUSAN KOMERSIAL & OPERASIONAL YANG DIBUTUHKAN DARI EO

| No | Topik Keputusan | Deskripsi Kebutuhan & Rekomendasi | PIC Terkait | Status Saat Ini |
| :---: | :--- | :--- | :---: | :---: |
| **01** | **Jadwal Rilis Tiket RAWOOH** | Penentuan tanggal pasti pembukaan loket presale dan public sale pada platform mitra resmi RAWOOH. Saat ini halaman `/tiket` menampilkan notice prapembukaan resmi. | Ticketing Division / EO | Menunggu Tanggal Pembukaan |
| **02** | **Konfirmasi Roster Petarung** | Finalisasi 8 nama atlet per divisi sabuk emas K-1 (Bantam, Feather, Light, Welter) untuk penguncian data bagan turnamen di `/bracket`. | Matchmaker / Komite Teknik | Draf Terverifikasi |
| **03** | **Pengumuman Lineup Musisi** | Kepastian jadwal rilis Fase 1 dan Fase 2 penampilan panggung musik di `/lineup`. | Festival Director / Music Curator | Teaser Aktif |
| **04** | **Inventarisasi Merchandise** | Penentuan kuota stok fisik dan harga resmi official streetwear apparel di `/merch` sebelum pembukaan pre-order publik. | Merchandise Division | Katalog Terpasang (Gated) |
| **05** | **Logo Mitra & Sponsor** | Pengiriman aset vektor resmi sponsor pendukung (KONI DIY, Pemda DIY, sponsor apparel & hidrasi) untuk ditampilkan di footer broadsheet. | Sponsorship Team | Siap Integrasi |
| **06** | **Aktivasi Payment Gateway (Midtrans)** | Pengisian kunci API produksi `MIDTRANS_SERVER_KEY` & `MIDTRANS_CLIENT_KEY` pada file `.env` ketika izin resmi Go-Live diperoleh. | IT Lead & Finance | Mode Staging Aman |

---

### 2. PANDUAN PENINJAUAN LOKAL OLEH PEMILIK PROYEK

Untuk meninjau seluruh 23 halaman yang telah selesai dirombak secara langsung di browser lokal:

1. Pastikan server lokal berjalan:
   ```bash
   npm run dev
   ```
2. Buka URL utama di browser Anda:
   - **Homepage:** `http://localhost:3000`
   - **Championship:** `http://localhost:3000/championship`
   - **Daftar Petarung:** `http://localhost:3000/fighters`
   - **Bagan Turnamen:** `http://localhost:3000/bracket`
   - **Lineup Musik:** `http://localhost:3000/lineup`
   - **Jadwal 3 Hari:** `http://localhost:3000/jadwal`
   - **Merchandise:** `http://localhost:3000/merch`
   - **Panduan Venue:** `http://localhost:3000/venue`
   - **Info Tiket:** `http://localhost:3000/tiket`
   - **Pusat Bantuan (FAQ):** `http://localhost:3000/faq`
   - **Kontak Panitia:** `http://localhost:3000/kontak`

---

*Seluruh sistem frontend V10 telah selesai dibangun dengan standar art direction tertinggi dan siap dipresentasikan.*

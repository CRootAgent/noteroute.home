# NoteRoute.Home 🌐
> **Official Landing Page, Portal Dokumentasi & Pusat Unduhan APK NoteRoute**  
> Proyek 2 – *CRUD & Code Coverage* | D4 Teknik Informatika, Universitas Logistik dan Bisnis Internasional (ULBI)

---

## 👥 Tim Pengembang (Kelompok 12)
- **Ahmad Zakky Nurfauzan** (NPM: 714250028) – Ketua Tim *(Modul A)*
- **Izat Ibrahimovic Irawan** (NPM: 714250024) – Anggota Tim *(Modul B)*

**Dosen Pembimbing:** Rolly Maulana Awangga, S.T., M.T., CAIP.  
**Target Deadline Rilis:** 10 November 2026 (v1.0.0)

---

## 🎯 Peran Repositori Ini
Repositori **`noteroute.home`** dikhususkan secara eksklusif sebagai portal publik dan landing page resmi untuk NoteRoute, yang di-deploy menggunakan **GitHub Pages**:
- 🔗 **Live Website GitHub Pages**: [https://crootagent.github.io/noteroute.home/](https://crootagent.github.io/noteroute.home/)
- 📦 **Repositori Aplikasi Utama**: [https://github.com/CRootAgent/noteroute](https://github.com/CRootAgent/noteroute) (Backend Node.js/Express, React 18 SPA, dan Android Native Kotlin)

---

## ✨ Fitur & Konten Landing Page
1. **Pusat Unduhan APK Resmi**:
   - Terintegrasi langsung dengan GitHub Releases API repositori `CRootAgent/noteroute`.
   - Mengambil versi tag rilis terbaru, ukuran file, tanggal rilis, dan tombol unduh langsung file biner `.apk` hasil build otomatis GitHub Actions CI/CD.
2. **Panduan Pengguna & Pengaturan Cloud (Lengkap)**:
   - **Langkah 1 (Setup Laptop):** Panduan menjalankan agen sinkronisasi dokumen laptop.
   - **Langkah 2 (API Key Gratis):** Cara mendapatkan kunci API Google Gemini (AI Studio) & Groq Cloud tanpa biaya.
   - **Langkah 3 (9Router Lokal):** Konfigurasi inferensi offline lokal pada port 20128.
   - **Langkah 4 (Cloud & Database):**
     - **GCP / AI Studio:** Kuota 1.500 req/hari & 1 Juta token.
     - **Render Cloud:** Hosting backend Node.js (100% gratis tanpa kartu kredit).
     - **MongoDB Atlas:** Database cloud NoSQL cluster M0 Shared.
3. **Didukung Micro-Framework JSCroot**:
   - Memanfaatkan library **JSCroot (CRootJS)** buatan Pak Rolly Maulana Awangga (`jscroot/element` & `jscroot/api`) untuk fetch API metadata rilis GitHub dan manipulasi DOM reaktif tanpa build step.
4. **Tautan Langsung ke Aplikasi Utama**:
   - Pengunjung dapat langsung mengakses web app utama NoteRoute yang di-host di Render ([https://noteroute-backend.onrender.com](https://noteroute-backend.onrender.com)) melalui tombol navigasi.

---

## 📂 Struktur Berkas
```
noteroute.home/
├── index.html       # Berkas utama landing page resmi NoteRoute
├── js/
│   └── main.js      # Skrip modul JSCroot (GitHub Release API & Tab Switcher Panduan)
├── .nojekyll        # Konfigurasi bypass pemrosesan Jekyll di GitHub Pages
└── README.md        # Dokumentasi repositori
```

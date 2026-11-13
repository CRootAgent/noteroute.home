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
2. **Panduan Pengguna (3 Langkah Cepat)**:
   - **Langkah 1 (Setup Laptop):** Panduan menjalankan backend Express.js NoteRoute di laptop.
   - **Langkah 2 (API Key Gratis):** Cara mendapatkan kunci API Google Gemini (AI Studio) & Groq Cloud tanpa biaya.
   - **Langkah 3 (9Router Lokal):** Konfigurasi inferensi offline lokal pada port 20128.
3. **Teknologi Frontend Modern**:
   - Dibangun dengan **React 18 + Vite + Tailwind CSS** dan **Lucide React Icons**, terorganisir modular dalam komponen.
4. **Tautan Langsung ke Aplikasi Utama**:
   - Pengunjung dapat langsung mengakses web app utama NoteRoute ([https://crootagent.github.io/noteroute](https://crootagent.github.io/noteroute/)) saat akun telah masuk.

---

## 📂 Struktur Berkas
```
noteroute.home/
├── index.html          # Entry point SPA terkompilasi untuk GitHub Pages
├── assets/             # Asset bundle JS & CSS terkompilasi
├── src/                # Komponen modular React 18 + Tailwind CSS
│   ├── components/     # Navbar, Hero, About, HowItWorks, Features, Ecosystem, QuickGuide, AuthModal, Footer
│   ├── App.jsx         # Root component & state management
│   ├── main.jsx        # Entry point React DOM
│   └── index.css       # Tailwind CSS directives
├── index.html.template # Template HTML untuk mode pengembangan Vite
├── vite.config.js      # Konfigurasi Vite & sinkronisasi otomatis GitHub Pages
├── tailwind.config.js  # Konfigurasi Tailwind CSS
└── README.md           # Dokumentasi repositori
```

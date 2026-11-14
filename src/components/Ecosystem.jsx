import React from 'react';
import { Laptop, Smartphone, CheckCircle2, ArrowRight, Download } from 'lucide-react';

export default function Ecosystem() {
  const APK_URL = "https://github.com/CRootAgent/noteroute/releases/latest";
  
  const getWebAppUrl = () => {
    if (typeof window !== 'undefined') {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3000/';
      }
    }
    return 'https://crootagent.github.io/noteroute/';
  };

  return (
    <section id="ekosistem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <i className="fa-solid fa-layer-group text-xs"></i>
          <span>Arsitektur Sistem</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ekosistem NoteRoute Multi-Platform
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Dirancang khusus untuk mendukung produktivitas riset dan perkuliahan pada 2 platform utama yang terintegrasi penuh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Pilar 1: NoteRoute Versi Web */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl shadow-xs">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono">
                Versi Web
              </span>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Web Workspace &amp; Studio Analisis
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Akses via peramban laptop dan komputer desktop
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Antarmuka grounded notebook 3-kolom modern bergaya Google NotebookLM. Dilengkapi Multi-LLM Heuristic Router (Gemini, Groq, DeepSeek, 9Router Local) untuk tanya jawab dokumen dengan sitasi nomor halaman akurat, serta Studio Audio Overview (Deep Dive).
            </p>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Multi-LLM Heuristic Router dengan failover otomatis</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Studio Ikhtisar Audio (Audio Deep Dive) &amp; Ringkasan Cepat</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sitasi kutipan transparan nomor halaman dokumen</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Beranda manajemen notebook &amp; multi-format (PDF, DOCX, TXT, MD)</span>
              </li>
            </ul>
          </div>

          <a
            href={getWebAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-md shadow-blue-500/20 transition cursor-pointer"
          >
            <span>Buka NoteRoute Web</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Pilar 2: NoteRoute Versi Android */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shadow-xs">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                Versi Android
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Klien Mobile Native Kotlin
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Aplikasi mobile smartphone Android (APK v1.0.0)
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Aplikasi mobile native yang ringan dan responsif, dirancang untuk mahasiswa membaca materi kuliah di mana saja. Terhubung langsung ke workspace web dengan sinkronisasi instan dan pembaca dokumen offline.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Android Keystore Hardware-backed untuk keamanan kunci</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pembaca materi dokumen &amp; offline cache di HP</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sinkronisasi real-time workspace dan riwayat catatan</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Streaming unduh berkas langsung dari laptop ke ponsel</span>
              </li>
            </ul>
          </div>

          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/20 transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh APK Android (v1.0.0)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

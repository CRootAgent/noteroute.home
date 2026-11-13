import React from 'react';
import { Download, ArrowRight, Sparkles, CheckCircle2, Zap, Shield, Laptop } from 'lucide-react';

export default function Hero({ onOpenAuth, onOpenMainApp, user }) {
  const APK_DOWNLOAD_URL = "https://github.com/CRootAgent/noteroute/releases/latest";

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
        {/* Release Tag Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NoteRoute 2.0 &bull; Multi-LLM Grounded Notebook</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
          Akses Cepat Materi Kuliah &amp; Catatan Laptop Langsung dari <span className="text-blue-600 dark:text-blue-400">HP Android</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Sinkronisasi berkas dokumen lokal dengan router multi-LLM hemat biaya (Google Gemini 1.5 Flash, Groq Llama 3.3, DeepSeek R1 &amp; 9Router lokal) disertai sitasi kutipan transparan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh NoteRoute APK (v1.0.0)</span>
          </a>

          {user ? (
            <button
              onClick={onOpenMainApp}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
            >
              <span>Buka Aplikasi Utama</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
            >
              <span>Daftar / Masuk Akun</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Key Feature Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>1.500 Kuota Gratis / Hari</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Inferensi Google Gemini 1.5 Flash dengan jendela konteks 1 Juta token untuk membaca PDF kuliah tebal.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
            <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Laptop className="w-4 h-4" />
              <span>300+ Token / Detik</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Kecepatan inferensi instan Groq Cloud Llama 3.3 70B saat memerlukan respons kilat tanpa jeda.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
            <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4" />
              <span>Rp 0 Biaya Bulanan</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Smart Heuristic Failover router otomatis mengalihkan beban kueri tanpa risiko langganan berbayar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

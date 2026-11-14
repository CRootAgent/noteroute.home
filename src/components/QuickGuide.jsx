import React, { useState } from 'react';
import { Download, Laptop, Smartphone, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export default function QuickGuide() {
  const [activeTab, setActiveTab] = useState('web');
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
    <section id="panduan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <i className="fa-solid fa-book-open text-xs"></i>
          <span>Panduan Penggunaan &amp; Unduh APK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Panduan Cara Penggunaan NoteRoute
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Pelajari langkah mudah menggunakan NoteRoute pada versi Web peramban laptop dan aplikasi mobile Android.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Cols: Interactive Guide Tabs */}
        <div className="lg:col-span-2 space-y-4">
          {/* Tab Navigation Buttons */}
          <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('web')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center space-x-2 ${
                activeTab === 'web'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>1. Cara Penggunaan Versi Web</span>
            </button>

            <button
              onClick={() => setActiveTab('android')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center space-x-2 ${
                activeTab === 'android'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>2. Cara Penggunaan Versi Android</span>
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[320px]">
            {activeTab === 'web' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Laptop className="w-4 h-4 text-blue-500" />
                    <span>Langkah Mudah Menggunakan NoteRoute Web</span>
                  </h3>
                  <a
                    href={getWebAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <span>Buka Web App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Masuk atau Buat Akun Baru</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Klik tombol <strong>Masuk / Daftar</strong>. Masukkan email dan sandi minimal 8 karakter (kombinasi kapital, huruf kecil, angka, dan simbol).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Buat Notebook &amp; Unggah Berkas Kuliah</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Di Beranda, tekan <strong>+ Buat baru</strong>. Masuk ke workspace dan unggah slide atau modul kuliah (PDF, DOCX, TXT, Markdown).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Tanya Jawab Multi-LLM dengan Sitasi Halaman</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Ketik pertanyaan di panel tengah. Pilih AI: Gemini 1.5 Flash, Llama 3.3 70B, DeepSeek R1/V3, atau 9Router Lokal. Dapatkan jawaban dengan kutipan akurat.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Manfaatkan Panel Studio &amp; Ikhtisar Audio</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Gunakan panel kanan untuk membuat Panduan Belajar, Briefing Doc, FAQ, Linimasa catatan, dan dengarkan Ikhtisar Audio (Deep Dive).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                    <span>Langkah Menggunakan Klien Android NoteRoute</span>
                  </h3>
                  <a
                    href={APK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-500 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <span>Unduh APK</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Unduh &amp; Pasang APK NoteRoute</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Unduh berkas APK melalui kartu di samping. Buka di smartphone Android Anda dan berikan izin pemasangan aplikasi pihak ketiga.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Masuk Menggunakan Akun yang Sama</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Login dengan email dan sandi yang telah Anda daftarkan di web. Daftar notebook dan berkas materi otomatis tersinkronisasi.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Baca Materi Kuliah Secara Offline</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Dokumen yang telah diunduh tersimpan dalam cache lokal HP. Baca slide materi kuliah kapan saja tanpa memerlukan kuota internet.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Keamanan Kunci via Hardware Keystore</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Kunci API disimpan secara hardware-backed menggunakan Android Keystore untuk privasi data mahasiswa yang optimal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Col: APK Download Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-600 to-indigo-700 text-white shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Paket Rilis Android Resmi</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">Unduh NoteRoute APK</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Dapatkan installer APK versi 1.0.0 siap pasang untuk semua tipe smartphone Android (versi 10.0 ke atas).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-blue-100">
              <span>Versi Rilis</span>
              <span className="font-mono font-bold text-white">v1.0.0 (Stable)</span>
            </div>
            <div className="flex justify-between items-center text-blue-100">
              <span>Ukuran Berkas</span>
              <span className="font-mono text-white">~24.8 MB</span>
            </div>
            <div className="flex justify-between items-center text-blue-100">
              <span>Minimum OS</span>
              <span className="text-white">Android 10.0 (API 29+)</span>
            </div>
            <div className="flex justify-between items-center text-blue-100">
              <span>Integritas</span>
              <span className="text-emerald-300 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SHA-256 Validated</span>
              </span>
            </div>
          </div>

          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl bg-white hover:bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh File APK Sekarang</span>
          </a>

          <div className="flex items-center space-x-2 text-[11px] text-blue-200">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-300" />
            <span>Bebas iklan, aman, dan telah diverifikasi sebelum rilis publik.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

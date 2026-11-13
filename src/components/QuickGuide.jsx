import React, { useState } from 'react';
import { Download, Terminal, Key, Cpu, CheckCircle2, ExternalLink } from 'lucide-react';

export default function QuickGuide() {
  const [activeTab, setActiveTab] = useState('laptop');
  const APK_URL = "https://github.com/CRootAgent/noteroute/releases/latest";

  return (
    <section id="panduan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" />
          <span>Panduan Cepat &amp; APK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Mulai Menggunakan NoteRoute dalam 3 Langkah
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Ikuti panduan ringkas di bawah ini untuk menghubungkan laptop Anda ke aplikasi Android.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Cols: Interactive Guide Tabs */}
        <div className="lg:col-span-2 space-y-4">
          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('laptop')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'laptop'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>1. Setup Laptop</span>
            </button>

            <button
              onClick={() => setActiveTab('apikey')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'apikey'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>2. API Key Gratis</span>
            </button>

            <button
              onClick={() => setActiveTab('9router')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === '9router'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>3. OmniRoute / 9Router Lokal</span>
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[260px]">
            {activeTab === 'laptop' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Langkah 1: Jalankan Backend NoteRoute di Laptop
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Server backend lokal bertugas mengekstrak berkas dokumen materi kuliah dan menyediakan REST API Gateway untuk diakses oleh HP Android.
                </p>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto space-y-1">
                  <div className="text-slate-500"># 1. Buka terminal laptop dan masuk ke folder server</div>
                  <div className="text-blue-400">cd noteroute/server</div>
                  <div className="text-slate-500 pt-2"># 2. Pasang dependensi dan jalankan server Express</div>
                  <div className="text-emerald-400">npm install</div>
                  <div className="text-emerald-400">npm start</div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Server aktif di port 3000 dan langsung tersambung ke database MongoDB Atlas.</span>
                </div>
              </div>
            )}

            {activeTab === 'apikey' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Langkah 2: Dapatkan API Key Gratis (Rp 0)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  NoteRoute dirancang menggunakan kuota inferensi gratis dari Google AI Studio dan Groq Cloud:
                </p>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Google Gemini 1.5 Flash</div>
                      <div className="text-[11px] text-slate-500">1.500 request/hari gratis (1M context window)</div>
                    </div>
                    <a
                      href="https://aistudio.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold flex items-center space-x-1"
                    >
                      <span>aistudio.google.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Groq Cloud (Llama 3.3 70B)</div>
                      <div className="text-[11px] text-slate-500">Inferensi kilat 300+ token/detik</div>
                    </div>
                    <a
                      href="https://console.groq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center space-x-1"
                    >
                      <span>console.groq.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Salin kunci ke berkas <code className="font-mono text-slate-400">server/.env</code> atau simpan langsung di menu Pengaturan aplikasi Android NoteRoute.
                </p>
              </div>
            )}

            {activeTab === '9router' && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Langkah 3: Jalankan OmniRoute / 9Router Lokal (Opsional)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Jika Anda menjalankan daemon 9Router atau model lokal di laptop pada port <code>20128</code>:
                </p>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto space-y-1">
                  <div className="text-slate-500"># Jalankan 9Router daemon di laptop</div>
                  <div className="text-blue-400">9router start --port 20128</div>
                  <div className="text-slate-500 pt-2"># Endpoint OpenAI-compatible aktif di:</div>
                  <div className="text-emerald-400">http://localhost:20128/v1/chat/completions</div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Router NoteRoute akan otomatis mendeteksi ketersediaan port 20128 untuk inferensi offline.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: APK Download Card */}
        <div className="p-6 rounded-3xl bg-blue-600 text-white shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
            <Download className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Rilis Resmi GitHub</span>
            <h3 className="text-xl font-bold mt-0.5">NoteRoute Android APK</h3>
          </div>
          <p className="text-xs text-blue-100 leading-relaxed">
            Pasang langsung di HP Android Anda. Terkoneksi ke laptop dan mendukung pembaca dokumen serta inferensi AI instan.
          </p>

          <div className="p-3.5 rounded-2xl bg-white/10 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-blue-200">Versi:</span>
              <span className="font-bold">v1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Arsitektur:</span>
              <span className="font-bold">Kotlin / Android 8.0+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Format:</span>
              <span className="font-bold">Universal APK</span>
            </div>
          </div>

          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-blue-600 font-bold text-xs flex items-center justify-center space-x-2 transition shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Berkas APK (.apk)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

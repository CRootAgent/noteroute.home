import React from 'react';
import { GitBranch, Cpu, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Alur Eksekusi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Cara Kerja Multi-LLM Heuristic Router
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Arsitektur cerdas yang mengalihkan kueri secara otomatis ketika kuota limit tercapai.
          </p>
        </div>

        {/* Interactive Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
              1
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Kueri &amp; Konteks</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Mahasiswa bertanya via HP Android atau Web Workspace dengan memilih dokumen rujukan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
              2
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Ekstraksi Dokumen</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Server membedah teks PDF/DOCX dan mengekstrak cuplikan paragraf paling relevan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
              3
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Prioritas Kuota Rp 0</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Kueri diarahkan ke Google Gemini 1.5 Flash (1.500 req/hari gratis jendela 1M konteks).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center mx-auto">
              4
            </div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">Smart Failover</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Jika HTTP 429 (Rate Limit), dialihkan seketika ke Groq Cloud Llama 3.3 atau 9Router lokal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

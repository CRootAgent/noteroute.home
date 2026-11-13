import React from 'react';
import { BookOpen, FileCheck, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tentang NoteRoute</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Menghubungkan Berkas Laptop dengan Pengalaman AI di HP Android
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            NoteRoute memecahkan kendala mahasiswa dan peneliti yang sering kesulitan membaca dokumen kuliah tebal (PDF, DOCX, Markdown) saat bepergian atau menggunakan ponsel pintar.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Grounded Citations Transparan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Setiap kutipan jawaban AI disertai nomor halaman dan cuplikan teks dokumen asli sehingga bebas dari halusinasi generik.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Multi-LLM Gateway Bebas Kuota</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Tidak bergantung pada satu vendor API. Pengguna bebas beralih antara Gemini, Groq, DeepSeek, atau OmniRoute lokal.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Keamanan Keystore Terenkripsi</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Kunci API disimpan secara terenkripsi di Android Keystore atau file lingkungan server lokal tanpa kebocoran data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Card Mockup */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-200 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-500">noteroute-pipeline-v2.0</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Kueri Mahasiswa:</span>
            <p className="text-xs text-slate-300 font-mono">
              "Jelaskan prinsip konsistensi data terdistribusi pada Bab 3 materi kuliah!"
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Respons Terverifikasi:</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono">Gemini 1.5 Flash</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Konsistensi data terdistribusi mensyaratkan setiap replika memiliki salinan status yang seragam melalui konsensus Raft atau Paxos.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center space-x-2">
              <span className="text-[10px] text-slate-500">Sitasi:</span>
              <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">
                Slide_Bab3_Distributed_Systems.pdf (Hal. 14)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

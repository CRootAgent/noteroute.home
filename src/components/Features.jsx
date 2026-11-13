import React from 'react';
import { Sparkles, FileText, Smartphone, Shuffle, ShieldCheck, DollarSign } from 'lucide-react';

export default function Features() {
  const list = [
    {
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      title: "Multi-LLM Gateway Router",
      desc: "Menghubungkan Google Gemini 1.5 Flash (1M konteks), Groq Cloud Llama 3.3 70B, DeepSeek R1, dan 9Router lokal dalam satu antarmuka terpadu."
    },
    {
      icon: <FileText className="w-5 h-5 text-indigo-500" />,
      title: "Grounded Citations Transparan",
      desc: "Setiap respons AI memuat rujukan nomor halaman dan cuplikan kalimat asli dari file PDF atau DOCX kuliah Anda, mencegah halusinasi jawaban."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      title: "Sinkronisasi Laptop ke HP Android",
      desc: "Aplikasi Android Native Kotlin membaca folder laptop Anda secara real-time. Unduh berkas materi langsung ke penyimpanan lokal HP."
    },
    {
      icon: <Shuffle className="w-5 h-5 text-amber-500" />,
      title: "Smart Heuristic Failover",
      desc: "Ketika provider utama menyentuh status 429 (Rate Limit), sistem otomatis mengalihkan inferensi ke target cadangan tanpa menggagalkan obrolan."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
      title: "Keamanan Keystore Terenkripsi",
      desc: "Kunci API pribadi disimpan di Android Keystore atau file lingkungan server terproteksi tanpa terekspos ke publik."
    },
    {
      icon: <DollarSign className="w-5 h-5 text-teal-500" />,
      title: "Optimasi Biaya Token Rp 0",
      desc: "Dirancang khusus bagi mahasiswa: memanfaatkan kuota gratis pengembang secara cerdas sehingga tidak memerlukan kartu kredit sama sekali."
    }
  ];

  return (
    <section id="fitur" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fitur Unggulan</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Dirancang untuk Efisiensi Belajar &amp; Riset Akademis
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Kombinasi teknologi canggih yang mempermudah interaksi mahasiswa dengan koleksi materi digital mereka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/30 transition group"
          >
            <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition">
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

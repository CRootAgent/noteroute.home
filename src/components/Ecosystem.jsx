import React from 'react';
import { Server, Smartphone, Database, CheckCircle2 } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section id="ekosistem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Server className="w-3.5 h-3.5" />
          <span>Arsitektur Sistem</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ekosistem NoteRoute 3 Pilar Terintegrasi
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Dirancang modular sesuai standar industri rekayasa perangkat lunak dan arsitektur Proyek 2.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Modul A: Server Backend */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Modul A</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Express.js &amp; AI Router</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            REST API Gateway lokal/cloud yang mengelola ekstraksi teks dokumen, perhitungan token, dan orkestrasi inferensi multi-LLM.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>35/35 Test Suite Jest (87%+ Coverage)</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Streaming Download Berkas ke HP</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Isolasi Workspace Per-User ID</span>
            </li>
          </ul>
        </div>

        {/* Modul B: Android Native */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Modul B</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Native Android Kotlin</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Klien mobile native dengan estetika Google NotebookLM, pembaca dokumen lokal, dan penyimpan kunci API terenkripsi.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Android Keystore Hardware-backed</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Download Berkas &amp; Offline Cache</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Otomatisasi Rilis APK via GitHub Actions</span>
            </li>
          </ul>
        </div>

        {/* Cloud Database */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Database Cloud</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">MongoDB Atlas M0</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Kluster database cloud tersinkronisasi yang menyimpan metadata workspace, riwayat chat, dan indeks berkas secara aman.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>IP Whitelist 0.0.0.0/0 Aktif</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Schema Mongoose dengan Validasi Ketat</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Dukungan Enkripsi At-Rest &amp; In-Transit</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

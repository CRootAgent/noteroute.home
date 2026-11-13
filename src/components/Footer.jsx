import React from 'react';
import { FolderOpen, Code2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 text-xs text-slate-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <FolderOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">NoteRoute 2.0</div>
              <div className="text-[11px] text-slate-500">Personal Knowledge Agent &amp; Multi-LLM Gateway</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-medium">
            <a
              href="https://github.com/CRootAgent/noteroute"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Code2 className="w-4 h-4" />
              <span>GitHub noteroute</span>
            </a>
            <a
              href="https://github.com/CRootAgent/noteroute.home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>GitHub noteroute.home</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 text-[11px] text-slate-400">
          <div>
            &copy; 2026 <strong>NoteRoute</strong> &bull; Proyek 2 D4 Teknik Informatika, Politeknik Pos Indonesia (ULBI).
          </div>
          <div>
            Pengembang: <strong>Ahmad Zakky Nurfauzan</strong> (Modul A) &amp; <strong>Izat Ibrahimovic</strong> (Modul B).
          </div>
        </div>
      </div>
    </footer>
  );
}

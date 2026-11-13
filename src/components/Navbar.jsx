import React, { useState, useEffect, useRef } from 'react';
import { 
  FolderOpen, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  LogIn, 
  LogOut, 
  Camera, 
  Trash2, 
  User, 
  ShieldCheck 
} from 'lucide-react';

export default function Navbar({ 
  user, 
  theme, 
  onToggleTheme, 
  onOpenAuth, 
  onLogout, 
  onOpenMainApp,
  onUpdateAvatar 
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Compute 2-word initials (e.g., "Ahmad Zakky" -> "AZ")
  const getInitials = (name) => {
    if (!name || typeof name !== 'string') return 'NR';
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onUpdateAvatar(reader.result);
      setIsDropdownOpen(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    onUpdateAvatar(null);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-base text-slate-900 dark:text-white tracking-tight">NoteRoute</span>
                <span className="px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px]">2.0</span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 -mt-0.5">Multi-LLM Grounded Notebook</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#tentang" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Tentang</a>
            <a href="#cara-kerja" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Cara Kerja</a>
            <a href="#fitur" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Fitur</a>
            <a href="#ekosistem" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Ekosistem</a>
            <a href="#panduan" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Panduan & Unduh APK</a>
          </nav>

          {/* Action Buttons & Profile */}
          <div className="flex items-center space-x-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Ganti Tema (Gelap / Terang)"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-2" ref={dropdownRef}>
                {/* Buka Aplikasi Utama (HANYA MUNCUL JIKA SUDAH MASUK) */}
                <button
                  onClick={onOpenMainApp}
                  className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm shadow-blue-500/20 transition cursor-pointer"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Buka Aplikasi Utama</span>
                  <span className="sm:hidden">App</span>
                </button>

                {/* Avatar with Dynamic 2-word Initials */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs overflow-hidden ring-2 ring-blue-500/30 hover:scale-105 transition cursor-pointer select-none"
                    title="Menu Akun Pengguna"
                  >
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <span>{getInitials(user.name)}</span>
                    )}
                  </button>

                  {/* Profile Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50 animate-fadeIn">
                      <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-blue-500/20">
                          {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{getInitials(user.name)}</span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-xs text-slate-900 dark:text-white truncate">{user.name}</div>
                          <div className="text-[11px] text-slate-500 truncate">{user.email}</div>
                        </div>
                      </div>

                      <div className="p-1 space-y-1">
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full px-3 py-2 text-left rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-2 transition cursor-pointer"
                        >
                          <Camera className="w-4 h-4 text-blue-500" />
                          <span>Ubah Foto Profil</span>
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarUpload}
                          className="hidden"
                        />

                        {user.avatar && (
                          <button
                            onClick={handleRemoveAvatar}
                            className="w-full px-3 py-2 text-left rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-2 transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4 text-amber-500" />
                            <span>Hapus Foto (Gunakan Inisial)</span>
                          </button>
                        )}

                        <button
                          onClick={onLogout}
                          className="w-full px-3 py-2 text-left rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center space-x-2 transition cursor-pointer"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Keluar Akun</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-blue-500/20 transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Masuk / Daftar</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="#tentang" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Tentang</a>
            <a href="#cara-kerja" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Cara Kerja</a>
            <a href="#fitur" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Fitur</a>
            <a href="#ekosistem" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Ekosistem</a>
            <a href="#panduan" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Panduan & Unduh APK</a>
          </nav>
        </div>
      )}
    </header>
  );
}

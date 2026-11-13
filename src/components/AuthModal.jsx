import React, { useState } from 'react';
import { X, Lock, Mail, User, Eye, EyeOff, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Strict Password Validation Rule: >= 8 chars, uppercase, lowercase, number, symbol
  const validatePassword = (pwd) => {
    if (!pwd || pwd.length < 8) {
      return 'Kata sandi wajib minimal 8 karakter.';
    }
    if (!/[A-Z]/.test(pwd)) {
      return 'Kata sandi wajib memuat minimal 1 huruf kapital (A-Z).';
    }
    if (!/[a-z]/.test(pwd)) {
      return 'Kata sandi wajib memuat minimal 1 huruf kecil (a-z).';
    }
    if (!/[0-9]/.test(pwd)) {
      return 'Kata sandi wajib memuat minimal 1 angka (0-9).';
    }
    if (!/[^A-Za-z0-9]/.test(pwd)) {
      return 'Kata sandi wajib memuat minimal 1 simbol atau karakter khusus (!@#$%^&* dll).';
    }
    return null;
  };

  const getRegisteredUsers = () => {
    try {
      const data = localStorage.getItem('noteroute_registered_users');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const saveRegisteredUser = (userData) => {
    try {
      const users = getRegisteredUsers();
      const existingIdx = users.findIndex((u) => u.email.toLowerCase() === userData.email.toLowerCase());
      if (existingIdx >= 0) {
        users[existingIdx] = userData;
      } else {
        users.push(userData);
      }
      localStorage.setItem('noteroute_registered_users', JSON.stringify(users));
    } catch (e) {
      console.warn('Gagal menyimpan user:', e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isRegister) {
      // 1. Validation for Registration
      if (!name.trim()) {
        setError('Nama lengkap wajib diisi.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setError('Alamat email valid wajib diisi.');
        return;
      }
      const pwdError = validatePassword(password);
      if (pwdError) {
        setError(pwdError);
        return;
      }
      if (password !== confirmPassword) {
        setError('Konfirmasi kata sandi tidak cocok.');
        return;
      }

      setLoading(true);
      try {
        // Try backend registration if available
        let backendOk = false;
        try {
          const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), password })
          });
          const data = await res.json();
          if (data.success) {
            backendOk = true;
          }
        } catch {
          // Backend offline or local fallback
        }

        const newUser = {
          id: 'u_' + Date.now(),
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password, // In production hashed on backend
          avatar: null
        };
        saveRegisteredUser(newUser);

        setSuccess('Pendaftaran berhasil! Silakan masuk dengan akun baru Anda.');
        setIsRegister(false);
        setPassword('');
        setConfirmPassword('');
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan saat pendaftaran.');
      } finally {
        setLoading(false);
      }
    } else {
      // 2. Validation for Sign In
      if (!email.trim() || !password) {
        setError('Email dan kata sandi wajib diisi.');
        return;
      }

      setLoading(true);
      try {
        let loggedInUser = null;

        // Try backend login first
        try {
          const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim().toLowerCase(), password })
          });
          const data = await res.json();
          if (data.success && data.data?.user) {
            loggedInUser = data.data.user;
          }
        } catch {
          // Fallback to local registered users
        }

        if (!loggedInUser) {
          const registered = getRegisteredUsers();
          const found = registered.find(
            (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
          );
          if (found) {
            loggedInUser = {
              id: found.id,
              name: found.name,
              email: found.email,
              avatar: found.avatar || null
            };
          }
        }

        // Strict rejection if not registered or password mismatch
        if (!loggedInUser) {
          setError('Akses Ditolak: Email belum terdaftar atau kata sandi tidak cocok. Silakan daftar terlebih dahulu.');
          setLoading(false);
          return;
        }

        // Retrieve saved custom avatar if exists
        const savedAvatar = localStorage.getItem('noteroute_avatar_' + loggedInUser.email);
        if (savedAvatar) {
          loggedInUser.avatar = savedAvatar;
        }

        onAuthSuccess(loggedInUser);
        onClose();
      } catch (err) {
        setError(err.message || 'Gagal masuk ke sistem.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-1.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {isRegister ? 'Buat Akun NoteRoute' : 'Masuk ke NoteRoute'}
          </h2>
          <p className="text-xs text-slate-500">
            {isRegister
              ? 'Daftarkan akun untuk menyinkronkan workspace laptop & Android.'
              : 'Gunakan akun terdaftar Anda untuk mengakses ruang kerja.'}
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-snug">{error}</span>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-snug">{success}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Ahmad Zakky"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Alamat Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@kampus.ac.id"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 8 karakter (kapital, kecil, simbol, angka)"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi kata sandi persis di atas"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm transition shadow-md shadow-blue-500/20 cursor-pointer"
          >
            {loading ? 'Memproses...' : isRegister ? 'Daftar Akun Baru' : 'Masuk ke Akun'}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            {isRegister ? 'Sudah memiliki akun terdaftar?' : 'Belum memiliki akun?'}
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
                setSuccess('');
              }}
              className="ml-1.5 font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              {isRegister ? 'Masuk di sini' : 'Daftar akun gratis'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

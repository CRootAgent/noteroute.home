import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onAuthSuccess, initialMode = 'signin' }) {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignUpConfirmPassword, setShowSignUpConfirmPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
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
      return 'Kata sandi wajib memuat minimal 1 simbol khusus (!@#$%^&* dll).';
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
      const existingIdx = users.findIndex(
        (u) => u.email.toLowerCase() === userData.email.toLowerCase()
      );
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

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!signInEmail.trim() || !signInPassword) {
      setErrorMsg('Email dan kata sandi wajib diisi.');
      return;
    }

    setLoading(true);
    try {
      let loggedUser = null;

      // Try local Express backend if running
      try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: signInEmail.trim().toLowerCase(), password: signInPassword })
        });
        const data = await res.json();
        if (data.success && data.data?.user) {
          loggedUser = data.data.user;
        } else if (res.status === 400 || res.status === 401) {
          throw new Error(data.message || 'Email atau kata sandi tidak valid.');
        }
      } catch (err) {
        if (err.message && !err.message.includes('Failed to fetch')) {
          throw err;
        }
      }

      // If backend offline or static host, verify against registered users
      if (!loggedUser) {
        const users = getRegisteredUsers();
        const found = users.find(
          (u) => u.email.toLowerCase() === signInEmail.trim().toLowerCase()
        );
        if (!found) {
          throw new Error('Akun belum terdaftar. Silakan buat akun baru terlebih dahulu.');
        }
        if (found.password !== signInPassword) {
          throw new Error('Kata sandi yang Anda masukkan salah.');
        }
        loggedUser = {
          id: found.id || 'u_' + Date.now(),
          name: found.name,
          email: found.email,
          avatar: found.avatar || null
        };
      }

      setLoading(false);
      onAuthSuccess(loggedUser);
      onClose();
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Gagal masuk akun.');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!signUpName.trim()) {
      setErrorMsg('Nama lengkap wajib diisi.');
      return;
    }
    if (!signUpEmail.trim() || !signUpEmail.includes('@')) {
      setErrorMsg('Alamat email valid wajib diisi.');
      return;
    }

    const pwdErr = validatePassword(signUpPassword);
    if (pwdErr) {
      setErrorMsg(pwdErr);
      return;
    }

    if (signUpPassword !== signUpConfirmPassword) {
      setErrorMsg('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    setLoading(true);
    try {
      let createdUser = null;

      // Try backend if running
      try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: signUpName.trim(),
            email: signUpEmail.trim().toLowerCase(),
            password: signUpPassword
          })
        });
        const data = await res.json();
        if (data.success && data.data?.user) {
          createdUser = data.data.user;
        } else if (res.status === 400) {
          throw new Error(data.message || 'Registrasi gagal.');
        }
      } catch (err) {
        if (err.message && !err.message.includes('Failed to fetch')) {
          throw err;
        }
      }

      if (!createdUser) {
        const users = getRegisteredUsers();
        if (users.some((u) => u.email.toLowerCase() === signUpEmail.trim().toLowerCase())) {
          throw new Error('Alamat email sudah terdaftar. Silakan masuk.');
        }
        createdUser = {
          id: 'u_' + Date.now(),
          name: signUpName.trim(),
          email: signUpEmail.trim().toLowerCase(),
          password: signUpPassword,
          avatar: null
        };
      }

      saveRegisteredUser({
        name: createdUser.name,
        email: createdUser.email,
        password: signUpPassword,
        avatar: null
      });

      setLoading(false);
      onAuthSuccess(createdUser);
      onClose();
    } catch (err) {
      setLoading(false);
      setErrorMsg(err.message || 'Gagal mendaftar akun.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Container Slider Box */}
      <div className={`auth-slider-box bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-scaleUp ${isSignUp ? 'right-panel-active' : ''}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {/* 1. SIGN IN FORM PANEL */}
        <div className="form-panel sign-in-panel p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center text-sm font-bold">
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </div>
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                NoteRoute 2.0
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Masuk ke Akun
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Gunakan email terdaftar untuk membuka ruang kerja Anda.
            </p>
          </div>

          {errorMsg && !isSignUp && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center space-x-2">
              <i className="fa-solid fa-circle-exclamation text-xs shrink-0"></i>
              <span className="leading-snug">{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSignInSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Alamat Email
              </label>
              <div className="relative">
                <i className="fa-regular fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type="email"
                  required
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  placeholder="email@kampus.ac.id"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kata Sandi
              </label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type={showSignInPassword ? 'text' : 'password'}
                  required
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowSignInPassword(!showSignInPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  <i className={showSignInPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20 cursor-pointer"
            >
              {loading ? 'Memeriksa Kredensial...' : 'Masuk ke Ruang Kerja'}
            </button>
          </form>

          {/* Mobile Switcher */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-center md:hidden">
            <span className="text-xs text-slate-500">Belum punya akun?</span>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(true);
                setErrorMsg('');
              }}
              className="ml-1.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Daftar di sini
            </button>
          </div>
        </div>

        {/* 2. SIGN UP FORM PANEL */}
        <div className="form-panel sign-up-panel p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-1.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center text-sm font-bold">
                <i className="fa-solid fa-user-plus"></i>
              </div>
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Registrasi Baru
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Buat Akun NoteRoute
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sinkronkan dokumen materi kuliah laptop dan Android.
            </p>
          </div>

          {errorMsg && isSignUp && (
            <div className="mb-3 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center space-x-2">
              <i className="fa-solid fa-circle-exclamation text-xs shrink-0"></i>
              <span className="leading-snug">{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSignUpSubmit} className="space-y-2.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <i className="fa-regular fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type="text"
                  required
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  placeholder="Contoh: Ahmad Zakky"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Alamat Email
              </label>
              <div className="relative">
                <i className="fa-regular fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type="email"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  placeholder="email@kampus.ac.id"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kata Sandi (Wajib 8+ Karakter: Kapital, Kecil, Angka, Simbol)
              </label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type={showSignUpPassword ? 'text' : 'password'}
                  required
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                >
                  <i className={showSignUpPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <i className="fa-solid fa-shield-halved absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"></i>
                <input
                  type={showSignUpConfirmPassword ? 'text' : 'password'}
                  required
                  value={signUpConfirmPassword}
                  onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowSignUpConfirmPassword(!showSignUpConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                >
                  <i className={showSignUpConfirmPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20 cursor-pointer"
            >
              {loading ? 'Mendaftarkan Akun...' : 'Daftar Akun Sekarang'}
            </button>
          </form>

          {/* Mobile Switcher */}
          <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-center md:hidden">
            <span className="text-xs text-slate-500">Sudah punya akun?</span>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(false);
                setErrorMsg('');
              }}
              className="ml-1 text-xs font-bold text-blue-600 hover:underline"
            >
              Masuk di sini
            </button>
          </div>
        </div>

        {/* 3. OVERLAY SLIDER CONTAINER (DESKTOP GRADIENT SLIDER) */}
        <div className="overlay-slider-container">
          <div className="overlay-slider">
            
            {/* OVERLAY LEFT CONTENT (VISIBLE WHEN SIGN UP IS ACTIVE) */}
            <div className="overlay-content overlay-left-content space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mx-auto shadow-inner">
                <i className="fa-solid fa-arrow-right-to-bracket text-white"></i>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Sudah Punya Akun?</h2>
              <p className="text-xs text-blue-100 leading-relaxed max-w-xs">
                Masuk dengan kredensial terdaftar Anda untuk melanjutkan eksplorasi dokumen perkuliahan.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setErrorMsg('');
                }}
                className="px-6 py-2.5 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold text-xs tracking-wider transition cursor-pointer shadow-md"
              >
                Masuk Sekarang
              </button>
            </div>

            {/* OVERLAY RIGHT CONTENT (VISIBLE WHEN SIGN IN IS ACTIVE) */}
            <div className="overlay-content overlay-right-content space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mx-auto shadow-inner">
                <i className="fa-solid fa-graduation-cap text-white"></i>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Halo, Rekan Mahasiswa!</h2>
              <p className="text-xs text-blue-100 leading-relaxed max-w-xs">
                Belum memiliki akun? Daftarkan diri Anda secara gratis untuk mulai menghubungkan materi kuliah dengan AI.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(true);
                  setErrorMsg('');
                }}
                className="px-6 py-2.5 rounded-full border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold text-xs tracking-wider transition cursor-pointer shadow-md"
              >
                Daftar Akun Baru
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

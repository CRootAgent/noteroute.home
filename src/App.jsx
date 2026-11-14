import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import QuickGuide from './components/QuickGuide';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  // Theme State (Dark / Light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('noteroute_theme') || 'dark';
  });

  // User Authentication State
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('noteroute_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState(null);

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('noteroute_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Open Main App URL (Workspace React Web App)
  const handleOpenMainApp = () => {
    const isLocal =
      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const mainAppUrl = isLocal
      ? 'http://localhost:3000/'
      : 'https://crootagent.github.io/noteroute/';
    window.location.href = mainAppUrl;
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('noteroute_user', JSON.stringify(userData));
    localStorage.setItem('noteroute_auth_user', JSON.stringify(userData));
    
    try {
      sessionStorage.setItem('noteroute_just_logged_in', 'true');
    } catch {
      // ignore
    }

    // Trigger Welcome Transition Animation & Auto-redirect
    setWelcomeUser(userData);
    setTimeout(() => {
      handleOpenMainApp();
    }, 1400);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('noteroute_user');
    localStorage.removeItem('noteroute_auth_user');
  };

  const handleUpdateAvatar = (newAvatarUrl) => {
    if (!user) return;
    const updated = { ...user, avatar: newAvatarUrl };
    setUser(updated);
    localStorage.setItem('noteroute_user', JSON.stringify(updated));
    if (newAvatarUrl) {
      localStorage.setItem('noteroute_avatar_' + user.email, newAvatarUrl);
    } else {
      localStorage.removeItem('noteroute_avatar_' + user.email);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar
        user={user}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onOpenMainApp={handleOpenMainApp}
        onUpdateAvatar={handleUpdateAvatar}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenMainApp={handleOpenMainApp}
          user={user}
        />
        <About />
        <HowItWorks />
        <Features />
        <Ecosystem />
        <QuickGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Authentication Modal with Authentic Sliding Animation */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* Welcome Transition Animation Modal Overlay */}
      {welcomeUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-center space-y-5 animate-scaleUp">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 text-white font-bold text-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 overflow-hidden ring-4 ring-blue-500/20">
              {welcomeUser.avatar ? (
                <img src={welcomeUser.avatar} alt={welcomeUser.name} className="w-full h-full object-cover" />
              ) : (
                <span>
                  {welcomeUser.name
                    ?.trim()
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((w) => w[0]?.toUpperCase())
                    .join('') || 'NR'}
                </span>
              )}
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <i className="fa-solid fa-circle-check text-xs"></i>
                <span>Autentikasi Berhasil</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Selamat Datang, {welcomeUser.name}!
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Menyiapkan ruang kerja dan menyinkronkan dokumen Anda...
              </p>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full animate-pulse transition-all duration-1000 w-full" />
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-center space-x-1.5">
              <i className="fa-solid fa-spinner fa-spin text-blue-500 text-xs"></i>
              <span>Mengalihkan ke Web Workspace NoteRoute...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

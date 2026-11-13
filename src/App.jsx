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

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('noteroute_user', JSON.stringify(userData));
    localStorage.setItem('noteroute_auth_user', JSON.stringify(userData));
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

  // Open Main App URL (Workspace React Web App)
  const handleOpenMainApp = () => {
    const isLocal =
      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const mainAppUrl = isLocal
      ? 'http://localhost:3000/'
      : 'https://crootagent.github.io/noteroute/';
    window.location.href = mainAppUrl;
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

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}

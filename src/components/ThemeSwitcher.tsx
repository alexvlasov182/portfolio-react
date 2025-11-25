'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Инициализация темы при загрузке
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved) setTheme(saved);
    else setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-shadow shadow-md"
      title="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}

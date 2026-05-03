import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-50 dark:bg-stone-900 border hairline shadow-sm hover:shadow-md hover:border-accent transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-stone-200" />
      ) : (
        <Moon className="w-4 h-4 text-stone-700" />
      )}
    </button>
  );
};

export default ThemeToggle;

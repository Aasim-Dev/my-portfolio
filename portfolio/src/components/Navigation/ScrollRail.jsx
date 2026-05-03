import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'home', num: '01', label: 'Hero' },
  { id: 'metrics', num: '02', label: 'Outcomes' },
  { id: 'projects', num: '03', label: 'Featured' },
  { id: 'work', num: '04', label: 'Selected' },
  { id: 'about', num: '05', label: 'How I work' },
  { id: 'skills', num: '06', label: 'Stack' },
  { id: 'contact', num: '07', label: 'Contact' }
];

const ScrollRail = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observers = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        {
          // Trigger when the section's middle band crosses the viewport's middle band
          rootMargin: '-40% 0px -50% 0px',
          threshold: 0
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-3.5"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3 py-1"
          >
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? 'w-10 bg-accent'
                  : 'w-4 bg-stone-400 dark:bg-stone-600 group-hover:w-7 group-hover:bg-stone-700 dark:group-hover:bg-stone-300'
              }`}
            />
            <span
              className={`font-mono text-[10px] uppercase tracking-widest tabular-nums transition-colors ${
                isActive
                  ? 'text-stone-900 dark:text-stone-50'
                  : 'text-stone-400 dark:text-stone-600 group-hover:text-stone-700 dark:group-hover:text-stone-300'
              }`}
            >
              {s.num}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-opacity ${
                isActive
                  ? 'opacity-100 text-stone-900 dark:text-stone-50'
                  : 'opacity-0 group-hover:opacity-100 text-stone-700 dark:text-stone-300'
              }`}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
};

export default ScrollRail;

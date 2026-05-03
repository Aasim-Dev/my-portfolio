import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-display tracking-editorial text-xl text-stone-900 dark:text-stone-50">
            Aasim Sanandwala
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-stone-500 group-hover:text-accent transition-colors">
            / portfolio
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <button
              type="button"
              onClick={onOpenResume}
              className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-ink dark:hover:bg-accent dark:hover:text-accent-ink transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-mono text-[10px] uppercase tracking-widest"
          >
            <FileText className="w-3 h-3" />
            CV
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-full text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-t hairline"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 font-display text-3xl tracking-editorial text-stone-900 dark:text-stone-50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

const Footer = ({ onOpenResume }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-stone-50 dark:bg-stone-950 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <div className="font-display tracking-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-50">
              Aasim Sanandwala<span className="text-accent">.</span>
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-stone-500">
              Engineering revenue, not just features.
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-stone-500">
            <button
              type="button"
              onClick={onOpenResume}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Résumé ↗
            </button>
            <a
              href="mailto:sanandwalaasim87@gmail.com"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Email ↗
            </a>
            <a
              href="https://www.linkedin.com/in/aasim-sanandwala-b09a29221/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Aasim-Dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-600">
          <p>© {year} — All rights reserved.</p>
          {/* <p>Built with React · Tailwind · Framer Motion</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

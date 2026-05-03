import { motion } from 'framer-motion';
import { ArrowDownRight, FileText } from 'lucide-react';
import { currentQuarterYear } from '../../lib/dynamicTime';

const heroMetrics = [
  { value: '+20%', label: 'platform revenue' },
  { value: '99.5%', label: 'API uptime' },
  { value: '3×', label: 'search performance' },
  { value: '−85%', label: 'release-day errors' }
];

const HeroSection = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative grain min-h-[100svh] flex items-end overflow-hidden bg-stone-50 dark:bg-stone-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full blur-3xl animate-float-glow"
        style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 60%)' }}
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: '#78716c',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 sm:pb-32 grid lg:grid-cols-12 gap-x-10 xl:gap-x-16 items-end">
        <div className="lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available — {currentQuarterYear()}
            <span className="hidden sm:inline mx-3 text-stone-400/40">/</span>
            <span className="hidden sm:inline">Ahmedabad, Gujarat · IN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display tracking-editorial text-stone-900 dark:text-stone-50 text-[clamp(2.75rem,9.5vw,9.5rem)] leading-[0.92] font-normal"
          >
            Engineering
            <br />
            <span className="italic text-accent">revenue</span>
            <span className="text-stone-400 dark:text-stone-600">,</span> not just
            <br />
            <span className="text-stone-400 dark:text-stone-500">features.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-12 grid sm:grid-cols-12 gap-x-8 gap-y-6 items-end"
          >
            <p className="sm:col-span-7 text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-400 max-w-2xl">
              I&rsquo;m{' '}
              <span className="text-stone-900 dark:text-stone-100 font-medium">
                Aasim Sanandwala
              </span>{' '}
              — full-stack engineer working where product decisions meet infra
              reality. I ship algorithms that move revenue, pipelines that
              remove deploy fear, and search that feels instant.
            </p>

            <div className="sm:col-span-5 flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-end">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-stone-900 dark:text-stone-100 font-medium border-b border-stone-900 dark:border-stone-100 pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                See the work
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View résumé
              </button>
              <a
                href="#contact"
                className="text-stone-500 dark:text-stone-400 font-medium hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                Or write to me &rarr;
              </a>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          aria-label="Headline metrics"
          className="hidden lg:flex lg:col-span-3 lg:flex-col lg:pl-8 lg:border-l hairline self-stretch"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-6">
            Outcomes shipped
          </div>
          <div className="flex flex-col gap-5">
            {heroMetrics.map((m, i) => (
              <div
                key={m.label}
                className={
                  i > 0
                    ? 'pt-5 border-t hairline'
                    : ''
                }
              >
                <div className="font-display tracking-editorial text-stone-900 dark:text-stone-50 text-4xl xl:text-5xl leading-none">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroSection;

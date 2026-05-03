import { motion } from 'framer-motion';
import { featuredProject as fp } from '../../data/projects';

const ACTS_LABELS = {
  problem: 'The problem',
  approach: 'The approach',
  result: 'The result'
};

const FeaturedProject = () => {
  return (
    <section
      id="projects"
      className="relative bg-stone-950 text-stone-50 py-32 sm:py-44 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(52,211,153,0.10), transparent 55%)'
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: '#e7e5e4',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* ─────────── ACT 1 — Setup ─────────── */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-24 sm:mb-32"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-stone-400 mb-10">
            <span className="text-accent">●</span>
            Featured case
            <span className="h-px flex-1 bg-stone-800" />
            <span>01 / 04</span>
          </div>

          <h2 className="font-display tracking-editorial text-stone-50 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] max-w-5xl">
            The matching algorithm that{' '}
            <span className="italic text-accent">paid for itself</span>
            <br />
            in a quarter.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-stone-400">
              {fp.role.replace(/^[^·]+· /, '')} · {fp.year}
            </div>
            <div className="hidden sm:block h-4 w-px bg-stone-700" />
            <div className="flex flex-wrap gap-2">
              {fp.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-[11px] font-mono uppercase tracking-widest rounded-full border border-stone-800 text-stone-300 hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* ─────────── ACT 2 — Story (sticky right) ─────────── */}
        <div className="grid lg:grid-cols-12 gap-x-12 lg:gap-x-20 items-start mb-24 sm:mb-32">
          <div className="lg:col-span-7 space-y-16 sm:space-y-20">
            {[fp.problem, fp.approach, fp.result].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    0{i + 1}
                  </span>
                  <span className="h-px w-10 bg-stone-700" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                    {ACTS_LABELS[
                      i === 0 ? 'problem' : i === 1 ? 'approach' : 'result'
                    ]}
                  </span>
                </div>
                <p className="font-display tracking-editorial text-stone-50 text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.25] max-w-2xl">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 lg:sticky lg:top-32 mt-12 lg:mt-0"
          >
            <div className="relative border border-stone-800 rounded-2xl bg-stone-900/40 backdrop-blur p-8 sm:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl"
                style={{ background: 'rgba(52,211,153,0.18)' }}
              />
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-widest text-stone-400 mb-8 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Outcomes
                </div>

                <div className="divide-y divide-stone-800">
                  {fp.metrics.map((m, i) => (
                    <div key={m.label} className={i === 0 ? 'pb-7' : 'py-7 last:pb-0'}>
                      <div className="font-display tracking-editorial text-stone-50 leading-none text-6xl sm:text-7xl xl:text-[5.5rem]">
                        {m.value}
                      </div>
                      <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* ─────────── ACT 3 — Pull quote ─────────── */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="relative max-w-4xl mx-auto pt-16 border-t border-stone-800 text-center"
        >
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -top-4 px-4 bg-stone-950 font-display italic text-accent text-2xl"
          >
            “
          </span>
          <p className="font-display italic tracking-editorial text-stone-50 text-3xl sm:text-4xl lg:text-5xl leading-[1.2]">
            {fp.pullQuote}
          </p>
          <cite className="not-italic block mt-8 font-mono text-[11px] uppercase tracking-widest text-stone-500">
            {fp.pullQuoteAttribution}
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default FeaturedProject;

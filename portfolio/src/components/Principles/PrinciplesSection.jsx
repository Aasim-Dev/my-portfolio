import { motion } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'Outcomes over output.',
    body:
      "Every PR I open names the metric it's trying to move. We measure whether it did. Tickets closed isn't a number anyone outside engineering cares about."
  },
  {
    number: '02',
    title: 'Ship behind a flag.',
    body:
      "I'd rather ship a 10% feature behind a flag than a 100% feature in three months. Flags plus A/B testing beat confidence — every time."
  },
  {
    number: '03',
    title: 'Read the data, not the deck.',
    body:
      "Before any rewrite, I instrument. The query plan tells you what's slow; the dashboard tells you what's worth fixing. Opinions come second."
  },
  {
    number: '04',
    title: 'Boring tech, by default.',
    body:
      'MySQL, Docker, plain JSON over the wire. The only place I want to be original is the problem I’m solving — never the stack underneath it.'
  },
  {
    number: '05',
    title: 'Pair with the debugger first.',
    body:
      'When a system surprises me, I read the logs, the query plan, the actual bytes on the wire. AI assistants are great teammates — the debugger is the one who never lies.'
  }
];

const PrinciplesSection = () => {
  return (
    <section
      id="about"
      className="bg-stone-100 dark:bg-stone-900 py-24 sm:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-16 sm:mb-24 items-end"
        >
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-stone-500 flex items-center gap-3">
              <span className="h-px w-10 bg-stone-400" />
              How I work
            </div>
          </div>

          <h2 className="lg:col-span-10 font-display tracking-editorial text-stone-900 dark:text-stone-50 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-4xl">
            Five things I keep{' '}
            <span className="italic text-accent">above my desk</span>.
          </h2>
        </motion.div>

        <div>
          {principles.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-start py-14 sm:py-16 border-t hairline last:border-b"
            >
              <div className="lg:col-span-2">
                <div className="font-mono text-xs uppercase tracking-widest text-stone-500">
                  {p.number}
                </div>
              </div>

              <div className="lg:col-span-7">
                <h3 className="font-display italic tracking-editorial text-stone-900 dark:text-stone-50 text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                  {p.title}
                </h3>
              </div>

              <div className="lg:col-span-3">
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 sm:mt-16 grid lg:grid-cols-12 lg:gap-x-12"
        >
          <div className="lg:col-span-2 hidden lg:block" />
          <p className="lg:col-span-7 font-display italic text-stone-500 dark:text-stone-500 text-xl sm:text-2xl leading-relaxed max-w-2xl">
            Currently at{' '}
            <span className="text-stone-900 dark:text-stone-50 not-italic">
              Linkpublishers
            </span>
            , Ahmedabad. Looking for the next team where shipping fast and
            measuring honestly are the same loop — and where{' '}
            <span className="not-italic font-mono text-base sm:text-lg text-stone-700 dark:text-stone-300">
              &ldquo;good enough to test&rdquo;
            </span>{' '}
            is a valid PR description.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesSection;

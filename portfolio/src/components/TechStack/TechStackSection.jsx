import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Building',
    items: [
      'Laravel',
      'Next.js',
      'Node.js',
      'React',
      'Express',
      'TypeScript',
      'JavaScript',
      'PHP',
      'REST APIs'
    ]
  },
  {
    label: 'Shipping',
    items: [
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
      'Vercel',
      'Railway',
      'Render',
      'Linux',
      'Git',
      'GitLab'
    ]
  },
  {
    label: 'Storing & Searching',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Elasticsearch', 'Redis']
  },
  {
    label: 'Also fluent',
    items: [
      'Java',
      'Python',
      'C',
      'Angular',
      'Tailwind CSS',
      'Bootstrap',
      'Figma'
    ]
  }
];

const TechGroup = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ delay: index * 0.06 }}
    className="grid lg:grid-cols-12 gap-y-4 lg:gap-x-12 items-baseline border-t hairline pt-8 sm:pt-10"
  >
    <div className="lg:col-span-3">
      <div className="font-mono text-[11px] uppercase tracking-widest text-stone-500 dark:text-stone-400">
        0{index + 1} · {group.label}
      </div>
    </div>

    <div className="lg:col-span-9 flex flex-wrap items-baseline gap-x-1 gap-y-2 leading-[0.95]">
      {group.items.map((item, idx) => (
        <span key={item} className="contents">
          <span
            className={`font-display tracking-editorial transition-colors ${
              idx === 0
                ? 'text-stone-900 dark:text-stone-50 text-3xl sm:text-4xl lg:text-5xl'
                : 'text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 text-2xl sm:text-3xl lg:text-4xl'
            }`}
          >
            {item}
          </span>
          {idx < group.items.length - 1 && (
            <span className="text-stone-300 dark:text-stone-700 text-2xl sm:text-3xl lg:text-4xl px-1.5">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  </motion.div>
);

const TechStackSection = () => {
  return (
    <section
      id="skills"
      className="bg-stone-100 dark:bg-stone-900 py-24 sm:py-36 border-t hairline"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <header className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-stone-500 flex items-center gap-3">
              <span className="h-px w-10 bg-stone-400" />
              Stack
            </div>
          </div>
          <h2 className="lg:col-span-9 font-display tracking-editorial text-stone-900 dark:text-stone-50 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            I optimize for{' '}
            <span className="italic text-accent">shipping</span>, not collecting
            languages.
          </h2>
        </header>

        <div className="space-y-10 sm:space-y-14">
          {groups.map((group, i) => (
            <TechGroup key={group.label} group={group} index={i} />
          ))}
        </div>

        <div className="mt-16 sm:mt-24 grid lg:grid-cols-12 lg:gap-x-12 border-t hairline pt-10">
          <div className="lg:col-span-3 hidden lg:block" />
          <p className="lg:col-span-9 font-display italic tracking-editorial text-stone-700 dark:text-stone-300 text-xl sm:text-2xl leading-snug max-w-2xl">
            My most-used tool? An honest debugger
            <span className="text-accent">.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

import { motion } from 'framer-motion';
import { experienceLabel } from '../../lib/dynamicTime';

// Scale-of-work numbers — intentionally different from the hero rail
// (which shows outcome %s). This strip answers "have you operated at scale?"
const useScaleMetrics = () => [
  { value: '10,000+', label: 'daily API requests' },
  { value: '500+', label: 'active marketplace users' },
  { value: experienceLabel(), label: 'shipping in production' },
  { value: '4×', label: 'faster high-DA inventory drain' }
];

const MetricsStrip = () => {
  const metrics = useScaleMetrics();

  return (
    <section
      id="metrics"
      aria-label="Scale of work"
      className="relative border-y hairline bg-stone-50 dark:bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
        <div className="flex items-center gap-3 mb-8 font-mono text-xs tracking-widest uppercase text-stone-500">
          <span className="h-px flex-1 bg-stone-300/60 dark:bg-stone-700/60 sm:flex-none sm:w-12" />
          <span>Shipped in production</span>
          <span className="hidden sm:inline-block h-px flex-1 bg-stone-300/60 dark:bg-stone-700/60" />
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {metrics.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08 }}
              className={`relative px-6 first:pl-0 ${
                i === 0 ? '' : 'lg:border-l hairline'
              }`}
            >
              <div className="font-display text-stone-900 dark:text-stone-50 text-5xl sm:text-6xl lg:text-7xl leading-none tracking-editorial">
                {item.value}
              </div>
              <div className="mt-3 font-mono text-[11px] tracking-widest uppercase text-stone-500 dark:text-stone-400">
                {item.label}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetricsStrip;

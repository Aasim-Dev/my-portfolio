import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectListItem = ({ project, index }) => {
  const hasLink = Boolean(project.liveUrl || project.githubUrl);
  const href = project.liveUrl || project.githubUrl;
  const Tag = hasLink ? 'a' : 'div';

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05 }}
      // dimmed when sibling is hovered, full opacity when self is hovered
      className="group/row border-b hairline opacity-100 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 transition-opacity duration-300"
    >
      <Tag
        href={href}
        target={hasLink ? '_blank' : undefined}
        rel={hasLink ? 'noopener noreferrer' : undefined}
        aria-label={hasLink ? `Open ${project.title}` : undefined}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
      >
        {/* Collapsed row — always visible (~80px tall) */}
        <div className="grid grid-cols-12 items-baseline gap-x-4 sm:gap-x-8 py-6 sm:py-7">
          <span className="col-span-1 font-mono text-xs text-stone-400 dark:text-stone-600 tabular-nums">
            0{index + 2}
          </span>

          <h3 className="col-span-7 sm:col-span-7 font-display tracking-editorial text-2xl sm:text-3xl leading-tight text-stone-900 dark:text-stone-50 transition-colors group-hover/row:text-accent">
            {project.title}
          </h3>

          <div className="col-span-3 sm:col-span-3 flex items-baseline justify-end gap-2 text-right">
            <span className="font-display text-2xl sm:text-3xl leading-none tracking-editorial text-stone-900 dark:text-stone-50">
              {project.metric}
            </span>
          </div>

          <div className="col-span-1 flex justify-end">
            {hasLink ? (
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border hairline text-stone-500 dark:text-stone-400 transition-all duration-300 group-hover/row:bg-accent group-hover/row:border-accent group-hover/row:text-accent-ink group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-600">
                Private
              </span>
            )}
          </div>
        </div>

        {/* Reveal-on-hover row */}
        <div className="grid grid-cols-12 gap-x-4 sm:gap-x-8 max-h-0 lg:group-hover/row:max-h-48 lg:group-focus-within/row:max-h-48 overflow-hidden transition-[max-height] duration-500 ease-out">
          <div className="col-span-1" />
          <p className="col-span-11 sm:col-span-7 pb-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl">
            {project.summary}
          </p>
          <div className="col-span-12 sm:col-span-3 sm:col-start-9 pb-6 flex flex-wrap gap-1.5 sm:justify-end">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 border hairline rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* On mobile (no hover), always show summary in a tighter form */}
        <div className="lg:hidden grid grid-cols-12 gap-x-4 pb-6">
          <div className="col-span-1" />
          <p className="col-span-11 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {project.summary}
          </p>
        </div>
      </Tag>
    </motion.li>
  );
};

const ProjectList = () => {
  return (
    <section
      id="work"
      className="bg-stone-50 dark:bg-stone-950 py-24 sm:py-32 border-t hairline"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <header className="grid lg:grid-cols-12 gap-y-6 lg:gap-x-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-stone-500">
              <span className="h-px w-10 bg-stone-400" />
              02 / Selected
            </div>
          </div>
          <h2 className="lg:col-span-7 font-display tracking-editorial text-stone-900 dark:text-stone-50 text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl">
            Other shipping receipts.
          </h2>
          <div className="lg:col-span-3 lg:text-right font-mono text-[11px] uppercase tracking-widest text-stone-500">
            Hover any row →
          </div>
        </header>

        <ul className="border-t hairline group/list">
          {projects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectList;

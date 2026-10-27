import { motion } from 'framer-motion';
import { easeOut } from '../../styles/animations';

const items = [
  {
    year: '2025',
    title: 'Java Internship',
    company: 'Legal Remit',
    description:
      'Backend Intern shipping scalable APIs with Java, Spring Boot, and SQL.',
  },
  {
    year: '2025',
    title: 'Data Annotator',
    company: 'Accelerated Komputing',
    description: 'Built scalable applications with React, Node.js, and cloud tools.',
  },
  {
    year: '2022 — 2024',
    title: 'Finance Assistant',
    company: 'Skyline Travel and Tours',
    description: 'Handled financial records, budgeting, and reporting.',
  },
  {
    year: '2022',
    title: 'Bachelor of Information Management',
    company: 'Tribhuvan University',
    description: 'Began undergraduate studies in Information Management.',
  },
];

const Timeline = () => {
  return (
    <ol className="relative">
      <span className="absolute left-[6px] top-2 bottom-2 w-px bg-ink-100 dark:bg-ink-700/60" />
      {items.map((it, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOut, delay: i * 0.06 }}
          className="relative pl-8 py-7 border-b border-ink-100 dark:border-ink-700/40 last:border-b-0"
        >
          <span className="absolute left-0 top-9 w-3 h-3 rounded-full bg-paper-100 dark:bg-ink-900 border-2 border-accent-600" />
          <div className="grid grid-cols-12 gap-4 items-baseline">
            <div className="col-span-12 md:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
                {it.year}
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h4 className="font-sans font-semibold text-xl md:text-2xl tracking-tight text-ink-800 dark:text-paper-100 leading-tight">
                {it.title}
              </h4>
              <p className="mt-1 text-accent-700 dark:text-accent-400 text-sm font-medium">
                {it.company}
              </p>
              <p className="mt-2 text-ink-600 dark:text-ink-200 text-sm md:text-base leading-relaxed max-w-2xl">
                {it.description}
              </p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
};

export default Timeline;

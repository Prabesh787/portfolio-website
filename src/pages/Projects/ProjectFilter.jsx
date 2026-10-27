import { motion } from 'framer-motion';
import { projectCategories } from '../../data/projects';

const ProjectFilter = ({ activeCategory, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {projectCategories.map((category) => {
        const active = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`relative font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-colors duration-300 ${
              active
                ? 'text-paper-100 dark:text-ink-900'
                : 'text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100'
            }`}
          >
            <span className="relative z-10">{category}</span>
            {active && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-0 rounded-full bg-ink-800 dark:bg-paper-100"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {!active && (
              <span className="absolute inset-0 rounded-full border border-ink-200 dark:border-ink-700/60" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;

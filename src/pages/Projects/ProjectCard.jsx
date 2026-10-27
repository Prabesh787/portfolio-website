import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SpotlightCard from '../../components/ui/SpotlightCard';
import { easeOut } from '../../styles/animations';

const MAX_TECH = 4;

// Placeholder links in the data (bare github.com, example.com) shouldn't render as buttons.
const isRealUrl = (url) => {
  if (!url) return false;
  try {
    const { hostname, pathname } = new URL(url);
    if (hostname.endsWith('example.com')) return false;
    if (hostname === 'github.com' && pathname.replace(/\/$/, '') === '') return false;
    return true;
  } catch {
    return false;
  }
};

const hasImage = (image) => image && image !== '/placeholder-project.jpg';

const Cover = ({ project, number }) => {
  if (hasImage(project.image)) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        onError={(e) => (e.target.style.display = 'none')}
      />
    );
  }

  // Typographic cover for projects without a screenshot.
  return (
    <div className="relative w-full h-full bg-paper-200 dark:bg-ink-800/60">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(158 165 161 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(158 165 161 / 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -right-10 -bottom-16 w-64 h-64 rounded-full bg-accent-300/30 dark:bg-accent-700/20 blur-3xl" />
      <div className="absolute inset-0 grain opacity-[0.05]" />
      <span className="absolute left-6 bottom-4 font-mono font-semibold text-[6rem] leading-none tracking-tighter text-ink-800/10 dark:text-paper-100/10 select-none">
        {number}
      </span>
      <span className="absolute right-6 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
        {project.category}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, index = 0 }) => {
  const number = String(project.id ?? index + 1).padStart(2, '0');
  const year = project.date ? new Date(project.date).getFullYear() : null;
  const extraTech = project.technologies.length - MAX_TECH;
  const live = isRealUrl(project.live) ? project.live : null;
  const source = isRealUrl(project.github) ? project.github : null;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: easeOut, delay: index * 0.05 }}
      className="h-full"
    >
      <SpotlightCard className="h-full flex flex-col hover:border-ink-200 dark:hover:border-ink-600/60">
        <div className="p-2 pb-0">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-ink-100/80 dark:border-ink-700/50">
            <Cover project={project} number={number} />
            {project.featured && (
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest bg-paper-50/90 dark:bg-ink-900/80 backdrop-blur px-2.5 py-1 rounded-full text-accent-700 dark:text-accent-400 border border-accent-200/70 dark:border-accent-900/40">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                Featured
              </span>
            )}
          </div>
        </div>

        <div className="px-6 pt-6 pb-6 flex-grow flex flex-col">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 dark:text-ink-300 mb-3">
            <span className="text-accent-700 dark:text-accent-400">{number}</span>
            <span className="mx-2 text-ink-200 dark:text-ink-600">/</span>
            {project.category}
            {year && (
              <>
                <span className="mx-2 text-ink-200 dark:text-ink-600">/</span>
                {year}
              </>
            )}
          </p>

          <h3 className="font-sans font-semibold text-2xl tracking-tight text-ink-800 dark:text-paper-100 leading-[1.1] mb-3 text-balance">
            {project.title}
          </h3>

          <p className="text-[15px] text-ink-600 dark:text-ink-200 leading-relaxed line-clamp-3 mb-6">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-1.5 mb-6 mt-auto">
            {project.technologies.slice(0, MAX_TECH).map((t) => (
              <li
                key={t}
                className="font-mono text-[11px] text-ink-600 dark:text-ink-200 px-2.5 py-1 rounded-md bg-paper-200/70 dark:bg-ink-700/40"
              >
                {t}
              </li>
            ))}
            {extraTech > 0 && (
              <li
                className="font-mono text-[11px] text-ink-400 dark:text-ink-300 px-2.5 py-1 rounded-md border border-dashed border-ink-200 dark:border-ink-700/60"
                title={project.technologies.slice(MAX_TECH).join(', ')}
              >
                +{extraTech}
              </li>
            )}
          </ul>

          {(live || source) && (
            <div className="flex items-center gap-2 pt-5 border-t border-ink-100 dark:border-ink-700/50">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-800 dark:bg-paper-100 text-paper-100 dark:text-ink-800 text-sm font-medium hover:bg-accent-700 dark:hover:bg-accent-400 transition-colors"
                >
                  Live site
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
              {source && (
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-700/60 text-sm text-ink-600 dark:text-ink-200 hover:text-ink-800 dark:hover:text-paper-100 hover:border-ink-400 dark:hover:border-ink-500 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </SpotlightCard>
    </motion.article>
  );
};

export default ProjectCard;

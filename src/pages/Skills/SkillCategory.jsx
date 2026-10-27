import { motion } from 'framer-motion';
import SpotlightCard from '../../components/ui/SpotlightCard';
import { easeOut } from '../../styles/animations';

export const tiers = ['Curious', 'Learning', 'Working', 'Confident'];

export const tierOf = (level) => {
  if (level >= 70) return 3;
  if (level >= 50) return 2;
  if (level >= 30) return 1;
  return 0;
};

export const Meter = ({ tier, delay = 0 }) => (
  <span className="flex items-center gap-1" aria-hidden>
    {tiers.map((_, i) => (
      <motion.span
        key={i}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: easeOut, delay: delay + i * 0.05 }}
        className={`h-1.5 w-5 origin-left rounded-full ${
          i <= tier
            ? 'bg-accent-600 dark:bg-accent-400'
            : 'bg-ink-100 dark:bg-ink-700/60'
        }`}
      />
    ))}
  </span>
);

const SkillCategory = ({ category, skills, index = 0, className = '' }) => {
  const sorted = [...skills].sort((a, b) => b.level - a.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
      className={className}
    >
      <SpotlightCard className="h-full p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400 mb-2">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-sans font-semibold text-2xl md:text-3xl tracking-tight text-ink-800 dark:text-paper-100 leading-tight">
              {category}
            </h3>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-400 dark:text-ink-300 mt-1">
            {skills.length} {skills.length === 1 ? 'tool' : 'tools'}
          </span>
        </div>

        <ul className="divide-y divide-ink-100/80 dark:divide-ink-700/40">
          {sorted.map((s, i) => {
            const tier = tierOf(s.level);
            return (
              <li
                key={s.name}
                className="flex items-center justify-between gap-4 py-3"
              >
                <span className="text-ink-800 dark:text-paper-100 font-medium">
                  {s.name}
                </span>
                <span className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300 w-[72px] text-right">
                    {tiers[tier]}
                  </span>
                  <Meter tier={tier} delay={0.1 + i * 0.03} />
                  <span className="sr-only">{tiers[tier]}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </SpotlightCard>
    </motion.div>
  );
};

export default SkillCategory;

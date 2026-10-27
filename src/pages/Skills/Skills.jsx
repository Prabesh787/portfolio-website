import { motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCategory, { Meter, tiers, tierOf } from './SkillCategory';
import { skills } from '../../data/skills';
import { easeOut } from '../../styles/animations';

const Skills = () => {
  const allSkills = skills.flatMap((c) => c.items);
  const confident = allSkills.filter((s) => tierOf(s.level) === 3).length;

  const stats = [
    [allSkills.length, 'Tools in rotation'],
    [skills.length, 'Disciplines'],
    [confident, 'At confident level'],
  ];

  return (
    <PageWrapper>
      <section className="relative pt-28 pb-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Toolbelt"
            title="What I reach for, day‑to‑day."
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 pb-8 border-b border-ink-100 dark:border-ink-700/40"
          >
            <dl className="grid grid-cols-3 gap-6 sm:gap-12">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-sans font-semibold text-5xl tracking-tight text-ink-800 dark:text-paper-100 leading-none">
                    {value}
                  </dd>
                  <dd className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Proficiency scale">
              {tiers.map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <Meter tier={i} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat, i) => (
              <SkillCategory
                key={cat.category}
                index={i}
                category={cat.category}
                skills={cat.items}
              />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-ink-500 dark:text-ink-300 text-sm leading-relaxed">
            <span className="font-mono text-accent-700 dark:text-accent-400">→</span>{' '}
            The list grows as the work does. I value depth over breadth — a
            tool I haven't used yet is just a weekend away.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;

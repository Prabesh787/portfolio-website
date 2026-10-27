import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Sparkles, BookOpen, Plane } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Timeline, { experience, education } from './Timeline';
import { profilePic } from '../../assets/images/images';
import { easeOut } from '../../styles/animations';
import { SHOW_GALLERY } from '../../utils/constants';

const focusAreas = [
  {
    icon: Code2,
    title: 'Backend Development',
    body:
      'Java + Spring Boot for secure, scalable APIs and the unseen logic that keeps an application reliable.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    body:
      'Designing and tuning SQL schemas with care for data integrity, query efficiency, and storage cost.',
  },
  {
    icon: Sparkles,
    title: 'Frontend Exploration',
    body:
      'Building modern UIs to understand a request end‑to‑end — and to ship full, considered experiences.',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    body:
      'Exploring ML models and data pipelines to weave intelligent, automated layers into traditional software.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    body:
      'Following modern backend currents — microservices, observability, cloud‑native deployment.',
  },
  {
    icon: Plane,
    title: 'Travel-Tech Domain',
    body:
      'Years inside a travel agency — air ticketing, fares, reservations and the operations around them — so I build booking and payment systems like Fly Lumbini with the industry\'s real workflows in mind.',
  },
];

const About = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <PageWrapper>
      <section className="relative pt-28 pb-24">
        <div className="container-page">
          <SectionTitle eyebrow="About" title="A short story." />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-ink-100 dark:border-ink-700/60 bg-paper-200 dark:bg-ink-800/40 aspect-[4/5] max-w-sm">
                {/* backdrop for the transparent cut-out portrait */}
                <div className="absolute inset-0 bg-code-grid opacity-70" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-72 h-72 rounded-full bg-accent-400/25 dark:bg-accent-600/20 blur-3xl" />
                {!imgError ? (
                  <img
                    src={profilePic}
                    alt="Prabesh Bhattarai"
                    className="relative w-full h-full object-contain object-bottom pt-6 px-4"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent-200 to-paper-300 dark:from-accent-900/30 dark:to-ink-700" />
                )}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-paper-100/90 dark:bg-ink-900/80 backdrop-blur px-2 py-1 rounded-full text-ink-700 dark:text-paper-200">
                    Bhaktapur, NP · 2026
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-700 dark:text-accent-400 mb-4">
                Hello — I'm Prabesh
              </p>
              <h3 className="font-sans font-semibold text-3xl md:text-4xl leading-[1.05] tracking-tight text-ink-800 dark:text-paper-100">
                I'm an aspiring backend engineer
                <span className="text-ink-500 dark:text-ink-300"> drawn to the unseen logic</span>
                {' '}that holds the web together.
              </h3>
              <div className="mt-8 space-y-5 text-ink-600 dark:text-ink-200 leading-relaxed text-pretty">
                <p>
                  Now a Software Developer at Lumbini Group, writing
                  Java + Spring Boot every day, I care about secure, performant server‑side applications and
                  thoughtful database design — the kind that ages well.
                </p>
                <p>
                  I believe great software starts with clean, maintainable code
                  and a deep respect for data. Each project is an excuse to
                  sharpen the craft.
                </p>
                <p>
                  Outside the IDE I read, travel, take photos, and slowly
                  collect moments{SHOW_GALLERY ? " you'll find on the gallery page" : ''}.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-24">
            <SectionTitle eyebrow="What I do" title="Focus areas." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: easeOut, delay: i * 0.05 }}
                  >
                    <SpotlightCard className="h-full p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                          0{i + 1}
                        </span>
                      </div>
                      <h4 className="font-sans font-semibold text-xl tracking-tight text-ink-800 dark:text-paper-100 mb-2">
                        {f.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                        {f.body}
                      </p>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-24">
            <SectionTitle eyebrow="Experience" title="Where I've worked." />
            <Timeline items={experience} />
          </div>

          <SectionTitle eyebrow="Education" title="Where I've studied." />
          <Timeline items={education} />
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;

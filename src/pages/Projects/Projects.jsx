import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { easeOut } from '../../styles/animations';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageWrapper>
      <section className="relative pt-28 pb-24">
        <div className="container-page">
          <SectionTitle
            eyebrow={`${projects.length} projects`}
            title="The work, in order of obsession."
          />

          <ProjectFilter
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="text-center py-20 text-ink-500 dark:text-ink-300 font-mono text-sm uppercase tracking-widest"
            >
              No projects in this category — yet.
            </motion.div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { staggerContainer } from '../../styles/animations';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageWrapper>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="My Projects"
            subtitle="Portfolio"
          />

          <ProjectFilter
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;


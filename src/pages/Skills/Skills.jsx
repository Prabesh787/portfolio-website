import { motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCategory from './SkillCategory';
import { skills } from '../../data/skills';
import { staggerContainer } from '../../styles/animations';

const Skills = () => {
  return (
    <PageWrapper>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="My Skills"
            subtitle="Technologies"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skillCategory, index) => (
              <SkillCategory
                key={index}
                category={skillCategory.category}
                skills={skillCategory.items}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;


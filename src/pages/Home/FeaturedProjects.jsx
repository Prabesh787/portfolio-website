import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import { projects } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../styles/animations';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="My Work"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🚀</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <Badge variant="primary">{project.category}</Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.live}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.github}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          {...fadeInUp}
        >
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;


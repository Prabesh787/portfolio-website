import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/common/Button';
import { fadeInUp } from '../../styles/animations';

const ProjectCard = ({ project }) => {
  return (
    <motion.div {...fadeInUp}>
      <Card className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          {project.image && project.image !== "/placeholder-project.jpg" ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
              <span className="text-6xl opacity-20">🚀</span>
            </div>
          )}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1">
              <Badge variant="primary">Featured</Badge>
            </div>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <Badge variant="default">{project.category}</Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
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
              target="_blank"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              className="flex-1"
              target="_blank"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;


import { motion } from 'framer-motion';
import { projectCategories } from '../../data/projects';

const ProjectFilter = ({ activeCategory, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {projectCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;


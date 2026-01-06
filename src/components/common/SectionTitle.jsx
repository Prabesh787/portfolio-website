import { motion } from 'framer-motion';
import { fadeInUp } from '../../styles/animations';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div 
      className={`text-center mb-12 ${className}`}
      {...fadeInUp}
    >
      {subtitle && (
        <motion.p 
          className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2"
          {...fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
        {...fadeInUp}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="w-24 h-1 bg-primary-600 mx-auto mt-4"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default SectionTitle;


import { motion } from 'framer-motion';
import { fadeIn } from '../../styles/animations';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`min-h-screen ${className}`}
      {...fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;


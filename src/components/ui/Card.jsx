import { motion } from 'framer-motion';
import { fadeInUp } from '../../styles/animations';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
      {...fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;


import { motion } from 'framer-motion';
import { fadeInUp } from '../../styles/animations';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`relative rounded-2xl border border-ink-100 dark:border-ink-700/60 bg-paper-50 dark:bg-ink-800/40 backdrop-blur-sm transition-all duration-500 ease-out ${
        hover ? 'hover:border-ink-300 dark:hover:border-ink-600 hover:-translate-y-0.5' : ''
      } ${className}`}
      {...fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

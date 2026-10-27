import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const RevealText = ({ text, as: Tag = 'span', className = '', delay = 0 }) => {
  const words = String(text).split(' ');
  return (
    <Tag className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] overflow-hidden inline-block">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.05 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default RevealText;

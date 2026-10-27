import { motion } from 'framer-motion';
import { fadeInUp, easeOut } from '../../styles/animations';

const SectionTitle = ({ title, subtitle, eyebrow, align = 'left', className = '' }) => {
  const isCenter = align === 'center';
  return (
    <motion.div
      className={`mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'} ${className}`}
      {...fadeInUp}
    >
      {(subtitle || eyebrow) && (
        <div
          className={`mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-accent-600" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
            {eyebrow || subtitle}
          </span>
        </div>
      )}
      <motion.h2
        className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-ink-800 dark:text-paper-100"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default SectionTitle;

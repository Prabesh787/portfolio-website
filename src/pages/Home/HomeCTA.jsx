import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import { easeOut } from '../../styles/animations';

const HomeCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grain opacity-[0.04]" />
      </div>

      <div className="container-page text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-700 dark:text-accent-400 mb-6"
        >
          — Let's collaborate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-sans font-semibold text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-ink-800 dark:text-paper-100"
        >
          Have a project
          <br />
          <span className="text-ink-500 dark:text-ink-300">in mind?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-ink-600 dark:text-ink-200 max-w-2xl mx-auto text-pretty"
        >
          Whether it's an API to design, a database to untangle, or just a
          conversation about backend craft — my inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/contact">
            <MagneticButton variant="primary" size="lg">
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
          <a href="mailto:pbhattrai88@gmail.com">
            <MagneticButton variant="outline" size="lg">
              pbhattrai88@gmail.com
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;

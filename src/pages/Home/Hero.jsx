import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton';
import RevealText from '../../components/ui/RevealText';
import Marquee from '../../components/ui/Marquee';
import { easeOut } from '../../styles/animations';
import resume from '../../assets/resume/cv.pdf';

const stack = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'REST APIs',
  'Redis',
  'Docker',
  'Node.js',
  'React',
  'MongoDB',
];

const Hero = () => {
  const scrollNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 overflow-hidden">
      {/* code-editor grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-code-grid mask-radial-fade opacity-60 dark:opacity-40" />
        <div className="absolute inset-0 grain opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500 dark:text-ink-300">
            Available for new work · Bhaktapur, Nepal
          </span>
        </motion.div>

        <h1 className="font-hero tracking-tightest leading-[0.95] text-ink-800 dark:text-paper-100 text-[18vw] sm:text-[14vw] md:text-[10rem] lg:text-[12rem]">
          <RevealText text="Prabesh" delay={0.1} />
          <br />
          <span className="italic text-ink-500 dark:text-ink-300">
            <RevealText text="Bhattarai." delay={0.25} />
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
            className="md:col-span-7 max-w-xl"
          >
            <p className="font-mono text-xs tracking-[0.12em] text-ink-500 dark:text-ink-300 mb-4">
              <span className="text-accent-700 dark:text-accent-400">$</span> whoami
              <span className="block mt-1 uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400">
                → Backend engineer · API craftsman
              </span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-ink-600 dark:text-ink-200 text-pretty">
              I architect the unseen logic of the web — building secure,
              high‑performance APIs in Java &amp; Spring Boot, with a quiet
              obsession for clean schemas and readable code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.65 }}
            className="md:col-span-5 flex flex-wrap gap-3 md:justify-end"
          >
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('featured-work')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              View work
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton variant="outline" size="lg" href={resume} target="_blank">
              <FileText className="w-4 h-4" />
              Resume
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <div className="container-page mt-16">
        <Marquee items={stack} />
      </div>

      <button
        onClick={scrollNext}
        className="container-page mt-10 flex items-center gap-3 text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100 transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </button>
    </section>
  );
};

export default Hero;

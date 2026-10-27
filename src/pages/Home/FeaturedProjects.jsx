import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import MagneticButton from '../../components/ui/MagneticButton';
import { projects } from '../../data/projects';
import { easeOut } from '../../styles/animations';

const FeaturedRow = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  // Rows without a live URL render as plain blocks instead of dead links.
  const Wrapper = project.live ? 'a' : 'div';
  const linkProps = project.live
    ? { href: project.live, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  const showVisit = hovered && Boolean(project.live);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: easeOut, delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative border-t border-ink-100 dark:border-ink-700/50"
    >
      <Wrapper
        {...linkProps}
        className="grid grid-cols-12 gap-4 py-8 md:py-10"
      >
        <div className="col-span-1 hidden md:block">
          <span className="font-mono text-xs text-ink-400 dark:text-ink-300">
            0{index + 1}
          </span>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h3 className="font-sans font-semibold text-2xl md:text-4xl tracking-tight leading-tight text-ink-800 dark:text-paper-100">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-ink-600 dark:text-ink-200 text-pretty leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-300 px-2 py-0.5 border border-ink-200 dark:border-ink-700/60 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex md:justify-end items-center">
          <div className="relative w-full md:w-72 aspect-[4/3] overflow-hidden rounded-xl border border-ink-100 dark:border-ink-700/60 bg-paper-200 dark:bg-ink-800/40">
            {project.image && project.image !== '/placeholder-project.jpg' ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: easeOut }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent-200 via-paper-200 to-accent-100 dark:from-accent-900/30 dark:via-ink-800 dark:to-accent-900/20" />
            )}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-ink-900/0"
              animate={{ backgroundColor: showVisit ? 'rgba(10,12,11,0.45)' : 'rgba(10,12,11,0)' }}
            >
              <motion.span
                animate={{
                  opacity: showVisit ? 1 : 0,
                  scale: showVisit ? 1 : 0.85,
                }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-100 text-ink-800 font-mono text-[11px] uppercase tracking-widest"
              >
                Visit <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="featured-work" className="relative py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionTitle eyebrow="Selected work" title="A few things I'm proud of." />
          <Link
            to="/projects"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 link-underline self-start md:self-auto"
          >
            All projects →
          </Link>
        </div>

        <div className="border-b border-ink-100 dark:border-ink-700/50">
          {featured.map((p, i) => (
            <FeaturedRow key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <Link to="/projects">
            <MagneticButton variant="outline" size="md">
              <Github className="w-4 h-4" />
              Browse all projects
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import SectionTitle from '../../components/common/SectionTitle';
import { galleryEvents } from '../../data/newGallery';
import { easeOut } from '../../styles/animations';

const GalleryPreview = () => {
  const [hover, setHover] = useState(null);
  const events = galleryEvents.slice(0, 3);

  return (
    <section className="relative py-24 md:py-32 bg-paper-200/50 dark:bg-ink-950/40 border-y border-ink-100 dark:border-ink-700/40">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionTitle eyebrow="Off the keyboard" title="Memories &amp; moments." />
          <Link
            to="/gallery"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 link-underline"
          >
            View gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.06 }}
              onHoverStart={() => setHover(ev.id)}
              onHoverEnd={() => setHover(null)}
              className="group relative"
            >
              <Link
                to="/gallery"
                className="block relative overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-700/60 aspect-[4/5]"
              >
                {ev.thumbnail ? (
                  <motion.img
                    src={ev.thumbnail}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hover === ev.id ? 1.05 : 1 }}
                    transition={{ duration: 0.7, ease: easeOut }}
                  />
                ) : (
                  <div className="w-full h-full bg-paper-300 dark:bg-ink-800 flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-ink-400" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent text-paper-100">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                        {ev.date}
                      </p>
                      <h3 className="font-sans font-semibold text-xl tracking-tight leading-tight mt-1">
                        {ev.title}
                      </h3>
                    </div>
                    <motion.span
                      animate={{
                        x: hover === ev.id ? 0 : 4,
                        opacity: hover === ev.id ? 1 : 0.7,
                      }}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-paper-100 text-ink-800"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

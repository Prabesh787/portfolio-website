import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionTitle from '../components/common/SectionTitle';
import { galleryEvents } from '../data/newGallery';
import { easeOut } from '../styles/animations';

const GalleryPage = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onImgError = (id) => setImageErrors((p) => ({ ...p, [id]: true }));

  return (
    <PageWrapper>
      <section className="relative pt-28 pb-24">
        <div className="container-page">
          <SectionTitle
            eyebrow={selectedEvent ? selectedEvent.date : 'Gallery'}
            title={selectedEvent ? selectedEvent.title : 'Trips, events &amp; in‑between.'}
          />

          <AnimatePresence mode="wait">
            {selectedEvent ? (
              <motion.div
                key="event-detail"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="group inline-flex items-center gap-2 mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Back to events
                </button>

                <p className="max-w-2xl text-ink-600 dark:text-ink-200 mb-10 leading-relaxed">
                  {selectedEvent.shortDescription}
                </p>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                  {selectedEvent.images.map((image, i) => (
                    <motion.figure
                      key={image.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: easeOut, delay: i * 0.05 }}
                      className="mb-4 break-inside-avoid relative group overflow-hidden rounded-xl border border-ink-100 dark:border-ink-700/60"
                    >
                      {!imageErrors[image.id] ? (
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto block"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.7, ease: easeOut }}
                          onError={() => onImgError(image.id)}
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-paper-200 dark:bg-ink-800 flex items-center justify-center">
                          <ImageIcon className="w-10 h-10 text-ink-400" />
                        </div>
                      )}
                      <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink-900/80 to-transparent text-paper-100 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.alt}
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="event-grid"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                {galleryEvents.length === 0 ? (
                  <div className="text-center py-20 text-ink-500 dark:text-ink-300 font-mono text-sm uppercase tracking-widest">
                    No events yet — start adding memories.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {galleryEvents.map((event, i) => (
                      <motion.button
                        key={event.id}
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: easeOut, delay: i * 0.05 }}
                        whileHover={{ y: -3 }}
                        className="group text-left relative overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-700/60 bg-paper-50 dark:bg-ink-800/40"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-paper-200 dark:bg-ink-800/60">
                          {!imageErrors[event.id] ? (
                            <motion.img
                              src={event.thumbnail}
                              alt={event.title}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.7, ease: easeOut }}
                              onError={() => onImgError(event.id)}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ImageIcon className="w-10 h-10 text-ink-400" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex items-end justify-between gap-3">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 dark:text-ink-300 mb-1">
                              {event.date} · {event.images.length} photos
                            </p>
                            <h3 className="font-sans font-semibold text-xl tracking-tight text-ink-800 dark:text-paper-100 leading-tight">
                              {event.title}
                            </h3>
                          </div>
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 dark:border-ink-700/60 text-ink-600 dark:text-ink-200 group-hover:bg-ink-800 group-hover:text-paper-100 dark:group-hover:bg-paper-100 dark:group-hover:text-ink-900 transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
};

export default GalleryPage;

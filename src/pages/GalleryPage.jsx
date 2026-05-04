import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Card from '../components/ui/Card';
import SectionTitle from '../components/common/SectionTitle';
import { fadeInUp, staggerContainer } from '../styles/animations';
import { galleryEvents, galleryCategories } from '../data/newGallery'; // Import the new gallery events

const GalleryPage = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null); // State to manage selected event

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <PageWrapper>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="My Photo Gallery"
            subtitle="Memories from Trips and Events"
          />

          {selectedEvent ? (
            // Display images for the selected event
            <div>
              <button
                onClick={handleBackToEvents}
                className="mb-8 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                &larr; Back to Events
              </button>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{selectedEvent.shortDescription}</p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {selectedEvent.images.map((image) => (
                  <motion.div key={image.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        {!imageErrors[image.id] ? (
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-cover"
                            onError={() => handleImageError(image.id)}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p className="text-sm">Image not available</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <h3 className="font-bold text-lg mb-2">{image.alt}</h3>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ) : (
            // Display event thumbnails
            galleryEvents.length === 0 ? (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                <p className="text-lg">No events yet. Start adding your memories!</p>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {galleryEvents.map((event) => (
                  <motion.div key={event.id} variants={fadeInUp} onClick={() => handleEventClick(event)}>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="relative">
                        {!imageErrors[event.id] ? (
                          <img
                            src={event.thumbnail}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                            onError={() => handleImageError(event.id)}
                          />
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p className="text-sm">Thumbnail not available</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                            <p className="text-sm opacity-90">{event.shortDescription}</p>
                            <p className="text-xs mt-2 opacity-75">{event.date}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default GalleryPage;

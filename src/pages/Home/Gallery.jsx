import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import SectionTitle from '../../components/common/SectionTitle';
import { galleryItems } from '../../data/gallery';
import { fadeInUp, staggerContainer } from '../../styles/animations';

const Gallery = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Gallery"
          subtitle="My Journey Through Pictures"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {galleryItems.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                      onError={() => handleImageError(item.id)}
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
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                      <p className="text-xs mt-2 opacity-75">{item.date}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
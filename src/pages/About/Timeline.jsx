import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../styles/animations';

const Timeline = () => {
  const timelineItems = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Company',
      description: 'Leading development of modern web applications and mentoring junior developers.',
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built scalable applications using React, Node.js, and cloud technologies.',
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Started my journey in web development, working on various client projects.',
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University',
      description: 'Graduated with a Bachelor\'s degree in Computer Science.',
    },
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700"></div>

      <motion.div
        className="space-y-12"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-20"
            variants={fadeInUp}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                {item.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;


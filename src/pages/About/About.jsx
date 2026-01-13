import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Timeline from './Timeline';
import { fadeInUp } from '../../styles/animations';
import { profilePic } from '../../assets/images/images';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  return (
    <PageWrapper>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Me"
            subtitle="Get to Know Me"
          />

          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-600 shadow-lg">
              {!imageError ? (
                <img 
                  src={profilePic} 
                  alt="Prabesh Bhattarai" 
                  className="w-full h-full object-cover" 
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                />
              ) : null}
              {(!imageLoaded && !imageError) && (
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-full"></div>
              )}
              {imageError && (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                </div>
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Prabesh Bhattarai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Backend Developer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div {...fadeInUp}>
              <Card>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Who I Am
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    I am an aspiring Backend Engineer and current Intern with a passion for architecting the 'unseen' logic of the web. Currently, I am focused on mastering Java and the Spring Boot ecosystem to build secure, high-performance server-side applications.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    I believe that great software starts with clean, maintainable code and a deep understanding of database design. Every project is a new opportunity for me to solve complex problems and refine my technical craft.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I believe in writing maintainable code, following best practices, and always
                    learning something new. Every project is an opportunity to grow and improve.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    What I Do
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Backend Development
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                         Specializing in Java & Spring Boot to build secure, scalable APIs and the "unseen" logic that ensures application reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Database Architecture
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Designing and optimizing SQL database schemas, focusing on data integrity, efficient queries, and high-performance storage.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Frontend Exploration
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Expanding my skills in modern UI technologies to understand the full lifecycle of a request and build seamless end-to-end experiences.
                        </p>
                      </div>
                    </div>
                      <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          AI & Machine Learning
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Powering the future. I am exploring ML algorithms and data models to integrate intelligent, automated features into traditional software systems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Continuous Learning
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Actively exploring modern backend trends, from microservices to cloud-native development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              My Journey
            </h3>
            <Timeline />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;


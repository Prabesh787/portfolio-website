import { motion } from 'framer-motion';
import PageWrapper from '../../components/layout/PageWrapper';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Timeline from './Timeline';
import { fadeInUp } from '../../styles/animations';

const About = () => {
  return (
    <PageWrapper>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Me"
            subtitle="Get to Know Me"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div {...fadeInUp}>
              <Card>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Who I Am
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    I'm a passionate full-stack developer with a love for creating beautiful,
                    functional web applications. With years of experience in modern web technologies,
                    I bring ideas to life through clean code and thoughtful design.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing knowledge with the developer community.
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
                          Web Development
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Building responsive and interactive web applications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          UI/UX Design
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Creating intuitive and visually appealing user interfaces
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Backend Development
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Developing robust APIs and server-side solutions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Problem Solving
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Finding elegant solutions to complex challenges
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


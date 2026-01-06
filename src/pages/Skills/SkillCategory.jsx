import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';
import { fadeInUp } from '../../styles/animations';

const SkillCategory = ({ category, skills }) => {
  return (
    <motion.div {...fadeInUp}>
      <Card>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {category}
          </h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCategory;


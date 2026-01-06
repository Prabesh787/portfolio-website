import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import { fadeInUp } from '../../styles/animations';

const HomeCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link to="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="group"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;


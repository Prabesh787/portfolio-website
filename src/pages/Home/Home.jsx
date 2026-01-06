import PageWrapper from '../../components/layout/PageWrapper';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import HomeCTA from './HomeCTA';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      <HomeCTA />
    </PageWrapper>
  );
};

export default Home;


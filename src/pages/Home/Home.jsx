import PageWrapper from '../../components/layout/PageWrapper';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import Gallery from './Gallery';
import HomeCTA from './HomeCTA';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      <Gallery />
      <HomeCTA />
    </PageWrapper>
  );
};

export default Home;

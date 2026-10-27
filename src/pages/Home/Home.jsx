import PageWrapper from '../../components/layout/PageWrapper';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import Gallery from './Gallery';
import HomeCTA from './HomeCTA';
import { SHOW_GALLERY } from '../../utils/constants';

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedProjects />
      {SHOW_GALLERY && <Gallery />}
      <HomeCTA />
    </PageWrapper>
  );
};

export default Home;

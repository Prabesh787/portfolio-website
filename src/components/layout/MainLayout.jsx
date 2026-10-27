import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const MainLayout = () => {
  useScrollToTop();

  return (
    <div className="relative min-h-screen flex flex-col bg-paper-100 dark:bg-ink-900 text-ink-800 dark:text-paper-100 selection:bg-accent-600/20">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

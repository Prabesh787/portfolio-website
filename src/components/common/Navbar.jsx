import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { useTheme } from '../../hooks/useTheme';
import { signature } from '../../assets/images/images';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-paper-100/80 dark:bg-ink-900/70 backdrop-blur-xl border-b border-ink-100/60 dark:border-ink-700/40'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group flex items-center gap-3">
            <motion.img
              src={signature}
              alt="Prabesh Bhattarai"
              className="h-10 dark:invert opacity-90 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active
                      ? 'text-ink-800 dark:text-paper-100'
                      : 'text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-paper-200 dark:bg-ink-800/80 border border-ink-100 dark:border-ink-700/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <span className="mx-2 h-5 w-px bg-ink-200 dark:bg-ink-700/60" />

            <SocialLinks className="hidden lg:flex" />

            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {theme === 'light' ? (
                    <Moon className="w-[18px] h-[18px]" />
                  ) : (
                    <Sun className="w-[18px] h-[18px]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-ink-600 dark:text-ink-200 hover:bg-paper-200 dark:hover:bg-ink-800/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-ink-600 dark:text-ink-200 hover:bg-paper-200 dark:hover:bg-ink-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-paper-100 dark:bg-ink-900 border-t border-ink-100 dark:border-ink-700/40"
          >
            <div className="container-page py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl font-mono text-[12px] uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? 'bg-paper-200 dark:bg-ink-800/80 text-ink-800 dark:text-paper-100'
                        : 'text-ink-500 dark:text-ink-300 hover:bg-paper-200/60 dark:hover:bg-ink-800/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-2 pt-3 border-t border-ink-100 dark:border-ink-700/40 flex items-center justify-between px-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 dark:text-ink-300">
                  Find me on
                </span>
                <SocialLinks iconClassName="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

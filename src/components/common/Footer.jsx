import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socials';
import { Mail, ArrowUpRight } from 'lucide-react';
import { socialIcons } from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-100 dark:border-ink-700/40 bg-paper-100 dark:bg-ink-900">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400 mb-3">
              Get in touch
            </p>
            <h3 className="font-sans font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-ink-800 dark:text-paper-100">
              Have an idea?
              <br />
              <span className="text-ink-500 dark:text-ink-300">Let's build it.</span>
            </h3>
            <a
              href="mailto:pbhattrai88@gmail.com"
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-ink-700 dark:text-paper-200 link-underline"
            >
              pbhattrai88@gmail.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 mb-4">
              Sitemap
            </p>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Projects', '/projects'],
                ['Skills', '/skills'],
                ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-ink-600 dark:text-ink-200 hover:text-ink-800 dark:hover:text-paper-100 link-underline text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon] || Mail;
                return (
                  <li key={s.name}>
                    <motion.a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-1 text-ink-600 dark:text-ink-200 hover:text-ink-800 dark:hover:text-paper-100 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        {s.name}
                        <span className="font-mono text-[11px] text-ink-400 dark:text-ink-400">
                          {s.handle}
                        </span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-100 dark:border-ink-700/40 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
            © {currentYear} Prabesh Bhattarai · Crafted in Bhaktapur
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
            v2 · warm · tech · minimal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Mail } from 'lucide-react';
import { profileLinks } from '../../data/socials';

export const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const SocialLinks = ({ links = profileLinks, className = '', iconClassName = 'w-[18px] h-[18px]' }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map((s) => {
        const Icon = socialIcons[s.icon] || Mail;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className="p-2 rounded-full text-ink-500 dark:text-ink-300 hover:text-ink-800 dark:hover:text-paper-100 hover:bg-paper-200 dark:hover:bg-ink-800/60 transition-colors"
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

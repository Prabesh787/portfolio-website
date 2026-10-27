import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { socialIcons } from '../../components/common/SocialLinks';
import { profileLinks } from '../../data/socials';
import MagneticButton from '../../components/ui/MagneticButton';
import { easeOut } from '../../styles/animations';

const fields = [
  { id: 'name', label: 'Your name', type: 'text', placeholder: 'Prabesh Bhattarai' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@somewhere.io' },
  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'A short headline' },
];

const ContactForm = () => {
  const [data, setData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setData({ name: '', email: '', subject: '', message: '' });
  };

  const info = [
    { icon: Mail, label: 'Email', value: 'pbhattrai88@gmail.com', href: 'mailto:pbhattrai88@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+977 9825326657', href: 'tel:+9779825326657' },
    ...profileLinks.map((s) => ({
      icon: socialIcons[s.icon],
      label: s.name,
      value: s.handle,
      href: s.url,
      external: true,
    })),
    { icon: MapPin, label: 'Location', value: 'Bhaktapur, Nepal' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4">
      <motion.aside
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="lg:col-span-5"
      >
        <p className="font-sans font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-ink-800 dark:text-paper-100 mb-6">
          Whether it's a job, a freelance gig, or just a hello —{' '}
          <span className="text-ink-500 dark:text-ink-300">
            I'd love to hear it.
          </span>
        </p>
        <p className="text-ink-600 dark:text-ink-200 leading-relaxed mb-10 max-w-md">
          Replies come within a day or two. Pick whatever channel fits.
        </p>

        <ul className="divide-y divide-ink-100 dark:divide-ink-700/40 border-y border-ink-100 dark:border-ink-700/40">
          {info.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group flex items-center justify-between py-4"
                >
                  <span className="flex items-center gap-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                        {label}
                      </span>
                      <span className="block text-ink-800 dark:text-paper-100 font-medium">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 dark:text-ink-300 group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div className="flex items-center gap-4 py-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
                      {label}
                    </span>
                    <span className="block text-ink-800 dark:text-paper-100 font-medium">
                      {value}
                    </span>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </motion.aside>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
        className="lg:col-span-7 rounded-2xl border border-ink-100 dark:border-ink-700/60 bg-paper-50 dark:bg-ink-800/40 p-6 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((f, i) => (
            <div
              key={f.id}
              className={f.id === 'subject' ? 'md:col-span-2' : ''}
            >
              <label
                htmlFor={f.id}
                className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 mb-2"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                value={data[f.id]}
                onChange={handleChange}
                placeholder={f.placeholder}
                required
                className="w-full bg-transparent border-b border-ink-200 dark:border-ink-700/60 py-2 text-ink-800 dark:text-paper-100 placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-accent-600 transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={data.message}
            onChange={handleChange}
            placeholder="Sketch out the idea, the timeline, the constraints — whatever helps."
            required
            className="w-full bg-transparent border-b border-ink-200 dark:border-ink-700/60 py-2 text-ink-800 dark:text-paper-100 placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-accent-600 transition-colors resize-none"
          />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400 dark:text-ink-300">
            {sent ? '— Message queued · thanks' : '— Encrypted in transit'}
          </p>
          <MagneticButton type="submit" variant="primary" size="md">
            <Send className="w-4 h-4" />
            Send message
          </MagneticButton>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;

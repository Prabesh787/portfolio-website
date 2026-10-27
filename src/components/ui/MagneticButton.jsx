import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({
  children,
  as: Tag = 'button',
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const variants = {
    primary:
      'bg-ink-800 text-paper-100 hover:bg-ink-700 dark:bg-paper-100 dark:text-ink-900 dark:hover:bg-paper-200',
    accent:
      'bg-accent-600 text-paper-100 hover:bg-accent-700',
    ghost:
      'bg-transparent text-ink-800 dark:text-paper-100 hover:bg-ink-100/60 dark:hover:bg-ink-800/60',
    outline:
      'border border-ink-800/20 dark:border-paper-100/20 text-ink-800 dark:text-paper-100 hover:border-ink-800/60 dark:hover:border-paper-100/60',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const cls = `relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      className="relative z-10 inline-flex items-center gap-2"
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
    >
      {children}
    </motion.span>
  );

  if (href || Tag === 'a') {
    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cls}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.4 }}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={cls}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.4 }}
      {...rest}
    >
      {content}
    </motion.button>
  );
};

export default MagneticButton;
